document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

      const res = await fetch('https://safegoalstats-api-production.up.railway.app/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("token", data.token);

        alert("Login correcto");

        window.location.href = "/";

      } else {
        alert(data.mensaje || "Error en login");
      }

    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }

  });

});
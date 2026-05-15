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

      // Primero obtenemos el texto crudo para debug
      const text = await res.text();
      console.log("RESPUESTA RAW DEL SERVIDOR:", text);

      let data;
      try {
        data = JSON.parse(text); // intentamos parsear JSON
      } catch (err) {
        console.error("No es JSON válido:", err);
        alert("Error: el servidor no respondió JSON. Revisa la URL del fetch.");
        return;
      }

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login correcto");
        window.location.href = "/";
      } else {
        alert(data.mensaje || "Error en login");
      }

    } catch (error) {
      console.error("Error de conexión con el servidor:", error);
      alert("Error de conexión con el servidor");
    }

  });

});
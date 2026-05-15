function getToken() {
  return localStorage.getItem("token");
}

function isLogged() {
  return !!localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/";
}

window.addEventListener("load", () => {

  const navAuth = document.getElementById("nav-auth");

  if (!navAuth) return;

  const token = getToken();

  if (token) {

    navAuth.innerHTML = `
      <a href="#" id="logout-btn" class="registro">Logout</a>
    `;

    document
      .getElementById("logout-btn")
      .addEventListener("click", logout);

  } else {

    navAuth.innerHTML = `
      <a href="/pages/login.html" class="registro">Login</a>
      <a href="/pages/registro.html" class="registro">Registro</a>
    `;

  }

});
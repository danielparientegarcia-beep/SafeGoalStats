/*
=========================
AUTH.JS
Control de sesión
=========================
*/


// Obtener token guardado
function getToken() {
  return localStorage.getItem("token");
}


// Saber si hay sesión iniciada
function isLogged() {
  return !!localStorage.getItem("token");
}


// Cerrar sesión
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/safegoalstats/index.html";
}


// Pintar menú Login / Registro / Logout
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
      <a href="/safegoalstats/pages/login.html" class="registro">Login</a>
      <a href="/safegoalstats/pages/registro.html" class="registro">Registro</a>
    `;

  }

});
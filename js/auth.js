// Obtener token guardado
function getToken() {
  return localStorage.getItem("token");
}

// Comprobar si está logueado
function isLogged() {
  return !!localStorage.getItem("token");
}

// Cerrar sesión
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/safegoalstats/pages/login.html";
}
window.addEventListener("load", () => {

  const navAuth = document.getElementById("nav-auth");
  if (!navAuth) return;

  const token = localStorage.getItem("token");

  if (token) {
    navAuth.innerHTML = `
      <a href="#" id="logout-btn" class="registro">Logout</a>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "/safegoalstats/index.html";
    });

  } else {
   navAuth.innerHTML = `
  <a href="/safegoalstats/pages/login.html" class="registro">Login</a>
  <a href="/safegoalstats/pages/registro.html" class="registro">Registro</a>
`;
  }

});
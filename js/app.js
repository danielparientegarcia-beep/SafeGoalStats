console.log("SafeGoalStats cargado correctamente");

// =======================
// UTILIDAD TABLA (SI EXISTE)
// =======================
function ordenarTabla() {
  const tabla = document.getElementById("tablaLiga");
  if (!tabla) return;

  const filas = Array.from(tabla.rows).slice(1);

  filas.sort((a, b) => {
    return (b.cells[5]?.innerText || 0) - (a.cells[5]?.innerText || 0);
  });

  filas.forEach(fila => tabla.appendChild(fila));
}

// =======================
// TEMA (CLARO / OSCURO)
// =======================
function aplicarTema() {
  const tema = localStorage.getItem("tema") || "oscuro";
  if (tema === "claro") {
    document.body.classList.add("claro");
  } else {
    document.body.classList.remove("claro");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTema();

  const botonModo = document.getElementById("modoToggle");

  if (botonModo) {
    botonModo.addEventListener("click", () => {
      const esClaro = document.body.classList.toggle("claro");

      localStorage.setItem("tema", esClaro ? "claro" : "oscuro");

      botonModo.textContent = esClaro ? "☀️" : "🌙";
    });
  }

  // =======================
  // NAV ACTIVO
  // =======================
  const links = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const limpio = href.replace("../", "").replace("pages/", "");

    if (currentPath.includes(limpio)) {
      link.classList.add("activo");
    }
  });

  // =======================
  // NAV AUTH (LOGIN/LOGOUT)
  // =======================
  const navAuth = document.getElementById("nav-auth");

  if (navAuth) {
    const token = localStorage.getItem("token");

    if (token) {
      navAuth.innerHTML = `
        <a href="#" id="logout-btn" class="registro">Logout</a>
      `;

      document.getElementById("logout-btn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "/";
      });
    } else {
      navAuth.innerHTML = `
        <a href="/pages/login.html" class="registro">Login</a>
        <a href="/pages/registro.html" class="registro">Registro</a>
      `;
    }
  }
});

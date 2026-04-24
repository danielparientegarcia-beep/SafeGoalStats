console.log("SafeGoalStats cargado correctamente");

function ordenarTabla() {
  const tabla = document.getElementById("tablaLiga");
  const filas = Array.from(tabla.rows).slice(1);

  filas.sort((a, b) => {
    return b.cells[5].innerText - a.cells[5].innerText;
  });

  filas.forEach(fila => tabla.appendChild(fila));
}

// =======================
// DETECTAR TEMA SISTEMA
// =======================

const temaGuardado = localStorage.getItem("tema");

if(!temaGuardado){
  if(window.matchMedia("(prefers-color-scheme: light)").matches){
    document.body.classList.add("claro");
  }
}

// Detectar página activa correctamente
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  const linkHref = link.getAttribute("href");

  if (!linkHref) return;

  const currentPath = window.location.pathname;

  if (currentPath.includes(linkHref.replace("../", "").replace("pages/", ""))) {
    link.classList.add("activo");
  }
});
// =================
// MODO OSCURO / CLARO
// =================

const botonModo = document.getElementById("modoToggle");

// cargar preferencia guardada
if(localStorage.getItem("tema") === "claro"){
  document.body.classList.add("claro");
  if(botonModo) botonModo.textContent="☀️";
}

// toggle
if(botonModo){
  botonModo.addEventListener("click", ()=>{
    document.body.classList.toggle("claro");

    if(document.body.classList.contains("claro")){
      localStorage.setItem("tema","claro");
      botonModo.textContent="☀️";
    }else{
      localStorage.setItem("tema","oscuro");
      botonModo.textContent="🌙";
    }
  });
}

// ===========================
// TRANSICION ENTRE PAGINAS
// ===========================

document.addEventListener("click", function(e){
  const link = e.target.closest("a");

  if (!link) return;

  const destino = link.getAttribute("href");

  if(!destino || destino.startsWith("#") || destino.startsWith("http"))
    return;

  e.preventDefault();

  document.body.classList.add("fade-out");

  setTimeout(()=>{
    window.location.href = destino;
  }, 300);
});

window.addEventListener("pageshow", ()=>{
  document.body.classList.remove("fade-out");
});

document.addEventListener('DOMContentLoaded', () => {
  const tema = localStorage.getItem('tema') || 'oscuro';
  if (tema === 'claro') document.body.classList.add('claro');
  document.body.style.opacity = 1; // se muestra solo cuando la clase ya está aplicada
});

document.addEventListener('DOMContentLoaded', () => {
  const tema = localStorage.getItem('tema') || 'oscuro';

  if (tema === 'claro') document.body.classList.add('claro');

  // Mostrar la página solo cuando ya está aplicada la clase
  document.body.style.opacity = 1;
});
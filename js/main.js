document.addEventListener("DOMContentLoaded", function () {

  const btnTema = document.getElementById("toggleTema");

  // Aplicar tema guardado
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "claro") {
    document.body.classList.add("claro");
  }

  // Evento botón
  if (btnTema) {
    btnTema.addEventListener("click", function () {
      document.body.classList.toggle("claro");

      const modoActual = document.body.classList.contains("claro")
        ? "claro"
        : "oscuro";

      localStorage.setItem("tema", modoActual);
    });
  }

  // Quitar opacity si la usas
  document.body.style.opacity = "1";

});
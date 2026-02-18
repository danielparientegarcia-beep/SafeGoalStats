console.log("SafeGoalStats cargado correctamente");
alert("Bienvenido a SafeGoalStats");

function ordenarTabla() {
  const tabla = document.getElementById("tablaLiga");
  const filas = Array.from(tabla.rows).slice(1);

  filas.sort((a, b) => {
    return b.cells[5].innerText - a.cells[5].innerText;
  });

  filas.forEach(fila => tabla.appendChild(fila));
}

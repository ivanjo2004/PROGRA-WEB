
document.addEventListener("DOMContentLoaded", function () {
  const botonesComprar = document.querySelectorAll(".comprar");
  const borrarBotones = document.querySelectorAll('.borrar');
  const totalElemento = document.getElementById("total");
  let total = 0;

  botonesComprar.forEach((boton) => {
      boton.addEventListener("click", function () {
          const precio = parseFloat(boton.getAttribute("data-precio"));
          total += precio;
          totalElemento.textContent = `$${total.toFixed(2)}`;
      });
  });

  borrarBotones.forEach((boton) => {
      boton.addEventListener("click", function () {
          const precio = parseFloat(boton.getAttribute("data-precio"));
          total -= precio;
          totalElemento.textContent = `$${total.toFixed(2)}`;
      });
  });
});
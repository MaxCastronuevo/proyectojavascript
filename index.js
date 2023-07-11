let carrito = [];
let total = 0;

function agregarAlCarrito(productoId) {
  let producto = {};
  
  switch (productoId) {
    case 1:
      producto.nombre = "Camiseta";
      producto.precio = 3000;
      break;
    case 2:
      producto.nombre = "Pantalon Jean";
      producto.precio = 4000;
      break;
    case 3:
      producto.nombre = "Zapatos";
      producto.precio = 9000;
      break;
    default:
      break;
  }
  
  carrito.push(producto);
  total += producto.precio;
  
  actualizarCarrito();
}

function actualizarCarrito() {
  let carritoElement = document.getElementById("carrito");
  let totalElement = document.getElementById("total");
  
  carritoElement.innerHTML = "";
  
  carrito.forEach(function (producto) {
    let li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio;
    carritoElement.appendChild(li);
  });
  
  totalElement.textContent = "$" + total;
  
  const totalConDescuento = calcularDescuento(total);
  totalElement.textContent = "$" + totalConDescuento;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  
  actualizarCarrito();
}

const botones = document.getElementsByClassName("producto");
Array.from(botones).forEach(function(boton) {
  boton.addEventListener("click", function() {
    var productoId = parseInt(this.getAttribute("data-producto-id"));
    agregarAlCarrito(productoId);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  function crearEventoClick(elemento, callback) {
    elemento.addEventListener("click", callback);
  }

  let btnProducto1 = document.getElementById("btn-producto-1");
  crearEventoClick(btnProducto1, function() {
    agregarAlCarrito(1);
  });

  let btnProducto2 = document.getElementById("btn-producto-2");
  crearEventoClick(btnProducto2, function() {
    agregarAlCarrito(2);
  });

  let btnProducto3 = document.getElementById("btn-producto-3");
  crearEventoClick(btnProducto3, function() {
    agregarAlCarrito(3);
  });

  let btnVaciarCarrito = document.getElementById("btn-vaciarCarrito");
  crearEventoClick(btnVaciarCarrito, vaciarCarrito);
});

function calcularDescuento(total) {
  const descuento = total > 25000 ? total * 0.05 : 0;
  const totalConDescuento = total - descuento;
  
  const descuentoElement = document.getElementById("descuento");
  descuentoElement.textContent = "$" + descuento.toFixed(2);
  
  return totalConDescuento;
}






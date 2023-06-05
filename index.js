function solicitarNombre() {
    return prompt("Por favor, ingrese su nombre:");
  }
  
    function mostrarProductos() {
    console.log("Productos disponibles:");
    console.log("1. Camiseta - $2000");
    console.log("2. Pantalón - $4000");
    console.log("3. Zapatos - $9000");
    return parseInt(prompt("Seleccione un producto o Ingrese 0 para finalizar:"));
  }
  
  function calcularCostoTotal() {
    let nombreUsuario = solicitarNombre();
    let productoSeleccionado;
    let costoTotal = 0;
  
    do {
      productoSeleccionado = mostrarProductos();
  
      switch (productoSeleccionado) {
        case 1:
          costoTotal += 2000;
          console.log("Has seleccionado una camiseta.");
          break;
        case 2:
          costoTotal += 4000;
          console.log("Has seleccionado un pantalón.");
          break;
        case 3:
          costoTotal += 9000;
          console.log("Has seleccionado unos zapatos.");
          break;
        case 0:
          console.log("Finalizando la selección de productos.");
          break;
        default:
          console.log("Opción inválida.");
          break;
      }
    } while (productoSeleccionado !== 0);
  
    console.log("Costo total de los productos seleccionados por " + nombreUsuario + ": $" + costoTotal);
  }
  
  calcularCostoTotal();
  
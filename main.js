const vinos = [
  { nombre: "Atardecer 1", precio: 1000 },
  { nombre: "Atardecer 2", precio: 1500 },
  { nombre: "Atardecer 3", precio: 2200 },
  { nombre: "Atardecer 4", precio: 2400 },
  { nombre: "Atardecer 5", precio: 2500 },
  { nombre: "Atardecer 6", precio: 2000 }
];

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("ape");
const emailInput = document.getElementById("mail");
const telefonoInput = document.getElementById("cel");
const vinosSelect = document.getElementById("vino");
const cantidadInput = document.getElementById("cant");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const email = emailInput.value;
  const telefono = telefonoInput.value;
  const vinoSeleccionado = vinosSelect.value;
  const cantidad = cantidadInput.value;

  // Validar que se haya ingresado una cantidad válida (1-6)
  if (cantidad < 1 || cantidad > 6) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La cantidad debe estar entre 1 y 6.'
    });
    return;
  }

  // Calcular el precio del vino seleccionado
  const vinoSeleccionadoInfo = vinos.find(vino => vino.nombre === vinoSeleccionado);
  if (!vinoSeleccionadoInfo) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El vino seleccionado no es válido.'
    });
    return;
  }
  const precioVino = vinoSeleccionadoInfo.precio;

  // Calcular el precio total incluyendo el IVA (por ejemplo, 10% de IVA)
  const iva = 0.21; // Cambiado a 10% de IVA
  const precioSinIva = precioVino * cantidad;
  const precioTotal = precioSinIva * (1 + iva);

  // Mostrar una alerta con los detalles del pedido, incluyendo el precio total
  Swal.fire({
    icon: 'success',
    title: 'Pedido Realizado',
    html: `Nombre: ${nombre} ${apellido}<br>Email: ${email}<br>Teléfono: ${telefono}<br>Vino: ${vinoSeleccionado}<br>Cantidad: ${cantidad}<br>Precio del Vino: $${precioVino}<br>Total (con IVA): $${precioTotal.toFixed(2)}`
  });

  // Cargar usuarios existentes del Local Storage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) ;

  // Crear el pedido
  const pedido = {
    nombre,
    apellido,
    email,
    telefono,
    vino: vinoSeleccionado,
    cantidad,
    precioTotal // Agregar el precio total al pedido
  };

  // Agregar el pedido al array de usuarios
  usuarios.push(pedido);

  // Guardar el array de usuarios en el Local Storage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Limpia el formulario
  nombreInput.value = '';
  apellidoInput.value = '';
  emailInput.value = '';
  telefonoInput.value = '';
  cantidadInput.value = '';
});



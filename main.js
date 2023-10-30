/* const vinos = [
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
    console.error('Error: La cantidad debe estar entre 1 y 6.');
    return;
  }

  // Calcular el precio del vino seleccionado
  const vinoSeleccionadoInfo = vinos.find(vino => vino.nombre === vinoSeleccionado);
  if (!vinoSeleccionadoInfo) {
    console.error('Error: El vino seleccionado no es válido.');
    return;
  }
  const precioVino = vinoSeleccionadoInfo.precio;

  // Calcular el precio total incluyendo el IVA (por ejemplo, 10% de IVA)
  const iva = 0.21; // Cambiado a 10% de IVA
  const precioSinIva = precioVino * cantidad;
  const precioTotal = precioSinIva * (1 + iva);

  // Mostrar una alerta con los detalles del pedido, incluyendo el precio total
  console.log('Pedido Realizado');
  console.log(`Nombre: ${nombre} ${apellido}`);
  console.log(`Email: ${email}`);
  console.log(`Teléfono: ${telefono}`);
  console.log(`Vino: ${vinoSeleccionado}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Precio del Vino: $${precioVino}`);
  console.log(`Total (con IVA): $${precioTotal.toFixed(2)}`);

  // Cargar usuarios existentes del Local Storage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

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
 */

// JavaScript (main.js)
document.addEventListener("DOMContentLoaded", function () {
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
  const contrasenaInput = document.getElementById("contra");
  const recontrasenaInput = document.getElementById("recontra");
  const vinosSelect = document.getElementById("vino");
  const cantidadInput = document.getElementById("cant");
  const botonRegistro = document.getElementById("Guardar");
  const botonPedido = document.getElementById("boton");

  // Manejar el evento de registro
  botonRegistro.addEventListener("click", function () {
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const email = emailInput.value;
      const contrasena = contrasenaInput.value;
      const recontrasena = recontrasenaInput.value;

      // Verificar si las contraseñas coinciden
      if (contrasena !== recontrasena) {
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Las contraseñas no coinciden.',
          });
          return;
      }

      // Crear un objeto de usuario
      const usuario = {
          nombre,
          apellido,
          email,
          contrasena, // Aquí podrías almacenar la contraseña si es necesario
      };

      // Guardar el objeto de usuario en el Local Storage
      localStorage.setItem('usuario', JSON.stringify(usuario));

      // Limpiar los campos del formulario de registro
      nombreInput.value = '';
      apellidoInput.value = '';
      emailInput.value = '';
      contrasenaInput.value = '';
      recontrasenaInput.value = '';
  });

  // Manejar el evento de pedido
  botonPedido.addEventListener("click", function () {
      const vinoSeleccionado = vinosSelect.value;
      const cantidad = cantidadInput.value;

      // Validar que se haya ingresado una cantidad válida (1-6)
      if (cantidad < 1 || cantidad > 6) {
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'La cantidad debe estar entre 1 y 6.',
          });
          return;
      }

      // Calcular el precio del vino seleccionado
      const vinoSeleccionadoInfo = vinos.find(vino => vino.nombre === vinoSeleccionado);
      if (!vinoSeleccionadoInfo) {
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El vino seleccionado no es válido.',
          });
          return;
      }
      const precioVino = vinoSeleccionadoInfo.precio;

      // Calcular el precio total incluyendo el IVA (por ejemplo, 21% de IVA)
      const iva = 0.21; // Cambiado a 21% de IVA
      const precioSinIva = precioVino * cantidad;
      const precioTotal = precioSinIva * (1 + iva);

      // Mostrar una alerta con los detalles del pedido, incluyendo la información del usuario
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      Swal.fire({
          icon: 'success',
          title: 'Pedido Realizado',
          html: `Nombre: ${usuario.nombre} ${usuario.apellido}<br>Email: ${usuario.email}<br>Vino: ${vinoSeleccionado}<br>Cantidad: ${cantidad}<br>Precio del Vino: $${precioVino}<br>Total (con IVA): $${precioTotal.toFixed(2)}`,
      });
  });
});

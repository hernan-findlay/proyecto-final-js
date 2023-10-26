const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if (!usuarioGuardado) {
  Swal.fire({
    icon: 'info',
    title: '¡Bienvenido!',
    text: 'Por favor, complete los campos y haga clic en "Enviar" para guardar sus datos.'
  });
}

const actividades = [
  { id: 1, act: "Evento", valor: 5000 },
  { id: 2, act: "Degustación", valor: 8000 },
  { id: 3, act: "Visita", valor: 4000 }
];

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("ape");
const email = document.getElementById("mail");
const tel = document.getElementById("cel");
const acti = document.getElementById("act");
const acti2 = document.getElementById("act2");
const cant = document.getElementById("cant");
const pagar = document.getElementById("pagar");

document.getElementById("boton").addEventListener("click", function () {
    const usuario = JSON.parse(localStorage.getItem("usuario")) || { datos: [] };
  const nuevoDato = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    telefono: tel.value
  };
  usuario.datos.push(nuevoDato);
  localStorage.setItem("usuario", JSON.stringify(usuario));

  
  actualizarCostoTotal();

 
  setTimeout(function () {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    tel.value = "";
    acti.value = "";
    acti2.value = "";
    cant.value = "";
    pagar.value = "";
  }, 30000);
});

function actualizarCostoTotal() {
  const sel = acti.value;
  const sel2 = acti2.value;
  const cantidadPersonas = cant.value;

  let costoTotal = 0;

  if (!isNaN(sel) && (sel === "1" || sel === "2" || sel === "3") &&
  !isNaN(sel2) && (sel2 === "1" || sel2 === "2" || sel2 === "3") &&
  !isNaN(cantidadPersonas) && cantidadPersonas > 0 && cantidadPersonas <= 6){
    pagar.value = costoTotal;
  }
  
}











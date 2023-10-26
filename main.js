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


const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  nombre.value = usuario.nombre || "";
  apellido.value = usuario.apellido || "";
  email.value = usuario.email || "";
  tel.value = usuario.tel || "";


actualizarCostoTotal();

document.getElementById("boton").addEventListener("click", function () {
 
  const usuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    telefono: tel.value
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  actualizarCostoTotal();
});

function actualizarCostoTotal() {
  const sel = acti.value;
  const sel2 = acti2.value;
  const cantidadPersonas = cant.value;

  let costoTotal = 0;

  if (!isNaN(sel) && sel >= 1 && sel <= 3) {
    costoTotal += actividades.find((act) => act.id === parseInt(sel)).valor;
  }

  if (!isNaN(sel2) && sel2 >= 1 && sel2 <= 3) {
    costoTotal += actividades.find((act) => act.id === parseInt(sel2)).valor;
  }

  if (!isNaN(cantidadPersonas) && cantidadPersonas > 0 && cantidadPersonas <= 6) {
    costoTotal *= cantidadPersonas;
  }

  pagar.value = costoTotal;

 
}


















/* 



boton.addEventListener("submit", function() {
  alert("Gracias por visitarnos")
})
 */
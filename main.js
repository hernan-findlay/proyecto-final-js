
if (localStorage.getItem("productos")) {  //anda al localstorage y traeme la key productos
  lista = JSON.parse(localStorage.getItem("productos")); //parseame todo y metelo en la lista
  } else {
  lista = lista  //si no hay nada, la lista es igual a la lista de siempre
  }

recuperarDatos()

let cel = document.getElementById("cel")
let cantidad = document.getElementById("cant")
let boton = document.getElementById("boton")


function usuario(){

  let nombre = document.getElementById("nombre").toUpperCase()
  let apellido = document.getElementById("ape").toUpperCase()
  let mail= document.getElementById("mail")

  if ((nombre === nombre.value)&&(apellido===apellido.value)){

    console.log("usuario ya registrado") 

  }else{
    localStorage.setItem("nombre", nombre).toUpperCase()
    localStorage.setItem("apellido", apellido).toUpperCase()
    localStorage.setItem("email", mail)
  }

}
usuario()

const actividad = [{id:1, acti:"eventos", valor: 500  },
                    {id:2 , acti:"visita", valor:250},
                    {id:3 , acti:"degustacion" , valor:350},]


let act = document.getElementById("act")
let act2 = document.getElementById("act2")

function cobroact (){ 
  let a1 = function(){

    if ((act == 1 )||( act == 2 )||( act == 3)){
    actividad.forEach(id)
    }

}
}

cobroact()



function recuperarDatos(){
  nombre.value = localStorage.getItem("nombre"),
  apellido.value = localStorage.getItem("apellido"),
  act.value = localStorage.getItem("actividad")
  cantidad.value = localStorage.getItem("cant")
  email.value = localStorage.getItem("mail")
}

/* const guardarusuario = function (){

                        
                        localStorage.setItem("actividad", actividad);
                        localStorage.setItem("cant", cantidad );



} */
                    



















/* 



boton.addEventListener("submit", function() {
  alert("Gracias por visitarnos")
})
 */
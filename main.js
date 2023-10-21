
/* function recuperarDatos(){
    nombreombre.value = localStorage.getItem("nombre")
    apellido.value = localStorage.getItem("apellido")
    act.value = localStorage.getItem("actividad")
    cantidad.value = localStorage.getItem("cant")
    email.value = localStorage.getItem("email");
} */


let nombre = document.getElementById("nombre")
let apellido = document.getElementById("ape")
let email= document.getElementById("email")
let tel = document.getElementById("tel")
let cantidad = document.getElementById("cantidad")
let act = document.getElementById("act")
let boton = document.getElementById("boton"); 




const actividad = [{id:1, acti:"eventos", valor: 500  },
                    {id:2 , acti:"visita", valor:250},
                    {id:3 , acti:"degustacion" , valor:350}]


function guardarusuario(){

                        localStorage.setItem("nombre", nombre)
                        localStorage.setItem("apellido", apellido)
                        localStorage.setItem("email", email)
                        localStorage.setItem("actividad", act)
                        localStorage.setItem("cant", cantidad )
}
                    

guardarusuario();




















/* 
boton.addEventListener("submit", function() {
  alert("Gracias por visitarnos")
}); */
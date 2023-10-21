
function recuperarDatos(){
    nombreombre.value = localStorage.getItem("nombre")
    apellido.value = localStorage.getItem("apellido")
    act.value = localStorage.getItem("edad")
    cantidad.value = localStorage.getItem("direccion")
    email.value = localStorage.getItem("email", email.value);
}


let nombre = document.getElementById("nombre")
let apellido = document.getElementById("ape")
let email= document.getElementById("email")
let tel = document.getElementById("tel")
let cantidad = document.getElementById("cantidad")
let act = document.getElementById("act")
let boton = document.getElementById("boton"); 




const actividad = [{id:1, act:"eventos", valor: 500  },
                    {id:2 , act:"visita", valor:250},
                    {id:3 , act:"degustacion" , valor:350}]


function guardarusuario(){

                        localStorage.setItem("nombre", nombre.value);
                        localStorage.setItem("apellido", apellido.value);
                        localStorage.setItem("email", email.value);
                        localStorage.setItem("actividad", act.value);
                        localStorage.setItem("cant", cantidad.value );
}
                    

guardarusuario()





















boton.addEventListener("submit", function() {
  alert("Gracias por visitarnos")
});
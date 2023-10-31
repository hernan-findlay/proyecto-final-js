



                                                                            //  usuarios






const registroButton = document.getElementById("Guardar");
registroButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("ape").value;
    const contrasena = document.getElementById("contra").value;
    const confirmContrasena = document.getElementById("recontra").value;
    const email = document.getElementById("mail").value;

    if (contrasena !== confirmContrasena) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Las contraseñas no coinciden.",
        });
        return;
    }

    
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    const usuarioExistente = usuariosRegistrados.find((user) => user.nombre === nombre);

    if (usuarioExistente) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Este nombre de usuario ya está en uso. Por favor, elija otro.",
        });
    } else {
        
        const nuevoUsuario = {
            nombre,
            apellido,
            contrasena,
            email,
        };

        usuariosRegistrados.push(nuevoUsuario);






        

        
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Has sido registrado con éxito.",
        });

        
        document.getElementById("nombre").value = "";
        document.getElementById("ape").value = "";
        document.getElementById("contra").value = "";
        document.getElementById("recontra").value = "";
        document.getElementById("mail").value = "";
    }
});

                                                                              // Inicio 
const inicioSesionButton = document.getElementById("Ingresar");
inicioSesionButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nombreLogin = document.getElementById("ingreso").value;
    const contrasenaLogin = document.getElementById("valcontra").value;

    
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    const usuario = usuariosRegistrados.find((user) => user.nombre === nombreLogin && user.contrasena === contrasenaLogin);

    if (usuario) {
        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            text: "Bienvenido " + nombreLogin,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Fallido. Verifica tus datos",
        });
    }

    
    document.getElementById("ingreso").value = "";
    document.getElementById("valcontra").value = "";
});

                                                                                            // vinos 
const vinosDisponibles = [
    { nombre: "Atardecer 1", precio: 10 },
    { nombre: "Atardecer 2", precio: 12 },
    { nombre: "Atardecer 3", precio: 15 },
    { nombre: "Atardecer 4", precio: 18 },
    { nombre: "Atardecer 5", precio: 20 },
    { nombre: "Atardecer 6", precio: 22 },
];


const detallesCompra = {
    vino: "",
    cantidad: 0,
    subtotal: 0,
    iva: 0,
    total: 0,
};


const calcularButton = document.getElementById("boton");
calcularButton.addEventListener("click", function (e) {
    e.preventDefault();
    const vinoSeleccionado = document.getElementById("vino").value;
    const cantidad = parseInt(document.getElementById("cant").value);

    
    const vino = vinosDisponibles.find((vino) => vino.nombre === vinoSeleccionado);

    if (!vino) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El vino seleccionado no es válido.",
        });
        return;
    }

    const precioUnitario = vino.precio;

    const subtotal = precioUnitario * cantidad;
    const iva = subtotal * 0.21; 
    const total = subtotal + iva;

    detallesCompra.vino = vino.nombre;
    detallesCompra.cantidad = cantidad;
    detallesCompra.subtotal = subtotal;
    detallesCompra.iva = iva;
    detallesCompra.total = total;

    Swal.fire({
        icon: "info",
        title: "Resumen de compra",
        html: `Vino seleccionado: ${vino.nombre}<br>Cantidad: ${cantidad}<br>Subtotal: $${subtotal}<br>IVA (21%): $${iva}<br>Total a pagar: $${total}`,
    });

    
    document.getElementById("cant").value = "";
});

'use strict';
$('#enviar').click(function() {
    let nombres = $('#firstname').val();
    let apellidos = $('#lastname').val();
    let empresa = $('#empresa').val();
    let cargo = $('#cargo').val();
    let correo = $('#email').val();
    let telefono = $('#phone').val();
    let pais = $('#country').val();
    let ruc = $('#ruc').val();
    let mensaje = $('#mensaje').val();
    let checkbox = document.getElementById('checkbox').checked;
    var contacto = {
        "nombres": nombres,
        "apellidos": apellidos,
        "empresa": empresa,
        "cargo": cargo,
        "correo": correo,
        "telefono": telefono,
        "pais": pais,
        "ruc": ruc,
        "checkbox": checkbox,
        "mensaje": mensaje
    }

    if (contacto.nombres === "") {
        swal('Por favor ingresa tus nombres');
        return false;
    } else if (contacto.apellidos === "") {
        swal('Por favor ingresa tus apellidos');
        return false;
    } else if (contacto.empresa === "") {
        swal('Por favor ingresa la empresa');
        return false;
    } else if (contacto.cargo === "") {
        swal('Por favor ingresa el cargo');
        return false;
    } else if (contacto.correo === "") {
        swal('Por favor ingresa el correo');
        return false;
    } else if (contacto.telefono === "") {
        swal('Por favor ingresa el telefono');
        return false;
    } else if (contacto.pais === "") {
        swal('Por favor ingresa el país');
        return false;
    } else if (contacto.ruc === "") {
        swal('Por favor ingresa el ruc');
        return false;
    } else if (contacto.checkbox === false) {
        swal('Por favor aceptar las condiciones');
        return false;
    }
    //http://localhost:8000

    var url = "https://crenteriaweb.herokuapp.com";
    axios({
            method: 'POST',
            url: url + '/api/sendChange',
            data: contacto
        })
        .then((response) => {
            console.log(JSON.stringify(response.data.cod));
            var cod = JSON.stringify(response.data.cod);
            console.log(cod);
            if (cod === JSON.stringify(1)) {
                swal(JSON.stringify(response.data.msg)).then(function go() {
                    window.location.href = "/index.html";
                })
            } else {
                swal("error").then(function go() {
                    window.location.href = "/index.html";
                })
            }
        }).catch((error) => {
            console.log(error);
        });

});
$('#borrar').click(function() {
	let nombre= $('#firstname').val(' ');
    let mensaje = $('#mensaje').val(' ');
    let apellidos = $('#lastname').val(' ');
    let empresa = $('#empresa').val(' ');
    let cargo = $('#cargo').val(' ');
    let correo = $('#email').val(' ');
    let telefono = $('#phone').val(' ');
    let pais = $('#country').val(' ');
    let ruc = $('#ruc').val(' ');
});
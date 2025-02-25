// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
let reiniciar = document.getElementById('reiniciar');

//capturar el ingreso de los nombres 

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    //Validar que no haya nombres repetidos
    if (amigos.includes(nombreAmigo)) {
        alert('nombre repetido, por favor escriba otro nombre.');
        amigos.pop(nombreAmigo);
    }
    //valida el cuadro vacio.
    if (nombreAmigo === '') {
        alert('campo vacio, por favor escribir un nombre.');
    } else {
        amigos.push(nombreAmigo);
    }       
    actualizarListaDeAmigos();
    limpiarCaja();
    return;    
}  

//mostrar los nombres como una lista 

function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        listaDeAmigos.appendChild(nombreAgregado);
    }
}

// Funcion para sortear un nombre de la lista tomando el indice aleatoriamente
// y muestra el resultado en pantalla.

function sortearAmigo() {

    if (amigos.length >= 2) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado.innerHTML = `El amigo sorteado es: ${amigos[amigoAleatorio]}.`;
    } else {
        alert('favor agregar otro nombre.');
    } 

}

// Vacia el imput una ves tomado el dato ingresado por el usuario.
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Reinicia el programa volviendo a las condiciones iniciales.
function nuevaLista() {
    if (amigos.length !='') {
    location.reload();
    amigos.splice(0,amigos.length);
    } else {
        alert('La lista esta vacia.');
    }
    
}

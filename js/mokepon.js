let ataqueJugador
let ataqueEnemigo
let mascotaJugador
let mascotaEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3
let botonFuego
let botonAgua
let botonTierra
let sectionSeleccionarMascota
let sectionSeleccionarAtaque
let sectionReiniciar

function iniciarJuego() {
    sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "none"

    sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", function(){ataqueSeleccionJugador("FUEGO")});

    botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', function(){ataqueSeleccionJugador("AGUA")})

    botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', function(){ataqueSeleccionJugador("TIERRA")})

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarAtaque.style.display = "flex"

    sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = "none"

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        mascotaJugador = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        mascotaJugador = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        mascotaJugador = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
        mascotaEnemigo = 'Hipodogue'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        mascotaEnemigo = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        mascotaEnemigo = 'Ratigueya'
    }
}

function ataqueSeleccionJugador(vieneAtaque) {
    ataqueJugador = vieneAtaque
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE 🤝')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje('PERDISTE 😭')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador == 0 || vidasEnemigo == 0) {
        if (vidasJugador == 0) {
            alert("lo siento PERDISTE 😭")
        } else if (vidasEnemigo == 0) {
            alert("Felicidades GANASTE 😃")
        }
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        sectionReiniciar.style.display = "block"
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota " + mascotaJugador + " atacó con " + ataqueJugador + ", la mascota del enemigo " + mascotaEnemigo + " atacó con " + ataqueEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
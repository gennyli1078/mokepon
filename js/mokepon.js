const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let botonFuego
let botonAgua
let botonTierra
let ataquesMokepon
let botones = []

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: 'Agua 💦', id: 'boton-agua' },
    { nombre: 'Agua 💦', id: 'boton-agua' },
    { nombre: 'Agua 💦', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Tierra 🌎', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: 'Tierra 🌎', id: 'boton-tierra' },
    { nombre: 'Tierra 🌎', id: 'boton-tierra' },
    { nombre: 'Tierra 🌎', id: 'boton-tierra' },
    { nombre: 'Agua 💦', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Agua 💦', id: 'boton-agua' },
    { nombre: 'Tierra 🌎', id: 'boton-tierra' },
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i< mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) =>  {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque b-ataque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.b-ataque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
            } else if (e.target.textContent === 'Agua 💦') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
            }
            boton.style.background = '#C147E9'
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
 
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre

    secuenciaAtaque()
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
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE 🤝')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE la partida 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE la partida 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE la partida 🥇')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje('PERDISTE la partida 😭')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador == 0 || vidasEnemigo == 0) {
        if (vidasJugador == 0) {
            crearMensajeFinal("lo siento PERDISTE 😭")
        } else if (vidasEnemigo == 0) {
            crearMensajeFinal("Felicidades GANASTE 😃")
        }
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
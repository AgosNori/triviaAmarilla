/* ==========================
   DESBLOQUEAR BONUS
========================== */

const btnBonus = document.getElementById("btnBONUS");

if (btnBonus) {

    const completados =
        JSON.parse(
            sessionStorage.getItem("personajesCompletados")
        ) || [];

    const desbloqueado =
        completados.includes("bart") &&
        completados.includes("homero") &&
        completados.includes("lisa");

    if (!desbloqueado) {

        btnBonus.disabled = true;
        btnBonus.innerHTML = "🔒 BONUS";
        btnBonus.style.opacity = "0.5";

    } else {

        btnBonus.disabled = false;
        btnBonus.innerHTML = "BONUS";
        btnBonus.style.opacity = "1";
    }
}

/* ==========================
   VIDAS
========================== */

let vidas = sessionStorage.getItem("vidas");

if (vidas === null) {
    vidas = 3;
    sessionStorage.setItem("vidas", vidas);
}

vidas = parseInt(vidas);
if (vidas <= 0) {
    window.location.href = "../perdiste.html";
}

const contenedorVidas = document.getElementById("vidas");

function mostrarVidas() {

    if (!contenedorVidas) return;

    contenedorVidas.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const dona = document.createElement("img");

        dona.src =
            "../../assets/TRIVIAAMARILLA/7 - JUEGO BART/2 - Icono/Icono Donas.png";

        dona.classList.add("vida");

        // Las vidas perdidas se muestran apagadas
        if (i >= vidas) {
            dona.classList.add("perdida");
        }

        contenedorVidas.appendChild(dona);
    }
}

mostrarVidas();

/* ==========================
   DETECTAR PREGUNTA ACTUAL
========================== */

const paginaActual =
    window.location.pathname.split("/").pop();

const numeroPregunta =
    parseInt(
        paginaActual.match(/\d+/)[0]
    );

let siguientePagina;

if (numeroPregunta === 7) {
    // Última pregunta → ganaste
    siguientePagina = "ganaste.html";
} else {
    siguientePagina = `pregunta${numeroPregunta + 1}.html`;
}

/* ==========================
   GIFS
========================== */

const personaje =
    document.body.dataset.personaje;

let gifCorrecto;
let gifIncorrecto;
let sonidoCorrecto = new Audio(
    "../../assets/TRIVIAAMARILLA/Sonidos/1 - Sonido Boton Correcto.mp3"
);;
let sonidoIncorrecto = new Audio(
    "../../assets/TRIVIAAMARILLA/Sonidos/2 - Sonido Boton Incorrecto.mp3"
);

let sonidoGanoPersonaje = new Audio("../../assets/TRIVIAAMARILLA/Sonidos/3 - Sonido Ganador Todos Los Caminos.mp3");
let sonidoPerdioPersonaje = new Audio("../../assets/TRIVIAAMARILLA/Sonidos/4 - Sonido Perdedor Todos los caminos Y Trivia Amarilla.mp3");

switch (personaje) {

    case "bart":
        gifCorrecto =
            "../../assets/TRIVIAAMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIAAMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - PERDIO.gif";
        break;

    case "homero":
        gifCorrecto =
            "../../assets/TRIVIAAMARILLA/6 - JUEGO HOMERO/3 - GIF/6 - Homero - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIAAMARILLA/6 - JUEGO HOMERO/3 - GIF/6 - Homero - PERDIO.gif";
        break;

    case "lisa":
        gifCorrecto =
            "../../assets/TRIVIAAMARILLA/8 - JUEGO LISA/3 - GIF/8 - Lisa - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIAAMARILLA/8 - JUEGO LISA/3 - GIF/8 - LISA - PERDIO.gif";
        break;

    default:
        gifCorrecto =
            "../../assets/gifs/correcto.gif";

        gifIncorrecto =
            "../../assets/gifs/incorrecto.gif";
}

/* ==========================
   ELEMENTOS HTML
========================== */

const pregunta =
    document.getElementById("pregunta");

const botones =
    document.querySelectorAll(".btnOpcion");

const panelResultado =
    document.getElementById("panelResultado");

const textoResultado =
    document.getElementById("textoResultado");

const gifResultado =
    document.getElementById("gifResultado");

const enlaceSiguiente = document.getElementById("btnSiguiente");

const botonSiguiente =
    document.querySelector(".siguienteBtn");

/* ==========================
   RESPUESTAS
========================== */

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Deshabilitar todos los botones
        botones.forEach((b) => {
            b.disabled = true;
        });

        const esCorrecta =
            boton.dataset.correcta === "true";

        // Ocultar pregunta, mostrar panel resultado
        pregunta.style.display = "none";
        panelResultado.style.display = "flex";

        // if (esCorrecta) {

        //     boton.classList.add("seleccionada-ok");

        //     gifResultado.src = gifCorrecto;

        //     textoResultado.innerHTML = "¡COR
        // RECTO!";
        //     textoResultado.className = "textoResultado correcto";

        //     // Si era la última pregunta → ganaste
        //     if (numeroPregunta === 6) {
        //         siguientePagina = "ganaste.html";
        //     }

        // } 
        if (esCorrecta) {

            boton.classList.add("seleccionada-ok");

            gifResultado.src = gifCorrecto;

            textoResultado.innerHTML = "¡CORRECTO!";
            textoResultado.className = "textoResultado correcto";

            if (sonidoActivo && sonidoCorrecto) {
                sonidoCorrecto.currentTime = 0;
                sonidoCorrecto.play().catch(() => { });
            }

            if (numeroPregunta === 7) {
                sessionStorage.setItem(
                    "personajeActual",
                    personaje
                );
                siguientePagina = "ganaste.html";

            }
        }
        else {

            boton.classList.add("seleccionada-mal");

            gifResultado.src = gifIncorrecto;

            textoResultado.innerHTML = "¡INCORRECTO!";
            textoResultado.className = "textoResultado incorrecto";
            if (sonidoActivo && sonidoIncorrecto) {
                sonidoIncorrecto.currentTime = 0;
                sonidoIncorrecto.play().catch(() => { });
            }
            vidas = Math.max(0, vidas - 1);
            sessionStorage.setItem("vidas", vidas);
            mostrarVidas();

            // Sin vidas → perdiste
            if (vidas === 0) {
                siguientePagina = "perdiste.html";
            }
        }

        // Actualizar href del enlace siguiente
        if (enlaceSiguiente) {
            enlaceSiguiente.href = siguientePagina;
        }

        // Mostrar botón siguiente
        if (botonSiguiente) {
            botonSiguiente.style.display = "inline-block";
        }
    });
});

/* ==========================
   SONIDO
========================== */

const btnSonido = document.getElementById("btnSonido");

let sonidoActivo = true;

if (btnSonido) {
    btnSonido.addEventListener("click", () => {
        sonidoActivo = !sonidoActivo;

        const icono = btnSonido.querySelector("i");

        if (sonidoActivo) {
            icono.className = "fa-solid fa-volume-high";
        } else {
            icono.className = "fa-solid fa-volume-xmark";
        }
    });
}

/* ==========================
   RESETEAR VIDAS al llegar a ganaste o perdiste
========================== */

// En ganaste.html y perdiste.html llamar esto:
// sessionStorage.removeItem("vidas");
// Lo ponemos acá como función exportable por si se necesita
function resetearVidas() {
    sessionStorage.removeItem("vidas");
}

/* ---------- Contador de visitas ---------- */

const contadorEl = document.getElementById("contador");

if (contadorEl) {
    let visitas = parseInt(sessionStorage.getItem("visitas") || "0") + 1;
    sessionStorage.setItem("visitas", visitas);
    contadorEl.textContent = String(visitas).padStart(4, "0");
}



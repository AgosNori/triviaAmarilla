// /* ==========================
//    VIDAS
// ========================== */

// let vidas = localStorage.getItem("vidas");

// if (vidas === null) {
//     vidas = 3;
//     localStorage.setItem("vidas", vidas);
// }

// vidas = parseInt(vidas);

// const contenedorVidas = document.getElementById("vidas");

// function mostrarVidas() {

//     if (!contenedorVidas) return;

//     contenedorVidas.innerHTML = "";

//     for (let i = 0; i < vidas; i++) {

//         const dona = document.createElement("img");

//         dona.src =
//             "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/2 - Icono/Icono Donas.png";

//         dona.classList.add("vida");

//         contenedorVidas.appendChild(dona);
//     }
// }

// mostrarVidas();

// /* ==========================
//    DETECTAR PREGUNTA ACTUAL
// ========================== */

// const paginaActual =
//     window.location.pathname.split("/").pop();

// const numeroPregunta =
//     parseInt(
//         paginaActual.match(/\d+/)[0]
//     );

// let siguientePagina;

// if (numeroPregunta === 6) {

//     siguientePagina = "ganaste.html";

// } else {

//     siguientePagina =
//         `pregunta${numeroPregunta + 1}.html`;
// }

// /* ==========================
//    GIFS
// ========================== */

// const personaje =
//     document.body.dataset.personaje;

// let gifCorrecto;
// let gifIncorrecto;

// switch (personaje) {

//     case "bart":
//         gifCorrecto =
//             "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - GANO.gif";


//         gifIncorrecto =
//             "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - PERDIO.gif";
//         break;

//     case "homero":
//         gifCorrecto =
//             "../../assets/TRIVIA AMARILLA/8 - JUEGO HOMERO/3 - GIF/8 - HOMERO - GANO.gif";

//         gifIncorrecto =
//             "../../assets/TRIVIA AMARILLA/8 - JUEGO HOMERO/3 - GIF/8 - HOMERO - ERROR.gif";
//         break;

//     case "lisa":
//         gifCorrecto =
//             "../../assets/TRIVIA AMARILLA/9 - JUEGO LISA/3 - GIF/9 - LISA - GANO.gif";

//         gifIncorrecto =
//             "../../assets/TRIVIA AMARILLA/9 - JUEGO LISA/3 - GIF/9 - LISA - ERROR.gif";
//         break;

//     default:
//         gifCorrecto =
//             "../../assets/gifs/correcto.gif";

//         gifIncorrecto =
//             "../../assets/gifs/incorrecto.gif";
// }
// /* ==========================
//    ELEMENTOS HTML
// ========================== */
// const pregunta =
//     document.getElementById("pregunta");

// const botones =
//     document.querySelectorAll(".btnOpcion");

// const panelResultado =
//     document.getElementById("panelResultado");

// const textoResultado =
//     document.getElementById("textoResultado");

// const gifResultado =
//     document.getElementById("gifResultado");

// const enlaceSiguiente =
//     document.getElementById("btnSiguiente");

// const botonSiguiente =
//     document.querySelector(".siguienteBtn");

// /* ==========================
//    RESPUESTAS
// ========================== */

// botones.forEach((boton) => {

//     boton.addEventListener("click", () => {

//         // Deshabilitar botones
//         botones.forEach((b) => {
//             b.disabled = true;
//         });

//         const esCorrecta =
//             boton.dataset.correcta === "true";

//         // Mostrar GIF
//         pregunta.style.display = "none";

//         panelResultado.style.display = "flex";

//         if (esCorrecta) {

//             boton.style.backgroundColor =
//                 "#61ff4d";

//             gifResultado.src =
//                 gifCorrecto;

//             textoResultado.innerHTML =
//                 "¡CORRECTO!";

//             textoResultado.className =
//                 "textoResultado correcto";
//         } else {

//             boton.style.backgroundColor =
//                 "#ff4d4d";

//             gifResultado.src =
//                 gifIncorrecto;

//             textoResultado.innerHTML =
//                 "¡INCORRECTO!";

//             textoResultado.className =
//                 "textoResultado incorrecto";

//             vidas--;

//             localStorage.setItem(
//                 "vidas",
//                 vidas
//             );

//             mostrarVidas();

//         }

//         // Mostrar botón siguiente
//         if (enlaceSiguiente) {
//             enlaceSiguiente.href =
//                 siguientePagina;
//         }

//         if (botonSiguiente) {
//             botonSiguiente.style.display =
//                 "inline-block";
//         }
//     });
// });


/* ==========================
   VIDAS
========================== */

let vidas = localStorage.getItem("vidas");

if (vidas === null) {
    vidas = 3;
    localStorage.setItem("vidas", vidas);
}

vidas = parseInt(vidas);

const contenedorVidas = document.getElementById("vidas");

function mostrarVidas() {

    if (!contenedorVidas) return;

    contenedorVidas.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const dona = document.createElement("img");

        dona.src =
            "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/2 - Icono/Icono Donas.png";

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

if (numeroPregunta === 6) {
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

switch (personaje) {

    case "bart":
        gifCorrecto =
            "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/3 - GIF/7 - BART - PERDIO.gif";
        break;

    case "homero":
        gifCorrecto =
            "../../assets/TRIVIA AMARILLA/8 - JUEGO HOMERO/3 - GIF/8 - HOMERO - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIA AMARILLA/8 - JUEGO HOMERO/3 - GIF/8 - HOMERO - ERROR.gif";
        break;

    case "lisa":
        gifCorrecto =
            "../../assets/TRIVIA AMARILLA/9 - JUEGO LISA/3 - GIF/9 - LISA - GANO.gif";

        gifIncorrecto =
            "../../assets/TRIVIA AMARILLA/9 - JUEGO LISA/3 - GIF/9 - LISA - ERROR.gif";
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

        if (esCorrecta) {

            boton.classList.add("seleccionada-ok");

            gifResultado.src = gifCorrecto;

            textoResultado.innerHTML = "¡CORRECTO!";
            textoResultado.className = "textoResultado correcto";

            // Si era la última pregunta → ganaste
            if (numeroPregunta === 6) {
                siguientePagina = "ganaste.html";
            }

        } else {

            boton.classList.add("seleccionada-mal");

            gifResultado.src = gifIncorrecto;

            textoResultado.innerHTML = "¡INCORRECTO!";
            textoResultado.className = "textoResultado incorrecto";

            vidas--;
            localStorage.setItem("vidas", vidas);
            mostrarVidas();

            // Sin vidas → perdiste
            if (vidas <= 0) {
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
// localStorage.removeItem("vidas");
// Lo ponemos acá como función exportable por si se necesita
function resetearVidas() {
    localStorage.removeItem("vidas");
}
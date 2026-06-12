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

    for (let i = 0; i < vidas; i++) {

        const dona = document.createElement("img");

        dona.src =
            "../../assets/TRIVIA AMARILLA/7 - JUEGO BART/2 - Icono/Icono Donas.png";

        dona.classList.add("vida");

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

    siguientePagina = "ganaste.html";

} else {

    siguientePagina =
        `pregunta${numeroPregunta + 1}.html`;
}

/* ==========================
   GIFS
========================== */

const gifCorrecto =
    "../../assets/gifs/correcto.gif";

const gifIncorrecto =
    "../../assets/gifs/incorrecto.gif";

/* ==========================
   ELEMENTOS HTML
========================== */

const botones =
    document.querySelectorAll(".btnOpcion");

const resultado =
    document.getElementById("resultado");

const gifResultado =
    document.getElementById("gifResultado");

const enlaceSiguiente =
    document.getElementById("btnSiguiente");

const botonSiguiente =
    document.querySelector(".siguienteBtn");

/* ==========================
   RESPUESTAS
========================== */

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Deshabilitar botones
        botones.forEach((b) => {
            b.disabled = true;
        });

        const esCorrecta =
            boton.dataset.correcta === "true";

        // Mostrar GIF
        if (resultado) {
            resultado.style.display = "block";
        }

        if (esCorrecta) {

            boton.style.backgroundColor = "green";

            if (gifResultado) {
                gifResultado.src = gifCorrecto;
            }

        } else {

            boton.style.backgroundColor = "red";

            if (gifResultado) {
                gifResultado.src = gifIncorrecto;
            }

            vidas--;

            if (vidas < 0) {
                vidas = 0;
            }

            localStorage.setItem("vidas", vidas);

            mostrarVidas();

            if (vidas === 0) {

                setTimeout(() => {

                    alert("¡GAME OVER!");

                    localStorage.removeItem("vidas");

                    window.location.href =
                        "index.html";

                }, 2000);

                return;
            }
        }

        // Mostrar botón siguiente
        if (enlaceSiguiente) {
            enlaceSiguiente.href =
                siguientePagina;
        }

        if (botonSiguiente) {
            botonSiguiente.style.display =
                "inline-block";
        }
    });
});
/* ==========================
   SERIE — lógica interactiva
========================== */

const burbujas = document.querySelectorAll(".burbuja");
const overlayRespuesta = document.getElementById("overlayRespuesta");
const panelRespuesta = document.getElementById("panelRespuesta");
const textoRespuesta = document.getElementById("textoRespuesta");
const cerrarRespuesta = document.getElementById("cerrarRespuesta");

const btnMomentos = document.getElementById("btnMomentos");
const overlayVideo = document.getElementById("overlayVideo");
const cerrarVideo = document.getElementById("cerrarVideo");
const videoMomentos = document.getElementById("videoMomentos");

/* ---------- Burbujas ---------- */

burbujas.forEach((burbuja) => {

    burbuja.addEventListener("click", () => {

        // Quitar activa de todas
        burbujas.forEach(b => b.classList.remove("activa"));

        // Marcar la clickeada
        burbuja.classList.add("activa");

        // Posicionar el panel cerca de la burbuja clickeada
        const rect = burbuja.getBoundingClientRect();

        // El panel aparece debajo de la burbuja, centrado en X
        // Posiciones fijas según la pregunta
        if (burbuja.id === "burbuja1") {

            panelRespuesta.style.width = "58%";
            panelRespuesta.style.top = "6%";
            panelRespuesta.style.left = "45%";
            panelRespuesta.style.transform = "none";

        } else if (burbuja.id === "burbuja2") {

            panelRespuesta.style.width = "65%";
            panelRespuesta.style.top = "28%";
            panelRespuesta.style.left = "6%";
            panelRespuesta.style.transform = "none";

        }

        // Mostrar respuesta
        textoRespuesta.textContent = burbuja.dataset.respuesta;

        overlayRespuesta.classList.add("visible");
    });
});

/* ---------- Cerrar respuesta ---------- */

cerrarRespuesta.addEventListener("click", () => {
    overlayRespuesta.classList.remove("visible");
    burbujas.forEach(b => b.classList.remove("activa"));
});

// También cerrar al hacer click fuera del panel
overlayRespuesta.addEventListener("click", (e) => {
    if (e.target === overlayRespuesta) {
        overlayRespuesta.classList.remove("visible");
        burbujas.forEach(b => b.classList.remove("activa"));
    }
});

/* ---------- Video mejores momentos ---------- */

btnMomentos.addEventListener("click", () => {
    overlayVideo.classList.add("visible");
    videoMomentos.play();
});

cerrarVideo.addEventListener("click", () => {
    overlayVideo.classList.remove("visible");
    videoMomentos.pause();
    videoMomentos.currentTime = 0;
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlayRespuesta.classList.remove("visible");
        overlayVideo.classList.remove("visible");
        videoMomentos.pause();
        videoMomentos.currentTime = 0;
        burbujas.forEach(b => b.classList.remove("activa"));
    }
});

/* ---------- Contador de visitas ---------- */

const contadorEl = document.getElementById("contador");

if (contadorEl) {
    let visitas = parseInt(localStorage.getItem("visitas") || "0") + 1;
    localStorage.setItem("visitas", visitas);
    contadorEl.textContent = String(visitas).padStart(4, "0");
}

/* ---------- Sonido ---------- */

const btnSonido = document.getElementById("btnSonido");
let sonidoActivo = false;

if (btnSonido) {
    btnSonido.addEventListener("click", () => {
        sonidoActivo = !sonidoActivo;
        const icono = btnSonido.querySelector("i");
        icono.className = sonidoActivo
            ? "fa-solid fa-volume-high"
            : "fa-solid fa-volume-xmark";
    });
}
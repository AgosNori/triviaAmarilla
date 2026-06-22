/* ==========================
   BONUS - TEMPORIZADOR
========================== */

let tiempo = 10;
let respondio = false;

const timer = document.getElementById("timer");

/* Crear la vida si no existe */
if (sessionStorage.getItem("vidasBonus") === null) {
    sessionStorage.setItem("vidasBonus", "1");
}

/* ==========================
   CUENTA REGRESIVA
========================== */

const cuentaRegresiva = setInterval(() => {

    if (respondio) {
        clearInterval(cuentaRegresiva);
        return;
    }

    tiempo--;
    timer.textContent = tiempo;

    if (tiempo <= 0) {

        clearInterval(cuentaRegresiva);
        respondio = true;

        // Pierde la vida
        sessionStorage.setItem("vidasBonus", "0");

        // Deshabilitar botones
        document.querySelectorAll(".btnOpcionB").forEach(btn => {
            btn.disabled = true;
        });

        // Ir a pantalla de tiempo agotado
        setTimeout(() => {
            window.location.href = "sinTiempo.html";
        }, 1000);
    }

}, 1000);

/* ==========================
   RESPUESTAS
========================== */

document.querySelectorAll(".btnOpcionB").forEach(btn => {

    btn.addEventListener("click", () => {

        if (respondio) return;

        respondio = true;

        clearInterval(cuentaRegresiva);

        const esCorrecta = btn.dataset.correcta === "true";

        // Deshabilitar todos los botones
        document.querySelectorAll(".btnOpcionB").forEach(b => {
            b.disabled = true;
        });

        if (esCorrecta) {

            btn.classList.add("seleccionada-ok");

            setTimeout(() => {
                window.location.href = "ganaste.html";
            }, 1000);

        } else {

            btn.classList.add("seleccionada-mal");

            // Pierde la única vida
            sessionStorage.setItem("vidasBonus", "0");

            setTimeout(() => {
                window.location.href = "perdiste.html";
            }, 1000);

        }

    });

});
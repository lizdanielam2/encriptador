window.addEventListener("load", function () {
    console.log("page is fully loaded");

    let btn_encriptar = document.getElementById("btn_encriptar");
    btn_encriptar.addEventListener("click", function () {
        // Aqui accedimos al valor del textarea
        let textarea = document.getElementById("text-in");
        let texto_tearea = textarea.value;

        // Aqui es donde debemos encriptar el texto
        // e => enter
        // i => imes
        // a => ai
        // o => ober
        // u => ufat
        texto_tearea = texto_tearea
            .replace(/a/gi, "ai")
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        // aqui se va a imprimir el mensaje
        let texto_salida = document.getElementById("text-out");
        texto_salida.innerText = texto_tearea;
    });

    let btn_desencriptar = document.getElementById("btn_desencriptar");
    btn_desencriptar.addEventListener("click", function () {
        // Aqui accedimos al valor del textarea
        let textarea = document.getElementById("text-in");
        let texto_tearea = textarea.value;

        // Aqui es donde debemos desencriptar el texto
        // enter => e
        // imes => i
        // ai => a
        // ober => o
        // ufat => u
        texto_tearea = texto_tearea
            .replace(/ober/gi, "o")
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ufat/gi, "u");


        // aqui se va a imprimir el mensaje
        let texto_salida = document.getElementById("text-out");
        texto_salida.innerText = texto_tearea;
    });


    let btn_copiar = document.getElementById("btn_copiar");
    let texto_salida = document.getElementById("text-out");
    btn_copiar.addEventListener("click", function () {
        navigator.clipboard.writeText(texto_salida.innerText)
            .then(() => {
                console.log('Texto copiado al portapapeles')
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err)
            })

    });
});
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
{ text: "Last night, i had a dream about you", time: 21 },
{ text: "In this dream, im dancing rigth beside you", time: 24 },
{ text: "And it looked like everyone having fun ", time: 28 },
{ text: "That kind of feeling, ive waited so long", time: 33 },
{ text: "Dont stop, come little closer", time: 38 },
{ text: "As we jam, the rhymth gets stronger", time: 42 },
{ text: "theres nothing wrong with a little, little fun", time: 45 },
{ text: "we were dancing all night long", time: 49 },
{ text: "The time is right to put my arms around you", time: 53 },
{ text: "Youre feeling right", time: 57 },
{ text: "You wrap your arms around too", time: 59 },
{ text: "But suddenly, I feel the shining sun", time: 102 },
{ text: "Before i knew it, this dream was all gone", time: 104 },
{ text: "Ooh, I dont know what to do", time: 108 },
{ text: "About this dream and you", time: 113 },
{ text: "I wish this drams come true", time: 118 },
{ text: "Ooh, I dont know what to do", time: 124 },
{ text: "About this dream and you", time: 130 },
{ text: "Well make this dream comes true", time: 134 },
];

// Animar las letras
function updateLyrics() {
var time = Math.floor(audio.currentTime);
var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
);

if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
} else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
}
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
var titulo = document.querySelector(".titulo");
titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
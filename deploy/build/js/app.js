document.addEventListener("DOMContentLoaded", () => {
  mwindow();
});

const point = document.querySelector(".hidden");
const topButton = document.getElementById("topbutton");

function mwindow() {
  window.addEventListener("scroll", () => {
    if (point.getBoundingClientRect().top < 200) {
      topButton.classList.remove("oculto");
      topButton.classList.add("visible");
    } else {
      topButton.classList.add("oculto");
      topButton.classList.remove("visible");
    }
  });
}

/* service worker */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../../serviceworker.js")
    .then((registrado) => console.log("se registro corresctamente", registrado))
    .catch((err) => console.log(err));
} else {
  console.log("No soportado");
}

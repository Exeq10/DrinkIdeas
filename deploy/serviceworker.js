self.addEventListener("install", (e) => {
  console.log("instalado el Service Worker");

  console.log(e);
});

/* activar */

self.addEventListener("activate", (e) => {
  console.log("activado");
  console.log(e);
});

/* evento fetch
 */

self.addEventListener("fetch", (e) => {
  console.log(e);
});

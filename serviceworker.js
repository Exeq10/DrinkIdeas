const nombreCache = "idDrink";
const archivos = [
  "/",
  "/index.html",

  "/build/css/app.css",
  "/build/js/app.js",
  "/build/js/loaddrinks.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos);
    })
  );
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

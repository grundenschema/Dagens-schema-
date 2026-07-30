// Minimal service worker för Mitt Schema - krävs av webbläsaren för att
// "Installera app" ska erbjudas. Gör ingen egen cachning av schemadata
// (den ska alltid hämtas färsk), bara ett enkelt pass-through.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass-through - hämta alltid från nätverket, ingen offline-cache.
  event.respondWith(fetch(event.request));
});

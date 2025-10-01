self.addEventListener("install", event => {
  console.log("Service worker installerad");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});

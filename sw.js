self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("route-app-v1").then(cache => {
      return cache.addAll([
        "/bus-route-web.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

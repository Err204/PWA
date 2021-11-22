var cacheName = "err204-pwa";
var cacheFiles = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/script.js"
];

self.addEventListener("install", function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(cacheFiles);
        })
    );
    self.skipWaiting();
    console.log("%cService Worker has been installed and activated.", "color: limegreen;");
});

self.addEventListener("fetch", function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
    console.log("%cFetch event.", "color: limegreen;", e);
});

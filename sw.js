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
    console.log("Service Worker has been installed and activated.");
});

self.addEventListener("fetch", function(e){
    console.log("Fetch event.", e);
});

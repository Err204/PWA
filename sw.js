var cacheName = "err204-pwa-v3";
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
    //console.log("%cService Worker has been installed.", "color: limegreen;");
});

self.addEventListener("activate", function(e){
    e.waitUntil(
        caches.keys().then(function(keys){
            return Promise.all(
                keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            );
        })
    );
    //console.log("%cService Worker has been activated.", "color: limegreen;");
});

self.addEventListener("fetch", function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
    //console.log("%cFetch event.", "color: limegreen;", e);
});

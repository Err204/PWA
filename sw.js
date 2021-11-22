self.addEventListener("install", function(e){
    console.log("Service Worker has been installed.");
});

self.addEventListener("activate", function(e){
    console.log("Service Worker has been activated.");
});

self.addEventListener("fetch", function(e){
    console.log("Fetch event.", e);
});

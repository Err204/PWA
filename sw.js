self.addEventListener("install", evt => {
    console.log("Service Worker has been installed.");
});

self.addEventListener("active", evt => {
    console.log("Service Worker has been activated.");
});

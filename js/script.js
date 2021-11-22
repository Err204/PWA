if("serviceWorker" in navigator){
    navigator.serviceWorker
        .register("./sw.js")
        .then(function(reg){
            console.log("Service Worker registered.", reg);
        })
        .catch(function(err){
            console.error("Service Worker not registered.", err);
        });
}

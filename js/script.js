if("serviceWorker" in navigator){
    navigator.serviceWorker
        .register("./sw.js")
        .then(function(reg){
            console.log("%cService Worker registered.", "color: green;", reg);
        })
        .catch(function(err){
            console.error("Service Worker not registered.", err);
        });
}

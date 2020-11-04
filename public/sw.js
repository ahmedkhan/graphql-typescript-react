var CACHE_STATIC_NAME = 'Static-V1'
var CACHE_DYNAMIC_NAME = 'dynamic-V1'

 
var urlsToCache = [
    "/",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
    "/static/js/main.chunk.js",
    "/sw.js",
    "/favicon.ico",
    "/manifest.json",
    "/logo192.png",
    "/index.html",
    
    
]
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then((cache) => {
                console.log('Opened Cache')
                return (
                    cache.addAll(urlsToCache)
                    
                )

            })
    )
});

this.addEventListener('activate',function(event) {
    console.log("[ServiceWorker] Activaing Service worker...",event)
    event.waitUntil(
        caches.keys()
         .then(function(keyList){
             return Promise.all(keyList.map((key)=>{
                 if (key !==CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME){
                     console.log("Service Worker Removing Old Caches...", key)
                     return caches.delete(key);

                 }
             }));
         })
    );
    return this.clients.claim();
});
 
this.addEventListener('fetch',function(event) {   
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if (response){
                return response
            } else {
                return fetch(event.request)
                .then(function(res){
                    return caches.open(CACHE_DYNAMIC_NAME)
                     .then(function(cache){
                         cache.put(event.request.url , res.clone());
                         return res
                     })
                })
                .catch(function(err){

                });
            }
        })
    );
});
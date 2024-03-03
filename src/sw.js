importScripts('dist/bundle.js');
importScripts('dist/config.js');
importScripts('dist/sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes("x/dist/client.js") || event.request.url.includes("x/dist/bundle.js") || event.request.url.includes("x/dist/config.js") || event.request.url.includes("x/dist/handler.js")) {
       event.respondWith(
        (async () => {
            fetch(event.request.url.replace("x/", ""));
        })
       )
        
    } else {
        event.respondWith(sw.fetch(event));
    }
    

})

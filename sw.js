const CACHE="be-phone-v2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.json","./icon.svg"])))});
self.addEventListener("fetch",e=>{ if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return res;}).catch(()=>caches.match("./index.html"))))});

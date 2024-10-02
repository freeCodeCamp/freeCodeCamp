self.addEventListener('install', function() {
  self.skipWaiting();
});

self.addEventListener('activate', function() {
  self.clients.claim();
})

let resolver;

self.onmessage = function(event) {
  if (resolver) resolver(event.data);
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/python/intercept-input/') {
    const response = new Promise((resolve) => {
      resolver = (data) => resolve(new Response(data));
    });
    event.respondWith(response);
  }
});

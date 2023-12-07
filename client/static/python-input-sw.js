addEventListener('install', function() {
  skipWaiting();
});

addEventListener('activate', function() {
  clients.claim();
})

let resolver;

onmessage = function(event) {
  resolver(event.data);
}

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/python/intercept-input/') {
    const response = new Promise((resolve) => {
      resolver = (data) => resolve(new Response(data));
    });
    event.respondWith(response);
  }
});

addEventListener('install', function() {
  skipWaiting();
});

addEventListener('activate', function() {
  clients.claim();
})

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/python/intercept-input/') {
    event.respondWith(
      new Response(JSON.stringify({ thanks: 'for the all fish' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    );
  }
});

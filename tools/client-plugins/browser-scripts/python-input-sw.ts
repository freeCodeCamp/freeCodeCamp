const ctx: ServiceWorkerGlobalScope =
  self as unknown as ServiceWorkerGlobalScope;

ctx.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    new Response(JSON.stringify({ thanks: 'for the fish' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  );
});

// hack to make typescript happy, remove if you import something.
export default {};

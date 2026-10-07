import { apiRunner } from "./api-runner-browser"

if (
  window.location.protocol !== `https:` &&
  window.location.hostname !== `localhost`
) {
  console.error(
    `Service workers can only be used over HTTPS, or on localhost for development`
  )
} else if (`serviceWorker` in navigator) {
  navigator.serviceWorker
    .register(`${__BASE_PATH__}/sw.js`)
    .then(function (reg) {
      reg.addEventListener(`updatefound`, () => {
        apiRunner(`onServiceWorkerUpdateFound`, { serviceWorker: reg })
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        const installingWorker = reg.installing
        console.log(`installingWorker`, installingWorker)
        installingWorker.addEventListener(`statechange`, () => {
          switch (installingWorker.state) {
            case `installed`:
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.

                // We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
                window.___swUpdated = true
                // We call the onServiceWorkerUpdateReady API so users can show update prompts.
                apiRunner(`onServiceWorkerUpdateReady`, { serviceWorker: reg })

                // If resources failed for the current page, reload.
                if (window.___failedResources) {
                  console.log(`resources failed, SW updated - reloading`)
                  window.location.reload()
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log(`Content is now available offline!`)

                // Post to service worker that install is complete.
                // Delay to allow time for the event listener to be added --
                // otherwise fetch is called too soon and resources aren't cached.
                apiRunner(`onServiceWorkerInstalled`, { serviceWorker: reg })
              }
              break

            case `redundant`:
              console.error(`The installing service worker became redundant.`)
              apiRunner(`onServiceWorkerRedundant`, { serviceWorker: reg })
              break

            case `activated`:
              apiRunner(`onServiceWorkerActive`, { serviceWorker: reg })
              break
          }
        })
      })
    })
    .catch(function (e) {
      console.error(`Error during service worker registration:`, e)
    })
}

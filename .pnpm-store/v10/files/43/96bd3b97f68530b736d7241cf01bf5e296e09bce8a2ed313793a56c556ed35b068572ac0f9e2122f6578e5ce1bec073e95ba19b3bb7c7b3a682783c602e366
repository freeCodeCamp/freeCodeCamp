import url from 'node:url'
import path from 'node:path'

export const SERVICE_WORKER_SOURCE_PATH = url.fileURLToPath(
  new URL('../src/mockServiceWorker.js', import.meta.url),
)

export const SERVICE_WORKER_BUILD_PATH = url.fileURLToPath(
  new URL(
    path.join('../lib', path.basename(SERVICE_WORKER_SOURCE_PATH)),
    import.meta.url,
  ),
)

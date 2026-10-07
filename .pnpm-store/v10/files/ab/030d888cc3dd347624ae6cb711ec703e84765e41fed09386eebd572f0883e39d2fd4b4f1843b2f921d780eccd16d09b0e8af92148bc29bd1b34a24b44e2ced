import { NetworkFrame } from '../frames/network-frame'
import { NetworkSource } from './network-source'

class TestFrame extends NetworkFrame<any, any, any> {
  constructor() {
    super('test', {})
  }

  getHandlers = () => []
  passthrough = vi.fn()
  errorWith = vi.fn()
  resolve = vi.fn()
  getUnhandledMessage = vi.fn()
}

afterEach(() => {
  vi.clearAllMocks()
})

it('emits the "frame" event when a frame is queued', async () => {
  class CustomNetworkSource extends NetworkSource {
    enable = async () => {}
  }

  const source = new CustomNetworkSource()
  const frameListener = vi.fn()
  source.on('frame', frameListener)

  const frame = new TestFrame()
  await expect(source.queue(frame)).resolves.toBeUndefined()

  expect(frameListener).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({ frame }),
  )
})

it('removes all listeners when "disable" is called', async () => {
  class CustomNetworkSource extends NetworkSource {
    enable = async () => {}
  }

  const source = new CustomNetworkSource()
  const frameListener = vi.fn()
  source.on('frame', frameListener)

  expect(source.disable()).toBeUndefined()
  await expect(source.queue(new TestFrame())).resolves.toBeUndefined()

  expect.soft(frameListener).not.toHaveBeenCalled()
})

it('accepts AbortSignal when attaching event listeners', async () => {
  class CustomNetworkSource extends NetworkSource {
    enable = async () => {}
  }

  const source = new CustomNetworkSource()
  const frame = new TestFrame()

  const frameListener = vi.fn()
  const controller = new AbortController()
  source.on('frame', frameListener, { signal: controller.signal })

  await expect(source.queue(frame)).resolves.toBeUndefined()
  expect(frameListener).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({ frame }),
  )

  frameListener.mockClear()
  controller.abort()

  await expect(source.queue(frame)).resolves.toBeUndefined()
  expect(frameListener).not.toHaveBeenCalled()
})

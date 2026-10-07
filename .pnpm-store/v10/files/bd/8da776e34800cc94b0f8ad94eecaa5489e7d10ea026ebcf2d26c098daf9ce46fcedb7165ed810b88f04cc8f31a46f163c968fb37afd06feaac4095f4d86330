import { Emitter } from 'strict-event-emitter'
import { pipeEvents } from './pipeEvents'

it('pipes events from the source emitter to the destination emitter', () => {
  const source = new Emitter()
  const destination = new Emitter()
  pipeEvents(source, destination)

  const callback = vi.fn()
  destination.on('hello', callback)

  source.emit('hello', 'world', { data: true })
  expect(callback).toHaveBeenNthCalledWith(1, 'world', { data: true })
})

import { until } from './index.js'

it('resolves with the value returned from the callback', async () => {
  await expect(until(async () => 'value')).resolves.toEqual([null, 'value'])
  await expect(until(() => Promise.resolve('value'))).resolves.toEqual([
    null,
    'value',
  ])
})

it('resolves with the error thrown in the callback', async () => {
  await expect(
    until(() => Promise.reject(new Error('error'))),
  ).resolves.toEqual([new Error('error'), null])

  await expect(until(() => Promise.reject('custom reason'))).resolves.toEqual([
    'custom reason',
    null,
  ])
})

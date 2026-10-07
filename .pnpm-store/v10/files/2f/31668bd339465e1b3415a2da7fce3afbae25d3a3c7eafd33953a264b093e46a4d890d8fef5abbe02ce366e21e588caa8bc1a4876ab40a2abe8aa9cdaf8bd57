/**
 * @vitest-environment node
 */
import { it, expect } from 'vitest'
import { normalizeSocketWriteArgs } from './normalizeSocketWriteArgs'

it('normalizes .write()', () => {
  expect(normalizeSocketWriteArgs([undefined])).toEqual([
    undefined,
    undefined,
    undefined,
  ])
  expect(normalizeSocketWriteArgs([null])).toEqual([null, undefined, undefined])
})

it('normalizes .write(chunk)', () => {
  expect(normalizeSocketWriteArgs([Buffer.from('hello')])).toEqual([
    Buffer.from('hello'),
    undefined,
    undefined,
  ])
  expect(normalizeSocketWriteArgs(['hello'])).toEqual([
    'hello',
    undefined,
    undefined,
  ])
  expect(normalizeSocketWriteArgs([null])).toEqual([null, undefined, undefined])
})

it('normalizes .write(chunk, encoding)', () => {
  expect(normalizeSocketWriteArgs([Buffer.from('hello'), 'utf8'])).toEqual([
    Buffer.from('hello'),
    'utf8',
    undefined,
  ])
})

it('normalizes .write(chunk, callback)', () => {
  const callback = () => {}
  expect(normalizeSocketWriteArgs([Buffer.from('hello'), callback])).toEqual([
    Buffer.from('hello'),
    undefined,
    callback,
  ])
})

it('normalizes .write(chunk, encoding, callback)', () => {
  const callback = () => {}
  expect(
    normalizeSocketWriteArgs([Buffer.from('hello'), 'utf8', callback])
  ).toEqual([Buffer.from('hello'), 'utf8', callback])
})

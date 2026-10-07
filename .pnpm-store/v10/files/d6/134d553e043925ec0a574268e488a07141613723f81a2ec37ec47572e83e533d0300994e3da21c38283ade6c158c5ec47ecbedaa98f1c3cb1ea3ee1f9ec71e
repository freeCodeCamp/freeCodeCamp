import { getTimestamp } from './getTimestamp'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

test('returns a timestamp string of the invocation time', () => {
  vi.setSystemTime(new Date('2024-01-01 12:4:8'))
  const timestamp = getTimestamp()
  expect(timestamp).toBe('12:04:08')
})

test('returns a timestamp with milliseconds', () => {
  vi.setSystemTime(new Date('2024-01-01 12:4:8'))
  expect(getTimestamp({ milliseconds: true })).toBe('12:04:08.000')

  vi.setSystemTime(new Date('2024-01-01 12:4:8.000'))
  expect(getTimestamp({ milliseconds: true })).toBe('12:04:08.000')

  vi.setSystemTime(new Date('2024-01-01 12:4:8.4'))
  expect(getTimestamp({ milliseconds: true })).toBe('12:04:08.400')

  vi.setSystemTime(new Date('2024-01-01 12:4:8.123'))
  expect(getTimestamp({ milliseconds: true })).toBe('12:04:08.123')

  vi.setSystemTime(new Date('2024-01-01 12:00:00'))
  expect(getTimestamp({ milliseconds: true })).toBe('12:00:00.000')
})

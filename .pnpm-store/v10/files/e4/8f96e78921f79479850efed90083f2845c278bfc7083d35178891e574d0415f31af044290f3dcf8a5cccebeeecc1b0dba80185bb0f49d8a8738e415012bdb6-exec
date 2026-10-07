import {renderHook, act} from '@testing-library/react-hooks'
import useIntersectionObserver from './index'

const observerMap = new Map()
const instanceMap = new Map()

beforeAll(() => {
  // @ts-ignore
  global.IntersectionObserver = jest.fn((cb, options) => {
    const instance = {
      thresholds: Array.isArray(options.threshold)
        ? options.threshold
        : [options.threshold],
      root: options.root,
      rootMargin: options.rootMargin,
      observe: jest.fn((element: Element) => {
        instanceMap.set(element, instance)
        observerMap.set(element, cb)
      }),
      unobserve: jest.fn((element: Element) => {
        instanceMap.delete(element)
        observerMap.delete(element)
      }),
      disconnect: jest.fn(),
    }
    return instance
  })
})

afterEach(() => {
  // @ts-ignore
  global.IntersectionObserver.mockClear()
  instanceMap.clear()
  observerMap.clear()
})

function mockAllIsIntersecting(isIntersecting: boolean): void {
  observerMap.forEach((onChange, element) => {
    mockIsIntersecting(element, isIntersecting)
  })
}

function mockIsIntersecting(element: Element, isIntersecting: boolean): void {
  const cb = observerMap.get(element)
  if (cb) {
    const entry = [
      {
        isIntersecting,
        target: element,
        intersectionRatio: isIntersecting ? 1 : 0,
      },
    ]

    act(() => cb(entry))
  }
}

function intersectionMockInstance(element: Element): IntersectionObserver {
  return instanceMap.get(element)
}

it('sets initialIsIntersecting', () => {
  expect(
    renderHook(() =>
      useIntersectionObserver(null, {initialIsIntersecting: true})
    ).result.current.isIntersecting
  ).toBe(true)
  expect(
    renderHook(() =>
      useIntersectionObserver(null, {initialIsIntersecting: false})
    ).result.current.isIntersecting
  ).toBe(false)
})

it('observes', () => {
  const element = document.createElement('div')
  renderHook(() => useIntersectionObserver(element))
  const instance = intersectionMockInstance(element)
  expect(instance.observe).toHaveBeenCalledWith(element)
})

it('should be intersecting', () => {
  const element = document.createElement('div')
  const {result} = renderHook(() => useIntersectionObserver(element))

  expect(result.current.isIntersecting).toBe(false)

  mockAllIsIntersecting(true)
  expect(result.current.isIntersecting).toBe(true)

  mockAllIsIntersecting(false)
  expect(result.current.isIntersecting).toBe(false)
})

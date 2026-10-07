import * as React from 'react'
import { flushSync } from 'react-dom'
import {
  elementScroll,
  observeElementOffset,
  observeElementRect,
  observeWindowOffset,
  observeWindowRect,
  PartialKeys,
  Virtualizer,
  VirtualizerOptions,
  windowScroll,
} from '@tanstack/virtual-core'
export * from '@tanstack/virtual-core'

//

const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect

function useVirtualizerBase<
  TScrollElement extends Element | Window,
  TItemElement extends Element,
>(
  options: VirtualizerOptions<TScrollElement, TItemElement>,
): Virtualizer<TScrollElement, TItemElement> {
  const rerender = React.useReducer(() => ({}), {})[1]

  const resolvedOptions: VirtualizerOptions<TScrollElement, TItemElement> = {
    ...options,
    onChange: (instance, sync) => {
      if (sync) {
        flushSync(rerender)
      } else {
        rerender()
      }
      options.onChange?.(instance, sync)
    },
  }

  const [instance] = React.useState(
    () => new Virtualizer<TScrollElement, TItemElement>(resolvedOptions),
  )

  instance.setOptions(resolvedOptions)

  React.useEffect(() => {
    return instance._didMount()
  }, [])

  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate()
  })

  return instance
}

export function useVirtualizer<
  TScrollElement extends Element,
  TItemElement extends Element,
>(
  options: PartialKeys<
    VirtualizerOptions<TScrollElement, TItemElement>,
    'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
  >,
): Virtualizer<TScrollElement, TItemElement> {
  return useVirtualizerBase<TScrollElement, TItemElement>({
    observeElementRect: observeElementRect,
    observeElementOffset: observeElementOffset,
    scrollToFn: elementScroll,
    ...options,
  })
}

export function useWindowVirtualizer<TItemElement extends Element>(
  options: PartialKeys<
    VirtualizerOptions<Window, TItemElement>,
    | 'getScrollElement'
    | 'observeElementRect'
    | 'observeElementOffset'
    | 'scrollToFn'
  >,
): Virtualizer<Window, TItemElement> {
  return useVirtualizerBase<Window, TItemElement>({
    getScrollElement: () => (typeof document !== 'undefined' ? window : null),
    observeElementRect: observeWindowRect,
    observeElementOffset: observeWindowOffset,
    scrollToFn: windowScroll,
    initialOffset: typeof document !== 'undefined' ? window.scrollY : undefined,
    ...options,
  })
}

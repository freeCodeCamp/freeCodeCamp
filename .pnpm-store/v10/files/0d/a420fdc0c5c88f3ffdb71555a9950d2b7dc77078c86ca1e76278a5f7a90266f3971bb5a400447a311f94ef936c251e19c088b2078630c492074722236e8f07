// TypeScript Version: 3.8

import {
  queries,
  Queries,
  BoundFunction,
  prettyFormat,
  Config as ConfigDTL,
} from '@testing-library/dom'
import {act as reactAct} from 'react-dom/test-utils'

export * from '@testing-library/dom'

export interface Config extends ConfigDTL {
  reactStrictMode: boolean
}

export interface ConfigFn {
  (existingConfig: Config): Partial<Config>
}

export function configure(configDelta: ConfigFn | Partial<Config>): void

export function getConfig(): Config

export type RenderResult<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> = {
  container: Container
  baseElement: BaseElement
  debug: (
    baseElement?:
      | Element
      | DocumentFragment
      | Array<Element | DocumentFragment>,
    maxLength?: number,
    options?: prettyFormat.OptionsReceived,
  ) => void
  rerender: (ui: React.ReactNode) => void
  unmount: () => void
  asFragment: () => DocumentFragment
} & {[P in keyof Q]: BoundFunction<Q[P]>}

export interface RenderOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> {
  /**
   * By default, React Testing Library will create a div and append that div to the document.body. Your React component will be rendered in the created div. If you provide your own HTMLElement container via this option,
   *  it will not be appended to the document.body automatically.
   *
   *  For example: If you are unit testing a `<tbody>` element, it cannot be a child of a div. In this case, you can
   *  specify a table as the render container.
   *
   *  @see https://testing-library.com/docs/react-testing-library/api/#container
   */
  container?: Container
  /**
   * Defaults to the container if the container is specified. Otherwise `document.body` is used for the default. This is used as
   *  the base element for the queries as well as what is printed when you use `debug()`.
   *
   *  @see https://testing-library.com/docs/react-testing-library/api/#baseelement
   */
  baseElement?: BaseElement
  /**
   * If `hydrate` is set to `true`, then it will render with `ReactDOM.hydrate`. This may be useful if you are using server-side
   *  rendering and use ReactDOM.hydrate to mount your components.
   *
   *  @see https://testing-library.com/docs/react-testing-library/api/#hydrate)
   */
  hydrate?: boolean
  /**
   * Only works if used with React 18.
   * Set to `true` if you want to force synchronous `ReactDOM.render`.
   * Otherwise `render` will default to concurrent React if available.
   */
  legacyRoot?: boolean
  /**
   * Queries to bind. Overrides the default set from DOM Testing Library unless merged.
   *
   *  @see https://testing-library.com/docs/react-testing-library/api/#queries
   */
  queries?: Q
  /**
   * Pass a React Component as the wrapper option to have it rendered around the inner element. This is most useful for creating
   *  reusable custom render functions for common data providers. See setup for examples.
   *
   *  @see https://testing-library.com/docs/react-testing-library/api/#wrapper
   */
  wrapper?: React.JSXElementConstructor<{children: React.ReactNode}>
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Render into a container which is appended to document.body. It should be used with cleanup.
 */
export function render<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  ui: React.ReactNode,
  options: RenderOptions<Q, Container, BaseElement>,
): RenderResult<Q, Container, BaseElement>
export function render(
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult

export interface RenderHookResult<Result, Props> {
  /**
   * Triggers a re-render. The props will be passed to your renderHook callback.
   */
  rerender: (props?: Props) => void
  /**
   * This is a stable reference to the latest value returned by your renderHook
   * callback
   */
  result: {
    /**
     * The value returned by your renderHook callback
     */
    current: Result
  }
  /**
   * Unmounts the test component. This is useful for when you need to test
   * any cleanup your useEffects have.
   */
  unmount: () => void
}

export interface RenderHookOptions<
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> extends RenderOptions<Q, Container, BaseElement> {
  /**
   * The argument passed to the renderHook callback. Can be useful if you plan
   * to use the rerender utility to change the values passed to your hook.
   */
  initialProps?: Props
}

/**
 * Allows you to render a hook within a test React component without having to
 * create that component yourself.
 */
export function renderHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement>,
): RenderHookResult<Result, Props>

/**
 * Unmounts React trees that were mounted with render.
 */
export function cleanup(): void

/**
 * Simply calls ReactDOMTestUtils.act(cb)
 * If that's not available (older version of react) then it
 * simply calls the given callback immediately
 */
export const act: typeof reactAct extends undefined
  ? (callback: () => void) => void
  : typeof reactAct

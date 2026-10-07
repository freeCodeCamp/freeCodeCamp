import {ByRoleMatcher, Matcher, MatcherOptions} from './matches'
import {SelectorMatcherOptions} from './query-helpers'
import {waitForOptions} from './wait-for'

export type QueryByBoundAttribute<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions,
) => T | null

export type AllByBoundAttribute<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions,
) => T[]

export type FindAllByBoundAttribute<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T[]>

export type GetByBoundAttribute<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions,
) => T

export type FindByBoundAttribute<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T>

export type QueryByText<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: SelectorMatcherOptions,
) => T | null

export type AllByText<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: SelectorMatcherOptions,
) => T[]

export type FindAllByText<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: SelectorMatcherOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T[]>

export type GetByText<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: SelectorMatcherOptions,
) => T

export type FindByText<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  id: Matcher,
  options?: SelectorMatcherOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T>

export interface ByRoleOptions {
  /** suppress suggestions for a specific query */
  suggest?: boolean
  /**
   * If true includes elements in the query set that are usually excluded from
   * the accessibility tree. `role="none"` or `role="presentation"` are included
   * in either case.
   */
  hidden?: boolean
  /**
   * If true only includes elements in the query set that are marked as
   * selected in the accessibility tree, i.e., `aria-selected="true"`
   */
  selected?: boolean
  /**
   * If true only includes elements in the query set that are marked as
   * busy in the accessibility tree, i.e., `aria-busy="true"`
   */
  busy?: boolean
  /**
   * If true only includes elements in the query set that are marked as
   * checked in the accessibility tree, i.e., `aria-checked="true"`
   */
  checked?: boolean
  /**
   * If true only includes elements in the query set that are marked as
   * pressed in the accessibility tree, i.e., `aria-pressed="true"`
   */
  pressed?: boolean
  /**
   * Filters elements by their `aria-current` state. `true` and `false` match `aria-current="true"` and `aria-current="false"` (as well as a missing `aria-current` attribute) respectively.
   */
  current?: boolean | string
  /**
   * If true only includes elements in the query set that are marked as
   * expanded in the accessibility tree, i.e., `aria-expanded="true"`
   */
  expanded?: boolean
  /**
   * Includes elements with the `"heading"` role matching the indicated level,
   * either by the semantic HTML heading elements `<h1>-<h6>` or matching
   * the `aria-level` attribute.
   */
  level?: number
  value?: {
    now?: number
    min?: number
    max?: number
    text?: Matcher
  }
  /**
   * Includes every role used in the `role` attribute
   * For example *ByRole('progressbar', {queryFallbacks: true})` will find <div role="meter progressbar">`.
   */
  queryFallbacks?: boolean
  /**
   * Only considers elements with the specified accessible name.
   */
  name?:
    | RegExp
    | string
    | ((accessibleName: string, element: Element) => boolean)
  /**
   * Only considers elements with the specified accessible description.
   */
  description?:
    | RegExp
    | string
    | ((accessibleDescription: string, element: Element) => boolean)
}

export type AllByRole<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  role: ByRoleMatcher,
  options?: ByRoleOptions,
) => T[]

export type GetByRole<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  role: ByRoleMatcher,
  options?: ByRoleOptions,
) => T

export type QueryByRole<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  role: ByRoleMatcher,
  options?: ByRoleOptions,
) => T | null

export type FindByRole<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  role: ByRoleMatcher,
  options?: ByRoleOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T>

export type FindAllByRole<T extends HTMLElement = HTMLElement> = (
  container: HTMLElement,
  role: ByRoleMatcher,
  options?: ByRoleOptions,
  waitForElementOptions?: waitForOptions,
) => Promise<T[]>

export function getByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByText<T>>
): ReturnType<GetByText<T>>
export function getAllByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByText<T>>
): ReturnType<AllByText<T>>
export function queryByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByText<T>>
): ReturnType<QueryByText<T>>
export function queryAllByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByText<T>>
): ReturnType<AllByText<T>>
export function findByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByText<T>>
): ReturnType<FindByText<T>>
export function findAllByLabelText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByText<T>>
): ReturnType<FindAllByText<T>>
export function getByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByBoundAttribute<T>>
): ReturnType<GetByBoundAttribute<T>>
export function getAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function queryByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByBoundAttribute<T>>
): ReturnType<QueryByBoundAttribute<T>>
export function queryAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function findByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByBoundAttribute<T>>
): ReturnType<FindByBoundAttribute<T>>
export function findAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByBoundAttribute<T>>
): ReturnType<FindAllByBoundAttribute<T>>
export function getByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByText<T>>
): ReturnType<GetByText<T>>
export function getAllByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByText<T>>
): ReturnType<AllByText<T>>
export function queryByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByText<T>>
): ReturnType<QueryByText<T>>
export function queryAllByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByText<T>>
): ReturnType<AllByText<T>>
export function findByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByText<T>>
): ReturnType<FindByText<T>>
export function findAllByText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByText<T>>
): ReturnType<FindAllByText<T>>
export function getByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByBoundAttribute<T>>
): ReturnType<GetByBoundAttribute<T>>
export function getAllByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function queryByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByBoundAttribute<T>>
): ReturnType<QueryByBoundAttribute<T>>
export function queryAllByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function findByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByBoundAttribute<T>>
): ReturnType<FindByBoundAttribute<T>>
export function findAllByAltText<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByBoundAttribute<T>>
): ReturnType<FindAllByBoundAttribute<T>>
export function getByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByBoundAttribute<T>>
): ReturnType<GetByBoundAttribute<T>>
export function getAllByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function queryByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByBoundAttribute<T>>
): ReturnType<QueryByBoundAttribute<T>>
export function queryAllByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function findByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByBoundAttribute<T>>
): ReturnType<FindByBoundAttribute<T>>
export function findAllByTitle<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByBoundAttribute<T>>
): ReturnType<FindAllByBoundAttribute<T>>
export function getByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByBoundAttribute<T>>
): ReturnType<GetByBoundAttribute<T>>
export function getAllByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function queryByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByBoundAttribute<T>>
): ReturnType<QueryByBoundAttribute<T>>
export function queryAllByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function findByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByBoundAttribute<T>>
): ReturnType<FindByBoundAttribute<T>>
export function findAllByDisplayValue<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByBoundAttribute<T>>
): ReturnType<FindAllByBoundAttribute<T>>
export function getByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByRole<T>>
): ReturnType<GetByRole<T>>
export function getAllByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByRole<T>>
): ReturnType<AllByRole<T>>
export function queryByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByRole<T>>
): ReturnType<QueryByRole<T>>
export function queryAllByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByRole<T>>
): ReturnType<AllByRole<T>>
export function findByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByRole<T>>
): ReturnType<FindByRole<T>>
export function findAllByRole<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByRole<T>>
): ReturnType<FindAllByRole<T>>
export function getByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<GetByBoundAttribute<T>>
): ReturnType<GetByBoundAttribute<T>>
export function getAllByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function queryByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<QueryByBoundAttribute<T>>
): ReturnType<QueryByBoundAttribute<T>>
export function queryAllByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<AllByBoundAttribute<T>>
): ReturnType<AllByBoundAttribute<T>>
export function findByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindByBoundAttribute<T>>
): ReturnType<FindByBoundAttribute<T>>
export function findAllByTestId<T extends HTMLElement = HTMLElement>(
  ...args: Parameters<FindAllByBoundAttribute<T>>
): ReturnType<FindAllByBoundAttribute<T>>

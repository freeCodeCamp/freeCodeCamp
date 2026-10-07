import * as queries from './queries'

export type BoundFunction<T> = T extends (
  container: HTMLElement,
  ...args: infer P
) => infer R
  ? (...args: P) => R
  : never

export type BoundFunctions<Q> = Q extends typeof queries
  ? {
      getByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByText<T>>>
      ): ReturnType<queries.GetByText<T>>
      getAllByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      queryByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByText<T>>>
      ): ReturnType<queries.QueryByText<T>>
      queryAllByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      findByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByText<T>>>
      ): ReturnType<queries.FindByText<T>>
      findAllByLabelText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByText<T>>>
      ): ReturnType<queries.FindAllByText<T>>
      getByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByPlaceholderText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByText<T>>>
      ): ReturnType<queries.GetByText<T>>
      getAllByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      queryByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByText<T>>>
      ): ReturnType<queries.QueryByText<T>>
      queryAllByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      findByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByText<T>>>
      ): ReturnType<queries.FindByText<T>>
      findAllByText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByText<T>>>
      ): ReturnType<queries.FindAllByText<T>>
      getByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByAltText<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByTitle<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByDisplayValue<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByRole<T>>>
      ): ReturnType<queries.GetByRole<T>>
      getAllByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByRole<T>>>
      ): ReturnType<queries.AllByRole<T>>
      queryByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByRole<T>>>
      ): ReturnType<queries.QueryByRole<T>>
      queryAllByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByRole<T>>>
      ): ReturnType<queries.AllByRole<T>>
      findByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByRole<T>>>
      ): ReturnType<queries.FindByRole<T>>
      findAllByRole<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByRole<T>>>
      ): ReturnType<queries.FindAllByRole<T>>
      getByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByTestId<T extends HTMLElement = HTMLElement>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
    } & {
      [P in keyof Q]: BoundFunction<Q[P]>
    }
  : {
      [P in keyof Q]: BoundFunction<Q[P]>
    }

export type Query = (
  container: HTMLElement,
  ...args: any[]
) =>
  | Error
  | HTMLElement
  | HTMLElement[]
  | Promise<HTMLElement[]>
  | Promise<HTMLElement>
  | null

export interface Queries {
  [T: string]: Query
}

export function getQueriesForElement<
  QueriesToBind extends Queries = typeof queries,
  // Extra type parameter required for reassignment.
  T extends QueriesToBind = QueriesToBind,
>(element: HTMLElement, queriesToBind?: T): BoundFunctions<T>

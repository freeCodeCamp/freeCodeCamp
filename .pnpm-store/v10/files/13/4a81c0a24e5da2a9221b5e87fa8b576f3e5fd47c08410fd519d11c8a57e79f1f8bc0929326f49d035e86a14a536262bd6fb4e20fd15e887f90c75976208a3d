import { Middleware, MiddlewareAPI, Action, Store } from 'redux';
import { Observable, ObservableInput, Operator, SchedulerLike, Subject } from 'rxjs';

export declare class ActionsObservable<T extends Action> extends Observable<T> {
  /**
   * Just like RxJS itself, we can't actually make this method always type-safe
   * because we would need non-final position spread params e.g.
   *   `static of<T>(...items: T, scheduler?: Scheduler): ActionsObservable<T>`
   * which isn't possible in either JavaScript or TypeScript. So instead, we
   * provide safe typing for up to 6 items, following by a scheduler.
   */
  static of<T extends Action>(item1: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(item1: T, item2: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(item1: T, item2: T, item3: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(item1: T, item2: T, item3: T, item4: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(item1: T, item2: T, item3: T, item4: T, item5: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(item1: T, item2: T, item3: T, item4: T, item5: T, item6: T, scheduler?: SchedulerLike): ActionsObservable<T>;
  static of<T extends Action>(...array: Array<T | SchedulerLike>): ActionsObservable<T>;

  static from<T extends Action>(ish: ObservableInput<T>, scheduler?: SchedulerLike): ActionsObservable<T>;
  static from<T extends Action, R extends Action>(ish: ArrayLike<T>, scheduler?: SchedulerLike): ActionsObservable<R>;

  constructor(input$: Observable<T>);
  lift<R extends Action>(operator: Operator<T, R>): ActionsObservable<R>;
  lift<R>(operator: Operator<T, R>): Observable<R>;
  ofType<R extends T = T>(...key: R['type'][]): ActionsObservable<R>;
}

export declare class StateObservable<S> extends Observable<S> {
  source: Subject<S>;
  constructor(stateSubject: Subject<S>, initialState: S);

  value: S
}

export declare interface Epic<Input extends Action = any, Output extends Input = Input, State = any, Dependencies = any> {
  (action$: ActionsObservable<Input>, state$: StateObservable<State>, dependencies: Dependencies): Observable<Output>;
}

export interface EpicMiddleware<T extends Action, O extends T = T, S = void, D = any> extends Middleware {
  run(rootEpic: Epic<T, O, S, D>): void;
}

interface Options<D = any> {
  dependencies?: D;
}

export declare function createEpicMiddleware<T extends Action, O extends T = T, S = void, D = any>(options?: Options<D>): EpicMiddleware<T, O, S, D>;

export declare function combineEpics<T extends Action, O extends T = T, S = void, D = any>(...epics: Epic<T, O, S, D>[]): Epic<T, O, S, D>;
export declare function combineEpics<E>(...epics: E[]): E;
export declare function combineEpics(...epics: any[]): any;

export declare function ofType<T extends Action, R extends T = T, K extends R['type'] = R['type']>(...key: K[]): (source: Observable<T>) => Observable<R>;

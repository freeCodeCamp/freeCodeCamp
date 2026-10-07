declare global {
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

/**
@remarks
The TC39 observable proposal defines a `closed` property, but some implementations (such as xstream) do not as of 10/08/2021.
As well, some guideance on making an `Observable` do not include `closed` propery.
@see https://github.com/tc39/proposal-observable/blob/master/src/Observable.js#L129-L130
@see https://github.com/staltz/xstream/blob/6c22580c1d84d69773ee4b0905df44ad464955b3/src/index.ts#L79-L85
@see https://github.com/benlesh/symbol-observable#making-an-object-observable

@category Observable
*/
export type Unsubscribable = {
	unsubscribe(): void;
};

/**
@category Observable
*/
type OnNext<ValueType> = (value: ValueType) => void;
/**
@category Observable
*/
type OnError = (error: unknown) => void;
/**
@category Observable
*/
type OnComplete = () => void;

/**
@category Observable
*/
export type Observer<ValueType> = {
	next: OnNext<ValueType>;
	error: OnError;
	complete: OnComplete;
};

/**
Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).

@remarks
The TC39 Observable proposal defines 2 forms of `subscribe()`:
1. Three callback arguments: `subscribe(observer: OnNext<ValueType>, onError?: OnError, onComplete?: OnComplete): Unsubscribable;`
2. A single `observer` argument: (as defined below)

But `Observable` implementations have evolved to preferring case 2 and some implementations choose not to implement case 1. Therefore, an `ObservableLike` cannot be trusted to implement the first case. (xstream and hand built observerables often do not implement case 1)

@see https://github.com/tc39/proposal-observable#observable
@see https://github.com/tc39/proposal-observable/blob/master/src/Observable.js#L246-L259
@see https://benlesh.com/posts/learning-observable-by-building-observable/

@category Observable
*/
export interface ObservableLike<ValueType = unknown> {
	subscribe(observer?: Partial<Observer<ValueType>>): Unsubscribable;
	[Symbol.observable](): ObservableLike<ValueType>;
}

/**
The rejection reason when `.cancel()` is called.

It includes a `.isCanceled` property for convenience.
*/
export class CancelError extends Error {
	readonly name: 'CancelError';
	readonly isCanceled: true;

	constructor(reason?: string);
}

/**
Accepts a function that is called when the promise is canceled.

You're not required to call this function. You can call this function multiple times to add multiple cancel handlers.
*/
export interface OnCancelFunction {
	shouldReject: boolean;
	(cancelHandler: () => void): void;
}

export default class PCancelable<ValueType> extends Promise<ValueType> {
	/**
	Whether the promise is canceled.
	*/
	readonly isCanceled: boolean;

	/**
	Cancel the promise and optionally provide a reason.

	The cancellation is synchronous. Calling it after the promise has settled or multiple times does nothing.

	@param reason - The cancellation reason to reject the promise with.
	*/
	cancel: (reason?: string) => void;

	/**
	Create a promise that can be canceled.

	Can be constructed in the same was as a [`Promise` constructor](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), but with an appended `onCancel` parameter in `executor`. `PCancelable` is a subclass of `Promise`.

	Cancelling will reject the promise with `CancelError`. To avoid that, set `onCancel.shouldReject` to `false`.

	@example
	```
	import PCancelable from 'p-cancelable';

	const cancelablePromise = new PCancelable((resolve, reject, onCancel) => {
		const job = new Job();

		onCancel.shouldReject = false;
		onCancel(() => {
			job.stop();
		});

		job.on('finish', resolve);
	});

	cancelablePromise.cancel(); // Doesn't throw an error
	```
	*/
	constructor(
		executor: (
			resolve: (value?: ValueType | PromiseLike<ValueType>) => void,
			reject: (reason?: unknown) => void,
			onCancel: OnCancelFunction
		) => void
	);

	/**
	Convenience method to make your promise-returning or async function cancelable.

	@param fn - A promise-returning function. The function you specify will have `onCancel` appended to its parameters.

	@example
	```
	import PCancelable from 'p-cancelable';

	const fn = PCancelable.fn((input, onCancel) => {
		const job = new Job();

		onCancel(() => {
			job.cleanup();
		});

		return job.start(); //=> Promise
	});

	const cancelablePromise = fn('input'); //=> PCancelable

	// …

	cancelablePromise.cancel();
	```
	*/
	static fn<ReturnType>(
		userFn: (onCancel: OnCancelFunction) => PromiseLike<ReturnType>
	): () => PCancelable<ReturnType>;
	static fn<Agument1Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			onCancel: OnCancelFunction
		) => PromiseLike<ReturnType>
	): (argument1: Agument1Type) => PCancelable<ReturnType>;
	static fn<Agument1Type, Agument2Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			argument2: Agument2Type,
			onCancel: OnCancelFunction
		) => PromiseLike<ReturnType>
	): (
		argument1: Agument1Type,
		argument2: Agument2Type
	) => PCancelable<ReturnType>;
	static fn<Agument1Type, Agument2Type, Agument3Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			argument2: Agument2Type,
			argument3: Agument3Type,
			onCancel: OnCancelFunction
		) => PromiseLike<ReturnType>
	): (
		argument1: Agument1Type,
		argument2: Agument2Type,
		argument3: Agument3Type
	) => PCancelable<ReturnType>;
	static fn<Agument1Type, Agument2Type, Agument3Type, Agument4Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			argument2: Agument2Type,
			argument3: Agument3Type,
			argument4: Agument4Type,
			onCancel: OnCancelFunction
		) => PromiseLike<ReturnType>
	): (
		argument1: Agument1Type,
		argument2: Agument2Type,
		argument3: Agument3Type,
		argument4: Agument4Type
	) => PCancelable<ReturnType>;
	static fn<
		Agument1Type,
		Agument2Type,
		Agument3Type,
		Agument4Type,
		Agument5Type,
		ReturnType
	>(
		userFn: (
			argument1: Agument1Type,
			argument2: Agument2Type,
			argument3: Agument3Type,
			argument4: Agument4Type,
			argument5: Agument5Type,
			onCancel: OnCancelFunction
		) => PromiseLike<ReturnType>
	): (
		argument1: Agument1Type,
		argument2: Agument2Type,
		argument3: Agument3Type,
		argument4: Agument4Type,
		argument5: Agument5Type
	) => PCancelable<ReturnType>;
	static fn<ReturnType>(
		userFn: (...arguments: unknown[]) => PromiseLike<ReturnType>
	): (...arguments: unknown[]) => PCancelable<ReturnType>;
}

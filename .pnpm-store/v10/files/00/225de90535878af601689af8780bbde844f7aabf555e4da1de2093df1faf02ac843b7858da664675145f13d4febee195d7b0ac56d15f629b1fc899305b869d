declare class CancelErrorClass extends Error {
	readonly name: 'CancelError';
	readonly isCanceled: true;

	constructor(reason?: string);
}

declare namespace PCancelable {
	/**
	Accepts a function that is called when the promise is canceled.

	You're not required to call this function. You can call this function multiple times to add multiple cancel handlers.
	*/
	interface OnCancelFunction {
		(cancelHandler: () => void): void;
		shouldReject: boolean;
	}

	type CancelError = CancelErrorClass;
}

declare class PCancelable<ValueType> extends Promise<ValueType> {
	/**
	Convenience method to make your promise-returning or async function cancelable.

	@param fn - A promise-returning function. The function you specify will have `onCancel` appended to its parameters.

	@example
	```
	import PCancelable = require('p-cancelable');

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
		userFn: (onCancel: PCancelable.OnCancelFunction) => PromiseLike<ReturnType>
	): () => PCancelable<ReturnType>;
	static fn<Agument1Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			onCancel: PCancelable.OnCancelFunction
		) => PromiseLike<ReturnType>
	): (argument1: Agument1Type) => PCancelable<ReturnType>;
	static fn<Agument1Type, Agument2Type, ReturnType>(
		userFn: (
			argument1: Agument1Type,
			argument2: Agument2Type,
			onCancel: PCancelable.OnCancelFunction
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
			onCancel: PCancelable.OnCancelFunction
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
			onCancel: PCancelable.OnCancelFunction
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
			onCancel: PCancelable.OnCancelFunction
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

	/**
	Create a promise that can be canceled.

	Can be constructed in the same was as a [`Promise` constructor](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), but with an appended `onCancel` parameter in `executor`. `PCancelable` is a subclass of `Promise`.

	Cancelling will reject the promise with `CancelError`. To avoid that, set `onCancel.shouldReject` to `false`.

	@example
	```
	import PCancelable = require('p-cancelable');

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
			onCancel: PCancelable.OnCancelFunction
		) => void
	);

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
	Rejection reason when `.cancel()` is called.

	It includes a `.isCanceled` property for convenience.
	*/
	static CancelError: typeof CancelErrorClass;
}

export = PCancelable;

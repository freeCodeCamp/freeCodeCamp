# p-cancelable

> Create a promise that can be canceled

Useful for animation, loading resources, long-running async computations, async iteration, etc.

*If you target [Node.js 15](https://medium.com/@nodejs/node-js-v15-0-0-is-here-deb00750f278) or later, this package is [less useful](https://github.com/sindresorhus/p-cancelable/issues/27) and you should probably use [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) instead.*

## Install

```
$ npm install p-cancelable
```

## Usage

```js
const PCancelable = require('p-cancelable');

const cancelablePromise = new PCancelable((resolve, reject, onCancel) => {
	const worker = new SomeLongRunningOperation();

	onCancel(() => {
		worker.close();
	});

	worker.on('finish', resolve);
	worker.on('error', reject);
});

(async () => {
	try {
		console.log('Operation finished successfully:', await cancelablePromise);
	} catch (error) {
		if (cancelablePromise.isCanceled) {
			// Handle the cancelation here
			console.log('Operation was canceled');
			return;
		}

		throw error;
	}
})();

// Cancel the operation after 10 seconds
setTimeout(() => {
	cancelablePromise.cancel('Unicorn has changed its color');
}, 10000);
```

## API

### new PCancelable(executor)

Same as the [`Promise` constructor](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), but with an appended `onCancel` parameter in `executor`.<br>
Cancelling will reject the promise with `PCancelable.CancelError`. To avoid that, set `onCancel.shouldReject` to `false`.

```js
const PCancelable = require('p-cancelable');

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

`PCancelable` is a subclass of `Promise`.

#### onCanceled(fn)

Type: `Function`

Accepts a function that is called when the promise is canceled.

You're not required to call this function. You can call this function multiple times to add multiple cancel handlers.

### PCancelable#cancel(reason?)

Type: `Function`

Cancel the promise and optionally provide a reason.

The cancellation is synchronous. Calling it after the promise has settled or multiple times does nothing.

### PCancelable#isCanceled

Type: `boolean`

Whether the promise is canceled.

### PCancelable.CancelError

Type: `Error`

Rejection reason when `.cancel()` is called.

It includes a `.isCanceled` property for convenience.

### PCancelable.fn(fn)

Convenience method to make your promise-returning or async function cancelable.

The function you specify will have `onCancel` appended to its parameters.

```js
const PCancelable = require('p-cancelable');

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

## FAQ

### Cancelable vs. Cancellable

[In American English, the verb cancel is usually inflected canceled and canceling—with one l.](http://grammarist.com/spelling/cancel/)<br>Both a [browser API](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable) and the [Cancelable Promises proposal](https://github.com/tc39/proposal-cancelable-promises) use this spelling.

### What about the official [Cancelable Promises proposal](https://github.com/tc39/proposal-cancelable-promises)?

~~It's still an early draft and I don't really like its current direction. It complicates everything and will require deep changes in the ecosystem to adapt to it. And the way you have to use cancel tokens is verbose and convoluted. I much prefer the more pragmatic and less invasive approach in this module.~~ The proposal was withdrawn.

## p-cancelable for enterprise

Available as part of the Tidelift Subscription.

The maintainers of p-cancelable and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-p-cancelable?utm_source=npm-p-cancelable&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Related

- [p-progress](https://github.com/sindresorhus/p-progress) - Create a promise that reports progress
- [p-lazy](https://github.com/sindresorhus/p-lazy) - Create a lazy promise that defers execution until `.then()` or `.catch()` is called
- [More…](https://github.com/sindresorhus/promise-fun)

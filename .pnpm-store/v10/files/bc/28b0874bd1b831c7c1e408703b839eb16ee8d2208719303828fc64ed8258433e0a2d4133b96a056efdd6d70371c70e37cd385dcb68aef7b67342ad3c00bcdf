declare class Queue<ValueType> implements Iterable<ValueType> {
	/**
	The size of the queue.
	*/
	readonly size: number;

	/**
	Tiny queue data structure.

	The instance is an [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), which means you can iterate over the queue front to back with a “for…of” loop, or use spreading to convert the queue to an array. Don't do this unless you really need to though, since it's slow.

	@example
	```
	import Queue = require('yocto-queue');

	const queue = new Queue();

	queue.enqueue('🦄');
	queue.enqueue('🌈');

	console.log(queue.size);
	//=> 2

	console.log(...queue);
	//=> '🦄 🌈'

	console.log(queue.dequeue());
	//=> '🦄'

	console.log(queue.dequeue());
	//=> '🌈'
	```
	*/
	constructor();

	[Symbol.iterator](): IterableIterator<ValueType>;

	/**
	Add a value to the queue.
	*/
	enqueue(value: ValueType): void;

	/**
	Remove the next value in the queue.

	@returns The removed value or `undefined` if the queue is empty.
	*/
	dequeue(): ValueType | undefined;

	/**
	Clear the queue.
	*/
	clear(): void;
}

export = Queue;

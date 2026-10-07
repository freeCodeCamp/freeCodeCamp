/**
Get the element type of an `Iterable`/`AsyncIterable`. For example, an array or a generator.

This can be useful, for example, if you want to get the type that is yielded in a generator function. Often the return type of those functions are not specified.

This type works with both `Iterable`s and `AsyncIterable`s, so it can be use with synchronous and asynchronous generators.

Here is an example of `IterableElement` in action with a generator function:

@example
```
function * iAmGenerator() {
	yield 1;
	yield 2;
}

type MeNumber = IterableElement<ReturnType<typeof iAmGenerator>>
```

And here is an example with an async generator:

@example
```
async function * iAmGeneratorAsync() {
	yield 'hi';
	yield true;
}

type MeStringOrBoolean = IterableElement<ReturnType<typeof iAmGeneratorAsync>>
```

Many types in JavaScript/TypeScript are iterables. This type works on all types that implement those interfaces. For example, `Array`, `Set`, `Map`, `stream.Readable`, etc.

An example with an array of strings:

@example
```
type MeString = IterableElement<string[]>
```
*/
export type IterableElement<TargetIterable> =
	TargetIterable extends Iterable<infer ElementType> ?
	ElementType :
	TargetIterable extends AsyncIterable<infer ElementType> ?
	ElementType :
	never;

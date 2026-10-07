# value-or-promise

A thenable to streamline a possibly sync / possibly async workflow.

# Installation

`yarn add value-or-promise` or `npm install value-or-promise`

# Basic Motivation

Instead of writing:

```js
function myFunction() {
    const valueOrPromise = getValueOrPromise();

    if (isPromise(valueOrPromise)) {
        return valueOrPromise.then(v => onValue(v));
    }
    
    return onValue(valueOrPromise);
}
```

...write:

```js
function myFunction() {
    return new ValueOrPromise(getValueOrPromise)
        .then(v => onValue(v))
        .resolve();
}
```

When working with functions that may or may not return promises, we usually have to duplicate handlers in both the synchronous and asynchronous code paths. In the most basic scenario included above, using `value-or-promise` already provides some code savings, i.e. we only have to reference `doSomethingWithValue` once.

# More Chaining

Things start to get even more beneficial when we add more sync-or-async functions to the chain.

Instead of writing:

```js
function myFunction() {
    const valueOrPromise = getValueOrPromise();

    if (isPromise(valueOrPromise)) {
        return valueOrPromise
            .then(v => first(v))
            .then(v => second(v));
    }

    const nextValueOrPromise = first(ValueOrPromise)

    if (isPromise(nextValueOrPromise)) {
        return nextValueOrPromise.then(v => second(v));
    }
    
    return second(nextValueOrPromise);
}
```

...write:

```js
function myFunction() {
    return new ValueOrPromise(getValueOrPromise)
        .then(v => first(v))
        .then(v => second(v))
        .resolve();
}
```

# Error Handling

Even with shorter chains, `value-or-promise` comes in handy when managing errors.

Instead of writing:

```js
function myFunction() {
    try {
        const valueOrPromise = getValueOrPromise();

        if (isPromise(valueOrPromise)) {
            return valueOrPromise
                .then(v => onValue(v))
                .catch(error => console.log(error));
        }
    
        const nextValueOrPromise = onValue(valueOrPromise);

        if (isPromise(nextValueOrPromise)) {
            return nextValueOrPromise
                .catch(error => console.log(error));
        }

        return nextValueOrPromise;
    } catch (error) {
        console.log(error);
    }
}
```

...write:

```js
function myFunction() {
    return new ValueOrPromise(getValueOrPromise)
        .then(v => onValue(v))
        .catch(error => console.log(error))
        .resolve();
}
```

# Alternatives

A simpler way of streamlining the above is to always return a promise.

Instead of writing:

```js
function myFunction() {
    const valueOrPromise = getValueOrPromise();

    if (isPromise(valueOrPromise)) {
        return valueOrPromise.then(v => onValue(v));
    }
    
    return onValue(valueOrPromise);
}
```

...or writing:

```js
function myFunction() {
    return new ValueOrPromise(getValueOrPromise)
        .then(v => onValue(v))
        .resolve();
}
```

...we could write:

```js
function myFunction() {
    return Promise.resolve(getValueOrPromise)
        .then(v => onValue(v));
}
```

...but then we would always have to return a promise! If we are trying to avoid the event loop when possible, this will not suffice.

# `ValueOrPromise.all(...)?`

We can use `ValueOrPromise.all(...)` analogous to `Promise.all(...)` to create a new `ValueOrPromise` object that will either resolve to an array of values, if none of the passed `ValueOrPromise` objects contain underlying promises, or to a new promise, if one or more of the `ValueOrPromise` objects contain an underlying promise, where the new promise will resolve when all of the potential promises have resolved.

For example:

```js
function myFunction() {
    const first = new ValueOrPromise(getFirst);
    const second = new ValueOrPromise(getSecond);
    return ValueOrPromise.all([first, second]).then(
        all => onAll(all)
    ).resolve();
}
```

`myFunction` with return a value if and only if `getFirst` and `getSecond` both return values. If either returns a promise, `myFunction` will return a promise. If both `getFirst` and `getSecond` return promises, the new promise returned by `myFunction` will resolve only after both promises resolve, just like with `Promise.all`. 

# Inspiration

The `value-to-promise` concept is by [Ivan Goncharov](https://github.com/IvanGoncharov).

Implementation errors are my own.
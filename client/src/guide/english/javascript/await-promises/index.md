---
title: Await Promises
---
## Await Promises

The `async` / `await` <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators' target='_blank' rel='nofollow'>operators</a> make it easier to implement many async Promises. They also allow engineers to write clearer, more succinct, testable code.

To understand this subject, you should have a solid understanding of how <a href='https://guide.freecodecamp.org/javascript/promises' target='_blank' rel='nofollow'>Promises</a> work.

---

## Basic Syntax

``` javascript
function slowlyResolvedPromiseFunc(string) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(string);
    }, 5000);
  });
}

async function doIt() {
  const myPromise = await slowlyResolvedPromiseFunc("foo");
  console.log(myPromise); // "foo"
}

doIt();
```

There are a few things to note:

* The function that encompasses the `await` declaration must include the `async` operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected.
* The `await` operator must be inline, during the const declaration.
* This works for `reject` as well as `resolve`.

---

## Nested Promises vs. `Async` / `Await`

Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce "spaghetti code".

The following examples assume that the <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> library is available as `rp`.

### Chained/Nested Promises

``` javascript
// First Promise
const fooPromise = rp("http://domain.com/foo");

fooPromise.then(resultFoo => {
    // Must wait for "foo" to resolve
    console.log(resultFoo);

    const barPromise = rp("http://domain.com/bar");
    const bazPromise = rp("http://domain.com/baz");

    return Promise.all([barPromise, bazPromise]);
}).then(resultArr => {
    // Handle "bar" and "baz" resolutions here
    console.log(resultArr[0]);
    console.log(resultArr[1]);
});
```

### `async` and `await` Promises

``` javascript
// Wrap everything in an async function
async function doItAll() {
    // Grab data from "foo" endpoint, but wait for resolution
    console.log(await rp("http://domain.com/foo"));

    // Concurrently kick off the next two async calls,
    // don't wait for "bar" to kick off "baz"
    const barPromise = rp("http://domain.com/bar");
    const bazPromise = rp("http://domain.com/baz");

    // After both are concurrently kicked off, wait for both
    const barResponse = await barPromise;
    const bazResponse = await bazPromise;

    console.log(barResponse);
    console.log(bazResponse);
}

// Finally, invoke the async function
doItAll().then(() => console.log('Done!'));
```

The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable.

It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example.

---

## Handling Errors / Rejection

A basic try-catch block handles a rejected Promise.

``` javascript
async function errorExample() {
  try {
    const rejectedPromise = await Promise.reject("Oh-oh!");
  } catch (error) {
    console.log(error); // "Uh-oh!"
  }
}

errorExample();
```

---

#### More Information:

* `await` Operator <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await' target='_blank' rel='nofollow'>MDN Docs</a>
* `async` Function Operator <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function' target='_blank' rel='nofollow'>MDN Docs</a>
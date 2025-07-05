---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

In JavaScript, we can divide up our code into reusable parts called <dfn>functions</dfn>.

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or <dfn>invoke</dfn> this function by using its name followed by parentheses, like this: `functionName();` Each time the function is called it will print out the message `Hello World` on the dev console. All of the code between the curly braces will be executed every time the function is called.

# --instructions--

<ol>
  <li>
    Create a function called <code>reusableFunction</code> which prints the string <code>Hi World</code> to the dev console.
  </li>
  <li>
    Call the function.
  </li>
</ol>

# --hints--

`reusableFunction` should be a function.

```js
assert.isFunction(reusableFunction);
```

If `reusableFunction` is called, it should output the string `Hi World` to the console.

```js
const spy = __helpers.spyOn(console, "log");
reusableFunction();
assert.sameDeepOrderedMembers(spy.calls, [["Hi World"]]); 
```

You should call `reusableFunction` once it is defined.

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(__helpers.removeJSComments(code)).replace(/reusableFunction\(\)\{/g, '');
assert.match(codeWithoutFunction, /reusableFunction\(\)/)
```

# --seed--


## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```

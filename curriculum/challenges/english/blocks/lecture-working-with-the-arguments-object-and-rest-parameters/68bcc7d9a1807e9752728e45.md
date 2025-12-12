---
id: 68bcc7d9a1807e9752728e45
title: What are Rest Parameters and How Do They Differ from the arguments Object?
challengeType: 19
dashedName: what-are-rest-parameters-and-how-do-they-differ-from-the-arguments-object
---

# --interactive--

In the previous lesson, you learned how to work with the `arguments` object which is an array-like object containing the values of the arguments passed into the function.

:::interactive_editor

```js
function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// result:
// 1
// 2
// 3
```

:::

While this is a valid way to access and work with a variable set of arguments from a function, modern JavaScript applications will use the rest parameter syntax instead.

Here is an updated example using the rest parameter syntax instead of the `arguments` object:

:::interactive_editor

```js
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// result:
// 1
// 2
// 3
```

:::

This updated example no longer references the `arguments` object directly. Instead, the function definition's last parameter has three dots in front of it. This causes this rest parameter to be placed within an `Array` object. You can name this rest parameter whatever you like. Just make sure it is the last parameter in the function definition like this:

```js
function exampleFunction(a, b, ...restOfArgs) {
  // some code here
}

function anotherFunction(x, y, ...theArgs) {
  // some code here
}
```

There are a few more restrictions when dealing with the rest parameter syntax. One restriction is that function definitions can only have one rest parameter. So the following example here would be considered invalid.

```js
// Won't work

function badFunction(...args, ...moreArgs) {
  // some code here
}
```

The next restriction is that trailing commas are not allowed after the rest parameter: `function exampleFunction(a, b, ...restOfArgs, )`.

Another restriction is that the rest parameter cannot have a default value. Otherwise a `SyntaxError` will be thrown.

```js
function badFunction(...args = [1,2]){
  // some code here
}
```

So what are some differences between the `arguments` object and `rest` parameters?

One key difference is that the `arguments` object is not a real array so it doesn't support methods like `includes`, `pop` and `push`. But the rest parameter is an `Array` instance. So you can use valid built in array methods without needing to convert it to a real array first.

:::interactive_editor

```js
function hasCat(...args) {
  return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
```

:::

# --questions--

## --text--

Which of the following is the correct way to use the rest parameter syntax in a function definition?

## --answers--

```js
function logArgs([args]) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

### --feedback--

Refer to the beginning of the lesson for the answer.

---

```js
function logArgs(>>>args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

### --feedback--

Refer to the beginning of the lesson for the answer.

---

```js
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

---

```js
function logArgs(<<<args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

### --feedback--

Refer to the beginning of the lesson for the answer.

## --video-solution--

3

## --text--

Which of the following is a restriction when dealing with the rest parameter syntax?

## --answers--

You can only have one rest parameter per function definition.

---

You must place the rest parameter at the beginning of the function parameter list.

### --feedback--

Refer to the end of the lesson for the answer.

---

You must have two rest parameters per function definition.

### --feedback--

Refer to the end of the lesson for the answer.

---

You can only use rest parameters in arrow functions.

### --feedback--

Refer to the end of the lesson for the answer.

## --video-solution--

1

## --text--

What is a key difference between the `arguments` object and rest parameters?

## --answers--

You can only use built in array methods like `push` and `pop` on the rest parameter while the `arguments` objects accepts all built in array methods.

### --feedback--

Refer to the end of the lesson for the answer.

---

You cannot use built in array methods like `push` and `pop` on the rest parameter but those methods can be used on the `arguments` object.

### --feedback--

Refer to the end of the lesson for the answer.

---

The `arguments` object is an `Array` instance while the rest parameter is array-like.

### --feedback--

Refer to the end of the lesson for the answer.

---

The rest parameter is an `Array` instance while the `arguments` object is array-like.

## --video-solution--

4

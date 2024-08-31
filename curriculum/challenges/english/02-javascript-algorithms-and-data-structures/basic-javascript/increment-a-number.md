---
id: 6606d0e224f91f17cffa8b46
title: Increment a number with Javascript
challengeType: 1
dashedName: increment-a-number
---

# --description--

You can easily <dfn>increment</dfn> or add one to a variable with the `++` operator.

```js
i++;
```

is the equivalent of

```js
i = i + 1;
```

**Note:** The entire line becomes `i++;`, eliminating the need for the equal sign.

<h2>Hinglish</h2>

Aap aasani se ek variable mein ek ko <dfn>increment</dfn> ya add kar sakte hain `++` operator se.

```js
i++;
```

ise iska samaan hai

```js
i = i + 1;
```

**Note:** Poora line `i++;` ban jaata hai, jisme equal sign ki zaroorat khatam ho jaati hai.

# --instructions--

Change the code to use the `++` operator on `myVar`.

myVar par `++` operator ka istemal karne ke liye code ko badal dein.
# --hints--

`myVar` should equal `88`.

```js
assert(myVar === 88);
```

You should not use the assignment operator.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(__helpers.removeJSComments(code))
);
```

You should use the `++` operator.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(__helpers.removeJSComments(code)));
```

You should not change code above the specified comment.

```js
assert(/let myVar = 87;/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```


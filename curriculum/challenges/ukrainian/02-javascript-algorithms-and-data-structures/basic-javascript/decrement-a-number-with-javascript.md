---
id: 56533eb9ac21ba0edf2244ad
title: Зменшення числа за допомогою JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Ви можете легко <dfn>decrement</dfn> або зменшити змінну на одиницю за допомогою оператора `--`.

```js
i--;
```

дорівнює

```js
i = i - 1;
```

**Примітка:** Весь рядок стає `i--;`, усуваючи потребу в знаку рівності.

# --instructions--

Змініть код, щоб користуватися оператором `--` у `myVar`.

# --hints--

`myVar` повинен дорівнювати `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` слід змінити.

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

You should not assign `myVar` with `10`.

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

You should use the `--` operator on `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

You should not change code above the specified comment.

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```

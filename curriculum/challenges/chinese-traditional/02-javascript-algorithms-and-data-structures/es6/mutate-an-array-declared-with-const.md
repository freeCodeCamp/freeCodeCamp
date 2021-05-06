---
id: 587d7b87367417b2b2512b42
title: 改變一個用 const 聲明的數組
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

在現代的 JavaScript 裏，`const` 聲明有很多用法。

一些開發者傾向於默認使用 `const` 來聲明所有變量，除非他們打算後續重新給變量賦值， 那麼他們在聲明的時候就會用 `let`。

然而，你要注意，對象（包括數組和函數）在使用 `const` 聲明的時候依然是可變的。 使用 `const` 來聲明只會保證變量不會被重新賦值。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 會導致一個錯誤。 `console.log` 會顯示值 `[5, 6, 45]`。

可以發現，你可以改變對象 `[5, 6, 7]` 本身，而變量 `s` 會指向改變後的數組 `[5, 6, 45]`。 和所有數組一樣，數組 `s` 中的元素是可以被改變的，但是因爲使用了 `const` 關鍵字，你不能使用賦值操作符將變量標識 `s` 指向另外一個數組。

# --instructions--

這裏有一個使用 `const s = [5, 7, 2]` 聲明的數組。 使用對各元素賦值的方法將數組改成 `[2, 5, 7]`。

# --hints--

不要替換 `const` 關鍵字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` 應該爲常量（使用 `const`）。

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

不要改變原數組的聲明。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` 應該等於 `[2, 5, 7]`。

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

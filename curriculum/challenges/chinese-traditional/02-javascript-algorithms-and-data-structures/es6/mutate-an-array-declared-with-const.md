---
id: 587d7b87367417b2b2512b42
title: 改變一個用 const 聲明的數組
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

如果你不熟悉 `const`，請查看 <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">這個 <code>const</code> 關鍵詞的挑戰</a>。

`const` 聲明在現代 JavaScript 中有很多用例。

默認情況下，一些開發人員更喜歡使用 `const` 分配所有變量，除非他們知道需要重新分配值。 只有在這種情況下，他們才使用 `let`。

但是，重要的是要了解使用 `const` 分配給變量的對象（包括數組和函數）仍然是可變的。 使用 `const` 聲明只能防止變量標識符的重新分配。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 將導致錯誤。 註釋掉該行後，`console.log` 將顯示值 `[5, 6, 45]`。

如你所見，你可以改變對象 `[5, 6, 7]` 本身，變量 `s` 仍將指向更改後的數組 `[5, 6, 45]`。 像所有數組一樣，`s` 中的數組元素是可變的，但是因爲使用了 `const`，所以不能使用變量標識符 `s` 來指向一個使用賦值運算符的不同數組。

# --instructions--

數組聲明爲 `const s = [5, 7, 2]`。 使用對各元素賦值的方法將數組改成 `[2, 5, 7]`。

# --hints--

不要替換 `const` 關鍵字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` 應該是一個常量變量（通過使用 `const`）。

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

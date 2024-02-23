---
id: 56533eb9ac21ba0edf2244da
title: 介紹 else 語句
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

當 `if` 語句的條件爲真，會執行大括號裏的代碼。 那如果條件爲假呢？ 正常情況下什麼也不會發生。 使用 `else` 語句，可以執行當條件爲假時相應的代碼。

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

請把多個 `if` 語句合併爲一個 `if/else` 語句。

# --hints--

應該只有一個 `if` 語句。

```js
assert(code.match(/if/g).length === 1);
```

應該使用一個 `else` 語句。

```js
assert(/else/g.test(code));
```

`testElse(4)` 應該返回字符串 `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` 應該返回字符串 `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` 應該返回字符串 `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` 應該返回字符串 `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

不要修改相應註釋的上面或下面的代碼。

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```

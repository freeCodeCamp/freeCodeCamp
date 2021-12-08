---
id: cf1111c1c11feddfaeb8bdef
title: 通過索引修改數組中的數據
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

與字符串不同，數組的條目是 <dfn>可變的</dfn> 並且可以自由更改，即使數組是用 `const` 聲明的。

**示例**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` 值爲 `[15, 40, 30]`。

**注意：** 數組名與方括號之間不應該有任何空格，比如 `array [0]` 。 儘管 JavaScript 能夠正確處理這種情況，但是當其他程序員閱讀你寫的代碼時，這可能讓他們感到困惑。

# --instructions--

將數組 `myArray` 中索引爲 `0` 上的值修改爲 `45`。

# --hints--

`myArray` 現在應該是 `[45, 64, 99]`。

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

你應該使用正確的索引修改 `myArray` 的值。

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```

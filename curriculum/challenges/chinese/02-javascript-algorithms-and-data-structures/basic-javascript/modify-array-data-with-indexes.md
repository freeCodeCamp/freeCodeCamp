---
id: cf1111c1c11feddfaeb8bdef
title: 通过索引修改数组中的数据
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

与字符串不同，数组的条目是 <dfn>可变的</dfn> 并且可以自由更改，即使数组是用 `const` 声明的。

**示例**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` 值为 `[15, 40, 30]`。

**注意：** 数组名与方括号之间不应该有任何空格，比如 `array [0]` 。 尽管 JavaScript 能够正确处理这种情况，但是当其他程序员阅读你写的代码时，这可能让他们感到困惑。

# --instructions--

将数组 `myArray` 中索引为 `0` 上的值修改为 `45`。

# --hints--

`myArray` 现在应该是 `[45, 64, 99]`。

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

你应该使用正确的索引修改 `myArray` 的值。

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

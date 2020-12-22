---
id: cf1111c1c11feddfaeb8bdef
title: 通过索引修改数组中的数据
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
---

# --description--

与字符串的数据不可变不同，数组的数据是可变的，并且可以自由地改变。

**示例**

```js
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

**提示**  
数组名称和方括号之间不应有任何空格，如`array [0]`尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑。

# --instructions--

修改数组`myArray`中索引0上的值为`45`。

# --hints--

`myArray`的值应该 [45,64,99]。

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

你应该使用正确的索引修改`myArray`的值。

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

# --solutions--


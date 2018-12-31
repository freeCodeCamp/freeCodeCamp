---
title: Math Random
localeTitle: 数学随机
---
## 数学随机

`Math.random()`返回0（包括）和1（不包括）之间的数字。

#### 句法

`Math.random()`

#### 例

```js
function randomInRange(min, max) { 
  return Math.random() * (max - min) + min; 
 } 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
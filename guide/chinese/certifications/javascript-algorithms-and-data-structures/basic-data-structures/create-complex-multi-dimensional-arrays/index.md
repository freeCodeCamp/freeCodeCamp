---
title: Create complex multi-dimensional arrays
localeTitle: 创建复杂的多维数组
---
## 创建复杂的多维数组

*   第一个字符串 - `deep` - 必须插入三层深。这意味着正好在三组`[square-brackets]` 。

```javascript
let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]]; 
```

*   使用这种逻辑插入串`deep` ， `deeper`和`deepest`分别深处矩阵三个层次深，四个层次深，五个级别。

## 解：

```javascript
let myNestedArray = [ 
  // change code below this line 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  ['loop', 'shift', 6, 7, 1000, 'method'], 
  ['concat', false, true, 'spread', 'array',["deep"]], 
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]], 
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ] 
  // change code above this line 
 ]; 

```
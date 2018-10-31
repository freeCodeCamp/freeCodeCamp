---
title: Array.prototype.includes
localeTitle: Array.prototype.includes
---
## Array.prototype.includes

`includes()`方法确定数组是否包含值。它返回true或false。

它需要两个参数：

1.  `searchValue` - 要在数组中搜索的元素。
2.  `fromIndex` - 数组中开始搜索proivded `searchValue` 。如果提供负值，则从数组的长度减去负值开始。

### 例

```js
const a = [1, 2, 3]; 
 a.includes(2); // true 
 a.includes(4); // false 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
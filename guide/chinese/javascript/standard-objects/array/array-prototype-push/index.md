---
title: Array.prototype.push
localeTitle: Array.prototype.push
---
`push()`方法用于将一个或多个新元素添加到数组的末尾。 它还返回数组的新长度。

### 句法

```javascript
arr.push([element1[, ...[, elementN]]]) 
```

### 参数

*   **elementN**要添加到数组末尾的元素。

### 返回值

调用方法的数组的新长度。

## 描述

`push()`方法将元素_推_送到数组的末尾。它可以采用零个或多个参数。如果没有提供参数， 它只会返回数组的当前长度。如果提供了一个或多个参数，它会将这些参数添加到数组中 按照它们的写入顺序。

在将元素推送到数组后，此方法还返回数组的新长度。

## 例：

```javascript
var myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran']; 
```

假设你有一系列来自权力的游戏中的House Stark的孩子们。然而，其中一名成员**Arya**失踪了。 知道上面的代码，你可以通过在最后一个索引之后的索引处将`'Arya'`分配给数组来添加她，如下所示：

```javascript
myStarkFamily[4] = 'Arya'; 
```

该解决方案的问题在于它无法处理一般情况。如果您事先不知道阵列的长度是多少， 你不能用这种方式添加新元素。这就是`push()`的用途。我们不需要知道数组有多长。我们只是添加 我们的元素到数组的末尾。

```javascript
myStarkFamily.push('Arya'); 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya'] 
 
 var newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon 
 console.log(newLength);  // 6 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon'] 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
---
title: Use an Array to Store a Collection of Data
localeTitle: 使用数组存储数据集合
---
## 使用数组存储数据集合

### 方法：

*   在JS中，Arrays是最常用的数据结构之一。与其他语言不同，JS中的数组可以存储不同的数据类型，也可以在运行时更改它们的大小，因此也称为“动态数组”。它们也被编入索引。
*   数组可以用不同的方式初始化：

1.  数组文字
2.  数组构造函数

*   在这个挑战中，我们将专注于数组文字。要初始化一个数组，我们只需`let arr = [];`
*   我们可以通过访问索引来为这个数组添加值，例如： `javascript let arr = []; arr[0] = "hello"; console.log(arr); // ["hello"]`
*   我们在声明它时也可以初始化数组中的值，例如： `javascript let arr = [1, 2, 3, "John"];`
*   在此挑战中，您需要创建一个至少包含5个元素且至少包含一个字符串，一个数字和一个布尔值的数组。

### 解：

```js
 let yourArray = ["a", 2, true, "c", null, {name: "john"}]; 
```

### 资源

进一步阅读[MDN上的](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)数组。
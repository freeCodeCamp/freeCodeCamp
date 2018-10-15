---
title: Random Method
localeTitle: 随机方法
---
## 随机方法

JavaScript `Math.random()`方法是一种出色的内置方法，用于生成随机数。执行`Math.random()` ，它返回一个随机数，该数字可以介于0和1之间。包括0，排除1。

### 生成0到1之间的随机浮点数

`Math.random()`方法将返回一个大于或等于0且小于（但绝不等于）1的浮点（十进制）数。换句话说， `0 <= x < 1` 。例如：

```JavaScript
console.log(Math.random()); 
 // 0.7069207248635578 
 
 console.log(Math.random()); 
 // 0.765046694794209 
 
 console.log(Math.random()); 
 // 0.14069121642698246 
```

（当然，每次返回的数字都会有所不同。这将在以下所有示例中假设 - 每次传递都会产生不同的结果。）

要获得较大范围之间的随机数，请将`Math.random()`的结果乘以数字。

### 生成0到指定最大值之间的随机浮点数

通常你不需要0到1之间的随机数 - 你需要更大的数字甚至整数。

例如，如果您想要一个0到10之间的随机浮点数，您可以使用：

```JavaScript
var x = Math.random()*10; 
 
 console.log(x); 
 // 4.133793901445541 
```

### 生成范围内的随机浮点数

如果您需要一个介于两个特定数字之间的随机浮点数，您可以执行以下操作：

```JavaScript
var min = 83.1; 
 var max = 193.36; 
 
 var x = Math.random()*(max - min)+min; 
 
 console.log(x); 
 // 126.94014012699063 
```

### 生成0到最大值之间的随机整数

通常你需要整数。要做到这一点，你必须使用`Math`对象中的一些其他方法， `Math.floor()` （向下`Math.floor()`入到最接近的整数）和`Math.ceil()` （向上`Math.ceil()`入到最接近的整数）。

例如，如果您需要从10个元素的数组中随机选择，则需要一个介于0和9之间的随机数（请记住，数组是零索引的）。

```JavaScript
var x = Math.floor(Math.random()*10); 
 
 console.log(x); 
 // 7 
```

（请记住， `Math.random()`永远不会返回1，因此`Math.random()*10`将永远不会返回10.这意味着在向下舍入后，结果将始终为9或更小。）

### 生成1到最大值之间的随机整数

如果您需要一个最小数为1的随机数（例如，在一月中选择一个随机日），您可以使用`Math.ceil()`方法。

```JavaScript
var x = Math.ceil(Math.random()*31); 
 
 console.log(x); 
 // 23 
```

另一种方法是使用前一个函数（使用`Math.floor()` ）并向其中添加1：

```JavaScript
var x = Math.floor(Math.random()*31)+1; 
 
 console.log(x); 
 // 17 
```

### 生成范围内的随机整数

最后，偶尔需要两个特定整数之间的随机整数。例如，如果您尝试选择抽奖券并且您知道最低和最大数字的数字：

```JavaScript
var min = 1718; 
 var max = 3429; 
 
 var x = Math.floor(Math.random()*(max-min+1)+min); 
 
 console.log(x); 
 //2509 
```

### Math.random（）的随机性如何？

可以指出， `Math.random()`返回的数字是伪随机数，因为没有计算机可以生成真正的随机数，它表现出所有尺度和所有大小的数据集的随机性。但是， `Math.random()`生成的伪随机数通常足以满足您编写的几乎任何程序的需要。非真实随机性仅在天文数字大集合中或在需要非常精确的小数时才变得明显。

### 更多信息：

*   文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
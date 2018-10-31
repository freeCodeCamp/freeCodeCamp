---
title: Accessing Nested Arrays
localeTitle: 访问嵌套数组
---
## 访问嵌套数组

### 使用括号表示法`[]`访问数组中的元素

```js
var fruitBasket = ['apple', 'banana' 'orange', 'melon']; 
 var favoriteFruit = fruitBasket[2]; 
 
 console.log(favoriteFruit) // 'orange' 
```

在这个例子中，我们最喜欢的水果是'orange'，它位于`fruitBasket`数组的索引`2` 。使用braket表示法，我们将`fruitBasket`数组的索引`2`分配给`favoriteFruit` 。这使得`favoriteFruit`等于'orange'。

### 使用braket `[]`和dot访问数组中的对象`.`符号

```js
var garage = [ 
  { 
    type: 'car', 
    color: 'red', 
    make: 'Ford' 
  }, 
  { 
    type: 'motorbike', 
    color: 'black', 
    make: 'Yamaha' 
  }, 
  { 
    type: 'bus', 
    color: 'yellow', 
    make: 'Blue Bird' 
  } 
 ]; 
 
 var busColor = garage[2].color; // 'yellow' 
```

## 解：

```js
// Setup 
 var myPlants = [ 
  { 
    type: "flowers", 
    list: [ 
      "rose", 
      "tulip", 
      "dandelion" 
    ] 
  }, 
  { 
    type: "trees", 
    list: [ 
      "fir", 
      "pine", 
      "birch" 
    ] 
  } 
 ]; 
 
 // Only change code below this line 
 
 var secondTree = myPlants[1].list[1]; 

```
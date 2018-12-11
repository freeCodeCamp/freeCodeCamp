---
title: Register a Store Listener
localeTitle: 注册商店监听器
---
## 注册商店监听器

让我们打破指示，准确找出它的要求。

> _编写一个回调函数，每次商店收到一个动作时，它会递增全局变量计数，并将此函数传递给store.subscribe（）方法。_

我们可以将这些步骤概括为小块：

1.  写一个回调函数
2.  增加全局变量计数
3.  将函数传递给`store.subscribe()`方法。

真棒！现在让我们再次回顾一些基础知识。

### 什么是简单英语的“回调函数”？

回调函数只是在执行另一个函数后调用的函数。在现实世界中，它可能是这样的：

```javascript
// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed. 
 let carIsBroken = true; 
 const callCarOwner = () => console.log('Hello your car is done!'); 
 const fixCar = (carIsBroken, callCarOwner) => { 
  if (carIsBroken === true) { 
    carIsBroken = false; 
  } 
  console.log(carIsBroken); 
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'. 
  callCarOwner(); 
 } 
 fixCar(carIsBroken, callCarOwner); 
```

### 你如何增加一个数字变量？

我们可以使用“+ =”运算符来完成此操作。

```javascript
let count = 1; 
 const addOne = () => count +=1; 
```

### 如何将函数传递给方法？

我们可以将函数传递给方法，就像我们可以将变量传递给方法一样。把它作为一个参数传递！

```javascript
function sayHi() { 
  console.log('Hi!'); 
 } 
 store.subscribe(sayHi); 
```

想要更新吗？ [在GitHub上编辑此存根。](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)
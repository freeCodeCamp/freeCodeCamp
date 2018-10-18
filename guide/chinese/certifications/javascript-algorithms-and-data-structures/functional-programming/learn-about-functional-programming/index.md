---
title: Learn About Functional Programming
localeTitle: 了解功能编程
---
## 了解功能编程

函数有一个输入或参数`const myFunc = (input) => { ...code to execute... }` 。在这种情况下，输入是要创建多少杯茶。  

### 方法

只需更改一行代码即可传递此问题。必须调用`getTea()`函数并将其存储在`tea4TeamFCC`变量中。确保通读`getTea()`函数并准确理解它的作用。该函数接受一个变量 - `numOfCups` 。首先制作一个`teaCups[]`数组，并设置一个for循环来倒数传入函数的杯数。然后，通过for循环的每次迭代，将一杯新茶推入阵列。

从而产生一个阵列，其中包含最初传递给`getTea()`函数的大量茶杯。

### 解

```javascript
/** 
 * A long process to prepare tea. 
 * @return {string} A cup of tea. 
 **/ 
 const prepareTea = () => 'greenTea'; 
 
 /** 
 * Get given number of cups of tea. 
 * @param {number} numOfCups Number of required cups of tea. 
 * @return {Array<string>} Given amount of tea cups. 
 **/ 
 const getTea = (numOfCups) => { 
  const teaCups = []; 
 
  for(let cups = 1; cups <= numOfCups; cups += 1) { 
    const teaCup = prepareTea(); 
    teaCups.push(teaCup); 
  } 
 
  return teaCups; 
 }; 
 
 // Add your code below this line 
 
 const tea4TeamFCC = getTea(40); // :( 
 
 // Add your code above this line 
 
 console.log(tea4TeamFCC); 

```
---
title: Verify an Object's Constructor with instanceof
localeTitle: 使用instanceof验证Object的构造函数
---
## 使用instanceof验证Object的构造函数

### 方法：

就像在上一次挑战中一样，使用给定的构造函数创建一个新对象 - `myHouse` 。

#### 例：

```javascript
let hound = new Dog(); 
```

请记住为`House`功能提供一个参数来初始化房间数量。然后只需调用`instanceof`运算符即可在新的House上返回true。

### 解：

```javascript
/* jshint expr: true */ 
 
 function House(numBedrooms) { 
  this.numBedrooms = numBedrooms; 
 } 
 
 // Add your code below this line 
 let myHouse = new House(5); 
 myHouse instanceof House; 

```
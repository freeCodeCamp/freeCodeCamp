---
title: Use Dot Notation to Access the Properties of an Object
localeTitle: 使用点表示法访问对象的属性
---
## 使用点表示法访问对象的属性

### 方法：

以下代码将简单地从`obj`对象中打印`property1` 。

```javascript
let obj = { 
  property1 = 1, 
  property2 = 2 
 }; 
 
 console.log(obj.property1); 
```

遵循此逻辑，使用`console.log`操作将`property1`和`property2`都打印到屏幕。

### 解：

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4 
 }; 
 // Add your code below this line 
 console.log(dog.name); 
 console.log(dog.numLegs); 

```
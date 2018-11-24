---
title: Iterate Over All Properties
localeTitle: 迭代所有属性
---
## 迭代所有属性

### 方法

该方法是使用`for-in-loop`迭代对象中的每个属性。然后在循环内部检查属性是`own-property`还是`prototype` ，并将其放在`ownProps[]`数组或`prototypeProps[]`数组中。请记住`push`属性`push`送到`beagle`对象而不是`Dog`对象以传递所有测试用例。

### 解

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 let beagle = new Dog("Snoopy"); 
 
 let ownProps = []; 
 let prototypeProps = []; 
 
 // Add your code below this line 
 for (let property in beagle) { 
  if(Dog.hasOwnProperty(property)) { 
    ownProps.push(property) 
  } 
  else { 
    prototypeProps.push(property) 
  } 
 } 

```
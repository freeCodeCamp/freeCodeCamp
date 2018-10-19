---
title: Use Prototype Properties to Reduce Duplicate Code
localeTitle: 使用原型属性来减少重复代码
---
## 使用原型属性来减少重复代码

### 方法：

`prototype`属性允许我们从原始代码块外部向对象构造函数添加新属性。 prototype属性还允许您向对象构造函数添加新函数。以下代码演示了如何在对象上使用`.prototype`在构造函数中创建新属性。

#### 例：

```javascript
Obj.prototype.newProperty = "New Property!"; 
```

使用此逻辑，只需为`numLegs`创建一个新的`prototype`属性。测试用例可以通过更换被传递`Bird`与对象`Dog`给出的示例对象- `Bird.prototype.numLegs = 2;`

### 解：

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 // Add your code above this line 
 let beagle = new Dog("Snoopy"); 

```
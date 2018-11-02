---
title: Extend Constructors to Receive Arguments
localeTitle: 扩展构造函数以接收参数
---
## 扩展构造函数以接收参数

### 方法：

就像在`Bird()`示例中一样， `Dog()`函数必须使用两个参数 - `name`和`color` 。然后必须使用`this`关键字在函数内初始化名称和颜色。最终属性 - `numLegs`设置为4，因为该函数不接受numLegs参数。

### 解：

```javascript
function Dog(name, color) { 
  this.name = name; 
  this.color = color; 
  this.numLegs = 4; 
 } 
 let terrier = new Dog("George","White"); 

```
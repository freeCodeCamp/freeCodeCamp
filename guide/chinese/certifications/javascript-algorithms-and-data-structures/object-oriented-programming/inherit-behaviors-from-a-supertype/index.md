---
title: Inherit Behaviors from a Supertype
localeTitle: 从超类型继承行为
---
## 从超类型继承行为

### 方法

要通过此挑战，只需使用以下示例中所示的`Object.create()`方法创建新的`duck`和`beagle`对象。

\`\`\`的JavaScript

let animal = Object.create（Animal.prototype）;
```
### Solution 
```

JavaScript的

function Animal（）{}

Animal.prototype = { 构造函数：Animal， 吃：function（）{ console.log（“nom nom nom”）; } };

//在此行下方添加代码

let duck = Object.create（Animal.prototype）; //改变这一行 让beagle = Object.create（Animal.prototype）;; //改变这一行

duck.eat（）; //应打印“nom nom nom” beagle.eat（）; //应打印“nom nom nom”

\`\`\`
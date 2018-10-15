---
title: Add New Properties to a JavaScript Object
localeTitle: 将新属性添加到JavaScript对象
---
您可以像修改现有JavaScript对象一样向现有JavaScript对象添加新属性。

有两种不同的语法，点表示法和括号表示法。为了便于阅读，通常首选点符号，但属性必须是有效的标识符。

以下是使用点符号的方法：
```
myDog.bark = "woof-woof"; 
```

以下是使用括号表示法的方法：

```javascript
myObject['bark'] = "woof-woof"; 
```

使用括号表示法，我们可以将变量用作属性名称：

```javascript
var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 

```
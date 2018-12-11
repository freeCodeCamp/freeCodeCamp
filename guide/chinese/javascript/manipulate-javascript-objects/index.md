---
title: Manipulate JavaScript Objects
localeTitle: 操纵JavaScript对象
---
有几种方法可以操纵对象属性，点符号和括号表示法。

使用点表示法向对象添加属性：
```
myObject.myProperty = "myValue"; 
```

使用括号表示法向对象添加属性：

```javascript
myObject['myProperty'] = "myValue"; 
```

使用括号表示法，我们可以将变量用作属性名称：

```javascript
var dynamicProperty = "myProperty"; 
 myObject[dynamicProperty] = "myValue"; 
```

我们也可以删除它们：
```
delete(myObject.myProperty); 

```
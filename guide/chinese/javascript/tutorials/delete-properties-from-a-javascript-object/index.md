---
title: Delete Properties from a JavaScript Object
localeTitle: 从JavaScript对象中删除属性
---
我们还可以删除对象中的属性，如下所示：
```
delete ourDog.bark; 
```

**delete运算符**从对象中删除属性。

## 句法

`delete expression`应该求值为属性引用的表达式，例如：
```
delete object.property 
 delete object['property'] 
```

## 参数

**目的**  
对象的名称或评估对象的表达式。

**属性**  
要删除的属性。

## 例

```js
var person = {name:'Jay', age:'52'}; 
 delete person['age']; 
 
 console.log(person); //{name:'Jay'} 
```

## 返回值

如果属性是自己的不可配置属性，则以严格模式抛出（在非严格中返回false）。在所有其他情况下返回true。

[阅读更多](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
---
title: With
localeTitle: 同
---
## 同

JavaScript的`with`语句是在一个对象上编辑多个属性的简便方法。大多数开发人员不鼓励使用`with` ，您最好不要使用此关键字。

**注意** ： `"strict mode"`禁止使用`with` 。

### 句法

```js
with (expression) 
  statement 
```

### 示例用法

在JavaScript中，您可以单独修改对象的属性，如下所示：

```javascript
let earth = {}; 
 earth.moons = 1; 
 earth.continents = 7; 
```

`with`为您提供了修改对象属性的简写：

```javascript
with (earth) { 
  moons = 1; 
  continents = 7; 
 } 
```

虽然这个例子很做作，你能理解的用例`with`更多，如果你有更大的物体象下面这样：

```javascript
earth.continents.australia.geography.ocean = "Pacific"; 
 earth.continents.australia.geography.river = "Murray"; 
 earth.continents.australia.geography.mountain = "Kosciuszko"; 
```

### 备择方案

你不应该使用它`with`因为它有微妙的错误和兼容性问题。强烈推荐的方法是将对象分配给变量，然后修改变量的属性。以下是使用更大对象的示例：

```javascript
let earth = { 
  continents: { 
    australia: { 
      geography: {} 
    } 
  } 
 }; 
 
 let geo = earth.continents.australia.geography; 
 
 geo.ocean = "Pacific"; 
 geo.river = "Murray"; 
 geo.mountain = "Kosciuszko"; 
```

### 试试看

https://repl.it/Mixg/5

#### 更多信息：

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)

[https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

[http://2ality.com/2011/06/with-statement.html](http://2ality.com/2011/06/with-statement.html)
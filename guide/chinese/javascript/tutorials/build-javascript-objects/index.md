---
title: Build JavaScript Objects
localeTitle: 构建JavaScript对象
---
对象对于以结构化方式存储数据很有用，并且可用于表示现实世界对象，例如汽车或酒店到计算机。

对象类似于数组，除了不使用索引访问和修改数据，您可以通过所谓的属性访问对象中的数据。主要有两种创建对象的方法：Object Literal和Constructor方式。

使用Object Literal方式，我们将如何创建示例对象：
```
var cat = { 
    name: "Whiskers", 
    legs: 4, 
    tails: 1, 
    enemies: ["Water", "Dogs"] 
 }; 
```

使用构造函数方式，我们将如何创建示例对象：
```
var cat = new Object(); 
 cat.name = "Whiskers"; 
 cat.legs = 4; 
 cat.tails = 1; 
 cat.enemies = ["Water", "Dogs"]; 
```

在构造函数方式中，我们将`new`关键字与`Object` （使用大写“O”）一起使用来创建新的对象实例。之后，我们使用点表示法来分配对象的属性名称和值。
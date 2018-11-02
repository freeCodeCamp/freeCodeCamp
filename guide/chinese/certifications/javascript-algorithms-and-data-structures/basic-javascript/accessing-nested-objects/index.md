---
title: Accessing Nested Objects
localeTitle: 访问嵌套对象
---
## 访问嵌套对象

线索： **_“对于名称中带有空格的属性，请使用括号表示法。”_**

如果我们看看我们的对象：

```javascript
var myStorage = { 
  "car": { 
    "inside": { 
      "glove box": "maps", 
      "passenger seat": "crumbs" 
     }, 
    "outside": { 
      "trunk": "jack" 
    } 
  } 
 }; 
```

我们的对象名是`myStorage` 。

| - 在里面我们有一个名为`car`的嵌套对象。

| ---里面，我们有两个所谓的`inside`和`outside`均拥有各自 自己的财产

您可以像这样可视化对象结构，如果它有帮助：
```
myStorage 
 |-- car 
 |--- inside 
 |----- glove box: maps 
 |----- passenger seat: crumbs 
 |--- outside 
 |----- trunk: jack 
```

我们被要求分配`glove box`的内容， 我们可以看到它嵌套在`inside`对象中， 反过来，它嵌套在`car`对象中。

我们可以使用点符号来访问`glove box` ，如下所示：

```javascript
var gloveBoxContents = myStorage.car.inside'complete here' 
```

您必须使用正确的方式替换`complete here`访问该属性。 如果你遇到困难，请看上面的线索。
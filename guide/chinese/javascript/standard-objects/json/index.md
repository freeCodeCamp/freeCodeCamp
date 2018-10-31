---
title: JSON
localeTitle: JSON
---
JavaScript Object Notation或`JSON`使用JavaScript对象的格式来存储数据。 JSON非常灵活，因为它允许`Data Structures`具有`strings` ， `numbers` ， `booleans` ， `arrays`和`objects`任意组合。

以下是JSON对象的示例：
```
var ourMusic = [ 
  { 
    "artist": "Daft Punk", 
    "title": "Homework", 
    "release_year": 1997, 
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ], 
    "gold": true 
  } 
 ]; 
```

这是一个对象数组，该对象包含有关相册的各种`metadata` 。它还有一个嵌套`formats`数组。其他专辑记录可以添加到顶级数组。
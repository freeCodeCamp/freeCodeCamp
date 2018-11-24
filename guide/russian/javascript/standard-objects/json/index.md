---
title: JSON
localeTitle: JSON
---
Обозначение объекта JavaScript или `JSON` использует формат JavaScript-объектов для хранения данных. JSON является гибким, поскольку он позволяет создавать `Data Structures` с произвольными комбинациями `strings` , `numbers` , `booleans` , `arrays` и `objects` .

Вот пример объекта JSON:
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

Это массив объектов, и объект имеет разные фрагменты `metadata` об альбоме. Он также имеет вложенный массив `formats` . Дополнительные альбомы могут быть добавлены в массив верхнего уровня.
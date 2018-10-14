---
title: JSON
localeTitle: JSON
---
JavaScript Object Notation ou `JSON` usa o formato de Objetos JavaScript para armazenar dados. O JSON é flexível porque permite `Data Structures` com combinações arbitrárias de `strings` , `numbers` , `booleans` , `arrays` e `objects` .

Aqui está um exemplo de um objeto JSON:
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

Esta é uma matriz de objetos e o objeto possui vários `metadata` sobre um álbum. Também possui uma matriz de `formats` aninhados. Registros adicionais de álbuns podem ser adicionados à matriz de nível superior.
---
title: JSON
localeTitle: JSON
---
La notación de objetos JavaScript o `JSON` utiliza el formato de objetos JavaScript para almacenar datos. JSON es flexible porque permite `Data Structures` con combinaciones arbitrarias de `strings` , `numbers` , `booleans` , `arrays` y `objects` .

Aquí hay un ejemplo de un objeto JSON:
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

Esta es una matriz de objetos y el objeto tiene varias piezas de `metadata` sobre un álbum. También tiene una matriz de `formats` anidados. Se podrían agregar registros de álbum adicionales a la matriz de nivel superior.
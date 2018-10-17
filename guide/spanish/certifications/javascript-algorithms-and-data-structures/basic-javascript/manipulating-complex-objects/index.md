---
title: Manipulating Complex Objects
localeTitle: Manipulando objetos complejos
---
## Manipulando objetos complejos

Aquí está el ejemplo:

```javascript
var myMusic = [ 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
  // Add record here 
 ]; 
```

Aquí hay una solución: Después de la cadena `// Add record here` , agregamos un nuevo álbum a `myMusic` . Es necesario empezar desde `,` . Y simplemente puedes copiar el álbum ya creado: `javascript { "artist": "Billy Joel", "title": "Piano Man", "release_year": 1973, "formats": [ "CD", "8T", "LP" ], "gold": true }`

y pegar después `,` :

```javascript
  // Add record here 
  , 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
```

Ahora, puedes cambiar los valores de tu álbum:

```javascript
  // Add record here 
  , 
  { 
    "artist": "Deep Purple", 
    "title": "Smoke on the water", 
    "release_year": 1976, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
```

Aquí hay una solución completa:

\`\` \`javascript var myMusic = \[ { "artista": "billy joel", "Título": "Piano Man", " _año de_ estreno _": 1973, "formatos": \[ "DISCOS COMPACTOS", "8T", "LP" \] "oro": cierto } // Añadir registro aquí { "artista": "Deep Purple", "Título": "Humo en el agua", "_ año de _estreno_ ": 1976, "formatos": \[ "DISCOS COMPACTOS", "8T", "LP" \] } \];

\`\` \`
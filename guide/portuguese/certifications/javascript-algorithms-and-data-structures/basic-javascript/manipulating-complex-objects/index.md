---
title: Manipulating Complex Objects
localeTitle: Manipulando Objetos Complexos
---
## Manipulando Objetos Complexos

Aqui está o exemplo:

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

Aqui está uma solução: Depois da string `// Add record here` , adicionamos novo álbum ao `myMusic` . Você precisa começar a partir `,` . E você pode simplesmente copiar o álbum já criado: `javascript { "artist": "Billy Joel", "title": "Piano Man", "release_year": 1973, "formats": [ "CD", "8T", "LP" ], "gold": true }`

e cole depois `,` :

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

Agora você pode alterar os valores de seu álbum:

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

Aqui está uma solução completa:

\`\` \`javascript var myMusic = \[ { "artista": "Billy Joel", "title": "Piano Man", " _ano de_ lançamento _": 1973, "formatos": \[ "CD", "8T", "LP" \] "gold": true } // Adicionar registro aqui { "artista": "Deep Purple", "title": "Smoke on the water", "_ ano de _lançamento_ ": 1976, "formatos": \[ "CD", "8T", "LP" \] } \];

\`\` \`
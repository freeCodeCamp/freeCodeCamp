---
title: Manipulating Complex Objects
localeTitle: Манипулирование сложными объектами
---
## Манипулирование сложными объектами

Вот пример:

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

Вот решение: После строки `// Add record here` добавим новый альбом в `myMusic` . Вы должны начать с `,` . И вы можете просто скопировать уже созданный альбом: `javascript { "artist": "Billy Joel", "title": "Piano Man", "release_year": 1973, "formats": [ "CD", "8T", "LP" ], "gold": true }`

и вставить после `,` :

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

Теперь вы можете изменить значения своего альбома:

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

Вот полное решение:

\`\` \`Javascript var myMusic = \[ { «художник»: «Билли Джоэл», «title»: «Piano Man», « _Год_ выпуска _»: 1973, «Форматы»: \[ "CD", «8Т», "LP" \], "gold": true }, // Добавить запись здесь { «художник»: «Deep Purple», «title»: «Дым на воде», «_ Год _выпуска_ »: 1976, «Форматы»: \[ "CD", «8Т», "LP" \], } \];

\`\` \`
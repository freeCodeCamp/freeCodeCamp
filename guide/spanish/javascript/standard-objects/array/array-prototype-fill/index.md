---
title: Array.prototype.fill
localeTitle: Array.prototype.fill
---
## Array.prototype.fill

El método fill () llena todos los elementos en una matriz con un valor estático.

Sintaxis:

\`\` \`javascript arr.fill (valor) arr.fill (valor, inicio) arr.fill (valor, inicio, final)
```
The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object. 
 
 The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it. 
 
 ## Examples 
```

javascript \[1, 2, 3\] .fill (4); // \[4, 4, 4\] \[1, 2, 3\] .fill (4, 1); // \[1, 4, 4\]

var fruits = \["Grape", "Pear", "Apple", "Strawberry"\]; fruits.fill ("Sandía", 2, 4); // Plátano, Pera, Sandía, Sandía \`\` \`

#### Más información:

Para más información visite [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
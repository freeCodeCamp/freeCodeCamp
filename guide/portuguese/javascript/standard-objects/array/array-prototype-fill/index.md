---
title: Array.prototype.fill
localeTitle: Array.prototype.fill
---
## Array.prototype.fill

O método fill () preenche todos os elementos em uma matriz com um valor estático.

Sintaxe:

\`\` \`javascript arr.fill (valor) arr.fill (valor, início) arr.fill (valor, início, fim)
```
The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object. 
 
 The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it. 
 
 ## Examples 
```

javascript \[1, 2, 3\]. Preenchimento (4); // \[4, 4, 4\] \[1, 2, 3\]. Preenchimento (4, 1); // \[1, 4, 4\]

var fruits = \["Uva", "Pêra", "Maçã", "Morango"\]; fruits.fill ("Watermelon", 2, 4); // Banana, Pêra, Melancia, Melancia \`\` \`

#### Mais Informações:

Para mais informações, visite [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
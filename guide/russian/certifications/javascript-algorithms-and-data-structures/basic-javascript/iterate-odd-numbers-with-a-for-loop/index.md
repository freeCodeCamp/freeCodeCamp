---
title: Iterate Odd Numbers With a For Loop
localeTitle: Итерировать нечетные числа с помощью цикла
---
## Итерировать нечетные числа с помощью цикла

Вот пример:

```javascript
var ourArray = []; 
 
 for (var i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

Вот решение: После строки `// Only change code below this line.` мы добавляем `for` цикла. Вам нужно скопировать петлю сверху:

`javascript for (var i = 0; i < 10; i += 2) { ourArray.push(i); }` И измените `initialization` `var i = 0` на `var i = 1` , также вам нужно изменить имя массива `ourArray` на `myArray` :

`javascript for (var i = 1; i < 10; i += 2) { myArray.push(i); }`

Вот полное решение:

\`\` \`Javascript var ourArray = \[\];

для (var i = 0; i <10; i + = 2) { ourArray.push (я); }

// Настроить var myArray = \[\];

// Изменить код ниже этой строки.

для (var i = 1; i <10; i + = 2) { myArray.push (я); } \`\` \`
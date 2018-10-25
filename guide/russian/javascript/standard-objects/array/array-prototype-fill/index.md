---
title: Array.prototype.fill
localeTitle: Array.prototype.fill
---
## Array.prototype.fill

Метод fill () заполняет все элементы массива статическим значением.

Синтаксис:

\`\` \`javascript arr.fill (значение) arr.fill (значение, начало) arr.fill (значение, начало, конец)
```
The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object. 
 
 The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it. 
 
 ## Examples 
```

Javascript \[1, 2, 3\]. Заполнить (4); // \[4, 4, 4\] \[1, 2, 3\]. Заполнить (4, 1); // \[1, 4, 4\]

var fruits = \["Grape", "Pear", "Apple", "Strawberry"\]; fruit.fill («Арбуз», 2, 4); // Банан, груша, арбуз, арбуз \`\` \`

#### Дополнительная информация:

Для получения дополнительной информации посетите [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
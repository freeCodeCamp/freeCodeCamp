---
title: Find Characters with Lazy Matching
localeTitle: Найти персонажей с ленивым соответствием
---
## Найти персонажей с ленивым соответствием

#### Challange:

Исправьте regex `/<.*>/` чтобы вернуть HTML-тег `<h1>` а не текст `<h1>Winter is coming</h1>` . Помните шаблон. в регулярном выражении соответствует любому символу.

#### Решение:

```js
let text = "<h1>Winter is coming</h1>"; 
 let myRegex = /<h1>?/; // it's the answer! 
 let result = text.match(myRegex); 

```
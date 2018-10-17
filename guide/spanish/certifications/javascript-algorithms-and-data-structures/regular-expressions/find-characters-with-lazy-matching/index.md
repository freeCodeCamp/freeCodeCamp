---
title: Find Characters with Lazy Matching
localeTitle: Encuentra personajes con Lazy Matching
---
## Encuentra personajes con Lazy Matching

#### Challange

`/<.*>/` la expresión regular `/<.*>/` para devolver la etiqueta HTML `<h1>` y no el texto `<h1>Winter is coming</h1>` . Recuerda el comodín. En una expresión regular coincide con cualquier carácter.

#### Solución:

```js
let text = "<h1>Winter is coming</h1>"; 
 let myRegex = /<h1>?/; // it's the answer! 
 let result = text.match(myRegex); 

```
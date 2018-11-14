---
title: Find Characters with Lazy Matching
localeTitle: Encontrar personagens com correspondência preguiçosa
---
## Encontrar personagens com correspondência preguiçosa

#### Desafio:

Corrija o regex `/<.*>/` para retornar a tag HTML `<h1>` e não o texto `<h1>Winter is coming</h1>` . Lembre-se do curinga. em uma expressão regular corresponde a qualquer caractere.

#### Solução:

```js
let text = "<h1>Winter is coming</h1>"; 
 let myRegex = /<h1>?/; // it's the answer! 
 let result = text.match(myRegex); 

```
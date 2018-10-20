---
title: Spread Operator
localeTitle: Operador de spread
---## Operador de spread

O operador de spread ( `...` ), permite obter os elementos de uma coleção.

Um dos usos mais comuns é para objetos de `Node` , ao usar seletores de consulta no navegador, para torná-los objetos de matriz iteráveis:

```javascript
const paragraphs = document.querySelectorAll('p.paragraph'); 
 const arr = [...paragraphs]; 
```

Outro uso do operador de spread é para concatenação de matriz:

```javascript
const arr_1 = [1, 2, 3, 4] 
 const arr_2 = [5, 6, 7, 8] 
 const arr_final = [...arr_1, ...arr_2] 
 // arr_final = [1, 2, 3, 4, 5, 6, 7, 8] 

```
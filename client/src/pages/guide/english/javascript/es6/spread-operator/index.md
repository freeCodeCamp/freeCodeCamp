---
title: Spread Operator
---
## Spread Operator

The spread operator (`...`), allows to get the elements of a collection.

One of the most commom uses is for `Node` Objects, when using query selectors in the browser, in order to make them iterable Array Objects:
```javascript
const paragraphs = document.querySelectorAll('p.paragraph');
const arr = [...paragraphs];
```

Another use of the spread operator is for Array concatenation:
```javascript
const arr_1 = [1, 2, 3, 4]
const arr_2 = [5, 6, 7, 8]
const arr_final = [...arr_1, ...arr_2]
// arr_final = [1, 2, 3, 4, 5, 6, 7, 8]
```
### More Information:

<a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator' target='_blank' rel='nofollow'>MDN</a>

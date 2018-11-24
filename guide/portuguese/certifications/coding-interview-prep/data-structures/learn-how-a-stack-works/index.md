---
title: Learn how a Stack Works
localeTitle: Aprenda como funciona uma pilha
---
## Aprenda como funciona uma pilha

### Método:

*   As pilhas são estruturas de dados abstratas.
*   Eles seguem o princípio LIFO (Last In First Out) ou FILO (First In Last Out).
*   As operações de inserção e exclusão da pilha são de complexidade de tempo **O (1)** .
*   Em JavaScript, as matrizes podem ser tratadas como uma pilha, pois os `.push()` e `.pop()` têm complexidade de tempo de **O (1)** .
*   Neste desafio, precisamos `.pop()` e depois `.push()` na pilha.

### Solução:

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; 
 
 homeworkStack.pop(); 
 homeworkStack.push("CS50"); 
```

### Referência:

*   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
*   Vídeo de [Hackerrank](https://www.youtube.com/watch?v=wjI1WNcIntg)
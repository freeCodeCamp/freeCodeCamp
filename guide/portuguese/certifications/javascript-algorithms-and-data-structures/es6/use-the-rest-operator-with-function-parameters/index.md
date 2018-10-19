---
title: Use the Rest Operator with Function Parameters
localeTitle: Use o operador de descanso com parâmetros de função
---
## Use o operador de descanso com parâmetros de função

### Explicação do parâmetro de repouso

[Rede de desenvolvedores da Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Rede de desenvolvedores da Mozilla")

### Operador de spread comparado ao parâmetro de descanso

[Estouro de pilha](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Estouro de pilha")

### Vídeo explicando propagação e descanso

[!["Imagem](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[### Exemplo

Este código

```javascript
const product = (function() { 
    "use strict"; 
    return function product(n1, n2, n3) { 
        const args = [n1, n2, n3]; 
        return args.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 
```

Pode ser escrito como tal

```javascript
const product = (function() { 
    "use strict"; 
    return function product(...n) { 
        return n.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 

```](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)
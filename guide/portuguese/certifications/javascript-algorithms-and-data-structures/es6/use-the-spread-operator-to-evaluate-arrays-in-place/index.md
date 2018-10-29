---
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: Use o operador de propagação para avaliar matrizes no local
---
## Use o operador de propagação para avaliar matrizes no local

### Operador de spread explicado

[Operador de propagação de rede do Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Rede de desenvolvedores da Mozilla")

### Operador de spread comparado ao parâmetro Rest

[Estouro de pilha](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Estouro de pilha")

### Vídeo Explicação Operador de Spread e Parâmetro de Repouso

[!["Imagem](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[

### Informações sobre o método apply ()

](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)[Mozilla Developer Network Apply Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Rede de desenvolvedores da Mozilla")

### 3 exemplos rápidos

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min.apply(null, numbers); 
 console.log(minNum);//-12 
```

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(numbers); 
 console.log(minNum);//NaN 
```

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(...numbers); 
 console.log(minNum);//-12 

```
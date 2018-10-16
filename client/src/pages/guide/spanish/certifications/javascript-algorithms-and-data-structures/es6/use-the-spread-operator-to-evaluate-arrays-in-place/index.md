---
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: Utilice el operador de propagación para evaluar matrices en el lugar
---
## Utilice el operador de propagación para evaluar matrices en el lugar

### Operador de propagación explicado

[Mozilla Developer Network Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Red de desarrolladores de Mozilla")

### Operador de propagación comparado con el parámetro de descanso

[Desbordamiento de pila](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Desbordamiento de pila")

### Video que explica el operador de propagación y el parámetro de descanso

[!["Imagen](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[

### Información sobre el método Apply ()

](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)[Método de aplicación de la red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Red de desarrolladores de Mozilla")

### 3 ejemplos rápidos

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
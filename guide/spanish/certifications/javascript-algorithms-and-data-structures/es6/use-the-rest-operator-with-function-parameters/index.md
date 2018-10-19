---
title: Use the Rest Operator with Function Parameters
localeTitle: Utilice el operador de reposo con parámetros de función
---
## Utilice el operador de reposo con parámetros de función

### Explicación del parámetro de descanso

[Red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Red de desarrolladores de Mozilla")

### Operador de propagación comparado con el parámetro de reposo

[Desbordamiento de pila](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Desbordamiento de pila")

### Video explicativo de la propagación y el descanso.

[!["Imagen](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[### Ejemplo

Este codigo

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

Puede ser escrito como tal

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
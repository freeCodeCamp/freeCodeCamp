---
title: Y combinator
id: 594810f028c0303b75339ad5
localeTitle: 594810f028c0303b75339ad5
challengeType: 5
---

## Description
<section id='description'> 
<p> 
En la estricta <a href="https://en.wikipedia.org/wiki/Functional programming" title="wp: programación funcional">programación funcional</a> 
y 
el <a href="https://en.wikipedia.org/wiki/lambda calculus" title="wp: calculo lambda">cálculo lambda</a> , las funciones 
(expresiones lambda) no tienen estado y solo se les permite hacer referencia a los argumentos de las funciones adjuntas. 
Esto elimina la definición habitual de una función recursiva en la que una función está asociada con el estado de una variable y el estado de esta variable se utiliza en el cuerpo de la función. 
</p> 
<p> 
El <a href="http://mvanier.livejournal.com/2897.html">combinador Y</a> es en sí mismo una función sin estado que, 
cuando se aplica a otra función sin estado, devuelve una versión recursiva de la función. El combinador de Y es 
el más simple de la clase de tales funciones, llamado 
<a href="https://en.wikipedia.org/wiki/Fixed-point combinator" title="wp: combinador de punto fijo">combinadores de punto fijo</a> . 
</p> 
Tarea: 

Defina la función del combinador Y sin estado y utilícela para calcular 
<a href="https://en.wikipedia.org/wiki/Factorial" title="wp: factorial">factorial</a> . 

<code>factorial(N)</code> ya está asignada. 
Ver también <a href="http://vimeo.com/45140590">Jim Weirich: Aventuras en Programación Funcional</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Y debe devolver una función
    testString: 'assert.equal(typeof Y(f => n => n), "function", "Y must return a function");'
  - text: factorial (1) debe devolver 1.
    testString: 'assert.equal(factorial(1), 1, "factorial(1) must return 1.");'
  - text: Factorial (2) debe devolver 2.
    testString: 'assert.equal(factorial(2), 2, "factorial(2) must return 2.");'
  - text: Factorial (3) debe devolver 6.
    testString: 'assert.equal(factorial(3), 6, "factorial(3) must return 6.");'
  - text: Factorial (4) debe devolver 24.
    testString: 'assert.equal(factorial(4), 24, "factorial(4) must return 24.");'
  - text: Factorial (10) debe devolver 3628800.
    testString: 'assert.equal(factorial(10), 3628800, "factorial(10) must return 3628800.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Y(f) {
  return function() {
  // Good luck!
  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));

```

</section>

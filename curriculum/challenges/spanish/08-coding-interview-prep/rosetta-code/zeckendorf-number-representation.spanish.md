---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
localeTitle: 594810f028c0303b75339ad6
challengeType: 5
---

## Description
<section id='description'> 
<p> 
Así como los números se pueden representar en una notación posicional 
como sumas de múltiplos de las potencias de diez (decimal) 
o dos (binario); todos los enteros positivos se pueden representar como la suma 
de uno o cero veces los miembros distintos de la serie de Fibonacci. 
</p> 
<p> 
Recuerde que los primeros seis números distintos de Fibonacci 
son: <code>1, 2, 3, 5, 8, 13</code> . El número once decimal pueden 
escribirse como <code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code> o 
<code>010100</code> en notación posicional donde las columnas representan 
multiplicación por un miembro particular de la secuencia. Los ceros iniciales son 
soltados, de modo que 11 decimales se convierten en <code>10100</code> . 
</p> 
<p> 
10100 no es la única forma de hacer 11 a partir de los números de Fibonacci; sin embargo, 
<code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code> o 010011 también sería 
representa el decimal 11. Para un verdadero número de Zeckendorf existe la restricción de 
añadido de que &quot;no se pueden usar dos números de Fibonacci consecutivos&quot; 
que lleva a la solución única anterior. 
</p> 
<p> 
Tarea: 
Escriba una función que genere y devuelva una matriz de los primeros N números de Zeckendorf en orden. 
</p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf debe ser función
    testString: 'assert.equal(typeof zeckendorf, "function", "zeckendorf must be function");'
  - text: Su función <code clase = "notranslate"> zeckendorf </code> debería devolver la respuesta correcta
    testString: 'assert.deepEqual(answer, solution20, "Your <code>zeckendorf</code> function should return the correct answer");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
}
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
// zeckendorf :: Int -> String
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return (n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join('');
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();

```

</section>

---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
localeTitle: Copiar elementos de matriz utilizando slice ()
challengeType: 1
---

## Description
<section id='description'>
El siguiente método que cubriremos es <code>slice()</code> . <code>slice()</code> , en lugar de modificar una matriz, copia o <em>extrae</em> , un número dado de elementos a una nueva matriz, dejando la matriz a la que se llama sin tocar. <code>slice()</code> toma solo 2 parámetros: el primero es el índice para comenzar la extracción y el segundo es el índice para detener la extracción (la extracción ocurrirá hasta, pero sin incluir el elemento en este índice). Considera esto:
<blockquote>let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];<br><br>let todaysWeather = weatherConditions.slice(1, 3);<br>// todaysWeather equals ['snow', 'sleet'];<br>// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']<br></blockquote>
En efecto, hemos creado una nueva matriz extrayendo elementos de una matriz existente.
</section>

## Instructions
<section id='instructions'>
Hemos definido una función, <code>forecast</code> , que toma una matriz como argumento. Modifique la función utilizando <code>slice()</code> para extraer información de la matriz de argumentos y devuelva una nueva matriz que contenga los elementos <code>&#39;warm&#39;</code> y <code>&#39;sunny&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>forecast</code> debería devolver <code>[&quot;warm&quot;, &quot;sunny&quot;]&#39;</code>
    testString: 'assert.deepEqual(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]), ["warm", "sunny"], "<code>forecast</code> should return <code>["warm", "sunny"]");'
  - text: La función de <code>forecast</code> debe utilizar el método <code>slice()</code>
    testString: 'assert(/\.slice\(/.test(code), "The <code>forecast</code> function should utilize the <code>slice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // change code below this line

  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

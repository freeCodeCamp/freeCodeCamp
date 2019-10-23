---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
videoUrl: ''
localeTitle: Código gris
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Gray code">El código gris</a> es una forma de codificación binaria donde las transiciones entre números consecutivos difieren solo en un bit. Esta es una codificación útil para reducir los riesgos de datos de hardware con valores que cambian rápidamente y / o se conectan a hardware más lento como entradas. También es útil para generar entradas para los <a href="https://en.wikipedia.org/wiki/Karnaugh map">mapas de Karnaugh</a> en orden de izquierda a derecha o de arriba a abajo. Cree una función para codificar un número y decodificar un número del código Gray. La función deberá tener 2 parámetros. El primero sería un booleano. La función debe codificar para verdadero y decodificar para falso. El segundo parámetro sería el número a codificar / decodificar. Muestre las representaciones binarias normales, las representaciones de código de Gray y los valores de código de Gray descodificados para todos los números binarios de 5 bits (0-31 inclusive, no es necesario llevar 0). Hay muchos códigos de Gray posibles. Lo siguiente codifica lo que se llama &quot;código gris reflejado en binario&quot;. <br> Codificación (MSB es el bit 0, b es binario, g es el código gris): <code><br> if b[i-1] = 1 <br> <span style="padding-left:1em">g[i] = not b[i]</span> <br> else <br> <span style="padding-left:1em">g[i] = b[i]</span> <br></code> O: <br> <code>g = b xor (b logically right shifted 1 time)</code> <br> Decodificación (MSB es el bit 0, b es binario, g es el código gris): <br> <code>b[0] = g[0] <br> for other bits: <br> b[i] = g[i] xor b[i-1] <br></code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gray</code> debería ser una función.
    testString: 'assert(typeof gray=="function","<code>gray</code> should be a function.");'
  - text: '<code>gray(true,177)</code> debe devolver un número.'
    testString: 'assert(typeof gray(true,177)=="number","<code>gray(true,177)</code> should return a number.");'
  - text: '<code>gray(true,177)</code> debe devolver <code>233</code> .'
    testString: 'assert.equal(gray(true,177),233,"<code>gray(true,177)</code> should return <code>233</code>.");'
  - text: '<code>gray(true,425)</code> debe devolver <code>381</code> .'
    testString: 'assert.equal(gray(true,425),381,"<code>gray(true,425)</code> should return <code>381</code>.");'
  - text: '<code>gray(true,870)</code> debe devolver <code>725</code> .'
    testString: 'assert.equal(gray(true,870),725,"<code>gray(true,870)</code> should return <code>725</code>.");'
  - text: '<code>gray(false,233)</code> debe devolver <code>177</code> .'
    testString: 'assert.equal(gray(false,233),177,"<code>gray(false,233)</code> should return <code>177</code>.");'
  - text: '<code>gray(false,381)</code> debe devolver <code>425</code> .'
    testString: 'assert.equal(gray(false,381),425,"<code>gray(false,381)</code> should return <code>425</code>.");'
  - text: '<code>gray(false,725)</code> debe devolver <code>870</code> .'
    testString: 'assert.equal(gray(false,725),870,"<code>gray(false,725)</code> should return <code>870</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gray(enc, number) {
 // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

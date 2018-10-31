---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Encontrar un resto en JavaScript
---

## Description
<section id="description"> El operador <dfn>restante</dfn> <code>%</code> da el resto de la división de dos números. <strong>Ejemplo</strong> <blockquote> 5% 2 = 1 porque <br> Math.floor (5/2) = 2 (Cociente) <br> 2 * 2 = 4 <br> 5 - 4 = 1 (resto) </blockquote> <strong>Uso</strong> <br> En matemáticas, se puede verificar que un número sea par o impar verificando el resto de la división del número entre <code>2</code> . <blockquote> 17% 2 = 1 (17 es impar) <br> 48% 2 = 0 (48 es par) </blockquote> <strong>Nota</strong> <br> El operador del <dfn>resto a</dfn> veces se denomina incorrectamente operador del &quot;módulo&quot;. Es muy similar al módulo, pero no funciona correctamente con números negativos. </section>

## Instructions
<section id="instructions"> Establezca el <code>remainder</code> igual al resto de <code>11</code> dividido por <code>3</code> usando el operador <dfn>resto</dfn> ( <code>%</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>remainder</code> debe ser inicializada.
    testString: 'assert(/var\s+?remainder/.test(code), "The variable <code>remainder</code> should be initialized");'
  - text: El valor del <code>remainder</code> debe ser <code>2</code>
    testString: 'assert(remainder === 2, "The value of <code>remainder</code> should be <code>2</code>");'
  - text: Debes usar el operador <code>%</code>
    testString: 'assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code), "You should use the <code>%</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

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
// solution required
```
</section>

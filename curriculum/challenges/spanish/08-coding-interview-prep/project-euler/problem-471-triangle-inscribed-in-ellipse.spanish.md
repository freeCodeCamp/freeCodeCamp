---
id: 5900f5431000cf542c510056
challengeType: 5
title: 'Problem 471: Triangle inscribed in ellipse'
videoUrl: ''
localeTitle: 'Problema 471: Triángulo inscrito en elipse'
---

## Description
<section id="description"> El triángulo ΔABC se inscribe en una elipse con la ecuación $ \ frac {x ^ 2} {a ^ 2} + \ frac {y ^ 2} {b ^ 2} = 1 $, 0 &lt;2b &lt;a, ayb enteros . Sea r (a, b) el radio del incircle de ΔABC cuando el incircle tiene el centro (2b, 0) y A tiene las coordenadas $ \ left (\ frac a 2, \ frac {\ sqrt 3} 2 b \ right) ps Por ejemplo, r (3,1) = ½, r (6,2) = 1, r (12,3) = 2. <p> Deje que $ G (n) = \ sum <em>{a = 3} ^ n \ sum</em> {b = 1} ^ {\ lfloor \ frac {a - 1} 2 \ rfloor} r (a, b) $ Te dan G ( 10) = 20.59722222, G (100) = 19223.60980 (redondeado a 10 dígitos significativos). Encontrar G (1011). Da tu respuesta en notación científica redondeada a 10 dígitos significativos. Usa una e minúscula para separar la mantisa y el exponente. Para G (10) la respuesta hubiera sido 2.059722222e1. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler471()</code> debe devolver 1.895093981e + 31.
    testString: 'assert.strictEqual(euler471(), 1.895093981e+31, "<code>euler471()</code> should return 1.895093981e+31.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler471() {
  // Good luck!
  return true;
}

euler471();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

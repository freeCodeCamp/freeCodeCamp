---
id: 5
localeTitle: 5900f3941000cf542c50fea7
challengeType: 5
title: 'Problem 40: Champernowne"s constant'
---

## Description
<section id='description'> 
Una fracción decimal irracional se crea mediante la concatenación de los números enteros positivos: 
<span style='display: block; text-align: center;'>,12345678910 <b style='color: red;'>1</b> 112131415161718192021 ...</span> 
Se puede observar que el 12 <sup>de</sup> dígitos de la parte fraccionaria es de 1. 
Si <i>d <sub>n</sub></i> representa el <i><sup>enésimo</sup></i> dígitos de la parte fraccionaria , encuentra el valor de la siguiente expresión. 
<span style='display: block; text-align: center;'>d <sub>1</sub> × d <sub>10</sub> × d <sub>100</sub> × d <sub>1000</sub> × d <sub>10000</sub> × d <sub>100000</sub> × d <sub>1000000</sub></span> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>champernownesConstant(100)</code> debe devolver 5.
    testString: 'assert.strictEqual(champernownesConstant(100), 5, "<code>champernownesConstant(100)</code> should return 5.");'
  - text: <code>champernownesConstant(1000)</code> debe devolver 15.
    testString: 'assert.strictEqual(champernownesConstant(1000), 15, "<code>champernownesConstant(1000)</code> should return 15.");'
  - text: <code>champernownesConstant(1000000)</code> debe devolver 210.
    testString: 'assert.strictEqual(champernownesConstant(1000000), 210, "<code>champernownesConstant(1000000)</code> should return 210.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function champernownesConstant(n) {
  // Good luck!
  return true;
}

champernownesConstant(100);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function champernownesConstant(n) {
  let fractionalPart = ";
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```

</section>

---
id: 5
localeTitle: 5900f38d1000cf542c50fea0
challengeType: 5
title: 'Problem 33: Digit cancelling fractions'
---

## Description
<section id='description'> 
La fracción <sup><sub>49/98</sub></sup> es una fracción curioso, como un matemático sin experiencia en el intento de simplificar puede creer erróneamente que <sup><sub>49/98</sub></sup> = <sup><sub>4/8,</sub></sup> que es correcto, se obtiene mediante la cancelación de los 9s. 
Consideraremos fracciones como, <sup><sub>30/50</sub></sup> = <sup><sub>3/5,</sub></sup> para ser ejemplos triviales. 
Hay exactamente cuatro ejemplos no triviales de este tipo de fracción, menos de uno en valor, y que contienen dos dígitos en el numerador y el denominador. 
Si el producto de estas cuatro fracciones se da en sus términos comunes más bajos, encuentre el valor del denominador. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitCancellingFractions()</code> debe devolver 100.
    testString: 'assert.strictEqual(digitCancellingFractions(), 100, "<code>digitCancellingFractions()</code> should return 100.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitCancellingFractions() {
  // Good luck!
  return true;
}

digitCancellingFractions();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function digitCancellingFractions() {
  function isCurious(numerator, denominator) {
    const fraction = numerator / denominator;
    const numString = numerator.toString();
    const denString = denominator.toString();

    if (numString[1] === '0' && denString[1] === '0') {
      // trivial
      return false;
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (numString[i] === denString[j]) {
          const newNum = parseInt(numString[1 - i], 10);
          const newDen = parseInt(denString[1 - j], 10);
          if (newNum / newDen === fraction) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function findLargestDivisor(a, b) {
    let gcd = a > b ? b : a;
    while (gcd > 1) {
      if (a % gcd === 0 && b % gcd === 0) {
        return gcd;
      }
      gcd--;
    }
    return gcd;
  }

  function simplifyFraction(numerator, denominator) {
    const divisor = findLargestDivisor(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
  }

  let multipleNumerator = 1;
  let multipleDenominator = 1;

  for (let denominator = 11; denominator < 100; denominator++) {
    for (let numerator = 10; numerator < denominator; numerator++) {
      if (isCurious(numerator, denominator)) {
        multipleNumerator *= numerator;
        multipleDenominator *= denominator;
      }
    }
  }

  return simplifyFraction(multipleNumerator, multipleDenominator)[1];
}
```

</section>

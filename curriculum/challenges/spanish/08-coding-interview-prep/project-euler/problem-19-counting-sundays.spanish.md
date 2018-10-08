---
id: 5
localeTitle: 5900f37f1000cf542c50fe92
challengeType: 5
title: 'Problem 19: Counting Sundays'
---

## Description
<section id='description'> 
Se le proporciona la siguiente información, pero es posible que prefiera hacer una investigación por sí mismo. 
<ul><li> El 1 de enero de 1900 fue un lunes. </li><li> Treinta días tiene septiembre, <br> Abril, junio y noviembre. <br> Todos los demás tienen treinta y uno, <br> Salvando febrero solo, <br> Que tiene veintiocho, llueva o truene. <br> Y en años bisiestos, veintinueve. </li><li> Un año bisiesto ocurre en cualquier año divisible por 4, pero no en un siglo a menos que sea divisible por 400. </li> 
¿Cuántos domingos cayeron el primer día del mes durante el siglo veinte (1 de enero de 1901 a 31 de diciembre de 2000)? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>countingSundays(1943, 1946)</code> debe devolver 6.&#39;
    testString: 'assert.strictEqual(countingSundays(1943, 1946), 6, "<code>countingSundays(1943, 1946)</code> should return 6.");'
  - text: &#39; <code>countingSundays(1995, 2000)</code> debe devolver 9.&#39;
    testString: 'assert.strictEqual(countingSundays(1995, 2000), 9, "<code>countingSundays(1995, 2000)</code> should return 9.");'
  - text: &#39; <code>countingSundays(1901, 2000)</code> debe devolver 171.&#39;
    testString: 'assert.strictEqual(countingSundays(1901, 2000), 171, "<code>countingSundays(1901, 2000)</code> should return 171.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countingSundays(firstYear, lastYear) {
  // Good luck!
  return true;
}

countingSundays(1943, 1946);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```

</section>

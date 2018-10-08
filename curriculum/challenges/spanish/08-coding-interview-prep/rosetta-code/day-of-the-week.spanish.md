---
title: Day of the week
id: 5966f99c45e8976909a85575
localeTitle: 5966f99c45e8976909a85575
challengeType: 5
---

## Description
<section id='description'> 
<p> Una empresa decide que cada vez que caiga un domingo en Navidad, les dará a sus trabajadores todos los días feriados extra pagados para que, junto con los días festivos, los trabajadores no tengan que trabajar la semana siguiente (entre el 25 de diciembre y el primero de enero). </p> 
<p> Tarea: </p> 
<p> Escriba una función que tome un año de inicio y un año de finalización y devuelva un conjunto de todos los años en los que el 25 de diciembre será un domingo. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findXmasSunday</code> es una función.
    testString: 'assert(typeof findXmasSunday === "function", "<code>findXmasSunday</code> is a function.");'
  - text: &#39; <code>findChristmasSunday(2000, 2100)</code> debería devolver una matriz.&#39;
    testString: 'assert(typeof findXmasSunday(2000, 2100) === "object", "<code>findChristmasSunday(2000, 2100)</code> should return an array.");'
  - text: &#39; <code>findChristmasSunday(2008, 2121</code> debe devolver [1977, 1983, 1988, 1994, 2005, 2011, 2016]&#39;
    testString: 'assert.deepEqual(findXmasSunday(1970, 2017), firstSolution, "<code>findChristmasSunday(2008, 2121</code> should return [1977, 1983, 1988, 1994, 2005, 2011, 2016]");'
  - text: &#39; <code>findChristmasSunday(2008, 2121</code> debe devolver [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]&#39;
    testString: 'assert.deepEqual(findXmasSunday(2008, 2121), secondSolution, "<code>findChristmasSunday(2008, 2121</code> should return [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findXmasSunday (start, end) {
  // Good luck!
  return true;
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
function findXmasSunday (start, end) {
  const xmasSunday = [];
  for (let year = start; year <= end; year++) {
    const xmas = new Date(year, 11, 25);
    if (xmas.getDay() === 0) {
      xmasSunday.push(year);
    }
  }
  return xmasSunday;
}

```

</section>

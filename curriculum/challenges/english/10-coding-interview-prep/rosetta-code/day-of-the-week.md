---
title: Day of the week
id: 5966f99c45e8976909a85575
challengeType: 5
forumTopicId: 302245
---

## Description
<section id='description'>
A company decides that whenever Xmas falls on a Sunday they will give their workers all extra paid holidays so that, together with any public holidays, workers will not have to work the following week (between the 25th of December and the first of January).
</section>

## Instructions
<section id='instructions'>
Write a function that takes a start year and an end year and return an array of all the years where the 25th of December will be a Sunday.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findXmasSunday</code> should be a function.
    testString: assert(typeof findXmasSunday === 'function');
  - text: <code>findXmasSunday(2000, 2100)</code> should return an array.
    testString: assert(typeof findXmasSunday(2000, 2100) === 'object');
  - text: <code>findXmasSunday(1970, 2017)</code> should return <code>[1977, 1983, 1988, 1994, 2005, 2011, 2016]</code>
    testString: assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
  - text: <code>findXmasSunday(2008, 2121)</code> should return <code>[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]</code>
    testString: assert.deepEqual(findXmasSunday(2008, 2121), secondSolution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findXmasSunday(start, end) {

  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const firstSolution = [1977, 1983, 1988, 1994, 2005, 2011, 2016];
const secondSolution = [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function findXmasSunday(start, end) {
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

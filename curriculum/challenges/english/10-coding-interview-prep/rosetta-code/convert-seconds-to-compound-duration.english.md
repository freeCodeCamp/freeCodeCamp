---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
forumTopicId: 302236
---

## Description
<section id='description'>
Implement a function which:
<ul>
  <li>takes a positive integer representing a duration in seconds as input (e.g., <code>100</code>), and</li>
  <li>returns a string which shows the same duration decomposed into weeks, days, hours, minutes, and seconds as detailed below (e.g., <code>1 min, 40 sec</code>).</li>
</ul>
Demonstrate that it passes the following three test-cases:
<div style="font-size:115%; font-weight: bold;">Test Cases</div>

| Input number | Output number |
| --- | --- |
| 7259 | <code>2 hr, 59 sec</code> |
| 728640059 | <code>1 d</code> |
| 6000000 | <code>9 wk, 6 d, 10 hr, 40 min</code> |
<div style="font-size:115%; font-weight: bold;">Details</div>
<ul>
  <li>
    The following five units should be used:

| Unit | Suffix used in Output | Conversion |
| --- | --- | --- |
| week | <code>wk</code> | 1 week = 7 days |
| day | <code>d</code> | 1 day = 24 hours |
| hour | <code>hr</code> | 1 hour = 60 minutes |
| minute | <code>min</code> | 1 minute = 60 seconds |
| second | <code>sec</code> | --- |
  </li>
  <li>
    However, <strong>only</strong> include quantities with non-zero values in the output (e.g., return <code>1 d</code> and not <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Give larger units precedence over smaller ones as much as possible (e.g., return <code>2 min, 10 sec</code> and not <code>1 min, 70 sec</code> or <code>130 sec</code>).
  </li>
  <li>
    Mimic the formatting shown in the test-cases (quantities sorted from largest unit to smallest and separated by comma+space; value and unit of each quantity separated by space).
  </li>
</ul>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code> should be a function.
    testString: assert(typeof convertSeconds === 'function');
  - text: <code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.
    testString: assert.equal(convertSeconds(testCases[0]), results[0]);
  - text: <code>convertSeconds(86400)</code> should return <code>1 d</code>.
    testString: assert.equal(convertSeconds(testCases[1]), results[1]);
  - text: <code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.
    testString: assert.equal(convertSeconds(testCases[2]), results[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds(sec) {

  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}

```

</section>

---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Implement a function which:</p>
takes a positive integer representing a duration in seconds as input (e.g., <code>100</code>), and
returns a string which shows the same duration decomposed into weeks, days, hours, minutes, and seconds as detailed below (e.g., "<code>1 min, 40 sec</code>").
<p>Demonstrate that it passes the following three test-cases:</p><p style="font-size:115%; margin:1em 0 0 0">Test Cases</p>
<table>
<tbody>
<tr>
<th>input number</th>
<th>output number</th>
</tr>
<tr>
<td>7259</td>
<td><code>2 hr, 59 sec</code></td>
</tr>
<tr>
<td>86400</td>
<td><code>1 d</code></td>
</tr>
<tr>
<td>6000000</td>
<td><code>9 wk, 6 d, 10 hr, 40 min</code></td>
</tr>
</tbody>
</table>
<p style="font-size:115%; margin:1em 0 0 0">Details</p>
The following five units should be used:
<table>
<tbody>
<tr>
<th>unit</th>
<th>suffix used in output</th>
<th>conversion</th>
</tr>
<tr>
<td>week</td>
<td><code>wk</code></td>
<td>1 week = 7 days</td>
</tr>
<tr>
<td>day</td>
<td><code>d</code></td>
<td>1 day = 24 hours</td>
</tr>
<tr>
<td>hour</td>
<td><code>hr</code></td>
<td>1 hour = 60 minutes</td>
</tr>
<tr>
<td>minute</td>
<td><code>min</code></td>
<td>1 minute = 60 seconds</td>
</tr>
<tr>
<td>second</td>
<td><code>sec</code></td>
<td></td>
</tr>
</tbody>
</table>
However, only include quantities with non-zero values in the output (e.g., return "<code>1 d</code>" and not "<code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>").Give larger units precedence over smaller ones as much as possible (e.g., return <code>2 min, 10 sec</code> and not <code>1 min, 70 sec</code> or <code>130 sec</code>)Mimic the formatting shown in the test-cases (quantities sorted from largest unit to smallest and separated by comma+space; value and unit of each quantity separated by space).
<p><hr style="margin:1em 0;"/></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>convertSeconds</code> is a function.
  testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
- text: '<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.'
  testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
- text: <code>convertSeconds(86400)</code> should return <code>1 d</code>.
  testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
- text: '<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.'
  testString: 'assert.equal(convertSeconds(testCases[2]), results[2], "<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
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
function convertSeconds (sec) {
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

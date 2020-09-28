---
title: Gamma function
id: 5a23c84252665b21eecc7e76
challengeType: 5
forumTopicId: 302271
localeTitle: Гамма-функция
---

## Description
<section id='description'>
Внедрите один алгоритм (или более) для вычисления функции <a href="https://en.wikipedia.org/wiki/Gamma function">Gamma</a> ($ \ Gamma $) (только в реальном поле). Гамма-функция может быть определена как: <div style="padding-left: 4em;"> <big><big>$ \ Gamma (x) = \ displaystyle \ int_0 ^ \ infty t ^ {x-1} e ^ {- t} dt $</big></big> </div>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gamma</code> should be a function.
    testString: assert(typeof gamma=='function')
  - text: <code>gamma(.1)</code> should return a number.
    testString: assert(typeof gamma(.1)=='number')
  - text: <code>gamma(.1)</code> should return <code>9.513507698668736</code>.
    testString: assert.equal(round(gamma(.1)), round(9.513507698668736))
  - text: <code>gamma(.2)</code> should return <code>4.590843711998803</code>.
    testString: assert.equal(round(gamma(.2)), round(4.590843711998803))
  - text: <code>gamma(.3)</code> should return <code>2.9915689876875904</code>.
    testString: assert.equal(round(gamma(.3)), round(2.9915689876875904))
  - text: <code>gamma(.4)</code> should return <code>2.218159543757687</code>.
    testString: assert.equal(round(gamma(.4)), round(2.218159543757687))
  - text: <code>gamma(.5)</code> should return <code>1.7724538509055159</code>.
    testString: assert.equal(round(gamma(.5)), round(1.7724538509055159))

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gamma(x) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
function round(x) {
  return Number(x).toPrecision(13);
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function gamma(x) {
  var p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
  771.32342877765313, -176.61502916214059, 12.507343278686905,
  -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
  ];

  var g = 7;
  if (x < 0.5) {
    return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  }

  x -= 1;
  var a = p[0];
  var t = x + g + 0.5;
  for (var i = 1; i < p.length; i++) {
  a += p[i] / (x + i);
  }

  var result=Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;

  return result;
}
```

</section>

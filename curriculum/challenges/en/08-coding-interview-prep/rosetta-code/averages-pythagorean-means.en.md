---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
challengeType: 5
---

## Description
<section id='description'>
<p class='rosetta__paragraph'>Compute all three of the <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Pythagorean means' title='wp: Pythagorean means'>Pythagorean means</a> of the set of integers <big>1</big> through <big>10</big> (inclusive).</p><p class='rosetta__paragraph'>Show that <big>$A(x_1,\ldots,x_n) \geq G(x_1,\ldots,x_n) \geq H(x_1,\ldots,x_n)$</big> for this set of positive integers.</p> The most common of the three means, the <a class='rosetta__link--rosetta' href='http://rosettacode.org/wiki/Averages/Arithmetic mean' title='Averages/Arithmetic mean'>arithmetic mean</a>, is the sum of the list divided by its length: <big>$ A(x_1, \ldots, x_n) = \frac{x_1 + \cdots + x_n}{n}$</big>The <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Geometric mean' title='wp: Geometric mean'>geometric mean</a> is the $n$th root of the product of the list: <big>$ G(x_1, \ldots, x_n) = \sqrt[n]{x_1 \cdots x_n} $</big>The <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Harmonic mean' title='wp: Harmonic mean'>harmonic mean</a> is $n$ divided by the sum of the reciprocal of each item in the list: <big>$ H(x_1, \ldots, x_n) = \frac{n}{\frac{1}{x_1} + \cdots + \frac{1}{x_n}} $</big>
<p class='rosetta__paragraph'>Assume the input is an ordered array of all inclusive numbers.</p>
<p class='rosetta__paragraph'>For the answer, please output an object in the following format:</p>
<pre class='rosetta__pre'>
{
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
}
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>pythagoreanMeans</code> is a function.
  testString: 'assert(typeof pythagoreanMeans === ''function'', ''<code>pythagoreanMeans</code> is a function.'');'
- text: '<code>pythagoreanMeans([1, 2, ..., 10])</code> should equal the same output above.'
  testString: 'assert.deepEqual(pythagoreanMeans(range1), answer1, ''<code>pythagoreanMeans([1, 2, ..., 10])</code> should equal the same output above.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pythagoreanMeans (rangeArr) {
  // Good luck!
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
function pythagoreanMeans (rangeArr) {
  // arithmeticMean :: [Number] -> Number
  const arithmeticMean = xs =>
    foldl((sum, n) => sum + n, 0, xs) / length(xs);

  // geometricMean :: [Number] -> Number
  const geometricMean = xs =>
    raise(foldl((product, x) => product * x, 1, xs), 1 / length(xs));

  // harmonicMean :: [Number] -> Number
  const harmonicMean = xs =>
    length(xs) / foldl((invSum, n) => invSum + (1 / n), 0, xs);

  // GENERIC FUNCTIONS ------------------------------------------------------

  // A list of functions applied to a list of arguments
  // <*> :: [(a -> b)] -> [a] -> [b]
  const ap = (fs, xs) => //
    Array.prototype.concat(...fs.map(f => //
      Array.prototype.concat(...xs.map(x => [f(x)]))));

  // foldl :: (b -> a -> b) -> b -> [a] -> b
  const foldl = (f, a, xs) => xs.reduce(f, a);

  // length :: [a] -> Int
  const length = xs => xs.length;

  // mapFromList :: [(k, v)] -> Dictionary
  const mapFromList = kvs =>
    foldl((a, [k, v]) =>
      (a[(typeof k === 'string' && k)] = v, a), {}, kvs);

  // raise :: Num -> Int -> Num
  const raise = (n, e) => Math.pow(n, e);
/*
  // show :: a -> String
  // show :: a -> Int -> String
  const show = (...x) =>
    JSON.stringify.apply(
      null, x.length > 1 ? [x[0], null, x[1]] : x
    );
*/
  // zip :: [a] -> [b] -> [(a,b)]
  const zip = (xs, ys) =>
    xs.slice(0, Math.min(xs.length, ys.length))
      .map((x, i) => [x, ys[i]]);

  // TEST -------------------------------------------------------------------
  // mean :: Dictionary
  const mean = mapFromList(zip(
    ['Arithmetic', 'Geometric', 'Harmonic'],
    ap([arithmeticMean, geometricMean, harmonicMean], [
      rangeArr
    ])
  ));

  return {
    values: mean,
    test: `is A >= G >= H ? ${mean.Arithmetic >= mean.Geometric &&
      mean.Geometric >= mean.Harmonic ? 'yes' : 'no'}`
  };
}

```

</section>

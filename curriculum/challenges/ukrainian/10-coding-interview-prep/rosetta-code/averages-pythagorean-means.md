---
id: 594d966a1467eb84194f0086
title: Піфагорові середні
challengeType: 1
forumTopicId: 302227
dashedName: averagespythagorean-means
---

# --description--

Compute all three of the <a href="https://en.wikipedia.org/wiki/Pythagorean_means" target="_blank" rel="noopener noreferrer nofollow">Pythagorean means</a> of the set of integers $1$ through $10$ (inclusive).

Покажіть, що $A(x_1,\\ldots,x_n) \\geq G(x_1,\\ldots,x_n) \\geq H(x_1,\\ldots,x_n)$ для цього набору цілих чисел.

<ul>
  <li>Найпоширеніший із трьох середніх — <a class='rosetta__link--rosetta' href='https://rosettacode.org/wiki/Averages/Arithmetic mean' title='Averages/Arithmetic mean' target='_blank'>середнє арифметичне</a> — сума елементів набору, поділена на їх кількість:<br>
    <big>$ A(x_1, \ldots, x_n) = \frac{x_1 + \cdots + x_n}{n}$</big></li>
  <li><a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Geometric mean' title='wp: Geometric mean' target='_blank'>Середнє геометричне</a> — це $n$-й корінь добутку кількості елементів:<br>
  <big>$ G(x_1, \ldots, x_n) = \sqrt[n]{x_1 \cdots x_n} $</big></li>
  <li><a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Harmonic mean' title='wp: Harmonic mean' target='_blank'>Середнє гармонійне</a> — $n$, поділене на суму кожного оберненого елемента набору:<br>
<big>$ H(x_1, \ldots, x_n) = \frac{n}{\frac{1}{x_1} + \cdots + \frac{1}{x_n}} $</big></li>
</ul>

# --instructions--

When writing your function, assume the input is an ordered array of all-inclusive numbers.

Для відповіді, будь ласка, виведіть об'єкт у наступному форматі:

```js
{
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
}
```

# --hints--

`pythagoreanMeans` має бути функцією.

```js
assert(typeof pythagoreanMeans === 'function');
```

`pythagoreanMeans([1, 2, ..., 10])` має дорівнювати тому ж результату, що й вище.

```js
assert.deepEqual(pythagoreanMeans(range1), answer1);
```

# --seed--

## --after-user-code--

```js
const range1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer1 = {
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
};
```

## --seed-contents--

```js
function pythagoreanMeans(rangeArr) {

}
```

# --solutions--

```js
function pythagoreanMeans(rangeArr) {
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

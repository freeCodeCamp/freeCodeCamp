---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
localeTitle: 594d966a1467eb84194f0086
challengeType: 5
---

## Description
<section id='description'>
<p class='rosetta__paragraph'> Calcule los tres <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Pythagorean means' title="wp: medios pitagóricos">medios pitagóricos</a> del conjunto de enteros del <big>1</big> al <big>10</big> (inclusive). </p><p class='rosetta__paragraph'> Muestre que <big>$ A (x_1, \ ldots, x_n) \ geq G (x_1, \ ldots, x_n) \ geq H (x_1, \ ldots, x_n) $</big> para este conjunto de enteros positivos. </p> El más común de los tres medios, la <a class='rosetta__link--rosetta' href='http://rosettacode.org/wiki/Averages/Arithmetic mean' title="Medias / media aritmética">media aritmética</a> , es la suma de la lista dividida por su longitud: <big>$ A (x_1, \ ldots, x_n) = \ frac {x_1 + \ cdots + x_n} {n} $</big> La <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Geometric mean' title="wp: media geométrica">geometría media</a> es la raíz $ n $ th del producto de la lista: <big>$ G (x_1, \ ldots, x_n) = \ sqrt [n] {x_1 \ cdots x_n} $</big> La <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Harmonic mean' title="wp: media armónica">media armónica</a> es $ n $ dividida por la suma de el recíproco de cada elemento en la lista: <big>$ H (x_1, \ ldots, x_n) = \ frac {n} {\ frac {1} {x_1} + \ cdots + \ frac {1} {x_n}} $</big>
<p class='rosetta__paragraph'> Suponga que la entrada es una matriz ordenada de todos los números inclusivos. </p>
<p class='rosetta__paragraph'> Para la respuesta, envíe un objeto en el siguiente formato: </p>
<pre class='rosetta__pre'>
{
valores: {
Aritmética: 5.5,
Geométrica: 4.528728688116765,
Armónica: 3.414171521474055
},
prueba: &#39;es A&gt; = G&gt; = H? si &#39;
}
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pythagoreanMeans</code> es una función.
    testString: 'assert(typeof pythagoreanMeans === "function", "<code>pythagoreanMeans</code> is a function.");'
  - text: ' <code>pythagoreanMeans([1, 2, ..., 10])</code> debe ser igual a la salida anterior.'
    testString: 'assert.deepEqual(pythagoreanMeans(range1), answer1, "<code>pythagoreanMeans([1, 2, ..., 10])</code> should equal the same output above.");'

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

---
id: 594d966a1467eb84194f0086
title: 平均值 - 毕达哥拉斯指的是
challengeType: 5
videoUrl: ''
dashedName: averagespythagorean-means
---

# --description--

<p class='rosetta__paragraph'>计算整数<big>1</big>到<big>10</big> （包括）的所有三个<a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Pythagorean means' title='wp：毕达哥拉斯意味着'>毕达哥拉斯方法</a> 。 </p><p class='rosetta__paragraph'>为这组正整数显示<big>$ A（x_1，\ ldots，x_n）\ geq G（x_1，\ ldots，x_n）\ geq H（x_1，\ ldots，x_n）$</big> 。 </p>这三种方法中最常见的<a class='rosetta__link--rosetta' href='http://rosettacode.org/wiki/Averages/Arithmetic mean' title='平均值/算术平均值'>算术平均值</a>是列表的总和除以其长度： <big>$ A（x_1，\\ ldots，x_n）= \\ frac {x_1 + \\ cdots + x_n} {n} $</big>  <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Geometric mean' title='wp：几何平均值'>几何mean</a>是列表产品的$ n $ th根： <big>$ G（x_1，\\ ldots，x_n）= \\ sqrt \[n] {x_1 \\ cdots x_n} $</big>  <a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/Harmonic mean' title='wp：谐波意味着'>调和平均值</a>是$ n $除以总和列表中每个项目的倒数： <big>$ H（x_1，\\ ldots，x_n）= \\ frac {n} {\\ frac {1} {x_1} + \\ cdots + \\ frac {1} {x_n}} $</big>  <p class='rosetta__paragraph'>假设输入是包含所有数字的有序数组。 </p><p class='rosetta__paragraph'>要获得答案，请按以下格式输出对象： </p><pre class='rosetta__pre'> {
  值：{
    算术：5.5，
    几何：4.528728688116765，
    谐波：3.414171521474055
  }，
  测试：'是A> = G> = H？是'
}
</pre>

# --hints--

`pythagoreanMeans`是一种功能。

```js
assert(typeof pythagoreanMeans === 'function');
```

`pythagoreanMeans([1, 2, ..., 10])`应该等于上面相同的输出。

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

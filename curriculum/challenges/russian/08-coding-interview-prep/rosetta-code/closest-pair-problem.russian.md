---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
videoUrl: ''
localeTitle: Проблема ближайшей пары
---

## Description
<section id="description"> Задача: <p> Предоставить функцию для поиска ближайших двух точек среди множества заданных точек в двух измерениях, т. <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Ближайшая проблема с двумя точками">Е. Решить задачу Ближайшей пары точек</a> в плоском случае. </p><p> Прямым решением является алгоритм O (n <sup>2</sup> ) (который мы можем назвать алгоритмом грубой силы); псевдокод (с использованием индексов) может быть простым: </p><pre> bruteForceClosestPair из P (1), P (2), ... P (N)
если N &lt;2, то
  return ∞
еще
  minDistance ← | P (1) - P (2) |
  minPoints ← {P (1), P (2)}
  foreach i ∈ [1, N-1]
    foreach j ∈ [i + 1, N]
      если | P (i) - P (j) | &lt;minDistance тогда
        minDistance ← | P (i) - P (j) |
        minPoints ← {P (i), P (j)}
      ENDIF
    ENDFOR
  ENDFOR
  return minDistance, minPoints
ENDIF
</pre><p> Лучший алгоритм основан на подходе рекурсивного разделения и покорения, как это объясняется также в <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: Ближайшая проблема с двумя точками # Planar_case">самой близкой проблеме точек Википедии</a> , которая является O (n log n); псевдокод может быть: </p><pre> ближайшая пара (xP, yP)
  где xP - P (1) .. P (N), отсортированная по координате x, и
  yP - P (1). P (N), отсортированный по координате y (по возрастанию)
если N ≤ 3, то
  возвращать ближайшие точки xP с использованием алгоритма грубой силы
еще
  xL ← точки xP от 1 до ⌈N / 2⌉
  xR ← точки xP от ⌈N / 2⌉ + 1 до N
  xm ← xP (⌈N / 2⌉) <sub>x</sub>
  yL ← {p ∈ yP: p <sub>x</sub> ≤ xm}
  yR ← {p ∈ yP: p <sub>x</sub> &gt; xm}
  (dL, pairL) ← ближайшая пара (xL, yL)
  (dR, pairR) ← ближайшая пара (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  если dL &lt;dR, тогда
    (dmin, pairMin) ← (dL, pairL)
  ENDIF
  yS ← {p ∈ yP: | xm - p <sub>x</sub> | &lt;dmin}
  nS ← число точек в yS
  (ближайший, ближайший) ← (dmin, pairMin)
  для i от 1 до nS - 1
    k ← i + 1
    в то время как k ≤ nS и yS (k) <sub>y</sub> - yS (i) <sub>y</sub> &lt;dmin
      если | yS (k) - yS (i) | &lt;ближе
        (ближайший ближайший Pair) ← (| yS (k) - yS (i) |, {yS (k), yS (i)})
      ENDIF
      k ← k + 1
    ENDWHILE
  ENDFOR
  вернуться ближайший, ближайший
ENDIF
</pre> Ссылки и дальнейшие чтения: <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="ссылка: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Самая близкая</a> <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Ближайшая проблема с двумя точками">пара проблем точек</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="ссылка: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">Ближайшая пара (McGill)</a> <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="ссылка: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Ближайшая пара (UCSB)</a> <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="ссылка: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Ближайшая пара (WUStL)</a> <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="ссылка: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Ближайшая пара (IUPUI)</a> <p> Для ввода предположим, что аргумент представляет собой массив объектов (точек) с элементами <code>x</code> и <code>y</code> установленными в числа. Для вывода возвращаем объект, содержащий пары ключ: значение для <code>distance</code> и <code>pair</code> (т. Е. Пару из двух ближайших точек). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> - это функция.
    testString: 'assert(typeof getClosestPair === "function", "<code>getClosestPair</code> is a function.");'
  - text: Расстояние должно быть следующим.
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, "Distance should be the following.");'
  - text: Баллы должны быть следующими.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, "Points should be the following.");'
  - text: Расстояние должно быть следующим.
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, "Distance should be the following.");'
  - text: Баллы должны быть следующими.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair, "Points should be the following.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

function getClosestPair (pointsArr) {
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
// solution required
```
</section>

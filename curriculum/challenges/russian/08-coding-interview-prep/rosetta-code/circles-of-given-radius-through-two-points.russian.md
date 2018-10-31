---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
challengeType: 5
videoUrl: ''
localeTitle: Круги заданного радиуса через две точки
---

## Description
<section id="description"><p> Учитывая две точки на плоскости и радиус, обычно через две точки могут быть проведены два круга заданного радиуса. </p> Исключения: радиус нуля должен рассматриваться как никогда не описывающий круги (за исключением случая, когда точки совпадают). Если точки совпадают, то может быть проведено бесконечное число кругов с точкой на их окружности, если радиус не равен нулю, а затем сворачивает круги в точку. Если точки образуют диаметр, верните один круг. Если точки слишком далеки друг от друга, круги не могут быть нарисованы. Задача: выполнить функцию, которая принимает две точки и радиус и возвращает два круга через эти точки. Для каждого результирующего круга укажите координаты для центра каждого круга, округленного до четырех десятичных цифр. Возвращает каждую координату в виде массива и координирует ее как массив массивов. Для краевых случаев возвращайте следующее: если точки находятся на диаметре, верните одну точку. Если радиус также равен нулю, верните <code>&quot;Radius Zero&quot;</code> . Если точки совпадают, верните <code>&quot;Coincident point. Infinite solutions&quot;</code> . Если точки находятся дальше друг от друга, чем диаметр, верните <code>&quot;No intersection. Points further apart than circle diameter&quot;</code> . Примеры входов: <pre> p1 p2 r
0,1234, 0,9876 0,8765, 0,2345 2,0
0,0000, 2,0000 0,0000, 0,0000 1,0
0,1234, 0,9876 0,1234, 0,9876 2,0
0,1234, 0,9876 0,8765, 0,2345 0,5
0,1234, 0,9876 0,1234, 0,9876 0,0
</pre> Ref: <a href="http://mathforum.org/library/drmath/view/53027.html" title="ссылка: http://mathforum.org/library/drmath/view/53027.html">Поиск центра круга из двух точек и радиуса</a> из математического форума @ Drexel </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code> - это функция.
    testString: 'assert(typeof getCircles === "function", "<code>getCircles</code> is a function.");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> должны возвращать <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code> .'
    testString: 'assert.deepEqual(getCircles(...testCases[0]), answers[0], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.");'
  - text: '<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> должны возвращать <code>[0, 1]</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[1]), answers[1], "<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> должны возвращать <code>Coincident point. Infinite solutions</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[2]), answers[2], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> должен возвращать <code>No intersection. Points further apart than circle diameter</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[3]), answers[3], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> должны возвращать <code>Radius Zero</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[4]), answers[4], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles (...args) {
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

---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
forumTopicId: 302258
localeTitle: Метод Эйлера
---

## Description
<section id='description'>
<p> Метод Эйлера численно аппроксимирует решения обыкновенных дифференциальных уравнений первого порядка (ОДУ) с заданным начальным значением. Это явный метод решения начальных задач (IVP), как описано <a href="https://en.wikipedia.org/wiki/Euler method" title="wp: метод Эйлера">на странице wikipedia</a> . </p><p> ОДУ должно быть представлено в следующем виде: </p><p> :: <big>$ \ frac {dy (t)} {dt} = f (t, y (t)) $</big> </p><p> с начальным значением </p><p> :: <big>$ y (t_0) = y_0 $</big> </p><p> Чтобы получить числовое решение, мы заменим производную на LHS с помощью разностной аппроксимации: </p><p> :: <big>$ \ frac {dy (t)} {dt} \ approx \ frac {y (t + h) -y (t)} {h} $</big> </p><p> затем решить для $ y (t + h) $: </p><p> :: <big>$ y (t + h) \ approx y (t) + h \, \ frac {dy (t)} {dt} $</big> </p><p> который является таким же, как </p><p> :: <big>$ y (t + h) \ approx y (t) + h \, f (t, y (t)) $</big> </p><p> Итеративное правило решения: </p><p> :: <big>$ y_ {n + 1} = y_n + h \, f (t_n, y_n) $</big> </p><p> где <big>$ h $</big> - размер шага, наиболее важный параметр для точности решения. Чем меньше размер шага, тем выше точность, но также и стоимость вычислений, поэтому его всегда нужно выбирать вручную в зависимости от проблемы. </p><p> Пример: закон охлаждения Ньютона </p><p> Закон охлаждения Ньютона описывает, как объект начальной температуры <big>$ T (t_0) = T_0 $</big> остывает в среде с температурой <big>$ T_R $</big> : </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, \ Delta T $</big> </p><p> или </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, (T (t) - T_R) $</big> </p><p> В нем говорится, что скорость охлаждения <big>$ \ frac {dT (t)} {dt} $</big> объекта пропорциональна текущей разности температур <big>$ \ Delta T = (T (t) - T_R) $</big> в окружающую среду. </p><p> Аналитическое решение, которое мы будем сравнивать с численным приближением, </p><p> :: <big>$ T (t) = T_R + (T_0 - T_R) \; е ^ {-} $ кт</big> </p> Задача: <p> Внедрить рутину метода Эйлера, а затем использовать его для решения данного примера закона охлаждения Ньютона с ним для трех разных размеров шага: </p><p> :: * 2 с </p><p> :: * 5 с и </p><p> :: * 10 с </p><p> и сравнить с аналитическим решением. </p> Начальные значения: <p> :: * начальная температура <big>$ T_0 $</big> должна быть 100 ° C </p><p> :: * комнатная температура <big>$ T_R $</big> должна составлять 20 ° C </p><p> :: * постоянная охлаждения <big>$ k $</big> должна составлять 0,07 </p><p> :: * интервал времени для вычисления должен составлять от 0 с ──► 100 с </p>
</section>

## Instructions
<section id='instructions'>
Implement a routine of Euler's method and then to use it to solve the given example of Newton's cooling law with it for three different step sizes of:
<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> and</li>
  <li><code>10 s</code></li>
</ul>
and to compare with the analytical solution.
<strong>Initial values:</strong>
<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>room temperature <big>$T_R$</big> shall be <code>20 °C</code></li>
  <li>cooling constant <big>$k$</big> shall be <code>0.07</code></li>
  <li>time interval to calculate shall be from <code>0 s</code> to <code>100 s</code></li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eulersMethod</code> is a function.
    testString: assert(typeof eulersMethod === 'function');
  - text: <code>eulersMethod(0, 100, 100, 10)</code> should return a number.
    testString: assert(typeof eulersMethod(0, 100, 100, 10) === 'number');
  - text: <code>eulersMethod(0, 100, 100, 10)</code> should return 20.0424631833732.
    testString: assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
  - text: <code>eulersMethod(0, 100, 100, 10)</code> should return 20.01449963666907.
    testString: assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
  - text: <code>eulersMethod(0, 100, 100, 10)</code> should return 20.000472392.
    testString: assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eulersMethod(x1, y1, x2, h) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function eulersMethod(x1, y1, x2, h) {
  let x = x1;
  let y = y1;

  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    y += h * (-0.07 * (y - 20));
    x += h;
  }

  return y;
}
```

</section>

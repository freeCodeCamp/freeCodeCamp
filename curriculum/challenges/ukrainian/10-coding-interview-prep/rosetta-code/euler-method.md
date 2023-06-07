---
id: 59880443fb36441083c6c20e
title: Метод Ейлера
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Метод Ейлера чисельно наближує рішення звичайних рівнянь першого порядку (ODE) з заданим початковим значенням. It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">this article</a>.

ODE повинен бути наданий за такою формою:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

з початковим значенням

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

Щоб отримати числове рішення, ми заміняємо похідну на LHS з скінченним наближенням до різниці:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

тоді вирішіть для $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

що є тим самим, як і

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

Тоді, правило повторного рішення:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

де $h$ - розмір кроку, найбільш відповідний параметр для точності рішення. Менший розмір кроку збільшує точність, але й обчислювальні витрати, тому вони завжди повинні бути підібрані вручну відповідно до завдань.

**Приклад: Закон Ньютона**

Закон Ньютона описує як об’єкт початкової температури $T(t_0) = T_0$ охолоджується в умовах температури $T_R$:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

або

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

Він каже, що швидкість охолодження $\\frac{dT(t)}{dt}$ $ об'єктів пропорційна поточній різниці температури $\\Delta T = (T(t) - T_R)$ в навколишнє середовище.

Аналітичне рішення, яке ми будемо порівняти з числовим наближенням, є

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

Реалізуйте розпорядок методу Ейлера та використовуйте його для рішення заданого прикладу закону Ньютона про три різні розміри кроку:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> і</li>
  <li><code>10 s</code></li>
</ul>

та порівняти з аналітичним рішенням.

**Початкові значення:**

<ul>
  <li>початкова температура <big>$T_0$</big> має бути <code>100 °C</code></li>
  <li>температура кімнати <big>$T_R$</big> має бути <code>20 °C</code></li>
  <li>охолодження константи <big>$k$</big> має буде <code>0.07</code></li>
  <li>інтервал обчислення повинен бути від <code>0 s</code> до <code>100 s</code></li>
</ul>

Перший параметр функції - це початковий час, другий параметр - початкова температура, третій - минулий час і четвертий параметр - крок розміру.

# --hints--

`eulersMethod` має бути функцією.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` має повернути число.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` має повернути 20.0424631833732.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` має повернути 20.01449963666907.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` має повернути 20.000472392.

```js
assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);
```

# --seed--

## --seed-contents--

```js
function eulersMethod(x1, y1, x2, h) {

}
```

# --solutions--

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

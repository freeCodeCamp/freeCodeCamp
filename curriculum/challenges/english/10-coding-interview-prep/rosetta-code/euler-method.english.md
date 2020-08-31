---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
isHidden: false
forumTopicId: 302258
---

## Description
<section id='description'>
Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://en.wikipedia.org/wiki/Euler method" title="wp: Euler method" target="_blank">the wikipedia page</a>.
The ODE has to be provided in the following form:
<ul style="list-style: none;">
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>
with an initial value
<ul style="list-style: none;">
  <li><big>$y(t_0) = y_0$</big></li>
</ul>
To get a numeric solution, we replace the derivative on the  LHS  with a finite difference approximation:
<ul style="list-style: none;">
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>
then solve for $y(t+h)$:
<ul style="list-style: none;">
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>
which is the same as
<ul style="list-style: none;">
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>
The iterative solution rule is then:
<ul style="list-style: none;">
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>
where <big>$h$</big> is the step size, the most relevant parameter for accuracy of the solution.  A smaller step size increases accuracy but also the computation cost, so it has always has to be hand-picked according to the problem at hand.
<strong>Example: Newton's Cooling Law</strong>
Newton's cooling law describes how an object of initial temperature <big>$T(t_0) = T_0$</big> cools down in an environment of temperature  <big>$T_R$</big>:
<ul style="list-style: none;">
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>
or
<ul style="list-style: none;">
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>
It says that the cooling rate  <big>$\frac{dT(t)}{dt}$</big>  of the object is proportional to the current temperature difference <big>$\Delta T = (T(t) - T_R)$</big> to the surrounding environment.
The analytical solution, which we will compare to the numerical approximation, is
<ul style="list-style: none;">
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>
</section>

## Instructions
<section id='instructions'>
Implement a routine of Euler's method and then use it to solve the given example of Newton's cooling law for three different step sizes of:
<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> and</li>
  <li><code>10 s</code></li>
</ul>
and compare with the analytical solution.
<strong>Initial values:</strong>
<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>room temperature <big>$T_R$</big> shall be <code>20 °C</code></li>
  <li>cooling constant <big>$k$</big> shall be <code>0.07</code></li>
  <li>time interval to calculate shall be from <code>0 s</code> to <code>100 s</code></li>
</ul> 
First parameter to the function is initial time, second parameter is initial temperature, third parameter is elapsed time and fourth parameter is step size.
</section>



## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eulersMethod</code> should be a function.
    testString: assert(typeof eulersMethod === 'function');
  - text: <code>eulersMethod(0, 100, 100, 2)</code> should return a number.
    testString: assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
  - text: <code>eulersMethod(0, 100, 100, 2)</code> should return 20.0424631833732.
    testString: assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
  - text: <code>eulersMethod(0, 100, 100, 5)</code> should return 20.01449963666907.
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

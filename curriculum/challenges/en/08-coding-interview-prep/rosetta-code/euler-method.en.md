---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
---

## Description
<section id='description'>
<p>Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value.  It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://en.wikipedia.org/wiki/Euler method" title="wp: Euler method">the wikipedia page</a>.</p><p>The ODE has to be provided in the following form:</p><p>:: <big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></p><p>with an initial value</p><p>:: <big>$y(t_0) = y_0$</big></p><p>To get a numeric solution, we replace the derivative on the  LHS  with a finite difference approximation:</p><p>:: <big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></p><p>then solve for $y(t+h)$:</p><p>:: <big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></p><p>which is the same as</p><p>:: <big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></p><p>The iterative solution rule is then:</p><p>:: <big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></p><p>where  <big>$h$</big>  is the step size, the most relevant parameter for accuracy of the solution.  A smaller step size increases accuracy but also the computation cost, so it has always has to be hand-picked according to the problem at hand.</p>
<p>Example: Newton's Cooling Law</p><p>Newton's cooling law describes how an object of initial temperature  <big>$T(t_0) = T_0$</big>  cools down in an environment of temperature  <big>$T_R$</big>:</p><p>:: <big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></p>
<p>or</p>
<p>:: <big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></p>
<p>It says that the cooling rate  <big>$\frac{dT(t)}{dt}$</big>  of the object is proportional to the current temperature difference  <big>$\Delta T = (T(t) - T_R)$</big>  to the surrounding environment.</p><p>The analytical solution, which we will compare to the numerical approximation, is</p>
<p>:: <big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></p>
Task:
<p>Implement a routine of Euler's method and then to use it to solve the given example of Newton's cooling law with it for three different step sizes of:</p>
<p>::*  2 s</p>
<p>::*  5 s    and </p>
<p>::*  10 s </p>
<p>and to compare with the analytical solution.</p>
Initial values:
<p>::*  initial temperature  <big>$T_0$</big>  shall be  100 °C</p>
<p>::*  room temperature  <big>$T_R$</big>  shall be  20 °C</p>
<p>::*  cooling constant   <big>$k$</big>   shall be  0.07  </p>
<p>::*  time interval to calculate shall be from  0 s  ──►  100 s</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>eulersMethod</code> is a function.
  testString: 'assert(typeof eulersMethod === ''function'', ''<code>eulersMethod</code> is a function.'');'
- text: '<code>eulersMethod(0, 100, 100, 10)</code> should return a number.'
  testString: 'assert(typeof eulersMethod(0, 100, 100, 10) === ''number'', ''<code>eulersMethod(0, 100, 100, 10)</code> should return a number.'');'
- text: '<code>eulersMethod(0, 100, 100, 10)</code> should return 20.0424631833732.'
  testString: 'assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732, ''<code>eulersMethod(0, 100, 100, 10)</code> should return 20.0424631833732.'');'
- text: '<code>eulersMethod(0, 100, 100, 10)</code> should return 20.01449963666907.'
  testString: 'assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907, ''<code>eulersMethod(0, 100, 100, 10)</code> should return 20.01449963666907.'');'
- text: '<code>eulersMethod(0, 100, 100, 10)</code> should return 20.000472392.'
  testString: 'assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392, ''<code>eulersMethod(0, 100, 100, 10)</code> should return 20.000472392.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eulersMethod (x1, y1, x2, h) {
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

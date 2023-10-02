---
id: 59880443fb36441083c6c20e
title: Metodo di Eulero
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Il metodo di Eulero approssima numericamente le soluzioni di equazioni differenziali ordinarie di primo ordine (ordinary differential equations in inglese - ODEs) con un dato valore iniziale. Si tratta di un metodo esplicito per risolvere i problemi di valore iniziale (IVP), come descritto in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">questo articolo</a>.

L'ODE deve essere fornita nella seguente forma:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

con un valore iniziale

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

Per ottenere una soluzione numerica, sostituiamo il derivato sul LHS con un'approssimazione alle differenze finite:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

poi risolvere per $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

che è come

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

La regola della soluzione iterativa è:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

dove $h$ è la dimensione del passo, il parametro più rilevante per la precisione della soluzione. Un passo più piccolo aumenta l'accuratezza ma anche il costo di calcolo, quindi deve essere sempre scelto manualmente in base al problema da affrontare.

**Esempio: Legge di raffreddamento di Newton**

La legge di raffreddamento di Newton descrive come un oggetto di temperatura iniziale $T(t_0) = T_0$ si raffredda in un ambiente di temperatura $T_R$:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

oppure

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

Dice che il tasso di raffreddamento $\\frac{dT(t)}{dt}$ dell'oggetto è proporzionale alla differenza tra la temperatura corrente dell'oggetto $\\Delta T = (T(t) - T_R)$ e quella dell'ambiente circostante.

La soluzione analitica, che confronteremo con l'approssimazione numerica, è

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

Implementa una routine del metodo di Eulero e quindi usala per risolvere l'esempio dato della legge di raffreddamento di Newton per tre diverse dimensioni di passo di:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> e</li>
  <li><code>10 s</code></li>
</ul>

e confrontala con la soluzione analitica.

**Valori iniziali:**

<ul>
  <li>la temperatura iniziale <big>$T_0$</big> deve essere <code>100 °C</code></li>
  <li>temperatura ambiente <big>$T_R$</big> deve essere <code>20 °C</code></li>
  <li>costante di raffreddamento <big>$k$</big> deve essere <code>0.07</code></li>
  <li>l'intervallo di tempo per il calcolo deve essere compreso tra <code>0 s</code> e <code>100 s</code></li>
</ul>

Il primo parametro per la funzione è il tempo iniziale, il secondo parametro è la temperatura iniziale, il terzo parametro è il tempo trascorso e il quarto parametro è la dimensione del passo.

# --hints--

`eulersMethod` dovrebbe essere una funzione.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` dovrebbe restituire un numero.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` dovrebbe restituire 20.0424631833732.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)`dovrebbe restituire 20.01449963666907.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` dovrebbe restituire 20.000472392.

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

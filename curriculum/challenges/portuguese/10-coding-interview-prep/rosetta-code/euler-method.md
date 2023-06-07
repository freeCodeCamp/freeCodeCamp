---
id: 59880443fb36441083c6c20e
title: Método de Euler
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

O método de Euler aproxima numericamente as soluções de equações diferenciais normais de primeira ordem (ODEs) com um dado valor inicial. É um método explícito para resolver problemas de valor inicial (IVPs), conforme descrito na <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">neste artigo</a>.

O ODE deve ser fornecido da seguinte forma:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

com um valor inicial

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

Para obter uma solução numérica, substituímos a derivada do lado esquerdo por uma aproximação da diferença finita:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

então resolva para $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

que é o mesmo que

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

A regra de solução iterativa é, então:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

onde $h$ é o tamanho da etapa, o parâmetro mais relevante para a precisão da solução. Um tamanho de etapa menor aumenta a precisão, mas também o custo de cálculo. Então, ele tem que ser sempre escolhido com cuidado e de acordo com o problema em questão.

**Exemplo: Lei de resfriamento de Newton**

A lei de resfriamento de Newton descreve como um objeto de temperatura inicial $T(t_0) = T_0$ resfria em um ambiente de temperatura $T_R$:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

ou

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

Ela diz que a taxa de resfriamento $\\frac{dT(t)}{dt}$ do objeto é proporcional à diferença de temperatura atual $\\Delta = (T(t) - T_R)$ com relação ao ambiente ao redor.

A solução analítica, que compararemos à aproximação numérica, é

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

Implemente uma rotina do método de Euler e, em seguida, use-a para resolver o exemplo da lei de resfriamento de Newton para três tamanhos de etapa diferentes de:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> e</li>
  <li><code>10 s</code></li>
</ul>

e compare com a solução analítica.

**Valores iniciais:**

<ul>
  <li>a temperatura inicial <big>$T_0$</big> deve ser <code>100 °C</code></li>
  <li>a temperatura ambiente <big>$T_R$</big> deve ser <code>20 °C</code></li>
  <li>a constante de resfriamento <big>$k$</big> será <code>0.07</code></li>
  <li>o intervalo de tempo para calcular deve ser de <code>0 s</code> a <code>100 s</code></li>
</ul>

O primeiro parâmetro para a função é o tempo inicial, o segundo parâmetro é a temperatura inicial, o terceiro parâmetro é o tempo passado e o quarto parâmetro é o tamanho do passo.

# --hints--

`eulersMethod` deve ser uma função.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` deve retornar um número.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` deve retornar 20.0424631833732.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` deve retornar 20.01449963666907.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` deve retornar 20.000472392.

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

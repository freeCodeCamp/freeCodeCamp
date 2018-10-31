---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
videoUrl: ''
localeTitle: Método de Euler
---

## Description
<section id="description"><p> O método de Euler aproxima numericamente soluções de equações diferenciais ordinárias (ODEs) de primeira ordem com um dado valor inicial. É um método explícito para resolver problemas de valor inicial (IVPs), conforme descrito na <a href="https://en.wikipedia.org/wiki/Euler method" title="wp: método de Euler">página da Wikipedia</a> . </p><p> O ODE deve ser fornecido da seguinte forma: </p><p> :: <big>$ \ frac {dy (t)} {dt} = f (t, y (t)) $</big> </p><p> com um valor inicial </p><p> :: <big>$ y (t_0) = y_0 $</big> </p><p> Para obter uma solução numérica, substituímos a derivada no LHS por uma aproximação por diferenças finitas: </p><p> :: <big>$ \ frac {dy (t)} {dt} \ approx \ frac {y (t + h) -y (t)} {h} $</big> </p><p> então resolva para $ y (t + h) $: </p><p> :: <big>$ y (t + h) \ aproximadamente y (t) + h \, \ frac {dy (t)} {dt} $</big> </p><p> que é o mesmo que </p><p> :: <big>$ y (t + h) \ aproximadamente y (t) + h \, f (t, y (t)) $</big> </p><p> A regra de solução iterativa é então: </p><p> :: <big>$ y_ {n + 1} = y_n + h \, f (t_n, y_n) $</big> </p><p> em que <big>$ h $</big> é o tamanho do passo, o parâmetro mais relevante para a precisão da solução. Um tamanho de passo menor aumenta a precisão, mas também o custo de computação, por isso sempre tem que ser escolhido a dedo de acordo com o problema em questão. </p><p> Exemplo: Lei de Resfriamento de Newton </p><p> A lei de refrigeração de Newton descreve como um objeto da temperatura inicial <big>$ T (t_0) = T_0 $</big> esfria em um ambiente de temperatura <big>$ T_R $</big> : </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, \ Delta T $</big> </p><p> ou </p><p> :: <big>$ \ frac {dT (t)} {dt} = -k \, (T (t) - T_R) $</big> </p><p> Ele diz que a taxa de resfriamento de <big>$ \ frac {dT (t)} {dt} $</big> do objeto é proporcional à diferença de temperatura atual <big>$ \ Delta T = (T (t) - T_R) $</big> para o ambiente ao redor. </p><p> A solução analítica, que vamos comparar com a aproximação numérica, é </p><p> :: <big>$ T (t) = T_R + (T_0 - T_R) \; e ^ {- kt} $</big> </p> Tarefa: <p> Implemente uma rotina do método de Euler e depois use-a para resolver o exemplo dado da lei de resfriamento de Newton com ela para três tamanhos diferentes de degraus de: </p><p> :: 2 s </p><p> :: * 5 se </p><p> :: 10 s </p><p> e comparar com a solução analítica. </p> Valores iniciais: <p> :: * temperatura inicial <big>$ T_0 $</big> deve ser 100 ° C </p><p> :: * temperatura ambiente <big>$ T_R $</big> deve ser 20 ° C </p><p> :: * constante de resfriamento <big>$ k $</big> deve ser 0,07 </p><p> :: * o intervalo de tempo a calcular deve ser de 0 s ──► 100 s </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eulersMethod</code> é uma função.
    testString: 'assert(typeof eulersMethod === "function", "<code>eulersMethod</code> is a function.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> deve retornar um número.'
    testString: 'assert(typeof eulersMethod(0, 100, 100, 10) === "number", "<code>eulersMethod(0, 100, 100, 10)</code> should return a number.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> deve retornar 20.0424631833732.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.0424631833732.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> deve retornar 20.01449963666907.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.01449963666907.");'
  - text: '<code>eulersMethod(0, 100, 100, 10)</code> deve retornar 20.000472392.'
    testString: 'assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392, "<code>eulersMethod(0, 100, 100, 10)</code> should return 20.000472392.");'

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
// solution required
```
</section>

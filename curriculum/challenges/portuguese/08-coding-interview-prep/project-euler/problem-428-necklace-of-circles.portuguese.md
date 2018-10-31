---
id: 5900f5191000cf542c51002b
challengeType: 5
title: 'Problem 428: Necklace of Circles'
videoUrl: ''
localeTitle: 'Problema 428: Colar de Círculos'
---

## Description
<section id="description"> Seja <var>a</var> , <var>b</var> e <var>c</var> números positivos. Seja W, X, Y, Z quatro pontos colineares onde | WX | = <var>a</var> , | XY | = <var>b</var> , | YZ | = <var>c</var> e | WZ | = <var>a</var> + <var>b</var> + <var>c</var> . Seja C <sub>no</sub> círculo com o diâmetro XY. Seja C <sub>out</sub> o círculo com o diâmetro WZ. <p> O tripleto ( <var>a</var> , <var>b</var> , <var>c</var> ) é chamado de <em>triplete de colar</em> se você puder colocar <var>k</var> ≥ 3 círculos distintos C <sub>1</sub> , C <sub>2</sub> , ..., C <sub><var>k</var></sub> tais que: </p><ul><li> C <sub><var>i</var></sub> não tem pontos interiores comuns com qualquer C <sub><var>j</var></sub> para 1 ≤ <var>i</var> , <var>j</var> ≤ <var>k</var> e <var>i</var> ≠ <var>j</var> , </li><li> C <sub><var>i</var></sub> é tangente a C <sub>in</sub> e C <sub>a</sub> 1 ≤ <var>i</var> ≤ <var>k</var> , </li><li> C <sub><var>i</var></sub> é tangente a C <sub><var>i</var> +1</sub> para 1 ≤ <var>i</var> &lt; <var>k</var> , e </li><li> <sub><var>Ck</var></sub> é tangente a C <sub>1</sub> . </li></ul> Por exemplo, (5, 5, 5) e (4, 3, 21) são trigêmeos em colar, enquanto pode ser mostrado que (2, 2, 5) não é. <img src="https://projecteuler.net/project/images/p428_necklace.png" alt="uma re-apresentação visual de um trio de colar"><p> Seja T ( <var>n</var> ) o número de trigêmeos de colar ( <var>a</var> , <var>b</var> , <var>c</var> ) de modo que <var>a</var> , <var>b</var> e <var>c</var> sejam inteiros positivos e <var>b</var> ≤ <var>n</var> . Por exemplo, T (1) = 9, T (20) = 732 e T (3000) = 438106. </p><p> Encontre T (1 000 000 000). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>necklace(1000000000)</code> deve retornar 747215561862.
    testString: 'assert.strictEqual(necklace(1000000000), 747215561862, "<code>necklace(1000000000)</code> should return 747215561862.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function necklace(n) {
  // Good luck!
  return true;
}

necklace(1000000000)

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

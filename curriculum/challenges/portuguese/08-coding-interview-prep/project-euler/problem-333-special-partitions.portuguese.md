---
id: 5900f4b91000cf542c50ffcc
challengeType: 5
title: 'Problem 333: Special partitions'
videoUrl: ''
localeTitle: 'Problema 333: Partições Especiais'
---

## Description
<section id="description"> Todos os inteiros positivos podem ser particionados de tal maneira que cada termo da partição possa ser expresso como 2ix3j, onde i, j ≥ 0. <p> Vamos considerar apenas essas partições em que nenhum dos termos pode dividir qualquer um dos outros termos. Por exemplo, a partição de 17 = 2 + 6 + 9 = (21x30 + 21x31 + 20x32) não seria válida, pois 2 pode dividir 6. Nem a partição 17 = 16 + 1 = (24x30 + 20x30), pois 1 pode dividir 16. A única partição válida de 17 seria 8 + 9 = (23x30 + 20x32). </p><p> Muitos inteiros têm mais de uma partição válida, sendo o primeiro 11 com as duas partições a seguir. 11 = 2 + 9 = (21x30 + 20x32) 11 = 8 + 3 = (23x30 + 20x31) </p><p> Vamos definir P (n) como o número de partições válidas de n. Por exemplo, P (11) = 2. </p><p> Vamos considerar apenas os inteiros primos q que teriam uma única partição válida, como P (17). </p><p> A soma dos primos q &lt;100, tal que P (q) = 1 é igual a 233. </p><p> Encontre a soma dos primos q &lt;1000000 tais que P (q) = 1. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler333()</code> deve retornar 3053105.
    testString: 'assert.strictEqual(euler333(), 3053105, "<code>euler333()</code> should return 3053105.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler333() {
  // Good luck!
  return true;
}

euler333();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

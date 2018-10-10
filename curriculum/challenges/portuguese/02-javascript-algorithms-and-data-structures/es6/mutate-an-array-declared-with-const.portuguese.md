---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
videoUrl: ''
localeTitle: Mude uma matriz declarada com const
---

## Description
<section id="description"> A declaração <code>const</code> tem muitos casos de uso no JavaScript moderno. Alguns desenvolvedores preferem atribuir todas as variáveis ​​usando <code>const</code> por padrão, a menos que saibam que precisarão reatribuir o valor. Apenas nesse caso, eles usam <code>let</code> . No entanto, é importante entender que objetos (incluindo matrizes e funções) atribuídos a uma variável usando <code>const</code> ainda são mutáveis. A utilização da declaração <code>const</code> impede apenas a reatribuição do identificador de variáveis. <blockquote> &quot;use strict&quot;; <br> const s = [5, 6, 7]; <br> s = [1, 2, 3]; // lança erro, tentando atribuir um const <br> s [2] = 45; // funciona exatamente como faria com uma matriz declarada com var ou let <br> console.log (s); // retorna [5, 6, 45] </blockquote> Como você pode ver, você pode alterar o próprio objeto <code>[5, 6, 7]</code> e a variável <code>s</code> ainda apontará para a matriz alterada <code>[5, 6, 45]</code> . Como todas as matrizes, os elementos da matriz em <code>s</code> são mutáveis, mas porque <code>const</code> foi usado, você não pode usar o identificador variável <code>s</code> para apontar para uma matriz diferente usando o operador de atribuição. </section>

## Instructions
<section id="instructions"> Uma matriz é declarada como <code>const s = [5, 7, 2]</code> . Altere a matriz para <code>[2, 5, 7]</code> usando várias atribuições de elementos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Não substitua a palavra-chave <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>s</code> deve ser uma variável constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s/g), "<code>s</code> should be a constant variable (by using <code>const</code>).");'
  - text: Não altere a declaração original da matriz.
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g), "Do not change the original array declaration.");'
  - text: '<code>s</code> deve ser igual a <code>[2, 5, 7]</code> .'
    testString: 'assert.deepEqual(s, [2, 5, 7], "<code>s</code> should be equal to <code>[2, 5, 7]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: Verificar tudo ou nada
---

## Description
<section id="description"> Às vezes, os padrões que você deseja pesquisar podem ter partes dele que podem ou não existir. No entanto, pode ser importante verificar para eles, no entanto. Você pode especificar a possível existência de um elemento com um ponto de interrogação <code>?</code> . Isso verifica zero ou um dos elementos anteriores. Você pode pensar neste símbolo dizendo que o elemento anterior é opcional. Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para combinar com as duas grafias. <blockquote> deixe americano = &quot;cor&quot;; <br> deixe british = &quot;cor&quot;; <br> deixe rainbowRegex = / colou? r /; <br> rainbowRegex.test (americano); // Retorna true <br> rainbowRegex.test (britânico); // Retorna true </blockquote></section>

## Instructions
<section id="instructions"> Altere o regex <code>favRegex</code> para coincidir com o inglês americano (favorito) e o inglês britânico (favorito) versão da palavra. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o símbolo opcional <code>?</code> .
    testString: 'assert(favRegex.source.match(/\?/).length > 0, "Your regex should use the optional symbol, <code>?</code>.");'
  - text: Seu regex deve coincidir com <code>&quot;favorite&quot;</code>
    testString: 'assert(favRegex.test("favorite"), "Your regex should match <code>"favorite"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;favourite&quot;</code>
    testString: 'assert(favRegex.test("favourite"), "Your regex should match <code>"favourite"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;fav&quot;</code>
    testString: 'assert(!favRegex.test("fav"), "Your regex should not match <code>"fav"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

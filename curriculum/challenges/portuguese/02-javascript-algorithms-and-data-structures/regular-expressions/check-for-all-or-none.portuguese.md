---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: Verificar tudo ou nada
---

## Description
<section id="description"> Eventualmente, os padrões que você deseja pesquisar contém partes que podem ou não existir. No entanto, pode ser importante verificar por elas. Você pode especificar a possível existência de um elemento com um ponto de interrogação <code>?</code>. Isso verifica zero ou um dos elementos anteriores. Você pode pensar neste símbolo como uma forma de dizer que o elemento anterior é opcional. Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para combinar com as duas grafias. <blockquote>let americano = "color";<br>let britanico = "colour";<br>let rainbowRegex= /colou?r/;<br>rainbowRegex.test(americano); // Retorna true<br>rainbowRegex.test(britanico); // Retorna true</blockquote>
</section>

## Instructions
<section id="instructions"> Altere o regex <code>favRegex</code> para coincidir com as versões em inglês americano (favorite) e inglês britânico (favourite) da palavra. </section>

## Testes
<section id='tests'>

```yml
testes:
  - text: Seu regex deve usar o símbolo opcional <code>?</code> .
    testString: 'assert(favRegex.source.match(/\?/).length > 0, "Seu regex deve usar o símbolo opcional, <code>?</code>.");'
  - text: Seu regex deve coincidir com <code>&quot;favorite&quot;</code>
    testString: 'assert(favRegex.test("favorite"), "Seu regex deve coincidir com <code>"favorite"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;favourite&quot;</code>
    testString: 'assert(favRegex.test("favourite"), "Seu regex deve coincidir com <code>"favourite"</code>");'
  - text: Seu regex não deve coincidir com <code>&quot;fav&quot;</code>
    testString: 'assert(!favRegex.test("fav"), "Seu regex não deve coincidir com <code>"fav"</code>");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Altere esta linha
let result = favRegex.test(favWord);

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solução necessária
```
</section>

---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: Verificar tudo ou nada
---

## Descrição
<section id="description"> Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verifica-las. Você pode especificar a possível existência de um elemento com um ponto de interrogação <code>?</code> . Isso verifica a presença de zero ou um dos elementos anteriores. Você pode pensar neste símbolo como querendo dizer que o elemento anterior é opcional. Por exemplo, existem pequenas diferenças entre o inglês americano e o britânico e você pode usar o ponto de interrogação para combinar as duas grafias. <blockquote> deixe americano = &quot;color&quot;; <br> deixe british = &quot;colour&quot;; <br> deixe rainbowRegex = /colou?r/; <br> rainbowRegex.test (americano); // Retorna true <br> rainbowRegex.test (britânico); // Retorna true </blockquote></section>

## Instruções
<section id="instructions"> Altere o regex <code>favRegex</code> para coincidir com a versão da palavra tanto em inglês americano (favorito) como em inglês britânico (favorito). </section>

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

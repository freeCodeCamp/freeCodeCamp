---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
videoUrl: ''
localeTitle: Aplicar programação funcional para converter seqüências de caracteres em URL Slugs
---

## Description
<section id="description"> Os últimos vários desafios cobriram uma série de métodos úteis de matriz e string que seguem os princípios de programação funcional. Também aprendemos sobre <code>reduce</code> , que é um método poderoso usado para reduzir problemas a formulários mais simples. Das médias de computação à classificação, qualquer operação de matriz pode ser obtida aplicando-a. Lembre-se de que o <code>map</code> e o <code>filter</code> são casos especiais de <code>reduce</code> . Vamos combinar o que aprendemos para resolver um problema prático. Muitos sites de gerenciamento de conteúdo (CMS) têm os títulos de uma postagem adicionados a parte do URL para propósitos de bookmarking simples. Por exemplo, se você escrever um post do Medium intitulado &quot;Stop Using Reduce&quot;, é provável que o URL tenha alguma forma de string de título nele (&quot;... / stop-using-reduce&quot;). Você já deve ter notado isso no site freeCodeCamp. </section>

## Instructions
<section id="instructions"> Preencha a função <code>urlSlug</code> para que ela converta um <code>title</code> string e retorne a versão hifenizada para o URL. Você pode usar qualquer um dos métodos abordados nesta seção e não usar <code>replace</code> . Aqui estão os requisitos: A entrada é uma string com espaços e palavras com título de caixa A saída é uma string com os espaços entre as palavras substituídas por um hífen ( <code>-</code> ) A saída deve ser todas letras maiúsculas A saída não deve ter espaços </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>globalTitle</code> não deve mudar.
    testString: 'assert(globalTitle === "Winter Is Coming", "The <code>globalTitle</code> variable should not change.");'
  - text: Seu código não deve usar o método <code>replace</code> para este desafio.
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method for this challenge.");'
  - text: <code>urlSlug(&quot;Winter Is Coming&quot;)</code> deve retornar <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug("Winter Is Coming") === "winter-is-coming", "<code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot; Winter Is  Coming&quot;)</code> deve retornar <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug(" Winter Is  Coming") === "winter-is-coming", "<code>urlSlug(" Winter Is  &nbsp;Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code> <code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code> deve retornar <code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> .
    testString: 'assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone", "<code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.");'
  - text: <code>urlSlug(&quot;Hold The Door&quot;)</code> deve retornar <code>&quot;hold-the-door&quot;</code> .
    testString: 'assert(urlSlug("Hold The Door") === "hold-the-door", "<code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
videoUrl: ''
localeTitle: Dividir seus estilos em pedaços menores com parciais
---

## Description
<section id="description"> <code>Partials</code> no Sass são arquivos separados que contêm segmentos de código CSS. Estes são importados e usados ​​em outros arquivos Sass. Essa é uma ótima maneira de agrupar código semelhante em um módulo para mantê-lo organizado. Nomes para <code>partials</code> começam com o caractere de sublinhado ( <code>_</code> ), que diz ao Sass que é um pequeno segmento de CSS e não para convertê-lo em um arquivo CSS. Além disso, os arquivos Sass terminam com a extensão de arquivo <code>.scss</code> . Para trazer o código no <code>partial</code> para outro arquivo Sass, use a diretiva <code>@import</code> . Por exemplo, se todos os seus <code>mixins</code> forem salvos em uma parte <code>partial</code> chamada &quot;_mixins.scss&quot;, e eles forem necessários no arquivo &quot;main.scss&quot;, é como usá-los no arquivo principal: <blockquote> // No arquivo main.scss <br><br> @import &#39;mixins&#39; </blockquote> Note que o sublinhado não é necessário na declaração de <code>import</code> - Sass entende que é <code>partial</code> . Uma vez que uma <code>partial</code> é importada para um arquivo, todas as variáveis, <code>mixins</code> e outros códigos estão disponíveis para uso. </section>

## Instructions
<section id="instructions"> Escreva uma instrução <code>@import</code> para importar uma parte <code>partial</code> <code>_variables.scss</code> no arquivo main.scss. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a diretiva <code>@import</code> e não deve incluir o sublinhado no nome do arquivo.
    testString: 'assert(code.match(/@import\s+?("|")variables\1/gi), "Your code should use the <code>@import</code> directive, and should not include the underscore in the file name.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
// The main.scss file

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

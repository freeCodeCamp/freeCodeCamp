---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Declarar o Doctype de um documento HTML
---

## Description
<section id="description"> Os desafios até agora cobriram elementos HTML específicos e seus usos. No entanto, existem alguns elementos que fornecem estrutura geral à sua página e devem ser incluídos em todos os documentos HTML. Na parte superior do seu documento, você precisa informar ao navegador qual versão do HTML sua página está usando. O HTML é uma linguagem em evolução e é atualizado regularmente. A maioria dos principais navegadores suporta a especificação mais recente, que é HTML5. No entanto, as páginas web mais antigas podem usar versões anteriores do idioma. Você diz ao navegador essas informações adicionando a tag <code>&lt;!DOCTYPE ...&gt;</code> na primeira linha, onde a parte <code>...</code> é a versão do HTML. Para HTML5, você usa <code>&lt;!DOCTYPE html&gt;</code> . O <code>!</code> e <code>DOCTYPE</code> maiúsculas é importante, especialmente para navegadores mais antigos. O <code>html</code> não faz <code>html</code> entre maiúsculas e minúsculas. Em seguida, o restante do código HTML precisa ser agrupado em tags <code>html</code> . A abertura <code>&lt;html&gt;</code> vai diretamente abaixo da linha <code>&lt;!DOCTYPE html&gt;</code> , e o fechamento <code>&lt;/html&gt;</code> vai no final da página. Aqui está um exemplo da estrutura da página: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;html&gt; <br> &lt;! - Seu código HTML vai aqui -&gt; <br> &lt;/ html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Adicione uma tag <code>DOCTYPE</code> para HTML5 à parte superior do documento HTML em branco no editor de código. Sob ele, adicione as tags <code>html</code> abertura e fechamento, que envolvem um elemento <code>h1</code> . O título pode incluir qualquer texto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve incluir uma tag <code>&lt;!DOCTYPE html&gt;</code> .
    testString: 'assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi), "Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.");'
  - text: Deve haver um elemento <code>html</code> .
    testString: 'assert($("html").length == 1, "There should be one <code>html</code> element.");'
  - text: As tags <code>html</code> devem envolver um elemento <code>h1</code> .
    testString: 'assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi), "The <code>html</code> tags should wrap around one <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

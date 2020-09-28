---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: ''
localeTitle: Aninhar um elemento âncora dentro de um parágrafo
---

## Description
<section id="description"> Você pode aninhar links dentro de outros elementos de texto. <blockquote> &lt;p&gt; <br> Aqui está um &lt;a target=&quot;_blank&quot; href=&quot;http://freecodecamp.org&quot;&gt; link para freecodecamp.org &lt;/a&gt; para você seguir. <br> &lt;/ p&gt; </blockquote> Vamos detalhar o exemplo: o texto normal é encapsulado no elemento <code>p</code> : <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code> Em seguida, o elemento <code>anchor</code> <code>&lt;a&gt;</code> (que requer uma tag de fechamento <code>&lt;/a&gt;</code> ): <br> <code>&lt;a&gt; ... &lt;/a&gt;</code> <code>target</code> é um atributo de marca de âncora que especifica onde abrir o link e o valor <code>&quot;_blank&quot;</code> especifica para abrir o link em uma nova guia <code>href</code> é um atributo de marca de âncora que contém o endereço de URL de a ligação: <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code> O texto <strong>&quot;link para freecodecamp.org&quot;</strong> , dentro do elemento <code>anchor text</code> chamado <code>anchor text</code> , exibirá um link para clicar: <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code> A saída final do exemplo ficará assim: <br><p> Aqui está um <a target="_blank" href="http://freecodecamp.org">link para freecodecamp.org</a> para você seguir. </p></section>

## Instructions
<section id="instructions"> Agora aninhe seu elemento <code>a</code> dentro de um novo elemento <code>p</code> (logo após o elemento existente <code>main</code>). O novo parágrafo deve ter o texto &quot;Visualizar mais fotos de gatos&quot;, em que &quot;fotos de gatos&quot; é um link, e o restante do texto é texto simples. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Você precisa de <code>a</code> elemento que vincule a &quot;https://freecatphotoapp.com&quot;.'
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "https://freecatphotoapp.com".");'
  - text: Sua <code>a</code> elemento deve ter o texto âncora de &quot;fotos do gato&quot;
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: Criar um novo <code>p</code> elemento em torno de seu <code>a</code> elemento. Deve haver pelo menos três tags <code>p</code> no seu código HTML.
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: Seu <code>a</code> elemento deve ser aninhado em seu novo elemento <code>p</code> .
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: Seu elemento <code>p</code> deve ter o texto &quot;Ver mais&quot; (com um espaço após ele).
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
  - text: Sua <code>a</code> elemento <em>não</em> deve ter o texto &quot;Ver mais&quot;.
    testString: 'assert(!$("a").text().match(/View\smore/gi), "Your <code>a</code> element should <em>not</em> have the text "View more".");'
  - text: Certifique-se de que cada um dos seus elementos <code>p</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: Certifique-se de cada um de seus <code>a</code> elementos tem uma marca de fechamento.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: ''
localeTitle: Criar uma lista não ordenada com marcadores
---

## Description
<section id="description"> O HTML possui um elemento especial para criar <code>unordered lists</code> ou listas de estilo de ponto de marcador. As listas não ordenadas começam com um elemento <code>&lt;ul&gt;</code> abertura, seguido por qualquer número de elementos <code>&lt;li&gt;</code> . Finalmente, listas não ordenadas fecham com um <code>&lt;/ul&gt;</code> Por exemplo: <blockquote> &lt;ul&gt; <br> &lt;li&gt; leite &lt;/ li&gt; <br> &lt;li&gt; queijo &lt;/ li&gt; <br> &lt;/ ul&gt; </blockquote> criaria uma lista de estilo de ponto de bala de &quot;leite&quot; e &quot;queijo&quot;. </section>

## Instructions
<section id="instructions"> Remova os dois últimos elementos <code>p</code> e crie uma lista não ordenada de três coisas que os gatos adoram na parte inferior da página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um elemento <code>ul</code> .
    testString: 'assert($("ul").length > 0, "Create a <code>ul</code> element.");'
  - text: Você deve ter três elementos <code>li</code> no seu elemento <code>ul</code> .
    testString: 'assert($("ul li").length > 2, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: Certifique-se de que seu elemento <code>ul</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: Certifique-se de que seus elementos <code>li</code> tenham tags de fechamento.
    testString: 'assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, "Make sure your <code>li</code> elements have closing tags.");'
  - text: Certifique-se de que seus elementos <code>li</code> não contêm um string de espaço vazio ou somente espaço em branco.
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0, 'Make sure your <code>li</code> elements don\’t contain an empty string or only white-space.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

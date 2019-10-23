---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: HTML sem comentário
---

## Description
<section id="description"> Comentar é uma maneira de deixar comentários para outros desenvolvedores em seu código sem afetar a saída resultante que é exibida para o usuário final. Comentar também é uma maneira conveniente de tornar o código inativo sem ter que excluí-lo completamente. Comentários em HTML começam com <code>&lt;!--</code> e terminam com um <code>--&gt;</code> </section>

## Instructions
<section id="instructions"> Descomente seus elementos <code>h1</code> , <code>h2</code> e <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Torne seu elemento <code>h1</code> visível em sua página, descomentando-o.'
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: 'Torne seu elemento <code>h2</code> visível em sua página, descomentando-o.'
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: 'Torne seu elemento <code>p</code> visível em sua página, descomentando-o.'
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: 'Certifique-se de excluir todas as tags de comentário à direita, ou seja, <code>--&gt;</code> .'
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: ''
localeTitle: Comente o HTML
---

## Description
<section id="description"> Lembre-se que para começar um comentário, você precisa usar <code>&lt;!--</code> e para finalizar um comentário, você precisa usar <code>--&gt;</code> Aqui você precisa terminar o comentário antes do seu elemento <code>h2</code> começar. </section>

## Instructions
<section id="instructions"> Comente seu elemento <code>h1</code> e seu elemento <code>p</code> , mas não seu elemento <code>h2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Comente o seu elemento <code>h1</code> para que ele não fique visível na sua página.
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: Deixe seu elemento <code>h2</code> descomentado para que fique visível na sua página.
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: Comente o seu elemento <code>p</code> para que ele não fique visível na sua página.
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: Certifique-se de fechar cada um dos seus comentários com <code>--&gt;</code> .
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: Não mude a ordem do <code>h1</code> <code>h2</code> ou <code>p</code> no código.
    testString: 'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , "Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.");'

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

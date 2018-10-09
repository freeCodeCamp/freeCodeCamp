---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
localeTitle: Comentar fuera de HTML
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
Recuerde que para iniciar un comentario, debe usar <code>&lt;!--</code> y para finalizar un comentario, debe usar <code>--&gt;</code>
Aquí deberá finalizar el comentario antes de que comience su elemento <code>h2</code> .
</section>

## Instructions
<section id='instructions'>
Comente su elemento <code>h1</code> y su elemento <code>p</code> , pero no su elemento <code>h2</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Comenta tu elemento <code>h1</code> para que no se vea en tu página.
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: Deje su elemento <code>h2</code> comentarios para que sea visible en su página.
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: Comenta tu elemento <code>p</code> para que no se vea en tu página.
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: 'Asegúrese de cerrar cada uno de sus comentarios con <code>--&gt;</code> .'
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: No cambie el orden de <code>h1</code> <code>h2</code> o <code>p</code> en el código.
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

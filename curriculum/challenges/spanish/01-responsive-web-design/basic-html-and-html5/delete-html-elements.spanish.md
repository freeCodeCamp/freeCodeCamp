---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
localeTitle: Eliminar elementos HTML
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Nuestro teléfono no tiene mucho espacio vertical. 
Eliminemos los elementos innecesarios para que podamos comenzar a construir nuestra CatPhotoApp. 
</section>

## Instructions
<section id='instructions'> 
Borre su elemento <code>h1</code> para que podamos simplificar nuestra vista. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Eliminar su elemento <code>h1</code> .
    testString: 'assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi), "Delete your <code>h1</code> element.");'
  - text: Deja tu elemento <code>h2</code> en la página.
    testString: 'assert(code.match(/<h2>[\w\W]*<\/h2>/gi), "Leave your <code>h2</code> element on the page.");'
  - text: Deja tu elemento <code>p</code> en la página.
    testString: 'assert(code.match(/<p>[\w\W]*<\/p>/gi), "Leave your <code>p</code> element on the page.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>"
```

</section>

---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
localeTitle: Convertir una imagen en un enlace
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
Se puede hacer elementos en enlaces anidando dentro de un <code>a</code> elemento.
Nido de su imagen dentro de un <code>a</code> elemento. Aquí hay un ejemplo:
<code>&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;https://bit.ly/fcc-running-cats&quot; alt=&quot;Three kittens running towards the camera.&quot;&gt;&lt;/a&gt;</code>
Recuerda usar <code>#</code> como la propiedad <code>href</code> <code>a</code> elemento para convertirlo en un enlace muerto.
</section>

## Instructions
<section id='instructions'>
Coloque el elemento de imagen existente dentro de un elemento de anclaje.
Una vez que hayas hecho esto, desplázate sobre tu imagen con el cursor. El puntero normal de su cursor debe convertirse en el enlace que hace clic en el puntero. La foto es ahora un enlace.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nido el vigente <code>img</code> elemento dentro de un <code>a</code> elemento.
    testString: 'assert($("a").children("img").length > 0, "Nest the existing <code>img</code> element within an <code>a</code> element.");'
  - text: 'Su <code>a</code> elemento debe ser un vínculo roto con un <code>href</code> atributo establecido en <code>#</code> .'
    testString: 'assert(new RegExp("#").test($("a").children("img").parent().attr("href")), "Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.");'
  - text: Asegúrese de que cada uno de sus <code>a</code> elementos tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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

---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: ''
localeTitle: Rellene el espacio en blanco con el texto del marcador de posición
---

## Description
<section id="description"> Los desarrolladores web tradicionalmente usan el <code>texto lorem ipsum</code> como texto de marcador de posición. El texto &#39;lorem ipsum&#39; se extrae al azar de un famoso pasaje de Cicerón de la Antigua Roma. El texto de Lorem ipsum ha sido utilizado como texto de marcador de posición por los tipógrafos desde el siglo XVI, y esta tradición continúa en la web. Bueno, 5 siglos es lo suficientemente largo. Ya que estamos construyendo un CatPhotoApp, usemos algo que se llama <code>texto kitty ipsum</code> . </section>

## Instructions
<section id="instructions"> Reemplace el texto dentro de su elemento <code>p</code> con las primeras palabras de este texto de kitty ipsum: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>p</code> debe contener las primeras palabras del <code>texto kitty ipsum</code> proporcionado.
    testString: 'assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hola Mundo</h1>

<h2>CatPhotoApp</h2>

<p>Hola Párrafo</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

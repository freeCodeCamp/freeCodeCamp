---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Definir la cabeza y el cuerpo de un documento HTML
---

## Description
<section id="description"> Puede agregar otro nivel de organización en su documento HTML dentro de las etiquetas <code>html</code> con los elementos de <code>head</code> y <code>body</code> . Cualquier marca con información sobre su página irá a la etiqueta de <code>head</code> . Luego, cualquier marca con el contenido de la página (lo que se muestra para un usuario) se colocará en la etiqueta del <code>body</code> . Los elementos de metadatos, como <code>link</code> , <code>meta</code> , <code>title</code> y <code>style</code> , por lo general van dentro de la <code>head</code> del elemento. Aquí hay un ejemplo del diseño de una página: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;html&gt; <br> &lt;head&gt; <br> &lt;! - Elementos de metadatos -&gt; <br> &lt;/head&gt; <br> &lt;body&gt; <br> &lt;! - contenidos de la página -&gt; <br> &lt;/body&gt; <br> &lt;/html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Edite el marcado para que haya una <code>head</code> y un <code>body</code> . La <code>head</code> elemento sólo debe incluir el <code>title</code> , y el <code>body</code> elemento sólo debe incluir la <code>h1</code> y <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Solo debe haber un elemento de <code>head</code> en la página.
    testString: 'assert($("head").length == 1, "There should be only one <code>head</code> element on the page.");'
  - text: Solo debe haber un elemento de <code>body</code> en la página.
    testString: 'assert($("body").length == 1, "There should be only one <code>body</code> element on the page.");'
  - text: La <code>head</code> elemento debe ser un hijo de la <code>html</code> elemento.
    testString: 'assert($("html").children("head").length == 1, "The <code>head</code> element should be a child of the <code>html</code> element.");'
  - text: El elemento del <code>body</code> debe ser un elemento secundario del elemento <code>html</code> .
    testString: 'assert($("html").children("body").length == 1, "The <code>body</code> element should be a child of the <code>html</code> element.");'
  - text: La <code>head</code> elemento debe envolver el <code>title</code> del elemento.
    testString: 'assert(code.match(/<head>\s*?<title>\s*?.*?\s*?<\/title>\s*?<\/head>/gi), "The <code>head</code> element should wrap around the <code>title</code> element.");'
  - text: El elemento del <code>body</code> debe envolver alrededor de los elementos <code>h1</code> y <code>p</code> .
    testString: 'assert($("body").children("h1").length == 1 && $("body").children("p").length == 1, "The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

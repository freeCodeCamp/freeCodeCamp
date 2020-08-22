---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: Enlace a las secciones internas de una página con elementos de anclaje
---

## Description
<section id="description"> Los elementos de anclaje también se pueden usar para crear enlaces internos para saltar a diferentes secciones dentro de una página web. Para crear un enlace interno, asigna el atributo <code>href</code> un enlace a un símbolo de hash <code>#</code> más el valor del atributo <code>id</code> para el elemento al que desea enlazar internamente, generalmente más abajo en la página. A continuación, deberá agregar el mismo atributo de <code>id</code> al elemento al que se está vinculando. Un <code>id</code> es un atributo que describe de forma única un elemento. A continuación se muestra un ejemplo de un enlace de anclaje interno y su elemento de destino: <blockquote> &lt;a href=&quot;#contacts-header&quot;&gt; Contactos &lt;/a&gt; <br> ... <br> &lt;h2 id = &quot;contacts-header&quot;&gt; Contacts &lt;/h2&gt; </blockquote> Cuando los usuarios hacen clic en el enlace de Contactos, serán llevados a la sección de la página web con el elemento del encabezado de <b>Contactos</b> . </section>

## Instructions
<section id="instructions"> Cambie su enlace externo a un enlace interno cambiando el atributo <code>href</code> a &quot;# footer&quot; y el texto de &quot;fotos del gato&quot; a &quot;Saltar a la parte inferior&quot;. Elimine el atributo <code>target=&quot;_blank&quot;</code> de la etiqueta de anclaje ya que esto hace que el documento vinculado se abra en una nueva pestaña de ventana. Luego, agregue un atributo <code>id</code> con un valor de &quot;pie de página&quot; al elemento <code>&lt;footer&gt;</code> en la parte inferior de la página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Solo debe haber una etiqueta de anclaje en su página.
    testString: 'assert($("a").length == 1, "There should be only one anchor tag on your page.");'
  - text: Solo debe haber una etiqueta de <code>footer</code> en tu página.
    testString: 'assert($("footer").length == 1, "There should be only one <code>footer</code> tag on your page.");'
  - text: 'La <code>a</code> etiqueta debe tener un <code>href</code> atributo establecido en &quot;#footer&quot;.'
    testString: 'assert($("a").eq(0).attr("href") == "#footer", "The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".");'
  - text: La <code>a</code> etiqueta no debe tener un <code>target</code> atributo
    testString: 'assert(typeof $("a").eq(0).attr("target") == typeof undefined || $("a").eq(0).attr("target") == true, "The <code>a</code> tag should not have a <code>target</code> attribute");'
  - text: El <code>a</code> texto debe ser &quot;Saltar a Pie de página&quot;.
    testString: 'assert($("a").eq(0).text().match(/Jump to Bottom/gi), "The <code>a</code> text should be "Jump to Bottom".");'
  - text: La etiqueta de <code>footer</code> debe tener un atributo de <code>id</code> establecido en &quot;pie de página&quot;.
    testString: 'assert($("footer").eq(0).attr("id") == "footer", "The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".");'

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

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
videoUrl: ''
localeTitle: Añadir imágenes a su sitio web
---

## Description
<section id="description"> Puede agregar imágenes a su sitio web usando el elemento <code>img</code> y apuntar a la URL de una imagen específica usando el atributo <code>src</code> . Un ejemplo de esto sería: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code> Tenga en cuenta que los elementos <code>img</code> se cierran automáticamente. Todos los elementos <code>img</code> <strong>deben</strong> tener un atributo <code>alt</code> . El texto dentro de un atributo <code>alt</code> se usa para que los lectores de pantalla mejoren la accesibilidad y se muestra si la imagen no se carga. Nota: si la imagen es puramente decorativa, usar un atributo <code>alt</code> vacío es una buena práctica. Idealmente, el atributo <code>alt</code> no debe contener caracteres especiales a menos que sea necesario. Agreguemos un atributo <code>alt</code> a nuestro ejemplo de <code>img</code> anterior: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> Intentemos agregar una imagen a nuestro sitio web: inserte una etiqueta <code>img</code> , antes del elemento <code>h2</code> . Ahora establezca el atributo <code>src</code> para que apunte a esta url: <code>https://bit.ly/fcc-relaxing-cat</code> Finalmente, no se olvide de darle a su imagen un texto <code>alt</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu página debe tener un elemento de imagen.
    testString: 'assert($("img").length > 0, "Your page should have an image element.");'
  - text: Tu imagen debe tener un atributo <code>src</code> que apunte a la imagen del gatito.
    testString: 'assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), "Your image should have a <code>src</code> attribute that points to the kitten image.");'
  - text: Su elemento de imagen <strong>debe</strong> tener un atributo <code>alt</code> .
    testString: 'assert(code.match(/alt\s*?=\s*?(\"|\").*(\"|\")/), "Your image element <strong>must</strong> have an <code>alt</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


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

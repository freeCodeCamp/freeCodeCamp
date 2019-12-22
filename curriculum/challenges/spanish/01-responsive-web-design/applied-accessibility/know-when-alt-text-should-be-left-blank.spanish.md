---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: Sepa cuándo el texto alternativo debe dejarse en blanco
---

## Description
<section id="description"> En el último desafío, aprendiste que incluir un atributo <code>alt</code> en las etiquetas img es obligatorio. Sin embargo, a veces las imágenes se agrupan con un título que ya las describe, o se usan solo para decoración. En estos casos, el texto <code>alt</code> puede parecer redundante o innecesario. En situaciones en las que una imagen ya está explicada con contenido de texto o no agrega un significado a una página, el <code>img</code> aún necesita un atributo <code>alt</code> , pero se puede establecer en un string vacío. Aquí hay un ejemplo: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> Las imágenes de fondo también suelen caer bajo la etiqueta &#39;decorativa&#39;. Sin embargo, normalmente se aplican con reglas CSS y, por lo tanto, no forman parte del proceso de los lectores de pantalla de marcado. <strong>Nota</strong> <br> Para imágenes con un título, es posible que desee incluir texto <code>alt</code> , ya que ayuda a los motores de búsqueda a catalogar el contenido de la imagen. </section>

## Instructions
<section id="instructions"> Camper Cat ha codificado el esqueleto de una página para la parte del blog de su sitio web. Está planeando agregar un descanso visual entre sus dos artículos con una imagen decorativa de una espada samurai. Agregue un atributo <code>alt</code> a la etiqueta <code>img</code> y establézcalo enun string vacío. (Tenga en cuenta que la imagen <code>src</code> no se enlaza con un archivo real, no se preocupe si no se ven espadas en la pantalla). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su etiqueta <code>img</code> debe tener un atributo <code>alt</code> .
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: El atributo <code>alt</code> debe establecer en una cadena vacía.
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Pensamientos Profundos con el Maestro Camper Cat</h1>
<article>
  <h2>Venciendo a tu Rival: el Punto Rojo es Nuestro!</h2>
  <p>Próximamente...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Es Chuck Norris un Hombre Gato?</h2>
  <p>Próximamente...</p>
</article>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>

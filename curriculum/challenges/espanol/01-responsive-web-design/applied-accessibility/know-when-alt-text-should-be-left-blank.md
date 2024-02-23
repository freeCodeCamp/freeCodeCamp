---
id: 587d774c367417b2b2512a9d
title: Aprende cuando el texto alternativo debe dejarse en blanco
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

En el último desafío, aprendiste que es obligatorio incluir un atributo `alt` al usar etiquetas `img`. Sin embargo, a veces las imágenes se agrupan con un título que ya las describe, o se usan solo para decoración. En estos casos el texto `alt` puede parecer redundante o innecesario.

Cuando una imagen ya se explica con el contenido de texto o no agrega significado a una página, `img` todavía necesita un atributo `alt`, pero se puede establecer en una cadena vacía. Aquí hay un ejemplo:

```html
<img src="visualDecoration.jpeg" alt="">
```

Las imágenes de fondo generalmente también caen bajo la etiqueta "decorativa". Sin embargo, normalmente se aplican con reglas CSS y, por lo tanto, no forman parte del proceso de lectores de pantalla del lenguaje de marcado.

**Nota:** Para imágenes con un título, es posible que aún desees incluir texto `alt` ya que ayuda a los motores de búsqueda a catalogar el contenido de la imagen.

# --instructions--

Camper Cat ha programado una página esqueleto para la parte del blog de su sitio web. Está planeando agregar una ruptura visual entre sus dos artículos con una imagen decorativa de una espada samurái. Agrega un atributo `alt` a la etiqueta `img` y establécela a una cadena vacía. (Ten en cuenta que la imagen `src` no enlaza a un archivo real, no te preocupes que no se muestren espadas en la pantalla.)

# --hints--

Tu etiqueta `img` debe tener un atributo `alt`.

```js
assert(!($('img').attr('alt') == undefined));
```

El atributo `alt` debe establecerse en una cadena vacía.

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

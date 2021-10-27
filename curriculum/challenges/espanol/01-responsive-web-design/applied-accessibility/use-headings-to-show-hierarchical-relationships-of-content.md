---
id: 587d774d367417b2b2512a9e
title: Usa títulos para mostrar relaciones jerárquicas de contenido
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Los títulos (`h1` a `h6` elementos) son etiquetas de caballo de batalla que ayudan a proporcionar estructura y etiquetado a su contenido. Los lectores de pantalla se pueden configurar para leer solo los títulos de una página para que el usuario obtenga un resumen. Esto significa que es importante que las etiquetas de los títulos en tu lenguaje de marcado tengan un significado semántico y se relacionen entre sí, no se elijan simplemente por sus valores de tamaño.

* Significado semántico* significa que la etiqueta que usas alrededor del contenido indica el tipo de información que contiene.

Si estuvieras escribiendo un documento con una introducción, un cuerpo y una conclusión, no tendría mucho sentido poner la conclusión como una subsección del cuerpo en tu esquema. Debería ser su propia sección. Del mismo modo, las etiquetas de los títulos en una página web deben ir en orden e indicar las relaciones jerárquicas de su contenido.

Los títulos con rango igual (o superior) comienzan nuevas secciones implícitas, los títulos con rango inferior comienzan subsecciones de la anterior.

Como un ejemplo, una página con un elemento `h2` seguido por varias subsecciones etiquetadas con elementos `h4` confundiría a un lector de pantalla. Con seis opciones, es tentador usar una etiqueta porque se ve mejor en un navegador, pero puede usar CSS para editar el tamaño relativo.

Un punto final, cada página siempre debe tener un (y solo un) elemento `h1`, que es el tema principal de tu contenido. Este y los otros títulos son utilizados en parte por los motores de búsqueda para comprender el tema de la página.

# --instructions--

Camper Cat quiere una página en su sitio dedicada a convertirse en un ninja. Ayúdelo a arreglar los títulos para que su lenguaje de marcado de un significado semántico al contenido y muestre las relaciones padre-hijo adecuadas de sus secciones. Cambia todas las etiquetas `h5` al nivel de título adecuado para indicar que son subsecciones de las `h2`. Utiliza etiquetas `h3` para este propósito.

# --hints--

Tu código debe tener 6 elementos `h3`.

```js
assert($('h3').length === 6);
```

Tu código debe tener 6 etiquetas de cierre `h3`.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

Tu código no debe tener ningún elemento `h5`.

```js
assert($('h5').length === 0);
```

Tu código no debe tener ninguna etiqueta de cierre `h5`.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```

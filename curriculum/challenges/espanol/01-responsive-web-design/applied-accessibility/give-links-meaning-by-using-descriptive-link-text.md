---
id: 587d778f367417b2b2512aae
title: Da significado a los enlaces agregando un texto descriptivo
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Los lectores de pantalla tienen varias opciones para qué tipo de contenido lee su dispositivo. Estas opciones incluyen saltar a elementos de referencia (o sobre) o saltar al contenido principal, u obtener un resumen de la página en los títulos. Otra opción es escuchar la narración de los enlaces disponibles en una página.

Los lectores de pantalla hacen esto leyendo el texto del enlace, o lo que haya entre las etiquetas anchor (`a`). Tener una lista de enlaces que solo digan "clic aquí" o "leer más" no ayuda. En su lugar, utilice texto breve pero descriptivo dentro de las etiquetas `a` para proporcionar más significado a estos usuarios.

# --instructions--

El texto de los enlaces que utiliza el Camper Cat no es muy descriptivo si se lo toma fuera de su contexto. Mueve las etiquetas anchor (`a`) para que envuelvan el texto `information about batteries` en lugar de `Click here`.

# --hints--

Tu código debe mover las etiquetas anchor `a` de las palabras `Click here` para envolver las palabras `information about batteries`.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

El elemento `a` debe tener un atributo `href` con un valor de cadena vacía `""`.

```js
assert($('a').attr('href') === '');
```

Tu elemento `a` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

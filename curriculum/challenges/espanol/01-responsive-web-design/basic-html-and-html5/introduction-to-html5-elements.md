---
id: bad87fee1348bd9aecf08801
title: Introducción a los elementos HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 introduce etiquetas HTML más descriptivas. Estas incluyen `main`, `header`, `footer`, `nav`, `video`, `article`, `section`, entre otras.

Estas etiquetas dan una estructura descriptiva a tu HTML, hacen que tu HTML sea más fácil de leer, ayudan con la Optimización de Motores de Búsqueda (SEO) y mejoran la accesibilidad. La etiqueta HTML5 `main` ayuda a los motores de búsqueda y otros desarrolladores a encontrar el contenido principal de tu página.

Por ejemplo, un elemento `main` con dos elementos hijos anidados en su interior:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note:** Muchas de las nuevas etiquetas HTML5 y sus beneficios están cubiertos en la sección Accesibilidad Aplicada.

# --instructions--

Crea un segundo elemento `p` con el siguiente texto de gatito ipsum: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Luego, crea un elemento `main` y anida los dos elementos `p` dentro del elemento `main`.

# --hints--

Debes tener 2 elementos `p` con texto Ipsum Gatuno.

```js
assert($('p').length > 1);
```

Cada uno de tus elementos `p` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Tu elemento `p` debe contener las primeras palabras del texto adicional `kitty ipsum` proporcionado.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

Tu código debe tener un elemento `main`.

```js
assert($('main').length === 1);
```

El elemento `main` debe tener dos elementos párrafo como hijos.

```js
assert($('main').children('p').length === 2);
```

La etiqueta de apertura `main` debe aparecer antes de la primera etiqueta párrafo.

```js
assert(code.match(/<main>\s*?<p>/g));
```

La etiquete de cierre `main` debe aparecer después de la segunda etiqueta de cierre párrafo.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

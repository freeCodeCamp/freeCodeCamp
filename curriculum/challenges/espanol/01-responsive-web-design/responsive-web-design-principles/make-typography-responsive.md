---
id: 587d78b1367417b2b2512b0c
title: Haz tipografía adaptable
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

En lugar de usar `em` o `px` para dimensionar texto, puedes usar unidades de viewport para obtener una tipografía adaptable. Las unidades de viewport, como los porcentajes, son unidades relativas, pero se basan en objetos diferentes. Las unidades de viewport son relativas a las dimensiones del viewport (ancho o alto) de un dispositivo, y los porcentajes son relativos al tamaño del elemento contenedor padre.

Las cuatro diferentes unidades de viewport son:

<ul><li><code>vw</code> (viewport width): <code>10vw</code> sería el 10% del ancho del viewport.</li><li><code>vh</code> (viewport height): <code>3vh</code> sería el 3% del alto del viewport.</li><li><code>vmin</code> (viewport mínimo): <code>70vmin</code> sería el 70% de la dimensión más pequeña del viewport (altura o ancho).</li><li><code>vmax</code> (viewport máximo): <code>100vmax</code> sería el 100% de la dimensión más grande del viewport (altura o ancho).</li></ul>

Aquí hay un ejemplo que establece una etiqueta `body` al 30% del ancho del viewport.

```css
body { width: 30vw; }
```

# --instructions--

Establece el ancho `width` de la etiqueta `h2` al 80% del ancho del viewport y el ancho `width` del párrafo como el 75% de la dimensión más pequeña del viewport.

# --hints--

Tu etiqueta `h2` debe tener un `width` de 80vw.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

Tu etiqueta `p` debe tener un `width` de 75vmin.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

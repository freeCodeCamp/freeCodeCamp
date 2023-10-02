---
id: 587d78aa367417b2b2512aed
title: Declara el Doctype de un documento HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

Hasta el momento, los desafíos han cubierto elementos HTML específicos y sus usos. Sin embargo, hay algunos elementos que dan una estructura general a tu página, y deben incluirse en cada documento HTML.

En la parte superior de tu documento, necesitas decirle al navegador qué versión de HTML está utilizando tu página. HTML es un lenguaje en evolución, y se actualiza regularmente. La mayoría de los navegadores principales soportan la última especificación, que es HTML5. Sin embargo, páginas web más antiguas puede que hagan uso de versiones anteriores del lenguaje.

Proporcionas al navegador esta información agregando la etiqueta `<!DOCTYPE ...>` en la primera línea, donde la parte `...` es la versión de HTML. Para HTML5, utilizas `<!DOCTYPE html>`.

El `!` y `DOCTYPE` en mayúsculas es importante, especialmente para los navegadores más antiguos. El `html` no es sensible a mayúsculas y minúsculas.

A continuación, el resto de tu código HTML necesita ser envuelto en etiquetas `html`. La apertura `<html>` va directamente debajo de la línea `<!DOCTYPE html>`, y el cierre `</html>` va en el final de la página.

Aquí hay un ejemplo de estructura de página. Tu código HTML iría en el espacio entre las dos etiquetas `html`.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Agrega una etiqueta `DOCTYPE` para HTML5 a la parte superior del documento en el editor de código. Debajo de el, agrega etiquetas de apertura y cierre de `html`, que envuelvan alrededor un elemento `h1`. El título puede incluir cualquier texto.

# --hints--

Tu código debe incluir una etiqueta `<!DOCTYPE html>`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Debe haber un elemento `html`.

```js
assert($('html').length == 1);
```

Las etiquetas `html` deben envolver alrededor un elemento `h1`.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```

---
id: 5cddbfd622f1a59093ec611d
title: Crea un módulo para scripts
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

En sus inicios, JavaScript comenzó desempeñando un pequeño rol, cuando la web estaba mayormente hecha en HTML. Hoy Javascript se ha vuelto gigante y algunos sitios web están casi completamente construidos con JavaScript. Con la finalidad de hacer JavaScript más modular, limpio y mantenible, ES6 introdujo una manera de compartir código fácilmente entre archivos JavaScript. Esto implica exportar partes de un archivo para usar en uno o más archivos, e importar las partes que necesitas donde las necesites. Para aprovechar esta funcionalidad, necesitas crear un script en tu documento HTML con un `type` de `module`. A continuación, te presentamos un ejemplo:

```html
<script type="module" src="filename.js"></script>
```

Un script que utilice este `module` ahora podrá utilizar las caraterísticas `import` y `export`, sobre las que aprenderás en los próximos desafíos.

# --instructions--

Agrega un script de tipo `module` al documento HTML y asígnale el archivo fuente `index.js`

# --hints--

Debes crear una etiqueta `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

Tu etiqueta `script` debe tener un atributo `type` con un valor de `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

Tu etiqueta `script` debe tener un `src` con el valor `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

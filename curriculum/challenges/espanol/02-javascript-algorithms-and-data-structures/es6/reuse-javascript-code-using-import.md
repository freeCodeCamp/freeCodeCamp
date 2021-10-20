---
id: 587d7b8c367417b2b2512b55
title: Reutiliza código de JavaScript utilizando import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` te permite elegir qué partes de un archivo o módulo cargar. En la lección previa, los ejemplos exportaron `add` del archivo `math_functions.js`. Así es como puedes importarlo para utilizarlo en otro archivo:

```js
import { add } from './math_functions.js';
```

Aquí, `import` encontrará `add` en `math_functions.js`, importa sólo esa función para que la uses, e ignora el resto. El `./`, dice a import que busque el archivo `math_functions.js` en la misma carpeta que el archivo actual. La ruta relativa del archivo (`./`) y la extensión del archivo (`.js`), son requeridos cuando se utiliza import de esta manera.

Puedes importar más de un elemento del archivo, añadiéndolos en la declaración `import` de esta manera:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Agrega la declaración `import` apropiada que permita al archivo actual, usar las funciones `uppercaseString` y `lowercaseString` que exportaste de la lección previa. Estas funciones se encuentran en un archivo llamado `string_functions.js`, el cual está en el mismo directorio que el archivo actual.

# --hints--

Debes importar `uppercaseString` apropiadamente.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

Debes importar `lowercaseString` apropiadamente.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```

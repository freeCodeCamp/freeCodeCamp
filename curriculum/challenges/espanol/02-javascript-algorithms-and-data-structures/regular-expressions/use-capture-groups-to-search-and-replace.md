---
id: 587d7dbb367417b2b2512bab
title: Usa grupos de captura para buscar y reemplazar
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

La búsqueda es útil. Sin embargo, puedes hacer que la búsqueda sea aún más poderosa si también cambias (o reemplazas) el texto con el que coincide.

Puedes buscar y reemplazar texto en una cadena usando `.replace()` en una cadena. Las entradas para `.replace()` son primero el patrón de expresiones regulares que deseas buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

La llamada `replace` devolverá la cadena `The sky is blue.`.

También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

La llamada `replace` devolverá la cadena `Camp Code`.

# --instructions--

Escribe una expresión regular `fixRegex` utilizando tres grupos de captura que buscarán cada palabra en la cadena `one two three`. Luego actualiza la variable `replaceText` para reemplazar `one two three` con la cadena `three two one` y asigna el resultado a la variable `result`. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar (`$`).

# --hints--

Debes utilizar `.replace()` para buscar y reemplazar.

```js
assert(code.match(/\.replace\(.*\)/));
```

Tu expresión regular debe cambiar la cadena `one two three` a la cadena `three two one`

```js
assert(result === 'three two one');
```

No debes cambiar la última línea.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` debe usar al menos tres grupos de captura.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` debe usar cadena(s) de subcoincidencia entre paréntesis (es decir, la enésima cadena de subcoincidencia entre parentesis, $n, corresponde al enésimo grupo de captura).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

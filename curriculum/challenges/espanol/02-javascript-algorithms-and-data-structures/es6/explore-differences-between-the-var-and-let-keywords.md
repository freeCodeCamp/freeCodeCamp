---
id: 587d7b87367417b2b2512b3f
title: Explora las diferencias entre las palabras claves var y let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Uno de los grandes problemas con la declaración de variables, usando la palabra clave `var`, es que tu puedes sobrescribir declaraciones de variables sin un error.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

Aquí la consola mostrará la cadena de caracteres `David`.

Como puedes ver en el código anterior, la variable `camper` es originalmente declarada como `James` luego de anularse pasa a ser `David`. En una aplicación pequeña, puede que no te topes con este tipo de problema, pero cuando tu código se vuelve mas grande, puede que accidentalmente sobrescribas una variable que no pretendías sobrescribir. Debido a que este comportamiento no arroja un error, buscar y corregir errores se vuelve mas difícil.  
Una nueva palabra clave llamada `let` que fue introducida en ES6 para resolver este posible problema con la palabra clave `var`. Si reemplazas `var` por `let` en las declaraciones de variables del código anterior, el resultado será un error.

```js
let camper = 'James';
let camper = 'David';
```

Este error se puede ver en la consola de tu navegador. Así que a diferencia de `var`, al usar `let`, una variable con el mismo nombre solo puede declararse una vez. Toma en cuenta el `"use strict"` (uso estricto). Esto habilita el modo estricto, el cual captura errores comunes de programación y acciones "inseguras". Por ejemplo:

```js
"use strict";
x = 3.14;
```

Esto mostrará el error `x is not defined`.

# --instructions--

Actualiza el código para que solo utilice la palabra clave `let`.

# --hints--

`var` no debe existir en el código.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` debe ser la cadena `Oliver`.

```js
assert(catName === 'Oliver');
```

`quote` debe ser la cadena `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

# --solutions--

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```

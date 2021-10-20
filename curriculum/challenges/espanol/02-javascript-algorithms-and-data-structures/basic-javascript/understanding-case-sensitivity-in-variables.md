---
id: 56533eb9ac21ba0edf2244ab
title: Comprendiendo la sensibilidad de mayúsculas en las variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

En JavaScript todas las variables y nombres de función son sensibles a mayúsculas y minúsculas. Esto significa que la capitalización importa.

`MYVAR` no es lo mismo que `MyVar` ni `myvar`. Es posible tener múltiples variables distintas con el mismo nombre pero diferente capitalización. Se recomienda encarecidamente que por el bien de la claridad, *no* utilices esta funcionalidad del lenguaje.

**Buena Práctica**

Escribe los nombres de las variables en JavaScript en <dfn>camelCase</dfn>. En <dfn>camelCase</dfn>, los nombres de variables de múltiples palabras tienen la primera palabra en minúsculas y la primera letra de cada palabra posterior en mayúsculas.

**Ejemplos:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Modifica las declaraciones y asignaciones existentes para que sus nombres usen <dfn>camelCase</dfn>.

No crees ninguna variable nueva.

# --hints--

`studlyCapVar` debe estar definido y tener un valor de `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` debe estar definido y tener una cadena con valor `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` debe estar definido y tener una cadena con valor `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` debe usar camelCase tanto en las secciones de declaración como de asignación.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` debe usar camelCase tanto en las secciones de declaración como de asignación.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` debe usar camelCase tanto en las secciones de declaración como de asignación.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

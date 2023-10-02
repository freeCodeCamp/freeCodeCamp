---
id: 587d7b84367417b2b2512b35
title: Captura nombres de variables y funciones mal escritos
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

Los métodos `console.log()` y `typeof` son las dos formas principales de comprobar los valores intermedios y los tipos de salida de un programa. Ahora es el momento de entrar en las formas comúnes que adoptan los errores (bugs). Un problema a nivel de sintaxis con el que las personas que escriben rápido pueden simpatizar es el humilde error ortográfico.

Los caracteres transpuestos, omitidos o mal escritos en el nombre de una variable o función harán que el navegador busque un objeto que no existe, y se queje en forma de error de referencia. Los nombres de variables y funciones de JavaScript distinguen entre mayúsculas y minúsculas.

# --instructions--

Corrige los dos errores ortográficos en el código para que funcione el cálculo de `netWorkingCapital`.

# --hints--

Comprueba la ortografía de las dos variables utilizadas en el cálculo de netWorkingCapital, la salida de la consola debe mostrar que "Net working capital is: 2".

```js
assert(netWorkingCapital === 2);
```

No debe haber casos de variables mal escritas en el código.

```js
assert(!code.match(/recievables/g));
```

La variable `receivables` debe ser declarada y utilizada correctamente en el código.

```js
assert(code.match(/receivables/g).length == 2);
```

No debe haber casos de variables mal escritas en el código.

```js
assert(!code.match(/payable;/g));
```

La variable `payables` debe ser declarada y utilizada correctamente en el código.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

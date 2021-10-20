---
id: 587d7b85367417b2b2512b3a
title: Captura argumentos pasados en el orden incorrecto al llamar a una función
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Siguiendo con la discusión sobre la llamada a funciones, el siguiente error a tener en cuenta es cuando los argumentos de una función se suministran en el orden incorrecto. Si los argumentos son de tipos diferentes, como una función que espera un arreglo y un entero, es probable que se produzca un error de ejecución. Si los argumentos son del mismo tipo (todos enteros, por ejemplo), la lógica del código no tendrá sentido. Asegúrate de proporcionar todos los argumentos requeridos, en el orden correcto para evitar estos problemas.

# --instructions--

La función `raiseToPower` eleva una base a un exponente. Desafortunadamente, no se llama correctamente - corrige el código para que el valor de `power` sea el 8 esperado.

# --hints--

Tu código debe arreglar la variable `power` para que sea igual a 2 elevado a la 3ª potencia, no a 3 elevado a la 2ª potencia.

```js
assert(power == 8);
```

Tu código debe utilizar el orden correcto de los argumentos para la llamada a la función `raiseToPower`.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

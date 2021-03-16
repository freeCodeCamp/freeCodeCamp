---
id: 587d7b85367417b2b2512b39
title: Captura los paréntesis de apertura y cierre que faltan después de una llamada a una función
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Cuando una función o método no recibe argumentos, puedes olvidarte de incluir los paréntesis de apertura y cierre (vacíos) al llamarla. A menudo, el resultado de una llamada a una función se guarda en una variable para su uso en el código. Este error puede detectarse registrando los valores de las variables (o sus tipos) en la consola y viendo que uno de ellos se establece como una referencia a la función, en lugar del valor esperado que la función devuelve.

Las variables del siguiente ejemplo son diferentes:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

Aquí `varOne` es la función `myFunction`, y `varTwo` es la cadena `You rock!`.

# --instructions--

Corrige el código para que la variable `result` se establezca en el valor devuelto al llamar a la función `getNine`.

# --hints--

Tu código debe corregir la variable `result` para que se establezca en el número que devuelve la función `getNine`.

```js
assert(result == 9);
```

Tu código debe llamar a la función `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```

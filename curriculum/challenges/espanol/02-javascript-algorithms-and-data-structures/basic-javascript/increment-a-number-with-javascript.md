---
id: 56533eb9ac21ba0edf2244ac
title: Incrementa un número con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Puedes fácilmente <dfn>incrementar</dfn> o sumar uno a una variable con el operador `++`.

```js
i++;
```

es equivalente a

```js
i = i + 1;
```

**Nota:** Toda la línea se convierte en `i++;`, eliminando la necesidad del signo de igualdad.

# --instructions--

Cambia el código para usar el operador `++` en `myVar`.

# --hints--

`myVar` debe ser igual a `88`.

```js
assert(myVar === 88);
```

No debes utilizar el operador de asignación.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(code)
);
```

Debes usar el operador `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

No debes cambiar el código por encima del comentario especificado.

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```

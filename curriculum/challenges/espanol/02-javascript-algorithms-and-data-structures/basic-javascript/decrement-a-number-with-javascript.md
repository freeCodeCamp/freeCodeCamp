---
id: 56533eb9ac21ba0edf2244ad
title: Decrementa un número con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Puedes fácilmente <dfn>decrementar</dfn> o disminuir una variable por uno utilizando el operador `--`.

`i--;`

es equivalente a

`i = i - 1;`

**Nota**  
Toda la línea se convierte en `i--;`, eliminando la necesidad del signo de igualdad.

# --instructions--

Cambia el código para usar el operador `--` en `myVar`.

# --hints--

`myVar` debe ser igual a `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` debe cambiarse.

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

Debes usar el operador `--` en `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

No debes cambiar el código por encima del comentario especificado.

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```

---
id: 56533eb9ac21ba0edf2244bf
title: Ámbito local y funciones
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito <dfn>local</dfn>. Esto significa que sólo son visibles dentro de esa función.

Esta es una función `myTest` con una variable local llamada `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

La llamada a la función `myTest()` mostrará la cadena `foo` en la consola. La línea `console.log(loc)` (fuera de la función `myTest`) lanzará un error, ya que `loc` no está definido fuera de la función.

# --instructions--

El editor tiene dos `console.log`s para ayudarte a ver lo que está sucediendo. Revisa la consola a medida que programas para ver cómo cambia. Declara una variable local `myVar` dentro de `myLocalScope` y ejecuta las pruebas.

**Nota:** La consola todavía mostrará el error `ReferenceError: myVar is not defined`, pero esto no causará que las pruebas fallen.

# --hints--

El código no debe contener una variable global `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Debes agregar una variable local `myVar`.

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

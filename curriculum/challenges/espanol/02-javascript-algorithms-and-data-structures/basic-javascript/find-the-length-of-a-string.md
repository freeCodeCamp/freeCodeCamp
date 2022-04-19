---
id: bd7123c9c448eddfaeb5bdef
title: Encuentra la longitud de una cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Puedes encontrar la longitud de un valor de cadena (`String`) escribiendo `.length` después de la variable de cadena o literal de cadena.

```js
console.log("Alan Peter".length);
```

El valor `10` se mostrará en la consola. Toma nota que el carácter espacial entre "Alan" y "Peter" también se cuenta.

Por ejemplo, si creamos una variable `const firstName = "Ada"`, podríamos averiguar la longitud de la cadena `Ada` usando la propiedad `firstName.length`.

# --instructions--

Utilice la propiedad `.length` para establecer `lastNameLength` al número de caracteres en `lastName`.

# --hints--

No debes cambiar las declaraciones de variables en la sección `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` debe ser igual a ocho.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Debes obtener la longitud de `lastName` usando `.length` de esta forma: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```

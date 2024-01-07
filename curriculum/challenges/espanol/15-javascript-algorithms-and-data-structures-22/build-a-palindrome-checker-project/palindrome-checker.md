---
id: aaa48de84e1ecc7c742e1124
title: Construye un proyecto de comprobación de palíndromos
challengeType: 5
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

Devuelve `true` si la cadena proporcionada es un palíndromo. De lo contrario, devuelve `false`.

Un <dfn>palíndromo</dfn> es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

**Nota:** Tendrás que eliminar **todos los caracteres no alfanuméricos** (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como `racecar`, `RaceCar` y `race CAR` entre otros.

También pasaremos cadenas con símbolos especiales, como `2A3*3a2`, `2A3 3a2` y `2_A3*3#A2`.

# --hints--

`palindrome("eye")` debe devolver un booleano.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` debe devolver `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` debe devolver `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` debe devolver `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` debe devolver `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` debe devolver `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` debe devolver `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` debe devolver `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` debe devolver `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` debe devolver `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` debe devolver `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` debe devolver `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` debe devolver `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```

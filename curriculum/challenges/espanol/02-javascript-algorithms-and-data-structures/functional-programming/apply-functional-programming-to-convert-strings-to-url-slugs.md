---
id: 587d7dab367417b2b2512b6d
title: Aplicar programación funcional para convertir cadenas a slugs de URL
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Los últimos desafíos abarcaban una serie de métodos útiles para arreglos y cadenas, que siguen los principios de la programación funcional. También hemos aprendido acerca de `reduce`, que es un poderoso método utilizado para reducir los problemas a formas más simples. Desde el cálculo de promedios a la ordenación, cualquier operación con arreglos puede lograrse si lo aplicamos. Recuerda que `map` y `filter` son casos especiales de `reduce`.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de gestión de contenidos (CMS) tienen los títulos de una publicación añadidos como parte de la URL con el simple propósito de ser marcadores. Por ejemplo, si escribes una publicación titulada `Stop Using Reduce`, es probable que la url tenga parte de este titulo en ella (`.../stop-using-reduce`). Puede que ya hayas notado esto en el sitio de freeCodeCamp.

# --instructions--

Rellena la función `urlSlug` para convertir una cadena `title` y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices `replace`. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (`-`)

El resultado debe contener todas las letras minúsculas

El resultado no debe tener espacios

# --hints--

Tu código no debe utilizar el método `replace` para este desafío.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` debe devolver la cadena `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` debe devolver la cadena `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` debe devolver la cadena `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` debe devolver la cadena `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```

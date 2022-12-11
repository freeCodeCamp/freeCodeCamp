---
id: 56533eb9ac21ba0edf2244b6
title: Escapa secuencias en cadenas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Las comillas no son los únicos caracteres que pueden ser <dfn>escapados</dfn> dentro de una cadena. Hay dos razones para usar caracteres de escape:

1.  Para permitirte usar caracteres que de otra manera no se podrían representar dentro de una cadena, como el carácter nueva línea.
2.  Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.

Esto lo aprendimos en el desafío anterior.

<table class='table table-striped'><thead><tr><th>Código</th><th>Resultado</th></tr></thead><tbody><tr><td><code>\'</code></td><td>comilla simple</td></tr><tr><td><code>\"</code></td><td>comilla doble</td></tr><tr><td><code>\\</code></td><td>barra invertida</td></tr><tr><td><code>\n</code></td><td>línea nueva</td></tr><tr><td><code>\t</code></td><td>tabulador</td></tr><tr><td><code>\r</code></td><td>retorno del carro</td></tr><tr><td><code>\b</code></td><td>límite de palabra</td></tr><tr><td><code>\f</code></td><td>fuente de formulario</td></tr></tbody></table>

*Ten en cuenta que la barra invertida en sí debe ser escapada para poder mostrarla como una barra invertida.*

# --instructions--

Asigna las siguientes tres líneas de texto en la variable única `myStr` usando secuencias de escape.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

Necesitarás usar secuencias de escape para insertar correctamente los caracteres especiales. También necesitarás seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras.

**Nota:** La sangría para la segunda línea (`SecondLine`) se consigue con el carácter de escape de tabulación, no con espacios.

# --hints--

`myStr` no debe contener ningún espacio

```js
assert(!/ /.test(myStr));
```

`myStr` debe contener las cadenas `FirstLine`, `SecondLine` y `ThirdLine` (recuerda la sensibilidad a mayúsculas y minúsculas)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` debe ir seguido del carácter de línea nueva `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` debe contener un carácter de tabulación `\t` seguido de un carácter de línea nueva

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` debe estar precedida por el carácter de barra invertida `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Debe haber un carácter de línea nueva entre `SecondLine` y `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` solo debe contener caracteres mostrados en las instrucciones

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

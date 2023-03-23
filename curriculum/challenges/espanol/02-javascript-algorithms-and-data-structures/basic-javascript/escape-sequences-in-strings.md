---
id: 56533eb9ac21ba0edf2244b6
title: Escapa secuencias en cadenas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Las comillas no son los únicos caracteres que pueden ser <dfn>escapados</dfn> dentro de una cadena. Las secuencias de escape le permiten utilizar caracteres que de otro modo no podrías usar en una cadena.

<table class='table table-striped'><thead><tr><th>Código</th><th>Resultado</th></tr></thead><tbody><tr><td><code>\'</code></td><td>comilla simple</td></tr><tr><td><code>\"</code></td><td>comilla doble</td></tr><tr><td><code>\\</code></td><td>barra invertida</td></tr><tr><td><code>\n</code></td><td>línea nueva</td></tr><tr><td><code>\t</code></td><td>tabulador</td></tr><tr><td><code>\r</code></td><td>retorno del carro</td></tr><tr><td><code>\b</code></td><td>límite de palabra</td></tr><tr><td><code>\f</code></td><td>fuente de formulario</td></tr></tbody></table>

*Ten en cuenta que la barra invertida debe escaparse para que aparezca como tal.*

# --instructions--

Asigna las siguientes tres líneas de texto a la variable única `myStr` utilizando secuencias de escape.

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

Deberás utilizar secuencias de escape para insertar correctamente caracteres especiales. También tendrás que seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras.

**Note:** La sangría para `SecondLine` se consigue con el carácter de escape tabulador, no con espacios.

# --hints--

`myStr` no debe contener espacios

```js
assert(!/ /.test(myStr));
```

`myStr` debe contener las cadenas `FirstLine`, `SecondLine` y `ThirdLine` (recuerda distinguir entre mayúsculas y minúsculas)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` debe ir seguido del carácter de nueva línea `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` debe contener un carácter de tabulación `\t` que sigue a un carácter de nueva línea

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` debe ir precedido del carácter de barra invertida `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Debe haber un carácter de nueva línea entre `SecondLine` y `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` sólo debe contener los caracteres mostrados en las instrucciones

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

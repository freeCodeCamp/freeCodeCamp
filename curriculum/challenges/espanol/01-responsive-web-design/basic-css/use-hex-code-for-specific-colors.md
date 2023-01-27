---
id: bad87fee1348bd9aedf08726
title: Utiliza código hexadecimal (hex code) para indicar colores específicos
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

¿Sabías que hay otras maneras de representar colores en CSS? Una de estas formas se llama código hexadecimal, o código hex (hex code) para abreviar.

Generalmente usamos <dfn>decimales</dfn>, o números de base 10, los cuales utilizan los símbolos del 0 al 9 para representar cada dígito. Los números <dfn>hexadecimales</dfn> (o <dfn>hex</dfn>) son números de base 16. Esto significa que utilizan dieciseis símbolos distintos. Al igual que en los números decimales, en hexadecimal los símbolos 0-9 representan los valores de cero a nueve. Luego A,B,C,D,E,F representan los valores de diez a quince. Todos estos símbolos juntos, de 0 a F, pueden representar un dígito en hexadecimal, lo que da un total de 16 valores posibles. Puedes encontrar más información acerca de los <a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">números hexadecimales aquí</a>.

En CSS, podemos representar colores utilizando 6 dígitos hexadecimales, dos para los componentes de rojo (R), verde (G) y azul (B). Por ejemplo, `#000000` corresponde al color negro, y también es el valor más bajo posible. Puedes encontrar más información acerca del <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">sistema de colores RGB aquí</a>.

```css
body {
  color: #000000;
}
```

# --instructions--

Reemplaza la palabra `black` en el "background-color" (color de fondo) de nuestro elemento `body` con su código hexadecimal equivalente, `#000000`.

# --hints--

Tu elemento `body` debe tener un `background-color` black (negro).

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Debes usar el código hexadecimal correspondiente al color negro en lugar de la palabra reservada `black`.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```

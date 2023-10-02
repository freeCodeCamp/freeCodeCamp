---
id: bad87fee1348bd9aedf04756
title: Sobreescribe estilos en código CSS posterior
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

¡Nuestra clase `pink-text` sobrescribió la declaración CSS de nuestro elemento `body`!

Acabamos de demostrar que nuestras clases sobrescribirán el CSS del elemento `body`. Entonces, la siguiente pregunta lógica es: ¿qué podemos hacer para sobrescribir nuestra clase `pink-text`?

# --instructions--

Crea una clase CSS adicional llamada `blue-text` que asigne a un elemento el color azul ("blue"). Asegúrate de que esté debajo de tu declaración de `pink-text`.

Aplica la clase `blue-text` a tu elemento `h1` además de tu clase `pink-text`, y veamos cuál de las dos gana.

Para aplicar múltiples atributos de clase a un elemento HTML debes dejar un espacio entre ellos, como se muestra a continuación:

```html
class="class1 class2"
```

**Nota:** No importa el orden en que las clases estén enlistadas dentro del elemento HTML.

Sin embargo, lo importante es el orden de las declaraciones de `class` clases en la sección `<style>`. La segunda declaración siempre tendrá prioridad sobre la primera. Debido a que `.blue-text` fue declaradado segundo, este sobreescribirá los atributos de `.pink-text`.

# --hints--

Tu elemento `h1` debe incluir la clase `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Tu elemento `h1` debe incluir la clase `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Tanto `blue-text` como `pink-text` deben pertenecer al mismo elemento `h1`.

```js
assert($('.pink-text').hasClass('blue-text'));
```

Tu elemento `h1` debe ser de color azul ("blue").

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

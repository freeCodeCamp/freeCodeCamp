---
id: 587d7fa5367417b2b2512bbd
title: Estender um conjunto de estilos CSS para outro elemento
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass tem um recurso chamado `extend` que faz com que seja fácil pegar emprestado as regras CSS de um elemento e construir a partir delas em outro.

Por exemplo, o bloco abaixo de regras CSS estiliza uma classe `.panel`. Tem um `background-color`, um `height` e um `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Agora você quer outro painel chamado `.big-panel`. Ele tem as mesmas propriedades de base que `.panel`, mas também precisa de um `width` e `font-size`. É possível copiar e colar as regras iniciais de CSS do `.panel`, mas o código se torna repetitivo à medida que você adiciona mais tipos de painéis. A diretiva `extend` é uma maneira simples de reutilizar as regras escritas para um elemento, e então adicionar mais para outro:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

O `.big-panel` terá as mesmas propriedades que `.panel` além dos novos estilos.

# --instructions--

Faça uma classe `.info-important` que estenda `.info` e também tenha um `background-color` definido como magenta.

# --hints--

A classe `info-important` deve ter um `background-color` definido para `magenta`.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

A classe `info-important` deve usar `@extend` para herdar o estilo da classe `info`.

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

---
id: 587d78a7367417b2b2512adf
title: Aprender como funcionam as propriedades de animação e @keyframes do CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Para animar um elemento, você precisa aprender as propriedades de animação e a regra `@keyframes`. As propriedades de animação controlam como a animação deve se comportar e a regra `@keyframes` controla o que acontece durante essa animação. Existem oito propriedades de animação no total. Este desafio será simples e vai abranger os dois mais importantes:

`animation-name` define o nome da animação, que mais tarde será usado por `@keyframes` para dizer ao CSS quais regras combinam com quais animações.

`animation-duration` define a duração da animação.

`@keyframes` é como especificar exatamente o que acontece na animação ao longo de sua duração. Isso é feito fornecendo propriedades CSS para "tempos" específicos durante a animação, com porcentagens que variam de 0% a 100%. Se você comparar isso a um filme, as propriedades CSS em 0% representariam como o elemento seria exibido na cena de abertura. As propriedades do CSS em 100% representariam como o elemento aparecia no final, antes do rolamento dos créditos. Por fim, o CSS faz a parte mágica de criar a transição do elemento ao longo da duração da animação. Aqui está um exemplo para ilustrar o uso de `@keyframes` e as propriedades de animação:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Para o elemento com o id `anim`, o trecho de código acima define o valor da propriedade `animation-name` como `colorful` e define o valor da propriedade `animation-duration` como 3 segundos. Em seguida, a regra `@keyframes` é vinculada às propriedades da animação com o nome `colorful`. Ela define a cor como azul no início da animação (0%), que mudará para amarelo no final da animação (100%). Você não está limitado apenas a transições de início e fim, você pode definir propriedades para qualquer valor entre 0% e 100%.

# --instructions--

Crie uma animação para o elemento com o id `rect`, definindo o valor da propriedade `animation-name` como `rainbow` e o valor da propriedade `animation-duration` como 4 segundos. Em seguida, declare uma regra `@keyframes` e defina a propriedade `background-color` no início da animação (`0%`) para azul, o meio da animação (`50%`) para verde e o final da animação (`100%`) para amarelo.

# --hints--

O elemento com id `rect` deve ter a propriedade `animation-name` com o valor de `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

O elemento com o id `rect` deve ter a propriedade `animation-duration` com o valor de 4s.

```js
assert($('#rect').css('animation-duration') == '4s');
```

O nome da regra `@keyframes` deve ser o mesmo da propriedade `animation-name`, `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

A regra `@keyframes` para `rainbow` deve usar a propriedade `background-color` com o valor `blue` em 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

A regra `@keyframes` para `rainbow` deve usar a propriedade `background-color` com o valor `green` em 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

A regra `@keyframes` para `rainbow` deve usar a propriedade `background-color` com o valor `yellow` em 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```

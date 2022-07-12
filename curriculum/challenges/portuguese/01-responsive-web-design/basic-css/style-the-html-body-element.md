---
id: bad87fee1348bd9aedf08736
title: Estilizar o elemento HTML body
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Vamos começar do início e falar sobre o conceito de herança dentro do CSS.

Toda página HTML possui um elemento `body`.

# --instructions--

Podemos provar que o elemento `body` existe aqui definindo a propriedade `background-color` com o valor black (preto).

Para fazer isso, adicione ao elemento `style` o seguinte código:

```css
body {
  background-color: black;
}
```

# --hints--

O elemento `body` deve ter a propriedade `background-color` com o valor black (preto).

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

O código CSS deve ser formatado corretamente, contendo chaves de abertura e fechamento.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

A declaração do estilo CSS deve terminar com um ponto e vírgula.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```

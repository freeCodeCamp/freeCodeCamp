---
id: bd7123c8c441eddfaeb5bdef
title: Conhecer os elementos HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Boas-vindas aos desafios de código em HTML do freeCodeCamp. Eles guiarão você no aprendizado sobre desenvolvimento web.

Em primeiro lugar, você construirá uma página simples usando HTML. Você poderá editar o código em seu editor, que se encontra incorporado a esta página.

Você consegue ver no seu editor de código um código que diz `<h1>Hello</h1>`? Ele é um elemento HTML.

A maioria dos elementos HTML tem uma tag de abertura e uma tag de fechamento.

As tags de abertura seguem este formato:

```html
<h1>
```

As de fechamento, por outro lado, são assim:

```html
</h1>
```

A única diferença entre as tags de abertura e de fechamento é a barra inclinada para frente (/) após o sinal de menor (<) da tag de fechamento.

Cada desafio possui testes que você pode executar a qualquer momento clicando no botão "Run tests". Ao passar em todos os testes, será sugerido que você envie a solução e vá para o próximo desafio.

# --instructions--

Para passar no teste deste desafio, mude o texto do elemento `h1` para que ele exiba `Hello World`.

# --hints--

O elemento `h1` deve conter o texto `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```

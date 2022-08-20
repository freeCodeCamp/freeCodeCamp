---
id: bad87fee1348bd9aedf04756
title: Substituir estilos no CSS baseado na ordem de aparição
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

A classe `pink-text` sobrescreveu a declaração de estilo do elemento `body`!

Com isso, podemos perceber que classes sobrescrevem os estilos declarados no elemento `body`. Isso nos leva à pergunta: o que podemos fazer para substituir a classe `pink-text`?

# --instructions--

Crie uma classe CSS adicional chamada `blue-text` que dá a um elemento a cor azul. Certifique-se de que esta nova classe esteja abaixo da classe `pink-text`.

Além de classe `pink-text`, aplique a classe `blue-text` ao elemento `h1`, e vamos ver qual tem maior prioridade.

A aplicação de várias classes a um mesmo elemento HTML é feita com um espaço entre cada uma, assim:

```html
class="class1 class2"
```

**Observação:** a ordem das classes dentro do atributo "class" não é importante.

O importante é a ordem em que as classes (`class`) são declaradas dentro da tag `<style>`. A última declaração sempre terá prioridade sobre a anterior. Como `.blue-text` é declarado em segundo lugar, ele substitui os atributos de `.pink-text`.

# --hints--

O elemento `h1` deve ter a classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

O elemento `h1` deve ter a classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Tanto a classe `blue-text` quanto a classe `pink-text` devem pertencer ao mesmo elemento `h1`.

```js
assert($('.pink-text').hasClass('blue-text'));
```

O texto do elemento `h1` deve ser azul.

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

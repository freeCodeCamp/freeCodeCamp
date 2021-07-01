---
id: bad87fee1348bd8aedf06756
title: Sobrescrever estilos de classes por estilos de ID
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

No desafio anterior vimos que os navegadores leem o CSS de cima para baixo, seguindo a ordem de aparição das declarações de estilos. Isso significa que, em caso de conflito, o navegador utilizará a última declaração CSS escrita. No elemento `h1`, observe que se tivéssemos declarado a classe `blue-text` antes de classe `pink-text`, o h1 continuaria a aplicar os estilos baseado em quem foi declarado por último!

Mas isso não é tudo. Existem outras maneiras de sobrescrever o CSS. Você se lembra dos atributos de id?

Vamos sobrescrever as classes `pink-text` e `blue-text` dando ao elemento `h1` um id e então estilizar este id de forma a tornar o elemento `h1` laranja.

# --instructions--

Dê ao elemento `h1` o atributo `id` com o valor `orange-text`. Lembre-se de que é assim que se aplica um id:

```html
<h1 id="orange-text">
```

Não apague as classes `blue-text` e `pink-text` do elemento `h1`.

Crie uma declaração CSS para o id `orange-text` no elemento `style`. Um exemplo de como fazer isso:

```css
#brown-text {
  color: brown;
}
```

**Observação:** não importa se você declara esse CSS acima ou abaixo da classe `pink-text`, já que o atributo `id` sempre terá prioridade.

# --hints--

O elemento `h1` deve ter a classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

O elemento `h1` deve ter a classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

O elemento `h1` deve ter o id `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Deve haver apenas 1 elemento `h1`.

```js
assert($('h1').length === 1);
```

O id `orange-text` deve ser referenciado no CSS.

```js
assert(code.match(/#orange-text\s*{/gi));
```

O `h1` não deve ter nenhum atributo `style`.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

O elemento `h1` deve ser laranja.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
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
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```

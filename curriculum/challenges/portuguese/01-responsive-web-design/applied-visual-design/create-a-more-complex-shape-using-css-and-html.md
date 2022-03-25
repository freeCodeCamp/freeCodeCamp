---
id: 587d78a6367417b2b2512ade
title: Criar formas complexas usando CSS e HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

Uma das formas mais populares do mundo é a forma de coração e, neste desafio, você criará um usando CSS puro. Mas primeiro, você precisa entender os pseudo-elementos `::before` e `::after`. `::before` cria um pseudoelemento que é o primeiro filho do elemento selecionado; `::after` cria um pseudoelemento que é o último filho do elemento selecionado. No exemplo a seguir, um pseudo-elemento `::before` é usado para adicionar um retângulo a um elemento com a classe `heart`:

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

Para que os pseudo-elementos `::before` e `::after` funcionem corretamente, eles devem ter a propriedade `content` definida. Esta propriedade é geralmente usada para adicionar coisas como uma foto ou texto ao elemento selecionado. Quando os pseudo-elementos `::before` e `::after` são usados para criar formas, a propriedade `content` ainda é necessária, mas é definida com um valor vazio. No exemplo acima, o elemento com a classe `heart` tem um pseudo-elemento `::before` que produz um retângulo amarelo com altura e largura de `50px` e `70px`, respectivamente. Este retângulo tem cantos arredondados por conta da propriedade `border-radius` de 25% e está posicionado absolutamente `5px` a esquerda e `50px` acima do topo do elemento.

# --instructions--

Transforme o elemento em tela em um coração. No seletor `.heart::after`, altere a propriedade `background-color` para `pink` e `border-radius` para 50%.

Em seguida, adicione a propriedade `transform` no elemento com a classe `heart` (apenas `heart`). Use a função `rotate()` com o valor de -45 graus.

Finalmente, no seletor `.heart::before`, a propriedade `content` deve possuir um valor vazio.

# --hints--

A propriedade `background-color` do seletor `.heart::after` deve ter o valor `pink`.

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

A propriedade `border-radius` do seletor `.heart::after` deve ter um valor de 50%.

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

A propriedade `transform` da classe `heart` deve usar a função `rotate()` com o valor de -45 graus.

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

A propriedade `content` do seletor `.heart::before` deve ter um valor vazio.

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

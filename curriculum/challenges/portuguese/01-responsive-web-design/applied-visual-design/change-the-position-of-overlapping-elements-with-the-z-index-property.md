---
id: 587d78a3367417b2b2512acf
title: Alterar a ordem de aparição de elementos sobrepostos com a propriedade z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Quando os elementos são posicionados para se sobrepor (ou seja, usando `position: absolute | relative | fixed | sticky`), o elemento que vem por último no código HTML aparecerá, por padrão, por cima dos elementos anteriores. No entanto, a propriedade `z-index` pode modificar a ordem em que os elementos são empilhados (sobrepostos) uns sobre os outros. Essa propriedade deve receber um número inteiro (ou seja, um número do conjuntos dos inteiros e não decimal). Valores maiores para a propriedade `z-index` de um elemento movem-no para cima na pilha. Valores menores movem-no para baixo na pilha.

# --instructions--

Na classe `first`, adicione a propriedade `z-index` com o valor de 2. Isso fará com que o retângulo vermelho cubra o retângulo azul.

# --hints--

O elemento com a classe `first` deve ter a propriedade `z-index` com o valor de 2.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```

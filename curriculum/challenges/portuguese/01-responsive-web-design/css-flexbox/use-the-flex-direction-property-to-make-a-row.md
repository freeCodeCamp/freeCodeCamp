---
id: 587d78ab367417b2b2512af2
title: Usar a propriedade flex-direction para criar uma linha
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

Ao adicionar `display: flex` a um elemento, você o transforma em um flex container. Isso faz com que seja possível alinhar todos os filhos desse elemento em linhas ou colunas. Para fazer isso, você deve usar a propriedade `flex-direction` no item pai e definir o valor desta usando row ou column. Criar uma row (linha) vai alinhar os itens filhos horizontalmente. Criar uma column (coluna) vai alinhar os itens filhos verticalmente.

Outras opções para `flex-direction` são `row-reverse` e `column-reverse`.

**Observação:** o valor padrão da propriedade `flex-direction` é `row`.

# --instructions--

Adicione a propriedade CSS `flex-direction` ao elemento de id `#box-container` e dê a ela o valor de `row-reverse`.

# --hints--

O elemento de id `#box-container` deve ter a propriedade `flex-direction` com o valor de `row-reverse`.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

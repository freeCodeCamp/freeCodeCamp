---
id: 587d78ac367417b2b2512af6
title: Alinhar elementos usando a propriedade justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Às vezes, os flex items dentro de um flex container não preenchem todo o espaço no disponível no contêiner. É comum querer dizer ao CSS como alinhar e espaçar os flex items de uma certa maneira. Felizmente, a propriedade `justify-content` tem várias opções para fazer isso. Antes, no entanto, há uma terminologia importante para entender antes de aprender essas opções.

<a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noopener noreferrer nofollow">Para mais informações sobre as propriedades do flex-box, leia aqui</a>

Lembre-se de que definir um flex container como uma linha coloca os flex items lado a lado da esquerda para a direita. Já um flex container como uma coluna coloca os flex items em uma pilha vertical de cima para baixo. Seja qual for a direção do flex container, a direção em que os flex items são posicionados é chamada de **eixo principal**. Para uma linha, o eixo principal é uma linha horizontal que passa através de cada item. E para uma coluna, o eixo principal é uma linha vertical que passa através de cada item.

Existem várias opções para espaçar os flex items ao longo da linha que for o eixo principal. Uma dos mais usadas é `justify-content: center;`, que alinha todos os flex items ao centro dentro do flex container. As demais opções são:

<ul><li><code>flex-start</code>: alinha os itens no início do contêiner flex. Para linhas, os flex items são empurrados para a esquerda do flex container. Para colunas, os flex items são empurrados para o topo do flex container. Este é o alinhamento padrão se nenhum valor for especificado para <code>justify-content</code>.</li><li><code>flex-end</code>: alinha os itens no final do contêiner flex. Para linhas, os flex items são empurrados para a direita do flex container. Para colunas, os flex items são empurrados para a parte inferior do flex container.</li><li><code>space-between</code>: alinha os itens ao centro do eixo principal, com um espaçamento entre os itens. O primeiro item e o último são empurrados até a borda do flex container. Por exemplo, quando a direção do flex container for em linha, o primeiro item fica do lado esquerdo do contêiner e o último item fica no lado direito do contêiner. Então, o espaço restante é distribuído igualmente para os demais itens.</li><li><code>space-around</code>: similar ao <code>space-between</code> mas os primeiros e últimos itens não ficam grudados nas bordas do flex container, o espaço é distribuído em torno de todos os itens com metade do espaço em cada extremidade do flex container.</li><li><code>space-evenly</code>: distribui o espaço igualmente entre os flex items com um espaço completo em cada extremidade do flex container.</li></ul>

# --instructions--

Alguns exemplos vão ajudar você a entender os valores dessa propriedade em ação. Adicione a propriedade CSS `justify-content` ao elemento `#box-container` e dê a ela o valor de `center`.

**Bônus**  
Use os demais valores da propriedade `justify-content` no editor de código para ver as diferenças. Mas observe que o valor `center` será o único que vai fazer você passar neste desafio.

# --hints--

O elemento `#box-container` deve ter a propriedade `justify-content` com o valor de `center`.

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
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
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

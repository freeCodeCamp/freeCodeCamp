---
id: 587d78ad367417b2b2512af8
title: Alinhar elementos usando a propriedade align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

A propriedade `align-items` é similar à `justify-content`. Lembre que a propriedade `justify-content` alinhou os flex items ao longo do eixo principal. Para linhas, o eixo principal é uma linha horizontal e para colunas é uma linha vertical.

Flex containers também têm um **eixo transversal** que é o oposto do eixo principal. Para linhas, o eixo transversal é vertical, e para colunas, o eixo transversal é horizontal.

O CSS oferece a propriedade `align-items` para alinhar os flex items ao longo do eixo transversal. Para linhas, ela indica ao CSS como empurrar os itens para cima ou para baixo dentro do container. E para uma coluna, como empurrar todos os itens para a esquerda ou direita dentro do container.

Os valores disponíveis para `align-items` são:

<ul><li><code>flex-start</code>: alinha os itens no início do contêiner flex. Para linhas, os flex items são posicionados no topo do container. Para colunas, os flex items são posicionados à esquerda do container.</li><li><code>flex-end</code>: alinha os itens no final do contêiner flex. Para linhas, todos os flex items são posicionados na parte inferior do container. Para colunas, os flex items são posicionados à direita do container.</li><li><code>center</code>: alinha os itens ao centro. Para linhas, os flex items são posicionados verticalmente (com espaços iguais acima e abaixo dos itens). Para colunas, os flex items são posicionados horizontalmente (com espaços iguais à esquerda e à direita dos itens).</li><li><code>stretch</code>: estica os itens para preencher o container. Por exemplo, itens posicionados em linhas são esticados para preencher o contêiner de cima a baixo. Este é o valor padrão se nenhum valor for especificado para a propriedade <code>align-items</code>.</li><li><code>baseline</code>: o posicionamento é realizado com base no texto dentro de cada flex item. A linha de base (baseline) é um conceito de textos. Pense nela como se fosse a linha em que as letras ficam apoiadas.</li></ul>

# --instructions--

Alguns exemplos vão ajudar você a entender os valores dessa propriedade em ação. Adicione a propriedade CSS `align-items` ao elemento `#box-container` e dê a ela o valor de `center`.

**Bônus**  
Use os demais valores da propriedade `align-items` no editor de código para ver as diferenças. Mas observe que o valor `center` será o único que vai fazer você passar neste desafio.

# --hints--

O elemento de id `#box-container` deve ter a propriedade `align-items` definida com o valor de `center`.

```js
assert($('#box-container').css('align-items') == 'center');
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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

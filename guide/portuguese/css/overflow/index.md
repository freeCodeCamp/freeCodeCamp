---
title: Overflow
localeTitle: Transbordar
---
# Transbordar

A propriedade de `overflow` especifica o que acontece se o conteúdo estourar a caixa de um elemento (essa propriedade só funciona para elementos de bloco com uma altura especificada).

Esta propriedade especifica se é necessário recortar o conteúdo ou adicionar barras de rolagem quando o conteúdo de um elemento é grande demais para caber em uma área especificada.

Por exemplo, um determinado elemento de nível de bloco ( `<div>` ) definido como 300px de largura, que contém uma imagem com largura de 400px. A imagem ficará fora da div e ficará visível por padrão. No entanto, se o valor de estouro estiver definido como oculto, a imagem será cortada em 300px.

## Valores

*   `visible` : este é o valor padrão da propriedade. O conteúdo não é recortado quando é maior que a caixa.
*   `hidden` : O conteúdo transbordante ficará oculto.
*   `scroll` : Semelhante ao oculto, mas os usuários poderão rolar pelo conteúdo oculto.
*   `auto` : se o conteúdo continuar fora de sua caixa, esse conteúdo ficará oculto, enquanto uma barra de rolagem deverá estar visível para os usuários lerem o restante do conteúdo.
*   `initial` : usa o valor padrão que é visível.
*   `inherit` : define o estouro para o valor de seu elemento pai.

## Exemplos

### Visível:

```css
.box-element { overflow: visible; } 
```

![Exemplo de imagem](https://s26.postimg.org/gweu6g5yh/1-vissible.png)

### Escondido:

```css
.box-element { overflow: hidden; } 
```

![Exemplo de imagem](https://s26.postimg.org/l49mf77e1/2-hidden.png)

### Rolagem:

```css
.box-element { overflow: scroll; } 
```

![Exemplo de imagem](https://s26.postimg.org/d8z30dxrd/3-scroll.png)

### Auto:

```css
.box-element { overflow: auto; } 
```

![Exemplo de imagem](https://s26.postimg.org/z5q7ei0bt/4-autoank.png)

## estouro-x e estouro-y

*   `overflow-x` : permite ao usuário percorrer o conteúdo que ultrapassa a altura do elemento box.
*   `overflow-y` : permite ao usuário rolar pelo conteúdo que ultrapassa a largura da caixa.

```css
  .box-element { 
    overflow-x: scroll; 
    overflow-y: auto; 
  } 
```

E o `.box-element` será assim: ![Exemplo de imagem](https://s26.postimg.org/ff2kmdfzd/5-_Xand_Y.png)

Se o conteúdo ultrapassar o eixo Y, esse conteúdo ficará oculto, enquanto uma barra de rolagem deverá estar visível para os usuários lerem o restante do conteúdo.

#### Mais Informações:

CSS-Tricks: [estouro](https://css-tricks.com/almanac/properties/o/overflow/)
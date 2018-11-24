---
title: Z Index
localeTitle: Índice Z
---
## Índice Z

Z Index ( `z-index` ) é uma propriedade CSS que define a ordem dos elementos HTML sobrepostos. Elementos com um índice mais alto serão colocados sobre elementos com um índice menor.

**Nota** : O índice Z só funciona nos elementos posicionados ( `position:absolute` , `position:relative` ou `position:fixed` ).

#### Valores possíveis

```css
/* Default value if not specified */ 
 z-index: auto; 
 
 /* Integer values */ 
 z-index: 1; 
 z-index: 100; 
 z-index: 9999; 
 z-index: -1; 
 
 /* Global values */ 
 z-index: inherit; 
 z-index: initial; 
 z-index: unset; 
```

#### Exemplo de uso

Neste exemplo, você pode ver três caixas exibidas uma em cima da outra em diferentes pedidos usando o `z-index` .

_HTML_

```html

<div class="container"> 
  <div class="box" id="blue"></div> 
  <div class="box" id="red"></div> 
  <div class="box" id="green"></div> 
 </div> 
```

_CSS_

```css
#blue { 
  background-color: blue; 
 } 
 
 #red { 
  background-color: red; 
 } 
 
 #green { 
  background-color: green; 
 } 
```

Como o `z-index` não foi definido, ele terá um valor padrão de `auto` . Isso é um resultado:

![Uma imagem de três caixas](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

Tente alterar a ordem para verde, azul, vermelho em CSS usando `z-index` .

```css
#blue { 
  background-color: blue; 
  z-index: 2; 
 } 
 
 #red { 
  background-color: red; 
  z-index: 1; 
 } 
 
 #green { 
  background-color: green; 
  z-index: 3; 
 } 
```

Seu resultado será:

![Uma imagem de três caixas](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

Use o índice Z se precisar colocar um elemento de plano de fundo abaixo de um contêiner. Você pode facilmente colocar o fundo em cada elemento, dando-lhe um índice Z negativo como abaixo:

```css
#background { 
  z-index: -1; 
 } 
```

#### Mais Informações:

[https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)

[https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS _Posicionamento / Noções_ básicas sobre z\_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
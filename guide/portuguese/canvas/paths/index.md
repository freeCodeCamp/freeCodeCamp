---
title: Paths
localeTitle: Caminhos
---
## Caminhos na tela

Os caminhos são o bloco de construção do desenho no Canvas. Um caminho é apenas uma forma. Então, a forma pode ser desenhada acariciando-a ou preenchendo-a.

Podemos criar caminhos de uso com `beginPath` , `fill` e `stroke` .

```js
ctx.beginPath(); 
 ctx.rect(0, 0, 100, 100); 
 ctx.fillStyle="black"; 
 ctx.fill(); 
```

Isso cria um quadrado preto no canto superior direito da tela. Podemos alterar traços e preenchimentos com `strokeStyle` e `fillStyle` , que pegam strings de cores semelhantes a CSS. Também podemos usar o `lineWidth` para tornar os traços mais espessos.

```js
ctx.beginPath(); 
 ctx.moveTo(0,0); 
 ctx.lineTo(300,150); 
 ctx.moveTo(0, 100); 
 ctx.lineTo(300, 250); 
 
 ctx.strokeStyle="red"; 
 ctx.lineWidth=2; 
 ctx.stroke(); 
```

Existem quatro funções básicas de desenho: `rect` , `moveTo` , `lineTo` e `arc` .

*   `rect(x, y, width, height)` adiciona um retângulo criado a partir de ( `x` , `y` ) de dimensões ( `width` , `height` ) ao caminho.
*   `moveTo(x,y)` move a caneta para um ponto na tela
*   `lineTo(x,y)` move a caneta para um ponto na tela e adiciona uma linha entre o novo ponto e o antigo ao caminho.
*   `arc(x, y, r, ti, tf)` adiciona um arco (uma parte de um círculo) em ( `x` , `y` ), de raio `r` , e de ângulo `ti` a `tf` para o caminho.

Observe que essas funções são adicionadas ao caminho de trabalho. Eles não criam novos caminhos.

```js
//example 1 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
 
 //example 2 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.beginPath(); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
```

O primeiro exemplo desenha dois quadrados, enquanto o segundo desenha apenas um, uma vez que o `beginPath` descartou o primeiro retângulo no antigo caminho de trabalho.

Este fato leva a um erro comum em fazer animações de `canvas` .

```js
var x = 0; 
 var y = 0; 
 function draw() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
  ctx.rect(x, y, 50, 50); 
  ctx.fill(); 
  x+=1; 
 
  window.requestAnimationFrame(draw); 
 } 
 
 window.requestAnimationFrame(draw); 
```

A animação acima, que deve fazer um movimento quadrado na tela, cria uma longa barra preta. A razão é que o `beginPath` não é chamado dentro do loop de `draw` .

Para ler mais sobre animação, consulte a página [Animação](/articles/canvas/animation-in-canvas/) .

#### Mais Informações:

*   [API de tela MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
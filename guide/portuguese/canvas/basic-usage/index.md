---
title: Basic Usage
localeTitle: Uso Básico
---
## Uso Básico do Canvas

Ao usar a tela, primeiro coloque uma tela no documento como um elemento.

```html

<canvas width="400" height="400" id="canvas"></canvas> 
```

Os atributos `width` e `height` controlam o tamanho da tela. Esses atributos controlam o tamanho da tela de desenho, não o tamanho renderizado real. Consulte a página "Dimensões da tela" para mais.

Para usar uma `canvas` , devemos primeiro pegar o elemento da página como um elemento DOM e, em seguida, obter um contexto de desenho a partir dele.

```js
var canvas = document.getElementById("canvas"); 
 var ctx = canvas.getContext('2d'); 
```

Todas as chamadas de desenho depois disso serão feitas a partir do objeto `ctx` . O `ctx` representa o contexto de desenho do objeto e contém informações sobre o espaço de desenho 2D. O objeto de `canvas` é o elemento DOM real. Interagir com ele nos permite acessar atributos como `width` e `height` .

Existem alguns contextos de desenho disponíveis, incluindo `webgl` . O WebGL é realmente uma tecnologia totalmente diferente, portanto, nos concentraremos apenas no desenho 2D.

Os caminhos são o bloco de construção do desenho na `canvas` . Veja a página " [Caminhos](/articles/canvas/paths) " para mais.

#### Mais Informações:

*   [API de tela MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
*   [HTMLCanvasElement.getContext () (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
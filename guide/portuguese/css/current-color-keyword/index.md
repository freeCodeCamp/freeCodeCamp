---
title: currentColor Keyword
localeTitle: palavra-chave currentColor
---
## A palavra-chave currentColor

A palavra-chave currentColor, como o nome sugere, é um valor de cor válido em CSS. Isso representa o valor da propriedade de `color` do elemento específico. Isso permite usar o valor da propriedade `color` para propriedades que não a recebem por padrão.

### Suporte de Navegador

A palavra-chave currentColor é suportada muito bem em navegadores. É suportado pelo IE9 +, pelo Safari 4+ e por todos os outros navegadores modernos. Confira a lista completa em [caniuse.com](https://caniuse.com/#feat=currentcolor)

### Exemplo

Declaramos que cada div tem uma borda de 3px de cor _currentColor_ , o que significa que a borda de cada div será colorida com o mesmo valor de sua propriedade de `color` . Confira o exemplo ao vivo [aqui](http://jsfiddle.net/tjkp0cm3/)

```css
div{ 
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */ 
  border: 3px solid currentColor; 
 } 
 
 /* This div will have green borders, because its color value is green. */ 
 #div1{ 
  color: green; 
 } 
 
 /* This div will have blue borders, because its color value is blue. */ 
 #div2{ 
  color: blue; 
 } 
```

### Aplicação prática com um SVG

Aqui está um exemplo muito comum na web - um botão com um ícone SVG e texto nele. A cor da borda, texto e ícones mudam ao passar o mouse sobre o botão. A imagem abaixo mostra os estados inicial e flutuante do botão em ordem.

![Imagens de botão](https://image.ibb.co/hWveBR/button_variations.png)

As fontes de ícone também podem ser usadas para essa finalidade, mas há várias vantagens do SVG embutido sobre as fontes de ícones, e isso pode tornar os SVGs a opção para muitos desenvolvedores. Citando [CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) ,

> Pode ser frustrante posicionar um ícone de fonte. Os ícones são inseridos através do pseudoelemento, e isso depende `line-height` , `vertical-align` , `letter-spacing` `word-spacing` , como o glifo da fonte é projetado (ele naturalmente tem espaço ao redor? Ele tem informações de kerning?) . Em seguida, o tipo de `display` pseudo-elementos afeta se essas propriedades tiverem um efeito ou não. SVG é apenas o tamanho que é.

Resumindo, às vezes pode ser frustrante usar ícones de fonte com texto.

Poderíamos usar esse código para alcançar o comportamento desejado.

```css
button{ 
  color: #016898; 
 } 
 
 .emailIcon{ 
  fill: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
 
 button:hover .emailIcon{ 
  fill: #19B5FE; 
 } 
```

Agora, em vez de alterar explicitamente a cor de `fill` do SVG, podemos definir o preenchimento como `currentColor` . Isso muda automaticamente a cor do SVG para o valor da propriedade `color` do botão. Agora só precisamos alterar a propriedade `color` do botão. Isso torna o código CSS mais curto e mais inteligente.

```css
.emailIcon{ 
  fill: currentColor; 
 } 
 
 button{ 
  color: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
```

Confira o exemplo ao vivo em https://repl.it/NNt9/2.

#### Mais Informações:

*   [MDN Docs na propriedade de `color` CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [MDN Docs na palavra-chave currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
*   [Artigo sobre currentColor em osvaldas.info](https://osvaldas.info/keeping-css-short-with-currentcolor)
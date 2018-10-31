---
title: Margins
localeTitle: Margens
---
# Margens

A `margin` propriedade CSS define a área de margem em todos os quatro lados de um elemento. Essa propriedade pode ser usada para gerar espaço em torno do conteúdo (fora da borda). É uma forma abreviada de definir todas as margens individuais de uma vez: `margin-top` , `margin-right` , `margin-bottom` e `margin-left` . Os valores são definidos no sentido horário.

Os valores de margem são definidos usando comprimentos ou porcentagens, ou `auto` ou `inherit` palavra-chave, e podem aceitar valores zero ou negativos. O valor inicial, ou padrão, para todas as propriedades de margem é 0. Enquanto você pode usar a palavra-chave `inherit` mas não pode ser usado junto com um valor de comprimento.

## Sintaxe

```css
.element { 
    margin: margin-top || margin-right || margin-bottom || margin-left; 
 } 
```

Essa propriedade pode ser especificada usando um, dois, três ou quatro valores.

*   Quando um valor é especificado, ele aplica a mesma margem aos quatro lados.
*   Quando dois valores são especificados, a primeira margem se aplica à parte superior e inferior, a segunda à esquerda e à direita.
*   Quando três valores são especificados, a primeira margem se aplica à parte superior, a segunda à esquerda e à direita e a terceira à parte inferior.
*   Quando quatro valores são especificados, as margens são aplicadas na parte superior, direita, inferior e esquerda nessa ordem (sentido horário).

```css
/* Apply to all four sides */ 
 margin: 1em; 
 
 /* top and bottom | left and right */ 
 margin: 5% 10%; 
 
 /* top | left and right | bottom */ 
 margin: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 margin: 5px 1em 0 1em; 
```

## Onde no modelo de caixa

A propriedade de margem no CSS define a parte mais externa do modelo de caixa, criando espaço em torno do conteúdo de um elemento, fora de quaisquer limites e / ou bordas definidos.

![O modelo de caixa CSS](https://www.w3.org/TR/css3-box/box.png)

## Margens em colapso

Margens verticais em elementos diferentes que se tocam (portanto, sem conteúdo, preenchimento ou bordas separando-as) irão colapsar, formando uma margem única que é igual à maior das margens adjacentes. Isso não acontece nas margens horizontais (esquerda e direita), apenas vertical (superior e inferior).

## Suporte de Navegador

É efetivamente suportado em todos os navegadores (desde IE6 +, Firefox 2+, Chrome 1+ etc)

### Mais Informações

*   [Esboço de trabalho do W3C](https://www.w3.org/TR/css3-box/#the-margin)
*   [W3C CSS Nível 2](https://www.w3.org/TR/CSS2/box.html#propdef-margin)
*   [W3C CSS Nível 1](https://www.w3.org/TR/CSS1/#margin)
*   [Documento Web do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [Truques CSS](https://css-tricks.com/almanac/properties/m/margin/)
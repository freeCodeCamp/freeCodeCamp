---
title: Padding
localeTitle: Preenchimento
---
# Preenchimento

A propriedade CSS de `padding` define a área de preenchimento em todos os quatro lados de um elemento. Essa propriedade pode ser usada para gerar espaço ao redor do conteúdo (dentro da borda). É uma abreviação para definir todos os acolchoamentos individuais de uma só vez: `padding-top` , `padding-right` , `padding-bottom` e `padding-left` . Os valores são definidos no sentido horário.

Os valores de preenchimento são definidos usando comprimentos ou porcentagens ou `inherit` palavra-chave e não podem aceitar valores negativos. O valor inicial ou padrão para todas as propriedades de preenchimento é 0. Embora você possa usar a palavra-chave `inherit` mas não pode ser usado junto com um valor de comprimento.

## Sintaxe

```css
.element { 
    padding: [padding-top] || [padding-right] || [padding-bottom] || [padding-left]; 
 } 
```

Essa propriedade pode ser especificada usando um, dois, três ou quatro valores.

*   Quando um valor é especificado, ele aplica o mesmo preenchimento aos quatro lados.
*   Quando dois valores são especificados, o primeiro preenchimento se aplica à parte superior e inferior, o segundo à esquerda e à direita.
*   Quando três valores são especificados, o primeiro preenchimento é aplicado ao topo, o segundo à esquerda e à direita e o terceiro à parte inferior.
*   Quando quatro valores são especificados, os preenchimentos são aplicados na parte superior, direita, inferior e esquerda nessa ordem (sentido horário).

```css
/* em refers to the current font size of an element */ 
 /* Apply to all four sides */ 
 padding: 1em; 
 
 /* top and bottom | left and right */ 
 padding: 5% 10%; 
 
 /* top | left and right | bottom */ 
 padding: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 padding: 5px 1em 0 1em; 
```

## Onde no modelo de caixa

A propriedade de preenchimento em CSS define a parte mais interna do modelo de caixa, criando espaço em torno do conteúdo de um elemento, dentro de quaisquer margens e / ou bordas definidas.

![O modelo de caixa CSS](https://www.w3.org/TR/css3-box/box.png)

## Suporte de Navegador

É efetivamente suportado em todos os navegadores (desde IE6 +, Firefox 2+, Chrome 1+ etc)

### Mais Informações

*   [Esboço de trabalho do W3C](https://www.w3.org/TR/css3-box/#the-padding)
*   [W3C CSS Nível 2](https://www.w3.org/TR/CSS2/box.html#propdef-padding)
*   [W3C CSS Nível 1](https://www.w3.org/TR/CSS1/#padding)
*   [Documento Web do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
*   [Truques CSS](https://css-tricks.com/almanac/properties/p/padding/)
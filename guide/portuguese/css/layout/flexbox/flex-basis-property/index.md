---
title: Flex Basis Property
localeTitle: Propriedade Flex Basis
---
# Base Flex

`flex-basis` propriedade `flex-basis` define o tamanho do `flex-item` longo do eixo principal do contêiner flexível. O eixo principal é horizontal se `flex-direction` estiver definida para `row` e será vertical se a propriedade de `flex-direction` estiver definida como `column` .

## Sintaxe

```css
flex-basis: auto | content | <width> | <height>; 
```

## flex-base: auto

`flex-basis: auto` procura o tamanho principal do elemento e define o tamanho. Por exemplo, em um contêiner flexível horizontal, o `auto` procurará `width` e `height` se o eixo do contêiner for vertical.

Se nenhum tamanho for especificado, o `auto` voltará ao `content` .

## flex-base: conteúdo

`flex-basis: content` resolve o tamanho com base no conteúdo do elemento, a menos que a `width` ou `height` seja definida por meio `box-sizing` normal de `box-sizing` .

Nos dois casos em que `flex-basis` é `auto` ou de `content` , se o tamanho principal for especificado, esse tamanho terá prioridade.

## flex-base:

Isso é apenas especificando `width` ou `height` , mas apenas mais flexível. `flex-basis: 20em;` irá definir o tamanho inicial do elemento para `20em` . Seu tamanho final será baseado no espaço disponível, `flex-grow` múltiplo e `flex-shrink` múltiplo.

A especificação sugere o uso de propriedade de taquigrafia `flex` . Isso ajuda a escrever `flex-basis` juntamente com as propriedades `flex-grow` e `flex-shrink` .

## Exemplos

Aqui estão filas de contêineres flexíveis individuais e elementos flexíveis individuais mostrando como a `flex-basis` afeta o `box-sizing` .

![efeito de flex-base no eixo horizontal](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-horizontal.png)

Quando a `flex-direction` do `flex-direction` é a `column` , a mesma `flex-basis` controlará a propriedade `height` . Um exemplo abaixo

![exemplo de base flexível de controle de altura em um recipiente vertical](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-vertical.png)

#### Mais Informações:

Referências adicionais nas seguintes páginas:

*   [Nível de](https://drafts.csswg.org/css-flexbox-1/) especificação CSS [1](https://drafts.csswg.org/css-flexbox-1/)
*   Página da Mozilla Developer Network em [flex-base](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis#content)
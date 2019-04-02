---
title: Flex Property
localeTitle: Propriedade Flex
---
## Propriedade Flex

`flex` propriedade `flex` é uma abreviação para especificar o tamanho de um item flexível. `flex-grow` , `flex-shrink` e `flex-basis` podem ser especificados dentro desta propriedade abreviada.

**Esta propriedade não tem efeito se o elemento não for um `flex-item`** . O item flexível é um elemento que é um filho direto de um pai recipiente com propriedade de exibição como `flex` ou `inline-flex` .

## Sintaxe

Possíveis variações na sintaxe listadas abaixo. `flex-grow` e `flex-shrink` pegam um número inteiro como valor. `flex-basis` leva unidades de tamanho regular, como px, em, rem… etc.

```css
flex: <flex-grow> <flex-shrink> <flex-basis>; 
 flex: <flex-basis>; 
 flex: <flex-grow>; 
 flex: <flex-grow> <flex-basis>; 
 flex: <flex-grow> <flex-shrink>; 
```

`flex-basis` especifica o tamanho do elemento ao longo do eixo principal. Dentro de um contêiner, o eixo principal é definido por `flex-direction` . O eixo principal é horizontal quando o `flex-direction` é `row` . Vertical quando a `flex-direction` do `flex-direction` é `column` .

`flex-basis: 20px` a largura inicial do elemento para `20px` se a `flex-direction` do `flex-direction` fosse `row` . A mesma `flex-basis` se aplicaria à altura se a `fle-direction` for `column` .

`flex: 20px` significaria automaticamente `flex-basis: 20px` , como a propriedade abreviada tem apenas `flex-basis` como a propriedade que pode receber um valor com unit.

`flex: 2` especifica `flex-grow: 2` e o elemento cresceria duas vezes mais ou mais alto que outros elementos com `flex-grow: 1` .

`flex: 1 2` especifica `flex-grow: 1` e `flex-shrink: 2` . O elemento cresce para ocupar espaço vazio em proporção com outros elementos com `flex-grow: 1` mas encolhe duas vezes menor quando comparado a outros elementos com `flex-shrink: 1` quando pressionado contra o espaço.

### Mais Informações

*   referência de propriedade `flex` no [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
---
title: Truthy Value
localeTitle: Valor Truthy
---
Um valor **truthy** é um valor que se traduz em **verdadeira** quando avaliada em um contexto _booleano._

Todos os valores são **verdadeiros, a** menos que sejam definidos como **falsy** (isto é, exceto `false` , `0` , `""` , `null` , `undefined` e `NaN` ).

Alguns valores **truthy** interessantes são:

'0' (uma string contendo um único zero) 'false' (uma string contendo o texto “false”) \[\] (uma matriz vazia) {} (um objeto vazio) function () {} (uma função “vazia”)

Um único valor pode, portanto, ser usado dentro de condições, por exemplo

if (valor) { // value é verdadeiro } outro { // value é falsamente // pode ser falso, 0, '', nulo, indefinido ou NaN }

Veja também: falsy | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
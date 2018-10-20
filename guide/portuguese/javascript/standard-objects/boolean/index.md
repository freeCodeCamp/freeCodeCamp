---
title: Boolean
localeTitle: boleano
---
## boleano

O objeto booleano é um wrapper de objeto para um valor booleano (verdadeiro ou falso). Você pode definir explicitamente um booleano como `new Boolean([value])` . O argumento de `value` opcional é convertido em um valor booleano. Se o valor não for especificado, `0` , `-0` , `null` , `false` , `NaN` , `undefined` ou a cadeia vazia ( `""` ), o objeto será definido como falso. Todos os outros valores, incluindo qualquer objeto ou a string "false", criam um objeto com um valor de true. Uma exceção interessante é quando `document.all` do DOM é passado como um argumento para o construtor `Boolean` , ele é avaliado como `false` 1 .

Valor primitivo booleano ( `true` e `false` ) não é o mesmo que valores de objeto `Boolean` ( `true` e `false` ).

#### Mais Informações:

[A diferença entre objetos booleanos e primitivos booleanos em JavaScript - um gotejamento de JavaScript](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### Fontes

1.  [Você não sabe JavaScript, Capítulo 4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md) , linha: 364. Acessado em 31 de outubro de 2017.
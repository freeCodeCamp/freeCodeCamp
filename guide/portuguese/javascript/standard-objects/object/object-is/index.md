---
title: Object Is
localeTitle: Objeto é
---
# Objeto é

## Descrição

O método `object.is()` é usado para determinar se dois valores são o mesmo valor. Este método foi introduzido no ES6.

## Sintaxe

`Object.is(val1, val2)`

### Parâmetros

**val1** - primeiro valor a comparar

**val2** - segundo valor para comparar

## Valor de retorno

Um [booleano que](https://guide.freecodecamp.org/javascript/booleans) indica se os dois argumentos têm o mesmo valor

## Descrição

`Object.is()` compara dois valores para a igualdade, retornando `true` se ambos os valores atenderem a uma das seguintes condições:

*   `undefined`
*   `null`
*   Ambos são `true` ou `false`
*   Sequência do mesmo comprimento e mesmos caracteres
*   Mesmo objeto
*   Ambos os números e:
*   Ambos `+0` ou ambos `-0`
*   Tanto `NaN`
*   ou ambos um número que não é zero e não `NaN`

## Exemplos

\`\` \`

Object.is ('string', 'string'); // verdade Object.is (indefinido, indefinido); // verdade Object.is (nulo, nulo); // verdade

Object.is ('string,' palavra '); // false Object.is (true, false); // false Object.is (\[\], \[\]); //falso

var obj = {nome: Jane}; Object.is (obj, obj); // verdade

Object.is (NaN, NaN); // verdade

Object.is (+0, -0); // false Object.is (-0, -0); // verdade

\`\` \`

#### Mais Informações:

[Documento da Web MDN Object.is ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) [Operador estrito de igualdade `===`](https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator)
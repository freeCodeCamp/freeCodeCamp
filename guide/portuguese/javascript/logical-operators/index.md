---
title: Logical Operators
localeTitle: Operadores lógicos
---
# Operadores lógicos

Operadores lógicos comparam valores booleanos e retornam uma resposta booleana. Existem dois tipos de operadores lógicos - Logical AND e Logical OR. Esses operadores geralmente são escritos como && para AND e || para OU.

#### Lógica E (&&)

O operador AND compara duas expressões. Se o primeiro avaliar como ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) , a instrução retornará o valor da segunda expressão. Se o primeiro avaliar como ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) , a instrução retornará o valor da primeira expressão.

Quando apenas envolver valores booleanos ( `true` ou `false` ), ele retornará true se apenas as duas expressões forem verdadeiras. Se uma ou ambas as expressões forem falsas, toda a instrução retornará false.

```js
true && true //returns  the second value, true 
 true && false //returns the second value, false 
 false && false //returns the first value, false 
 123 && 'abc' // returns the second value, 'abc' 
 'abc' && null //returns the second value, null 
 undefined && 'abc' //returns the first value, undefined 
 0 && false //returns the first value, 0 
```

#### OR lógico (||)

O operador OR compara duas expressões. Se a primeira for avaliada como "falsy", a instrução retornará o valor da segunda segunda expressão. Se o primeiro avaliar como "truthy", a instrução retornará o valor da primeira expressão.

Quando apenas envolver valores booleanos ( `true` ou `false` ), retorna true se uma das expressões for verdadeira. Ambas as expressões podem ser verdadeiras, mas somente uma é necessária para ser verdadeira como resultado.

```js
true || true //returns the first value, true 
 true || false //returns the first value, true 
 false || false //returns the second value, false 
 123 || 'abc' // returns the first value, 123 
 'abc' || null //returns the first value, 'abc' 
 undefined || 'abc' //returns the second value, 'abc' 
 0 || false //returns the second value, false 
```

#### Avaliação de curto-circuito

&& e || comportam-se como operadores de curto-circuito.

No caso do AND lógico, se o primeiro operando retornar falso, o segundo operando nunca é avaliado e o primeiro operando é retornado.

No caso do OR lógico, se o primeiro valor retornar true, o segundo valor nunca é avaliado e o primeiro operando é retornado.

#### Não lógico (!)

O operador NOT não faz nenhuma comparação como os operadores AND e OR. Além disso, ele é operado apenas em 1 operando.

A '!' (exclamação) é usada para representar o operador NOT.

###### Uso de operadores NOT

1.  conversão da expressão em booleano.
2.  retorna o inverso do valor booleano obtido na última etapa.

```js
var spam = 'rinki'; //spam may be equal to any non empty string 
 var booSpam = !spam; 
 /*returns false 
  since when a non-empty string when converted to boolean returns true 
  inverse of which is evaluated to false. 
 */ 
 
 var spam2 = ''; //spam2 here is equal to empty string 
 var booSpam2 = !spam2; 
 /*returns true 
  since when a empty string when converted to boolean returns false 
  inverse of which is evaluated to true. 
 */ 
```

#### Dicas:

Ambos os operadores lógicos retornarão o valor da última expressão avaliada. Por exemplo:

```js
"cat" && "dog" //returns "dog" 
 "cat" && false //returns false 
 0 && "cat"  //returns 0 (which is a falsy value) 
 
 "cat" || "dog" //returns "cat" 
 "cat" || false //returns "cat" 
 0 || "cat" //returns "cat" 
```

Note que onde `&&` retorna o primeiro valor, `||` retorna o segundo valor e vice-versa.

#### Mais Informações:

*   [Tabela da verdade do Javascript](https://guide.freecodecamp.org/javascript/truth-table)
    
*   [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
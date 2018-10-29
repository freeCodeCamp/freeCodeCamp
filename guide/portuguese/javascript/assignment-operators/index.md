---
title: Assignment Operators
localeTitle: Operadores de atribuição
---
# Operadores de atribuição

Os operadores de atribuição, como o nome sugere, atribuem (ou reatribuem) valores a uma variável. Embora existam algumas variações nos operadores de atribuição, todos eles são construídos a partir do operador básico de atribuição.

## Sintaxe

`x = y;` | Descrição | Necessidade : ---------: |: ---------------------: |: ---------:  
`x` | Variável | Requeridos  
`=` | Operador de atribuição | Requeridos  
`y` | Valor a atribuir à variável | Requeridos

## Exemplos
```
let initialVar = 5;   // Variable initialization requires the use of an assignment operator 
 
 let newVar = 5; 
 newVar = 6;   // Variable values can be modified using an assignment operator 
```

## Variações

Os outros operadores de atribuição são uma forma abreviada de executar alguma operação usando a variável (indicada por x acima) e valor (indicado por y acima) e, em seguida, atribuindo o resultado à própria variável.

Por exemplo, abaixo está a sintaxe para o operador de atribuição de adição:
```
x += y; 
```

Isso é o mesmo que aplicar o operador de adição e reatribuir a soma à variável original (isto é, x), que pode ser expressa pelo seguinte código:
```
x = x + y; 
```

Para ilustrar isso usando valores reais, aqui está outro exemplo de uso do operador de atribuição de adição:
```
let myVar = 5;   // value of myVar: 5 
 myVar += 7;   // value of myVar: 12 = 5 + 7 
```

## Lista completa de operadores de atribuição de Javascript

Operador | Sintaxe | Versão longa  
\------------------------------- | --------- | -------------  
Atribuição | x = y | x = y  
Atribuição de adição | x + = y | x = x + y  
Atribuição de subtração | x - = y | x = x - y  
Atribuição de multiplicação | x \* = y | x = x \* y  
Atribuição de divisão | x / = y | x = x / y  
Atribuição de reabastecimento | x% = y | x = x% y  
Atribuição de exponenciação | x \*\* = y | x = x \*\* y  
Atribuição do turno esquerdo | x << = y | x = x << y Atribuição de turno à direita | x >> = y | x = x >> y  
Atribuição de turno à direita não assinada | x >>> = y | x = x >>> y  
Bitwise AND assignment | x & = y | x = x e y  
Atribuição XOR de bitwise | x ^ = y | x = x ^ y  
Bitwise OU designação | x | = y | x = x | y

### Mais Informações:

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[Link do MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)
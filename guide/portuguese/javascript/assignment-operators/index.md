---
title: Assignment Operators
localeTitle: Operadores de atribuição
---
# Operadores de atribuição

Os operadores de atribuição, como o nome sugere, atribuem (ou reatribuem) valores a uma variável. Embora existam algumas variações nos operadores de atribuição, todos eles são construídos a partir do operador básico de atribuição.

## Sintaxe

`x = y;` | Descrição                   | Necessidade 
 ------- |:--------------------------- | ---------- 
`x`      | Variável                    | Requeridos 
`=`      | Operador de atribuição      | Requeridos 
`y`      | Valor a atribuir à variável | Requeridos 

## Exemplos
```
let initialVar = 5;   // Inicialização da variável requer uso do operador de atribuição 
 
 let newVar = 5; 
 newVar = 6;   // Valores de variáveis podem ser modificados usando o operador de atribuição 
```

## Variações

Os outros operadores de atribuição são uma forma abreviada de executar uma operação usando a variável (indicada por x acima) e valor (indicado por y acima) e, em seguida, atribuindo o resultado à própria variável.

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
let myVar = 5;   // valor de myVar: 5 
 myVar += 7;   // valor de myVar: 12 = 5 + 7 
```

## Lista completa de operadores de atribuição de Javascript

Operador    | Sintaxe | Versão longa  
----------- | ------- | -------------
Atribuição | x = y | x = y  
Atribuição de adição | x + = y | x = x + y  
Atribuição de subtração | x - = y | x = x - y  
Atribuição de multiplicação | x \* = y | x = x \* y  
Atribuição de divisão | x / = y | x = x / y  
Atribuição de reabastecimento | x% = y | x = x% y  
Atribuição de potenciação | x \*\* = y | x = x \*\* y  
Atribuição do deslocação esquerda | x << = y | x = x << y Atribuição de turno à direita | x >> = y | x = x >> y  
Atribuição de deslocação à direita não assinada | x >>> = y | x = x >>> y  
Atribuição de Bitwise AND  | x & = y | x = x e y  
Atribuição de bitwise XOR | x ^ = y | x = x ^ y  
Atribuição de Bitwise OU  | x | = y | x = x | y

### Mais Informações:

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[Ligação do MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)

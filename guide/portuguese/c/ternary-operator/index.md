---
title: Ternary Operator
localeTitle: Operador Ternário
---## Operador Ternário

Os programadores usam operadores ternários em C para tomar decisões em lugar de declarações condicionais, **se** e **mais** . O operador ternário é um operador que leva três argumentos. O primeiro argumento é um argumento de comparação, o segundo é o resultado em uma comparação verdadeira e o terceiro é o resultado em uma comparação falsa. Se isso ajudar você pode pensar no operador como uma forma abreviada de escrever uma instrução if-else.

Aqui está um exemplo simples de tomada de decisão usando **if** e **else** :

```c
int a = 10, b = 20, c; 
 
 if (a < b) { 
    c = a; 
 } 
 else { 
    c = b; 
 } 
 
 printf("%d", c); 
```

Este exemplo leva mais de 10 linhas, mas isso não é necessário. Você pode escrever o programa acima em apenas 3 linhas de código usando o **operador ternário** .

### Sintaxe

`condition ? value_if_true : value_if_false`

A declaração é avaliada para statement\_1 se a condição for verdadeira e statement\_2 caso contrário.

Aqui está o exemplo acima reescrito para usar o operador ternário:

```c
int a = 10, b = 20, c; 
 
 c = (a < b) ? a : b; 
 
 printf("%d", c); 
```

A saída do exemplo deve ser:

```c
10 
```

`c` é igual a `a` , porque a condição `a<b` era verdadeira.

Isso parece bem simples, certo? Observe que `value_if_true` e `value_if_false` devem ter o mesmo tipo e não podem ser instruções completas, mas simplesmente expressões.

O operador ternário também pode ser aninhado da mesma forma que as instruções if-else aninhadas. Considere esta declaração if-else aninhada:

```c
int a = 1, b = 2, ans; 
 if (a == 1) { 
    if (b == 2) { 
        ans = 3; 
    } else { 
        ans = 5; 
    } 
 } else { 
    ans = 0; 
 } 
 printf ("%d\n", ans); 
```

Aqui está o código acima reescrito usando o operador ternário aninhado:

```c
int a = 1, b = 2, ans; 
 ans = (a == 1 ? (b == 2 ? 3 : 5) : 0); 
 printf ("%d\n", ans); 
```

A saída de ambos os códigos acima deve ser:

```c
3 

```
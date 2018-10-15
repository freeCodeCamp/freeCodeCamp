---
title: Conditional Operator
localeTitle: Operador Condicional
---
## Operador Condicional

O operador condicional é um operador ternário, ou seja, ele precisa de 3 operandos. Ele retorna um dos dois valores dependendo do resultado de uma expressão O operador condicional é usado para substituir uma instrução if-else simples.

Sintaxe:

```cpp
  (condition)?(expression-1):(expression-2); 
```

Aqui, a expressão-1 é avaliada quando a condição é verdadeira e a expressão-2 é avaliada quando a condição é falsa. Declaração if-else semelhante seria:

```cpp
if(condition) 
  { 
    expression-1; 
  } 
 else 
  { 
    expression-2; 
  } 
```

Portanto, o operador condicional é muito útil quando você precisa escrever instruções if-else simples. Também pode ser usado em #define pré-processador quando uma condição semelhante é usada em vários locais.

Por exemplo, para encontrar o máximo de dois operadores condicionais numéricos pode ser usado da seguinte forma:

```cpp
#define big(a,b) (a>=b)?a:b 
 
 int maximum,x=5,y=6; // variable to store maximum of two numbers 
 maximum=(x>y)?x:y; // directly using conditional operator 
 maximum=big(x,y); // using the #define preprocessor defined above as big 
```

**Boa sorte para todos vocês**

**Codificação Feliz! :)**

**Sinta-se à vontade para fazer qualquer pergunta sobre a página GitHub do [FreeCodeCamp](https://forum.freecodecamp.org/) ou [sobre o Fórum do FreeCodeCamp.](https://forum.freecodecamp.org/)**
---
title: Conditional Statements
localeTitle: Declarações Condicionais
---# Declarações Condicionais em C

As declarações condicionais também são conhecidas como instruções de ramificação. Eles são assim chamados porque o programa escolhe seguir um ramo ou outro.

## 1\. se declaração

Esta é a forma mais simples das declarações condicionais. Consiste em uma expressão booleana seguida por uma ou mais instruções. Se a expressão booleana for avaliada como **true** , o bloco de código dentro da instrução 'if' será executado. Se a expressão booleana for avaliada como **falsa** , o primeiro conjunto de códigos após o final da instrução 'if' (após a chave de fechamento) será executado.

A linguagem de programação C **_assume qualquer valor diferente de zero e não nulo como true_** e, se for **_zero ou nulo, será assumido como_** valor **_falso_** .

#### Sintaxe

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
```

#### Exemplo

```C
int a = 100; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
```

#### Resultado

`a is less than 200`

## 2\. if… else statement

Se a expressão booleana for avaliada como **verdadeira** , o bloco if será executado, caso contrário, o bloco else será executado.

#### Sintaxe

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
 else 
 { 
    //Block of Statements executed when boolean_expression is false 
 } 
```

#### Exemplo

```C
int a = 300; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
 else 
 { 
    printf("a is more than 200\n"); 
 } 
```

#### Resultado

`a is more than 200`

## 3\. if… else if… else statement

Ao usar if ... else if..else statements, há alguns pontos a serem lembrados -

*   Um **if** pode ter **zero ou um outro** e **deve vir depois de qualquer outro** .
*   Um **se** pode ter **zero para muitos mais se** e eles **devem vir antes do outro** .
*   Uma vez que uma **outra seja** bem-sucedida, nenhum dos outros restantes será testado.

#### Sintaxe

```C
if(boolean_expression_1) 
 { 
    //Block of Statements executed when boolean_expression_1 is true 
 } 
 else if(boolean_expression_2) 
 { 
    //Block of Statements executed when boolean_expression_1 is false and boolean_expression_2 is true 
 } 
 else if(boolean_expression_3) 
 { 
    //Block of Statements executed when both boolean_expression_1 and boolean_expression_2 are false and boolean_expression_3 is true 
 } 
 else 
 { 
    //Block of Statements executed when all boolean_expression_1, boolean_expression_2 and boolean_expression_3 are false 
 } 
```

#### Exemplo

```C
int a = 300; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
 } 
 else if(a == 200) 
 { 
    printf("a is equal to 200\n"); 
 } 
 else if(a == 300) 
 { 
    printf("a is equal to 300\n"); 
 } 
 else 
 { 
    printf("a is more than 300\n"); 
 } 
```

#### Resultado

`a is equal to 300`

## 4\. Aninhada se declaração

É sempre legal na programação C aninhar as instruções if-else, o que significa que você pode usar uma if ou else se a instrução dentro de outra if ou else if statement (s).

#### Sintaxe

```C
if(boolean_expression_1) 
 { 
    //Executed when boolean_expression_1 is true 
    if(boolean_expression_2) 
    { 
      //Executed when both boolean_expression_1 and boolean_expression_2 are true 
    } 
 } 
```

#### Exemplo

```C
int a = 100; 
 int b = 200; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
    if(b == 200) 
    { 
        printf("b is equal to 200\n"); 
    } 
 } 
```

#### Resultado

```bash
a is equal to 100 
 b is equal to 200 
```

## 5\. Switch Case Statement

A instrução switch é frequentemente mais rápida que aninhada se… else (nem sempre). Além disso, a sintaxe da instrução switch é mais clara e fácil de entender.

### Sintaxe do comutador
```
switch (n) 
 { 
    case constant1: 
        // code to be executed if n is equal to constant1; 
        break; 
 
    case constant2: 
        // code to be executed if n is equal to constant2; 
        break; 
        . 
        . 
        . 
    default: 
        // code to be executed if n doesn't match any constant 
 } 
```

Quando é encontrada uma constante de caso que corresponde à expressão do comutador, o controle do programa passa para o bloco de código associado a esse caso.

No pseudocódigo acima, suponha que o valor de n seja igual a constant2. O compilador executará o bloco de código associado à instrução case até o final do bloco de switches ou até que a instrução break seja encontrada.

A instrução break é usada para evitar que o código seja executado no próximo caso.

### Exemplo:
```
// Program to create a simple calculator 
 // Performs addition, subtraction, multiplication or division depending the input from user 
 
 # include <stdio.h> 
 
 int main() 
 { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch(operator) 
    { 
        case '+': 
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber); 
            break; 
 
        case '-': 
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber); 
            break; 
 
        case '*': 
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber); 
            break; 
 
        case '/': 
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/secondNumber); 
            break; 
 
        // operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
```

### Saída
```
Enter an operator (+, -, *,): - 
 Enter two operands: 32.5 
 12.4 
 32.5 - 12.4 = 20.1 
```

O operador '-' inserido pelo usuário é armazenado na variável do operador. E, dois operandos 32.5 e 12.4 são armazenados em variáveis ​​firstNumber e secondNumber, respectivamente.

Então, o controle do programa pula para
```
printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
```

Finalmente, a instrução break termina a instrução switch.

Se a instrução break não for usada, todos os casos após o caso correto serão executados.
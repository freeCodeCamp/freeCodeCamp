---
title: Conditional Statements
localeTitle: Declaraciones condicionales
---
# Declaraciones condicionales en C

Las declaraciones condicionales también se conocen como declaraciones ramificadas. Se llaman así porque el programa elige seguir una rama u otra.

## 1\. si declaración

Esta es la forma más simple de las declaraciones condicionales. Consiste en una expresión booleana seguida de una o más declaraciones. Si la expresión booleana se evalúa como **verdadera** , entonces se ejecutará el bloque de código dentro de la sentencia 'if'. Si la expresión booleana se evalúa como **falsa** , se ejecutará el primer conjunto de código después del final de la sentencia 'if' (después de la llave de cierre).

El lenguaje de programación C **_asume cualquier valor distinto de cero y no nulo como verdadero_** y si es **_cero o nulo, entonces se asume como un_** valor **_falso_** .

#### Sintaxis

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
```

#### Ejemplo

```C
int a = 100; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
```

#### Resultado

`a is less than 200`

## 2\. si ... otra declaración

Si la expresión booleana se evalúa como **verdadera** , entonces se ejecutará el bloque if, de lo contrario, se ejecutará el bloque else.

#### Sintaxis

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

#### Ejemplo

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

## 3\. si ... más si ... otra declaración

Al usar if ... else if ... otras declaraciones, hay algunos puntos a tener en cuenta:

*   Un **si** puede tener **cero o el de alguien más** y **debe aparecer después de cualquier otro si** es.
*   Un ' **si'** puede tener **cero para muchos más si** 's y **deben venir antes que' los demás** .
*   Una vez que una **cosa más** tenga éxito, ninguna de las otras restantes, si son o de otra manera, será probada.

#### Sintaxis

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

#### Ejemplo

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

## 4\. Anidado si declaración

En la programación en C, siempre es legal anidar las declaraciones if-else, lo que significa que puede usar una instrucción if o else en otra instrucción if o else if.

#### Sintaxis

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

#### Ejemplo

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

## 5\. Cambiar la declaración de caso

La instrucción switch a menudo es más rápida que anidada si ... else (no siempre). Además, la sintaxis de la instrucción switch es más limpia y fácil de entender.

### Sintaxis de la caja del interruptor
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

Cuando se encuentra una constante de caso que coincide con la expresión de cambio, el control del programa pasa al bloque de código asociado con ese caso.

En el pseudocódigo anterior, suponga que el valor de n es igual a constante2. El compilador ejecutará el bloque de código asociado con la instrucción de caso hasta el final del bloque de conmutación o hasta que se encuentre la instrucción de interrupción.

La instrucción break se usa para evitar que el código se ejecute en el siguiente caso.

### Ejemplo:
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

### Salida
```
Enter an operator (+, -, *,): - 
 Enter two operands: 32.5 
 12.4 
 32.5 - 12.4 = 20.1 
```

El operador '-' ingresado por el usuario se almacena en la variable del operador. Y, dos operandos 32.5 y 12.4 se almacenan en las variables firstNumber y secondNumber respectivamente.

Luego, el control del programa salta a
```
printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
```

Finalmente, la sentencia break termina la sentencia switch.

Si no se usa la instrucción break, todos los casos después de que se ejecuta el caso correcto.
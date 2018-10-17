---
title: Conditional Statements
localeTitle: Условные заявления
---# Условные утверждения в C

Условные утверждения также известны как ветвящиеся заявления. Они так называются, потому что программа выбирает следовать одной ветке или другой.

## 1\. если утверждение

Это самая простая форма условных утверждений. Он состоит из булевого выражения, за которым следуют одно или несколько операторов. Если выражение Boolean оценивается как **true** , тогда будет выполняться блок кода внутри оператора if. Если выражение Boolean оценивается как **false** , тогда будет выполнен первый набор кода после завершения оператора if (после закрытия фигурной скобки).

C язык программирования **_принимает любые ненулевые и ненулевые значения как истинные,_** а если он равен **_нулю или нулю, то он принимается как ложное_** значение.

#### Синтаксис

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
```

#### пример

```C
int a = 100; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
```

#### Результат

`a is less than 200`

## 2\. если ... else statement

Если логическое выражение оценивается как **true** , тогда будет выполняться блок if, иначе будет выполняться блок else.

#### Синтаксис

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

#### пример

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

#### Результат

`a is more than 200`

## 3\. если ... else if ... else statement

При использовании if ... else if..else утверждений следует иметь в виду несколько моментов -

*   **Если if** может иметь **нуль или одно другое** , оно **должно появиться после любого другого, если оно есть** .
*   **Если if** может иметь **ноль для многих других if** , и они **должны прийти перед else** .
*   Как только **else, если это** удастся, ни одно из оставшихся else if или else не будет проверено.

#### Синтаксис

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

#### пример

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

#### Результат

`a is equal to 300`

## 4\. Вложенное выражение if

В программировании на языке C всегда разрешено вставлять операторы if-else, что означает, что вы можете использовать один оператор if или else if внутри другого if if else if statement (s).

#### Синтаксис

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

#### пример

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

#### Результат

```bash
a is equal to 100 
 b is equal to 200 
```

## 5\. Заключение

Оператор switch часто быстрее, чем вложенный, если ... else (не всегда). Кроме того, синтаксис оператора switch более понятен и понятен.

### Синтаксис корпуса коммутатора
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

Когда найдена константа случая, которая соответствует выражению switch, управление программой переходит к блоку кода, связанному с этим случаем.

В приведенном выше псевдокоде предположим, что значение n равно константе2. Компилятор выполнит блок кода, ассоциированный с оператором case, до конца блока переключателя или до тех пор, пока не будет встречен оператор break.

Оператор break используется для предотвращения использования кода в следующем случае.

### Пример:
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

### Вывод
```
Enter an operator (+, -, *,): - 
 Enter two operands: 32.5 
 12.4 
 32.5 - 12.4 = 20.1 
```

Оператор '-', введенный пользователем, сохраняется в переменной оператора. И два операнда 32.5 и 12.4 хранятся в переменных firstNumber и secondNumber соответственно.

Затем управление программой переходит к
```
printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
```

Наконец, оператор break завершает оператор switch.

Если инструкция break не используется, все случаи после правильного случая выполняются.
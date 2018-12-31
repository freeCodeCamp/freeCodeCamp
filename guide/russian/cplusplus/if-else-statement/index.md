---
title: If-Else Statement
localeTitle: If-Else Statement
---## Что делает заявление If-Else?

*   Оператор If-Else является расширением простого оператора If.
*   В простой инструкции If, если значение тестового выражения ложно, мы пропустим код блока и продолжим наш следующий оператор.
*   Но много раз мы хотим выполнить определенные шаги, если значение тестового выражения ложно.
*   В таких случаях мы используем оператор if-else.

### Общая форма выражения If-Else

```cpp
if (test expression) 
 { 
  //statements that run if the test expression is true 
 } 
 else 
 { 
  //statements that run if the test expression is false 
 } 
```

### Пример выражения If-Else

Если тестовое выражение истинно:

```cpp
int a=10; 
 if (a < 20) // This expression is true, so... 
 { 
  //...the code in this block gets executed, and... 
 } 
 else 
 { 
  //...the code in this block gets skipped. 
 } 
 //program continues 
```

Если тестовое выражение ложно:

```cpp
int a=10; 
 if (a>20) // This expression is false, so this time... 
 { 
  //...this code gets skipped... 
 } 
 else 
 { 
  //...and this code executes instead. 
 } 
 //program continues 
```

### Пример в C ++:

```cpp
//Program to check whether number entered by user is positive or negative 
 #include <iostream> 
 using namespace std; 
 int main() 
 { 
  int no; 
  cout << "Enter a number: " << endl; 
 
  cin >> no; 
 
  // condition to check if number is positive or negative 
  if (no >= 0) // positive 
  { 
    // block if value is true 
    cout << "You entered a positive number: " << no << endl; 
  } 
  else         // negative 
  { 
    // block if value is false 
    cout << "You entered a negative number: " << no << endl; 
  } 
 
  // program continues 
  cout << "This step is always printed" << endl; 
  return 0; 
 } 
```

#### Вывод

*   Когда вводится положительное число:
```
Enter a number: 
 4 
 You entered a positive number: 4 
 This step is always printed 
```

*   Когда вводится отрицательное число:
```
Enter a number: 
 -200 
 You entered a negative number: -200 
 This step is always printed 
```

[Попробуйте сам код](https://repl.it/MzBq)

# **Не стесняйтесь задавать любые вопросы на странице GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) или [форуме FreeCodeCamp.](https://forum.freecodecamp.org/)**

[Попробуйте сам код](https://repl.it/MzBq)

### Использование if ... else if ... else ladder

Если мы должны принимать решения, основанные на более чем одном условии, используя, если иначе. Мы используем else, если условие следующим образом:

```cpp
#include<iostream> 
 int main() 
 { 
    int score; 
    std::cout<<"Enter your score: \n"; 
    std::cin>>score; 
    if(score>=90) 
        std::cout<<"Top performance."; 
    else if(score<90 && score>=70) 
        std::cout<<"Good performance"; 
    else if(score<70 && score>=45) 
        std::cout<<"Average performance"; 
    else if(score<45 && score>=30) 
        std::cout<<"You can improve it."; 
   return 0; 
 } 
```

#### Вывод
```
Enter your score: 
 85 
 Good performance 
```

### Другой пример if ... else if ... else ladder

Предположим, что пользователь вводит два числа, и мы собираемся отобразить, если либо число больше, чем другое. И если ни один не больше другого, тогда мы печатаем утверждение «Оба равны».

В этом scinerio нам понадобится if ... else if ... else ladder statement. Программа будет выглядеть так:
```
#include<iostream> 
 using namespace std; 
 int main() 
 { 
    int number1,number2; 
    cout << "Enter first number: \n"; 
    cin >> number1; 
    cout << "Enter second number: \n"; 
    cin >> number2; 
 
    if(number1 > number2)     // Checks if the first number is greater than the second number 
    { 
        cout << "Number 1 is greater."; 
    } 
    else if(number2 > number1)    // Checks if the second number is greater than the first number 
    { 
        cout << "Number 2 is greater."; 
    } 
    else    // If both of the above cases return false, then both numbers are equal 
    { 
        cout << "Both the numbers are equal."; 
    } 
 
    return 0; 
 } 
```

#### Вывод
```
Enter first number: 
 85 
 Enter second number: 
 86 
 Number 2 is greater. 
```

*   Обратите внимание, что программа будет проверять условие «else if», если условие «если» не выполнено. И если ни одно из этих условий не выполняется, выполняется последний блок «else», который печатает утверждение: «Оба числа равны».
    
*   Размер if ... else if ... else ladder может варьироваться в зависимости от проблемы, которую пытается решить программа, и количества условий, которые необходимо проверить.
    

**Удачи всем вам**

**Счастливое кодирование! :)**

**Не стесняйтесь задавать любые вопросы на странице GitHub [FreeCodeCamp.org](https://forum.freecodecamp.org/) или [на форуме FreeCodeCamp.org](https://forum.freecodecamp.org/)** .
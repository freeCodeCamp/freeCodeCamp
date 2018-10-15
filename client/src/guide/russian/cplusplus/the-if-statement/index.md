---
title: C++ If Statement
localeTitle: C ++ If Statement
---# Утверждение IF.

**Что делает оператор if?**

*   Оператор `if` оценивает тестовое выражение, присутствующее в круглой скобке.
*   Оператор `if` использует реляционные и логические операторы для создания логических выражений.

* * *

Общая форма выражения `if` :

```cpp
  if (Test Expression / Condition) 
  { 
    // Block of statements if test expression is True 
  } 
```

Если значение тестового выражения **истинно** , тогда блок код внутри оператора if.

Если значение тестового выражения **ложно** , то блок код внутри оператора if пропущен и ваш код продолжается.

Пример `if` statement:

```cpp
  int a = 10; 
 
  // true statement 
  if (a < 20) 
  { 
    // execute this block of code 
  } 
 
  // false statement 
  if (a < 0) 
  { 
    // Skip this block of code. 
  } 
```

Пример В C ++:

```cpp
  // Program to check if number entered by the user is positive 
  // If negative, the block of code is skipped 
 
  #include <iostream> 
  using namespace std; 
 
  int main() 
  { 
    int no ; 
    cout << "Enter a number: "; 
    cin >> no; 
 
    // if statement to check if the number is positive 
    if ( no > 0) 
    { 
      cout << "You have entered a positive number: " << no << endl; 
    } 
 
    // If number is not positive, then if statement is skipped a program continues 
    cout << "This step is always printed" << endl; 
 
    return 0; 
  } 
```

**Выход:**

ВЫХОД 1:
```
Enter a number: 5 
 You have entered a positive number: 5 
 This step is always printed 
 ``` 
 This is the output when the number entered is positive. 
 
 OUTPUT 2: 
```

Введите число: -1 Этот шаг всегда печатается \`\` \` Это результат, когда введенный номер отрицательный.

[Попробуйте код самостоятельно! :)](https://repl.it/Mg9X)

_ПОЗДРАВЛЯЕМ. Это конец статьи о заявлении IF_

**Удачи всем вам**

**Счастливое кодирование! :)**

**Не стесняйтесь задавать любые вопросы на странице GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) или [форуме FreeCodeCamp.](https://forum.freecodecamp.org/)**
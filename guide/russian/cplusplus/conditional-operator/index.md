---
title: Conditional Operator
localeTitle: Условный оператор
---
## Условный оператор

Условный оператор - тернарный оператор, т. Е. Ему нужны 3 операнда. Он возвращает одно из двух значений в зависимости от результата выражения Условный оператор используется для замены простых операторов if-else.

Синтаксис:

```cpp
  (condition)?(expression-1):(expression-2); 
```

Здесь выражение-1 оценивается, когда условие истинно, а выражение-2 оценивается, когда условие является ложным. Аналогичным оператором if-else будет:

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

Следовательно, условный оператор очень удобен, когда вам нужно написать простую инструкцию if-else. Его также можно использовать в #define препроцессор, когда подобное условие должно использоваться в нескольких местах.

Например, чтобы найти максимум двух условных операторов, можно использовать следующее:

```cpp
#define big(a,b) (a>=b)?a:b 
 
 int maximum,x=5,y=6; // variable to store maximum of two numbers 
 maximum=(x>y)?x:y; // directly using conditional operator 
 maximum=big(x,y); // using the #define preprocessor defined above as big 
```

**Удачи всем вам**

**Счастливое кодирование! :)**

**Не стесняйтесь задавать любые вопросы на странице GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) или [форуме FreeCodeCamp.](https://forum.freecodecamp.org/)**
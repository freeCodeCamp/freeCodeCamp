---
title: Do...While Loop
localeTitle: Do ... While Loop
---
# Do ... While Loop

`do while` в `while` `do while` это похоже на `while` цикл, но группа отчетности гарантирована запустить по крайней мере один раз перед проверкой данного состояния. Важно отметить, что цикл «while» представляет собой цикл управления выходом. while (это не обязательно будет выполнено), «do while» - это контур, управляемый записью (он будет выполнен хотя бы один раз, даже если условие не соответствует действительности).

```java
do 
 { 
    // Statements 
 } 
 while (condition); 
```

## пример

```java
int iter_DoWhile = 20; 
 do 
 { 
    System.out.print (iter_DoWhile + " "); 
 
    // Increment the counter 
    iter_DoWhile++; 
 } 
 while (iter_DoWhile < 10); 
 System.out.println("iter_DoWhile Value: " + iter_DoWhile); 
```

Вывод:
```
    20 
    iter_DoWhile Value: 21 
```

**Помните** : условие цикла `do-while` while проверяется после того, как тело кода выполняется один раз.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJYl/0)

## Упражнение

Можете ли вы угадать вывод следующего фрагмента кода?

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```
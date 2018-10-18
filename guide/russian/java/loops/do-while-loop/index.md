---
title: Do...While Loop
localeTitle: Цикл Do ... While
---
# Цикл Do ... While

Цикл `do while` похож на цикл `while`, но тело цикла гарантировано выполняется хотя бы один раз перед проверкой условия. Важно отметить, что тело цикла `while` не обязательно будет выполнено, а тело цикла «do while» будет выполнено хотя бы один раз, даже если условие не соответствует действительности.

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": запустить:") [Код примера](https://repl.it/CJYl/0)

## Упражнение

Можете ли вы угадать что будет выведено на экран в результате исполнения следующего фрагмента кода?

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```

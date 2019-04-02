---
title: Break Control Statement
localeTitle: Заявление о нарушении правил
---
# Заявление о нарушении правил

Завершает цикл и запускает выполнение кода, который сразу же следует за циклом. Если у вас есть вложенные циклы, оператор `break` заканчивает цикл, в который он помещается.

```java
// Loop 1 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break; // Will terminate Loop 2, but Loop 1 will keep going 
        } 
    } 
 } 
```

Но если вы хотите выйти из внешнего цикла, вы можете использовать метку для выхода:

```java
loop1: // This is a label 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break loop1; // Will break out of Loop 1, instead of Loop 2 
        } 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZA/0)

операторы `break` могут быть особенно полезны при поиске элемента в массиве. Использование `break` в следующем коде повышает эффективность, поскольку цикл останавливается, как только элемент, который мы ищем ( `searchFor` ), найден, а не продолжается до конца `arrayInts` .

```java
int j = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 for (int i : arrayOfInts) 
 { 
    if (arrayOfInts[j] == searchFor) 
    { 
        break; 
    } 
    j++; 
 } 
 
 System.out.println("j = " + j); 
```

Оператор break также может использоваться под оператором while.

```java
int i = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 while(i < 10){ 
 System.out.println("i = " + j); 
 if(arrayOfInts[i] > 7){ 
  break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZC/0)
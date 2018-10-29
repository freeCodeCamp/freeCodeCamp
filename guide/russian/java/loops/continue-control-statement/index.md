---
title: Continue Control Statement
localeTitle: Продолжить контрольное заявление
---
# Продолжить контрольное заявление

Оператор `continue` заставляет цикл пропускать все следующие строки после продолжения и перейти к началу следующей итерации. В цикле `for` управление переходит к оператору обновления, а через некоторое `while` или `do while` цикл while, управление переходит к логическому выражению / условию.

```java
for (int j = 0; j < 10; j++) 
 { 
    if (j == 5) 
    { 
        continue; 
    } 
    System.out.print (j + " "); 
 } 
```

Значение `j` будет напечатано для каждой итерации, за исключением случаев, когда оно равно `5` . Оператор печати будет пропущен из-за `continue` и вывода:
```
0 1 2 3 4 6 7 8 9 
```

Скажем, вы хотите подсчитать количество `i` s в слове `mississippi` . Здесь вы можете использовать цикл с инструкцией `continue` следующим образом:

```java
String searchWord = "mississippi"; 
 
 // max stores the length of the string 
 int max = searchWord.length(); 
 int numPs = 0; 
 
 for (int i = 0; i < max; i++) 
 { 
    // We only want to count i's - skip other letters 
    if (searchWord.charAt(i) != 'i') 
    { 
        continue; 
    } 
 
    // Increase count_i for each i encountered 
    numPs++; 
 } 
 
 System.out.println("numPs = " + numPs); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZH/0)

Кроме того, вы можете использовать метки для выбора определенного цикла из вложенного набора, чтобы перейти к следующей итерации.
---
title: Variables and Basic Data Types 
localeTitle: Переменные и основные типы данных
---
# Переменные и основные типы данных

## Что такое переменная?

Значения переменных хранятся. В основном вы указываете имя сохраненного значения, которое вы хотите использовать позже. Важно отметить, что одна переменная может одновременно хранить только одно значение. Однако позже вы можете изменить сохраненные значения позже в коде, и вы также можете присвоить значение одной переменной другому.

> Когда вы создаете переменную, она называется `declaring` , и когда вы даете ей значение для хранения, оно называется `assignment` . Если вы даете переменной значение одновременно с объявлением, оно называется `initializing` . C очень суетливый о том, как вы создаете переменные и что вы храните в них. C - это `strongly typed` язык, что означает, что вы должны определять тип и имя для каждой переменной, когда вы ее объявляете. Имя переменной может состоять из букв, цифр и символа подчеркивания.

## Основные типы

В стандарте C есть четыре важных основных типа данных: `int` , `float` , `double` , `char` .

### Целые

Для значений целого числа используется ключевое слово `int` (short для integer). Давайте посмотрим на простую программу:

```C
#include <stdio.h> 
 int main(void){ 
 
 int a; // Declaring a variable which stores integer values and is called 'a' 
 int b = 5; //Initializing an int called 'b' with the value 5 
 a = 6; // Assigning the value 6 to the variable 'a' 
 int c; 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things 
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
 
 return 0; 
 } 
```

Давайте `Some shingy things` что мы сделали под `Some shingy things` :

```C
printf("%d \n", c); 
```

Чтобы распечатать значение переменной `c` , вы можете использовать функцию `printf()` . Обратите внимание на `%d` заключенную в двойные кавычки. Это говорит компьютеру, чтобы он ожидал **d-** значение, и что это после запятой.

```C
printf("%d %d \n", a, b); 
```

Вы можете распечатать несколько целых чисел в порядке, указанном после запятой.

Обратите внимание, что когда вы пытаетесь сохранить десятичное значение в `int` , вы получите только его часть, потому что они будут усечены.

мы также можем написать программу следующим образом:
```
#include <stdio.h> 
 int main(void){ 
 
 int a=3,b=4,c; // we can also assign and declare the values in 1 line 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 
 
 return 0; 
 } 
```

### Поплавки и парные

Чтобы сохранить десятичные значения, вы можете использовать `float` и `double` keywords. Разница между ними - точность, `double` имеет около 13 цифр, а `float` - около 7, но это отличается от CPU до CPU. \`\` \`C #включают int main (void) { double a = 3,23; printf ("Переменная a имеет значение:% f \\ n", a); // Двойные значения могут быть напечатаны с помощью% f return 0; }
```
### Characters 
 You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code: 
```

С

# включают

int main (void) { char a = 'A'; // Инициализируя char со значением «A», обратите внимание на простые кавычки! printf («Символ:% c», a) // Шары могут быть напечатаны с помощью% c return 0; }
```
## The Boolean type 
 Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`. 
```

С

# включают

# включают

int main (void) { bool a = true; bool b = false;

return 0; } \`\` \`

## Комментарии

Тип переменной сообщает компилятору, сколько места для создания (выделения) для переменной. Теперь вы видели основные типы данных, но есть модификаторы для их изменения объема пространства, выделенного для переменной. Модификаторы могут увеличивать или уменьшать значения по умолчанию. C имеет 5 модификаторов: `short` , `long` , `signed` , `unsigned` , `long long` . Они ориентированы на основные типы.
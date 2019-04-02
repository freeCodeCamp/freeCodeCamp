---
title: While-loop
localeTitle: undefined
---
Оператор while while повторно выполняет оператор-мишень, если данное условие истинно.

Синтаксис: while (условие) { заявления); }

Ключевым моментом цикла while является то, что цикл никогда не запускается. Когда условие проверено и результат будет ложным, тело цикла будет пропущено, и первый оператор после цикла while будет выполнен.

Пример:

```C++
#include <iostream>
 using namespace std;

 int main () {
   // Local variable declaration:
   int a = 10;

   // while loop execution
   while( a < 20 ) {
      cout << "value of a: " << a << endl;
      a++;
   }

   return 0;
 }
```

Вывод:

значение a: 10 значение a: 11 значение a: 12 значение a: 13 значение a: 14 значение a: 15 значение a: 16 значение a: 17 значение a: 18 значение a: 19

### источники

www.tutorialspoint.com
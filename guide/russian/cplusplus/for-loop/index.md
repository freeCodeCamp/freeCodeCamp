---
title: For Loop
localeTitle: Для цикла
---
A For Loop - это повторяющийся оператор, который используется для проверки какого-либо условия, а затем на основании условия блок кода выполняется несколько раз, пока не будет выполнено указанное условие.

Цикл for отличается от других операторов циклов через явный счетчик циклов или переменную цикла, которая позволяет телу цикла знать точное упорядочение каждой итерации.

Следовательно, цикл for представляет собой структуру управления повторением, которая позволяет эффективно писать цикл, который должен выполняться определенное количество раз.

## Синтаксис
```
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

Разрешено помещать инкремент в цикл for, как в цикле while. Значение синтаксиса, подобного этому, также может работать.
```
for ( init; condition;) { 
   statement(s); 
   increment; 
 } 
```

### в этом

Этот шаг позволяет объявлять и инициализировать любые переменные управления контуром. Этот шаг выполняется сначала и только один раз.

### состояние

Затем выполняется условие. Если он выполняется, тело цикла выполняется. Если он содержит false, тело цикла не выполняется и поток управляющих переходов на следующую итерацию (повторение процесса).

### Обновить

Оператор update используется для изменения переменной цикла с помощью простых операций, таких как сложение, вычитание, умножение или деление. Заявление об обновлении выполняется после выполнения цикла цикла.

## РЕАЛИЗАЦИЯ:

```cpp
#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "value of a: " << a << endl; 
   } 
 
   return 0; 
 }``` 
 
 Output: 
 value of a: 10 
 value of a: 11 
 value of a: 12 
 value of a: 13 
 value of a: 14 
 value of a: 15 
 value of a: 16 
 value of a: 17 
 value of a: 18 
 value of a: 19 
 
 ##Single lined loop 
 The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement. 
 ##Example 
```

C ++ #включают использование пространства имен std;

int main () { // Одиночная линия для цикла для (int a = 10; a <20; a = a + 1) cout << "значение a:" << a << endl;

return 0; } \`\` \`

Это будет генерировать тот же результат, что и предыдущая программа. т.е. Вывод: значение a: 10 значение a: 11 значение a: 12 значение a: 13 значение a: 14 значение a: 15 значение a: 16 значение a: 17 значение a: 18 значение a: 19
```
## Explanation 
 Here's the initialization condition is first set to a=10. The loop first checks for this condition. It then checks for the condition expression ie a<20 which holds true as 10<20(for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 ie 19. 
 
 # Range-based for-loop 
 C++ also has what we call range-based for loops which iterates through all the elements of a container(eg array). 
 
 ## Syntax 
```

для (элемент: контейнер) заявления); }

int \[5\] array = {1, 2, 3, 4, 5} for (int i: array) cout << i << endl; }

Вывод: 1 2 3 4 5 \`\` \`
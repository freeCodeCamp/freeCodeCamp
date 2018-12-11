---
title: stack
localeTitle: стек
---
## Стеки

`stack` является одним из наиболее используемых контейнеров в C ++. Контейнер представляет собой структуру данных, которая хранит коллекцию объектов, некоторые по порядку, некоторые - нет. Все контейнеры имеют другой набор функций, которые позволяют вам получить доступ к объекту (объектам) в этой коллекции.

`std::stack` является частью стандартной библиотеки C ++ (отсюда и префикс `std::` и позволяет хранить данные в порядке последнего в первом выводе (LIFO). ПРИМЕЧАНИЕ. **Все объекты в стеке должны быть одного типа данных**

Тип данных, который вы храните в стеке, находится в угловых скобках рядом с ключевым словом стека. Например, если вы хотите сохранить коллекцию целых чисел, стек будет `std::stack<int> stack_name`

### Стек LIFO Пояснение

`stack` позволяет нам толкнуть и поп в определенном порядке. **Push** означает, что объект находится в верхней части стека. **Pop** означает вытащить последний вставленный объект из верхней части стека. Поэтому, когда вы нажимаете его вверху, и когда вы поп вы извлекаете последний вставленный элемент.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "Пример LIFO Stack Push и Pop")

### Операции с стеками

Контейнер стека поддерживает следующие операции:

*   От себя
*   поп
*   пустой
*   размер
*   назад

#### От себя

Позволяет вставить новый элемент в верхней части стека, над текущим верхним элементом.

```cpp
//Push operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  return 0; 
 } 
```

#### верхний

Позволяет получить доступ к верхнему элементу, не удаляя его из вашего стека.

```cpp
//Top operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
 
  return 0; 
 } 
```

```
Output: 
 2 
 2 
```

#### поп

Удаляет элемент поверх стека, эффективно уменьшая размер вашего стека на единицу.

```cpp
//Pop operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
```

#### Размер

Возвращает количество элементов в `stack` .

```cpp
//Size operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 0 
```

#### пустой

Возвращает ли `stack` пуст, то есть ли ваш размер стека равен нулю. Он возвращает `true` если размер 0 в стеке возвращает `false`

```cpp
//Empty operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1); 
  s.push(2); 
 
  while(s.empty() != false){ 
      std::cout<<s.top()<<'\n'; 
      s.pop(); 
  } 
 
  std::cout<<"Out of loop"<<'\n'; 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 Out of loop 

```
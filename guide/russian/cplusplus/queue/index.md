---
title: queue
localeTitle: очередь
---
## Очереди

`queue` является одним из наиболее используемых контейнеров в C ++. Контейнер представляет собой структуру данных, которая хранит коллекцию объектов, некоторые по порядку, некоторые - нет. Все контейнеры имеют другой набор функций, которые позволяют вам получить доступ к объекту (объектам) в этой коллекции.

`std::queue` является частью стандартной библиотеки C ++ (отсюда и префикс `std::` и позволяет хранить данные в порядке First In First Out (FIFO). ПРИМЕЧАНИЕ. **Все объекты в очереди должны иметь один и тот же тип данных**

Тип данных, который вы храните в очереди, находится в угловых скобках рядом с ключевым словом очереди. Например, если вы хотите сохранить коллекцию целых чисел, то очередь будет `std::queue<int> queue_name`

### Очередь LIFO Пояснение

`queue` позволяет нам нажимать / вставлять в очередь и поп / деактивировать в определенном порядке. **Push** означает вставку объекта в начале очереди. **Pop** означает вытащить «самый старый» объект из конца очереди. Поэтому, когда вы нажимаете его на передний план, и когда вы поп, вы извлекаете самый старый элемент.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "Пример очереди очереди FIFO и Dequeue")

### Операции в очереди

Контейнер очереди поддерживает следующие операции:

*   push (enqueue)
*   pop (dequeue)
*   пустой
*   размер
*   фронт
*   назад

#### От себя

Позволяет вставлять новый элемент в конце очереди после последнего текущего элемента.

```cpp
//Push operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  return 0; 
 } 
```

#### Фронт

Позволяет получить доступ к следующему элементу в очереди, не удаляя его. Следующий элемент - это «самый старый» элемент в очереди.

```cpp
//Front operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 1 
 1 
```

#### поп

Позволяет удалить следующий элемент в очереди, эффективно уменьшая его размер на единицу. Удаленный элемент является «самым старым» элементом.

```cpp
//Pop operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
 
  return 0; 
 } 
```

```
Output: 
 1 
 2 
```

#### Размер

Возвращает количество элементов в `queue` .

```cpp
//Size operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
 
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

Возвращает, является ли `queue` пустой, т. Е. Будет ли ваш размер очереди равен нулю. Он возвращает `true` если размер очереди 0 else возвращает `false`

\`\` \`cpp // Пустая операция в очереди

# включают // std :: cout

# включают // std :: stack

int main () { станд :: очереди д;

q.push (1); q.push (2);

while (q.empty ()! = true) { станд :: соиЬ << q.front () << '\\ п'; q.pop (); }

std :: cout << "Вне цикла" << '\\ n'; return 0; }
```
    Output: 
    1 
    2 
    Out of loop 
 
 #### Back 
 
 Allows you to access the last element in the queue without removing it. 
 The next element is the "newest" element in the queue. 
```

CPP // Назад в очереди

# включают // std :: cout

# включают // std :: queue

int main () { станд :: очереди д;

q.push (1); // Нажатие 1 перед очередью q.push (2); // Нажатие 2 перед очередью

станд :: соиЬ << q.back () << '\\ п'; // Доступ к задней части очереди станд :: соиЬ << q.back () << '\\ п'; // Доступ к задней части очереди

return 0; } \`\` \`
```
Output: 
 2 
 2 
```

### Дополнительные ресурсы:

http://www.cplusplus.com/reference/queue/queue/

### Цитирование:

Предоставлено: https://en.wikipedia.org/wiki/FIFO _(вычислительная и_ электронная электроника)
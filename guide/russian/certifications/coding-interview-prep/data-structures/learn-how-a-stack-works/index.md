---
title: Learn how a Stack Works
localeTitle: Узнайте, как работает стек
---
## Узнайте, как работает стек

### Метод:

*   Стеки представляют собой абстрактные структуры данных.
*   Они следуют принципу LIFO (Last In First Out) или FILO (First In Last Out).
*   Операции вставки и удаления стека имеют сложность времени **O (1)** .
*   В Javascript массивы можно рассматривать как стек, поскольку `.push()` и `.pop()` имеют временную сложность **O (1)** .
*   В этом вызове нам нужно `.pop()` а затем `.push()` в стек.

### Решение:

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; 
 
 homeworkStack.pop(); 
 homeworkStack.push("CS50"); 
```

### Ссылка:

*   [Википедия](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
*   Видео от [Hackerrank](https://www.youtube.com/watch?v=wjI1WNcIntg)
---
title: Stacks
localeTitle: Стеки
---
## Стеки

Стеки представляют собой структуру данных First In Last Out (FILO). Это линейная структура данных.

Вы можете представить себе стопку, как тарелки были организованы в ресторане "шведский стол". Вы можете выбрать только тарелку сверху, иначе стек рухнет. Как правило, последний элемент, который нужно вставить, будет удален первым.

Некоторые основные операции стека:

1.  Push - Вставляет элемент вверху стека.
2.  Pop - Удаляет элемент в верхней части стека.
3.  isEmpty - проверить, пуст ли пуст или нет.
4.  Размер. Возвращает количество элементов в стеке. (Все операции могут выполняться в O (1) раз)

Реализация стека возможна с использованием массивов или связанных списков. Ниже приведена простая реализация массива структуры данных стека с наиболее распространенными операциями.

```cpp
//Stack implementation using array in C++ 
 //You can also include<stack> and then use the C++ STL Library stack class. 
 
 #include <bits/stdc++.h> 
 
 using namespace std; 
 
 class Stack { 
    int t; 
    int arr[MaxN]; 
 public: 
    Stack() { 
        t = 0; 
    } 
    int size() { 
        return t; 
    } 
    bool isEmpty() { 
        return t < 1; 
    } 
    int top() { 
        return arr[t]; 
    } 
    void push(int x) { 
        if (++t >= MaxN) { 
            cout << "Stack is full" << '\n'; 
            return; 
        } 
        arr[t] = x; 
    } 
    void pop() { 
        arr[t--] = 0; 
    } 
 }; 
 
 int main() { 
    Stack st; 
 
    st.push(4); 
    st.push(3); 
    st.push(5); 
    while (!st.isEmpty()) { 
        cout << st.size() << ' ' << st.top() << '\n'; 
        st.pop(); 
    } 
    return 0; 
 } 
```

#### Использование массивов в виде стеков

В некоторых языках программирования массив имеет функциональность стека, что позволяет разработчику выполнять операции **push** и **pop** без необходимости создания структуры данных пользовательского стека.

Например, массив в JavaScript имеет методы **push** и **pop,** позволяющие легко реализовать функциональность стека в приложении.

```js
stack = []; 
 
 let i = 0; 
 while(i < 5) 
  stack.push(i++); 
 
 while(stack.length) { 
  stack.pop(); 
 } 
```

Список в Python также может выполнять функции стека в приложении. Вместо **push** можно использовать метод **append** .

```python
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    stack.pop() 
```

#### Приложения

*   Поверните рекурсию в цикл.
*   Функции Redo-Undo.
*   Судоку-решатель
*   Глубина первого поиска.
*   Обходы деревьев
*   Выражение Infix -> Префикс / Постфиксное выражение
*   Действительные скобки

#### Дополнительная информация:

*   [Дополнительная информация о Stacks - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
*   [Стек - Википедия](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
*   [Башня Ханой Проблема и то, как в решении используются стеки и рекурсии](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*   [HackerRank стеки и очереди видео](https://www.youtube.com/watch?v=wjI1WNcIntg)
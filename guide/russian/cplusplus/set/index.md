---
title: Set
localeTitle: Задавать
---
Сложная структура данных в c ++ определяется так же, как набор определяется в контексте математики.

Более формально говоря, наборы - это тип ассоциативных контейнеров, в которых каждый элемент должен быть уникальным.

*   Значение элемента не может быть изменено после его ввода, хотя удаление элемента и вставка нового элемента разрешены так же, как мы делаем в математике.
*   Установка структуры данных может быть использована для моделирования, ну, сама устанавливает. Легко найти пересечения, союзы и т. Д.
*   Подобно вектору, но допускаются только уникальные значения.
*   Устанавливает элементы в порядке возрастания, когда вы вставляете элементы в набор.

Файл заголовка, необходимый для использования установленной структуры данных, «установлен». т.е. `#include<set>` должен быть в вашем коде, чтобы вы могли использовать установленную структуру данных.

**Pro tip** : - Используйте `#include<bits/stdc++.h>` чтобы включить все структуры и функции данных C ++ вместо их добавления по одному.  
Некоторые из функций, которые могут выполняться с набором: -

1.  begin () - возвращает итератор в первый элемент в наборе
2.  end () - возвращает итератор к теоретическому элементу, который следует за последним элементом в наборе
3.  size () - возвращает количество элементов в наборе
4.  max\_size () - возвращает максимальное количество элементов, которые может содержать набор
5.  empty () - Возвращает, является ли набор пустым
6.  erase (const g) - удаляет значение 'g' из набора
7.  clear () - Удаляет все элементы из набора

Давайте посмотрим на пример:

```cpp
#include <iostream> 
 #include <set> 
 #include <iterator> 
 
 using namespace std; 
 int main() 
 { 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector. 
 
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
 
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer. 
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
 
 
    // remove all elements up to 65 in myset from the beginning:- 
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    // remove element with value 50 in myset 
 
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0. 
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n"; 
    cout<<"Contents of the modified set:\t"; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    cout << endl; 
 
 
    return 0; 
 
 } 
```

\`\` \`Каст Выход:- Содержимое myset: 9 20 30 65 80

Содержание myset после удаления элементов менее 30: 30 65 80

После выполнения myset.erase (80) удаляется 1 элемент

Содержание модифицированного набора: 30 65 \`\` \`

\### Источники

1.  [Вундеркинды для вундеркиндов](https://www.geeksforgeeks.org/set-in-cpp-stl/)
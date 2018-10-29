---
title: Erase–remove idiom
localeTitle: Стирать-удалить идиому
---
## Desctiprion

Как удалить элементы из контейнера - это общий вопрос об интервью с C ++, поэтому вы можете заработать несколько пунктов коричневого цвета, если внимательно прочитать эту страницу. Идиома erase-remove - это метод C ++ для устранения элементов, которые выполняют определенный критерий из контейнера. Как бы то ни было, можно исключить элементы с традиционным рукописным циклом, но идиома стирания-удаления имеет ряд преимуществ.

### сравнение

```cpp
// Using a hand-written loop 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/) 
 { 
    if (is_odd(*iter)) 
    { 
        iter = v.erase(iter); 
    } 
    else 
    { 
        ++iter; 
    } 
 } 
 
 // Using the erase–remove idiom 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
```

Как вы можете видеть, код с ручным циклом требует немного более типизации, но также имеет проблемы с производительностью. Каждый вызов `erase` должен перемещать все элементы после удаленной, чтобы избежать «пробелов» в коллекции. Вызов `erase` несколько раз на том же самом контейнере создает много накладных расходов на перемещение элементов.

С другой стороны, код с идиомой стирания-удаления не только более выразителен, но и более эффективен. Во-первых, вы используете `remove_if/remove` для перемещения всех элементов, которые не соответствуют критериям удаления, перед фронтом диапазона, сохраняя относительный порядок элементов. Таким образом , после вызова `remove_if/remove` , один вызов `erase` удаляет все остальные элементы в конце диапазона.

### пример

```cpp
#include <vector> // the general-purpose vector container 
 #include <iostream> // cout 
 #include <algorithm> // remove and remove_if 
 
 bool is_odd(int i) 
 { 
    return (i % 2) != 0; 
 } 
 
 void print(const std::vector<int> &vec) 
 { 
    for (const auto& i : vec) 
        std::cout << i << ' '; 
    std::cout << std::endl; 
 } 
 
 int main() 
 { 
    // initializes a vector that holds the numbers from 1-10. 
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
    print(v); 
 
    // removes all elements with the value 5 
    v.erase(std::remove(v.begin(), v.end(), 5), v.end()); 
    print(v); 
 
    // removes all odd numbers 
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
    print(v); 
 
    // removes multiples of 4 using lambda 
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end()); 
    print(v); 
 
    return 0; 
 } 
 
 /* 
 Output: 
 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 6 7 8 9 10 
 2 4 6 8 10 
 2 6 10 
 */ 
```

### источники

«Стереть-удалить идиому» Википедия: свободная энциклопедия. Wikimedia Foundation, Inc. [ru.wikipedia.org/wiki/Erase-remove\_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

Мейерс, Скотт (2001). Эффективный STL: 50 конкретных способов улучшить использование стандартной библиотеки шаблонов. Addison-Wesley.
---
title: Binary Search
localeTitle: Двоичный поиск
---
## Двоичный поиск

Двоичный поиск обнаруживает элемент в отсортированном массиве путем многократного деления интервала поиска пополам.

Как искать имя в телефонной книге?

Один из способов - начать с первой страницы и посмотреть на каждое имя в телефонной книге, пока мы не найдем то, что ищем. Но это был бы чрезвычайно трудоемкий и неэффективный способ поиска.

Поскольку мы знаем, что имена в телефонной книге отсортированы в алфавитном порядке, мы, вероятно, могли бы выполнить следующие шаги:

1.  Откройте среднюю страницу телефонной книги
2.  Если у нас есть имя, которое мы ищем, мы закончили!
3.  В противном случае отбросьте половину телефонной книги, которая не содержит имени
4.  Повторяйте до тех пор, пока вы не найдете имя или больше страниц осталось в телефонной книге

Сложность времени. Поскольку мы удаляем одну часть случая поиска на каждом этапе бинарного поиска и выполняем операцию поиска в другой половине, это приводит к худшей временной сложности _O_ ( _log 2 N_ ).

Космическая сложность: двоичный поиск принимает постоянное или _O_ ( _1_ ) пространство, что означает, что мы не определяем какую-либо переменную, зависящую от размера ввода.

для небольших наборов линейный поиск лучше, но в более крупных методах более эффективно использовать двоичный поиск.

В деталях, сколько раз вы можете разделить N на 2, пока не получите 1? По сути, это означает, что вы выполняете двоичный поиск (половина элементов), пока не найдете его. В формуле это будет следующим:
```
1 = N / 2x 
```

Умножить на 2x:
```
2x = N 
```

Теперь сделайте log2:
```
log2(2x)    = log2 N 
 x * log2(2) = log2 N 
 x * 1       = log2 N 
```

Это означает, что вы можете разделить log N раз, пока не разделите все. Это означает, что вам нужно разделить лог N («выполнить шаг двоичного поиска»), пока не найдете свой элемент.

_O_ ( _log 2 N_ ) такова, что на каждом шаге половина элементов в наборе данных ушла, что оправдано основанием логарифмической функции.

Это алгоритм двоичного поиска. Он элегантен и эффективен, но для правильной работы массив должен быть **отсортирован** .

* * *

Найдите 5 в заданном массиве чисел, используя двоичный поиск.

![Двоичный поиск 1](https://i.imgur.com/QAuugOL.jpg)

Отметьте низкие, высокие и средние позиции в массиве.

![Двоичный поиск 2](https://i.imgur.com/1710fEx.jpg)

Сравните элемент, который вы ищете, с помощью среднего элемента.

![Двоичный поиск 3](https://i.imgur.com/jr4icze.jpg)

Выбросьте левую половину и посмотрите в правую половину.

![Двоичный поиск 4](https://i.imgur.com/W57lGsk.jpg)

Снова сравните с средним элементом.

![Двоичный поиск 5](https://i.imgur.com/5Twm8NE.jpg)

Теперь перейдите в левую половину.

![Двоичный поиск 6](https://i.imgur.com/01xetay.jpg)

Средний элемент - это тот элемент, который мы искали!

Алгоритм бинарного поиска использует подход «разделяй и властвуй», где массив непрерывно делится до тех пор, пока элемент не будет найден или пока не останется больше элементов для проверки. Следовательно, этот алгоритм может быть определен рекурсивно для создания элегантного решения.

Два базовых случая для рекурсии:

*   В массиве осталось больше элементов
*   Элемент найден

Сила двоичного поиска в системах данных (деревья B +): Деревья двоичного поиска очень мощные из-за их времени поиска O (log n), во-вторых, для структуры данных hashmap, которая использует ключ ключа для поиска данных в O (1). Важно понимать, как время выполнения журнала n поступает с высоты двоичного дерева поиска. Если каждый узел разбит на два узла (двоичный), то глубина дерева будет log n (база 2). Чтобы улучшить эту скорость в Data System, мы используем деревья B +, потому что они имеют больший коэффициент ветвления и поэтому больше высота. Я надеюсь, что эта короткая статья поможет вам разобраться в том, как бинарный поиск используется в практических системах.

Код для рекурсивного двоичного поиска показан ниже:

### Реализация Javascript

```javascript
function binarySearch(arr, item, low, high) { 
    if (low > high) { // No more elements in the array. 
        return null; 
    } 
 
    // Find the middle of the array. 
    var mid = Math.ceil((low + high) / 2); 
 
    if (arr[mid] === item) { // Found the item! 
        return mid; 
    } 
 
    if (item < arr[mid]) { // Item is in the half from low to mid-1. 
        return binarySearch(arr, item, low, mid-1); 
    } 
 
    else { // Item is in the half from mid+1 to high. 
        return binarySearch(arr, item, mid+1, high); 
    } 
 } 
 
 var numbers = [1,2,3,4,5,6,7]; 
 print(binarySearch(numbers, 5, 0, numbers.length-1)); 
```

Вот еще одна реализация в Javascript:

```Javascript
function binary_search(a, v) { 
    function search(low, high) { 
        if (low === high) { 
            return a[low] === v; 
        } else { 
            var mid = math_floor((low + high) / 2); 
            return (v === a[mid]) 
                   || 
                   (v < a[mid]) 
                   ? search(low, mid - 1) 
                   : search(mid + 1, high); 
        } 
    } 
    return search(0, array_length(a) - 1); 
 } 
```

### Реализация Ruby

```ruby
def binary_search(target, array) 
  sorted_array = array.sort 
  low = 0 
  high = (sorted_array.length) - 1 
 
  while high >= low 
    middle = (low + high) / 2 
 
    if target > sorted_array[middle] 
      low = middle + 1 
    elsif target < sorted_array[middle] 
      high = middle - 1 
    else 
      return middle 
    end 
  end 
  return nil 
 end 
```

### Пример в C

```C
int binarySearch(int a[], int l, int r, int x) { 
   if (r >= l){ 
        int mid = l + (r - l)/2; 
        if (a[mid] == x) 
            return mid; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
        return binarySearch(arr, mid+1, r, x); 
   } 
   return -1; 
 } 
```

### Реализация C / C ++

```cpp
int binary_search(int arr[], int l, int r, int target) 
 { 
   if (r >= l) 
   { 
        int mid = l + (r - l)/2; 
        if (arr[mid] == target) 
            return mid; 
        if (arr[mid] > target) 
            return binary_search(arr, l, mid-1, target); 
        return binary_search(arr, mid+1, r, target); 
   } 
   return -1; 
 } 
```

### Реализация Python

```Python
def binary_search(arr, l, r, target): 
    if r >= l: 
        mid = l + (r - l)/2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target: 
            return binary_search(arr, l, mid-1, target) 
        else: 
            return binary_search(arr, mid+1, r, target) 
    else: 
        return -1 
```

### Пример в C ++

```cpp
// Binary Search using iteration 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    while(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            beg = mid + 1; 
        else 
            end = mid - 1; 
    } 
    return -1; 
 } 
```

```cpp
// Binary Search using recursion 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    if(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            return binary_search(arr, mid + 1, end, num); 
        else 
            return binary_search(arr, beg, mid - 1, num); 
    } 
    return -1; 
 } 
```

### Пример в C ++

Рекурсивный подход!

\`\` \`C ++ - Рекурсивный подход int binarySearch (int arr \[\], int start, int end, int x) { if (end> = start) { int mid = start + (end-start) / 2; if (arr \[mid\] == x)  
возвращение в середине;
```
    if (arr[mid] > x) 
        return binarySearch(arr, start, mid-1, x); 
 
    return binarySearch(arr, mid+1, end, x); 
```

} return -1; }
```
Iterative approach! 
```

C ++ - Итеративный подход int binarySearch (int arr \[\], int start, int end, int x) { while (start <= end) { int mid = start + (end-start) / 2; if (arr \[mid\] == x) возвращение в середине; if (arr \[mid\] <x) start = mid + 1; еще end = mid - 1; } return -1; } \`\` \`

### Больше информации

*   [Бинарный поиск (видео на YouTube)](https://youtu.be/P3YID7liBug)
*   [Двоичный поиск - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)
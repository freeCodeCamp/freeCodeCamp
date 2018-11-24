---
title: Freecodecamp Algorithm Binary Search Guide
localeTitle: Алгоритм Freecodecamp для двоичного поиска
---
Бинарный поиск - это алгоритм поиска, который находит позицию целевого значения в отсортированном массиве.

## пример

![Двоичный поиск](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

На приведенной выше иллюстрации показана работа алгоритма бинарного поиска в отсортированном массиве, когда целевое значение равно **4** .

## Алгоритм

Двоичный поиск работает на отсортированных массивах. Бинарный поиск начинается с сравнения среднего элемента массива с целевым значением. Если целевое значение соответствует среднему элементу, возвращается его позиция в массиве. Если целевое значение меньше или больше среднего элемента, поиск продолжает нижнюю или верхнюю половину массива соответственно новому среднему элементу, исключая вторую часть из рассмотрения.

Псевдокод для алгоритма бинарного поиска выглядит следующим образом:
```
BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) { 
  low = 0 
  high = N - 1 
  while (low <= high) { 
    // invariants: value > A[i] for all i < low 
                   value < A[i] for all i > high 
    mid = (low + high) / 2 
    if (A[mid] > value) 
      high = mid - 1 
    else if (A[mid] < value) 
      low = mid + 1 
    else 
      return mid 
  } 
  return not_found // value would be inserted at index "low" 
 } 
```

## сложность

*   Наихудшая производительность: **O (log n)**
*   Лучшая производительность: **O (1)**
*   Средняя производительность: **O (log n)**
*   Худшая сложность пространства: **O (1)** для итеративного; **O (log n)** для рекурсивного.

## Реализация C ++
```
int binarySearch(int arr[], int value, int left, int right) { 
  int middle; 
  while (left <= right) { 
    middle = (left + right) / 2; 
    if (arr[middle] == value) 
      return middle; 
    else if (arr[middle] > value) 
      right = middle - 1; 
    else 
      left = middle + 1; 
  } 
  return -1; 
 } 
```

: rocket: \[Run Code ## Python Implementation
```
def binary_search(l, value): 
    low = 0 
    high = len(l)-1 
    while low <= high: 
        mid = (low+high)//2 
        if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1 
        elif l[mid] < value: low = mid+1 
        else: return mid 
    return -1 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CWZi/2)
---
title: Bubble Sort
localeTitle: Сортировка пузырьком
---
## Сортировка пузырьком

Bubble Sort - это самый простой алгоритм сортировки, который работает путем многократной замены соседних элементов, если они находятся в неправильном порядке.

Это очень медленный алгоритм сортировки по сравнению с такими алгоритмами, как quicksort, с наихудшей сложностью O (n ^ 2). Однако компромисс заключается в том, что сортировка пузырьком - один из самых простых алгоритмов сортировки для реализации с нуля.

### Пример:

#### Первый проход:

(5 1 4 2 8) -> (1 5 4 2 8). Здесь алгоритм сравнивает первые два элемента и свопы с 5> 1.

(1 5 4 2 8) -> (1 4 5 2 8), своп с 5> 4

(1 4 5 2 8) -> (1 4 2 5 8), своп с 5> 2

(1 4 2 5 8) -> (1 4 2 5 8). Теперь, поскольку эти элементы уже в порядке (8> 5), алгоритм их не заменяет.

#### Второй проход:

(1 4 2 5 8) -> (1 4 2 5 8)

(1 4 2 5 8) -> (1 2 4 5 8), своп с 4> 2

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

Теперь массив уже отсортирован, но наш алгоритм не знает, завершен ли он. Алгоритму нужен один полный проход без обмена, чтобы знать, что он отсортирован.

#### Третий проход:

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

#### свойства

*   Сложность пространства: O (1)
*   Лучшая производительность: O (n)
*   Средняя производительность: O (n \* n)
*   Наихудшая производительность: O (n \* n)
*   Стабильный: Да

### Объяснение видео

[Сортировка пузырьком легким способом](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

Этот код будет использовать сортировку пузырьком для сортировки массива.

```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9]; 
 let sorted = false 
 
 while(!sorted) { 
  sorted = true 
  for(var i=0; i < arr.length; i++) { 
    if(arr[i] < arr[i-1]) { 
      let temp = arr[i]; 
      arr[i] = arr[i-1]; 
      arr[i-1] = temp; 
      sorted = false; 
    } 
  } 
 } 
```

### Свойства:

*   Пространственная сложность: O (1)
*   Сложность времени: O (n), O (n \* n), O (n \* n) для наилучших, средних и худших случаев соответственно.
*   На месте: Да
*   Стабильный: Да

\======= Вот алгоритм, написанный на Java.

```java
public class bubble-sort { 
    static void sort(int[] arr) { 
        int n = arr.length; 
        int temp = 0; 
         for(int i=0; i < n; i++){ 
                 for(int x=1; x < (ni); x++){ 
                          if(arr[x-1] > arr[x]){ 
                                 temp = arr[x-1]; 
                                 arr[x-1] = arr[x]; 
                                 arr[x] = temp; 
                         } 
 
                 } 
         } 
 
    } 
    public static void main(String[] args) { 
 
        for(int i=0; i < 15; i++){ 
            int arr[i] = (int)(Math.random() * 100 + 1); 
        } 
 
                System.out.println("array before sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
                bubbleSort(arr); 
                System.out.println("\n array after sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
 
        } 
 } 
```

\=======

### Рекурсивная реализация Bubble Sort.

```cpp
void bubblesort(int arr[], int n) 
 { 
    if(n==1)    //Исходный случай 
        return; 
 
    for(int i=0;i<n-1;i++)  //После этого цикла самый большой элемент будет перемещен на желаемое месторасположение. 
    { 
        if(arr[i]>arr[i+1]) 
        { 
            temp=arr[i]; 
            arr[i]=arr[i+1]; 
            arr[i+1]=temp; 
        } 
    } 
 
    bubblesort(arr,n-1);    //Рекурсия для оставшегося массива
 } 
```

### Больше информации

*   [Википедия](https://en.wikipedia.org/wiki/Bubble_sort)
*   [Алгоритм сортировки пузырьком - CS50](https://youtu.be/Ui97-_n5xjo)
*   [Алгоритм сортировки пузырьком - GeeksForGeeks (статья)](http://www.geeksforgeeks.org/bubble-sort)
*   [Алгоритм сортировки пузырьком - MyCodeSchool (видео)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
*   [Алгоритмы: Bubble Sort - HackerRank (видео)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
*   [Алгоритм сортировки пузырьком - GeeksForGeeks (видео)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
*   [Визуализация сортировки пузырьком](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

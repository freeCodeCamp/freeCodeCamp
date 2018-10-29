---
title: Freecodecamp Algorithm Insertion Sort Guide
localeTitle: Руководство по настройке сортировки алгоритма Freecodecamp
---
Сортировка вставки - это [сортировка, основанная](https://en.wikipedia.org/wiki/Comparison_sort) на [_сравнении_](https://en.wikipedia.org/wiki/Comparison_sort) . Алгоритм сортировки основан на сопоставлении, если он использует операторы сравнения (например, `less than` и `greated than` ), чтобы найти порядок между двумя числами.

В этом методе сортировки мы всегда сохраняем отсортированный подсписок в нижней позиции списка, а затем берем один элемент из остальной части списка и вставляем его в нужное место. Мы делаем это до тех пор, пока все элементы не будут вставлены в подсписку. Например, играя в карты, мы сортируем карты в наших руках. Начиная с левой стороны и перемещаясь вправо, мы продолжаем вставлять карту в нужное место до конца.

## пример

![Вставка Сортировка](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

В приведенном выше примере `grey shaded` подсписчик всегда сортируется. Обратите внимание, что в начале подсписка содержит только один элемент и _тривиально_ сортируется. Затем на каждом шаге мы вставляем самый левый элемент `white shaded` подсписка в правильном положении.

Следовательно, мы отсортировали полный список таким образом.

## Алгоритм
```
Loop for i=0 to N-1: 
 * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1] 
```

## сложность
```
Space complexity: O(1)      // Auxillary/temporary space is used. 
 
 Time complexity: O(n*n)     // Two nested for loops are used. 
```

## Реализация C ++
```
// Function to sort an array using insertion sort 
 void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
 
       /* Move elements of arr[0..i-1], that are greater than key, 
      to one position ahead of their current position */ 
   while (j >= 0 && arr[j] > key) 
   { 
       arr[j+1] = arr[j]; 
       j = j-1; 
   } 
   arr[j+1] = key; // place element key at it's correct place 
   } 
 } 
 
 int main() 
 { 
    // array to be sorted 
    int arr[5] = {12, 11, 13, 5, 6}; 
 
    // call the insertion sort 
 insertionSort(arr, 5); 
 
 // prints sorted array ie 5 6 11 12 13 
 for(int i=0; i<5; i++) 
    std::cout << arr[i] << " "; 
 return 0; 
 } 
```

: rocket: \[Run Code ## Python Implementation
```
# Function to perform insertion sort 
 def insertionSort(arr): 
    # Traverse through array 
    for i in range(1, len(arr)): 
        key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i] 
        # Move elements of arr[0..i-1], that are greater than key, 
        # to one position ahead of their current position 
        j = i-1 
        while j>=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key # place element key at it's correct place 
 
 # array to be sorted 
 arr = [12, 11, 13, 5, 6] 
 # call the insertion sort 
 insertionSort(arr) 
 # prints sorted array ie 5 6 11 12 13 
 for i in range(len(arr)): 
    print(arr[i],end = ' ') 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CWZi)

## преимущества

1.  Эффективен для небольшого набора данных и набора данных, которые почти сортируются.
2.  Просто реализовано.
3.  В основном лучше, чем сортировка и сортировка пузырьков и обычно используется при сортировке слияния.

## Недостатки

1.  Он менее эффективен для большого набора данных, чем сортировка слияния, сортировка кучи и быстрая сортировка.
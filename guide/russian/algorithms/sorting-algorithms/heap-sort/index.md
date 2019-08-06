---
title: Heapsort
localeTitle: Пирамидальная сортировка
---
## Пирамидальная сортировка

Heapsort - эффективный алгоритм сортировки, основанный на использовании кучи max / min. Куча - это древовидная структура данных, которая удовлетворяет свойству кучи - то есть для максимальной кучи, ключ любого узла меньше или равен ключу его родителя (если у него есть родительский элемент). Это свойство можно использовать для доступа к максимальному элементу в куче в времени O (logn) с использованием метода maxHeapify. Мы выполняем эту операцию n раз, каждый раз перемещая максимальный элемент в куче до вершины кучи и извлекаем ее из кучи и сортировать массив. Таким образом, после n итераций мы будем иметь отсортированную версию входного массива. Этот алгоритм работает в O (nlogn) времени и O (1) дополнительное пространство \[O (n), включая пространство, необходимое для хранения входных данных\], поскольку все операции выполняются полностью на месте.

Наихудшим и средним по времени случаем Хэпсорт является O (nlogn). Несмотря на то, что у heapsort есть более худшая сложность, чем quicksort, хорошо реализованная quicksort работает быстрее на практике. Это алгоритм на основе сравнения, поэтому его можно использовать для нечетных наборов данных, поскольку для элементов может быть определено некоторое отношение (свойство кучи).

Реализация на Java приведена ниже:

```java
import java.util.Arrays; 
 public class Heapsort { 
 
    public static void main(String[] args) { 
        //test array 
        Integer[] arr = {1, 4, 3, 2, 64, 3, 2, 4, 5, 5, 2, 12, 14, 5, 3, 0, -1}; 
        String[] strarr = {"hope you find this helpful!", "wef", "rg", "q2rq2r", "avs", "erhijer0g", "ewofij", "gwe", "q", "random"}; 
        arr = heapsort(arr); 
        strarr = heapsort(strarr); 
        System.out.println(Arrays.toString(arr)); 
        System.out.println(Arrays.toString(strarr)); 
    } 
 
    //O(nlogn) TIME, O(1) SPACE, NOT STABLE 
    public static <E extends Comparable<E>> E[] heapsort(E[] arr){ 
        int heaplength = arr.length; 
        for(int i = arr.length/2; i>0;i--){ 
            arr = maxheapify(arr, i, heaplength); 
        } 
 
        for(int i=arr.length-1;i>=0;i--){ 
            E max = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = max; 
            heaplength--; 
            arr = maxheapify(arr, 1, heaplength); 
        } 
 
        return arr; 
    } 
 
    //Creates maxheap from array 
    public static <E extends Comparable<E>> E[] maxheapify(E[] arr, Integer node, Integer heaplength){ 
        Integer left = node*2; 
        Integer right = node*2+1; 
        Integer largest = node; 
 
        if(left.compareTo(heaplength) <=0 && arr[left-1].compareTo(arr[node-1]) >= 0){ 
            largest = left; 
        } 
        if(right.compareTo(heaplength) <= 0 && arr[right-1].compareTo(arr[largest-1]) >= 0){ 
            largest = right; 
        } 
        if(largest != node){ 
            E temp = arr[node-1]; 
            arr[node-1] = arr[largest-1]; 
            arr[largest-1] = temp; 
            maxheapify(arr, largest, heaplength); 
        } 
        return arr; 
    } 
 } 
```

реализация в C ++

```cpp
#include <iostream> 
 using namespace std; 
 void heapify(int arr[], int n, int i) 
 { 
    int largest = i; 
    int l = 2*i + 1; 
    int r = 2*i + 2; 
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
    if (largest != i) 
    { 
        swap(arr[i], arr[largest]); 
 
 
        heapify(arr, n, largest); 
    } 
 } 
 
 
 void heapSort(int arr[], int n) 
 { 
 
    for (int i = n / 2 - 1; i >= 0; i--) 
        heapify(arr, n, i); 
 
 
    for (int i=n-1; i>=0; i--) 
    { 
 
        swap(arr[0], arr[i]); 
 
 
        heapify(arr, i, 0); 
    } 
 } 
 void printArray(int arr[], int n) 
 { 
    for (int i=0; i<n; ++i) 
        cout << arr[i] << " "; 
    cout << "\n"; 
 } 
 int main() 
 { 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
 
    heapSort(arr, n); 
 
    cout << "Sorted array is \n"; 
    printArray(arr, n); 
 } 
```

### Визуализация

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)

#### Дополнительная информация:

*   [Википедия](https://en.wikipedia.org/wiki/Quicksort)
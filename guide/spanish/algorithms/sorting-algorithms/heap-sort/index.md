---
title: Heapsort
localeTitle: Heapsort
---
## Heapsort

Heapsort es un algoritmo de clasificación eficiente basado en el uso de montones de max / min. Un montón es una estructura de datos basada en árbol que satisface la propiedad del montón, es decir, para un montón máximo, la clave de cualquier nodo es menor o igual que la clave de su padre (si tiene un padre). Esta propiedad se puede aprovechar para acceder al elemento máximo en el montón en tiempo O (logn) utilizando el método maxHeapify. Realizamos esta operación n veces, cada vez moviendo el elemento máximo en el montón a la parte superior del montón y extrayéndolo del montón a una matriz ordenada. Por lo tanto, después de n iteraciones tendremos una versión ordenada de la matriz de entrada. Este algoritmo se ejecuta en tiempo O (nlogn) y O (1) espacio adicional \[O (n), incluido el espacio requerido para almacenar los datos de entrada\], ya que todas las operaciones se realizan completamente en el lugar.

La complecidad de tiempo de caso peor y promedio de Heapsort es O (nlogn). A pesar de que heapsort tiene una complejidad de caso peor que la de quicksort, un quicksort bien implementado se ejecuta más rápido en la práctica. Este es un algoritmo basado en la comparación, por lo que se puede usar para conjuntos de datos no numéricos en la medida en que se pueda definir alguna relación (propiedad del montón) sobre los elementos.

Una implementación en Java se muestra a continuación:

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

implementación en C ++

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

### Visualización

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)

#### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
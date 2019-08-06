---
title: Heapsort
localeTitle: Heapsort
---
## Heapsort

O Heapsort é um algoritmo de classificação eficiente baseado no uso de pilhas máximas / mínimas. Um heap é uma estrutura de dados baseada em árvore que satisfaz a propriedade heap - ou seja, para um heap máximo, a chave de qualquer nó é menor ou igual à chave de seu pai (se tiver um pai). Essa propriedade pode ser aproveitada para acessar o elemento máximo no heap no tempo O (logn) usando o método maxHeapify. Realizamos essa operação n vezes, cada vez movendo o elemento máximo no heap para o topo do heap e extraindo-o do heap para um array ordenado. Assim, após n iterações, teremos uma versão ordenada do array de entrada. Esse algoritmo é executado em tempo O (nlogn) e O (1) espaço adicional \[O (n), incluindo o espaço necessário para armazenar os dados de entrada\], uma vez que todas as operações são executadas inteiramente no local.

A pior e a média de tempo de caso do Heapsort é O (nlogn). Embora o heapsort tenha uma complexidade de pior caso pior que o quicksort, um quicksort bem implementado é executado mais rapidamente na prática. Este é um algoritmo baseado em comparação para que possa ser usado para conjuntos de dados não-numéricos na medida em que alguma relação (propriedade de heap) possa ser definida sobre os elementos.

Uma implementação em Java é mostrada abaixo:

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

implementação em C ++

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

### Visualização

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)

#### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
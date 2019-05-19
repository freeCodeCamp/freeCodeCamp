---
title: Merge Sort
localeTitle: Combinar clasificación
---
## Combinar clasificación

Merge Sort es un algoritmo de [Dividir y Conquistar](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms) . Divide la matriz de entrada en dos mitades, se llama a sí misma para las dos mitades y luego combina las dos mitades clasificadas. A la mayor parte del algoritmo se le asignan dos matrices ordenadas, tenemos que fusionarlas en una sola matriz ordenada. Hay algo conocido como el [algoritmo de dos dedos](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) que nos ayuda a unir dos matrices ordenadas juntas. Usar esta subrutina y llamar a la función de ordenamiento de combinación en las mitades de la matriz de forma recursiva nos dará la matriz ordenada final que estamos buscando.

Dado que este es un algoritmo basado en recursión, tenemos una relación de recurrencia para él. Una relación de recurrencia es simplemente una forma de representar un problema en términos de sus subproblemas.

`T(n) = 2 * T(n / 2) + O(n)`

Poniéndolo en un lenguaje sencillo, dividimos el subproblema en dos partes en cada paso y tenemos una cantidad lineal de trabajo que tenemos que hacer para unir las dos mitades clasificadas en cada paso.
```
T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
```

Contando el número de repeticiones de n en la suma al final, vemos que hay lg n + 1 de ellas. Por lo tanto, el tiempo de ejecución es n (lg n + 1) = n lg n + n. Observamos que n lg n + n <n lg n + n lg n = 2n lg n para n> 0, por lo que el tiempo de ejecución es O (n lg n).

```
MergeSort(arr[], left,  right): 
 If right > l: 
     1. Find the middle point to divide the array into two halves: 
             mid = (left+right)/2 
     2. Call mergeSort for first half: 
             Call mergeSort(arr, left, mid) 
     3. Call mergeSort for second half: 
             Call mergeSort(arr, mid+1, right) 
     4. Merge the two halves sorted in step 2 and 3: 
             Call merge(arr, left, mid, right) 
 ``` 
 
 ![Merge Sort Algorithm](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/300px-Merge_sort_algorithm_diagram.svg.png) 
 
 ### Properties: 
 * Space Complexity: O(n) 
 * Time Complexity: O(n*log(n)). The time complexity for the Merge Sort might not be obvious from the first glance. The log(n) factor that comes in is because of the recurrence relation we have mentioned before. 
 * Sorting In Place: No in a typical implementation 
 * Stable: Yes 
 * Parallelizable :yes (Several parallel variants are discussed in the third edition of Cormen, Leiserson, Rivest, and Stein's Introduction to Algorithms.) 
 
 ### Visualization: 
 * <a href='https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html'>USFCA</a> 
 * <a href='https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/'>HackerEarth</a> 
 
 
 ### Relavant videos on freeCodeCamp YouTube channel 
 * <a href='https://youtu.be/TzeBrDU-JaY'>Merge Sort algorithm - MyCodeSchool</a> 
 
 ### Other Resources: 
 * <a href='https://en.wikipedia.org/wiki/Merge_sort' target='_blank' rel='nofollow'>Wikipedia</a> 
 * <a href='www.geeksforgeeks.org/merge-sort' target='_blank' rel='nofollow'>GeeksForGeeks</a> 
 * <a href='https://youtu.be/sWtYJv_YXbo' target='_blank' rel='nofollow'>Merge Sort - CS50</a> 
 
 ### Implementaion in JS 
```

js const list = \[23, 4, 42, 15, 16, 8, 3\]

const mergeSort = (list) => { if (list.length <= 1) return list; const middle = list.length / 2; const left = list.slice (0, middle); const right = list.slice (middle, list.length); devuelve merge (mergeSort (izquierda), mergeSort (derecha)); }

const merge = (izquierda, derecha) => { var resultado = \[\]; while (left.length || right.length) { if (left.length && right.length) { si (izquierda \[0\] <derecha \[0\]) { result.push (left.shift ()) } else { result.push (right.shift ()) } } else if (left.length) { result.push (left.shift ()) } else { result.push (right.shift ()) } } resultado de retorno }

console.log (mergeSort (lista)) // \[3, 4, 8, 15, 16, 23, 42\]
```
### Implementation in C 
```

do

# incluir

# incluir

fusión de vacíos (int arr \[\], int l, int m, int r) { int i, j, k; int n1 = m - l + 1; int n2 = r - m;
```
int L[n1], R[n2]; 
 
 for (i = 0; i < n1; i++) 
    L[i] = arr[l + i]; 
 for (j = 0; j < n2; j++) 
    R[j] = arr[m + 1+ j]; 
 i = 0; 
 j = 0; 
 k = l; 
 while (i < n1 && j < n2) 
 { 
    if (L[i] <= R[j]) 
    { 
        arr[k] = L[i]; 
        i++; 
    } 
    else 
    { 
        arr[k] = R[j]; 
        j++; 
    } 
    k++; 
 } 
 
 
 while (i < n1) 
 { 
    arr[k] = L[i]; 
    i++; 
    k++; 
 } 
 
 while (j < n2) 
 { 
    arr[k] = R[j]; 
    j++; 
    k++; 
 } 
```

}

void mergeSort (int arr \[\], int l, int r) { si (l <r) {  
int m = l + (rl) / 2;
```
    mergeSort(arr, l, m); 
    mergeSort(arr, m+1, r); 
 
    merge(arr, l, m, r); 
 } 
```

} void printArray (int A \[\], tamaño int) { int i; para (i = 0; i <tamaño; i ++) printf ("% d", A \[i\]); printf ("\\ n"); } int main () { int arr \[\] = {12, 11, 13, 5, 6, 7}; int arr\_size = sizeof (arr) / sizeof (arr \[0\]);
```
printf("Given array is \n"); 
 printArray(arr, arr_size); 
 
 mergeSort(arr, 0, arr_size - 1); 
 
 printf("\nSorted array is \n"); 
 printArray(arr, arr_size); 
 return 0; 
```

```
### Implementation in C++ 
 
 Let us consider array A = {2,5,7,8,9,12,13} 
 and array B = {3,5,6,9,15} and we want array C to be in ascending order as well. 
```

c ++ void mergesort (int A \[\], int tamaño _a, int B \[\], int tamaño_ b, int C \[\]) { int token _a, token_ b, token _c; para (token_ a = 0, token _b = 0, token_ c = 0; token _a_ _to && token _b__ __segundo; ) { if (A \[token _a\] <= B \[token_ b\]) C \[token _c ++\] = A \[token_ a ++\]; más C \[token _c ++\] = B \[token_ b ++\]; }__
```
  if(token_a<size_a) 
  { 
      while(token_a<size_a) 
           C[token_c++]=A[token_a++]; 
  } 
  else 
  { 
      while(token_b<size_b) 
           C[token_c++]=B[token_b++]; 
  } 
```

}
```
### Implementation in Python 
```

pitón temp = ninguno def fusionar (arr, izquierda, derecha): temp global, inversiones mid = (izquierda + derecha) // 2 para i en rango (izquierda, derecha + 1): temp \[i\] = arr \[i\]
```
k, L, R = left, left, mid + 1 
 while L <= mid and R <= right: 
    if temp[L] <= temp[R]: 
        arr[k] = temp[L] 
        L += 1 
    else: 
        arr[k] = temp[R] 
        R += 1 
    k += 1 
 
 while L <= mid: 
    arr[k] = temp[L] 
    L += 1 
    k += 1 
 
 while R <= right: 
    arr[k] = temp[R] 
    R += 1 
    k += 1 
```

def merge\_sort (arr, izquierda, derecha): si es izquierdo> = derecho: regreso
```
mid = (left + right) // 2 
 merge_sort(arr, left, mid) 
 merge_sort(arr, mid + 1, right) 
 merge(arr, left, right) 
```

arr = \[1,6,3,1,8,4,2,9,3\] temp = \[Ninguno para \_ en rango (len (arr))\] merge\_sort (arr, 0, len (arr) - 1) imprimir (arr, inversiones) \`\` \`
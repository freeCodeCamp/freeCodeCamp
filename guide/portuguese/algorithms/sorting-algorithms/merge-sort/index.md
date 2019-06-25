---
title: Merge Sort
localeTitle: Merge Sort
---
## Merge Sort

Merge Sort é um algoritmo [Divide and Conquer](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms) . Ele divide a matriz de entrada em duas metades, chama-se para as duas metades e, em seguida, mescla as duas metades classificadas. A maior parte do algoritmo recebe dois arrays ordenados, temos que mesclá-los em um único array ordenado. Existe algo conhecido como o [Algoritmo de Dois Dedos](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) que nos ajuda a juntar duas matrizes ordenadas. Usando esta sub-rotina e chamando a função de mesclagem de mesclagem nas metades da matriz recursivamente nos dará a matriz ordenada final que estamos procurando.

Como esse é um algoritmo baseado em recursão, temos uma relação de recorrência para ele. Uma relação de recorrência é simplesmente uma maneira de representar um problema em termos de seus subproblemas.

`T(n) = 2 * T(n / 2) + O(n)`

Colocando-o em inglês simples, dividimos o subproblema em duas partes em cada etapa e temos uma quantidade linear de trabalho que temos que fazer para mesclar as duas metades classificadas juntas em cada etapa.
```
T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
```

Contando o número de repetições de n na soma no final, vemos que há lg n + 1 delas. Assim, o tempo de execução é n (lg n + 1) = n l n n + n. Observamos que n ng n + n <n lg n + n lg n = 2n lg n para n> 0, então o tempo de execução é O (n lg n).

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

js lista const = \[23, 4, 42, 15, 16, 8, 3\]

const mergeSort = (lista) => { if (list.length <= 1) lista de retorno; const middle = list.length / 2; const left = list.slice (0, middle); const right = list.slice (meio, list.length); mesclagem de retorno (mergeSort (esquerda), mergeSort (direita)); }

const merge = (esquerda, direita) => { var result = \[\]; while (left.length || right.length) { if (left.length && right.length) { if (esquerda \[0\] <direita \[0\]) { result.push (left.shift ()) } outro { result.push (right.shift ()) } } else if (left.length) { result.push (left.shift ()) } outro { result.push (right.shift ()) } } resultado de retorno; }

console.log (mergeSort (list)) // \[3, 4, 8, 15, 16, 23, 42\]
```
### Implementation in C 
```

C

# incluir

# incluir

mesclagem vazia (int arr \[\], int l, int m, int r) { int i, j, k; int n1 = m - l + 1; int n2 = r - m;
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

void mergeSort (int arr \[\], int l, int r) { if (l <r) {  
int m = l + (rl) / 2;
```
    mergeSort(arr, l, m); 
    mergeSort(arr, m+1, r); 
 
    merge(arr, l, m, r); 
 } 
```

} void printArray (int A \[\], tamanho int) { int i; para (i = 0; i <tamanho; i ++) printf ("% d", A \[i\]); printf ("\\ n"); } int main () { int arr \[\] = {12, 11, 13, 5, 6, 7}; int arr\_size = sizeof (arr) / sizeof (arr \[0\]);
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

c ++ void mergesort (int A \[\], int tamanho _a, int B \[\], int tamanho_ b, int C \[\]) { token int _, token_ b, token _c; para (token_ a = 0, token _b = 0, token_ c = 0; token _a_ _um && token _b__ __b; ) { if (A \[token _a\] <= B \[token_ b\]) C \[token _c ++\] = A \[token_ um ++\]; outro C \[token _c ++\] = B \[token_ b ++\]; }__
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

python temp = None def merge (arr, esquerda, direita): temp global, inversões mid = (esquerda + direita) // 2 para eu na faixa (esquerda, direita + 1): temp \[i\] = arr \[i\]
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

def merge\_sort (arr, esquerda, direita): se saiu> = certo: Retorna
```
mid = (left + right) // 2 
 merge_sort(arr, left, mid) 
 merge_sort(arr, mid + 1, right) 
 merge(arr, left, right) 
```

arr = \[1,6,3,1,8,4,2,9,3\] temp = \[Nenhum para \_ no intervalo (len (arr))\] merge\_sort (arr, 0, len (arr) - 1) imprimir (arr, inversões) \`\` \`
---
title: Merge Sort
localeTitle: Объединить сортировку
---
## Сортировка слиянием

Merge Sort - алгоритм [Divide и Conquer](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms) . Он делит входной массив на две половины, вызывает себя для двух половинок, а затем объединяет две отсортированные половинки. Основная часть алгоритма дается двумя отсортированными массивами, мы должны объединить их в один отсортированный массив. Существует нечто, известное как « [Алгоритм](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) с [двумя пальцами»,](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) который помогает нам объединить два отсортированных массива вместе. Используя эту подпрограмму и вызывая функцию сортировки слияния на ребрах массива, мы дадим окончательный отсортированный массив, который мы ищем.

Так как это алгоритм, основанный на рекурсии, у нас есть рекуррентное соотношение для него. Рекуррентное отношение - это просто способ представления проблемы в терминах ее подзадач.

`T(n) = 2 * T(n / 2) + O(n)`

Поставив это на простом английском языке, мы разбиваем подзадачу на две части на каждом шагу, и у нас есть некоторый линейный объем работы, который мы должны сделать для слияния двух отсортированных половин на каждом шаге.
```
T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
```

Подсчитая количество повторений n в сумме в конце, мы видим, что есть lg n + 1 из них. Таким образом, время работы n (lg n + 1) = n lg n + n. Заметим, что n lg n + n <n lg n + n lg n = 2n lg n при n> 0, поэтому время работы O (n lg n).

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

JS const list = \[23, 4, 42, 15, 16, 8, 3\]

const mergeSort = (list) => { if (list.length <= 1) возвращаемый список; const средний = list.length / 2; const left = list.slice (0, средний); const right = list.slice (средний, list.length); return merge (mergeSort (слева), mergeSort (справа)); }

const merge = (слева, справа) => { var result = \[\]; while (left.length || right.length) { if (left.length && right.length) { if (left \[0\] <right \[0\]) { result.push (left.shift ()) } else { result.push (right.shift ()) } } else if (left.length) { result.push (left.shift ()) } else { result.push (right.shift ()) } } результат возврата; }

console.log (mergeSort (список)) // \[3, 4, 8, 15, 16, 23, 42\]
```
### Implementation in C 
```

С

# включают

# включают

void merge (int arr \[\], int l, int m, int r) { int i, j, k; int n1 = m - l + 1; int n2 = r - m;
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

void mergeSort (int arr \[\], int l, int r) { если (l <r) {  
int m = l + (rl) / 2;
```
    mergeSort(arr, l, m); 
    mergeSort(arr, m+1, r); 
 
    merge(arr, l, m, r); 
 } 
```

} void printArray (int A \[\], int size) { int i; для (i = 0; i <size; i ++) printf ("% d", A \[i\]); Е ( "\\ п"); } int main () { int arr \[\] = {12, 11, 13, 5, 6, 7}; int arr\_size = sizeof (arr) / sizeof (arr \[0\]);
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

C ++ void mergesort (int A \[\], int size _a, int B \[\], int size_ b, int C \[\]) { int token _a, токен_ b, токен _c; for (токен_ a = 0, токен _b = 0, токен_ c = 0, токен _a_ _a && токен _b__ __б; ) { если (A \[токен _a\] <= B \[токен_ b\]) C \[токен _c ++\] = A \[токен_ a ++\]; еще C \[токен _c ++\] = B \[токен_ b ++\]; }__
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

питон temp = None def merge (arr, слева, справа): глобальные темпы, инверсии mid = (left + right) // 2 для i в диапазоне (слева, справа + 1): temp \[i\] = arr \[i\]
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

def merge\_sort (arr, слева, справа): если left> = right: вернуть
```
mid = (left + right) // 2 
 merge_sort(arr, left, mid) 
 merge_sort(arr, mid + 1, right) 
 merge(arr, left, right) 
```

arr = \[1,6,3,1,8,4,2,9,3\] temp = \[Нет для \_ в диапазоне (len (arr))\] merge\_sort (arr, 0, len (arr) - 1) print (arr, inversions) \`\` \`
---
title: Merge Sort
localeTitle: 合并排序
---
## 合并排序

Merge Sort是一种[Divide and Conquer](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms)算法。它将输入数组分为两半，为两半调用自身，然后合并两个已排序的一半。算法的主要部分给出了两个排序的数组，我们必须将它们合并为一个排序的数组。有一种称为[双指算法的](http://www.geeksforgeeks.org/merge-two-sorted-arrays/)东西可以帮助我们将两个已排序的数组合并在一起。使用这个子例程并递归调用数组半部分上的合并排序函数将为我们提供我们正在寻找的最终排序数组。

由于这是一个基于递归的算法，我们有一个递归关系。递归关系只是一种根据子问题表示问题的方法。

`T(n) = 2 * T(n / 2) + O(n)`

用简单的英语说，我们在每一步都将子问题分解为两部分，我们需要做一些线性的工作，以便在每一步将两个分类的一半合并在一起。
```
T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
```

计算结尾总和中n的重复次数，我们看到它们有lg n + 1。因此运行时间是n（lg n + 1）= n lg n + n。我们观察到，对于n> 0，n lg n + n <n lg n + n lg n = 2n lg n，因此运行时间为O（n lg n）。

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

JS const list = \[23,4,42,15,16,8,3\]

const mergeSort =（list）=> { if（list.length <= 1）返回列表; const middle = list.length / 2; const left = list.slice（0，middle）; const right = list.slice（middle，list.length）; return merge（mergeSort（左），mergeSort（右））; }

const merge =（left，right）=> { var result = \[\]; while（left.length || right.length）{ if（left.length && right.length）{ if（left \[0\] <right \[0\]）{ result.push（left.shift（）） } else { result.push（right.shift（）） } } else if（left.length）{ result.push（left.shift（）） } else { result.push（right.shift（）） } } 返回结果; }

console.log（mergeSort（list））// \[3,4,8,15,16,23,42\]
```
### Implementation in C 
```

C

# 包括

# 包括

void merge（int arr \[\]，int l，int m，int r） { int i，j，k; int n1 = m - l + 1; int n2 = r - m;
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

void mergeSort（int arr \[\]，int l，int r） { if（l <r） {  
int m = l +（rl）/ 2;
```
    mergeSort(arr, l, m); 
    mergeSort(arr, m+1, r); 
 
    merge(arr, l, m, r); 
 } 
```

} void printArray（int A \[\]，int size） { int i; for（i = 0; i <size; i ++） printf（“％d”，A \[i\]）; 的printf（ “\\ n”）; } int main（） { int arr \[\] = {12,11,13,5,6,7}; int arr\_size = sizeof（arr）/ sizeof（arr \[0\]）;
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

C ++ void mergesort（int A \[\]，int size _a，int B \[\]，int size_ b，int C \[\]） { int token _a，token_ b，token _c; for（令牌_ a = 0，令牌_b = 0，令牌_ c = 0;令牌_a_ _a &&标记_b__ __b; ） { if（A \[token _a\] <= B \[token_ b\]） C \[token _c ++\] = A \[token_ a ++\]; 其他 C \[token _c ++\] = B \[token_ b ++\]; }__
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

蟒蛇 temp =无 def合并（arr，left，right）： 全球温度，反转 mid =（左+右）// 2 对于范围内的i（左，右+ 1）： temp \[i\] = arr \[i\]
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

def merge\_sort（arr，left，right）： 如果左> =右： 返回
```
mid = (left + right) // 2 
 merge_sort(arr, left, mid) 
 merge_sort(arr, mid + 1, right) 
 merge(arr, left, right) 
```

arr = \[1,6,3,1,8,4,2,9,3\] temp = \[范围内没有\_（len（arr））\] merge\_sort（arr，0，len（arr） - 1） 打印（arr，inversions） \`\`\`
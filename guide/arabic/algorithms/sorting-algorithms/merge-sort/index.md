---
title: Merge Sort
localeTitle: دمج التصنيف
---
## دمج التصنيف

دمج التصنيف هو خوارزمية [Divide و Conquer](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms) . يقسم صفيف الإدخال في نصفين ، يستدعي نفسه للنصفين ثم يدمج نصفين مفروزين. يتم إعطاء الجزء الرئيسي من الخوارزمية صفيفتين مفروشتين ، يجب علينا دمجها في مصفوفة مرتبة واحدة. هناك شيء معروف باسم [خوارزمية الإصبع اثنين](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) التي تساعدنا على دمج صفيفتين مفروشتين معاً. إن استخدام هذا الروتين الفرعي والدعوة لفرز وظيفة الدمج على صفيف الصفيف بشكل متكرر سوف يعطينا الصف النهائي المصنف الذي نبحث عنه.

بما أن هذه خوارزمية تستند إلى العودية ، فلدينا علاقة تكرارية لها. إن علاقة التكرار هي ببساطة طريقة لتمثيل مشكلة من حيث مشاكلها الثانوية.

`T(n) = 2 * T(n / 2) + O(n)`

وضعه في الإنجليزية بسيطة ، نقوم بتحليل المشكلة الفرعية إلى جزأين في كل خطوة ولدينا بعض العمل الخطي الذي يتعين علينا القيام به لدمج النصفين اللذين تم فرزهما معاً في كل خطوة.

 `T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
` 

بإحصاء عدد التكرارات لـ n في المجموع في النهاية ، نرى أن هناك lg n + 1 منهم. وبالتالي فإن وقت التشغيل هو n (lg n + 1) = n lg n + n. نلاحظ أن ng n + n <n lg n + n lg n = 2n lg n لـ n> 0 ، وبالتالي فإن وقت التشغيل هو O (n lg n).

 `MergeSort(arr[], left,  right): 
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
` 

شبيبة قائمة const = = 23 ، 4 ، 42 ، 15 ، 16 ، 8 ، 3\]

const mergeSort = (list) => { إذا (list.length <= 1) قائمة العودة ؛ const الأوسط = list.length / 2؛ const left = list.slice (0، middle)؛ const right = list.slice (middle، list.length)؛ دمج مدمج (mergeSort (يسار) ، mergeSort (يمين)) ؛ }

const merge = (يسار ، يمين) => { var result = \[\]؛ بينما (left.length || right.length) { if (left.length && right.length) { if (left \[0\] <right \[0\]) { result.push (left.shift ()) } آخر { result.push (right.shift ()) } } آخر إذا كان (left.length) { result.push (left.shift ()) } آخر { result.push (right.shift ()) } } نتيجة العودة }

console.log (mergeSort (list)) // \[3، 4، 8، 15، 16، 23، 42\]

 `### Implementation in C 
` 

C

# تتضمن

# تتضمن

void merge (int arr \[\]، int l، int m، int r) { int i، j، k؛ int n1 = m - l + 1؛ int n2 = r - m؛

 `int L[n1], R[n2]; 
 
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
` 

}

void mergeSort (int arr \[\]، int l، int r) { إذا (l <r) {  
int m = l + (rl) / 2؛

 `    mergeSort(arr, l, m); 
    mergeSort(arr, m+1, r); 
 
    merge(arr, l, m, r); 
 } 
` 

} void printArray (int A \[\] ، حجم int) { int i؛ لـ (i = 0؛ i <size؛ i ++) printf ("٪ d"، A \[i\])؛ printf ( "\\ ن")؛ } انت مين() { int arr \[\] = {12، 11، 13، 5، 6، 7}؛ int arr\_size = sizeof (arr) / sizeof (arr \[0\])؛

 `printf("Given array is \n"); 
 printArray(arr, arr_size); 
 
 mergeSort(arr, 0, arr_size - 1); 
 
 printf("\nSorted array is \n"); 
 printArray(arr, arr_size); 
 return 0; 
` 

 `### Implementation in C++ 
 
 Let us consider array A = {2,5,7,8,9,12,13} 
 and array B = {3,5,6,9,15} and we want array C to be in ascending order as well. 
` 

ج ++ vcess mergesort (int A \[\]، int size _a، int B \[\]، int size_ b، int C \[\]) { رمز token _a ، الرمز المميز_ b ، الرمز المميز _c ؛ for (token_ a = 0، token _b = 0، token_ c = 0؛ token _a_ _a && token _b__ __ب؛ ) { إذا (A \[token _a\] <= B \[token_ b\]) C \[token _c ++\] = A \[token_ a ++\]؛ آخر C \[token _c ++\] = B \[token_ b ++\]؛ }__

 `  if(token_a<size_a) 
  { 
      while(token_a<size_a) 
           C[token_c++]=A[token_a++]; 
  } 
  else 
  { 
      while(token_b<size_b) 
           C[token_c++]=B[token_b++]; 
  } 
` 

}

 `### Implementation in Python 
` 

الثعبان درجة الحرارة = لا شيء def def (arr، left، right): درجة الحرارة العالمية ، الانقلابات mid = (يسار + يمين) // 2 لأني في النطاق (يسار ، يمين + 1): درجة الحرارة \[i\] = arr \[i\]

 `k, L, R = left, left, mid + 1 
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
` 

def merge\_sort (arr، left، right): إذا تركت> = يمين: إرجاع

 `mid = (left + right) // 2 
 merge_sort(arr, left, mid) 
 merge_sort(arr, mid + 1, right) 
 merge(arr, left, right) 
` 

arr = \[1،6،3،1،8،4،2،9،3\] temp = \[لا شيء لـ \_ في النطاق (len (arr))\] merge\_sort (arr، 0، len (arr) - 1) print (arr، inverseions) \`\` \`
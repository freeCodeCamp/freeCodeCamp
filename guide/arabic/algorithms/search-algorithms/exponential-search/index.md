---
title: Exponential Search
localeTitle: البحث الأسي
---
## البحث الأسي

يُعرف البحث الأسي أيضًا باسم البحث الإصبعي ، ويبحث عن عنصر في مصفوفة تم فرزها بالقفز على عناصر `2^i` كل تكرار حيث أقوم بتمثيل قيمة متغير التحكم في الحلقة ، ومن ثم التحقق مما إذا كان عنصر البحث موجودًا بين الانتقال الأخير والقفزة الحالية

# حالة التعقيد الأسوأ

O (سجل (N)) كثيرًا ما يتم الخلط بسبب الاسم ، ويتم تسمية الخوارزمية ليس بسبب تعقيد الوقت. ينشأ الاسم كنتيجة لعناصر القفز الخوارزمية بخطوات تساوي 2 من الأسس

# أعمال

1.  اقفز إلى المصفوفة `2^i` في كل مرة تبحث عن الحالة `Array[2^(i-1)] < valueWanted < Array[2^i]` . إذا كان `2^i` أكبر من طول الصفيف ، قم بتعيين الحد الأعلى لطول الصفيف.
2.  قم بإجراء بحث ثنائي بين `Array[2^(i-1)]` و `Array[2^i]`

# الشفرة

 `// C++ program to find an element x in a 
 // sorted array using Exponential search. 
 #include <bits/stdc++.h> 
 using namespace std; 
 
 int binarySearch(int arr[], int, int, int); 
 
 // Returns position of first ocurrence of 
 // x in array 
 int exponentialSearch(int arr[], int n, int x) 
 { 
    // If x is present at firt location itself 
    if (arr[0] == x) 
        return 0; 
 
    // Find range for binary search by 
    // repeated doubling 
    int i = 1; 
    while (i < n && arr[i] <= x) 
        i = i*2; 
 
    //  Call binary search for the found range. 
    return binarySearch(arr, i/2, min(i, n), x); 
 } 
 
 // A recursive binary search function. It returns 
 // location of x in  given array arr[l..r] is 
 // present, otherwise -1 
 int binarySearch(int arr[], int l, int r, int x) 
 { 
    if (r >= l) 
    { 
        int mid = l + (r - l)/2; 
 
        // If the element is present at the middle 
        // itself 
        if (arr[mid] == x) 
            return mid; 
 
        // If element is smaller than mid, then it 
        // can only be present n left subarray 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
 
        // Else the element can only be present 
        // in right subarray 
        return binarySearch(arr, mid+1, r, x); 
    } 
 
    // We reach here when element is not present 
    // in array 
    return -1; 
 } 
 
 int main(void) 
 { 
   int arr[] = {2, 3, 4, 10, 40}; 
   int n = sizeof(arr)/ sizeof(arr[0]); 
   int x = 10; 
   int result = exponentialSearch(arr, n, x); 
   (result == -1)? printf("Element is not present in array") 
                 : printf("Element is present at index %d", result); 
   return 0; 
 } 
` 

# معلومات اكثر

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Exponential_search)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/exponential-search/)
    

# قروض

[تنفيذ C ++](https://www.wikitechy.com/technology/exponential-search/)
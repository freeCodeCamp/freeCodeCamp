---
title: Freecodecamp Algorithm Binary Search Guide
localeTitle: Freecodecamp الخوارزمية دليل البحث الثنائي
---
البحث الثنائي عبارة عن خوارزمية بحث تعثر على موضع لقيمة الهدف داخل مصفوفة تم فرزها.

## مثال

![بحث ثنائي](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

يوضح الرسم التوضيحي أعلاه عمل خوارزمية البحث الثنائي في مصفوفة تم فرزها عندما تكون القيمة المستهدفة **4** .

## خوارزمية

يعمل البحث الثنائي على صفائف مصنفة. يبدأ البحث الثنائي بمقارنة العنصر الأوسط للصفيف مع القيمة المستهدفة. إذا تطابقت القيمة المستهدفة مع العنصر الأوسط ، فسيتم إرجاع موضعه في الصفيف. إذا كانت القيمة المستهدفة أقل أو أكثر من العنصر الأوسط ، فسيستمر البحث في النصف السفلي أو الأعلى من المصفوفة على التوالي مع عنصر وسط جديد ، مما يلغي النصف الآخر من الاعتبار.

يكون pseudocode لخوارزمية البحث الثنائي كما يلي:

 `BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) { 
  low = 0 
  high = N - 1 
  while (low <= high) { 
    // invariants: value > A[i] for all i < low 
                   value < A[i] for all i > high 
    mid = (low + high) / 2 
    if (A[mid] > value) 
      high = mid - 1 
    else if (A[mid] < value) 
      low = mid + 1 
    else 
      return mid 
  } 
  return not_found // value would be inserted at index "low" 
 } 
` 

## تعقيد

*   أسوأ أداء للحالة: **O (log n)**
*   أفضل أداء للحالة: **O (1)**
*   متوسط ​​أداء الحالة: **O (log n)**
*   أسوأ تعقيد للحالات الفضائية: **O (1)** للتكرار؛ **O (log n)** for recursive.

## تنفيذ C ++

 `int binarySearch(int arr[], int value, int left, int right) { 
  int middle; 
  while (left <= right) { 
    middle = (left + right) / 2; 
    if (arr[middle] == value) 
      return middle; 
    else if (arr[middle] > value) 
      right = middle - 1; 
    else 
      left = middle + 1; 
  } 
  return -1; 
 } 
` 

: rocket: \[Run Code ## Python Implementation

 `def binary_search(l, value): 
    low = 0 
    high = len(l)-1 
    while low <= high: 
        mid = (low+high)//2 
        if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1 
        elif l[mid] < value: low = mid+1 
        else: return mid 
    return -1 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CWZi/2)
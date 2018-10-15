---
title: Freecodecamp Algorithm Bubble Sort Guide
localeTitle: دليل فرز خوارزمية Freecodecamp
---
تصنيف الفقاعة عبارة عن خوارزمية فرز بسيطة. خوارزمية الفرز هذه هي خوارزمية تستند إلى مقارنة يكون فيها كل زوج من العناصر المجاورة  
مقارنة ويتم تبديل العناصر إذا لم تكن في النظام. تقوم هذه الخوارزمية بالفرز في المكان بمعنى أنه لا يقوم بإنشاء مصفوفة جديدة بينما  
تنفيذ عملية الفرز.

#### مثال

[الرسوم المتحركة من BubbleSort](http://www.sorting-algorithms.com/bubble-sort)

 `array = <a href='https://repl.it/CXif' target='_blank' rel='nofollow'>5, 1, 4, 2, 8] 
 
 First Pass: 
 ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
 ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
 ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them. 
 
 Second Pass: 
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
 ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
 Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any 
 swap to know it is sorted. 
 
 Third Pass: 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
` 

#### تنفيذ C ++

 `// Function to implement bubble sort 
 void bubble_sort(int array[], int n) 
 { 
    // Here n is the number of elements in array 
    int temp; 
 
    for(int i = 0; i < n-1; i++) 
 { 
    // Last i elements are already in place 
    for(int j = 0; j < ni-1; j++) 
    { 
        if (array[j] > array[j+1]) 
        { 
            // swap elements at index j and j+1 
            temp = array[j]; 
            array[j] = array[j+1]; 
            array[j+1] = temp; 
        } 
    } 
 } 
 } 
` 

: صاروخ: \[تشغيل رمز Python التنفيذ

 `def bubble_sort(arr): 
    exchanges = True # A check to see if the array is already sorted so that no further steps gets executed 
    i = len(arr)-1 
    while i > 0 and exchanges: 
       exchanges = False 
       for j in range(i): 
           if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j]>arr[j+1]: 
               exchanges = True 
               arr[j], arr[j+1] = arr[j+1], arr[j] 
       i -= 1 
 
 arr = [5,3,23,1,43,2,54] 
 bubble_sort(arr) 
 print(arr) # Prints [1, 2, 3, 5, 23, 43, 54] 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CW0M/1)

#### [تعقيد الخوارزمية](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**أسوأ ومتوسط ​​زمن التعقيد:** O (n \* n). حالة أسوأ تحدث عندما يتم فرز صفيف عكس أي أن العناصر في ترتيب تنازلي

**أفضل تعقيد لحالة الوقت:** O (n). تحدث حالة أفضل عندما يتم فرز الصفيف بالفعل.
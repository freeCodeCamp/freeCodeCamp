---
title: Freecodecamp Algorithm Insertion Sort Guide
localeTitle: Freecodecamp خوارزمية الإدراج دليل فرز
---
فرز الإدراج هو [فرز يستند إلى _المقارنة_](https://en.wikipedia.org/wiki/Comparison_sort) . تستند خوارزمية الفرز إلى المقارنة ، إذا كانت تستخدم عوامل المقارنة (مثل `less than` و `greated than` ) للعثور على الترتيب بين رقمين.

في تقنية الفرز هذه ، نحافظ دائمًا على قائمة فرعية تم فرزها في موضع أدنى من القائمة ، ثم نأخذ عنصرًا واحدًا من بقية القائمة ثم ندخله في المكان الصحيح. نحن نفعل ذلك حتى يتم إدراج جميع العناصر في القائمة الفرعية. على سبيل المثال ، أثناء لعب الورق نقوم بتصنيف البطاقات في يدنا. بدءا من اليسار والانتقال إلى اليمين ، نواصل إدخال البطاقة في المكان المناسب حتى النهاية.

## مثال

![ترتيب بالإدراج](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

في المثال أعلاه ، يتم دائمًا فرز القائمة الفرعية `grey shaded` . يرجى ملاحظة أنه في البداية ، تحتوي القائمة الفرعية على عنصر واحد ، ويتم فرزها بشكل _بسيط_ . ثم في كل خطوة نقوم بإدخال العنصر الموجود في أقصى اليسار من القائمة الفرعية `white shaded` في الموضع الصحيح.

ومن ثم ، قمنا بفرز القائمة الكاملة بهذه الطريقة.

## خوارزمية

 `Loop for i=0 to N-1: 
 * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1] 
` 

## تعقيد

 `Space complexity: O(1)      // Auxillary/temporary space is used. 
 
 Time complexity: O(n*n)     // Two nested for loops are used. 
` 

## تنفيذ C ++

 `// Function to sort an array using insertion sort 
 void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
 
       /* Move elements of arr[0..i-1], that are greater than key, 
      to one position ahead of their current position */ 
   while (j >= 0 && arr[j] > key) 
   { 
       arr[j+1] = arr[j]; 
       j = j-1; 
   } 
   arr[j+1] = key; // place element key at its correct place 
   } 
 } 
 
 int main() 
 { 
    // array to be sorted 
    int arr[5] = {12, 11, 13, 5, 6}; 
 
    // call the insertion sort 
 insertionSort(arr, 5); 
 
 // prints sorted array ie 5 6 11 12 13 
 for(int i=0; i<5; i++) 
    std::cout << arr[i] << " "; 
 return 0; 
 } 
` 

: rocket: \[Run Code ## Python Implementation

 `# Function to perform insertion sort 
 def insertionSort(arr): 
    # Traverse through array 
    for i in range(1, len(arr)): 
        key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i] 
        # Move elements of arr[0..i-1], that are greater than key, 
        # to one position ahead of their current position 
        j = i-1 
        while j>=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key # place element key at its correct place 
 
 # array to be sorted 
 arr = [12, 11, 13, 5, 6] 
 # call the insertion sort 
 insertionSort(arr) 
 # prints sorted array ie 5 6 11 12 13 
 for i in range(len(arr)): 
    print(arr[i],end = ' ') 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CWZi)

## مزايا

1.  كفاءة لمجموعة صغيرة من البيانات ومجموعة البيانات التي تم فرزها تقريبًا.
2.  ببساطة تنفيذها.
3.  في الغالب أفضل من نوع فقاعة وفرز الاختيار وتستخدم عموما مع نوع الدمج.

## سلبيات

1.  إنها أقل كفاءة على مجموعة كبيرة من البيانات من دمج الفرز ، وفرز الكومة ، والفرز السريع.
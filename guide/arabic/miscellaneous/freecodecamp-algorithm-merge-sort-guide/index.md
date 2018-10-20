---
title: Freecodecamp Algorithm Merge Sort Guide
localeTitle: Freecodecamp خوارزمية دمج دليل فرز
---
تحتوي معظم اللغات الحديثة على وظيفة sort () مصنفة داخليًا والتي تقوم تلقائيًا بفرز مجموعة أو قائمة مدخلات. هل تساءلت يومًا كيف تعمل وظيفة الفرز بالفعل في الداخل؟ معرفة خوارزميات الفرز الشائعة وتطبيقها هو الجزء الأكثر أهمية في مقابلة الترميز. في سلسلة المقالات هذه ، سنلقي نظرة على عدة خوارزميات فرز مهمة. كيف يتم تنفيذها ، وتعقيد الوقت والفضاء إلخ. أول مشاركة لدينا هي على "فرز دمج".

لمعرفة المزيد حول "دمج الفرز" ، تعتبر معرفة أساسية حول [Recursion](http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) شرطاً مسبقاً. يعتمد دمج المزيج على مبدأ Divide و Conquer. يمكن تلخيص العملية الكاملة لفرز مجموعة من الأعداد الصحيحة N في ثلاث خطوات-

*   تقسيم المصفوفة إلى نصفين.
*   فرز النصف الأيسر والنصف الأيمن باستخدام نفس الخوارزمية المتكررة.
*   دمج الأنصاف المفروزة.

أكبر ميزة استخدام الفرز دمج هو أن [تعقيد الوقت](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) هو فقط n \* log (n) لفرز مصفوفة بالكامل. إنه أفضل بكثير من وقت تشغيل n ^ 2 لفرز الفقاعة أو نوع الإدراج.

قبل كتابة الرمز ، دعونا نفهم كيف يعمل نوع الدمج بمساعدة رسم تخطيطي.

![دمج التصنيف](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4712ef1a5d856dbb4af393fcc08a820a38787395.png)

*   في البداية لدينا مجموعة من 6 أعداد صحيحة لم يتم فرزها Arr (5 ، 8 ، 3 ، 9 ، 1 ، 2)
*   نحن تقسيم المصفوفة إلى نصفين Arr1 = (5 ، 8 ، 3) و Arr2 = (9 ، 1 ، 2).
*   مرة أخرى ، نقسمها إلى نصفين: Arr3 = (5 ، 8) و Arr4 = (3) و Arr5 = (9 ، 1) و Arr6 = (2)
*   مرة أخرى ، نقسمها إلى نصفين: Arr7 = (5) ، Arr8 = (8) ، Arr9 = (9) ، Arr10 = (1) و Arr6 = (2)
*   سنقوم الآن بمقارنة العناصر في هذه المصفوفات الفرعية لدمجها.

## التنفيذ

### تنفيذ C ++

 `void merge(int array[], int left, int mid, int right) 
 { 
    int i, j, k; 
 
    // Size of left sublist 
 int size_left = mid - left + 1; 
 
 // Size of right sublist 
 int size_right =  right - mid; 
 
 /* create temp arrays */ 
 int Left[size_left], Right[size_right]; 
 
 /* Copy data to temp arrays L[] and R[] */ 
 for(i = 0; i < size_left; i++) 
 { 
    Left[i] = array[left+i]; 
 } 
 
 for(j = 0; j < size_right; j++) 
 { 
    Right[j] = array[mid+1+j]; 
 } 
 
 // Merge the temp arrays back into arr[left..right] 
 i = 0; // Initial index of left subarray 
 j = 0; // Initial index of right subarray 
 k = left; // Initial index of merged subarray 
 
 while (i < size_left && j < size_right) 
 { 
    if (Left[i] <= Right[j]) 
    { 
        array[k] = Left[i]; 
        i++; 
    } 
    else 
    { 
        array[k] = Right[j]; 
        j++; 
    } 
    k++; 
 } 
 
 // Copy the remaining elements of Left[] 
 while (i < size_left) 
 { 
    array[k] = Left[i]; 
    i++; 
    k++; 
 } 
 
 // Copy the rest elements of R[] 
 while (j < size_right) 
 { 
    array[k] = Right[j]; 
    j++; 
    k++; 
 } 
 } 
 
 void mergeSort(int array[], int left, int right) 
 { 
    if(left < right) 
    { 
        int mid = (left+right)/2; 
 
        // Sort first and second halves 
    mergeSort(array, left, mid); 
    mergeSort(array, mid+1, right); 
 
    // Finally merge them 
    merge(array, left, mid, right); 
 } 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CYVc/1)

### تطبيق جافا سكريبت

دعونا نكتب MergeSort في JavaScript:

 `function mergeSort (arr) { 
  if (arr.length < 2) return arr; 
  var mid = Math.floor(arr.length /2); 
  var subLeft = mergeSort(arr.slice(0,mid)); 
  var subRight = mergeSort(arr.slice(mid)); 
  return merge(subLeft, subRight); 
 } 
` 

أولا نتحقق من طول الصفيف. إذا كانت 1 ، فإننا ببساطة نعيد المصفوفة. هذه ستكون قاعدتنا. عدا ذلك ، سنكتشف القيمة المتوسطة ونقسم المصفوفة إلى نصفين. سنقوم الآن بفرز كل من نصفين مع مكالمات متكررة إلى دالة MergeSort.

 `function merge (a,b) { 
    var result = []; 
    while (a.length >0 && b.length >0) 
        result.push(a[0] < b[0]? a.shift() : b.shift()); 
    return result.concat(a.length? a : b); 
 } 
` 

عندما نقوم بدمج النصفين ، نقوم بتخزين النتيجة في مصفوفة مساعدة. سنقوم بمقارنة عنصر البداية للمصفوفة اليسرى بعنصر البداية للمصفوفة اليمنى. أيهما أقل سيتم دفعه إلى صفيف النتائج وسوف نقوم بإزالته من المصفوفات الخاصة به باستخدام عامل التشغيل \[shift (). إذا كنا لا نزال ننتهي بقيم في أي من الصفوف اليسرى أو اليمنى ، فإننا ببساطة سنسلسلها في نهاية النتيجة. هنا هي النتيجة مرتبة:

 `var test = [5,6,7,3,1,3,15]; 
 console.log(mergeSort(test)); 
 
 >> [1, 3, 3, 5, 6, 7, 15] 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CYVd)

إذا كنت لا تزال تواجه مشكلة في فهم MergeSort ، فإن [شرح الفيديو](https://www.youtube.com/watch?v=TzeBrDU-JaY) سيجعل الأمر أكثر وضوحًا.
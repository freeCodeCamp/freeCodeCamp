---
title: Binary Search
localeTitle: بحث ثنائي
---
## بحث ثنائي

يقوم البحث الثنائي بتحديد موقع عنصر في مصفوفة تم فرزها عن طريق قسمة الفاصل الزمني للبحث مراراً إلى النصف.

كيف تبحث عن اسم في دليل الهاتف؟

إحدى الطرق هي البدء من الصفحة الأولى وإلقاء نظرة على كل اسم في دليل الهاتف حتى نجد ما نبحث عنه. ولكن هذا سيكون وسيلة شاقة للغاية وغير فعالة للبحث.

نظرًا لأننا نعلم أنه يتم ترتيب الأسماء في دليل الهاتف أبجديًا ، فقد نتمكن من العمل على طول الخطوات التالية:

1.  افتح الصفحة الوسطى من دليل الهاتف
2.  إذا كان لديه الاسم الذي نبحث عنه ، فقد انتهينا!
3.  وبخلاف ذلك ، يمكنك التخلص من نصف دليل الهاتف الذي لا يحتوي على الاسم
4.  كرر ذلك حتى تجد الاسم أو لم تعد هناك صفحات أخرى في دليل الهاتف

تعقيد الوقت: بينما نتخلص من جزء واحد من حالة البحث أثناء كل خطوة من خطوات البحث الثنائي ، ونقوم بعملية البحث في النصف الآخر ، فإن ذلك يؤدي إلى تعقيد زمن الحالة الأسوأ لـ _O_ ( _log 2 N_ ).

تعقيد الفضاء: يستغرق البحث الثنائي مسافة ثابتة أو _O_ ( _1_ ) مما يعني أننا لا نفعل أي تعريف متغير ذي صلة بحجم متغير.

للبحث عن مجموعات صغيرة ، فإن البحث الخطي يكون أفضل ولكن في الحالات الأكبر ، يكون استخدام البحث الثنائي أكثر فاعلية.

بالتفصيل ، كم مرة يمكنك قسمة N على 2 حتى يكون لديك 1؟ هذا هو القول الأساسي ، قم بإجراء بحث ثنائي (نصف العناصر) حتى تجده. في صيغة هذا سيكون هذا:

 `1 = N / 2x 
` 

اضرب 2x:

 `2x = N 
` 

الآن القيام log2:

 `log2(2x)    = log2 N 
 x * log2(2) = log2 N 
 x * 1       = log2 N 
` 

هذا يعني أنه يمكنك تقسيم سجل N مرة حتى يتم تقسيم كل شيء. مما يعني أنه يجب عليك تقسيم السجل N ("القيام بعملية البحث الثنائي") حتى تعثر على العنصر الخاص بك.

_O_ ( _log 2 N_ ) يكون هكذا لأنه في كل خطوة نصف العناصر الموجودة في مجموعة البيانات تختفي والتي يتم تبريرها بواسطة قاعدة الدالة اللوغاريتمية.

هذه هي خوارزمية البحث الثنائي. إنه أنيق وفعال ولكن لكي يعمل بشكل صحيح ، يجب **فرز** الصفيف.

* * *

ابحث عن 5 في مجموعة معينة من الأرقام باستخدام البحث الثنائي.

![بحث ثنائي 1](https://cdn-media-1.freecodecamp.org/imgr/QAuugOL.jpg)

ضع علامات منخفضة وعالية ومتوسطة في الصفيف.

![البحث الثنائي 2](https://cdn-media-1.freecodecamp.org/imgr/1710fEx.jpg)

قارن العنصر الذي تبحث عنه مع العنصر الأوسط.

![بحث ثنائي 3](https://cdn-media-1.freecodecamp.org/imgr/jr4icze.jpg)

تخلص من النصف الأيسر وابحث في النصف الأيمن.

![بحث ثنائي 4](https://cdn-media-1.freecodecamp.org/imgr/W57lGsk.jpg)

مرة أخرى مقارنة مع العنصر الأوسط.

![بحث ثنائي 5](https://cdn-media-1.freecodecamp.org/imgr/5Twm8NE.jpg)

الآن ، انتقل إلى النصف الأيسر.

![البحث الثنائي 6](https://cdn-media-1.freecodecamp.org/imgr/01xetay.jpg)

العنصر الأوسط هو العنصر الذي كنا نبحث عنه!

تأخذ خوارزمية البحث الثنائي مقاربة divide و Conquer حيث يتم تقسيم الصفيف باستمرار حتى يتم العثور على العنصر أو حتى لا يكون هناك عناصر أخرى متبقية للفحص. وبالتالي ، يمكن تعريف هذه الخوارزمية بشكل متكرر لتوليد حل أنيق.

تكون الحالتان الأساسيتان للتكرار:

*   لا مزيد من العناصر المتبقية في الصفيف
*   تم العثور على العنصر

قوة البحث الثنائي في نظم البيانات (أشجار B +): أشجار البحث الثنائي هي قوية جدا بسبب أوقات البحث O (log n) ، ثانيًا إلى هيكل بيانات hashmap الذي يستخدم مفتاح hasing للبحث عن البيانات في O (1). من المهم أن تفهم كيف يأتي وقت تشغيل السجل n من ارتفاع شجرة البحث الثنائية. إذا تم تقسيم كل عقدة إلى عقدتين ، (ثنائي) ، فإن عمق الشجرة هو log n (base 2) .. من أجل تحسين هذه السرعة في نظام البيانات ، نستخدم أشجار B + لأن لها عامل تفرع أكبر ، و وبالتالي مزيد من الارتفاع. آمل أن تساعد هذه المقالة القصيرة في توسيع نطاق تفكيرك حول كيفية استخدام البحث الثنائي في الأنظمة العملية.

يظهر رمز البحث الثنائي العودي أدناه:

### تطبيق جافا سكريبت

 `function binarySearch(arr, item, low, high) { 
    if (low > high) { // No more elements in the array. 
        return null; 
    } 
 
    // Find the middle of the array. 
    var mid = Math.ceil((low + high) / 2); 
 
    if (arr[mid] === item) { // Found the item! 
        return mid; 
    } 
 
    if (item < arr[mid]) { // Item is in the half from low to mid-1. 
        return binarySearch(arr, item, low, mid-1); 
    } 
 
    else { // Item is in the half from mid+1 to high. 
        return binarySearch(arr, item, mid+1, high); 
    } 
 } 
 
 var numbers = [1,2,3,4,5,6,7]; 
 print(binarySearch(numbers, 5, 0, numbers.length-1)); 
` 

في ما يلي تطبيق آخر في جافا سكريبت:

 `function binary_search(a, v) { 
    function search(low, high) { 
        if (low === high) { 
            return a[low] === v; 
        } else { 
            var mid = math_floor((low + high) / 2); 
            return (v === a[mid]) 
                   || 
                   (v < a[mid]) 
                   ? search(low, mid - 1) 
                   : search(mid + 1, high); 
        } 
    } 
    return search(0, array_length(a) - 1); 
 } 
` 

### تطبيق روبي

 `def binary_search(target, array) 
  sorted_array = array.sort 
  low = 0 
  high = (sorted_array.length) - 1 
 
  while high >= low 
    middle = (low + high) / 2 
 
    if target > sorted_array[middle] 
      low = middle + 1 
    elsif target < sorted_array[middle] 
      high = middle - 1 
    else 
      return middle 
    end 
  end 
  return nil 
 end 
` 

### مثال في C

 `int binarySearch(int a[], int l, int r, int x) { 
   if (r >= l){ 
        int mid = l + (r - l)/2; 
        if (a[mid] == x) 
            return mid; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
        return binarySearch(arr, mid+1, r, x); 
   } 
   return -1; 
 } 
` 

### تنفيذ C / C ++

 `int binary_search(int arr[], int l, int r, int target) 
 { 
   if (r >= l) 
   { 
        int mid = l + (r - l)/2; 
        if (arr[mid] == target) 
            return mid; 
        if (arr[mid] > target) 
            return binary_search(arr, l, mid-1, target); 
        return binary_search(arr, mid+1, r, target); 
   } 
   return -1; 
 } 
` 

### تنفيذ بايثون

 `def binary_search(arr, l, r, target): 
    if r >= l: 
        mid = l + (r - l)/2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target: 
            return binary_search(arr, l, mid-1, target) 
        else: 
            return binary_search(arr, mid+1, r, target) 
    else: 
        return -1 
` 

### مثال في C ++

 `// Binary Search using iteration 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    while(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            beg = mid + 1; 
        else 
            end = mid - 1; 
    } 
    return -1; 
 } 
` 

 `// Binary Search using recursion 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    if(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            return binary_search(arr, mid + 1, end, num); 
        else 
            return binary_search(arr, beg, mid - 1, num); 
    } 
    return -1; 
 } 
` 

### مثال في C ++

نهج متكرر!

\`\` \`C ++ - نهج تكراري int binarySearch (int arr \[\]، int start، int int، int x) { إذا (انتهى> = البدء) { int mid = start + (end-start) / 2؛ إذا (arr \[mid\] == x)  
عودة منتصف ؛

 `    if (arr[mid] > x) 
        return binarySearch(arr, start, mid-1, x); 
 
    return binarySearch(arr, mid+1, end, x); 
` 

} العودة -1 ؛ }

 `Iterative approach! 
` 

C ++ - نهج تكراري int binarySearch (int arr \[\]، int start، int int، int x) { بينما (تبدأ <= النهاية) { int mid = start + (end-start) / 2؛ إذا (arr \[mid\] == x) عودة منتصف ؛ إذا (arr \[mid\] <x) start = mid + 1؛ آخر end = mid - 1؛ } العودة -1 ؛ } \`\` \`

### معلومات اكثر

*   [بحث ثنائي (فيديو يوتيوب)](https://youtu.be/P3YID7liBug)
*   [البحث الثنائي - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)
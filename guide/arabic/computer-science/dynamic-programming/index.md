---
title: Dynamic Programming
localeTitle: برمجة ديناميكية
---
## برمجة ديناميكية

البرمجة الديناميكية (DP) هي تقنية برمجة لحل المشاكل حيث تتداخل حسابات مشاكلها الفرعية: تكتب برنامجك بطريقة تتجنب إعادة معالجة المشاكل التي تم حلها بالفعل. هذه التقنية ، عادة ما يتم تطبيقها بالاقتران مع المذكرات وهي تقنية التحسين حيث تقوم بتخزين النتائج المحسوبة مسبقًا ، وترجع النتيجة المخزنة مؤقتًا عند الحاجة إلى نفس الحساب مرة أخرى.

مثال على سلسلة فيبوناتشي التي تم تعريفها على النحو التالي:

`F(N) = F(N-1) + F(N-2)`

هذه هي الشجرة للعثور على F (5):

![شجرة فيبوناتشي سيري](https://cdn-media-1.freecodecamp.org/imgr/59Rpw.png)

لحساب F (5) ستحتاج إلى حساب عدة مرات نفس F (i). استخدام العودية:

 `def fib(n) 
 { 
    if n <= 1: 
        return n 
    return fib(n-1) + fib(n-2); 
 } 
` 

وفيما يلي الحل الأمثل (باستخدام DP)

بالنسبة إلى F (5) ، سيؤدي هذا الحل إلى إنشاء المكالمات الواردة في الصورة أعلاه ، والتي تعمل في O (2 ^ N).

هنا هو الحل الأمثل الذي يستخدم DP و memoization:

 `lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers 
 
 def fib(n) 
 { 
    if n in lookup: # If n is already computed 
        return n # Return the previous computed solution 
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion. 
    return lookup[n] 
 } 
` 

التخزين المؤقت للحلول المحسوبة في جدول البحث ، والاستعلام عنها قبل الذهاب العودية سيتيح للبرنامج وقت تشغيل O (N).

#### معلومات اكثر:

[ما هي البرمجة الديناميكية على StackOverflow](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming) [الفرق بين memoization و DP على StackOverflow](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)
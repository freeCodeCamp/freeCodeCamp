---
title: Selection Sort
localeTitle: اختيار نوع
---
## اختيار نوع

اختيار الترتيب هو واحد من أكثر خوارزميات الفرز بسيطة. يعمل بالطريقة التالية ،

1.  العثور على أصغر عنصر. مبادلة مع العنصر الأول.
2.  ابحث عن ثاني أصغر عنصر. مبادلة مع العنصر الثاني.
3.  العثور على ثالث أصغر عنصر. مبادلة مع العنصر الثالث.
4.  كرر تحديد العنصر الأصغر التالي وقم بتبديله إلى الموضع الصحيح المناظر حتى يتم فرز المصفوفة.

كما يمكنك تخمين ، تسمى هذه الخوارزمية "فرز التحديد" لأنه يختار العنصر الأصغر التالي بشكل متكرر ويقوم بتبديله في مكانه.

ولكن ، كيف تكتب الكود للعثور على فهرس ثاني أصغر قيمة في مصفوفة؟

*   والطريقة السهلة هي ملاحظة أن القيمة الأصغر قد تم تبديلها بالفعل في الفهرس 0 ، لذا تنخفض المشكلة للعثور على أصغر عنصر في المصفوفة بدءًا من الفهرس 1.

### التنفيذ في C / C ++

 `for(int i = 0; i < n; i++) 
 { 
    int min_index = i; 
    int min_element = a[i]; 
 
    for(int j = i +1; j < n; j++) 
    { 
        if(a[j] < min_element) 
        { 
            min_element = a[j]; 
            min_index = j; 
        } 
    } 
 
    swap(&a[i], &a[min_index]); 
 } 
` 

### التنفيذ في جافا سكريبت

\`\` \`جافا سكريبت _فرز الفرز_ الوظيفي _(أ) { var len =_ طول _الصفيف_ (A)؛ لـ (var i = 0؛ i <len - 1؛ i = i + 1) { var j _min = i؛ for (var j = i + 1؛ j <len؛ j = j + 1) { if (A \[j\] <A \[j_ min\]) { j _min = j؛ } آخر {} } if (j_ min! == i) { مبادلة (A، i، j\_min)؛ } آخر {} } }

تبديل الدالة (A، x، y) { var temp = A \[x\]؛ A \[x\] = A \[y\]؛ A \[ص\] = درجة الحرارة }

 `### Implementation in Python 
` 

الثعبان def seletion _sort (arr): إن لم يكن arr: عودة arr لأني في المدى (len (arr)): دقيقة_ ط = ط لـ j في النطاق (i + 1، len (arr)): إذا كان \[j\] <arr \[min _i\]: دقيقة_ ط = ي arr \[i\] ، arr \[min _i\] = arr \[min_ i\] ، arr \[i\] \`\` \`

### الخصائص

*   تعقيد الفضاء: **O (n)**
*   تعقيد الوقت: **O (n 2 )**
*   الفرز في المكان: **نعم**
*   مستقرة: **لا**

### تصور

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### المراجع

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Selection_sort)
*   [أكاديمية خان](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)
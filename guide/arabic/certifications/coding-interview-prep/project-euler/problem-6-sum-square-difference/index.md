---
title: Sum square difference
localeTitle: اختلاف مربع الفراغ
---
## المشكلة 6: اختلاف مربع الفراغ

### طريقة:

*   يمكن حساب مجموع الأعداد الطبيعية الأولى باستخدام هذه الصيغة:
    
*   ![مجموع الارقام n](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
    
*   يمكن حساب مجموع مربعات n من الأرقام الطبيعية باستخدام هذه الصيغة:
    
*   ![مجموع المربعات n](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
    
*   يمكننا حساب القيم باستخدام الصيغة المذكورة أعلاه وطرحها للحصول على النتيجة.
    

### حل:

 ``function sumSquareDifference(n) { 
  const sumOfN = (n*(n+1))/2; 
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6; 
 
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)` 
  return (sumOfN ** 2) - sumOfNSquare; 
 } 
`` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)

### المراجع:

*   [مجموع الأعداد n - ويكيبيديا](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
*   [مجموع الأرقام المربعة n - ويكيبيديا](https://en.wikipedia.org/wiki/Square_pyramidal_number)
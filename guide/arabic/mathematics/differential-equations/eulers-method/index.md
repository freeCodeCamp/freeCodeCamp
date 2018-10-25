---
title: Euler's Method
localeTitle: طريقة أويلر
---
# طريقة أويلر

طريقة أويلر هي إجراء رقمي من الدرجة الأولى لحل المعادلات التفاضلية العادية (ODE) بقيمة أولية معينة.

## مشكلة القيمة الأولية العامة

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn006.png)

## منهجية

تستخدم طريقة أويلر الصيغة البسيطة ،

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn3.png)

لإنشاء الظل عند النقطة `x` والحصول على قيمة `y(x+h)` ، التي يكون ميلها ،

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn008.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/Euler.png)

في طريقة أويلر ، يمكنك تقريب منحنى الحل بواسطة المماس في كل فترة زمنية (أي ، بسلسلة من مقاطع الخطوط القصيرة) ، عند خطوات `h` .

_بشكل عام_ ، إذا كنت تستخدم حجم خطوة صغير ، فإن دقة التقريب تزيد.

## الصيغة العامة

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn7.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_2.png)

## القيمة الوظيفية عند أي نقطة `b` ، مقدمة من `y(b)`

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn6.png)

أين،

*   **ن** = عدد الخطوات
*   **h** = عرض الفاصل (حجم كل خطوة)

### شبة الكود

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_1.png)

## مثال

تجد `y(1)` ، نظرا

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn007.png)

الحل من الناحية التحليلية ، الحل هو _**y = e x**_ و `y(1)` = `2.71828` . (ملاحظة: هذا الحل التحليلي لمجرد مقارنة الدقة.)

باستخدام طريقة أويلر ، مع مراعاة `h` = `0.2` ، `0.1` ، `0.01` ، يمكنك رؤية النتائج في الرسم البياني أدناه.

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/comparison.png)

عند `h` = `0.2` ، `y(1)` = `2.48832` (الخطأ = 8.46٪)

عند `h` = `0.1` ، `y(1)` = `2.59374` (الخطأ = 4.58٪)

عند `h` = `0.01` ، `y(1)` = `2.70481` (الخطأ = 0.50٪)

يمكنك أن تلاحظ ، كيف تتحسن الدقة عندما تكون الخطوات صغيرة.

## معلومات اكثر:

1.  [طرق عددية لحل المعادلات التفاضلية](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2.  [طريقة أويلر](https://en.wikipedia.org/wiki/Euler_method)
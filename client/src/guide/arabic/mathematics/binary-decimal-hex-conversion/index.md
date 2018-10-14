---
title: Binary Decimal Hexadecimal Conversion
localeTitle: ثنائي عشري عشري تحويل
---
# تحويلات:

يمكنك تحويل الأرقام بسهولة من قاعدة إلى أخرى بتطبيق تعريف الرقم المرتكز على n والذي يتطلب منك معرفة كيفية عمل نظام المواقع لدينا: لنبدأ من رقمين مثل الرقم `12` على سبيل المثال. للحصول على قيمة base-10 ، نحتاج إلى مضاعفة رقمه المنفرد بمقدار `10^n` حيث n هو موضع الرقم من اليمين والعد من 0. ثم نقوم ببساطة بجمع كل القيم. على سبيل المثال ، سيتم الحصول على قيمة الأساس 10 من `12` بهذه الطريقة:

\`\` \` 1 _(10 ^ 1) + 2_ (10 ^ 0) = 10 + 2 = 12

 ``This was obvious but what if you had a base-2 number and wanted to know its base-10 value? 
 First of all mind that a base n number only has `n` total symbols to represent its values. 
 In the binary base we have then just 2 (base-2) symbols: `1` and `0`. 
 Applying the procedure you have seen before you will be able to obtain a decimal number starting from a binary one like `101`: 
`` 

101 = 1 _(2 ^ 2) + 0_ (2 ^ 1) + 1 \* (2 ^ 0) = 4 + 0 + 1 = 5

 ``In the same way a hexadecimal (base-16) number has 16 symbols to represent its values: `0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, A, B, C, D, E, F`. 
 Converting a base-16 number like `7AF` to a decimal will be easy then: 
`` 

7AF = 7 _(16 ^ 2) + A_ (16 ^ 1) + F _(16 ^ 0) = 7_ 256 + 10 _16 + 15_ 1 = 1967

 ``What if you wished to convert a decimal number into a n-based number? 
 A common way to accomplish this is dividing the decimal number by the n base repeatedly. 
 Take note of all remainders, and when your quotient reaches 0 stop. 
 Now simply write all your remainders setting the last one as the most significant digit (your newly converted n-based number should have as last digit your first remainder). 
 EG: Let's convert the base-10 `12` to its base-2 value 
`` 

12/2 = 6 مع الباقي 0 6/2 = 3 مع باقي 0 3/2 = 1 مع الباقي 1 1/2 = 0 مع الباقي 1

base-10 12 = base-2 1100 \`\` \` الآن باستخدام الطريقة الأولى المكتوبة أعلاه يمكنك التحقق مما إذا كان كل شيء يعمل بشكل جيد:

`1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12`

## ثنائي عشري عشري محول

محول ثنائي ، عشري ، سداسي عشري هو أداة تسمح لك بتحويل رقم واحد في الرقم المقابل المعبر عنه في نظام رقمي مختلف. أنظمة الأرقام المسموح بها هي `base-2` (binary) ، `base-10` (decimal) وهو الذي نستخدمه بشكل شائع و `base-16` (ست عشري). هي الكثير من هذه الأدوات المتاحة على الإنترنت:

*   [ثنائي عرافة محول](www.binaryhexconverter.com/)
*   [موقع الحاسبة](http://www.calculator.net/) تشتمل الحاسبات العلمية عادةً على أدوات تحويل أساسية ، وفي الحاسبة الافتراضية MacOSX ، يمكنك استخدام هذه الوظيفة باستخدام طريقة عرض المبرمج الخاصة بها بالضغط على `Cmd+3` أو أسفل القائمة `View->Programmer` .

### المحول الخاص بك:

من الأفكار الجيدة لممارسة البرمجة وفهم تحويل الأرقام بشكل كامل أن تقوم برمز أداة التحويل الخاصة بك عبر الإنترنت. إذا كنت تريد معرفة المزيد عن هذا الموضوع ، يرجى التحقق من [إدخال ويكيبيديا](https://en.wikipedia.org/wiki/Positional_notation) .
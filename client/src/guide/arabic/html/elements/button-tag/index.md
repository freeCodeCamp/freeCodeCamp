---
title: Button Tag
localeTitle: زر الزر
---
## زر الزر

تحدد العلامة `<button>` قابلاً للنقر في مستند HTML. بين علامات `<button>` ، يمكنك وضع المحتوى ، مثل النص أو الصور. يختلف هذا عن الزر الذي تم إنشاؤه باستخدام علامة `<input>` ، والتي تأخذ النص كمحتوى فقط.

**بناء الجملة:**

`<button type="submit">Click Here!</button>`

**Atributes:**

فيما يلي السمة المرتبطة التي يدعمها HTML 4:

| **السمات** | **القيمة** | **ماذا يفعل** | | --- | --- | --- | | المعوقين المعوقين تعطيل الزر | | الاسم | الاسم | يحدد اسم للزر. الاسم هو للإشارة إلى الزر في شكل HTML ، JS ، إلخ. | | اكتب | زر أو إعادة تعيين أو تقديم | يضبط نوع الزر. زر مع `button` نوع هو زر نقر بسيط، مع `submit` نوع كان يقدم بيانات النموذج، ومع `reset` نوع فإنه يعيد تعيين بيانات النموذج. | | القيمة | النص | لتعيين قيمة مبدئية للزر. يتم إرسال هذه القيمة مع بيانات النموذج. |

يدعم HTML 5 السمات الإضافية التالية:

| **السمات** | **القيمة** | **ماذا يفعل** | | --- | --- | --- | | ضبط تلقائي للصورة ضبط تلقائي للصورة هل يجب أن يتم التركيز على الزر تلقائيًا عند تحميل الصفحة. على سبيل المثال ، انظر جوجل. عند تحميل الصفحة بالكامل ، يتم التركيز تلقائيًا على مربع النص. | | شكل | form\_id | يحدد واحد أو أكثر من النماذج التي ينتمي إليها الزر. | | تشكيل عنوان URL | يحدد مكان إرسال بيانات النموذج بمجرد الضغط على زر `submit` النوع. | | formmethod | الحصول على أو آخر يحدد كيفية إرسال بيانات النموذج. فقط للحصول على زر `submit` نوع. | | formtarget | `_blank` أو `_self` أو `_parent` أو `_top` أو framename | يحدد الموقع حيث يتم عرض النتيجة بعد إرسال بيانات النموذج. |

**مثال:**

 `
<html> 
  <head> 
    <title>Button Tag example</title> 
  </head> 
  <body> 
    <form> 
      First name:<br> 
      <input type="text" name="firstname" value="Free"> 
      <br> 
      Last name:<br> 
      <input type="text" name="lastname" value="CodeCamp"> 
      <br><br> 
      <input type="submit" value="Submit" formtarget="_self"> 
    </form> 
  </body> 
 </html> 
` 

جميع المتصفحات الرئيسية تدعم العلامة `<button>` . كما تدعم العلامة `<button>` خصائص الحدث في HTML. **ملاحظة:** قد ترسل المتصفحات المختلفة قيمًا مختلفة إذا كنت تستخدم عنصر `<button>` . يُنصح إما بتحديد قيمة الزر أو استخدام العلامة `<input>` لإنشاء زر في نموذج HTML.

**موارد آخرى:**

*   سمات أخرى:

| **السمات** | **رابط** | | --- | --- | | formenctype | https://www.w3schools.com/TAgs/att _button_ formenctype.asp | | formnovalidate | https://www.w3schools.com/TAgs/att _button_ formnovalidate.asp |

*   `<input>` tag: https://www.w3schools.com/TAgs/tag\_input.asp
*   سمات الحدث: https://www.w3schools.com/TAgs/ref\_eventattributes.asp
*   `formtarget` القيم السمة: https://www.w3schools.com/TAgs/att _زر_ formtarget.asp
*   نموذج HTML:
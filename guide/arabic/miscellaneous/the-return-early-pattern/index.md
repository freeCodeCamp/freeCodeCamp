---
title: The Return Early Pattern
localeTitle: نمط العودة المبكر
---
نمط عودة في وقت مبكر في جافا سكريبت هو وسيلة بسيطة لتقليل عدد `else` البيانات داخل الجسم وظيفة إلى الصفر. هناك العديد من الأسباب لتفضيل هذا النمط على استخدام `else` البيانات.

*   تقليل إجمالي مقدار الشفرة على الصفحة
*   تقليل طول الخط عن طريق تقليل التعقيد المنطقي
*   تحسين قابلية القراءة

جوهر النمط المبكر العودة هو لتحل محل الحاجة إلى `else` الشرطية في وظائف جافا سكريبت باستخدام `return` الكلمة في جسد `if` البيان.

دعونا نخلق وظيفة تتصرف بشكل مختلف في ظل ظروف معينة (ملاحظة: هذا مثال تافه ومبتكر فقط للحصول على هذه النقطة).

 `function willItBlend(someObject) { 
  var ItWillBlend; 
 
  if (someObject.blendable ==== 'It will blend') { 
    itWillBlend = true; 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
` 

على الرغم من أن هذا يبدو قابلاً للقراءة ، فلنقم بإضافة شرط آخر للتحقق من أنه تم استدعاء الدالة بالفعل باستخدام كائن بدلاً من `undefined` .

 `function willItBlend(someObject) { 
  var itWillBlend; 
 
  if (typeof someObject === 'object') { 
    if (someObject.blendable ==== 'It will blend') { 
      itWillBlend = true; 
    } else { 
      itWillBlend = false; 
    } 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
` 

هذه الوظيفة واضحة واسمها وصفي لكنه يبدو معقدا بلا داع. يمكننا استخدام نمط أوائل العودة إلى زيادة قابلية القراءة وتقليل عدد `else` البيانات؟ دعونا نجربها.

 `function willItBlend(someObject) { 
  if (typeof someObject !== 'object') { 
    return false; 
  } 
 
  if (someObject.blendable !== 'It will blend') { 
    return false; 
  } 
 
  return true; 
 } 
` 

باستخدام نمط العودة المبكرة ، تمكنا من إزالة جميع عبارات غير ضرورية وجعل وظائفنا الغرض والتوقيع (نوع الحجة التي تتوقعها) أكثر وضوحًا وموجزًا.

### مكافأة: بيان واحد مشروط

يمكننا زيادة إعادة ملء هذه الوظيفة لاستخدام عبارة واحدة فقط. تحقق من ذلك:

 `function willItBlend(someObject) { 
  if ( 
    typeof someObject !== 'object' || 
    someObject.blendable !== 'It will blend' 
    ) { 
    return false; 
  } 
 
  return true; 
 } 
`
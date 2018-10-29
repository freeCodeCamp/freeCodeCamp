---
title: True, False, and Nil
localeTitle: صحيح ، خطأ ، ولا شيء
---
# صحيح ، خطأ ، ولا شيء

`true` و `false` و `nil` هي أنواع بيانات مدمجة خاصة في Ruby. يتم تقييم كل من هذه الكلمات الأساسية إلى كائن يمثل المثيل الوحيد للفئة الخاصة به.

 ``true.class 
 => TrueClass 
 false.class 
 => FalseClass 
 nil.class 
 => NilClass 
 ``` 
 
 `true` and `false` are Ruby's native boolean values. A boolean value is a value that can only be one of two possible values: true or not true. The object `true` represents truth, while `false` represents the opposite. You can assign variables to `true` / `false`, pass them to methods, and generally use them as you would other objects (such as numbers, Strings, Arrays, Hashes). 
 
 `nil` is a special value that indicates the absence of a value: it is Ruby's way of referring to "nothing". An example of when you will encounter the `nil` object is when you ask for something that doesn't exist or cannot be found: 
`` 

ياقوت hats = \["beret" ، "sombrero" ، "beanie" ، "fez" ، "flatcap"\]

القبعات \[0\] => "البيريه" # القبعة في الفهرس 0 القبعات \[2\] => "beanie" # القبعة في الفهرس 2 القبعات \[4\] => "flatcap" # القبعة في الفهرس 4 القبعات \[5\] => لا شيء # لا يوجد قبعة في مؤشر 5 ، المؤشر 5 يحمل شيئا (لا شيء)

 ``Zero is not nothing (it's a number, which is something). Likewise, empty strings, arrays, and hashes are not nothing (they are objects, which happen to be empty). You can call the method `nil?` to check whether an object is nil. 
`` 

ياقوت 0.nil؟ => خطأ "" .nil؟ => خطأ \[\] .nil؟ => خطأ {} .nil؟ => خطأ nil.nil؟ => صحيح # من المثال أعلاه القبعات \[5\] .nil؟ => صحيح \`\` \`

كل كائن في Ruby له قيمة منطقية ، بمعنى أنه يعتبر صحيحًا أو خطأ في سياق منطقي. تلك التي تعتبر حقيقية في هذا السياق هي "صدق" وأولئك الذين اعتبروا كاذبين "زائفين". في روبي ، _فقط_ `false` و `nil` "زائف" ، كل شيء آخر هو "صدق".

### موارد آخرى

*   https://ruby-doc.org/core-2.3.0/TrueClass.html
*   https://ruby-doc.org/core-2.3.0/FalseClass.html
*   https://ruby-doc.org/core-2.3.0/NilClass.html
*   https://en.wikipedia.org/wiki/Boolean
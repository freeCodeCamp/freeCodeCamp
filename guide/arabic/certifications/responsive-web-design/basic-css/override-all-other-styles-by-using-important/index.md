---
title: Override All Other Styles by using Important
localeTitle: تجاوز كافة الأنماط الأخرى باستخدام هام
---
## تجاوز كافة الأنماط الأخرى باستخدام هام

يمكنك تجاوز جميع الأنماط الأخرى في CSS باستخدام `!important`

يعتبر هذا التجاوز الأهم والأولوية على الباقي.

قائمة الأكثر أهمية إلى الأقل أهمية هي كما يلي: \`\` \`

1.  مهم (! مهم)
2.  أنماط مضمنة
3.  إعلانات معرف
4.  تصريحات الطبقة

 `Here is an example of how to write/apply !important: 
` 

المغلق اللون: أسود!

 ``To apply these in context and see `!important` take precedence, here is an example: 
`` 

أتش تي أم أل

body { font-family: Helvetica; color: purple; } #violet-text { color: violet; } .black-text { color: black !important; } .blue-text { color: blue; }

# مثال النص

\`\` \`

ستنتهي هذه النتيجة في `Example Text` كونه أسود بسبب `!important` تضاف إلى `color: black` .
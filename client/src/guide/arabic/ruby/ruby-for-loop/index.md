---
title: Ruby For Loops
localeTitle: روبي للحلقات
---
## روبي للحلقات

يتم استخدام Ruby for loops لتكرار أو تكرار عبر عدد من العناصر وتنفيذ كتلة من التعليمات البرمجية لكل عنصر. لالحلقات وغالبا ما تستخدم على المصفوفات. انظر المقطع على [صفائف روبي](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md) .

للحلقات هي مجرد مثال واحد على التكرار أو التكرار على العناصر. في ما يلي مثال على حلقة for:

 `for element in array do 
  puts element 
 end 
` 

هناك العديد من الطرق المختلفة التي يمكنك من خلالها تنفيذ حلقة أو حلقة في Ruby ، ​​مثال آخر مثل:

 `element.each do |element| 
  puts element 
 end 
` 

هذا من شأنه أن يحقق نفس النتائج بالضبط كما سبق ذكره للحلقة ، ولكن مع ذلك أكثر إتقانا وأكثر كفاءة لأنه يستخدم أساليب Array المضمنة.

للذهاب خطوة أخرى ، يمكننا كتابة الحلقة أعلاه بالطريقة التالية:

 `element.each do { |element| puts element } 
`
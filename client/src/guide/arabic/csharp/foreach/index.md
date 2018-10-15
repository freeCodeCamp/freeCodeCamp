---
title: Foreach Loop
localeTitle: Foreach حلقة
---
## Foreach حلقة

حلقة `foreach` تنفيذ كتلة من التعليمات البرمجية لكل عنصر في مجموعة. الاستفادة من حلقة `foreach` هو أنك لا تحتاج إلى معرفة عدد العناصر الموجودة داخل المجموعة للتكرار من خلالها ؛ يمكنك ببساطة أن تخبر حلقة `foreach` الخاصة بك من خلال المجموعة ، طالما هناك عناصر داخلها. ومن المفيد للتكرار من خلال القوائم ، المصفوفات ، datatables ، IEnumerables وغيرها من هياكل البيانات تشبه القائمة. ويمكن أن يكون أقل كفاءة من مصممة بشكل جيد جدا `for` حلقة، ولكن الفرق لا يكاد يذكر في معظم الحالات.

### مثال

 `foreach (element in iterable-item) 
 { 
    // body of foreach loop 
 } 
 
 List<string> Names = new List<string>{ "Jim", "Jane", "Jack" } 
 
 foreach(string name in Names) 
 { 
    Console.WriteLine("We have " + name); 
 } 
` 

### انتاج:

 `> We have Jim 
 > We have Jane 
 > We have Jack 
`
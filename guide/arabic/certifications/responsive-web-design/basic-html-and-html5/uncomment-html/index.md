---
title: Uncomment HTML
localeTitle: Uncomment HTML
---
## Uncomment HTML

موضوع التعليق غالبًا ما يكون مربكًا بعض الشيء في البداية. انظر الى المثال:

 `<!-- This is a commented block. 
 It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops 
 into 
 few lines, 
 everything between the first weird series of character and the last is commented out --> 
` 

يمكنك استخدام التعليق في الخط أيضا: `<!-- Uh, I does not exists! -->` وهنا!

الشيء الوحيد الذي يجب مراعاته هو أنه عندما ترى هذه المجموعة من الشار `<!--` يتم التعليق على كل شيء من هناك منذ أن تجد المرونة `-->` ؛ هذه هي علامة الفتح والإغلاق لعنصر HTML!

##### غير تعليق

Uncomment تعني إخراج الأشياء من نص التعليق: لإزالة unicment عنصر h3 في الجملة التالية (التي تم التعليق عليها كلها):

 `<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> --> 
` 

سهل مثل:

 `<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> --> 
` 

لاحظ كيف تمت إضافة علامة تعليق إغلاق ( `-->` ) قبل عنصر HTML h3 لمطابقة علامة التعليق الافتتاحية في بداية الجملة وإضافة علامة تعليق افتتاحية ( `<!--` ) بعدها لتتطابق مع الإغلاق علامة في النهاية: بهذه الطريقة ، تكون قد أنشأت تعليقين مضمّنين ​​، أحدهما قبل عنصر h3 والآخر بعد !.

إذا كنت تريد إلغاء ربط كل شيء ، سيكون الأمر أسهل:

 `<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> 
` 

ما عليك سوى إزالة علامة الفتح والإغلاق للتعليق.
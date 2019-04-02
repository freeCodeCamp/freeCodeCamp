---
title: POJO
localeTitle: POJO
---
## POJO

POJO لتقف على "كائن جافا قديم سهل". هذا يختلف عن كائنات _جافا سكريبت_ عادي القديم. يشير "كائن Java قديم عادي" إلى نموذج البرمجة Oriented Programming (OOP) المستخدمة في لغة برمجة Java. يعامل [نموذج OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) البيانات على أنها "كائنات". كل "كائن" هو مثيل لـ "الفئة" ، التي تمثل النموذج الأصلي أو القالب الذي ترث منه كل الكائنات خصائصها وسماتها.

وبالتالي فإن POJO ببساطة كائن جافا. ومع ذلك ، يجب أن تستوفي أيضًا المعايير الإضافية التالية:

1.  يجب ألا يتم توسيع فئات Java المحددة مسبقًا ؛

 `public class Foo extends javax.servlet.http.HttpServlet { 
 ...// body ... 
 } 
` 

2.  يجب أن لا تنفذ واجهات prespecified ؛

 `public class Bar implements javax.ejb.EntityBean { 
  ...  // body 
 } 
` 

3.  يجب ألا يحتوي على التعليقات التوضيحية المحددة سلفًا.

 `@javax.persistence.Entity public class Baz { 
  ... // body ... 
 } 
` 

لذلك ، يتم تأهيل كائن جافا على أنه POJO فقط عندما يكون خاليًا من التعديلات السابقة. ومن ثم ، فإن "POJO" ليس "ملزمًا بأي قيود" غير تلك المنصوص عليها في مواصفات لغة جافا الرسمية.

#### معلومات اكثر:

[ويكيبيديا - بوجو](https://en.wikipedia.org/wiki/Plain_old_Java_object)
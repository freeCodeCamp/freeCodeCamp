---
title: Finally
localeTitle: أخيرا
---
## أخيرا

وينتهي الجزء الأخير دائمًا عند الخروج من المحاولة. هذا يضمن أن يتم تنفيذ كتلة النهاية حتى في حالة حدوث استثناء غير متوقع. ولكن في النهاية مفيد أكثر من مجرد معالجة الاستثناءات - فهو يسمح للمبرمج بتجنب إزالة رمز التنظيف دون قصد عن طريق العودة أو المتابعة أو الفشل. وضع كود التنظيف في نهاية المطاف هو دائما ممارسة جيدة ، حتى عندما لا يتوقع أي استثناءات.

**_مثال:_**

 `try { 
   // Normal execution path 
   throw new EmptyStackException(); 
 } catch (ExampleException ee) { 
   //  deal with the ExampleException 
 } finally { 
   // This optional section is executed upon termination of any of the try or catch blocks above, 
   //  except when System.exit() is called in "try" or "catch" blocks; 
 } 
`
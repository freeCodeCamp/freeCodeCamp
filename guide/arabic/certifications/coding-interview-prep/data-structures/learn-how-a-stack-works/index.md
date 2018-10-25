---
title: Learn how a Stack Works
localeTitle: تعرف على كيفية عمل Stack
---
## تعرف على كيفية عمل Stack

### طريقة:

*   المداخن هي هياكل بيانات مجردة.
*   يتبعون مبدأ LIFO (Last In First Out) أو FILO (First In Last Out).
*   عمليات إدراج وحذف Stack هي من تعقيد وقت **O (1)** .
*   في Javascript ، يمكن التعامل مع المصفوفات كـ Stack حيث أن `.push()` و `.pop()` لها تعقيد زمني لـ **O (1)** .
*   في هذا التحدي نحتاج إلى `.pop()` ثم `.push()` في بنية تخزين العناصر.

### حل:

 `var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; 
 
 homeworkStack.pop(); 
 homeworkStack.push("CS50"); 
` 

### مرجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
*   فيديو من قبل [Hackerrank](https://www.youtube.com/watch?v=wjI1WNcIntg)
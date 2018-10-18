---
title: Tuple Type
localeTitle: نوع المجموعة
---
# نوع المجموعة

التعبير عن مصفوفة يعرف فيها عدد محدد من عناصر الأنواع ، ولكن ليس هو نفسه.

 `let arr: [string, number]; 
 
 // This is correct 
 arr = ['Hello', 7]; 
 
 //This is incorrect 
 arr = [7, 'Hello']; 
` 

عند الوصول إلى عنصر خارج المؤشرات المعروفة ، سيستخدم نوع الاتحاد:

 `arr[3] = 'World!' 
 // OK, 'string' can be assigned to 'string | number' 
 
 // Error, 'boolean' is not a 'string | number' 
 arr[5] = false; 
 // Error, 'boolean' is not a 'string | number' 
` 

## الخصائص

في نوع Typescript يمكن أن يكون لديك بعض خصائص buit-in. طول الفوركس أو بعض الأنواع الفريدة الأخرى.

### الطول

قال هذا العقار ، كم عنصر لديه عنصر.

 `let tuple = []; //you can initialize it after the declaration too, not just the method above 
 tuple[0] = 10; 
 tuple[1] = 'Mike'; 
 let number = tuple.length; 
 //number = 2; 
` 

## أساليب مدمجة

في نوع Typescript ، يمكنك استخدام بعض الوظائف المضمنة. كل نوع لديه طرق مشتركة وفريدة من نوعها. أدناه يمكنك أن تقرأ عن أكثر الطرق استخداما في أساليب نوع tuple.

### البوب ​​()

يزيل العنصر الأخير من tuple.

 `var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.pop(); 
 //tuple = [10,'Emma',11,'Lily',12,] 
 //We popped 'Mike Ross' from the tuple 
` 

### إدفع()

يضيف عنصرًا إلى نهاية المجموعة.

 `var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.push('Rachel Zane'); 
 //tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane'] 
` 

[مزيد من المعلومات حول tuples على TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)
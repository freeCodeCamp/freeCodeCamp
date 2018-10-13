---
title: Ruby Hash
localeTitle: روبي هاش
---
## روبي هاش

تمثل التجزئة مجموعة من أزواج القيم الرئيسية المميزة. ويسمى أيضا المصفوفات الترابطية. لإنشاء تجزئة في Ruby ، ​​استخدم الأقواس المتعرجة وفصل كل زوج من قيم المفاتيح باستخدام الفاصلة.

 `my_hash = {:key1 => "value", :key2 => "value2"} 
` 

يمكنك إنشاء تجزئة بالطرق التالية

 `my_hash = Hash.new  # with empty hash 
 my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined 
` 

يمكنك الوصول إلى قيمة المفتاح في تجزئة مع الأقواس المربعة والمراجع الرئيسية

 `my_hash[:key1]  # value 
 my_hash[:key2]  # value2 
` 

يمكنك تعيين مفتاح جديد وقيمة لتجزئة محددة بالفعل

 `my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"} 
` 

يمكنك التحقق من عدد عناصر التجزئة في طريقة `length` :

 `my_hash.length # 2 
` 

يمكنك أيضًا إنشاء أعداد صحيحة كمفتاح هاش ، لكن بناء الجملة يختلف عن الصيغة المعتادة

 `my_hash = {1: "value"} # will raise an exception 
 my_hash = {1 => "value"} # will create hash with corresponding key value pair 
`
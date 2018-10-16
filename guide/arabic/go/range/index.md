---
title: Range
localeTitle: نطاق
---
## نطاق

للتكرار عبر مجموعة في Go ، يمكننا استخدام النطاق.

يختلف النطاق عن الحلقات المتتالية حيث لا يتم الوصول إلى العنصر في مجموعة بواسطة فهرس.

إذا كنت تريد الوصول إلى عنصر specifc في مجموعة ، فمن المحتمل أن يكون for-loop أفضل الخيارات.

هنا مثال:

 `package main 
 
 import "fmt" 
 
 func main() { 
  fruits := []string{"apple", "orange", "pear"} 
 
  for _, fruit := range fruits { 
    fmt.Println(fruit) 
   } 
 } 
` 

سوف الناتج:

 `apple 
 orange 
 pear 
` 

ربما لاحظت مُعرِّفًا فارغًا تم استخدامه.

المُعرِّف الفارغ (أو المتغير الأول الذي يتم إرجاعه من النطاق) هو فهرس العنصر.

هذا هو الأنسب عند تحديد موقع الخريطة ، حتى تتمكن من الحصول على المفتاح والقيمة:

 `package main 
 
 import "fmt" 
 
 func main() { 
    kvs := map[string]string{"a": "apple", "b": "banana"} 
    for k, v := range kvs { 
        fmt.Printf("%s -> %s\n", k, v) 
 
   } 
 } 
` 

اذهب

المخرجات:

 `a -> apple 
 b -> banana 
`
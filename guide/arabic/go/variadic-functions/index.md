---
title: Variadic Functions
localeTitle: وظائف متنوعة
---
## وظائف متنوعة

الدوال Variadic هي دالات يمكن استدعاؤها مع أي عدد من الوسيطات اللاحقة.

هذه ميزة مفيدة عندما نعمل على تطبيقات الويب.

في بعض الأحيان ، لا نحتاج إلى عدد العناصر التي سنحتاج إلى تمريرها إلى محرك HTML الخاص بالتخطيط.

فيما يلي الأساسيات حول كيفية عمل الدوال varidic:

 `package main 
 import "fmt" 
 
 func printFruits(fruits ...string) { 
    for _, fruit := range fruits{ 
        fmt.Println(fruit) 
    } 
 } 
 
 func main() { 
   printFruits("apple", "bannana") 
   printFruits("papaya", "coconut", "pear", "pineapple") 
   berries := []string{"blueberry", "strawberry", "raspberry"} 
   printFruits(berries...) 
 } 
` 

أولاً ، في printFruits قمنا بتعريف عدد الوسيطات باستخدام \[… string\].

يخبر هذا Go أن هذه الدالة تقبل أي عدد من وسائط السلسلة.

تظهر أول مكالمتين للطباعة printFruits أن الدالة ستقوم بطباعة كل سلسلة ، حتى إذا كنا نجتاز عددًا مختلفًا من الوسيطات.

 `apple 
 bannana 
 ... 
 papaya 
 coconut 
 pear 
 ... 
` 

هذا سوف يعمل أيضا لشرائح.

لاستخدام وظيفة vardiac مع شريحة ، نضيف نقاط التدريب إلى المكالمة.

 `printFruits(berries...) 
` 

 `blueberry 
 strawberry 
 raspberry 
`
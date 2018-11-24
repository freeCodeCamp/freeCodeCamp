---
title: Loops
localeTitle: الحلقات
---
# للحلقة في Go

الذهاب لديها سوى `for` حلقة. يحتوي الحلقة الأساسية `for` ثلاثة مكونات مفصولة `;` -

*   العبارة **init** : تم تنفيذها قبل التكرار الأول
    
*   تعبير **الشرط** : تم تقييمه قبل كل عملية تكرار
    
*   بيان **المشاركة** : تم تنفيذه في نهاية كل تكرار
    

غالباً ما يكون عبارة **init** عبارة عن إعلان متغير قصير. أعلنت المتغيرات هناك تظهر فقط في نطاق `for` بيان. تتوقف الحلقة عن التكرار بمجرد تقييم الحالة المنطقية إلى false.

مثال على `for` وفيما يلي حلقة -

**for.go**

 `package main 
 
 import "fmt" 
 
 func main() { 
    sum := 0 
    for i := 0; i <= 10; i++ { 
        sum += i 
    } 
    fmt.Println("The sum of first 10 natural numbers is", sum) 
 } 
` 

تشغيل البرنامج أعلاه ينتج مخرجات مشابهة للإخراج التالي - \`\` \`  
تشغيل $ $ for.go مجموع أول 10 أرقام طبيعية هو 55

 ``You can use `continue` and `break` to adjust the loops flow 
`` 

اذهب // هذا الرمز يطبع أي أرقام غريبة تصل إلى 5 ل: = 0 ؛ ن <= 10 ؛ ن + { إذا كان n٪ 2 == 0 { // إذا كان الرقم حتى يقفز إلى ن التالية استمر } fmt.Println (ن) // إذا كان الرقم هو 5 الخروج من الحلقة إذا كان n == 5 { استراحة } }

 ``If you want to create an infinite loop just use `for { }` 
`` 

اذهب إلى عن على { // Whill loop حتى يفصل الشرط عن العروة كسر // الخروج من الحلقة }

 `## Replacement for while-loop 
 To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement: 
` 

اذهب func main () { الأسطوانات: = 1 لـ num <= 1000 { num \* = 2 } fmt.Println ("أصغر طاقة تبلغ 2 فوق 1000 هي" ، عدد) } \`\` \`
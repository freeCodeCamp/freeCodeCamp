---
title: Go Methods
localeTitle: الذهاب أساليب
---## الذهاب أساليب

أنواع Golang يمكن أن يكون لها طرق. الطريقة هي دالة ذات وسيطة خاصة ، _المتلقي_ .

 `type Rectangle struct { 
  height, width int64 
 } 
 
 func (r Receiver) getArea() int64 { 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 r.getArea() // 200 
` 

هنا ، اكتب `Rectangle` قد حصلت على طريقة تسمى `getArea` تقوم بإرجاع مساحة المستطيل. المتلقي هنا هو `r` .

هذا الرمز مكافئ لما يلي:

 `type Rectangle struct { 
  height, width int64 
 } 
 
 func getArea(r Receiver) int 64{ 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 getArea(r) // 200 
` 

الآن يتلقى أسلوب getArea `r` كوسيطة ، بدلاً من جهاز استقبال. الوظيفة مكافئ.

### مؤشر المتلقي

يمكنك تمرير مؤشر كمستقبل:

 `type MyInt int64 
 
 func (m *MyInt) setToZero() { 
  *m = MyInt(0) 
 } 
 
 m := MyInt(10) 
 m.setToZero() // m == 0 
` 

### طرق التمديد

إذا كنت ترغب في إنشاء طريقة على نوع محدد في حزمة أخرى ، مثل `int` يمكنك استخدام غلاف بسيط مثل:

 `type MyInt int64 
 
 func (m MyInt) add10() int64 { 
  return m + 10 
 } 
 
 m := MyInt(10) 
 m.add10() // 20 
` 

#### معلومات اكثر:

https://tour.golang.org/methods/1
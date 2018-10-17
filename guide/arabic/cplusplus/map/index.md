---
title: Map
localeTitle: خريطة
---
## مقدمة من الخريطة

`map` عبارة عن حاوية ربطية تخزن العناصر في زوج القيمة الرئيسية. مثلما هو الحال في `Java` لديك مجموعة ، مجموعة النقابي في PHP وهلم جرا.

## فوائد استخدام الخريطة

*   يخزن فقط مفاتيح فريدة من نوعها وهذا أيضا في ترتيب مفروض على أساس معايير الفرز المخصصة لها.
*   بما أن المفاتيح في ترتيب مفروز ، فإن عنصر البحث في الخريطة من خلال المفتاح سريع جدًا ، أي أنه يستغرق وقت لوغاريتمي.
*   في `map` سيكون هناك قيمة واحدة فقط مرفقة بكل مفتاح.
*   `map` يمكن استخدامها كمصفوفات ارتباطية.
*   قد يتم تنفيذه باستخدام أشجار ثنائية متوازنة.

هنا مثال:

 `#include <iostream> 
 #include <map> 
 
 using namespace std; 
 
 int main (){ 
  map<char,int> first; 
 
  //initializing 
  first['a']=10; 
  first['b']=20; 
  first['c']=30; 
  first['d']=40; 
 
   map<char, int>::iterator it; 
   for(it=first.begin(); it!=first.end(); ++it){ 
      cout << it->first << " => " << it->second << '\n'; 
   } 
 
  return 0; 
 } 
` 

انتاج:

 `a => 10 
 b => 20 
 c => 30 
 d => 40 
` 

## خلق كائن الخريطة

`map<string, int> myMap;`

## إدراج

إدخال البيانات مع إدراج وظيفة العضو.

 `myMap.insert(make_pair("earth", 1)); 
 myMap.insert(make_pair("moon", 2)); 
` 

يمكننا أيضًا إدخال البيانات في خريطة std :: using operator \[\] ie

`myMap["sun"] = 3;`

## الوصول إلى عناصر الخريطة

للوصول إلى عناصر الخريطة ، يتعين عليك إنشاء أداة إعادة تهيئة لها. وهنا مثال على النحو المذكور من قبل.

 `map<char, int>::iterator it; 
 for(it=first.begin(); it!=first.end(); ++it){ 
  cout << it->first << " => " << it->second << '\n'; 
 } 
` 

هنا يمكنك معرفة المزيد عن الخريطة: [cpluspluc\_map](http://www.cplusplus.com/reference/map/map/map/)

ملاحظة: كل التعليمات البرمجية في المثال في إصدار C ++ 11. يمكنك معرفة المزيد عن إصدار C ++ [هنا](http://en.cppreference.com/w/cpp/compiler_support)
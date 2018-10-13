---
title: Set
localeTitle: جلس
---
يتم تعريف بنية مجموعة البيانات في c ++ بنفس الطريقة التي يتم تحديدها في سياق الرياضيات.

بشكل أكثر رسمية ، المجموعات هي نوع من الحاويات الترابطية التي يجب أن يكون كل عنصر فيها فريدًا.

*   لا يمكن تعديل قيمة العنصر بمجرد إدخاله ، على الرغم من أن حذف عنصر وإدخال عنصر جديد مسموح به ، بنفس الطريقة التي نقوم بها في الرياضيات.
*   يمكن استخدام هيكل مجموعة البيانات للنموذج ، جيدًا ، يحدد نفسه. يصبح من السهل العثور على التقاطعات والنقابات وما إلى ذلك.
*   مشابه للمتجه ، ولكن يتم السماح فقط بالقيم الفريدة.
*   تقوم المجموعة بترتيب العناصر بترتيب متزايد عندما تقوم بإدراج عناصر في المجموعة.

يتم تعيين ملف الرأس المطلوب لاستخدام بنية البيانات المحددة. أي ، يجب `#include<set>` في التعليمات البرمجية الخاصة بك لكي تتمكن من استخدام بنية البيانات المحددة.

**نصيحة للمحترفين** : - استخدم `#include<bits/stdc++.h>` لتضمين جميع هياكل وبيانات C ++ بدلاً من إضافتها واحدة تلو الأخرى.  
بعض الوظائف التي يمكن القيام بها مع مجموعة: -

1.  start () - إرجاع مكرر إلى العنصر الأول في المجموعة
2.  end () - إرجاع مكرر إلى العنصر النظري الذي يتبع العنصر الأخير في المجموعة
3.  size () - لعرض عدد العناصر في المجموعة
4.  max\_size () - لعرض الحد الأقصى لعدد العناصر التي يمكن أن تحتويها المجموعة
5.  empty () - إرجاع ما إذا كانت المجموعة فارغة
6.  محو (const g) - يزيل القيمة "g" من المجموعة
7.  clear () - يزيل كل العناصر من المجموعة

دعونا ننظر على سبيل المثال :-

 `#include <iostream> 
 #include <set> 
 #include <iterator> 
 
 using namespace std; 
 int main() 
 { 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector. 
 
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
 
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer. 
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
 
 
    // remove all elements up to 65 in myset from the beginning:- 
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    // remove element with value 50 in myset 
 
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0. 
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n"; 
    cout<<"Contents of the modified set:\t"; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    cout << endl; 
 
 
    return 0; 
 
 } 
` 

\`\` \`حزب الشعب الكمبودي انتاج:- محتويات myset: 9 20 30 65 80

محتويات myset بعد إزالة العناصر أقل من 30: 30 65 80

بعد القيام بـ myset.erase (80) ، تتم إزالة عنصر واحد

محتويات المجموعة المعدلة: 30 65 \`\` \`

\### المصادر

1.  [المهوسون المهوسون](https://www.geeksforgeeks.org/set-in-cpp-stl/)
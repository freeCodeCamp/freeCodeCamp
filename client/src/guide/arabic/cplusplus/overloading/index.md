---
title: C++ Overloading
localeTitle: C ++ التحميل الزائد
---
يتيح لك C ++ تحديد أكثر من تعريف واحد لاسم دالة أو مشغل في نفس النطاق ، وهو ما يسمى التحميل الزائد للوظيفة والحمولة الزائدة على المشغل على التوالي.

الإعلان المفرط عبارة عن إعلان يتم الإعلان عنه بنفس الاسم مثل الإعلان المعلن مسبقًا في نفس النطاق ، باستثناء أن كلا التعريفين لهما حجج مختلفة و تعريف مختلف بشكل واضح (تطبيق).

عندما تقوم باستدعاء وظيفة أو مشغل فوق طاقتها ، يحدد المحول البرمجي التعريف الأكثر ملاءمة للاستخدام ، من خلال مقارنة أنواع الوسيطات التي استخدمتها للاتصال بالوظيفة أو المشغل باستخدام أنواع المعلمات المحددة في التعريفات. وتسمى عملية اختيار الوظيفة أو المشغل الأكثر انشغالاً بالجلسات الزائدة.

### وظيفة الحمولة الزائدة في C ++

يمكنك الحصول على تعريفات متعددة لنفس اسم الوظيفة في نفس النطاق. يجب أن يختلف تعريف الدالة عن بعضها عن طريق أنواع و / أو عدد الوسيطات في قائمة الوسائط. لا يمكنك تحميل الإعلانات الدالة التي تختلف فقط حسب نوع الإرجاع.

المثال التالي هو المثال الذي يتم فيه استخدام نفس وظيفة الطباعة () لطباعة أنواع مختلفة من البيانات -

 `#include <iostream> 
 #include <string> 
 using namespace std; 
 
 class printData { 
   public: 
      void print(int i) { 
        cout << "Printing int: " << i << endl; 
      } 
      void print(double  f) { 
        cout << "Printing float: " << f << endl; 
      } 
      void print(const string& s) { 
        cout << "Printing string: " << s << endl; 
      } 
 }; 
 
 int main() { 
   printData pd; 
 
   // Call print to print integer 
   pd.print(5); 
 
   // Call print to print float 
   pd.print(500.263); 
 
   // Call print to print string 
   pd.print("Hello C++"); 
 
   return 0; 
 } 
` 

عندما يتم تجميع التعليمات البرمجية المذكورة أعلاه وتنفيذها ، فإنها تنتج النتيجة التالية -

 `Printing int: 5 
 Printing float: 500.263 
 Printing string: Hello C++ 
` 

### مشغل الحمولة الزائدة في C ++

يمكن أيضًا تحميل معظم المشغلات المضمنة في C ++. يسمح هذا للمبرمجين بتعيين تطبيق مختلف للمشغلين حسب الحجج. يمكن أن تعمل هذه المشغلات ذات التحميل الزائد للفئة المحددة من قبل المستخدم.

 `#include<iostream> 
 using namespace std; 
 
 class Complex_Number{ 
 private: 
    int real; 
    int imag; 
 public: 
    Complex_Number(int i = 0, int j =0) 
    { 
        real = i; 
        imag = j; 
    } 
    //Here the operator '+' is being overloaded 
    Complex_Number operator + (Complex_Number const &a) 
    { 
         Complex_Number x; 
         x.real = real + a.real; 
         x.imag = imag + a.imag; 
         return x; 
    } 
    void print() 
    { 
         cout<<real<<" + i"<<imag<<endl; 
    } 
 }; 
 
 int main() 
 { 
    Complex_Number c1(3, 2), c2(1, 1); 
    //Here, the overloaded operator is called. The numbers get added according to the function defined 
    Complex_Number c3 = c1 + c2; 
    c3.print(); 
 } 
` 

الناتج عن البرنامج أعلاه

 `4 + i3 
`
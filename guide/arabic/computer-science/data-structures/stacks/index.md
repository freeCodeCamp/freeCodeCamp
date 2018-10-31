---
title: Stacks
localeTitle: كومات
---
## كومات

الأكوام هي أول بنية بيانات في الماضي (FILO). إنه بنية بيانات خطية.

يمكنك تخيل كومة كما تم تنظيم لوحات في مطعم بوفيه. يمكنك فقط اختيار اللوحة في الجزء العلوي وإلا ستنهار الحزمة. بشكل عام ، ستتم إزالة العنصر الأخير الذي سيتم إدراجه أولاً.

بعض العمليات الأساسية للمكدس هي:

1.  دفع - لإدراج عنصر في الجزء العلوي من المكدس.
2.  Pop - يزيل عنصرًا أعلى الرصة.
3.  isEmpty - تحقق من ما إذا كانت المكدس فارغة أم لا
4.  الحجم - إرجاع عدد العناصر الموجودة في المكدس (يمكن إجراء جميع العمليات في زمن O (1))

يمكن تنفيذ مجموعة مكدّسة إما باستخدام المصفوفات أو القوائم المرتبطة. فيما يلي تنفيذ مجموعة بسيطة بنية بنية تخزين البيانات مع عملياتها الأكثر شيوعًا.

 `//Stack implementation using array in C++ 
 //You can also include<stack> and then use the C++ STL Library stack class. 
 
 #include <bits/stdc++.h> 
 
 using namespace std; 
 
 class Stack { 
    int t; 
    int arr[MaxN]; 
 public: 
    Stack() { 
        t = 0; 
    } 
    int size() { 
        return t; 
    } 
    bool isEmpty() { 
        return t < 1; 
    } 
    int top() { 
        return arr[t]; 
    } 
    void push(int x) { 
        if (++t >= MaxN) { 
            cout << "Stack is full" << '\n'; 
            return; 
        } 
        arr[t] = x; 
    } 
    void pop() { 
        arr[t--] = 0; 
    } 
 }; 
 
 int main() { 
    Stack st; 
 
    st.push(4); 
    st.push(3); 
    st.push(5); 
    while (!st.isEmpty()) { 
        cout << st.size() << ' ' << st.top() << '\n'; 
        st.pop(); 
    } 
    return 0; 
 } 
` 

#### باستخدام الصفائف كأكوام

في بعض لغات البرمجة ، يحتوي الصفيف على وظائف مكدسة ، مما يسمح للمطور بإجراء عمليات **الدفع** **والبارز** دون الحاجة إلى بنية بيانات مكدس مخصصة.

على سبيل المثال ، يحتوي مصفوفة في JavaScript على طرق **دفع** و **pop** تسمح لأحد بتطبيق وظائف المكدس بسهولة في أحد التطبيقات.

 `stack = []; 
 
 let i = 0; 
 while(i < 5) 
  stack.push(i++); 
 
 while(stack.length) { 
  stack.pop(); 
 } 
` 

يمكن أن تؤدي قائمة في Python أيضًا وظيفة مكدس في أحد التطبيقات. بدلا من **الدفع** ، يمكن للمرء أن يستخدم طريقة **إلحاق** .

 `stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    stack.pop() 
` 

#### تطبيقات

*   تحويل العودية إلى حلقة.
*   ميزات إعادة التراجع.
*   سودوكو حلالا
*   عمق البحث الأول.
*   عبور الشجرة
*   التعبير عن Infix -> Prefix / Postfix expression
*   أقواس صالحة

#### معلومات اكثر:

*   [مزيد من المعلومات على الأكوام - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
*   [كومة - ويكيبيديا](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
*   [برج هانوي المشكلة وكيف يستخدم الحل المداخن والتكرار](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*   [HackerRank الأكوام و الطوابير الفيديو](https://www.youtube.com/watch?v=wjI1WNcIntg)
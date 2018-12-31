---
title: Continue Control Statement
localeTitle: متابعة بيان التحكم
---
# متابعة بيان التحكم

يؤدي العبارة `continue` إلى تخطي حلقة ما بعد السطور التالية بعد المتابعة والانتقال إلى بداية التكرار التالي. في `for` حلقة، يقفز التحكم إلى بيان التحديث، وفي `while` أو `do while` حلقة، يقفز التحكم إلى التعبير المنطقية / حالة.

 `for (int j = 0; j < 10; j++) 
 { 
    if (j == 5) 
    { 
        continue; 
    } 
    System.out.print (j + " "); 
 } 
` 

ستتم طباعة قيمة `j` لكل تكرار ، ما عدا عندما تساوي `5` . سوف تحصل على تخطي العبارة الطباعة بسبب `continue` وسوف يكون الإخراج:

 `0 1 2 3 4 6 7 8 9 
` 

لنفترض أنك تريد حساب عدد `i` s في كلمة `mississippi` . هنا يمكنك استخدام حلقة مع عبارة `continue` ، كما يلي:

 `String searchWord = "mississippi"; 
 
 // max stores the length of the string 
 int max = searchWord.length(); 
 int numPs = 0; 
 
 for (int i = 0; i < max; i++) 
 { 
    // We only want to count i's - skip other letters 
    if (searchWord.charAt(i) != 'i') 
    { 
        continue; 
    } 
 
    // Increase count_i for each i encountered 
    numPs++; 
 } 
 
 System.out.println("numPs = " + numPs); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZH/0)

بالإضافة إلى ذلك ، يمكنك استخدام التسميات لاختيار حلقة محددة من مجموعة متداخلة للتخطي إلى التكرار التالي.
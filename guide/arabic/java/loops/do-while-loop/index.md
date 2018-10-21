---
Title: Do - While Loop
العنوان : حلقة افعل - في حين 
---
# حلقةافعل - في حين 

يتشابه `do while` the `while` loop ، لكن مجموعة البيانات يتم ضمان تشغيلها مرة واحدة على الأقل قبل التحقق من شرط معين. من المهم ملاحظة أن حلقة "حين" هي حلقة تحكم خروج. بينما (لن يتم تنفيذه بالضرورة) ، 'do while' عبارة عن حلقة يتم التحكم في دخولها (سيتم تنفيذها مرة واحدة على الأقل ، حتى إذا كان الشرط غير صحيح).

 `do 
 { 
    // Statements 
 } 
 while (condition); 
` 

## مثال

 `int iter_DoWhile = 20; 
 do 
 { 
    System.out.print (iter_DoWhile + " "); 
 
    // Increment the counter 
    iter_DoWhile++; 
 } 
 while (iter_DoWhile < 10); 
 System.out.println("iter_DoWhile Value: " + iter_DoWhile); 
` 
المثال السابق سيقرم بطباعة الرقم 20 والرقم 21, لان الرقم اكبر من 10 

انتاج:

 `    20 
    iter_DoWhile Value: 21 
` 

## مثال اخر:

int number = 2;
do{
    System.out.println(number);
    number++;
}while(number <= 7);

انتاج: 
2
3
4
5
6
7

ملاحظة: المثال سيقوم بطباعة الارقام من 2 الى 7, لانه سيقوم بالتحقق من الشرط 

**تذكر** : يتم التحقق من حالة حلقة `do-while` بعد أن يتم تنفيذ نص الرمز مرة واحدة.

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJYl/0)

## تمرين:
هل يمكنك تخمين ناتج مقتطف الشفرة التالي؟

 `int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 
`

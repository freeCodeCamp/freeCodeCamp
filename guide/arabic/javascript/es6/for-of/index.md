---
title: for-of loop
localeTitle: من أجل حلقة
---## من أجل حلقة

يمكن استخدام حلقة for-of للتكرار أكثر من الأشياء التي لا تكون صفائف ولكنها قابلة للتكرار مثل مجموعة DOM أو سلسلة أو مجموعة أو حجج أو خريطة.

 `const fruits = ['Orange','Apple','Grapes','Banana']; 
 for (const fruit of fruits) 
 { 
    console.log(fruit); 
 } 
` 

سيقوم المقتطف أعلاه بإرجاع العناصر الموجودة في المصفوفة أعلاه.

## من أجل حلقة في معرفة مؤشر

ماذا لو أردنا أن نعرف مؤشر كل عنصر أيضا. في هذه الحالة يمكننا التكرار أكثر من fruit.entries () الذي يعطينا ArrayIterator.

 `for (const fruit of fruits.entries()) 
 { 
    console.log(fruit); 
 } 
` 

في المقتطف أعلاه ، ستكون الفاكهة صفيفًا يشتمل على عنصرين. سيحتوي البند 0 على الفهرس وسيتضمن العنصر الأول اسم الفاكهة الفعلي. سيكون الناتج كما يلي:

 `[0, "Orange"] 
 
 [1, "Apple"] 
 
 [2, "Grapes"] 
 
 [3, "Banana"] 
` 

يمكننا مزيد من تدمير الفاكهة على النحو التالي:

 `for (const [index,fruit] of fruits.entries()) 
 { 
    console.log(index,fruit); 
 } 
` 

## for-of حلقة في تكرار على عدد غير معروف من الحجج

for-of loop مفيد جدا في التكرار على عدد غير معروف من الحجج لوظيفة.

لنفترض أننا نريد أن نضيف الأرقام التي تم تمريرها إلى إحدى الوظائف وأن عدد الوسيطات غير ثابت.

"الحجج" هي كلمة رئيسية خاصة في javascript والتي تعطينا نوع Array-ish (ليس مصفوفة) وتعطينا جميع الحجج.

 `function addNumbers() 
 { 
    let sum = 0; 
    for (const num of arguments) 
       sum+=num; 
    return sum; 
 } 
 addNumbers(1, 2, 3, 4, 5); // 15 
` 

هنا الحجج ليست مجموعة حقيقية لا يزال يمكننا تكرارها باستخدام حلقة for-of.

## for-of loop للتكرار عبر السلسلة

يمكننا استخدام for-of loop للتكرار عبر سلسلة لإعطائنا شخصية من خلال حرف السلسلة.

 `const name = 'John Doe'; 
 for (const char of name) 
    console.log(char); 
` 

مما ينتج عنه الإخراج التالي: الأحرف 'J' ، 'o' ، 'h' ، 'n' ، '' ، 'D' ، 'o' ، 'e'

## for-of loop للتكرار عبر مجموعة DOM

مجموعات DOM ليست نوع الصفيف الحقيقي. وعادة ما تكون NodeList لمعظم المتصفحات. إذا قمنا بإنشاء عدد من الفقرات وأردت التكرار بدلاً منها لتعيين بعض الأحداث في كل من الفقرات ، فيمكننا استخدام حلقة for for of.

 `const paragraphs = document.querySelectorAll('p'); 
` 

الفقرات هنا هي NodeList التي يمكن تكرارها باستخدام حلقة for-of.

 `for (const para of paragraphs) 
 { 
    console.log(para); 
    // We can add event listeners to each para here 
 } 
`
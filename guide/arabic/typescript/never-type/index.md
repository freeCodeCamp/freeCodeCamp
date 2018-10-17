---
title: Never Type
localeTitle: أبدا اكتب
---
# أبدا اكتب

يمثل النوع `never` نوع القيم التي لا تحدث أبداً. على سبيل المثال ، `never` يكون `never` نوع الإرجاع لتعبير الدوال أو تعبير دالة السهم الذي يلقي دائماً استثناءً أو استثناء لا يعود أبداً ؛ المتغيرات أيضا الحصول على نوع `never` عندما تضيق من قبل `any` نوع الحرس الذي لا يمكن أن يكون صحيحا.

النوع `never` هو نوع فرعي من كل نوع ، ويمكن التنازل عنه. ومع ذلك ، لا يوجد نوع هو نوع فرعي أو يمكن التنازل عنه `never` (باستثناء أبداً نفسه). حتى أي شيء لا يمكن التنازل عنه أبداً.

 `// Function returning never must have unreachable end point 
 function error(message: string): never { 
    throw new Error(message); 
 } 
 
 // Inferred return type is never 
 function fail() { 
    return error("Something failed"); 
 } 
 
 // Function returning never must have unreachable end point 
 function infiniteLoop(): never { 
    while (true) { 
    } 
 } 
`
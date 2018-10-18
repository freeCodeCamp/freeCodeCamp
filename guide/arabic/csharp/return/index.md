---
title: Return Statement
localeTitle: بيان العودة
---
# بيان العودة

ينتهي بيان `return` بتنفيذ أسلوب يظهر داخله ويعيد التحكم إلى أسلوب الاستدعاء. قد تكون أو لا ترجع قيمة.

إذا كان بيان `return` داخل كتلة `try` وإذا كان هناك حظر `finally` ، فسيتم تمرير عنصر التحكم إلى `finally` ، وبعد ذلك يتم إعادته إلى طريقة الاستدعاء.

## مثال

 `class Calc 
 { 
  static int Sum(int i, int j) 
  { 
    return i + j; 
  } 
 
  static void Main() 
  { 
    int a = 4; 
    int b = 3; 
    int sum = Sum(a, b); 
    Console.WriteLine($"The sum of {a} and {b} is {result}"); 
 
    // To keep the console from closing 
    Console.ReadLine(); 
  } 
 } 
` 

## انتاج:

\`\` \`

> مجموع 4 و 3 هو 7 \`\`
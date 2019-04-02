---
title: Switch Case
localeTitle: تبديل القضية
---
# تبديل القضية

رمز التبديل هو عبارة عن بيان اختيار يختار قسم حالة التبديل بناءً على القيمة المطابقة مع التعبير / القيمة التي يتم تقييمها. 1 إذا لم تتطابق أي من عبارات الحالة مع قيمة المتغير المبدّل ، فسيتم اختيار المسار الافتراضي. يشبه عبارة switch جملة من `if statements` . نحن الخروج من التبديل عن طريق `break` .

## مثال

 `public enum Colors { Red, Blue, Green, Orange } 
 
 Colors myColor; 
 
 ... myColor is set to one of the enum values ... 
 
 switch(myColor){ 
  case Colors.Red: 
    Console.WriteLine("How you like them apples?"); 
    break; 
  case Colors.Blue: 
    Console.WriteLine("Ice Ice Baby..."); 
    break; 
  case Colors.Green: 
    Console.WriteLine("Fore!"); 
    break; 
  default: 
    Console.WriteLine("I have a hard time when I try to rhyme."); 
 } 
` 

## انتاج |

 `If myColor is Colors.Red: 
 > How you like them apples? 
 
 If myColor is Colors.Blue: 
 > Ice Ice Baby... 
 
 If myColor is Colors.Green: 
 > Fore! 
 
 If myColor is Colors.Orange: 
 > I have a hard time when I try to rhyme. 
` 

### مصادر:

*   1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch
---
title: Indeterminate parameters
localeTitle: معلمات غير محددة
---
# معلمات غير محددة

دعونا نتخيل أننا نحتاج إلى كتابة طريقة يكون فيها عدد المعلمات متغيرًا. كيف يمكننا فعل ذلك؟ حسنا ، C # (ولغات أخرى) لديها طريقة سهلة للقيام بذلك ؛ باستخدام `params` الكلمة على المعلمة وسيلة ليمكن أن نطلق هذه الطريقة مع عدد متغير من المعلمات.

## مثال

 `public static void Main (string[] args) { 
    // Call PrintParams with 3 parameters 
    PrintParams(1, 2, 3); 
 
    // Call PrintParams with 1 parameter 
    PrintParams(4); 
 } 
 
 public static void PrintParams(params int[] values) 
 { 
    // Iterate through parameters 
    for (int i = 0; i < values.Length; i++) 
    { 
        Console.WriteLine("Parameter {0} is {1}", i, values[i]); 
    } 
 } 
` 

## انتاج:

 `> Parameter 0 is 1 
 > Parameter 1 is 2 
 > Parameter 2 is 3 
 > Parameter 0 is 4 
`
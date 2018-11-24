---
title: Ruby String Operations
localeTitle: عمليات سلسلة روبي
---
يمكن تنفيذ كل من السلسة والضرب على السلاسل.

## سلسلة:

*   يمكن ربط السلاسل معًا باستخدام أي من الطرق التالية:
    
    *   `+` المشغل
    *   `<<` مشغل
    *   `.concat` طريقة
    
     `"Hello" + " World" + "!"  #=> Hello World! 
    ` 
    
     `"Hello" << " World!" #=> Hello World! 
    ` 
    
     `string1 = "Hello" 
     string2 = " World!" 
     string1.concat(string2) #=> Hello World! 
    ` 
    

## عمليه الضرب:

*   يمكن ضرب السلاسل بقيمة صحيحة باستخدام عامل التشغيل `*` . `ruby "Hello" * 3 #=> HelloHelloHello`

## استبدال سلسلة فرعية

*   يمكننا البحث عن سلاسل فرعية أو استخدام Regex للبحث واستبدال الحرف داخل سلسلة. `ruby "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string`

## مقارنة:

*   يمكن مقارنة السلاسل أو إرجاع 1 أو 0 أو 1 أو صفر اعتمادًا على ما إذا كانت السلسلة أقل من أو تساوي أو أكبر من other\_string.

 `"abcdef" <=> "abcde"     #=> 1 
 "abcdef" <=> "abcdef"    #=> 0 
 "abcdef" <=> "abcdefg"   #=> -1 
 "abcdef" <=> "ABCDEF"    #=> 1 
`
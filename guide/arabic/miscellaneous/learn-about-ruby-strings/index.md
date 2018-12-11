---
title: Learn About Ruby Strings
localeTitle: تعلم حول روبي الأوتار
---
### الأساسيات:

*   سلاسل هي سلسلة من الأحرف 'موتر' معا بين الاقتباس.
    
*   يمكن استخدام اقتباسات مفردة أو مزدوجة لإنشاء سلاسل في Ruby.
    
*   يقوم روبي بإجراء تقييم إضافي على السلاسل التي يتم إنشاؤها باستخدام علامات اقتباس مزدوجة ، مثل:
    
    *   أحرف escaping: `\n` ، `\t` ، `\s`
        
    *   استخدام المتغيرات والتعبيرات داخل: `#{variable or expression}`
        
*   يتم تقديم سلاسل مع علامات الاقتباس المفردة كما هي ، دون أي اعتبارات خاصة.
    

## أمثلة:

 `"Hello World" 
 # is equivalent to: 
 'Hello World' 
 
 "This is line 1.\nAnd this is line 2." 
 # returns: 
 This is line 1. 
 And this is line 2. 
 
 name = "Batman" 
 "Hello, my name is #{name}!" 
 # returns: 
 Hello, my name is Batman! 
 
 # Note that for single quotes, ruby doesn't take special consideration for variables or backslashes: 
 'This is your name:\n#{name}' 
 # returns: 
 This is your name:\n#{name} 
` 

## المراجع:

*   [وثائق روبي الرسمية للسلاسل](http://ruby-doc.org/core-2.2.0/String.html) .
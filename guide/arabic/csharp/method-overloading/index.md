---
title: Method Overloading
localeTitle: طريقة الحمولة الزائدة
---
# طريقة الحمولة الزائدة

تم تقديم المعلمات الافتراضية في C # الإصدار 4.0 ، ولكن حتى ذلك ، استخدمت C # coders تقنية مختلفة ، والتي تعمل بشكل أساسي بنفس الطريقة ، تسمى التحميل الزائد للطريقة. يسمح للمبرمج بتعريف عدة طرق بنفس الاسم ، طالما أنها تأخذ مجموعة مختلفة من المعلمات. عند استخدام فئات .NET framework ، فسوف ندرك قريبا أن يتم استخدام التحميل الزائد للطريقة في كل مكان.

## مثال

1.  قم بإنشاء ملف فئة باسم Person.cs & إدخال التعليمة البرمجية التالية. \`\` \` شخص من الطبقة العامة { السلسلة العامة FirstName {get؛ مجموعة خاصة } السلسلة العامة LastName {get؛ جلس؛ }
    
    الشخص العام (سلسلة الاسم الأول ، اسم العائلة) { this.FirstName = firstName؛ this.LastName = lastName؛ }
    
    السلسلة العامة SayHello (اسم السلسلة) { "مرحبًا يا" + اسم؛ }
    
    السلسلة العامة SayHello (الشخص الشخص) { "مرحبًا ، هناك" + شخص. اسم أول + "" + شخص. اسم مستعار ؛ } }
    

 `2. In your default Program.cs file you can call now this class Person using the method overloading. 
` 

برنامج الصف { الفراغ الاستاتيكي Main (string \[\] args) { شخص شخص = شخص جديد ("جين" ، "دو") ؛ Console.WriteLine (person.SayHello ("Peter Smith"))؛

 `        Person friend = new Person("Chuck", "Norris"); 
        Console.WriteLine(person.SayHello(friend)); 
 
        Console.ReadKey(); 
 
 
    } 
 } 
` 

\`\` \`
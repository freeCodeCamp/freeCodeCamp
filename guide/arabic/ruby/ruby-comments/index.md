---
title: Ruby Comments
localeTitle: روبي التعليقات
---
# روبي التعليقات

التعليقات عبارة عن أسطر للتعليق التوضيحي داخل التعليمة البرمجية التي يتم تجاهلها في وقت التشغيل (بمعنى أنها مرئية داخل شفرة المصدر ولكن لا يتم طباعتها عند تشغيل البرنامج).

في روبي ، يبدأ تعليق سطر واحد بالحرف `#` ويمتد إلى نهاية السطر. يمكن أن يكون التعليق على السطر الخاص به أو بعد الكود.

 `puts "Learning to code is fun!" 
 
 # I am a single line comment. 
 
 puts "Ruby is a great language!" # Me too - I am a trailing comment. 
` 

عند التنفيذ ، ينتج البرنامج أعلاه ما يلي:

 `Learning to code is fun! 
 Ruby is a great language! 
` 

يمكنك إجراء عدة تعليقات سطر من خلال وضع التعليقات بين `=begin` و `=end` . `=begin` start و `=end` يجب أن تبدأ في بداية السطر ويجب أن يكون `=end` على خط خاص به.

 `=begin 
 I am a multi-line comment 
 and I can be as long as I please. 
 See, still going! 
 =end 
 
 puts "Hello World!" 
 
 =begin It's ok to start the comment on the same 
 line as "=begin" (though it's more readable if 
 you don't) but you can't put a space or any 
 text before "=begin" or "=end" and you can't put 
 anything on the same line after "=end". 
 =end 
` 

عند التنفيذ ، ينتج البرنامج أعلاه ما يلي:

 `Hello World! 
`
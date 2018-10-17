---
title: Ruby Conditionals
localeTitle: روبي الشرطي
---
يحتوي روبي على العديد من الشروط الشرطية الشائعة الاستخدام.

## إذا كانت البيانات

شائعة للغاية في العديد من لغات البرمجة ، يختبر البيان إذا كان الشرط صحيحًا ، ثم أدخل الفروع في الإجراء المحدد. عبارة if تتكون من واحد `if` ، أي عدد من `elsif` وعلى الأكثر واحد بيان `else` .

*    `fruit = :apple 
     
     if fruit == :apple 
      puts "Your fruit is an apple" 
     elsif fruit == :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    ` 
    

### ما لم يكن البيان

عبارة ما لم تكن عكس عبارة if. هو نفس عبارة negated if.

*   `ruby happy = true if !happy puts "This person is not happy" end` البيان أعلاه يساوي البيان أدناه
*   `ruby unless happy puts "This person is not happy" end`

## البيان الثلاثي

يستخدم البيان الثلاثي كبيان شرطي قصير. هو مكتوب على النحو التالي

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## بيان الحالة

يشبه بيان حالة عبارة if / elsif / else

*    `fruit = :apple 
     
     case fruit 
     when :apple 
      puts "Your fruit is an apple" 
     when :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    `
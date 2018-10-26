---
title: How to Redirect a Web Page
localeTitle: كيفية إعادة توجيه صفحة ويب
---
## كيفية إعادة توجيه صفحة ويب

لإعادة توجيه زوار موقعك إلى صفحة جديدة ، أضف سطرًا في قسم رأسك كما يلي: \`\` \`أتش تي أم أل

 `  <script type="text/javascript"> 
     <!-- 
        function Redirect() { 
           window.location="http://www.tutorialspoint.com"; 
        } 
     //--> 
  </script> 
` 

انقر فوق الزر التالي ، سيتم إعادة توجيهك إلى الصفحة الرئيسية.

 `  <form> 
     <input type="button" value="Redirect Me" onclick="Redirect();" /> 
  </form> 
` 

 `There is another option if you just want to change the page as soon as they reach that page: 
` 

جافا سكريبت window.location.assign ( "HTTPS: //www.yournewwebsite.fakewebsite")؛ \`\` \` استبدال موقع الويب بموقعك على الويب. ينبغي للمرء أن يذهب داخل ملف جافا سكريبت.
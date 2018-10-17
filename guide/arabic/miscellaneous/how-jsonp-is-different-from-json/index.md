---
title: How Jsonp Is Different from JSON
localeTitle: كيف Jsonp يختلف عن JSON
---
JSONP هو مجرد JSON ملفوف في وظيفة رد اتصال.

JSONP مفيد لتقديم طلبات عبر النطاقات ، والتي غالبًا ما تمنعها المتصفحات لأسباب أمنية.

 ` // an example of JSON 
 {"weapon":"nunchucks","headband":"yellow"} 
 
 // an example of JSONP 
 myCallback({"weapon":"nunchucks","headband":"yellow"}); 
` 

ثم للوصول إلى البيانات المخزنة في JSONP ، فإنك تحدد وظيفة رد الاتصال:

 `myCallback = function(data){ 
  alert(data.weapon); 
 }; 
`
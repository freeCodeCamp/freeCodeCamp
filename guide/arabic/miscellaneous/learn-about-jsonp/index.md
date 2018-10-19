---
title: Learn About Jsonp
localeTitle: تعرف على Jsonp
---
## JSONP

JSONP لتقف على "JSON مع الحشو". لنفترض أنك تريد تقديم طلبات AJAX إلى نطاق مختلف. حسنا ، لا يمكنك القيام بذلك مع XMLHttpRequest ، كما تفعل عادة ، ولكن يمكنك القيام بذلك مع علامات البرنامج النصي ، كما رأينا [على StackOverflow](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about) :

 `script = document.createElement('script'); 
 script.type = 'text/javascript'; 
 script.src = 'http://www.someWebApiServer.com/some-data'; 
` 

ولكن هذا قبيح ، والآن لدينا للحصول على عناصر من JSON من علامة النصي ، الإجمالي. لحسن الحظ ، كان منشئو JSONP يفكرون في المستقبل ، لذا بدلاً من وضع نصوصنا كما فعلنا أعلاه ، نقوم بذلك:

 `script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback'; 
` 

يؤدي هذا إلى معاودة الاتصال التلقائي بعد تحميل البيانات ، مما يؤدي إلى إنشاء وظيفة بالبيانات المطلوبة داخلها.

### معلومات اكثر:

*   [Wikipidea / JSONP](https://en.wikipedia.org/wiki/JSONP)
*   [JSONP و JQuery](https://learn.jquery.com/ajax/working-with-jsonp)
*   [أكثر JSONP مع JQuery](http://api.jquery.com/jquery.getjson/#jsonp)
*   [Ajax و JSONP](http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp)
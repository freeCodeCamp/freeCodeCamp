---
title: Template Literals
localeTitle: قالب حرفية
---## قالب حرفية

## المقدمة:

عندما نريد استخدام المتغير لإنشاء سلسلة ، يصبح مؤلماً للغاية حيث يتعين علينا استخدام إشارة + لسَلسَط وتتبع عروض الأسعار.

الآن مع ES6 ، يمكننا إنشاء سلسلة باستخدام backticks واستخدام العناصر النائبة المشار إليها بعلامة الدولار والأقواس المجعدة ، مثل $ {expression}.

 ``const name='John'; 
 const city='London'; 
 
 Older Style: 
 const sentence ='My name is '+ name +'. I live in '+city. 
 ES6 way: 
 const sentence = `My name is ${name}. I live in ${city}`; 
 Here ${name} and ${city}are going to be interpolated by the variable name and city respectively. 
`` 

## سلاسل MultiLine:

نمط أقدم:

عندما أردنا أن نمتد إلى سلسلة متعددة ، كان علينا استخدام الخطوط المائلة العكسية.

 `const multipleLineString= "We have \ 
 multiple lines \ 
 here"; 
` 

الآن عندما نريد إنشاء سلسلة mutiline ، يمكننا الاستفادة من سلاسل القوالب. يمكننا أن تحيط سلسلة لدينا مع backticks. هذا النهج مفيد للغاية عندما نريد إنشاء بعض ترميز html الديناميكي.

 ``const htmlMarkup = ` 
 <html> 
 <head></head> 
 <title>Template string</title> 
 <body>Hello World</body> 
 </html>`; 
`` 

## تداخل سلاسل قوالب:

يمكننا تداخلهم داخل بعضهم البعض.

 ``const cities =[ 
 {name:'Delhi', year: 2010}, 
 {name:'Mumbai', year: 2015}, 
 {name:'Kolkata', year: 2017}]; 
 
 
 const markup = ` 
 <ul> 
 ${cities.map(city=>`<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')} 
 </ul>`; 
`` 

هنا يقوم عامل التشغيل بعد وظيفة الخريطة بإزالة الفواصل الإضافية التي تتم إضافتها بعد كل li.

## إذا البيانات والوظائف

يمكننا أيضًا استخدام عبارات If داخل سلاسل القالب.

 ``const data = {name: 'John', city: 'London', birthyear: 1900}; 
 const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`; 
`` 

في المثال أعلاه ، إذا تم تعريف الميلاد ، فحينئذٍ يتم إنشاء محتويات "ولد في السنة" ، وإلا لن يكون هناك قسم تم إنشاؤه.

يمكننا أيضا استدعاء وظائف داخل سلاسل القالب.
---
title: Process Object
localeTitle: كائن العملية
---
## كائن العملية

يعد كائن `process` في Node.js كائنًا عموميًا يمكن الوصول إليه داخل أية وحدة نمطية دون الحاجة إلى ذلك. هناك عدد قليل جدًا من الكائنات أو الخصائص العامة المتوفرة في Node.js ، وتكون `process` واحدة منها. وهو مكون أساسي في النظام البيئي Node.js لأنه يوفر مجموعات المعلومات المختلفة حول وقت تشغيل البرنامج. لاستكشاف سوف نستخدم واحدة من خصائصه والتي تسمى `process.versions` . تخبرنا هذه الخاصية بالمعلومات حول إصدار Node.js الذي قمنا بتثبيته. يجب استخدامه مع `-p` flag.

 `$ node  -p "process.versions" 
 
 # output 
 { http_parser: '2.8.0', 
  node: '8.11.2', 
  v8: '6.2.414.54', 
  uv: '1.19.1', 
  zlib: '1.2.11', 
  ares: '1.10.1-DEV', 
  modules: '57', 
  nghttp2: '1.29.0', 
  napi: '3', 
  openssl: '1.0.2o', 
  icu: '60.1', 
  unicode: '10.0', 
  cldr: '32.0', 
  tz: '2017c' } 
` 

خاصية أخرى يمكنك التحقق منها هي `process.release` التي هي نفسها للأمر `$ node --version` التي استخدمناها عندما قمنا بتثبيت Node.js لكن الإخراج هذه المرة سيكون أكثر تفصيلاً.

 `node -p "process.release" 
 
 # output 
 { name: 'node', 
  lts: 'Carbon', 
  sourceUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2.tar.gz', 
  headersUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2-headers.tar.gz' } 
` 

هذه بعض الأوامر المختلفة التي يمكننا استخدامها في سطر الأوامر للوصول إلى المعلومات التي لا يمكن لأي وحدة توفيرها. يعتبر كائن `process` هذا مثالًا لفئة EventEmitter ولا يحتوي على أحداثه المحددة مسبقًا مثل `exit` والتي يمكن استخدامها لمعرفة متى أكمل أحد البرامج في Node.js تنفيذه. تشغيل البرنامج أدناه ويمكنك ملاحظة أن النتيجة تأتي مع رمز الحالة `0` . في Node.js يعني رمز الحالة هذا أن أحد البرامج قد تم تشغيله بنجاح.

 `process.on('exit', code => { 
    setTimeout(() => { 
        console.log('Will not get displayed'); 
    }, 0); 
 
    console.log('Exited with status code:', code); 
 }); 
 console.log('Execution Completed'); 
` 

ناتج البرنامج أعلاه:

 `Execution Completed 
 Exited with status code: 0 
` 

`Process` توفر أيضا خصائص مختلفة للتفاعل معها. يمكن استخدام بعضها في تطبيق عقدة لتوفير بوابة للتواصل بين تطبيق العقدة وأي واجهة سطر الأوامر. هذا مفيد جدا إذا كنت تقوم ببناء تطبيق سطر الأوامر أو أداة مساعدة باستخدام Node.js

*   process.stdin: دفق مقروء
*   process.stdout: تيار قابل للكتابة
*   process.stderr: دفق wriatable للتعرف على الأخطاء

باستخدام `argv` يمكنك دائما الوصول إلى الحجج التي تم تمريرها في سطر الأوامر. `argv` عبارة عن صفيف يحتوي على عقدة نفسه كعنصر أول والمسار المطلق للملف كعنصر آخر. من العنصر الثالث فصاعدًا ، يمكن أن يحتوي على العديد من الحجج.

جرب البرنامج أدناه للحصول على مزيد من المعرفة حول كيفية استخدام هذه الخصائص والوظائف المختلفة.

 `process.stdout.write('Hello World!' + '\n'); 
 
 process.argv.forEach(function(val, index, array) { 
    console.log(index + ': ' + val); 
 }); 
` 

إذا قمت بتشغيل التعليمات البرمجية المذكورة أعلاه باستخدام الأمر التالي ستحصل على الإخراج ويتم طباعة العناصر الأولين من `argv` .

 `$ node test.js 
 
 # output 
 Hello World! 
 0: /usr/local/bin/node 
 1: /Users/amanhimself/Desktop/articles/nodejs-text-tuts/test.js 
`
---
title: Global Object
localeTitle: كائن عالمي
---
الكائن العام هو كائن يتم تهيئته بواسطة مترجم JavaScript قبل تنفيذ التعليمة البرمجية. يتم تخزين كافة المتغيرات التي يتم تعريفها على النطاق العالمي (راجع: [Scopes](http://forum.freecodecamp.com/t/scopes-in-javascript/14696) ) في الكائن العمومي كخصائص.

في بيئة نود.جي إس، الكائن العالمي يمكن الوصول إليها من قبل `global` الكلمة، بينما في نافذة المتصفح يمكن الوصول إليها من قبل `window` الكلمة. تشير `this` الكلمة الأساسية أيضًا إلى الكائن العمومي عند استخدامه في النطاق العالمي. يرجى ملاحظة أن استخدام `this` في النطاق العالمي سيعرض `undefined` إذا تم تمكين `strict mode` .

فمثلا:

 `// global scope 
 var foo = "bar"; 
 
 console.log(global.foo); // bar (in a Node environment) 
 console.log(window.foo); // bar (in a browser window) 
 console.log(this.foo); // bar (if strict mode is disabled) 
` 

من المهم هنا التمييز بين النطاقات المحلية إلى الدوال والنطاق العالمي: فالعنصر العام يحتوي فقط على المتغيرات التي تم الإعلان عنها على النطاق العالمي ، وليس النطاقات المحلية للوظائف.

يحتوي الكائن العمومي أيضاً على خصائص `NaN` و `undefined` و `Infinity` و الوظائف التالية:

1.  `decodeURI()`
2.  `decodeURIComponent()`
3.  `encodeURI()`
4.  `encodeURIComponent()`
5.  `escape()`
6.  `eval()`
7.  `GetObject()`
8.  `isFinite()`
9.  `isNaN()`
10.  `parseFloat()`
11.  `parseInt()`
12.  `ScriptEngine()`
13.  `ScriptEngineBuildVersion()`
14.  `ScriptEngineMajorVersion()`
15.  `ScriptEngineMinorVersion()`
16.  `unescape()`

# المراجع

1.  MSDN: [كائن عمومي (Javascript)](https://msdn.microsoft.com/en-us/library/52f50e9t)
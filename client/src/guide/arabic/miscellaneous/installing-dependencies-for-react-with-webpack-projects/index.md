---
title: Installing Dependencies for React with Webpack Projects
localeTitle: تثبيت التبعيات للرد مع مشاريع Webpack
---
الآن بعد أن أصبح لدينا ملف تهيئة Webpack فارغًا ( `webpack.config.js` ) وملف حزمة حديثًا ( `package.json` ) ، نحتاج إلى تثبيت بعض الاعتماديات. يضيف تثبيت الاعتمادات تلقائيًا بعض البيانات إلى `package.json` . `package.json` .

يعتمد هذا المشروع على React و ReactDOM و Webpack و Webpack Dev Server. كما سيعتمد على عدد من باقات بابل ، لأننا سنقوم بكتابة الكود باستخدام ES6 ، [وبابل هي محوّل إسترالي](https://babeljs.io/) .

التبعيات التي نطلبها بالتفصيل:

| حزمة | السبب  
| [رد الفعل](https://www.npmjs.com/package/react) | "حزمة npm لتحصل على الوصول الفوري إلى React ، دون الحاجة إلى محول JSX." |  
| [رد فعل DOM](https://www.npmjs.com/package/react-dom) "تعمل هذه الحزمة كنقطة بداية لمسارات التقديم المتعلقة بـ DOM. من المفترض أن يتم إقرانه مع التفاعل المتشابه ، والذي سيتم شحنه كرد فعل على npm. ' |  
| [Webpack](https://www.npmjs.com/package/webpack) | "يسمح بتقسيم مصدر الكود إلى حزم متعددة ، والتي يمكن تحميلها عند الطلب." |  
| [Webpack ديف خادم](https://www.npmjs.com/package/webpack-dev-server) | "يقدم تطبيق webpack. تحديثات المتصفح على التغييرات. |  
| [بابل لودر](https://www.npmjs.com/package/babel-loader) | "محمل وحدة بابل لـ Webpack." |  
| بابل كور | مطلوب لبابل لودر. |  
| بابل مسبقا: ES2015 | مطلوب لبابل لودر. |  
| بابل مسبقا: رد فعل | مطلوب لبابل لودر. |

يمكننا المضي قدما وتثبيت كل هذه الوحدات بأمر واحد:

 `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react 
` 

إذا نظرنا إلى ملف `package.json` بنا الآن ، فسوف نلاحظ أن `devDependencies` بنا قد أصبحت قائمة `devDependencies` العقد التي قمنا بتثبيتها للتو. هذا مهم لأنه يعني أنه يمكننا تثبيت هذه مرة أخرى إذا كنا بحاجة إلى استخدام `npm install` .

*   [مساعدة: المزيد عن `dependencies` و `devDependencies`](http://stackoverflow.com/a/22004559/4637110)
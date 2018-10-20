---
title: Initializing the React Project with Webpack
localeTitle: تهيئة مشروع React مع Webpack
---
أول شيء يجب فعله هو فتح سطر الأوامر / المحطة. نحن بحاجة إلى تثبيت Webpack و Webpack Dev Server على مستوى العالم.

*   [مساعدة: مزيد من المعلومات حول تثبيت عقدة الوحدات على مستوى العالم](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
    
    npm install webpack webpack-dev-server -g
    

إن تثبيت هذه الوحدات على مستوى العالم يعني أنه يمكننا الرجوع إلى استخدام واجهات سطر الأوامر الخاصة بكل منها في الجهاز. يتيح لنا تثبيت Webpack تشغيل `webpack` من المحطة الطرفية لتنفيذ برنامج Webpack النصي. يتيح لنا تثبيت Webpack Dev Server تشغيل خادم localhost باستخدام توصيف Webpack الخاص بنا. كل هذا سيتضح بعد قليل.

في الدليل الذي تختاره ، أنشئ دليلًا جديدًا ، على سبيل المثال `react-webpack-example` ، وقم بتغيير الدليل إليه:

 `mkdir react-webpack-example && cd $_ 
` 

الآن بعد أن أصبحنا في دليلنا الجديد ، نحتاج إلى إنشاء ملف Webpack الخاص بنا ، والذي سيعيش في الجذر. هذا ملف تهيئة ، ولذلك قمنا `webpack.config.js` .

 `touch webpack.config.js 
` 

الآن ، يمكننا المضي قدمًا [وتهيئة مشروع npm](https://docs.npmjs.com/cli/init) باستخدام الأمر التالي:

 `npm init 
` 

يمكننا المضي قدمًا والضغط على مفتاح الإدخال للتنقل بين الخيارات المقدمة لنا في المحطة.

`npm init` الأمر `npm init` ملف `package.json` ، الذي سيحتوي على بيانات مهمة عن مشروعنا.

حتى الآن ، هذا ما يجب أن تبدو عليه شجرتنا:

 `. 
 ├── package.json 
 └── webpack.config.js 
` 

إذا فتحت ملف `package.json` ، فسترى شيئًا كالتالي:

 `{ 
  "name": "react-webpack-example", 
  "version": "1.0.0", 
  "description": "", 
  "main": "webpack.config.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "author": "", 
  "license": "ISC" 
 } 
`
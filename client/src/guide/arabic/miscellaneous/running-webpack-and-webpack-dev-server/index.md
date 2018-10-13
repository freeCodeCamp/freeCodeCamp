---
title: Running Webpack and Webpack Dev Server
localeTitle: تشغيل Webpack و Webpack ديف خادم
---
لقد حان الوقت لاستخدام Webpack. نظرًا لتثبيت Webpack عالميًا ، يمكننا تشغيل ما يلي في جهازنا:

 `webpack 
` 

سيقوم هذا بتشغيل ملف `webpack.config.js` بنا. يجب أن يتم تشغيلها بنجاح ، ويجب أن نرى شيئًا كهذا يظهر في مطرافنا:

 `Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 1721ms 
    Asset    Size  Chunks             Chunk Names 
 bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main 
    + 159 hidden modules 
` 

لاحظ أنه يشير إلى `Asset` دعا `bundle.js` . يخبرنا Webpack أنه قد تم إنشاء هذا الملف عندما ركضنا الأمر `webpack` . تحقق من مجلد `dist` الخاص بك ، ويجب أن ترى `bundle.js` إلى جانب `index.html` الخاص بك.

سوف تبدو شجرة لدينا الآن مثل هذا:

 `. 
 ├── dist 
 |   ├── bundle.js 
 │   └── index.html 
 ├── node_modules 
 ├── package.json 
 ├── src 
 │   └── js 
 │       └── client.js 
 └── webpack.config.js 
` 

والآن بعد أن أصبح لدينا `dist/bundle.js` ، يشير ملف `dist/index.html` الآن إلى ملف موجود! إذا ألقينا نظرة على `bundle.js` ، `bundle.js` أنها مجموعة من جميع ملفات جافا سكريبت في مشروعنا. رائع!

تفضل بالبحث عن بعض محتويات `dist/bundle.js` ، مثل `This is one cool app!` . يمكننا أن نرى سياقه في الملف ، إنه في إطار أسلوب غريب يبحث:

 `_createClass(Main, [{ 
  key: 'render', 
  value: function render() { 
    return _react2.default.createElement( 
      'div', 
      null, 
      _react2.default.createElement( 
        'h1', 
        null, 
        'This is one cool app!' 
      ) 
    ); 
  } 
 }]); 
` 

هذا ما فعلته بابل. لقد حولت الشفرة إلى ES5 وضمنتها بين ملفات جافا سكريبت الأخرى - بما في ذلك جميع وحدات عقدة لدينا ، بالطبع. الآن يمكن أن تشير جميع ملفات React إلى هذه الحزمة باستخدام عبارات `import` ES6.

أخيرًا ، حان الوقت للتحقق من التطبيق في المتصفح. لهذا ، سوف نستخدم Webpack Dev Server ، وهو عبارة عن أداة غنية بالميزات لاستخدامها في إعداد خادم `localhost` لتطوير الأغراض عند استخدام Webpack.

*   \[مساعدة: المزيد عن Webpack ديف خادم

المضي قدما وتشغيل:

 `webpack-dev-server --content-base dist 
` 

نحتاج إلى تضمين `--content-base dist` لتحديد قاعدة محتوى لـ Webpack Dev Server ، بحيث يعرف مكان الحصول على الملفات ؛ في هذه الحالة ، إنه المجلد `dist` ، لأن هذا هو المجلد الذي نستخدمه **للإنتاج في** مقابل المجلد `src` ، والذي نستخدمه _لتطوير_ \*.

في محطتنا ، يجب أن نرى شيئًا كالتالي:

 `http://localhost:8080/webpack-dev-server/ 
 webpack result is served from / 
 content is served from /Code/react-webpack-example/dist 
 Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 3738ms 
` 

وبعد ذلك ستكون هناك قائمة طويلة جدًا لجميع الملفات المجمعة في `dist/bundle.js` من Webpack. رائعة حقا!

الآن هو الوقت المناسب للتوجه إلى عنوان URL المقدم من خلال ذلك الأمر `webpack-dev-server` ، `http://localhost:8080/` . يجب أن نرى صفحة تحتوي على `h1` والتي تنص على ما يلي:

 `This is one cool app! 
` 

فلنتحقق من جزء "العناصر" الخاص بك في أدوات المطور الخاصة بنا. يجب أن يكون لدينا ما يلي:

 ``<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
  <style type="text/css"></style> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"> 
    <div data-reactid=".0"> 
      <h1 data-reactid=".0.0">This is one cool app!</h1> 
    </div> 
  </div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
`` 

إذا قمنا بهذا بما `src/js/client.js` في `src/js/client.js` ، فسوف نرى كيف يتم عرض React في `dist/index.html` .

إذا حصلت على هذا الآن ، أحسنت! أنت الآن تعرف كيفية إعداد مساحة عمل باستخدام رمز React و Webpack و ES6 ، وهو أمر رائع ، ويعطيك نقطة البداية لإنشاء تطبيقات ويب رائعة باستخدام أحدث التقنيات.

في البرنامج التعليمي التالي ، سنتناول بعض الخطوات المتقدمة ، بما في ذلك:

*   الذهاب إلى مزيد من التفاصيل مع React
*   النظر إلى بعض الميزات الرائعة الأخرى لـ Webpack ، مثل تجميع ملفات Sass
*   باستخدام minification على `dist/bundle.js`

#### معلومات اكثر:

[موقع Webpack](https://webpack.js.org/)

[Webpack جيثب](https://github.com/webpack/webpack)

[webpack-dev-server جيثب](https://github.com/webpack/webpack-dev-server)
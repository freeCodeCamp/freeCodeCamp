---
title: Setting Up a React Es6 and Webpack Project
localeTitle: إعداد مشروع React Es6 و Webpack
---
سيوجهك هذا الويكي إلى كيفية إعداد مشروع عظام مكشوف يستخدم React و Webpack و ES6. سنذهب أكثر من الحصول على كل شيء في العمق.

*   [مساعدة: المزيد عن رد الفعل](https://facebook.github.io/react/docs/why-react.html)

بالنسبة لهذا المشروع ، سوف نستفيد من Webpack ، الذي هو أداة تجميع وحدات نمطية ، ويستخدم بشكل شائع في مشاريع React.

*   [مساعدة: المزيد عن Webpack](https://webpack.github.io/docs/what-is-webpack.html)

[تفاعل بشكل جيد مع ES6](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) ، لذلك سنستخدم ES6 في الكود.

> يعد ES6 تحديثًا مهمًا للغة ، وتم تحديث أول تحديث للغة منذ أن تم توحيد ES5 في عام 2009.  
> \- [لوكيوبان](https://github.com/lukehoban/es6features)

لا يعمل ES6 في المتصفحات من تلقاء نفسه ، ولكن يمكننا أن نجعلها تعمل يدويًا باستخدام برنامج Babel لتحويلها إلى ES5.

تتمثل إحدى الميزات الرئيسية للتكنولوجيات التي نستخدمها في أن ملف `index.html` بنا سيشير إلى ملف واحد مجمع جافا سكريبت والذي يمكن من خلاله الرجوع إلى ملفات جافا سكريبت الأخرى ، بدلاً من الإشارة إليها من ملف HTML مع علامات `script` .

*   [مساعدة: المزيد عن ES6](http://dev.venntro.com/2013/09/es6-part-1/)

## المتطلبات الأساسية

يهدف هذا البرنامج التعليمي إلى إعطائك بنية عظمية مكشوفة يمكن توسيعها. يجب أن يكون نقطة انطلاق جيدة لأي شخص يريد معرفة React و ES6. إذا لم تقم بإنشاء أي شيء باستخدام JavaScript أو jQuery حتى الآن ، فيجب عليك مراجعة بعض التمارين في [خريطة FreeCodeCamp](http://www.freecodecamp.com/map) أولاً.

قبل البدء ، تأكد من [تثبيت NodeJS](https://nodejs.org/en/download/) و [Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm) على أحدث الإصدارات.

# تعليمات سريعة

فيما يلي قائمة بكل التعليمات المذكورة في هذا البرنامج التعليمي.

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   اكتب `.gitignore` (استخدم [https://www.gitignore.io/api/node](https://www.gitignore.io/api/node) )
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   اكتب `dist/index.html`
*   اكتب `src/js/client.js`
*   اكتب `webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   افتح طريق Webpack Dev Server في المتصفح. فعله!
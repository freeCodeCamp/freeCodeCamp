---
title: Writing Code for Your Es6 React with Webpack Project
localeTitle: كتابة قانون لك Es6 React مع Webpack Project
---
## شعبة نظم و / index.html

يمكننا الآن فتح `dist/index.html` . ستكون هذه الصفحة HTML الوحيدة التي تُحمِّل تطبيقنا بالكامل. لا نحتاج إلى الكثير من الشفرات على الإطلاق لهذا الملف ، وهو ما يكفي فقط إلى:

*   اضبط عنصرًا لـ React DOM في `src/js/client.js` .
*   اربط ملف جافا سكريبت الخاص بنا (الذي لم يكن موجودًا حتى الآن).

لذلك ، هذا ما سيبدو عليه ملف `dist/index.html` :

 ``<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"></div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
`` 

قد تتساءل عن سبب `bundle.js` هذه الصفحة بـ `bundle.js` عندما يكون كل ما لدينا حتى الآن هو `src/js/client.js` . سيتم الكشف عن هذا في وقت لاحق عندما نكتب ملف تكوين Webpack الخاص بنا.

## SRC / شبيبة / client.js

الآن حان الوقت لكتابة بعض رموز React. تمامًا كما هو الحال في ملف `dist/index.html` ، `dist/index.html` الآن ما يكفي من الشفرات للحصول على التطبيق ، لذا لن يكون هناك الكثير من الشفرات المطلوبة على الإطلاق:

 `import React from 'react'; 
 import ReactDOM from 'react-dom'; 
 
 class Main extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>This is one cool app!</h1> 
      </div> 
    ); 
  } 
 } 
 
 const app = document.getElementById('app'); 
 ReactDOM.render(<Main />, app); 
` 

الرمز الذي يشبه عناصر HTML هو في الواقع JSX ، وهو جزء من React.

*   [مساعدة: المزيد عن JSX](http://buildwithreact.com/tutorial/jsx)

لشرح ما يجري في هذا الملف ، سنقوم بتفصيله:

*   أولا، نحن استيراد `React` و `ReactDOM` . هذه مطلوبة لأي ملف React يتم استخدامه لحقن الكود في DOM. The `ReactDOM` هو DOM ظاهري ، وهو ليس نفس الشيء مثل نموذج كائن المستند القياسي.
    
*   [مساعدة: المزيد عن React DOM](https://facebook.github.io/react/docs/glossary.html)
    
    *   بعد ذلك ، نقوم بإنشاء فئة React. تمت إضافة فئات إلى JavaScript في ES6. لذلك ، هذه هي طريقة ES6 لكتابة فئة React ، ولكن بالطبع [يمكننا كتابة واحدة في ES5 أيضًا](https://toddmotto.com/react-create-class-versus-component/) .
*   [مساعدة: المزيد عن دروس ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    

كل فئة React لديه طريقة `render` . في هذه الحالة ، `return` طريقة `render` إلى عنصر `div` JSX. هذا ما سنراه في كل ملف React. يمكن أن تحتوي الطبقة الأساليب الأخرى التي يجب أن تظهر قبل `render` طريقة، والذي يذهب دائما في الجزء السفلي من فئة.

*   أخيرًا ، نحن نربط React بـ `index.html` لدينا. قمنا بتعيين `app` ليكون موقعًا حيثما أردنا أن يتم حقن شفرة React الخاص بنا. وأخيرًا ، باستخدام ReactDOM ، نقوم بحقن المكون الذي كتبناه ، `<Main />` ، في التطبيق ، وهو في هذه الحالة `div` مع `id` `app` .

## webpack.config.js

ما زال هناك ملف واحد آخر يكتب قبل أن يصبح مشروعنا جاهزًا. إنه ملف تكوين Webpack. في البداية ، يمكن أن تكون ملفات `webpack.config.js` مربكة للنظر ، ولكن في كثير من الأحيان ، ليست معقدة كما تبدو.

في هذه الحالة ، في أبسط `webpack.config.js` ، يقوم `webpack.config.js` بتصدير كائن له الخصائص التالية:

| الملكية الدور  
| --- | --- |  
| دخول | ما يدور في: نقطة دخول التطبيق. في هذه الحالة ، يكون `src/js/client.js` . |  
| الانتاج | ما الذي سيخرج: ما ستقوم حزمة Webpack بتجميعه لنا. في هذه الحالة ، كل ما نسميه في `webpack.config.js` . |  
| رافعات | المهام التي ستنفذها Webpack. |

هذا ما يبدو عليه ملف `webpack.config.js` :

 `var path = require('path'); 
 var srcPath = path.join(__dirname, 'src'); 
 var buildPath = path.join(__dirname, 'dist'); 
 
 module.exports = { 
  context: srcPath, 
  entry: path.join(srcPath, 'js', 'client.js'), 
  output: { 
      path: buildPath, 
      filename: "bundle.js" 
  }, 
  module: { 
      loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'> 
          { 
            test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: 'babel', 
            query: { 
              presets: ['react', 'es2015'] 
            } 
          } 
      ] 
  } 
 }; 
` 

مرة أخرى ، دعنا نكسرها بحيث يتضح ما يفعله هذا الملف:

*   أولاً ، نحن نطلب وحدة `path` NodeJS بحيث يمكننا التعامل مع مسارات الملفات ، والتي تكون مطلوبة لتعيين `context` الكائن. من المهم جدًا استخدام هذه الوحدة بدلاً من محاولة وربط الدلائل بالسلاسل ، لأن بعض أنظمة التشغيل ، مثل Windows ، تتطلب ذلك.
    
*   ثم ، نحدد `srcPath` و `buildPath` باستخدام وحدة `path` التي `buildPath` فقط. سيضمن القيام بذلك لدينا \[جاف ، رمز قابل للقراءة.
    
*   حان الوقت الآن لكتابة الكائن. الخصائص التي سنستخدمها كلها ذات صلة بـ Webpack.
    
    *   نقدم أولاً سياقًا يحدد ببساطة مكان تطبيقنا. إنه يشير إلى متغير `context` الذي أنشأناه للتو.
    *   ثم نحدد نقطة الدخول ، وهو بالطبع تطبيق `src/js/client.js` سابقًا ( `src/js/client.js` ).
    *   بعد ذلك ، نحدد اسم الملف المجمّع الذي ينشئه Webpack عند تشغيله. في هذه الحالة ، يكون `dist/bundle.js` . تبدو مألوفة؟ يجب أن تفعل ، لأن هذا هو الملف الذي نربطه من `dist/index.html` لدينا!
    *   وأخيرًا ، تأتي خاصية `module` ، التي تحتوي على مصفوفة ، `loaders` ، تحتوي حاليًا على كائن واحد. تخبر خصائص هذا الكائن Webpack ما هي ملفات جافا سكريبت التي يتم كتابتها مع ES6 و React ، بحيث يمكن تشغيل محمل لها ، `babel` وفقا لذلك عند تشغيل `webpack.config.js` . هذا هو رمز المعيار الرئيسي الذي يمكننا رؤيته في [الصفحة التمهيديّة على Babel Loader](https://github.com/babel/babel-loader) .

إذا كان `webpack.config.js` مربكًا الآن ، فلا داعي للقلق ، طالما أنك تفهم ما هو موجود فعله.

*   [تعليمات: المزيد حول كتابة ملف تكوين Webpack](https://webpack.github.io/docs/tutorials/getting-started/#config-file)
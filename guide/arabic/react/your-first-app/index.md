---
title: Your first React App
localeTitle: لديك أول رد فعل التطبيق
---
## لديك أول رد فعل التطبيق

### التركيب

كما هو محدد في الأداة السابقة (التثبيت) ، قم بتشغيل أداة `Create React App` React. بعد الانتهاء من كل شيء ، أدخل `cd` في مجلد التطبيق الخاص بك وقم بتشغيل `npm start` . سيؤدي هذا إلى بدء خادم تطوير وستكون جاهزًا للبدء في تطوير تطبيقك!

 `npm install -g react-create-app 
 create-react-app my-first-app 
 
 cd my-first-app 
 npm start 
` 

### تحرير الرمز

بدء تشغيل المحرر الخاص بك أو IDE للاختيار وتحرير ملف `App.js` في المجلد `src` . عند إنشائه باستخدام أداة `react-create-app` ، سيكون هناك بالفعل شفرة في هذا الملف.

يتكون الرمز من الأجزاء التالية:

#### واردات

 `import React, { Component } from 'react'; 
 import logo from './logo.svg'; 
 import './App.css'; 
` 

يتم استخدام هذا من خلال [webpack](https://webpack.js.org/) لاستيراد جميع الوحدات المطلوبة بحيث يمكن أن تستخدمها الكود. هذا الرمز يستورد 3 وحدات: 1) `React` `Component` ، مما يسمح لنا باستخدام React كما ينبغي استخدامه. (مع المكونات) 2) `logo` ، والذي يسمح لنا باستخدام `logo.svg` في هذا الملف. 3) `./App.css` ، التي تستورد ورقة الأنماط لهذا الملف.

#### فصول / المكونات

 `class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1> 
        </header> 
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p> 
      </div> 
    ); 
  } 
 } 
` 

React هي مكتبة تستخدم المكونات ، والتي تتيح لك تقسيم واجهة المستخدم إلى أجزاء مستقلة يمكن إعادة استخدامها والتفكير في كل قطعة بمعزل عن غيرها. يوجد بالفعل مكون واحد مكون ، مكون `App` . إذا كنت تستخدم أداة `create-react-app` ، فإن هذا المكون هو المكون الرئيسي في المشروع ويجب أن تبني حول هذه الطبقة المركزية.

سننظر في المكونات أكثر تفصيلاً في الفصول القادمة.

#### صادرات

عند إنشاء فئة في الاستجابة ، يجب عليك تصديرها بعد التصريح ، والذي يسمح لك باستخدام المكون في ملف آخر باستخدام الكلمة الأساسية `import` . يمكنك استخدام `default` بعد الكلمة الأساسية `export` لإعلام React أن هذه هي الفئة الرئيسية من هذا الملف.

 `export default App; 
` 

### عرض النتائج!

عند بدء تشغيل خادم التطوير من خلال إصدار الأمر `npm start` ، يمكنك مشاهدة التغييرات التي تضيفها إلى مشروعك مباشرة في متصفحك. بعد إصدار الأمر ، يجب أن يفتح npm متصفحًا يعرض تطبيقك تلقائيًا.

### مصادر

[1\. رد فعل الوثائق](https://reactjs.org/docs/hello-world.html)
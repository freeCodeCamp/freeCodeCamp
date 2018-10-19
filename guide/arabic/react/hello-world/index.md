---
title: Hello World
localeTitle: مرحبا بالعالم
---
## مرحبا بالعالم !!

يبدأ كل تعلم لغة بمثال Traditional Hello World. هنا ، يمكنك التعرف على React مع نفس برنامج HelloWorld.

كل شيء في React مكون.

ولكن قبل ذلك ، نحتاج إلى التأكد من تثبيت node.js و npm في جهاز الكمبيوتر. بشكل اختياري ، يمكننا استخدام CRA (إنشاء تطبيق React) وهو عبارة عن أداة تم تصميمها بواسطة المطورين على Facebook لمساعدتك على بناء تطبيقات React. إنه يوفر عليك من الإعداد والتهيئة المستهلكة للوقت. يمكنك ببساطة تشغيل أمر واحد وإنشاء تطبيق رد يعمل على إعداد الأدوات التي تحتاجها لبدء مشروع React.

يمكننا تثبيته من خلال الأوامر التالية

 `npm install -g create-react-app 
 
 create-react-app my-app 
 
 cd my-app 
 npm start 
` 

يجب أن يمنحك سطر الأوامر مخرجات حيث يمكنك العثور على التطبيق في المستعرض. يجب أن يكون الإعداد الافتراضي هو localhost: 8080. إذا كنت تستخدم IE أو Edge فقط على جهاز يعمل بنظام التشغيل Windows ، فيمكنني أن أوصيك بتثبيت Chrome أيضًا للوصول إلى بيئة مطوّري البرامج وأدوات React Developer التي تتوفر كإضافة Chrome.

![بديل يتفاعل صفحة البداية](https://cdn-images-1.medium.com/max/800/1*Qcry5pCXIy2KeNRsq3w7Bg.png)

#### SRC / App.js

نسخ الرمز أدناه ولصقه في src / App.js

 `  import React from 'react'; 
 
  class App extends React.Component{ 
    constructor(props) { 
      super(props); 
    } 
 
    render(){ 
      return( 
        <div> 
          <p>Hello World !!</p> 
        </div> 
      ); 
    } 
  } 
 
  export default App; 
` 

إذا تحققنا من ملف index.js في المجلد src ، نجد أن تطبيق App.js أعلاه يسمى index.js ثم تم تقديمه.

 `// Other code 
 import App from './App'; // The App component is imported 
 
 // Other code 
 ReactDOM.render(<App />, 
 document.getElementById('root'));  //The <App /> is the way components are called in react after importing them 
 
 // Other code 
` 

في ما سبق ، يسمى App.js بمكون. عادة ، نقوم بعمل مكونات متعددة ونضعها معًا في App.js والتي سيتم بعد ذلك تقديمها في index.js والتي يتم بعد ذلك تحويلها إلى div root الموجود في index.html.

مبروك !! لقد أنشأت أول تطبيق لـ React Hello world. تعلم المزيد عن رد الفعل في المقالات القادمة.

الترميز سعيدة!
*هنيئا لك

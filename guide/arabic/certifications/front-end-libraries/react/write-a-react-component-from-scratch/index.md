---
title: Write a React Component from Scratch
localeTitle: اكتب مكون React من سكراتش
---
## اكتب مكون React من سكراتش

في هذا التحدي ، نرغب في إنشاء مكون تفاعل `class` (يمكن أن تكون مكونات React مكونات `class` أو مكونات `function` ). جميع مكونات الفصل لدينا ستكون `React.Component` لـ `React.Component` . على سبيل المثال ، يمكننا البدء في إنشاء مكون يسمى `FirstComponent` مع:

 `class FirstComponent extends React.Component { 
 
 }; 
` 

نحتاج أيضًا إلى التأكد من تعريف `constructor` لفئتنا الجديدة. ومن أفضل الممارسات لاستدعاء أي مكون `constructor` مع `super` ولتمرير `props` على حد سواء. `super` تسحب `constructor` الفئة الأصل المكون لدينا (في هذه الحالة `React.Component` ). الآن ، تبدو الشفرة الخاصة بمكوننا كما يلي:

 `class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
 
 }; 
` 

الآن كل ما تبقى القيام به هو تحديد ما `render` ! نقوم بذلك عن طريق استدعاء طريقة `render` المكون ، وإرجاع رمز JSX الخاص بنا:

 `class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      // The JSX code you put here is what your component will render 
    ); 
  } 
 }; 
` 

بمجرد وجود شفرة JSX الخاصة بك ، اكتمل المكون الخاص بك! إذا كنت تريد تعليمي أكثر دقة من مكونات React [كتب](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) سامر بونا [مقالة رائعة](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) .
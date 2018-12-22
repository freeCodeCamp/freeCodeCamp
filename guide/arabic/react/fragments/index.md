---
title: Fragments
localeTitle: الشظايا
---
# الشظايا Fragments

الشظايا هي طريقة لعرض عناصر متعددة دون استخدام عنصر محيط. عند محاولة تقديم عناصر بدون عنصر محيطة في JSX ، سترى رسالة الخطأ `Adjacent JSX elements must be wrapped in an enclosing tag` . وذلك لأنه عندما يقوم JSX بالتحويل ، فإنه ينشئ عناصر تحمل أسماء علاماتها المقابلة ، ولا يعرف اسم العلامة التي يجب استخدامها إذا تم العثور على عناصر متعددة. في الماضي ، كان الحل المتكرر لهذا هو استخدام div diver لحل هذه المشكلة. ومع ذلك ، جلب الإصدار 16 من React إضافة `Fragment` ، مما يجعل هذا ليس ضروريًا.

تعمل `Fragment` جزءًا بدون إضافة أقسام غير ضرورية إلى DOM. يمكنك استخدامه مباشرة من استيراد React أو تفكيكه:

 `import React from 'react'; 
 
 class MyComponent extends React.Component { 
  render(){ 
    return ( 
      <React.Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </React.Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
` 

 `// Deconstructed 
 import React, { Component, Fragment } from 'react'; 
 
 class MyComponent extends Component { 
  render(){ 
    return ( 
      <Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
` 

نجح الإصدار 16.2 من React في تبسيط هذه العملية بشكل أكبر ، مما يسمح بوضع علامات JSX فارغة في شكل أجزاء:

 `return ( 
  <> 
    <div>I am an element!</div> 
    <button>I am another element</button> 
  </> 
 ); 
` 

#### معلومات اكثر:

*   [React.Fragment (الوثائق الرسمية)](https://reactjs.org/docs/react-api.html#reactfragment)
*   [React v16.2.0: تحسين الدعم للشظايا](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)

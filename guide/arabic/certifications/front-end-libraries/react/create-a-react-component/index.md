---
title: Create a React Component
localeTitle: إنشاء مكون React
---
## إنشاء مكون React

## تلميح 1:

*   ستشاهد هذه المكونات التفاعلية React Class Components طوال الوقت ، لذا سيكون الآن وقتًا رائعًا للراحة معهم. تذكر في هذا التمرين أنك لا تحتاج إلى تحديد المكوّن ، فأنت تحتاج فقط إلى جعل وظيفة ترجع html قليلاً بين السطور المميزة.
*   تذكر المقطع السابق وإرجاع عنصر "div" الذي يحتوي على "h1" مع النص Hello React !.
*   يحتوي عنصر "div" على طفل لذلك تذكر إغلاق جميع العلامات.

## حل

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    // change code below this line 
    return ( 
      <div> 
       <h1>Hello React!</h1> 
      </div> 
    ); 
    // change code above this line 
  } 
 }; 
` 

لاحظ أنك لا تحتاج إلى وضع علامات اقتباس حول النص ، لأنه عندما تعمل مع JSX يتم التعامل معه على أنه HTML. تحقق أيضًا من صحة التهجئة والحالة وعلامات الترقيم! إذا كان كل هذا التعليمة البرمجية يبدو غريبا ، اذهب إلى الاطلاع على بعض المواد الرائعة الموجودة على Javascript ES6 هنا على freeCodeCamp.
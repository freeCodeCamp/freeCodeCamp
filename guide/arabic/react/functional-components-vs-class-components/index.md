---
title: Functional Components vs Class Components
localeTitle: المكونات الوظيفية مقابل مكونات Class
---
## المكونات الوظيفية مقابل مكونات Class

هناك مكونان رئيسيان في React:

*   مكونات وظيفية
*   مكونات الطبقة

## مكونات وظيفية

*   المكونات الوظيفية هي وظائف JavaScript الأساسية. هذه هي عادة وظائف الأسهم ولكن يمكن أيضا أن يتم إنشاؤها باستخدام الكلمة الأساسية `function` العادية.
*   يشار إليها أحيانًا بمكونات "البكم" أو "عديمة الجنسية" لأنها تقبل البيانات ببساطة وتعرضها بشكل ما ؛ هذا هو المسؤول الرئيسي عن تقديم واجهة المستخدم.
*   لا يمكن استخدام أساليب دورة الحياة التفاعلية (على سبيل المثال ، `componentDidMount` ) في المكونات الوظيفية.
*   لا توجد طريقة تجسيد مستخدمة في المكونات الوظيفية.
*   وهي مسؤولة بشكل أساسي عن واجهة المستخدم وهي عادةً ما تكون معروضة فقط (على سبيل المثال ، مكون زر).
*   يمكن للمكونات الوظيفية قبول الدعائم واستخدامها.
*   يجب تفضيل المكونات الوظيفية إذا لم تكن بحاجة إلى استخدام حالة React.

 `import React from "react"; 
 
 const Person = props => ( 
  <div> 
    <h1>Hello, {props.name}</h1> 
  </div> 
 ); 
 
 export default Person; 
` 

## مكونات الطبقة

*   تستفيد مكونات الفئة من فئة ES6 وتمتد فئة `Component` في React.
*   تُسمى أحيانًا المكونات "الذكية" أو "ذات الحالة" لأنها تميل إلى تطبيق المنطق والدولة.
*   يمكن استخدام أساليب دورة الحياة التفاعلية داخل مكونات الفئة (على سبيل المثال ، `componentDidMount` ).
*   يمكنك تمرير الدعائم لأسفل إلى مكونات الفصل والوصول إليها باستخدام `this.props`

 `import React, { Component } from "react"; 
 
 class Person extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      myState: true; 
    } 
  } 
 
  render() { 
    return ( 
      <div> 
        <h1>Hello Person</h1> 
      </div> 
    ); 
  } 
 } 
 
 export default Person; 
` 

## معلومات اكثر

*   [React Components](https://reactjs.org/docs/components-and-props.html)
*   [مكونات وظيفية مقابل فئة](https://react.christmas/16)
*   [مقابل مقابل مكونات وظيفية عديم الحالة في رد الفعل](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
*   [الدولة ودورة الحياة](https://reactjs.org/docs/state-and-lifecycle.html)
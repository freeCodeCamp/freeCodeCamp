---
title: Compose React Components
localeTitle: تأليف React Components
---
## تأليف React Components

### ملحوظة

استخدام المكونات المتداخلة كما في challemge السابقة لتقديم المكونات.

### حل

ما يلي هو الحل لل chakkenge ، حيث تجعل الحمضيات و NonCitrus في مكون ثم يتم تقديمها في آخر:

 `class Fruits extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h2>Fruits:</h2> 
        <NonCitrus /> 
        <Citrus /> 
      </div> 
    ); 
  } 
 }; 
 
 class TypesOfFood extends React.Component { 
  constructor(props) { 
     super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <Fruits /> 
        <Vegetables /> 
      </div> 
    ); 
  } 
 }; 
` 

### روابط ذات صلة:

*   [المكونات والدعائم](https://reactjs.org/docs/components-and-props.html)
*   [المكونات المتداخلة](http://www.reactjstutorial.net/nested-components.html)
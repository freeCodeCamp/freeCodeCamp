---
title: Render State in the User Interface
localeTitle: تقديم الدولة في واجهة المستخدم
---
## تقديم الدولة في واجهة المستخدم

في هذا التحدي ، ستحتاج إلى تقديم قيمة حالة في العلامة `<h1>` ، بسيطة جدًا.

## ملحوظة

ما عليك سوى إنشاء علامة `<h1>` `this.state.name` العلامة `this.state.name` بين العلامة.

## حل

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'freeCodeCamp' 
    } 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <h1>{this.state.name}</h1> 
        { /* change code above this line */ } 
      </div> 
    ); 
  } 
 }; 
`
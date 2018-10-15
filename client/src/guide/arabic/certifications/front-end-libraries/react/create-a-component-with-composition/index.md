---
title: Create a Component with Composition
localeTitle: إنشاء مكون مع التركيب
---
## إنشاء مكون مع التركيب

### تلميح 1

أضف المكون المراد تقديمه في المكون الذي سيتم عرضه فيه.

### تلميح 2

استخدم علامات إغلاق JSX ذاتية.

### تلميح 3

المكون الذي سيتم تقديمه هو ChildComponenet ثم يتم تقديمه في ParentComponent

### حل

سوف يقدم التالية في ChildComponent في ParentComponent ، كما هو مطلوب:

 `class ParentComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>I am the parent</h1> 
        <ChildComponent /> 
      </div> 
    ); 
  } 
 }; 
`
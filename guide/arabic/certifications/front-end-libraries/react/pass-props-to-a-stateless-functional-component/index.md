---
title: Pass Props to a Stateless Functional Component
localeTitle: تمرير الدعائم إلى مكون وظيفي عديم الحالة
---
## تمرير الدعائم إلى مكون وظيفي عديم الحالة

### تلميح 1

حدد تاريخًا مسمى للدعم في مكون التقويم كما يلي:

 `<CurrentDate date={Date()} /> 
` 

\`

### تلميح 2

يتم استخدام بناء الجملة prop.propName لتقديم دعم.

### حل

قم بتعيين تاريخ مسمى للدعم في مكون التقويم كما يلي وقم بعرضه في مكون التقويم ، مثل:

 `const CurrentDate = (props) => { 
  return ( 
    <div> 
      <p>The current date is: {props.date}</p> 
    </div> 
  ); 
 }; 
 
 class Calendar extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h3>What date is it?</h3> 
        <CurrentDate date={Date()} /> 
      </div> 
    ); 
  } 
 }; 
`
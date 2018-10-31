---
title: Override Default Props
localeTitle: تجاوز الدعائم الافتراضية
---
## تجاوز الدعائم الافتراضية

لقد تجاوزت هذا التحدي القيمة الافتراضية `quantity` الدعائية لمكون العناصر. حيث يتم تعيين القيمة الافتراضية `quantity` إلى `0` .

 `const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 } 
 
 Items.defaultProps = { 
  quantity: 0 
 } 
` 

لتجاوز قيمة الدعائم الافتراضية ، تكون الصيغة التي يجب اتباعها هي

 `<Component propsName={Value}/> 
` 

باتباع "بناء الجملة" ، يجب أن يتم تعريف التعليمة البرمجية التالية أدناه التعليمات البرمجية المحددة

 `<Items quantity={50}/> 
` 

سيؤدي هذا إلى تجاوز القيمة من `0` إلى `50`
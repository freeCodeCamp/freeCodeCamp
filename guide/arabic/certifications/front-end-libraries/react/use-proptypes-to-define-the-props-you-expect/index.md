---
title: Use PropTypes to Define the Props You Expect
localeTitle: استخدم PropTypes لتحديد الدعائم التي تتوقعها
---
## استخدم PropTypes لتحديد الدعائم التي تتوقعها

هذا التحدي قد قمت بتعيين `propTypes` لمكون `Items` .

 `const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 }; 
` 

لتعيين propTypes ، فإن الصيغة التي يجب اتباعها هي

 `itemName.propTypes = { 
  props: PropTypes.dataType.isRequired 
 }; 
` 

بعد التركيب، يجب وضع التعليمات البرمجية التالية أدناه رمز نظرا ل `quantity` الدعائم من `Items` عنصر

 `Items.propTypes = { 
  quantity: PropTypes.number.isRequired 
 }; 
`
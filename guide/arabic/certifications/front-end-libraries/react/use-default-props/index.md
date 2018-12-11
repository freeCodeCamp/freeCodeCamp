---
title: Use Default Props
localeTitle: استخدام الدعائم الافتراضية
---
## استخدام الدعائم الافتراضية

هذا التحدي قد قمت بتعريف دعم افتراضي لمكون ShoppingCart

 `const ShoppingCart = (props) => { 
  return ( 
    <div> 
      <h1>Shopping Cart Component</h1> 
    </div> 
  ) 
 }; 
` 

لإعلان دعامة افتراضية ، فإن الصيغة التي يجب اتباعها هي

 `itemName.defaultProps = { 
  prop-x: value, 
  prop-y: value 
 } 
` 

باتباع "بناء الجملة" ، يجب أن يتم تعريف التعليمة البرمجية التالية أدناه التعليمات البرمجية المحددة

 `ShoppingCart.defaultProps = { 
  items: 0 
 } 
` 

هذا يعلن دعامة تسمى "العناصر" بقيمة "0".
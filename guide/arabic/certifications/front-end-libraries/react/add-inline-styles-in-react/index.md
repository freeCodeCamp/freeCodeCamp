---
title: Add Inline Styles in React
localeTitle: إضافة أنماط مضمنة في React
---
## إضافة أنماط مضمنة في React

يمكنك تعريف نمط مكون تمرير الكائن مباشرة كـ "نمط" prop. فقط تذكر أن كل خاصية من كائن النمط هي camelcased. لذا ، تُعلن الخصائص مثل "font-size" بأنها "fontSize" لتكون خاصية كائن جافا سكريبت صالحة.

### المفسد

 `class Colorful extends React.Component { 
  render() { 
    // change code below this line 
    return ( 
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div> 
    ); 
    // change code above this line 
  } 
 }; 
` 

### مصادر

[DOM Elements Style](https://reactjs.org/docs/dom-elements.html#style)
---
title: Use State to Toggle an Element
localeTitle: استخدم الدولة لتبديل عنصر
---
## استخدم الدولة لتبديل عنصر

*   يمكنك تبديل عنصر عن طريق فحص وتغيير حالته.

## تلميح 1:

*   تذكر أن تربط `this` بمنشئ الطريقة.

 `    this.toggleVisibility = this.toggleVisibility.bind(this); 
` 

## تلميح 2:

*   تذكر ، يمكنك استخدام وظيفة JavaScript للتحقق من حالة عنصر ما.

## حل:

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      visibility: false 
    }; 
    // change code below this line 
    this.toggleVisibility = this.toggleVisibility.bind(this); 
    // change code above this line 
  } 
  // change code below this line 
  toggleVisibility() { 
    if (this.state.visibility == true) { 
    this.setState({ 
      visibility: false 
    });} else { 
      this.setState({ 
        visibility: true 
      }) 
    } 
  } 
  // change code above this line 
  render() { 
    if (this.state.visibility) { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
          <h1>Now you see me!</h1> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
        </div> 
      ); 
    } 
  } 
 }; 
`
---
title: Set State with this.setState
localeTitle: قم بتعيين الحالة مع هذا .setState
---
## قم بتعيين الحالة مع هذا .setState

#### تلميح 1:

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
       // Update the state data by using "this.setState()" method. 
       // You can look to the sample inside the description for calling "setState()" method. 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
` 

## حل

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
    this.setState({ 
      name: 'React Rocks!' 
    }); 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
` 

### شرح الشفرة:

عندما ينقر المستخدمون على الزر "the handleClick ()" سيتم استدعاء طريقة و داخل هذه الطريقة سيتم تحديث بيانات حالة constuctor\`s بواسطة "setState ()" الطريقة. ثم سيتم تغيير علامة h1 مع البيانات الجديدة لحالة المنشئ.
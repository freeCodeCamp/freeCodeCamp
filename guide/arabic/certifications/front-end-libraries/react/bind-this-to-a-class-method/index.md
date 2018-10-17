---
title: Bind 'this' to a Class Method
localeTitle: ربط "هذا" لطريقة Class
---
## ربط "هذا" لطريقة Class

إذا كانت هناك طريقة في `class` جافا سكريبت تحتاج إلى الوصول إلى بعض `state` الداخلية للمثيل ، مثل هذه `this.state` ، فإن الطريقة تحتاج إلى الالتزام بمثيل `class` . يمكن العثور [هنا](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md) على وصف أكثر تفصيلاً لهذا الرابط

### تلميح 1

مثل العديد من الأشياء في البرمجة ، هناك أكثر من طريقة لربط هذا. من أجل هذا التحدي ، سنلتزم بالربط مع المُنشئ.

 `class MyClass { 
  constructor() { 
    this.myMethod = this.myMethod.bind(this); 
  } 
 
  myMethod() { 
    // whatever myMethod does 
  } 
 } 
` 

## المفسد

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      itemCount: 0 
    }; 
    // change code below this line 
    this.addItem = this.addItem.bind(this); 
    // change code above this line 
  } 
  addItem() { 
    this.setState({ 
      itemCount: this.state.itemCount + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <button onClick={this.addItem}>Click Me</button> 
        { /* change code above this line */ } 
        <h1>Current Item Count: {this.state.itemCount}</h1> 
      </div> 
    ); 
  } 
 } 
`
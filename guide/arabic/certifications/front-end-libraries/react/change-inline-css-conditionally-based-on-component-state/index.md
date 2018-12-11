---
title: Change Inline CSS Conditionally Based on Component State
localeTitle: تغيير CSS المضمنة بناء على حالة المكون
---
## تغيير CSS المضمنة بناء على حالة المكون

## تلميح 1:

ستقوم بالتحقق من طول هذا `this.state.input` بحيث تستخدم خاصية `.length` .

 `this.state.input.length 
` 

## تلميح 2:

أنت تقوم بإدخال التعليمات البرمجية قبل بيان الإرجاع حتى يمكنك استخدام جافا سكريبت خالص `if/then` بيان.

## حل:

ستستخدم عبارة `if/then` للتحقق من قيمة هذا `this.state.input.length` . إذا كان أطول من 15 ، `inputStyle.border` `'3px solid red'` إلى `inputStyle.border` .

 `class GateKeeper extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      input: '' 
    }; 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ input: event.target.value }) 
  } 
  render() { 
    let inputStyle = { 
      border: '1px solid black' 
    }; 
    // change code below this line 
    if (this.state.input.length > 15) { 
      inputStyle.border = '3px solid red'; 
    } 
    // change code above this line 
    return ( 
      <div> 
        <h3>Don't Type Too Much:</h3> 
        <input 
          type="text" 
          style={inputStyle} 
          value={this.state.input} 
          onChange={this.handleChange} /> 
      </div> 
    ); 
  } 
 }; 
` 

## حل

اكتب عبارة شرطية يتم تقييمها وفقًا لحالتك ، كما هو مذكور في وصف التحدي ، وتتحقق من طول الإدخال وتعين كائنًا جديدًا لمتغير inputStyle.

 `if (this.state.input.length > 15) { 
  inputStyle = { 
    border: '3px solid red' 
  } 
 } 
`
---
title: Pass a Callback as Props
localeTitle: تمرير رد الاتصال على النحو الدعائم
---
## تمرير رد الاتصال على النحو الدعائم

### وصف

*   إضافة مكون `GetInput` إلى طريقة `GetInput` في MyApp ، ثم تمريرها دعامة تسمى `inpu` t المعينة إلى `inputValue` من حالة MyApp. أيضا إنشاء دعامة تسمى `handleChange` وتمرير `handleChange` معالج `handleChange` ذلك.
*   إضافة `RenderInput` إلى طريقة `RenderInput` في MyApp ، ثم إنشاء دعم يسمى `input` وتمرير `inputValue` من حالة إليه.

### إشارة

*   `state` هي خاصية من فئة `Myapp` ، لذلك استخدم "this.state" للحصول على قيمة الكائن
*   لمعرفة المزيد عن الحالة والدعائم ، اقرأ [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) and [Components and Props](https://reactjs.org/docs/components-and-props.html) .

### حل

 `class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      inputValue: '' 
    } 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ 
      inputValue: event.target.value 
    }); 
  } 
  render() { 
    return ( 
       <div> 
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> 
        } 
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/> 
        } 
       </div> 
    ); 
  } 
 }; 
`
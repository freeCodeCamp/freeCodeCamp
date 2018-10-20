---
title: State
localeTitle: حالة
---
# حالة

الدولة هي المكان الذي تأتي منه البيانات.

يجب أن نحاول دائمًا جعل ولايتنا بسيطة قدر الإمكان وتقليل عدد المكونات الحميدة. إذا كان لدينا ، على سبيل المثال ، عشرة مكونات تحتاج إلى بيانات من الحالة ، فيجب علينا إنشاء مكون حاوية واحد سيحافظ على الحالة لكلها.

الدولة هي في الأساس مثل كائن عالمي متاح في كل مكان في أحد المكونات.

مثال على مكون فئة جليل:

 `import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.x}</h1> 
        <h2>{this.state.y}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
` 

مثال آخر:

 `import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
 
  render() { 
    let x1 = this.state.x; 
    let y1 = this.state.y; 
 
    return ( 
      <div> 
        <h1>{x1}</h1> 
        <h2>{y1}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
` 

## تحديث الدولة

يمكنك تغيير البيانات المخزنة في حالة التطبيق الخاص بك باستخدام طريقة `setState` على المكون الخاص بك.

 `this.setState({ value: 1 }); 
` 

ضع في اعتبارك أن `setState` غير متزامن لذا يجب توخي الحذر عند استخدام الحالة الحالية لتعيين حالة جديدة. مثال جيد لهذا سيكون إذا كنت ترغب في زيادة قيمة في ولايتك.

#### الطريق الخطأ

 `this.setState({ value: this.state.value + 1 }); 
` 

يمكن أن يؤدي ذلك إلى سلوك غير متوقع في تطبيقك إذا كان الرمز أعلاه يُسمى عدة مرات في نفس دورة التحديث. لتجنب هذا يمكنك تمرير دالة رد اتصال محدث إلى `setState` بدلاً من كائن.

#### الطريق الصحيح

 `this.setState(prevState => ({ value: prevState.value + 1 })); 
` 

## تحديث الدولة

يمكنك تغيير البيانات المخزنة في حالة التطبيق الخاص بك باستخدام طريقة `setState` على المكون الخاص بك.

 `this.setState({value: 1}); 
` 

ضع في اعتبارك أن `setState` قد تكون غير متزامنة لذا يجب توخي الحذر عند استخدام الحالة الحالية لتعيين حالة جديدة. مثال جيد لهذا سيكون إذا كنت ترغب في زيادة قيمة في ولايتك.

##### الطريق الخطأ

 `this.setState({value: this.state.value + 1}); 
` 

يمكن أن يؤدي ذلك إلى سلوك غير متوقع في تطبيقك إذا كان الرمز أعلاه يُسمى عدة مرات في نفس دورة التحديث. لتجنب هذا يمكنك تمرير دالة رد اتصال محدث إلى `setState` بدلاً من كائن.

##### الطريق الصحيح

 `this.setState(prevState => ({value: prevState.value + 1})); 
` 

##### الطريق الأنظف

 `this.setState(({ value }) => ({ value: value + 1 })); 
` 

عندما تكون هناك حاجة لعدد محدود من الحقول في كائن الحالة ، يمكن استخدام تدمير الكائن لرمز أنظف.

### معلومات اكثر

*   [رد الفعل - الدولة ودورة الحياة](https://reactjs.org/docs/state-and-lifecycle.html)
*   [رد الفعل - رفع الدولة](https://reactjs.org/docs/lifting-state-up.html)
*   [رد الفعل الأصلية - حتى الدولة](https://facebook.github.io/react-native/docs/state.html)
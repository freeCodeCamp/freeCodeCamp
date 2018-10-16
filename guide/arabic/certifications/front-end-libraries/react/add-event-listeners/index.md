---
title: Add Event Listeners
localeTitle: اضافة المستمعين الحدث
---
## اضافة المستمعين الحدث

يقوم هذا التحدي بتعديل مكونين من أساليب دورة الحياة componentDidMount و componentWillUnmount. يمكنك استخدام componentDidMount عندما تريد تعيين شيء ما ، في حالتك ، مستمع الحدث. يمكنك استخدام componentWillUnmount عندما تحتاج إلى مسح هذا شيء ، مستمع الحدث الخاص بك.

ستضيف مستمع حدث إلى طريقة componentDidMount التي ستستمع إلى حدث "keydown". استخدم document.addEventListener (حدث ، وظيفة ، اختياري (useCapture)). ثم قم بإزالة وحدة إصغاء الحدث نفسها بتمرير نفس الوسيطات إلى document.removeEventListener (حدث ، دالة ، اختياري (useCapture)) داخل methodwillUnmount method.

ملاحظة: document.addEventListener و document.removeEventListener سوف يأخذ في سلسلة مقتبسة عن الحدث الخاص به ، وعند تمريره في الدالة ، ستشير إليه handleKeyPress () باسم this.handleKeyPress. إذا قمت باستدعاء الدالة على هذا .handleKeyPress () ، سيقوم مستمع الحدث بتقييم الدالة أولاً وسيعيد قيمة غير معرفة.

 `class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: '' 
    }; 
    this.handleEnter = this.handleEnter.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this); 
  } 
  // change code below this line 
  componentDidMount() { 
    document.addEventListener("keydown", this.handleKeyPress) 
  } 
  componentWillUnmount() { 
    document.removeEventListener("keydown", this.handleKeyPress) 
  } 
  // change code above this line 
  handleEnter() { 
    this.setState({ 
      message: this.state.message + 'You pressed the enter key! ' 
    }); 
  } 
  handleKeyPress(event) { 
    if (event.keyCode === 13) { 
      this.handleEnter(); 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.message}</h1> 
      </div> 
    ); 
  } 
 }; 
` 

### مصادر

[React Components](https://reactjs.org/docs/react-component.html) ، [دورات الحياة الشائعة](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) ، [الدولة ودورات الحياة](https://reactjs.org/docs/state-and-lifecycle.html) ، [document.addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) ، [أحداث HTML DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)
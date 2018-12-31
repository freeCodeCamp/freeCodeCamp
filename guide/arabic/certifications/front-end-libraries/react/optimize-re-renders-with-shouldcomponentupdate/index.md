---
title: Optimize Re-Renders with shouldComponentUpdate
localeTitle: تحسين Re-Renders مع shouldComponentUpdate
---
## تحسين Re-Renders مع shouldComponentUpdate

## ملحوظة:

تحقق لمعرفة ما إذا كانت قيمة `nextProps` متساوية.

## حل:

بالنسبة لهذا الحل ، ستستخدم عبارة `if/then` للتحقق مما إذا كانت قيمة `nextProps` متساوية. تختلف `nextProps` عن `props` في أنها قيمة لم يتم تقديمها في واجهة المستخدم بعد ، لذا في أسلوب `shouldComponentUpdate()` ، فأنت تطلب بشكل أساسي إذنًا لتحديث واجهة المستخدم بقيمة `nextProps` .

 `class OnlyEvens extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  shouldComponentUpdate(nextProps, nextState) { 
    console.log('Should I update?'); 
     // change code below this line 
      if (nextProps.value % 2 == 0) { 
        return true; 
      } 
      return false; 
     // change code above this line 
  } 
  componentWillReceiveProps(nextProps) { 
    console.log('Receiving new props...'); 
  } 
  componentDidUpdate() { 
    console.log('Component re-rendered.'); 
  } 
  render() { 
    return <h1>{this.props.value}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      value: 0 
    }; 
    this.addValue = this.addValue.bind(this); 
  } 
  addValue() { 
    this.setState({ 
      value: this.state.value + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.addValue}>Add</button> 
        <OnlyEvens value={this.state.value}/> 
      </div> 
    ); 
  } 
 }; 
`
---
title: React - Components
localeTitle: رد الفعل - مكونات
---
## رد الفعل - مكونات

مكونات قابلة لإعادة الاستخدام في react.js. يمكنك ضخ القيمة في الدعائم كما هو موضح أدناه:

 `function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>; 
 } 
 
 const element = <Welcome name="Faisal Arkan" />; 
 ReactDOM.render( 
  element, 
  document.getElementById('root') 
 ); 
` 

`name="Faisal Arkan"` سيعطي قيمة في `{props.name}` من `function Welcome(props)` `{props.name}` المكونة التي أعطيت القيمة `name="Faisal Arkan"` ، بعد أن تتفاعل ستجعل العنصر في html.

### طرق أخرى لإعلان المكونات

هناك العديد من الطرق لاعلان المكونات عند استخدام React.js، ولكن هناك نوعان من المكونات، ومكونات **_عديمي الجنسية_** ومكونات **_جليل._**

### جليل

#### مكونات نوع الطبقة

 `class Cat extends React.Component { 
  constructor(props) { 
    super(props); 
 
    this.state = { 
      humor: 'happy' 
    } 
  } 
  render() { 
    return( 
      <div> 
        <h1>{this.props.name}</h1> 
        <p> 
          {this.props.color} 
        </p> 
      </div> 
    ); 
  } 
 } 
` 

### مكونات عديمة الحالة

#### مكونات وظيفية (وظيفة السهم من ES6)

 `const Cat = props => { 
  return ( 
    <div> 
      <h1>{props.name}</h1> 
      <p>{props.color}</p> 
    </div>; 
  ); 
 }; 
` 

#### مكونات العودة الضمنية

 `const Cat = props => 
  <div> 
    <h1>{props.name}</h1> 
    <p>{props.color}</p> 
  </div>; 
`
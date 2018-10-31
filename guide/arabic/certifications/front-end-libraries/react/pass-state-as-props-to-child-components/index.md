---
title: Pass State as Props to Child Components
localeTitle: تمرير حالة الدعائم إلى مكونات الأطفال
---
## تمرير حالة الدعائم إلى مكونات الأطفال

في هذا التحدي ، سنمرر الدولة ، ولكن بما أن الحالة محلية لمكونها الأم ، يجب أن نستخدم **الدعائم** لتمريرها إلى المكون الفرعي. سيسمح لنا استخدام الدعائم في المكونات الفرعية بالاحتفاظ بكل بيانات الحالة في المكون الرئيسي ويمكننا تمرير البيانات في اتجاه واحد إلى مكونات الأطفال.

 `class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'CamperBot' 
    } 
  } 
  render() { 
    return ( 
       <div> 
         // Here we will call this.state.name in order to pass the value of CamperBot 
         // to the NavBar component 
         <Navbar name={this.state.name} /> 
       </div> 
    ); 
  } 
 }; 
 
 class Navbar extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
    <div> 
      // Since we passed in the CamperBot state value into the the NavBar component above 
      // the h1 element below will render the value passed from state 
      <h1>Hello, my name is: {this.props.name}</h1> 
    </div> 
    ); 
  } 
 }; 
`
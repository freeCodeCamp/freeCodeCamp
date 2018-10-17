---
title: Props
localeTitle: الدعائم
---
## رد الفعل الأصلية - الدعائم

المصطلح الدعائم ، اختصارًا لـ "الخصائص" ، يعني نوعًا من البيانات التي يتم تمريرها من أحد المكونات إلى آخر. تتدفق الدعائم دائمًا من المكون الرئيسي إلى الطفل.

في React ، يستطيع المكون الفرعي الوصول إلى المعلومات من أحد الوالدين عبر الدعائم:

 `// the child Header component receives the text prop and can access it via this.props.text 
 class Header extends Component { 
  render () { 
    return ( 
      <Text>{this.props.text}</Text> 
    ) 
  } 
 } 
 
 class App extends Component { 
  render () { 
    return ( 
      <Header text="Welcome!" /> 
    ); 
  } 
 } 
` 

هذا أيضا يعمل بنفس الطريقة في المكونات الوظيفية:

 `// in functional components, props will be received as a parameter 'props' 
 const Header = (props) => { 
  return ( 
    <Text>{props.title}</Text> 
  ); 
 }; 
 
 class App extends Component { 
  render () { 
    return ( 
      <View> 
    <Header text="Welcome!" /> 
      </View> 
    ); 
  } 
 } 
` 

ستتيح لك المكتبات الأخرى التي تقوم باستيرادها الوصول إلى خصائص إضافية داخل المكونات الخاصة بك. فيما يلي مثال من مكتبة [العناصر](https://github.com/react-native-training/react-native-elements) المتفاعلة [الأصلية](https://github.com/react-native-training/react-native-elements) .

 ``import { Button } from 'react-native-elements'; 
 
 // here 'buttonStyle' and 'title' are props passed into the Button component 
 class App extends Component { 
  render () { 
    return ( 
      <Button 
    buttonStyle={{backgroundColor: 'red', borderRadius: 10}} 
    title={`Submit`} 
      /> 
    ); 
  } 
 } 
``
---
title: Component State
localeTitle: حالة المكون
---
## حالة المكون

في مكونات `Class` ، توجد طريقة لتخزين وإدارة الحالة المدمجة في React Native.

 `class App extends Component { 
  constructor () { 
    super(); 
    this.state = { 
      counter: 0 
    }; 
  } 
  incrementCount () { 
    this.setState({ 
      counter: this.state.counter + 1 
    }); 
  } 
  decrementCount () { 
    this.setState({ 
      counter: this.state.counter - 1 
    }); 
  } 
  render () { 
    return ( 
      <View> 
        <Text>Count: {this.state.counter}</Text> 
        <Button onPress={this.decrementCount.bind(this)}>-</Button> 
        <Button onPress={this.incrementCount.bind(this)}>+</Button> 
      </View> 
    ); 
  } 
 } 
` 

الحالة مشابهة للدعائم ، ولكنها خاصة ويتم التحكم فيها بالكامل بواسطة المكون. هنا ، يتم استدعاء الأسلوب `constructor()` فئة الأصل "المنشئ `super();` - **`Component`** هو الفئة الرئيسية `App` لأننا نستخدم الكلمة الرئيسية `extends` . تقوم أداة `constructor()` أيضًا بتهيئة كائن حالة المكون:

 `this.state = { 
  counter: 0 
 }; 
` 

يمكن عرض الحالة داخل المكون:

 `{this.state.counter} 
` 

أو تحديثه عن طريق الاتصال:

 `this.setState({}); 
` 

**ملاحظة:** بصرف النظر عن الإنشاء المبدئي في طريقة `constructor()` المكون `constructor()` ، يجب ألا تقوم أبدًا بتعديل حالة المكوّن مباشرةً بهذا `this.state =` . يجب استخدام هذا `this.setState` كما يمكن رؤيته في الدالتين `incrementCount` و `decrementCount` أعلاه.

يتم زيادة العدد `onPress` عن طريق استدعاء الدالات التي تم تمريرها إلى معالجات `onPress` مثلما لو كانت تسمى معالج النقر من JavaScript على الويب.

_بصيغة ASIDE: في المثال الأول ، يعد `<Button>` مكونًا مخصصًا ؛ إنه مزيج من `<TouchableOpacity>` و `<Text>` من واجهة برمجة التطبيقات React Native API:_

 `const Button = ({ onPress, children, buttonProps, textProps }) => { 
  const { buttonStyle, textStyle } = styles; 
  return ( 
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonProps]}> 
      <Text style={[textStyle, textProps]}> 
        {children} 
      </Text> 
    </TouchableOpacity> 
  ); 
 }; 
`
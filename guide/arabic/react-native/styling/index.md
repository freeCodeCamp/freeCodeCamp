---
title: Styling
localeTitle: تصميم
---
## رد الفعل الأصلية - التصميم

يوفر React Native واجهة برمجة تطبيقات لإنشاء أوراق الأنماط وتصميم [مكوناتك](https://facebook.github.io/react-native/docs/stylesheet) : [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet) .

 `import React, { Component } from 'react'; 
 import { StyleSheet, View, Text } from 'react-native'; 
 
 export default class App extends Component { 
  render () { 
    return ( 
      <View> 
        <Text style={styles.header}>I am a header!</Text> 
        <Text style={styles.text}>I am some blue text.</Text> 
      </View> 
    ); 
  } 
 } 
 
 const styles = StyleSheet.create({ 
  header: { 
    fontSize: 20 
  }, 
  text: { 
    color: 'blue' 
  } 
 }); 
` 

في حين أن أنماط صفحات الأنماط المتتالية من CSS غير صالحة ، فإن مجموعة الروابط المتداخلة لـ CSS الخاصة بـ Native تشبه إلى حد كبير CSS التقليدية. تكون العديد من خصائص CSS (مثل `color` ، `height` ، `top` ، `right` ، `bottom` ، `left` ) هي نفسها في StyleSheet. يجب تغيير أي خصائص CSS لها واصلات (مثل `font-size` ، `background-color` ) إلى camelCase (مثل `fontSize` ، `backgroundColor` ).

ليست كل خصائص CSS موجودة في StyleSheet. نظرًا لعدم وجود مفهوم حقيقي للحوم على أجهزة الجوال ، فإن خصائص CSS hover لا تتواجد في React Native. بدلاً من ذلك ، يوفر [React](https://facebook.github.io/react-native/docs/handling-touches#touchables) Native [مكونات قابلة](https://facebook.github.io/react-native/docs/handling-touches#touchables) للمس التي تستجيب لأحداث اللمس.

كما لا يتم توريث الأنماط كما هي في CSS التقليدية. في معظم الحالات ، يجب عليك تعريف نمط كل مكون.

### تنسيقات Flexbox

يستخدم [React](https://facebook.github.io/react-native/docs/flexbox) Native تطبيق [flexbox](https://facebook.github.io/react-native/docs/flexbox) مشابهًا لمعيار الويب. بشكل افتراضي ، سيتم تعيين العناصر في العرض `display: flex` .

> إذا كنت لا ترغب في استخدام flexbox ، فيمكنك أيضًا ترتيب React Native components عبر المواقع `relative` أو `absolute` .

`flexDirection: column` Native `flexDirection: column` to `flexDirection: column` ، instead of `flex-direction: row` (web standard). تعرض قيمة `column` العناصر المرنة رأسياً ، والتي تستوعب الأجهزة المحمولة في الاتجاه العمودي.

لمعرفة المزيد حول flexbox ، قم بزيارة [هذا الدليل التفصيلي حول CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ونهج تعلم مهذب مع [Flexbox Froggy](http://flexboxfroggy.com/) .

### مكونات منسقة

لا يسهل دائمًا الحفاظ على تضمين الكثير من الأنماط في ملف يحتوي على مكون. يمكن للمكونات ذات التصميم حل هذه المشكلة.

على سبيل المثال ، يمكن استخدام مكون زر في أماكن متعددة عبر تطبيق ما. لن يكون نسخ كائن النمط ولصقه مع كل نسخة زر غير فعال. بدلاً من ذلك ، قم بإنشاء مكون زر يمكن استخدامه وإعادة استخدامه:

 `import React from 'react'; 
 import { Text, TouchableOpacity } from 'react-native'; 
 
 const Button = ({ onPress, children }) => { 
  const { buttonStyle, textStyle } = styles; 
  return ( 
    <TouchableOpacity onPress={onPress} style={buttonStyle}> 
      <Text style={textStyle}> 
        {children} 
      </Text> 
    </TouchableOpacity> 
  ); 
 }; 
 
 export default Button; 
 
 const styles = { 
  textStyle: { 
    alignSelf: 'center', 
    color: '#336633', 
    fontSize: 16, 
    fontWeight: '600', 
    paddingTop: 10, 
    paddingBottom: 10 
  }, 
  buttonStyle: { 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#336633', 
    paddingTop: 4, 
    paddingBottom: 4, 
    paddingRight: 25, 
    paddingLeft: 25, 
    marginTop: 10, 
    width: 300 
  } 
 }; 
` 

يمكن بسهولة استيراد واستخدام مكون الزر عبر التطبيق دون الإعلان عن كائن النمط بشكل متكرر:

 `import React, { Component } from 'react'; 
 import { TextInput, View } from 'react-native'; 
 import Button from './styling/Button'; 
 
 export default class Login extends Component { 
  render() { 
    return ( 
        <View> 
          <TextInput placeholder='Username or Email' /> 
          <TextInput placeholder='Password' /> 
          <Button>Log In</Button> 
        </View> 
    ); 
  } 
 } 
` 

### مكتبات لتصميم

هناك عدد قليل من المكتبات الشعبية لتصميم React Native. يوفر بعضها ميزات مشابهة لـ [Bootstrap](../../bootstrap/index.md) ، بما في ذلك النماذج الافتراضية وأنماط الأزرار وخيارات تخطيط الصفحة. واحدة من المكتبات الأكثر شعبية هي [اسلوب-- المكونات](https://github.com/styled-components/styled-components) . هناك العديد من الآخرين يمكنك العثور على npm و GitHub في محاولة لنفسك.
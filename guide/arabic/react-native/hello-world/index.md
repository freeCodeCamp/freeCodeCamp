---
title: Hello World
localeTitle: مرحبا بالعالم
---
## مرحبا بالعالم

في صفحة الويب التقليدية ، يمكنك بسهولة تقديم `Hello World!` على الشاشة عن طريق كتابة بعض HTML مثل هذا:

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Test Page</title> 
  </head> 
  <body> 
    <p>Hello World!</p> 
  </body> 
 </html> 
` 

في React Native ، لا يوجد DOM أو مستعرض ، لذلك يجب عليك عرض الأشياء على الشاشة من واجهة برمجة تطبيقات الجوال التي يقدمها React Native. على سبيل المثال ، بدلاً من استخدام علامة `<p>` كملف للنص كما لو كنت على الويب ، يمكنك استخدام `<Text>` ؛ بدلاً من علامات حاوية `<div>` ، يمكنك استخدام `<View>` .

 `import React, { Component } from 'react'; 
 import { AppRegistry, View, Text } from 'react-native'; 
 
 class App extends Component { 
  render () { 
    return ( 
      <View> 
        <Text> Hello World! </Text> 
      </View> 
    ); 
  } 
 } 
 
 AppRegistry.registerComponent('AwesomeProject', () => App); 
` 

لعرض التعليمات البرمجية إلى الشاشة ، بدلاً من فتح الصفحة في مستعرض ، يمكنك استخدام أسلوب `AppRegistry.registerComponent()` خاص `AppRegistry.registerComponent()` Native لتقديم التطبيق إلى جهاز محمول.
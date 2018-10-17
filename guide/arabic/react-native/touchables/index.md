---
title: Touchables
localeTitle: ملموس
---
## React Native - Touchables

تدور بعض الميزات الرئيسية للأجهزة المحمولة حول تفاعلات اللمس للمستخدم. يمكن أن يعمل تطبيق الجوّال على التعامل مع هذه التفاعلات ويستجيب لها أو يؤدي إلى كسر تجربة المستخدم.

React Native ships مع عنصر `Button` يعمل مع العديد من تفاعلات `onPress` القياسية. بشكل افتراضي ، فإنه يعطي ملاحظات المستخدم عن طريق تغيير العتامة لإظهار الضغط على الزر. الاستعمال:

 `<Button onPress={handlePress} title="Submit" /> 
` 

لحالات الاستخدام الأكثر تعقيدًا ، قام React Native بإنشاء واجهات برمجة التطبيقات للتعامل مع التفاعلات الصحفية المسماة `Touchables` .

 `TouchableHighlight 
 TouchableNativeFeedback 
 TouchableOpacity 
 TouchableWithoutFeedback 
` 

يمكن تصميم واستخدام كل من هذه المكونات القابلة للتشابك مع مكتبة ، مثل `Animated` المدمجة ، مما يتيح لك إنشاء أنواع خاصة بك من تعليقات المستخدمين المخصصة.

بعض الأمثلة على استخدام هذه المكونات:

 `// with images 
 <TouchableHighlight onPress={this.handlePress}> 
  <Image 
    style={styles.button} 
    source={require('./logo.png')} 
  /> 
 </TouchableHighlight> 
 
 // with text 
 <TouchableHighlight onPress={this.handlePress}> 
  <Text>Hello</Text> 
 </TouchableHighlight> 
` 

يمكنك التعامل مع أنواع مختلفة من الضغط على الزر أيضًا. بشكل افتراضي ، يتم تكوين الأزرار و touchables للتعامل مع الصنابير العادية ، ولكن يمكنك أيضا أن تشير إلى وظيفة لاستدعاء اضغط مع الاستمرار على التفاعلات على سبيل المثال.

 `<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}> 
` 

للاطلاع على جميع الأدوات المتوفرة المتوفرة وكيفية عمل هذه المكونات ، يمكنك الاطلاع على [شفرة مصدر جافا سكريبت لـ Touchables هنا](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable) .
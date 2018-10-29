---
title: Hello World
localeTitle: 你好，世界
---
## 你好，世界

在传统网页中，您可以轻松渲染`Hello World!`写一些像这样的HTML到屏幕：

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Test Page</title> 
  </head> 
  <body> 
    <p>Hello World!</p> 
  </body> 
 </html> 
```

在React Native中，没有DOM或浏览器，因此您必须从React Native提供的移动API向屏幕渲染内容。例如，您可以使用`<Text>` ;而不是像在Web上那样使用`<p>`标记作为文本的包装器。而不是`<div>`容器标签，您将使用`<View>` 。

```js
import React, { Component } from 'react'; 
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
```

要将代码呈现到屏幕，而不是在浏览器中打开页面，您可以使用React Native提供的特殊`AppRegistry.registerComponent()`方法将应用程序呈现给移动设备。
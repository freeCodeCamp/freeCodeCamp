---
title: Styling
localeTitle: 造型
---
## React Native - 造型

React Native提供了一个用于创建样式表和样式化组件的API： [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet) 。

```jsx
import React, { Component } from 'react'; 
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
```

虽然常规CSS样式表无效，但React Native的CSS超集与传统CSS非常相似。 StyleSheet中的许多CSS属性（例如`color` ， `height` ， `top` ， `right` ， `bottom` ， `left` ）都相同。任何具有连字符（例如`font-size` ， `background-color` ）的CSS属性都必须更改为camelCase（例如`fontSize` ， `backgroundColor` ）。

StyleSheet中并不存在所有CSS属性。由于在移动设备上没有真正的悬停概念，因此React Native中不存在CSS悬停属性。相反，React Native提供了响应触摸事件的[Touchable组件](https://facebook.github.io/react-native/docs/handling-touches#touchables) 。

样式也不像传统CSS那样继承。在大多数情况下，您必须声明每个组件的样式。

### Flexbox布局

React Native使用类似于web标准的[flexbox](https://facebook.github.io/react-native/docs/flexbox)实现。默认情况下，视图中的项目将设置为`display: flex` 。

> 如果您不想使用flexbox，还可以通过`relative`或`absolute`定位来安排React Native组件。

React Native中的`flexDirection: column`默认为`flexDirection: column` ，而不是`flex-direction: row` （web标准）。 `column`值垂直显示灵活项目，可以纵向移动设备。

要了解有关flexbox的更多信息，请访问[此CSS-Tricks详细指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)以及[Flexbox Froggy](http://flexboxfroggy.com/)的游戏化学习方法。

### 样式组件

在包含组件的文件中包含大量样式并不总是易于维护。样式组件可以解决此问题。

例如，Button组件可以在应用程序的多个位置使用。使用每个Button实例复制和粘贴样式对象效率很低。相反，创建一个可重用的样式Button组件：

```jsx
import React from 'react'; 
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
```

可以在应用程序中轻松导入和使用样式化Button组件，而无需重复声明样式对象：

```jsx
import React, { Component } from 'react'; 
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
```

### 造型图书馆

有一些流行的React Native样式库。其中一些提供类似于[Bootstrap的](../../bootstrap/index.md)功能，包括默认表单，按钮样式和页面布局选项。最受欢迎的库之一是[样式组件](https://github.com/styled-components/styled-components) 。您可以在npm和GitHub上找到许多其他人来自己尝试。
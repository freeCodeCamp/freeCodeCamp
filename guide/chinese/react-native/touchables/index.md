---
title: Touchables
localeTitle: 可触摸
---
## React Native - Touchables

移动设备的一些主要功能围绕用户触摸交互。移动应用程序如何处理和响应这些交互可以决定用户的体验。

React Native附带一个`Button`组件，适用于许多标准`onPress`交互。默认情况下，它会通过更改不透明度来显示按钮被按下，从而为用户提供反馈。用法：

```js
<Button onPress={handlePress} title="Submit" /> 
```

对于更复杂的用例，React Native内置了API来处理名为`Touchables`新闻交互。
```
TouchableHighlight 
 TouchableNativeFeedback 
 TouchableOpacity 
 TouchableWithoutFeedback 
```

这些可触摸组件中的每一个都可以设置样式并与库一起使用，例如内置的`Animated` ，允许您制作自己类型的自定义用户反馈。

使用这些组件的一些示例：

```js
// with images 
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
```

您也可以处理不同类型的按钮。默认情况下，按钮和触摸按钮配置为处理常规点击，但您也可以表示调用按住和保持交互的功能。

```js
<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}> 
```

要查看所有可用的道具以及这些组件的工作方式，您可以在[此处查看Touchables的JavaScript源代码](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable) 。
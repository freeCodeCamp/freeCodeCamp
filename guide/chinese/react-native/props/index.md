---
title: Props
localeTitle: 道具
---
## React Native - 道具

术语props是“属性”的缩写，表示从一个组件传递到另一个组件的某种类型的数据。道具总是从父组件向下流向子组件。

在React中，子组件可以通过props访问父级的信息：

```jsx
// the child Header component receives the text prop and can access it via this.props.text 
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
```

这在功能组件中的工作方式也相同：

```jsx
// in functional components, props will be received as a parameter 'props' 
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
```

您导入的其他库还可以访问组件中的其他属性。以下是来自[react-native-elements](https://github.com/react-native-training/react-native-elements)库的示例。

```jsx
import { Button } from 'react-native-elements'; 
 
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

```
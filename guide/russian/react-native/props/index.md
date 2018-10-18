---
title: Props
localeTitle: Свойства
---
## React-native - свойства

Термин «props», сокращенный для «property», означает некоторый тип данных, передаваемых из одного компонента в другой. Свойства всегда передаются вниз от родительского компонента к дочернему.

В React дочерний компонент имеет доступ к информации от родителя через свойства:

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

Это также работает в функциональных компонентах:

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

Другие импортируемые библиотеки также дадут вам доступ к дополнительным свойствам внутри ваших компонентов. Вот пример из библиотеки [реагирующих на-элементов](https://github.com/react-native-training/react-native-elements) .

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

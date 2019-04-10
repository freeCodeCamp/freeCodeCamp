---
title: Props
localeTitle: Adereços
---
## Reagir Nativo - Adereços

O termo props, abreviação de 'properties', significa algum tipo de dado que é passado de um componente para outro. Adereços sempre fluem para baixo a partir do componente pai para o filho.

Em React, o componente filho tem acesso às informações de um pai por meio de adereços:

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

Isso também funciona da mesma maneira em componentes funcionais:

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

Outras bibliotecas importadas também lhe darão acesso a propriedades adicionais dentro de seus componentes. Aqui está um exemplo da biblioteca [react-native-elements](https://github.com/react-native-training/react-native-elements) .

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
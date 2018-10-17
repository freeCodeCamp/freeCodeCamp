---
title: Props
localeTitle: Accesorios
---
## Reaccionar nativo - apoyos

El término props, abreviatura de 'propiedades', significa algún tipo de datos que se pasan de un componente a otro. Los apoyos siempre fluyen hacia abajo desde el componente padre al hijo.

En React, el componente hijo tiene acceso a la información de un padre a través de accesorios:

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

Esto también funciona de la misma manera en componentes funcionales:

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

Otras bibliotecas que importe también le darán acceso a propiedades adicionales dentro de sus componentes. Aquí hay un ejemplo de la biblioteca [react-native-elements](https://github.com/react-native-training/react-native-elements) .

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
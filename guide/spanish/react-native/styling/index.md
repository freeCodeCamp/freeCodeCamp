---
title: Styling
localeTitle: Estilo
---
## React Native - Styling

React Native proporciona una API para crear hojas de estilo y diseñar sus componentes: [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet) .

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

Si bien las hojas de estilo CSS normales no son válidas, el superconjunto de CSS de React Native es muy similar al CSS tradicional. Muchas propiedades CSS (por ejemplo, `color` , `height` , `top` , `right` , `bottom` , `left` ) son las mismas en StyleSheet. Cualquiera de las propiedades CSS que tienen guiones (por ejemplo, `font-size` , `background-color` ) deben cambiarse para camelCase (por ejemplo `fontSize` , `backgroundColor` ).

No todas las propiedades CSS existen en StyleSheet. Dado que no existe un verdadero concepto de desplazamiento en dispositivos móviles, las propiedades de activación de CSS no existen en React Native. En su lugar, React Native proporciona [componentes](https://facebook.github.io/react-native/docs/handling-touches#touchables) táctiles que responden a eventos táctiles.

Los estilos tampoco se heredan como están en CSS tradicional. En la mayoría de los casos, debe declarar el estilo de cada componente.

### Diseños Flexbox

React Native utiliza una implementación de [flexbox](https://facebook.github.io/react-native/docs/flexbox) similar al estándar web. De forma predeterminada, los elementos de la vista se configurarán para `display: flex` .

> Si no desea utilizar flexbox, también puede organizar los componentes React Native mediante `absolute` posicionamiento `relative` o `absolute` .

Flexbox en React Native por defecto es `flexDirection: column` , en lugar de `flex-direction: row` (estándar web). El valor de la `column` muestra elementos flexibles verticalmente, que se adaptan a dispositivos móviles en orientación vertical.

Para obtener más información sobre flexbox, visite [esta guía detallada sobre trucos CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) y un enfoque de aprendizaje [gamificado](http://flexboxfroggy.com/) con [Flexbox Froggy](http://flexboxfroggy.com/) .

### Componentes de estilo

Incluir muchos estilos en un archivo con un componente no siempre es fácil de mantener. Los componentes diseñados pueden resolver este problema.

Por ejemplo, un componente Button puede usarse en múltiples lugares a través de una aplicación. Copiar y pegar el objeto de estilo con cada instancia de Button sería ineficaz. En su lugar, cree un componente de botón reutilizable y con estilo:

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

El componente Button con estilo se puede importar y usar fácilmente a través de la aplicación sin declarar repetidamente el objeto de estilo:

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

### Bibliotecas para estilismo

Hay algunas bibliotecas populares para el estilo React Native. Algunos de ellos proporcionan características similares a [Bootstrap](../../bootstrap/index.md) , incluidos formularios predeterminados, estilos de botones y opciones de diseño de página. Una de las bibliotecas más populares es [componentes de estilo](https://github.com/styled-components/styled-components) . Hay muchos otros que puedes encontrar en npm y GitHub para probar por ti mismo.
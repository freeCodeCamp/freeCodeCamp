---
title: Styling
localeTitle: Styling
---
## Reagir Nativo - Estilo

O React Native fornece uma API para criar folhas de estilo e estilizar seus componentes: [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet) .

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

Embora as folhas de estilo CSS regulares não sejam válidas, o superconjunto de CSS do React Native é muito semelhante ao CSS tradicional. Muitas propriedades CSS (por exemplo, `color` , `height` , `top` , `right` , `bottom` , `left` ) são as mesmas em StyleSheet. Qualquer propriedade CSS que tenha hifens (por exemplo `font-size` , `background-color` ) deve ser alterada para camelCase (por exemplo, `fontSize` , `backgroundColor` ).

Nem todas as propriedades CSS existem no StyleSheet. Como não existe um conceito verdadeiro de pairar em dispositivos móveis, as propriedades de foco do CSS não existem no React Native. Em vez disso, o React Native fornece [componentes tocáveis](https://facebook.github.io/react-native/docs/handling-touches#touchables) que respondem a eventos de toque.

Os estilos também não são herdados como no CSS tradicional. Na maioria dos casos, você deve declarar o estilo de cada componente.

### Layouts Flexbox

O Reagir Native usa uma implementação do [flexbox](https://facebook.github.io/react-native/docs/flexbox) semelhante ao padrão da web. Por padrão, os itens na exibição serão configurados para `display: flex` .

> Se você não quiser usar o flexbox, também é possível organizar componentes React Native por meio de posicionamento `relative` ou `absolute` .

Flexbox in React Native defaults para `flexDirection: column` , em vez de `flex-direction: row` (padrão da web). O valor da `column` exibe itens flexíveis verticalmente, que acomodam dispositivos móveis na orientação retrato.

Para saber mais sobre o flexbox, visite [este guia detalhado sobre CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) e uma abordagem de aprendizagem gamificada com o [Flexbox Froggy](http://flexboxfroggy.com/) .

### Componentes estilizados

Incluir muitos estilos em um arquivo com um componente nem sempre é fácil de manter. Componentes com estilo podem resolver esse problema.

Por exemplo, um componente Button pode ser usado em vários locais em um aplicativo. Copiar e colar o objeto de estilo com cada instância do Button seria ineficiente. Em vez disso, crie um componente Button com estilo e reutilizável:

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

O componente Button com estilo pode ser facilmente importado e usado em todo o aplicativo sem declarar repetidamente o objeto de estilo:

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

### Bibliotecas para Styling

Existem algumas bibliotecas populares para estilizar o React Native. Alguns deles fornecem recursos semelhantes ao [Bootstrap](../../bootstrap/index.md) , incluindo formulários padrão, estilos de botão e opções de layout de página. Uma das bibliotecas mais populares é o [estilo de componentes](https://github.com/styled-components/styled-components) . Existem muitos outros que você pode encontrar no npm e no GitHub para experimentar por si mesmo.
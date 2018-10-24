---
title: Touchables
localeTitle: Tocável
---
## React Native - Touchables

Alguns dos principais recursos dos dispositivos móveis giram em torno das interações de toque do usuário. Como um aplicativo para dispositivos móveis lida e responde a essas interações pode fazer ou quebrar a experiência do usuário.

React Native embarca componentes como `Button` que funciona para muitas interações `onPress` padrão. Por padrão, ele dará ao usuário feedback alterando a opacidade para mostrar que o botão foi pressionado. Uso:

```js
<Button onPress={handlePress} title="Submit" /> 
```

Para casos de uso mais complexos, o React Native tem APIs construídas para lidar com interações da toque chamadas `Touchables` .
```
TouchableHighlight 
 TouchableNativeFeedback 
 TouchableOpacity 
 TouchableWithoutFeedback 
```

Cada um desses componentes tocável pode ser estilizado e usado com uma biblioteca, como o `Animated` integrado, permitindo que você faça seus próprios tipos de feedback personalizado do usuário.

Alguns exemplos de uso desses componentes:

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

Você também pode lidar com diferentes tipos de pressionamentos de botão. Por padrão, botões e toques são configurados para lidar com toques regulares, mas você também pode definir uma função a ser chamada por manter pressionada, por exemplo.

```js
<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}> 
```

Para ver todos os suportes disponíveis e como esses componentes funcionam, você pode ler [o código-fonte JavaScript para o Tocáveis aqui](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable) .

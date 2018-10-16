---
title: Touchables
localeTitle: tocable
---
## Reaccionar nativo - Touchables

Algunas de las características principales de los dispositivos móviles giran en torno a las interacciones táctiles del usuario. Cómo una aplicación móvil maneja y responde a estas interacciones puede hacer o deshacer la experiencia del usuario.

React Native se envía con un componente `Button` que funciona para muchas interacciones estándar de `onPress` . Por defecto, le dará al usuario retroalimentación al cambiar la opacidad para mostrar que se presionó el botón. Uso:

```js
<Button onPress={handlePress} title="Submit" /> 
```

Para casos de uso más complejos, React Native tiene API incorporadas para manejar las interacciones de la prensa llamadas `Touchables` .
```
TouchableHighlight 
 TouchableNativeFeedback 
 TouchableOpacity 
 TouchableWithoutFeedback 
```

Cada uno de estos componentes táctiles se puede diseñar y usar con una biblioteca, como el `Animated` incorporado, que le permite crear sus propios tipos de comentarios personalizados de los usuarios.

Algunos ejemplos de uso de estos componentes:

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

También puede manejar diferentes tipos de pulsaciones de botones. De forma predeterminada, los botones y los toocables están configurados para manejar los toques regulares, pero también puede denotar una función para llamar a las interacciones de presionar y mantener, por ejemplo.

```js
<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}> 
```

Para ver todos los accesorios disponibles y cómo funcionan estos componentes, puede consultar [el código fuente de JavaScript de Touchables aquí](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable) .
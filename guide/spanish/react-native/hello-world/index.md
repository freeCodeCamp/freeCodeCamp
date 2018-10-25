---
title: Hello World
localeTitle: Hola Mundo
---
## Hola Mundo

En una página web tradicional, podrías fácilmente representar `Hello World!` a la pantalla escribiendo algo de HTML como este:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Test Page</title> 
  </head> 
  <body> 
    <p>Hello World!</p> 
  </body> 
 </html> 
```

En React Native, no hay DOM ni navegador, por lo que tiene que renderizar las cosas a la pantalla desde una API móvil que React Native proporciona. Por ejemplo, en lugar de usar una etiqueta `<p>` como envoltorio para texto como lo haría en la web, usaría `<Text>` ; en lugar de `<div>` etiquetas de contenedor, usaría `<View>` .

```js
import React, { Component } from 'react'; 
 import { AppRegistry, View, Text } from 'react-native'; 
 
 class App extends Component { 
  render () { 
    return ( 
      <View> 
        <Text> Hello World! </Text> 
      </View> 
    ); 
  } 
 } 
 
 AppRegistry.registerComponent('AwesomeProject', () => App); 
```

Para representar el código en la pantalla, en lugar de abrir la página en un navegador, utiliza un `AppRegistry.registerComponent()` especial `AppRegistry.registerComponent()` provisto por React Native para procesar la aplicación en un dispositivo móvil.
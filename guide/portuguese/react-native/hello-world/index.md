---
title: Hello World
localeTitle: Olá Mundo
---
## Olá Mundo

Em uma página da web tradicional, você poderia facilmente processar o `Hello World!` para a tela, escrevendo algum HTML como este:

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

No React Native, não há DOM ou navegador, portanto, é necessário renderizar coisas na tela a partir de uma API móvel que o React Native fornece. Por exemplo, em vez de usar uma tag `<p>` como um wrapper para texto como você faria na Web, você usaria `<Text>` ; em vez de tags de contêiner `<div>` , você usaria `<View>` .

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

Para renderizar o código na tela, em vez de abrir a página em um navegador, use um método especial `AppRegistry.registerComponent()` fornecido pelo React Native para renderizar o aplicativo em um dispositivo móvel.
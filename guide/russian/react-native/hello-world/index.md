---
title: Hello World
localeTitle: Привет мир
---
## Привет мир

На традиционной веб-странице вы можете легко отобразить `Hello World!` на экран, написав несколько таких HTML:

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

В React Native нет DOM или браузера, поэтому вам нужно отображать вещи на экране из мобильного API, который предоставляет React Native. Например, вместо использования `<p>` в качестве обертки для текста, подобного вам в Интернете, вы должны использовать `<Text>` ; вместо тегов контейнера `<div>` , вы должны использовать `<View>` .

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

Чтобы отобразить код на экране, вместо того, чтобы открывать страницу в браузере, вы используете специальный `AppRegistry.registerComponent()` предоставленный React Native для рендеринга приложения на мобильное устройство.
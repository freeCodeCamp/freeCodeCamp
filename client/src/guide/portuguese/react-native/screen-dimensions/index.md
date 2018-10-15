---
title: Screen Dimensions
localeTitle: Dimensões da tela
---
## Reagir Nativo - Dimensões da Tela

Reagir Native usa Dots Per Inch (DPI) para medir o dimensionamento da interface do usuário (UI) e qualquer coisa exibida na interface do usuário. Esse tipo de medição permite que uma aplicação pareça uniforme em vários tamanhos de tela e densidades de pixels.

Para casos de uso padrão, os aplicativos podem ser desenvolvidos sem a necessidade de conhecer as especificidades do dispositivo do usuário (por exemplo, densidade de pixels), pois os elementos da interface do usuário serão redimensionados automaticamente. Quando é necessário, há APIs disponíveis, como o `PixelRatio` para descobrir a densidade de pixels do dispositivo do usuário.

Para obter a janela ou a altura / largura da tela de um dispositivo de usuários, o React Native tem uma API chamada `Dimensions` .

```js
import { Dimensions } from 'react-native'; 
```

Aqui estão os métodos que a API de `Dimensions` fornece:

```js
Dimensions.get('window').height; 
 Dimensions.get('window').width; 
 Dimensions.get('screen').height; 
 Dimensions.get('screen').width; 
```

**Nota: Ocorreram alguns problemas conhecidos no passado com a API de dimensões, como não devolver as informações corretas quando um usuário gira o dispositivo. É melhor certificar-se de testar isso em dispositivos reais antes de implantar um aplicativo.**
---
title: Screen Dimensions
localeTitle: Dimensiones de la pantalla
---
## React Native - Dimensiones de la pantalla

React Native utiliza puntos por pulgada (DPI) para medir el tamaño de la interfaz de usuario (UI) y todo lo que se muestra en la interfaz de usuario. Este tipo de medida permite que una aplicación se vea uniforme en varios tamaños de pantalla y densidades de píxeles.

Para casos de uso estándar, las aplicaciones pueden desarrollarse sin tener que conocer las características específicas del dispositivo del usuario (por ejemplo, la densidad de píxeles) ya que los elementos de la IU se escalarán automáticamente. Cuando es necesario, hay API disponibles como `PixelRatio` para conocer la densidad de píxeles del dispositivo del usuario.

Para obtener la ventana o la pantalla de altura / anchura de un dispositivo de usuarios, React Native tiene una API llamada `Dimensions` .

```js
import { Dimensions } from 'react-native'; 
```

Estos son los métodos que proporciona la API de `Dimensions` :

```js
Dimensions.get('window').height; 
 Dimensions.get('window').width; 
 Dimensions.get('screen').height; 
 Dimensions.get('screen').width; 
```

**Nota: Ha habido algunos problemas conocidos en el pasado con la API de Dimensions, como no devolver la información correcta cuando un usuario gira su dispositivo. Es mejor asegurarse de probar esto en dispositivos reales antes de implementar una aplicación.**
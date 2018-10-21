---
title: Steganography
localeTitle: Esteganografia
---
## Esteganografia

La esteganografía es el concepto de conceling de texto, imágenes, archivos o videos dentro de otro texto, imágenes, archivos o videos. Un ejemplo fuera de línea de esto es usar "tinta invisible" para ocultar un mensaje entre las líneas de una letra. El jugo de limón es un candidato popular para la tinta invisible: [tinta invisible jugo de limón](https://www.youtube.com/embed/poCnU_crpjQ)

La siguiente fórmula proporciona una descripción muy genérica de las piezas del proceso esteganográfico:

_medio de_ cobertura _+_ datos _ocultos_ + _clave de_ esteganografía _\=_ medio de _estegonografía_

En este contexto, el _medio de_ cobertura _es el archivo que oculta los_ datos _ocultos_ , que también pueden cifrarse con la _clave de_ esteganografía _. El archivo resultante es el_ medio de _esteganografía_ . El _medio de_ portada _(y, por lo tanto, el_ medio de _esteganografía_ ) son generalmente archivos de imagen o audio.

### Esteganografía en imágenes

En las computadoras, las imágenes se almacenan como archivos binarios. Contienen una representación binaria del color o la intensidad de la luz de cada elemento de imagen (píxel) que comprende la imagen. Por ejemplo, esta imagen de un perro:

![perro esquimal americano](https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg)

podría comenzar con algo como:
```
10010101   00001101   11001001 
 10010110   00001111   11001010 
 10011111   00010000   11001011 
 ... 
```

El enfoque más simple para ocultar datos dentro de un archivo de imagen se denomina inserción de bit menos significativo (LSB). En este método, podemos tomar la representación binaria de los _datos_ ocultos _y sobrescribir el LSB de cada byte dentro de la_ imagen de _portada_ . Si utilizamos color de 24 bits, la cantidad de cambio será mínima e indistinguible para el ojo humano.

Si bien JPEG se puede usar para aplicaciones stego, es más común incrustar datos en archivos GIF o BMP. Los archivos GIF y BMP de 8 bits emplean lo que se conoce como compresión sin pérdida, un esquema que permite que el software reconstruya exactamente la imagen original. JPEG, por otro lado, utiliza compresión con pérdida, lo que significa que la imagen expandida es casi igual a la original pero no es un duplicado exacto.

¡Esta breve demostración te ayudará a configurar el texto de codificación en una imagen! https://github.com/edwdryer/steganography-demo Puede leer más sobre la esteganografía en imágenes aquí: http://www.garykessler.net/library/steganography.html

### Esteganografía en audio

La esteganografía de audio es una técnica utilizada para transmitir información oculta modificando una señal de audio de manera imperceptible.

¡Esta publicación de blog proporciona un ejemplo de cómo ocultar una imagen en un archivo de audio (wow)! https://solusipse.net/blog/post/basic-methods-of-audio-steganography-spectrograms/
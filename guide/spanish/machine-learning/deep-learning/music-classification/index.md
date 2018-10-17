---
title: Music Classification
localeTitle: Clasificacion musical
---
## Clasificacion musical

La clasificación de la música es otro campo en el que se podrían aplicar estrategias de aprendizaje profundo para alcanzar precisiones de clasificación más altas que los métodos tradicionales de aprendizaje automático. Las redes neuronales profundas que originalmente se usaban para el reconocimiento de imágenes y las tareas de visión de computadora podrían emplearse para la clasificación de música mediante el uso de espectrogramas. Un espectrograma no es más que una representación visual del espectro de frecuencias presentes en la música durante un período de tiempo. En otras palabras, una señal de música que es una frecuencia resultante, podría separarse en su espectro de frecuencias y la intensidad en términos de dB podría representarse visualmente para cada frecuencia. Esta imagen podría usarse para entrenar una red neuronal que clasifique tales espectrogramas. Un gran caso de uso es el reconocimiento de género.

### Los siguientes son ejemplos de varios espectrogramas:

![Espectrograma 1](http://deepsound.io/images/new_blues_00.png)

El espectrograma anterior es de una canción del género blues. Las frecuencias están a lo largo del eje y, y el tiempo en el eje x. Los colores más brillantes representan que el sonido de esa frecuencia es fuerte, mientras que los colores más oscuros representan que son suaves en esos puntos particulares en el tiempo. Una imagen que contenga tantos datos podría usarse para entrenar una red neuronal. Por lo general, utilizamos un espectrograma a escala de mel para el reconocimiento del género, que es una escala de tonos juzgada por los oyentes, es decir, cómo percibimos dichas frecuencias para distinguir entre los componentes de varios géneros.

**Transformadas de Fourier**

Un detalle importante que se debe saber es que dichos espectrogramas se crean con la ayuda de un concepto matemático conocido como transformadas de Fourier. La transformada de Fourier descompone una función del tiempo en las frecuencias que lo componen.

#### Más información

Si está usando python, hay muchas bibliotecas para el procesamiento de señales. [Librosa](https://librosa.github.io/librosa/) es famosa, otra es [scipy](https://scipy.org/) que también podría usarse para otros fines científicos. Se podrían crear espectrogramas de mel al aprovechar estas bibliotecas.

##### Por favor, eche un vistazo a los siguientes enlaces para obtener más información sobre el tema anterior:

*   [Encontrando genero](https://hackernoon.com/finding-the-genre-of-a-song-with-deep-learning-da8f59a61194)
*   [Sonido profundo](http://deepsound.io/music_genre_recognition.html)
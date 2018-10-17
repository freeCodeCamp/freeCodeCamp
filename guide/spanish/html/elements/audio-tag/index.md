---
title: Audio Tag
localeTitle: Etiqueta de audio
---
## Etiqueta de audio

La etiqueta < **_audio_** > define un elemento de audio, que se puede usar para agregar recursos de medios de audio a un documento HTML que se reproducirá mediante el soporte nativo para la reproducción de audio integrada en el navegador en lugar de un complemento del navegador.

La etiqueta de audio actualmente admite tres formatos de archivo OGG, MP3 y WAV que se pueden agregar a su html de la siguiente manera.

##### Añadiendo un OGG
```
<audio controls> 
  <source src="file.ogg" type="audio/ogg"> 
 </audio> 
```

##### Añadiendo un MP3
```
<audio controls> 
  <source src="file.mp3" type="audio/mpeg"> 
 </audio> 
```

##### Añadiendo un WAV
```
<audio controls> 
  <source src="file.wav" type="audio/wav"> 
 </audio> 
```

Puede contener una o más fuentes de audio, representadas mediante el atributo src o el elemento fuente.

##### Añadiendo múltiples archivos de audio
```
<audio controls> 
  <source src="file-1.wav" type="audio/wav"> 
  <source src="file-2.ogg" type="audio/ogg"> 
  <source src="file-3.mp3" type="audio/mpeg"> 
 </audio> 
```

#### El soporte del navegador para diferentes tipos de archivos es el siguiente

| Navegador | Mp3 | Wav | Ogg | |: -------: |: ---: |: ---: |: ---: | Internet Explorer | Si | No | No | Google Chrome | Si | Si | Si | | Mozilla Firefox | Si | Si | Si | | Safari | Si | Si | No | | Ópera | Si | Si | Sí

### Atributos Soportados

| Atributo | Valor | Descripción | |: -------: |: ---: |: ---: | | reproducción automática | reproducción automática | El audio comenzará a reproducirse tan pronto como esté listo | | controles | controles | se mostrará el audio (como un botón de reproducción / pausa, etc.) | | loop | loop | audio comenzará de nuevo, cada vez que termine | | silenciado | silenciado | la salida de audio se silenciará | | src | URL | Especifica la URL del archivo de audio |

#### Más información:

[https://www.w3schools.com/tags/tag\_audio.asp](https://www.w3schools.com/tags/tag_audio.asp) [https://html.com/tags/audio/](https://html.com/tags/audio/) [https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)
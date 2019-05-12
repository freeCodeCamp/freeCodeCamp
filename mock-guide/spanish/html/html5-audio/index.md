---
title: HTML5 Audio
localeTitle: Audio HTML5
---
## Audio HTML5

Antes de HTML5, los archivos de audio debían reproducirse en un navegador utilizando un complemento como Adobe Flash. El HTML

El elemento se utiliza para incrustar contenido de sonido en documentos. Puede contener una o más fuentes de audio, representadas usando el atributo src o el elemento [fuente](source)

El siguiente fragmento de código agrega un archivo de audio con el nombre de archivo `tutorial.ogg` o `tutorial.mp3` . los  El elemento indica archivos de audio alternativos que el navegador puede elegir. El navegador utilizará el primer formato reconocido.

#### Ejemplo 1

```html

<audio controls> 
  <source src="tutorial.ogg" type="audio/ogg"> 
  <source src="tutorial.mp3" type="audio/mpeg"> 
 Your browser does not support the audio element. 
 </audio> 
```

#### Ejemplo 2

```html

<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
 </audio> 
```

El atributo de `controls` incluye controles de audio como reproducción, pausa y volumen. Si no usa este atributo, no se mostrarán controles.

El elemento `<source>` permite indicar archivos de audio alternativos entre los que el navegador puede elegir. El navegador utilizará el primer formato de reconocimiento. El texto entre las etiquetas `<audio>` y `</audio>` puede mostrarse en un navegador que no admita el elemento HTML5 `<audio>` .

El atributo de reproducción automática reproducirá automáticamente su archivo de audio en segundo plano. Se considera una mejor práctica permitir que los visitantes elijan reproducir audio.

El atributo de precarga indica lo que debe hacer el navegador si el reproductor no está configurado para reproducción automática.

El atributo de bucle reproducirá su archivo de audio en un bucle continuo si se menciona

Dado que este es html5, algunos navegadores no lo admiten. Puede comprobarlo en https://caniuse.com/#search=audio

#### Más información:

https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5\_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx
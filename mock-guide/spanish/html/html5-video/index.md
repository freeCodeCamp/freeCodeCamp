---
title: HTML5 Video
localeTitle: Video HTML5
---
## Video HTML5

Antes de HTML5, para poder reproducir un video en una página web, debe usar un complemento, como Adobe Flash Player. Con la introducción de HTML5, ahora puede colocarlo directamente en la propia página. El HTML La etiqueta se utiliza para incrustar vídeo en documentos web. Puede contener una o más fuentes de video, representadas usando el atributo src o el elemento [fuente](source) .

Para incrustar el archivo de video en la página web, solo agregue este fragmento de código y cambie la fuente del archivo de audio.

\`\` \`html   Su navegador no soporta el elemento de vídeo. Por favor, actualízalo a la última versión.
```
The controls attribute includes video controls, similar to play, pause, and volume. 
 
 This feature is supported by all modern/updated browsers. However, not all support the same video file format. My recommendation for a wide range of compatibilty is MP4, as it is the most widely accepted format. There are also two other formats (WebM and Ogg) that are supported in Chrome, Firefox, and Opera. 
 
 The <source> element enables you to indicate alternative video files which the browser may choose from. The browser will utilize the first recognized format. 
 In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg. 
 
 The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element. 
 Since this is html5, some browsers do not support it. You can check the support at https://caniuse.com/#search=audio. 
 
 
 There are several different elements of the video tag, many of these explanations are based on Mozilla's web docs (linked below). There are even more if you click the link at the bottom. 
 
 #### autoplay 
 
 "autoplay" can be set to either true or false. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. If set to true, the video will begin playing as soon as enough of the video has buffered for it to be able to play. Many people find autoplaying videos as disruptive or annoying so use this feature sparingly. Also note, that some mobile browsers, such as Safari for iOS, ignore this attribute. 
```

html

  
```
#### poster 
 
 The "poster" attribute is the image that shows on the video until the user clicks to play it. 
```

html

  
```
#### controls 
 
 The "controls" attribute can be set to true or false and will handle whether controls such as the play/pause button or volume slider appear. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. 
```

html

  

\`\` \`

Se pueden agregar muchos más atributos que son opcionales para personalizar el reproductor de video en la página. Para obtener más información, haga clic en los enlaces de abajo.

## Más información:

*   [W3Schools - Vídeo HTML5](https://www.w3schools.com/html/html5_video.asp)
*   [Mozilla documentos web - Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [Wikipedia - HTML5 Video](https://en.wikipedia.org/wiki/HTML5_video)
*   [HTML5 Rocks - HTML5 Video](https://www.html5rocks.com/en/tutorials/video/basics/)
*   [¿Puedo usar el video?](https://caniuse.com/#search=video)
*   [Cómo usar HTML5 para reproducir archivos de video en tu página web](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))
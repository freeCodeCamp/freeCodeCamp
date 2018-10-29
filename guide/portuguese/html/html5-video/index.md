---
title: HTML5 Video
localeTitle: Vídeo em HTML5
---
## Vídeo em HTML5

Antes do HTML5, para que um vídeo fosse reproduzido em uma página da Web, você precisaria usar um plug-in, como o Adobe Flash Player. Com a introdução do HTML5, você pode agora colocá-lo diretamente na própria página. O HTML tag é usada para incorporar vídeo em documentos da web. Pode conter uma ou mais origens de vídeo, representadas usando o atributo src ou o elemento de [origem](source) .

Para incorporar o arquivo de vídeo à página da Web, basta adicionar este snippet de código e alterar o src do arquivo de áudio.

\`\` \`html   Seu navegador não suporta o elemento de vídeo. Por favor, atualize para a versão mais recente.
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

Existem muitos outros atributos que podem ser adicionados e que são opcionais para personalizar o reprodutor de vídeo na página. Para saber mais, clique nos links abaixo.

## Mais Informações:

*   [W3Schools - Vídeo em HTML5](https://www.w3schools.com/html/html5_video.asp)
*   [Mozilla web docs - Vídeo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [Wikipedia - Vídeo em HTML5](https://en.wikipedia.org/wiki/HTML5_video)
*   [Rochas HTML5 - Vídeo em HTML5](https://www.html5rocks.com/en/tutorials/video/basics/)
*   [Posso usar vídeo?](https://caniuse.com/#search=video)
*   [Como usar o HTML5 para reproduzir arquivos de vídeo na sua página da web](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))
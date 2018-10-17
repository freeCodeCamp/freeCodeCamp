---
title: HTML5 Video
localeTitle: Видео HTML5
---
## Видео HTML5

Перед HTML5, чтобы иметь видеоигра на веб-странице, вам нужно будет использовать плагин, например Adobe Flash Player. С введением HTML5 вы можете разместить его непосредственно на самой странице. HTML-код тег используется для встраивания видео в веб-документы. Он может содержать один или несколько источников видео, представленных с использованием атрибута src или [исходного](source) элемента.

Чтобы вставить видеофайл в веб-страницу, просто добавьте этот фрагмент кода и измените src аудиофайла.

\`\` \`\` HTML   Ваш браузер не поддерживает элемент видео. Пожалуйста, обновите его до последней версии.
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

HTML

  
```
#### poster 
 
 The "poster" attribute is the image that shows on the video until the user clicks to play it. 
```

HTML

  
```
#### controls 
 
 The "controls" attribute can be set to true or false and will handle whether controls such as the play/pause button or volume slider appear. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. 
```

HTML

  

\`\` \`

Есть много других атрибутов, которые можно добавить, которые необязательны для настройки видеоплеера на странице. Чтобы узнать больше, нажмите на ссылки ниже.

## Дополнительная информация:

*   [W3Schools - HTML5 Видео](https://www.w3schools.com/html/html5_video.asp)
*   [Веб-документы Mozilla - Видео](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [Википедия - HTML5 Видео](https://en.wikipedia.org/wiki/HTML5_video)
*   [HTML5 Rocks - HTML5 Video](https://www.html5rocks.com/en/tutorials/video/basics/)
*   [Могу ли я использовать видео?](https://caniuse.com/#search=video)
*   [Как использовать HTML5 для воспроизведения видеофайлов на своей веб-странице](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))
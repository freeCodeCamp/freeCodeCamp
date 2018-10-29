---
title: HTML5 Video
localeTitle: HTML5视频
---
## HTML5视频

在HTML5之前，为了在网页中播放视频，您需要使用插件，如Adobe Flash Player。随着HTML5的引入，您现在可以将其直接放入页面本身。 HTML 标签用于在Web文档中嵌入视频。它可能包含一个或多个视频源，使用src属性或[source](source)元素表示。

要将视频文件嵌入到网页中，只需添加此代码段并更改音频文件的src即可。

\`\`\`HTML   您的浏览器不支持视频元素。请将其更新至最新版本。
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

  

\`\`\`

还可以添加更多属性，这些属性是可选的，用于自定义页面中的视频播放器。要了解更多信息，请单击下面的链接。

## 更多信息：

*   [W3Schools - HTML5视频](https://www.w3schools.com/html/html5_video.asp)
*   [Mozilla网络文档 - 视频](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [维基百科 - HTML5视频](https://en.wikipedia.org/wiki/HTML5_video)
*   [HTML5 Rocks - HTML5视频](https://www.html5rocks.com/en/tutorials/video/basics/)
*   [我可以使用视频吗？](https://caniuse.com/#search=video)
*   [如何使用HTML5在您的网页上播放视频文件](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))
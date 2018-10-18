---
title: HTML5 Video
localeTitle: HTML5 فيديو
---
## HTML5 فيديو

قبل HTML5 ، لكي يكون لديك تشغيل فيديو في صفحة ويب ، ستحتاج إلى استخدام مكون إضافي ، مثل Adobe Flash Player. مع إدخال HTML5 ، يمكنك الآن وضعها مباشرة في الصفحة نفسها. HTML يتم استخدام العلامة لتضمين الفيديو في مستندات الويب. قد يحتوي على واحد أو أكثر من مصادر الفيديو ، ممثلة باستخدام السمة src أو عنصر [المصدر](source) .

لتضمين ملف الفيديو في صفحة الويب ، ما عليك سوى إضافة مقتطف الشفرة وتغيير src للملف الصوتي.

\`\` \`أتش تي أم أل   متصفحك لا يدعم عنصر الفيديو. يرجى تحديثه إلى أحدث إصدار.

 `The controls attribute includes video controls, similar to play, pause, and volume. 
 
 This feature is supported by all modern/updated browsers. However, not all support the same video file format. My recommendation for a wide range of compatibilty is MP4, as it is the most widely accepted format. There are also two other formats (WebM and Ogg) that are supported in Chrome, Firefox, and Opera. 
 
 The <source> element enables you to indicate alternative video files which the browser may choose from. The browser will utilize the first recognized format. 
 In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg. 
 
 The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element. 
 Since this is html5, some browsers do not support it. You can check the support at https://caniuse.com/#search=audio. 
 
 
 There are several different elements of the video tag, many of these explanations are based on Mozilla's web docs (linked below). There are even more if you click the link at the bottom. 
 
 #### autoplay 
 
 "autoplay" can be set to either true or false. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. If set to true, the video will begin playing as soon as enough of the video has buffered for it to be able to play. Many people find autoplaying videos as disruptive or annoying so use this feature sparingly. Also note, that some mobile browsers, such as Safari for iOS, ignore this attribute. 
` 

أتش تي أم أل

  

 `#### poster 
 
 The "poster" attribute is the image that shows on the video until the user clicks to play it. 
` 

أتش تي أم أل

  

 `#### controls 
 
 The "controls" attribute can be set to true or false and will handle whether controls such as the play/pause button or volume slider appear. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. 
` 

أتش تي أم أل

  

\`\` \`

هناك العديد من السمات التي يمكن إضافتها والتي تعد اختيارية لتخصيص مشغل الفيديو في الصفحة. لمعرفة المزيد ، انقر على الروابط أدناه.

## معلومات اكثر:

*   [W3Schools - فيديو HTML5](https://www.w3schools.com/html/html5_video.asp)
*   [موزيلا على الويب مستندات - فيديو](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [ويكيبيديا - فيديو HTML5](https://en.wikipedia.org/wiki/HTML5_video)
*   [HTML5 Rocks - HTML5 Video](https://www.html5rocks.com/en/tutorials/video/basics/)
*   [هل يمكنني استخدام الفيديو؟](https://caniuse.com/#search=video)
*   [كيفية استخدام HTML5 لتشغيل ملفات الفيديو على صفحة الويب الخاصة بك](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/hh924821(v=vs.85))
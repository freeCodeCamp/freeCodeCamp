---
title: HTML5 Audio
---
## HTML5 Audio 

Before HTML5, audio files had to be played in a browser using a plug-in like Adobe Flash.
The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the [source](<source>) element

The following code snippet adds an audio file with the filename `tutorial.ogg` or `tutorial.mp3`. The <source> element indicates alternative audio files which the browser may choose from. The browser will utilize the first recognized format. 

#### Example 1
```html
<audio controls>
  <source src="tutorial.ogg" type="audio/ogg">
  <source src="tutorial.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

#### Example 2
```html
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
</audio>
```

The `controls` attribute includes audio controls like play, pause, and volume. If you don't use this attribute, then no controls will be shown.

The `<source>` element enables you to indicate alternative audio files which the browser may choose from. The browser will utilize the first recognized format. 
The text between the `<audio>` and `</audio>` tags may be shown in browser that does not support the HTML5 `<audio>` element.

The autoplay attribute will automatically play your audio file in the background. It is considered better practice to let visitors choose to play audio.

The preload attribute indicates what the browser should do if the player is not set to autoplay.

The loop attribute will play your audio file in a continous loop if mentioned

Since this is html5, some browser do not support it. You can check it at https://caniuse.com/#search=audio

#### More Information:
https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx



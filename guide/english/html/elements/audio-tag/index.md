---
title: Audio Tag
---
## Audio Tag

The <***audio***> tag defines an audio element, that can be used to add audio media resource to an HTML document that will be played by native support for audio playback built into the browser rather than a browser plugin.

The audio tag currently supports three file formats OGG, MP3 and WAV which can be added to your html as follows.
##### Adding an OGG
```
<audio controls>
  <source src="file.ogg" type="audio/ogg">
</audio>
```
##### Adding an MP3
```
<audio controls>
  <source src="file.mp3" type="audio/mpeg">
</audio>
```

##### Adding a WAV
```
<audio controls>
  <source src="file.wav" type="audio/wav">
</audio>
```


It may contain one or more audio sources, represented using the src attribute or the source element.

##### Adding Multiple Audio Files
```
<audio controls>
  <source src="file-1.wav" type="audio/wav">
  <source src="file-2.ogg" type="audio/ogg">
  <source src="file-3.mp3" type="audio/mpeg">
</audio>
```
#### Browser Support for different filetypes is as follows


| Browser | Mp3 | Wav | Ogg|
|:-------:|:---:|:---:|:---:|
|Internet Explorer| Yes | No | No |
|Google Chrome| Yes | Yes | Yes |
|Mozilla Firefox | Yes | Yes | Yes |
|Safari| Yes | Yes | No|
|Opera | Yes | Yes | Yes 

### Supported Attributes

| Attribute | Value | Description |
|:-------:|:---:|:---:|
|autoplay|autoplay|The audio will start playing as soon as it is ready|
|controls|controls|audio will be displayed (such as a play/pause button etc)|
|loop|loop|audio will start over again, every time it is finished|
|muted|muted|audio output will be muted|
|src|URL|Specifies the URL of the audio file|

#### More Information:
[https://www.w3schools.com/tags/tag_audio.asp](https://www.w3schools.com/tags/tag_audio.asp)
[https://html.com/tags/audio/](https://html.com/tags/audio/)
[https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)

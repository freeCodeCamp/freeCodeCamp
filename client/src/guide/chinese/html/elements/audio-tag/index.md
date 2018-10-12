---
title: Audio Tag
localeTitle: 音频标签
---
## 音频标签

< **_audio_** >标签定义了一个音频元素，可用于将音频媒体资源添加到HTML文档中，该文档将由内置于浏览器中的音频播放而不是浏览器插件播放。

音频标签目前支持三种文件格式OGG，MP3和WAV，可以添加到您的html中，如下所示。

##### 添加OGG
```
<audio controls> 
  <source src="file.ogg" type="audio/ogg"> 
 </audio> 
```

##### 添加MP3
```
<audio controls> 
  <source src="file.mp3" type="audio/mpeg"> 
 </audio> 
```

##### 添加WAV
```
<audio controls> 
  <source src="file.wav" type="audio/wav"> 
 </audio> 
```

它可能包含一个或多个音频源，使用src属性或source元素表示。

##### 添加多个音频文件
```
<audio controls> 
  <source src="file-1.wav" type="audio/wav"> 
  <source src="file-2.ogg" type="audio/ogg"> 
  <source src="file-3.mp3" type="audio/mpeg"> 
 </audio> 
```

#### 浏览器支持不同的文件类型如下

|浏览器| Mp3 | Wav |奥格| |：-------：|：---：|：---：|：---：| | Internet Explorer |是的|没有|没有| |谷歌浏览器|是的|是的|是的| | Mozilla Firefox |是的|是的|是的| |野生动物园|是的|是的|无| |歌剧|是的|是的|是

### 支持的属性

|属性|价值|说明| |：-------：|：---：|：---：| | autoplay | autoplay |音频将在准备就绪后立即开始播放 | controls | controls | audio将被显示（例如播放/暂停按钮等）| | loop | loop | audio每次完成时都会重新开始 |静音|静音|音频输出将静音| | src | URL |指定音频文件的URL

#### 更多信息：

[https://www.w3schools.com/tags/tag\_audio.asp](https://www.w3schools.com/tags/tag_audio.asp) [https://html.com/tags/audio/](https://html.com/tags/audio/) [https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)
---
title: Voice
localeTitle: 语音
---
## 语音

语音识别允许受到可访问性困难（例如永久性视觉损伤或驾驶时的临时损伤）影响的用户在网站上导航内容或输入文本数据（例如表格）的能力。

语音合成为网站提供了通过阅读文本向用户提供信息的能力。

### Javascript Web Speech API

通过[Web Speech API，](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)您可以使用语音识别和语音合成将语音数据合并到Web应用程序中。

#### Web Speech API的工作原理

WebSpeech API使用设备的本机麦克风系统。当从预定义的语法识别出话语时（见下文），它作为结果（或结果列表）作为文本字符串返回，并且可以提供回调函数以执行进一步的动作。

#### 如何使用SpeechRecognition API

以下是使用SpeechRecognition API的简单示例。请注意，API是使用`new SpeechRecognition()` SpeechRecognition `new SpeechRecognition()`构造函数启动的，并在`recognition.start();`叫做。它根据收到的内容创建一个副本，然后附加到`<p class="transcript">`元素。 [单击此处查看此代码的工作演示](https://codepen.io/ashwoodall/pen/MPeyRm) 。

这是将脚本附加到的HTML：

```html

<main class="main"> 
  <span class="loader"></span> 
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p> 
 
 </main> 
```

这是JavaScript：

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
 
 const span = document.querySelector('[data-js="varValue"]'); 
 const main = document.querySelector('.main'); 
 const loader = document.querySelector('.loader'); 
 
 const recognition = new SpeechRecognition(); 
 recognition.lang = 'en-US'; 
 
 recognition.addEventListener('result', e => { 
    const transcript = Array.from(e.results) 
        .map(result => result[0].transcript) 
 
    span.textContent = transcript; 
    loader.textContent = ''; 
 }); 
 
 recognition.addEventListener('start', () => loader.textContent = 'Listening (enable your microphone)...'); 
 
 recognition.addEventListener('end', recognition.start); 
 recognition.start(); 
```

### Alexa的

Alexa是亚马逊基于云的语音服务，可在亚马逊和第三方设备制造商的数千万台设备上使用。借助Alexa，您可以构建自然的语音体验，为客户提供更直观的方式来与他们每天使用的技术进行交互。 它能够进行语音交互，音乐播放，制作待办事项列表，设置闹钟，流式播客，播放有声读物，以及提供天气，交通，体育和其他实时信息，如新闻。

# 亚马逊回声设备范围

*   亚马逊Echo
*   亚马逊Echo Plus
*   亚马逊Echo Dot
*   亚马逊Echo Look
*   亚马逊回声秀
*   亚马逊Echo Spot

# 远场麦克风

语音识别系统通常使用多个麦克风来减少混响和噪声的影响。 Echo麦克风采用六边形布局，每个顶点有一个麦克风，中心有一个麦克风。接收信号的每个麦克风之间的延迟使设备能够识别语音源并抵消来自其他方向的噪声。这是一种称为波束形成的现象。

虽然最先进的语音识别系统在近距离通话麦克风条件下表现相当好，但在麦克风远离用户的情况下性能会下降。

Echo捕获的音频将受到以下因素的影响： 1）扬声器的声音靠在房间的墙上， 2）来自外面的背景噪音， 3）来自设备扬声器的声学回声 4）输出音频靠在房间的墙上。

# 软件

平台内的软件组件包括自然语言理解（NLU）和自动语音识别（ASR）。这些软件组件可以由独立软件开发人员通过自定义编写的“技能”来利用，然后由亚马逊认证为一组标准。通过他们的应用商店，已经有超过20k的这些自定义技能可用。

### IBM Watson Speech-to-Text API

IBM Watson Speech-to-Text使用机器学习来实时准确地预测语音。目前支持七种不同的语言，以及现场语音和预先录制的音频。 API可以免费使用，或付费版本可用于大型应用程序。

### 更多信息

[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) [Alexa API](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html) [IBM Watson API](https://www.ibm.com/watson/services/speech-to-text/)
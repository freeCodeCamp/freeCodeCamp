---
title: Voice
---

## Voice

Speech recognition allows users affected by accessibility difficulties (such as permanent visual impairment or temporary impairment while driving) the ability to navigate content on a website or input text data (such as a form). 

Speech synthesis provides websites the ability to provide information to users by reading text.


### Javascript Web Speech API

The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) enables you to incorporate voice data into web apps using both speech recognition and speech synthesis. 

#### How the Web Speech API works

The WebSpeech API uses the device's native microphone system. When an utterance is recognized from a pre-defined grammar (see below), it is returned as a result (or list of results) as a text string, and callback functions can be provided to perform further actions. 

#### How to use the SpeechRecognition API

Here is a simple example of using the SpeechRecognition API. Note that the API is initated with the `new SpeechRecognition()` constructor, and starts when `recognition.start();` is called. It creates a transcript from what is received and then that is appended to the `<p class="transcript">` element. [Click here for a working demo of this code](https://codepen.io/ashwoodall/pen/MPeyRm).

This is the HTML that the transcript is appended to:

```html
<main class="main">
  <span class="loader"></span>
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p>
  
</main>
```

And here is the JavaScript: 

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

### Alexa

Alexa is Amazon’s cloud-based voice service available on tens of millions of devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day.
It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news.

# Amazon Echo Device Range
- Amazon Echo
- Amazon Echo Plus
- Amazon Echo Dot
- Amazon Echo Look
- Amazon Echo Show
- Amazon Echo Spot

# Far Field Microphones
Speech recognition systems often use multiple microphones to reduce the impact of reverberation and noise. 
The Echo mics are arranged in a hexagonal layout, with one microphone at each vertex and one in the center. The delay between each microphone receiving the signal enables the device to identify the source of the voice and cancel out noise coming from other directions. This is a phenomenon known as beamforming.

While state-of-the-art speech recognition systems perform reasonably well in close-talking microphone conditions, performance degrades in conditions where the microphone is far from the user.

The audio captured by the Echo will be influenced by:
1) the speaker’s voice against the wall of the room,
2) the background noise from outside, 
3) the acoustic echo coming from the device’s loudspeaker 
4) the output audio against the wall of the room.

# Software
The software components within the platform include both Natural Language Understanding (NLU) as well as Automated Speech Recognition (ASR).  These software components can be leveraged by custom written "skills" by independent software developers that are then certified to a set of standards by Amazon. There are already more than 20k of these custom skills available through their app store.

### IBM Watson Speech-to-Text API

IBM Watson Speech-to-Text uses machine learning to accurately predict speech in real time. Currently seven different languages are supported, as well as live voice and pre-recorded audio. The API can be used for free, or paid versions are available for larger scale apps. 


### More Information
[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[Alexa API](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html)
[IBM Watson API](https://www.ibm.com/watson/services/speech-to-text/)




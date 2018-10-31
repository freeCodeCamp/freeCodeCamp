---
title: Voice
localeTitle: Voz
---
## Voz

El reconocimiento de voz permite a los usuarios afectados por dificultades de accesibilidad (como discapacidad visual permanente o discapacidad temporal mientras conducen) la capacidad de navegar por el contenido de un sitio web o ingresar datos de texto (como un formulario).

La síntesis de voz proporciona a los sitios web la capacidad de proporcionar información a los usuarios mediante la lectura de textos.

### Javascript Web Speech API

La [Web Speech API le](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) permite incorporar datos de voz en aplicaciones web utilizando tanto el reconocimiento de voz como la síntesis de voz.

#### Cómo funciona la API de Web Speech

La API WebSpeech utiliza el sistema de micrófono nativo del dispositivo. Cuando se reconoce una expresión de una gramática predefinida (ver más abajo), se devuelve como resultado (o lista de resultados) como una cadena de texto, y se pueden proporcionar funciones de devolución de llamada para realizar otras acciones.

#### Cómo usar la API de SpeechRecognition

Aquí hay un ejemplo simple del uso de la API SpeechRecognition. Tenga en cuenta que la API se inicia con el `new SpeechRecognition()` constructor `new SpeechRecognition()` y comienza cuando el `recognition.start();` se llama. Crea una transcripción a partir de lo que se recibe y luego se agrega al elemento `<p class="transcript">` . [Haga clic aquí para ver una demostración de trabajo de este código](https://codepen.io/ashwoodall/pen/MPeyRm) .

Este es el HTML al que se anexa la transcripción:

```html

<main class="main"> 
  <span class="loader"></span> 
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p> 
 
 </main> 
```

Y aquí está el JavaScript:

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

Alexa es el servicio de voz basado en la nube de Amazon disponible en decenas de millones de dispositivos de Amazon y de otros fabricantes. Con Alexa, puede crear experiencias de voz naturales que ofrezcan a los clientes una manera más intuitiva de interactuar con la tecnología que usan todos los días. Es capaz de interactuar con la voz, reproducir música, hacer listas de tareas, configurar alarmas, transmitir podcasts, reproducir audiolibros y proporcionar información sobre el clima, el tráfico, los deportes y otra información en tiempo real, como noticias.

# Gama de dispositivos de Amazon Echo

*   Eco de amazon
*   Amazon Echo Plus
*   Amazon Echo Dot
*   Amazon Echo Look
*   Amazon Echo Show
*   Amazon Echo Spot

# Micrófonos de campo lejano

Los sistemas de reconocimiento de voz a menudo utilizan múltiples micrófonos para reducir el impacto de la reverberación y el ruido. Los micrófonos Echo están organizados en una disposición hexagonal, con un micrófono en cada vértice y uno en el centro. El retraso entre cada micrófono que recibe la señal permite al dispositivo identificar la fuente de la voz y cancelar el ruido proveniente de otras direcciones. Este es un fenómeno conocido como conformación de haz.

Si bien los sistemas de reconocimiento de voz de vanguardia tienen un rendimiento razonablemente bueno en condiciones de micrófonos de conversación estrecha, el rendimiento se degrada en las condiciones en que el micrófono está lejos del usuario.

El audio capturado por el Echo estará influenciado por: 1) la voz del hablante contra la pared de la habitación, 2) el ruido de fondo del exterior, 3) el eco acústico proveniente del altavoz del dispositivo 4) la salida de audio contra la pared de la habitación.

# Software

Los componentes de software dentro de la plataforma incluyen tanto el Entendimiento del lenguaje natural (NLU) como el Reconocimiento de voz automatizado (ASR). Estos componentes de software pueden aprovecharse mediante "habilidades" escritas personalizadas por desarrolladores de software independientes que luego están certificados según un conjunto de estándares por parte de Amazon. Ya hay más de 20k de estas habilidades personalizadas disponibles a través de su tienda de aplicaciones.

### API de voz a texto de IBM Watson

IBM Watson Speech-to-Text utiliza el aprendizaje automático para predecir con precisión el habla en tiempo real. Actualmente se admiten siete idiomas diferentes, así como voz en vivo y audio pregrabado. La API se puede utilizar de forma gratuita o hay versiones de pago disponibles para aplicaciones de mayor escala.

### Más información

[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) [API de Alexa](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html) [API de IBM Watson](https://www.ibm.com/watson/services/speech-to-text/)
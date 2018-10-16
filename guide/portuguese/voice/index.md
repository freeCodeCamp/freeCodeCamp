---
title: Voice
localeTitle: Voz
---
## Voz

O reconhecimento de fala permite que os usuários afetados por dificuldades de acessibilidade (como deficiência visual permanente ou deficiência temporária durante a condução) tenham a capacidade de navegar pelo conteúdo de um site ou inserir dados de texto (como um formulário).

A síntese de fala fornece aos sites a capacidade de fornecer informações aos usuários lendo textos.

### API de fala da Web do Javascript

A [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) permite incorporar dados de voz em aplicativos da Web usando reconhecimento de voz e síntese de fala.

#### Como funciona a API de fala da Web

A API WebSpeech usa o sistema de microfone nativo do dispositivo. Quando uma expressão é reconhecida a partir de uma gramática predefinida (veja abaixo), ela é retornada como resultado (ou lista de resultados) como uma cadeia de texto, e funções de retorno de chamada podem ser fornecidas para executar outras ações.

#### Como usar a API SpeechRecognition

Aqui está um exemplo simples de usar a API SpeechRecognition. Observe que a API é iniciada com o `new SpeechRecognition()` e inicia quando `recognition.start();` é chamado. Ele cria uma transcrição do que é recebido e, em seguida, é anexado ao elemento `<p class="transcript">` . [Clique aqui para uma demonstração de trabalho deste código](https://codepen.io/ashwoodall/pen/MPeyRm) .

Este é o HTML ao qual a transcrição é anexada:

```html

<main class="main"> 
  <span class="loader"></span> 
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p> 
 
 </main> 
```

E aqui está o JavaScript:

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

O Alexa é o serviço de voz baseado em nuvem da Amazon disponível em dezenas de milhões de dispositivos da Amazon e de fabricantes de dispositivos de terceiros. Com o Alexa, você pode criar experiências de voz naturais que oferecem aos clientes uma maneira mais intuitiva de interagir com a tecnologia que eles usam todos os dias. Ele é capaz de interação por voz, reprodução de música, listas de tarefas, configuração de alarmes, transmissão de podcasts, reprodução de audiolivros e fornecimento de informações meteorológicas, de trânsito, esportivas e outras informações em tempo real, como notícias.

# Intervalo de dispositivos do Amazon Echo

*   Eco da Amazônia
*   Amazon Echo Plus
*   Amazon Echo Dot
*   Amazon Echo Look
*   Amazon Echo Show
*   Ponto de eco da Amazon

# Microfones de campo distante

Os sistemas de reconhecimento de fala geralmente usam vários microfones para reduzir o impacto da reverberação e do ruído. Os ecos são organizados em um layout hexagonal, com um microfone em cada vértice e um no centro. O atraso entre cada microfone que recebe o sinal permite que o dispositivo identifique a origem da voz e cancele o ruído vindo de outras direções. Este é um fenômeno conhecido como beamforming.

Embora os sistemas de reconhecimento de voz de última geração tenham desempenho razoavelmente bom em condições de microfone de fala próxima, o desempenho diminui em condições em que o microfone está longe do usuário.

O áudio capturado pelo Echo será influenciado por: 1) a voz do locutor contra a parede da sala, 2) o ruído de fundo do lado de fora, 3) o eco acústico proveniente do altifalante do dispositivo 4) a saída de áudio contra a parede da sala.

# Programas

Os componentes de software dentro da plataforma incluem o Natural Language Understanding (NLU) e também o Automated Speech Recognition (ASR). Esses componentes de software podem ser aproveitados por "habilidades" escritas por desenvolvedores independentes de software que são então certificados para um conjunto de padrões pela Amazon. Já existem mais de 20 mil dessas habilidades personalizadas disponíveis em sua loja de aplicativos.

### API de fala para texto do IBM Watson

O Speech-to-Text do IBM Watson usa aprendizado de máquina para prever com precisão a fala em tempo real. Atualmente, sete idiomas diferentes são suportados, bem como voz ao vivo e áudio pré-gravado. A API pode ser usada gratuitamente, ou versões pagas estão disponíveis para aplicativos de escala maior.

### Mais Informações

[API de fala da Web](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) [API Alexa](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html) [API do IBM Watson](https://www.ibm.com/watson/services/speech-to-text/)
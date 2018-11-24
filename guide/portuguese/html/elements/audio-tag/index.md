---
title: Audio Tag
localeTitle: Tag de áudio
---
## Tag de áudio

A tag < **_audio_** > define um elemento de áudio, que pode ser usado para adicionar recurso de mídia de áudio a um documento HTML que será reproduzido pelo suporte nativo para reprodução de áudio incorporada no navegador, em vez de um plug-in do navegador.

A tag de áudio atualmente suporta três formatos de arquivo OGG, MP3 e WAV, que podem ser adicionados ao seu html da seguinte forma.

##### Adicionando um OGG
```
<audio controls> 
  <source src="file.ogg" type="audio/ogg"> 
 </audio> 
```

##### Adicionando um MP3
```
<audio controls> 
  <source src="file.mp3" type="audio/mpeg"> 
 </audio> 
```

##### Adicionando um WAV
```
<audio controls> 
  <source src="file.wav" type="audio/wav"> 
 </audio> 
```

Pode conter uma ou mais fontes de áudio, representadas usando o atributo src ou o elemento de origem.

##### Adicionando vários arquivos de áudio
```
<audio controls> 
  <source src="file-1.wav" type="audio/wav"> 
  <source src="file-2.ogg" type="audio/ogg"> 
  <source src="file-3.mp3" type="audio/mpeg"> 
 </audio> 
```

#### Suporte do navegador para diferentes tipos de arquivos é o seguinte

| Navegador | Mp3 | Wav | Ogg | |: -------: |: ---: |: ---: |: ---: | Internet Explorer | Sim | Não | Não | Google Chrome | Sim | Sim | Sim | Mozilla Firefox | Sim | Sim | Sim | | Safari | Sim | Sim | Não | | Opera | Sim | Sim | sim

### Atributos Suportados

| Atributo | Valor | Descrição | |: -------: |: ---: |: ---: | | autoplay | autoplay | O áudio começará a ser reproduzido assim que estiver pronto | | controls | controls | audio será exibido (como um botão play / pause etc) | | loop | loop | o áudio recomeçará, sempre que terminar | | silenciado | silenciado | a saída de áudio será silenciada | | src | URL | Especifica o URL do arquivo de áudio |

#### Mais Informações:

[https://www.w3schools.com/tags/tag\_audio.asp](https://www.w3schools.com/tags/tag_audio.asp) [https://html.com/tags/audio/](https://html.com/tags/audio/) [https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)
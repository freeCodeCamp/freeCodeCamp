---
title: Audio Tag
localeTitle: Аудио тег
---
## Аудио теги

Тег < **_audio_** > определяет аудио-элемент, который можно использовать для добавления ресурса аудиоресурсов в HTML-документ, который будет воспроизводиться встроенной поддержкой воспроизведения звука, встроенного в браузер, а не в плагин браузера.

Звуковой тег в настоящее время поддерживает три формата файлов OGG, MP3 и WAV, которые можно добавить в ваш html следующим образом.

##### Добавление OGG
```
<audio controls> 
  <source src="file.ogg" type="audio/ogg"> 
 </audio> 
```

##### Добавление MP3
```
<audio controls> 
  <source src="file.mp3" type="audio/mpeg"> 
 </audio> 
```

##### Добавление WAV
```
<audio controls> 
  <source src="file.wav" type="audio/wav"> 
 </audio> 
```

Он может содержать один или несколько источников звука, представленных с использованием атрибута src или исходного элемента.

##### Добавление нескольких аудиофайлов
```
<audio controls> 
  <source src="file-1.wav" type="audio/wav"> 
  <source src="file-2.ogg" type="audio/ogg"> 
  <source src="file-3.mp3" type="audio/mpeg"> 
 </audio> 
```

#### Поддержка браузера для разных типов файлов выглядит следующим образом

| Браузер | Mp3 | Wav | Ogg | | -------: | ---: | ---: | ---: | | Internet Explorer | Да | Нет | Нет | | Google Chrome | Да | Да | Да | | Mozilla Firefox | Да | Да | Да | | Сафари | Да | Да | Нет | | Опера | Да | Да | да

### Поддерживаемые атрибуты

| Атрибут | Значение | Описание | | -------: | ---: | ---: | | автовоспроизведение | автовоспроизведение | Звук начнется, как только он будет готов | | управление | управление | аудио будет отображаться (например, кнопка воспроизведения / паузы и т. д.) | | loop | loop | audio начнется снова, каждый раз, когда он будет завершен | | muted | muted | аудио выход будет отключен | | src | URL | Указывает URL-адрес аудиофайла |

#### Дополнительная информация:

[https://www.w3schools.com/tags/tag\_audio.asp](https://www.w3schools.com/tags/tag_audio.asp) [https://html.com/tags/audio/](https://html.com/tags/audio/) [https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)
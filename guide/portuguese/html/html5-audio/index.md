---
title: HTML5 Audio
localeTitle: HTML5 Audio
---
## HTML5 Audio

Antes do HTML5, os arquivos de áudio precisavam ser reproduzidos em um navegador usando um plug-in como o Adobe Flash. O HTML

elemento é usado para incorporar conteúdo de som em documentos. Pode conter uma ou mais fontes de áudio, representadas usando o atributo src ou o elemento de [origem](source)

O trecho de código a seguir adiciona um arquivo de áudio com o nome de arquivo `tutorial.ogg` ou `tutorial.mp3` . o  elemento indica arquivos de áudio alternativos que o navegador pode escolher. O navegador utilizará o primeiro formato reconhecido.

#### Exemplo 1

```html

<audio controls> 
  <source src="tutorial.ogg" type="audio/ogg"> 
  <source src="tutorial.mp3" type="audio/mpeg"> 
 Your browser does not support the audio element. 
 </audio> 
```

#### Exemplo 2

```html

<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
 </audio> 
```

O atributo `controls` inclui controles de áudio como play, pause e volume. Se você não usar esse atributo, nenhum controle será mostrado.

O elemento `<source>` permite indicar arquivos de áudio alternativos que o navegador pode escolher. O navegador utilizará o primeiro formato de reconhecimento. O texto entre as tags `<audio>` e `</audio>` pode ser mostrado no navegador que não suporta o elemento HTML5 `<audio>` .

O atributo de reprodução automática reproduzirá automaticamente seu arquivo de áudio em segundo plano. Considera-se uma prática melhor permitir que os visitantes escolham reproduzir áudio.

O atributo preload indica o que o navegador deve fazer se o player não estiver configurado para reprodução automática.

O atributo loop irá reproduzir seu arquivo de áudio em um loop contínuo se mencionado

Como isso é html5, alguns navegadores não suportam isso. Você pode verificar isso em https://caniuse.com/#search=audio

#### Mais Informações:

https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5\_audio.asp

https://msdn.microsoft.com/pt-br/library/gg589529(v=vs.85).aspx
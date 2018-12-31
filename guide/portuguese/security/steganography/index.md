---
title: Steganography
localeTitle: Esteganografia
---
## Esteganografia

Esteganografia é o conceito de conciliar texto, imagens, arquivos ou vídeos em outros textos, imagens, arquivos ou vídeos. Um exemplo offline disso é usar "tinta invisível" para ocultar uma mensagem entre as linhas de uma letra. Suco de limão é um candidato popular para tinta invisível: [tinta invisível de suco de limão](https://www.youtube.com/embed/poCnU_crpjQ)

A fórmula a seguir fornece uma descrição muito genérica das partes do processo esteganográfico:

cobrir _médio +_ dados _ocultos_ + _chave_ esteganografia _\= stegonography_ medium

Nesse contexto, a _mídia de_ capa _é o arquivo que obscurece os_ dados _ocultos_ , que também podem ser criptografados usando a _chave_ steganography _. O arquivo resultante é o_ meio de _esteganografia_ . A _mídia de_ capa _(e, portanto, o_ meio de _esteganografia_ ) geralmente são arquivos de imagem ou de áudio.

### Esteganografia em imagens

Nos computadores, as imagens são armazenadas como arquivos binários. Eles contêm uma representação binária da cor ou intensidade de luz de cada elemento de imagem (pixel) que compõe a imagem. Por exemplo, esta imagem de um cachorro:

![cão esquimó americano](https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg)

pode começar com algo como:
```
10010101   00001101   11001001 
 10010110   00001111   11001010 
 10011111   00010000   11001011 
 ... 
```

A abordagem mais simples para ocultar dados em um arquivo de imagem é chamada de inserção de bit menos significativo (LSB). Neste método, podemos pegar a representação binária dos _dados_ ocultos _e sobrescrever o LSB de cada byte dentro da_ imagem _da capa_ . Se estivermos usando cores de 24 bits, a quantidade de alterações será mínima e indistinguível para o olho humano.

Embora o JPEG possa ser usado para aplicativos stego, é mais comum incorporar dados em arquivos GIF ou BMP. GIF e arquivos BMP de 8 bits empregam o que é conhecido como compactação sem perdas, um esquema que permite ao software reconstruir exatamente a imagem original. O JPEG, por outro lado, usa compactação com perdas, o que significa que a imagem expandida é quase a mesma que a original, mas não uma cópia exata.

Esta breve demonstração permitirá que você configure a codificação de texto em uma imagem! https://github.com/edwdryer/steganography-demo Você pode ler mais sobre esteganografia em imagens aqui: http://www.garykessler.net/library/steganography.html

### Esteganografia em áudio

Esteganografia de áudio é uma técnica usada para transmitir informações ocultas, modificando um sinal de áudio de uma maneira imperceptível.

Esta postagem do blog fornece um exemplo de esconder uma imagem em um arquivo de áudio (wow)! https://solusipse.net/blog/post/basic-methods-of-audio-steganography-spectrograms/
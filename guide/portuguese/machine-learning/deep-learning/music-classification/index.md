---
title: Music Classification
localeTitle: Classificação musical
---
## Classificação musical

A classificação musical é outro campo em que estratégias de aprendizagem profunda podem ser aplicadas para se obter maior precisão de classificação do que os métodos tradicionais de aprendizado de máquina. Redes Neurais Profundas que estavam sendo originalmente usadas para reconhecimento de imagens e tarefas de visão computacional poderiam ser empregadas para a classificação musical através do uso de espectrogramas. Um espectrograma nada mais é do que uma representação visual do espectro de frequências presentes na música ao longo de um período de tempo. Em outras palavras, um sinal de música que é uma freqüência resultante, poderia ser separado em seu espectro de freqüências e a intensidade em termos de dB poderia ser representada visualmente para cada freqüência. Esta imagem poderia ser usada para treinar uma rede neural que classifica tais espectrogramas. Um ótimo caso de uso é o reconhecimento de gêneros.

### Os seguintes são exemplos de vários espectrogramas:

![Espectrograma1](http://deepsound.io/images/new_blues_00.png)

O espectrograma acima é de uma música do gênero blues. As frequências são ao longo do eixo y e o tempo no eixo x. As cores mais brilhantes representam que o som dessa freqüência é alto, enquanto as cores mais escuras representam a suavidade desses pontos específicos no tempo. Tal imagem contendo tantos dados poderia ser usada para treinar uma rede neural. Geralmente usamos um espectrograma mel-escalonado para fins de reconhecimento de gêneros, que é uma escala de notas julgadas pelos ouvintes, ou seja, como percebemos essas freqüências para distinguir entre componentes de vários gêneros.

**Transformadas de Fourier**

Um detalhe importante a saber é que tais espectrogramas são criados com a ajuda de um conceito matemático conhecido como transformadas de Fourier. A transformada de Fourier decompõe uma função do tempo nas freqüências que a compõem.

#### Mais Informações

Se você estiver usando python, existem muitas bibliotecas para processamento de sinal. [A Librosa](https://librosa.github.io/librosa/) é famosa, outra é [scipy,](https://scipy.org/) que também pode ser usada para outros propósitos científicos. mel espectrogramas poderiam ser criados aproveitando essas bibliotecas.

##### Por favor, dê uma olhada nos links a seguir para obter mais informações sobre o tópico acima:

*   [Encontrando o gênero](https://hackernoon.com/finding-the-genre-of-a-song-with-deep-learning-da8f59a61194)
*   [Deepsound](http://deepsound.io/music_genre_recognition.html)
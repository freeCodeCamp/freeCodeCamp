# Como ajudar com desafios em vídeo

Os desafios em vídeo são um novo tipo de desafio no currículo freeCodeCamp.

Um desafio em vídeo é uma seção de um curso completo sobre um determinado tópico. Uma página de desafio em vídeo incorpora um vídeo do YouTube. Cada página de desafio tem uma única pergunta de múltipla escolha relacionada ao vídeo. O usuário deve responder a pergunta corretamente antes de avançar para o próximo desafio em vídeo.

As páginas de desafio em vídeo são criadas por membros da equipe freeCodeCamp. Vídeos do YouTube também são enviados por membros da equipe freeCodeCamp. Muitos dos desafios em vídeo ainda não possuem perguntas associadas a eles.

Você pode ajudar criando questões de múltipla escolha e adicionando-as aos arquivos 'markdown' para os desafios em vídeo.

## Modelo de desafio

Abaixo está um modelo de arquivo markdown do desafio.

````md
---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
title: Título do desafio
challengeType: 11
videoId: 'videoId do desafio por vídeo no YouTube'
forumTopicId: 12345
---

# --descrição--

Texto de descrição do desafio, em markdown

```html
<div>código de exemplo</div>
````

# --question--

Esses espaços são normalmente utilizados para questões de múltipla escolha dos desafios de Python.

## --text--

O texto da questão vêm aqui.

## --answers--

Resposta 1

---

Resposta 2

---

Mais respostas

## --video-solution--

O número da resposta correta fica aqui.
````

## Criando perguntas para desafios em video

### Acessar o arquivo markdown do desafio em vídeo

Os arquivos markdown dos desafios estão localizadas no currículo em:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Escolha um arquivo dentre as opções acima. 

### Explore o vídeo associado ao desafio e crie uma questão de múltipla escolha

Primeiro, localize o `videoId`.

Por exemplo, no código a seguir a partir do cabeçalho de um arquivo markdown de desafio de vídeo, o `videoId` é "nVAaxZ34khk". No GitHub, a informação deve estar contida em formato tabular.

````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Em seguida, acesse o vídeo no YouTube correspondente com aquele `videoId`. A URL do vídeo será:
https://www.youtube.com/watch?v=[videoId]  (troque `videoId` na URL pelo ID do vídeo - sem colchetes)

No exemplo acima, a URL seria https://www.youtube.com/watch?v=nVAaxZ34khk

Assista ao vídeo no YouTube daquele `videoId` e pense em uma questão de múltipla escolha baseada em seu conteúdo.

### Adicione a pergunta ao arquivo markdown

Você pode adicionar a pergunta localmente ou utilizando a interface do Github. Para adicionar a pergunta localmente, você precisa [configurar o freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Você também pode encontrar o arquivo no GitHub e clicar no botão editar para adicionar a pergunta diretamente em seu navegador.

Se uma pergunta não tiver sido adicionada a um desafio de vídeo ainda, ela terá a seguinte forma padrão:

```md
# --question-

## --text--

Texto da questão

## --answers--

Resposta 1

---

Resposta 2

---

Mais respostas

## --video-solution--

1
```

Adicione/atualize o texto da pergunta sob a parte que diz:

```
# --question--

## --text--
```

Adicione/Atualize (`Answer 1`, `Answer 2`, e assim por diante) sob `## --answers--`. Confirme se o número sob  `## --video-solution--` seja o número da resposta correta. Você pode adicionar mais respostas possíveis usando o mesmo formato. Tanto a pergunta quanto as respostas podem estar entre aspas.

### Exemplos de perguntas

````md
# --pergunta--

## --texto--

O que esse código JavaScript mostra no console?

```js
console.log('hello world');
````

## --answers--

hello _world_

---

**hello** world

---

hello world

---

## --video-solution--

3
````

````md
# --pergunta--

## --texto--

O que aparecerá após executar esse código:

```py
width = 15
height = 12.0
print(height/3)
````

## --answers--

39

---

4

---

4.0

---

5.0

---

5

## --video-solution--

3 ````

Para mais exemplos, você pode ver os arquivos markdown para o seguinte curso em vídeo. Todos os desafios já possuem perguntas: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Abra um pull request

Depois de criar uma ou mais perguntas, você pode confirmar as mudanças em uma nova branch e [abrir um pull request](how-to-open-a-pull-request.md).

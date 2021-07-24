# Como ajudar com desafios em vídeo

Video challenges are a new type of challenge in the freeCodeCamp curriculum.

Um desafio em vídeo é uma seção de um curso completo sobre um determinado tópico. Uma página de desafio em vídeo incorpora um vídeo do YouTube. Each challenge page has a single multiple-choice question related to the video. O usuário deve responder a pergunta corretamente antes de avançar para o próximo desafio em vídeo.

As páginas de desafio em vídeo são criadas por membros da equipe freeCodeCamp. YouTube videos are also uploaded by members of the freeCodeCamp team. Muitos dos desafios em vídeo ainda não possuem perguntas associadas a eles.

You can help by creating multiple-choice questions related to video sections and adding the questions to the markdown files for the video challenges.


## Challenge Template

Abaixo está um modelo de arquivo markdown do desafio.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>
  example code
</div>
````

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.

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

Primeiro, localize o videoId.

For example, in the following code from the header of a video challenge markdown file, the videoId is "nVAaxZ34khk". No GitHub, a informação deve estar contida em formato tabular.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Em seguida, acesse o vídeo no YouTube correspondente com aquele `videoId`. The URL for the video will be:
https://www.youtube.com/watch?v=[videoId]    (replace `videoId` in the URL with the video's ID - without square brackets)

In the example above, the URL is https://www.youtube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that videoId and think of a multiple-choice question based on the content of the video.

### Adicione a pergunta ao arquivo markdown

Você pode adicionar a pergunta localmente ou utilizando a interface do Github. Para adicionar a pergunta localmente, você precisa [configurar o freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). You can also find the file on GitHub and click the edit button to add the question right in your browser.

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
Add/Update answers (`Answer 1`, `Answer 2`, and so on) under `## --answers--`. Make sure to update the number under `## --video-solution--` with the correct answer number. You can add more possible answers using the same format. The question and answers can be surrounded with quotation marks.

### Exemplos de perguntas

````md
# --question--

## --text--
O que esse código JavaScript mostra no console?
```js
console.log('hello world');
````

## --answers--

hello *world*

---

**hello** world

---

hello world

---

## --video-solution--
3
````

````md

# --question--

## --text--

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

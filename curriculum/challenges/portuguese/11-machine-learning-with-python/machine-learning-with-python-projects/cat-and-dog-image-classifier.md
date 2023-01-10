---
id: 5e46f8dcac417301a38fb92e
title: Classificador de imagens de gatos e cachorros
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

Você <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com Google Colaboratory</a>.

Depois de acessar esse link, crie uma cópia do notebook em sua própria conta ou localmente. Depois que você completar o projeto e que ele passar pelo teste (incluído nesse link), envie o link do projeto abaixo. Se você estiver enviando um link do Google Colaboratory, certifique-se de ativar o compartilhamento de links para "qualquer um que tenha o link".

Ainda estamos desenvolvendo o conteúdo instrucional interativo do currículo de aprendizagem de máquina. Por enquanto, você pode ver os desafios de vídeo desta certificação. Você também pode ter que procurar recursos adicionais de aprendizagem, do mesmo modo que você faria ao trabalhar em um projeto do mundo real.

# --instructions--

Para este desafio, você completará o código para classificar imagens de cães e gatos. Você usará o TensorFlow 2.0 e o Keras para criar uma rede neural convolucional que classifique corretamente imagens de gatos e cães com, pelo menos, 63% de precisão. (Você ganha créditos extras se conseguir 70% de precisão!)

Parte do código é dado a você, mas a outra parte você deve preencher para completar este desafio. Leia a instrução em cada célula de texto para saber o que tem de fazer em cada célula de código.

A primeira célula de código importa as bibliotecas necessárias. A segunda célula de código baixa os dados e define as principais variáveis. A terceira célula é o primeiro lugar onde você escreverá seu próprio código.

A estrutura dos arquivos do conjunto de dados que foram baixados tem essa aparência (você notará que o diretório de testes não tem subdiretórios e que as imagens não estão identificadas):

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

Você pode ajustar epochs e tamanho do lote se quiser, mas não é necessário.

As instruções a seguir correspondem a números de célula específicos, indicados com um comentário no topo da célula (como `# 3`).

## Célula 3

Agora é a sua vez! Defina cada uma das variáveis nessa célula corretamente (elas não devem mais ser iguais a `None`).

Crie geradores de imagem para cada um dos três conjuntos de dados de imagens (treinamento, validação, teste). Use `ImageDataGenerator` para ler/decodificar as imagens e convertê-las em tensores de ponto flutuante. Use o argumento `rescale` (e não há outros argumentos por enquanto) para redimensionar os tensores dos valores entre 0 e 255 para valores entre 0 e 1.

Para as variáveis `*_data_gen`, use o método `flow_from_directory`. Passe o tamanho do lote, diretório, tamanho do destino (`(IMG_HEIGHT, IMG_WIDTH)`), modo de classe e tudo o mais que for necessário. `test_data_gen` será o mais complicado. Para `test_data_gen`, certifique-se de passar `shuffle=False` para o método `flow_from_directory`. Isto garantirá que as previsões finais permaneçam na ordem que o nosso teste espera. Para `test_data_gen` será útil observar a estrutura de diretório.


Após executar o código, a saída deverá ficar assim:

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Célula 4

A função `plotImages` será usada algumas vezes para desenhar imagens. Ela pega um array de imagens e uma lista de probabilidades, embora a lista de probabilidades seja opcional. Este código é dado para você. Se você criou a variável `train_data_gen` corretamente, ao executar essa célula, verá representadas cinco imagens aleatórias de treino.

## Célula 5

Recrie o `train_image_generator` usando o `ImageDataGenerator`.

Como há um pequeno número de exemplos de treinamento, existe o risco de sobreposição. Uma maneira de resolver esse problema é criar mais dados de treinamento a partir dos exemplos existentes usando transformações aleatórias.

Adicione 4 a 6 transformações aleatórias como argumentos para `ImageDataGenerator`. Não se esqueça de redimensioná-la como antes.

## Célula 6

Você não tem que fazer nada para esta célula. `train_data_gen` é criado como antes, mas com o novo `train_image_generator`. Então, uma única imagem é desenhada cinco vezes usando variações diferentes.

## Célula 7

Nesta célula, crie um modelo para a rede neural que produza as probabilidades de classe. Ele deve usar o modelo sequencial do Keras. Isso provavelmente envolverá uma pilha de camadas Conv2D e MaxPooling2D e, em seguida, uma camada totalmente conectada no topo, que é ativada por uma função de ativação de ReLU.

Faça a compilação do modelo passando os argumentos para definir o otimizador e a perda. Inclua também `metrics=['accuracy']` para visualizar a precisão do treinamento e da validação de cada epoch de treinamento.

## Célula 8

Use o método `fit` no seu `model` para treinar a rede. Certifique-se de passar argumentos para `x`, `steps_per_epoch`, `epochs`, `validation_data` e `validation_steps`.

## Célula 9

Execute esta célula para visualizar a precisão e a perda do modelo.

## Célula 10

Agora é hora de usar o nosso modelo para prever se uma nova imagem é um gato ou um cão.

Nesta célula, obtenha a probabilidade de que cada imagem de teste (de `test_data_gen`) seja um cão ou um gato. `probabilities` deve ser uma lista de números inteiros.

Chame a função `plotImages` e passe as imagens de teste e as probabilidades correspondentes a cada imagem de teste.

Depois de executar a célula, você deve ver todas as 50 imagens de teste com um rótulo mostrando a porcentagem de "certeza" de que a imagem é um gato ou um cachorro. A precisão corresponderá à precisão mostrada no gráfico acima (após executar a célula anterior). O aumento do treinamento de imagens poderia levar a uma maior precisão.

## Célula 11

Execute esta célula final para ver se passou no desafio ou se precisa continuar tentando.

# --hints--

Ele deve passar em todos os testes do Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```

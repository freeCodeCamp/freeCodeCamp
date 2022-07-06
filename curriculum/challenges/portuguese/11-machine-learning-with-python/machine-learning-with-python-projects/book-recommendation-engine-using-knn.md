---
id: 5e46f8e3ac417301a38fb92f
title: Mecanismo de recomendação de livros usando KNN
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

Você <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow">trabalhará neste projeto com Google Colaboratory</a>.

Depois de acessar esse link, crie uma cópia do notebook em sua própria conta ou localmente. Depois que você completar o projeto e que ele passar pelo teste (incluído nesse link), envie o link do projeto abaixo. Se você estiver enviando um link do Google Colaboratory, certifique-se de ativar o compartilhamento de links para "qualquer um que tenha o link".

Ainda estamos desenvolvendo o conteúdo instrucional interativo do currículo de aprendizagem de máquina. Por enquanto, você pode ver os desafios de vídeo desta certificação. Você também pode ter que procurar recursos adicionais de aprendizagem, do mesmo modo que você faria ao trabalhar em um projeto do mundo real.

# --instructions--

Neste desafio, você criará um algoritmo de recomendação de livros usando os **vizinhos K-mais próximos**.

Você usará o <a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">dataset do Book-Crossings</a>. Este conjunto de dados contém 1,1 milhão de classificações (na escala de 1-10) de 270.000 livros por 90.000 usuários.

Após importar e limpar os dados, use `NearestNeighbors` de `sklearn.neighbors` para desenvolver um modelo que mostra livros semelhantes a um livro específico. O algoritmo dos vizinhos mais próximos mede a distância para determinar a "aproximação" das instâncias.

Crie uma função chamada `get_recommends` que recebe um título de livro (do dataset) como um argumento e retorna uma lista de 5 livros semelhantes com suas distâncias do argumento do livro.

Este código:

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

deve retornar:

```py
[
  'The Queen of the Damned (Vampire Chronicles (Paperback))',
  [
    ['Catch 22', 0.793983519077301], 
    ['The Witching Hour (Lives of the Mayfair Witches)', 0.7448656558990479], 
    ['Interview with the Vampire', 0.7345068454742432],
    ['The Tale of the Body Thief (Vampire Chronicles (Paperback))', 0.5376338362693787],
    ['The Vampire Lestat (Vampire Chronicles, Book II)', 0.5178412199020386]
  ]
]
```

Observe que os dados retornados de `get_recommends()` são uma lista. O primeiro elemento na lista é o título do livro passado para a função. O segundo elemento da lista é uma lista com mais cinco listas. Cada uma das cinco listas contém um livro recomendado e a distância do livro recomendado até o livro passar para a função.

Se você colocar o conjunto de dados em um gráfico (opcional), notará que a maioria dos livros não é classificada com frequência. Para garantir a significância estatística, remova do conjunto de dados usuários com menos de 200 avaliações e livros com menos de 100 avaliações.

As primeiras três células importam bibliotecas de que você pode precisar e os dados a serem utilizados. A célula final é para os testes. Escreva todo o código entre essas células.

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

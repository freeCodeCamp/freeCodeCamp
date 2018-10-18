---
title: Its Generalization That Counts
localeTitle: Sua generalização que conta
---
## Sua generalização que conta

O poder da aprendizagem de máquina vem de não ter que codificar ou explicitamente defina os parâmetros que descrevem seus dados de treinamento e dados não vistos. Isto é o objetivo essencial da aprendizagem de máquina: generalizar as descobertas de um aprendiz.

Para testar a capacidade de generalização de um aluno, você desejará ter dados de teste separados conjunto que não é usado de forma alguma no treinamento do aluno. Isso pode ser criado por quer dividindo todo o seu conjunto de dados de treinamento em um conjunto de treinamento e teste, ou apenas coletar mais dados. Se o aluno usasse os dados encontrados no teste conjunto de dados, isso criaria uma espécie de preconceito em seu aluno para fazer melhor do que em realidade.

Um método para ter uma noção de como seu aluno fará em um conjunto de dados de teste é executar o que é chamado **de validação cruzada** . Isso divide aleatoriamente o seu dados de treinamento em um determinado número de subconjuntos (por exemplo, dez subconjuntos) e deixa um subconjunto fora enquanto o aluno treina no resto. E então uma vez que o o aluno foi treinado, o conjunto de dados deixado de fora é usado para teste. este treinamento, deixando um subconjunto fora, e o teste é repetido enquanto você gira os subconjuntos.

#### Mais Informações:

*   [Algumas coisas úteis para aprender sobre aprendizado de máquina](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf)
*   ["Como você usa o conjunto de dados de teste após a validação cruzada"](https://stats.stackexchange.com/a/153058/132399)
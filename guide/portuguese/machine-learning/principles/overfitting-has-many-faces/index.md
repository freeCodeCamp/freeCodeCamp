---
title: Overfitting Has Many Faces
localeTitle: Overfitting tem muitas caras
---
## Overfitting tem muitas caras

Se um algoritmo de aprendizado se encaixa bem em um determinado conjunto de treinamento, isso não indica simplesmente uma boa hipótese. O overfitting ocorre quando a função de hipótese J (Θ) se ajusta ao seu conjunto de treinamento de forma muito próxima, com uma alta variância e baixo erro no conjunto de treinamento, embora tenha um erro de teste alto em quaisquer outros dados.

Em outras palavras, overfitting occrus se o erro da hipótese medida no conjunto de dados que foi usado para treinar os parâmetros for menor do que o erro em qualquer outro conjunto de dados.

### Escolhendo um grau ótimo de polinômio

Escolher o grau certo de polinômio para a função de hipótese é importante para evitar o overfitting. Isso pode ser obtido testando cada grau de polinômio e observando o efeito no resultado do erro em várias partes do conjunto de dados. Assim, podemos dividir nosso conjunto de dados em 3 partes que podem ser usadas na otimização da hipótese 'teta e grau polinomial.

Uma boa taxa de decomposição do conjunto de dados é:

*   Conjunto de treino: 60%
*   Validação Cruzada: 20%
*   Conjunto de teste: 20%

Os três valores de erro podem ser calculados pelo seguinte método: 1

1.  Use o conjunto de treinamento para cada grau polinomial, a fim de otimizar os parâmetros em `Θ`
2.  Use o conjunto de validação cruzada para encontrar o grau de polinômio com o menor erro
3.  Use o conjunto de testes para estimar o erro de generalização

### Formas de consertar overfitting

Estas são algumas das maneiras de resolver o overfitting:

1.  Obtendo mais exemplos de treinamento
2.  Tentando um conjunto menor de recursos
3.  Aumentando o parâmetro `λ lambda`

#### Mais Informações:

[Curso de Aprendizado de Máquina do Coursera](https://www.coursera.org/learn/machine-learning)

### Fontes

1.  [Ng, Andrew. "Aprendizado de Máquina". _Coursera_ Acessado em 29 de janeiro de 2018](https://www.coursera.org/learn/machine-learning)
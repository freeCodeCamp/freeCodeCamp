---
title: Bar Graph Project
localeTitle: Projeto Gráfico de Barras
---
## Nosso objetivo é aprender o básico dos dados

Visualização usando D3 através deste projeto.

![captura de tela 2016-05-17 às 5 02 41 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d46c5c1c76bd03b9e85d450da02695d3f07c75c.png)

## O que é o D3.js?

Para aqueles que não estão familiarizados com o D3, o D3.js é uma biblioteca JavaScript para manipular documentos com base em dados. A D3 ajuda você a dar vida aos dados usando HTML, SVG e CSS.

O D3.js ajuda você a anexar seus dados aos elementos DOM (Document Object Model). Então você pode usar CSS3, HTML e / ou SVG mostrar esses dados. Por fim, você pode tornar os dados interativos por meio do uso de transformações e transições controladas por dados do D3.js.

## Explicação do Projeto:

### Cenário:

Há uma classe de alunos on-line interagindo com diferentes tópicos do assunto e faz um teste sobre esses tópicos.

Existem 15 tópicos e em cada tópico, temos um número de alunos que fizeram o teste e marcaram em três categorias: Baixo, Médio e Alto.

### Por exemplo (dados fornecidos):

Tópico: "1", baixo: 4, médio: 13, alto: 18

Tópico: "2", baixo: 11, médio: 12, alto: 6

Tópico: "3", baixo: 12, meio: 24, alto: 6 e assim por diante.

Note que o Tópico 1 tem `4 + 13 + 8 = 35` alunos fizeram o teste e o Tópico 2 tem `11+12+6 = 29` alunos e o tópico 3 tem 42 alunos e assim por diante.

Queremos fazer gráficos interativos de barras e torta. Por exemplo, um mouse focalizado em uma das barras mudará o gráfico de pizza de acordo e vice-versa.

Com a combinação interativa de gráfico de barras e gráfico de pizza, onde o gráfico de barras mostra o número de alunos que interagiram com determinado tópico (considerado o quiz) e o gráfico mostrando a classificação do desempenho desses alunos nas categorias "baixo, médio e alto" visualize nossos dados e obtenha mais análises de dados.

## Dicas e Recursos:

### Instruções passo a passo:

[**D3 Introdução:**](https://d3js.org) onde você pode aprender sobre Seleções, Propriedades dinâmicas e Transições em D3.js.

*   Na função principal javascript, escreva uma função para lidar com Histograma (gráfico de barras) - Histograma mostrará o número total de alunos que participaram do questionário (interagiu com esse tópico) para 15 tópicos.
    
    *   (Aqui é o [**tutorial**](https://bost.ocks.org/mike/bar/) onde você pode aprender como fazer um gráfico de barras usando a biblioteca JavaScript D3. O primeiro tutorial ensina como fazer uma versão básica em HTML, então um gráfico mais completo em Scalable Vector Graphics (SVG), e transições animadas entre visões.
*   [Criar SVG para histograma](http://codepen.io/SundeepB/pen/CxveH)
    
*   Criar função para o mapeamento do eixo x e adicionar eixo x ao histograma SVG
    
*   Crie uma função para o mapeamento do eixo y e crie barras para que o histograma contenha retângulos e rótulos de tópicos.
    
*   Crie os retângulos e os rótulos de tópicos
    
*   Criar função para atualizar as barras. Isso será usado pelo gráfico de pizza
    
*   Escreva uma função para lidar com pieChart. - gráfico de pizza terá três fatias - Baixo, Médio e Alto para representar pontuações.
    
    *   [**Tutorial**](http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart) onde você pode aprender como fazer um gráfico de pizza, então transições entre visões e como criar uma legenda.
*   Crie svg para gráfico de pizza.
    
*   Criar função para desenhar os arcos das fatias da pizza - as fatias da pizza serão baixas, médias e altas
    
*   Crie uma função para calcular os ângulos de fatia de pizza.
    
*   Desenhe as fatias da torta.
    
*   Criar função para atualizar o gráfico de pizza. Isso será usado pelo histograma.
    
*   Calcule a frequência total por segmento para todo o tópico.
    
*   Calcule a frequência total por estado para todos os segmentos.
    

## Resultado da análise de dados e o que podemos inferir da visualização:

*   O gráfico de pizza inicial mostra a classificação agregada de todas as pontuações do aluno em todos os tópicos combinados em três categorias "baixa, média, alta"
    
*   Gráfico de barras inicial que mostra o número de alunos que interagiram nesse tópico em particular
    
*   Qualquer categoria Selecionada do gráfico de pizza atualizará o gráfico de barras, mostrando o número de alunos que interagiram em vários tópicos com pontuação pertencente a essa categoria específica.
    
*   As capturas de tela abaixo mostram o foco do mouse na fatia "Média" e na fatia "Alta" do gráfico de pizza, respectivamente, e para essa fatia específica, gráficos de barras por tópicos e número de alunos.
    

![captura de tela 2016-05-17 às 5 13 53 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/1/106f06d412df6db5b4a421dc4769d22695cbec72.png)

![captura de tela 2016-05-17 às 5 14 05 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7b23ebe89f74f11090984dbc4dc68212e3beceb3.png)

*   A barra de qualquer gráfico de barras selecionado atualizará o gráfico mostrando a classificação de todos os alunos nesse tópico específico em três categorias Baixo, Médio e Alto. A captura de tela abaixo mostra o foco do mouse no Tópico 2 e para esse tópico em particular, quantos alunos categorias Baixo, Médio e Alto

![captura de tela 2016-05-17 às 5 13 26 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7bd7c613bdb882f2b7c1f76f9778a1bda3e886dd.png)

Referências: [1\] Exemplos de \[https://d3js.org](https://d3js.org) [2\] D3.js Introdução - \[https://www.dashingd3js.com/why-build-with-d3js](https://www.dashingd3js.com/why-build-with-d3js)
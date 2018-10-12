---
title: Feature Engineering
localeTitle: Engenharia de recursos
---
## Engenharia de recursos

Machine Learning funciona melhor com dados bem formados. A engenharia de recursos descreve certas técnicas para garantir que estamos trabalhando com a melhor representação possível dos dados coletados.

## Por que a engenharia de recursos é útil?

*   A quantidade e a qualidade dos recursos afetam o poder preditivo do modelo. Mais recursos de alta qualidade resultam em um modelo melhor.
*   Crie modelos melhores pegando os dados que você possui e ampliando-os com informações adicionais relevantes ao assunto obtidas em outro lugar.
*   Novos recursos podem levar a "avanços" na capacidade do modelo de prever um resultado robusto.

## Advertências para a engenharia de recursos

*   A criação de novos recursos com base em recursos conhecidos pode levar à multicolinearidade, uma situação em que dois recursos são linearmente relacionados. Isso equivale a "mergulhar duas vezes" em um modelo e pode levar a ajustes excessivos.
*   Mais nem sempre é melhor. Adicionar recursos com recursos preditivos ruins pode aumentar o tempo computacional sem adicionar benefícios ao modelo.

## Exemplos de engenharia de recursos:

*   Se você tiver um recurso de "data", tente agrupá-lo em "dia da semana", "semana do ano" ou "mês do ano". Da mesma forma, crie um recurso AM / PM a partir de "hora do dia".
*   Execute uma redução de dados como o PCA e adicione os vetores do PCA aos dados como novos recursos.
*   Produza novos recursos transformando numericamente os recursos atuais. Exemplos seriam dados de transformação de log ou codificação de recursos categóricos como números (convert baixo / médio / alto para 1/2/3).
*   Use dados do censo para criar novos recursos (como renda média), supondo que seu conjunto de dados contenha informações de localização (cidade, estado, município etc.).

A seguir, duas técnicas de engenharia de recursos: dimensionamento e seleção.

### Escala de recursos

Vamos supor que seus dados contenham o peso e a altura das pessoas. Os números brutos dessas duas características têm uma grande diferença (por exemplo, 80 kg e 180 cm, ou 175 lbs vs 5.9 pés), o que pode influenciar o resultado de um determinado algoritmo de Aprendizado de Máquina. Este é especialmente o caso de algoritmos que usam [funções de distância](https://en.wikipedia.org/wiki/Euclidean_distance) .

Para corrigir isso, representamos os números brutos em um intervalo de 0 a 1. Podemos conseguir isso usando a fórmula: `(x - xMin) / (xMax - xMin)` .

Usando essa fórmula, precisamos prestar atenção especial aos valores discrepantes, pois eles podem afetar drasticamente o resultado, aumentando o xMax e reduzindo o xMin. É por isso que os valores discrepantes são frequentemente eliminados antes do dimensionamento.

### Seleção de Recurso

É tudo sobre como identificar o subconjunto de recursos responsáveis ​​pelas tendências que observamos em nossos dados.

Por que devemos nos importar? [A maldição da dimensionalidade](https://en.wikipedia.org/wiki/Curse_of_dimensionality) é um grande inimigo em tempos de Big Data. Não podemos usar todas as nossas dezenas ou centenas de recursos. Isso não apenas aumentaria a dimensionalidade de nossos dados através do telhado (2 ^ n, onde n é o número de recursos), mas também não faria sentido em casos de uso específicos. Imagine querer prever o tempo de amanhã: será mais provável que a tendência do tempo dos últimos dias seja mais importante neste cenário do que os bebês nascidos nos últimos dias. Assim, você poderia facilmente eliminar o recurso dos bebês.

Mas esqueça os bebês por enquanto, vamos mergulhar em mais detalhes.

#### Filtragem e envolvimento

Aqui nós descrevemos duas abordagens gerais. Os métodos de filtragem atuam independentemente do algoritmo de aprendizado escolhido e os métodos de agrupamento incorporam o aluno.

Os métodos de filtro selecionam o subconjunto de recursos antes de injetar os dados em seu algoritmo ML. Eles usam, por exemplo, a correlação com a variável a ser prevista para identificar qual subconjunto de recursos escolher. Esses métodos são relativamente rápidos para serem computados, mas não se aproveitam do [viés do aluno,](https://en.wikipedia.org/wiki/Inductive_bias) pois a filtragem está acontecendo independentemente do modelo ML escolhido.

Os algoritmos de busca de moldagem aproveitam o viés de aprendizado, pois incorporam o modelo ML escolhido. Esses métodos funcionam removendo o recurso que tem a menor alteração na pontuação quando removido e repetindo esse processo até que a pontuação mude significativamente. Isso significa executar o algoritmo de aprendizado várias vezes, o que pode levar a tempos de computação significativos. Esses métodos também têm o perigo de overfitting, já que você está basicamente otimizando o conjunto de recursos baseado no modelo ML escolhido.

#### Relevância

Outra maneira de selecionar recursos é usar o [BOC (Bayes Optimal Classifier)](https://scholar.google.de/scholar?q=Bayes+Optimal+Classifier&hl=en&as_sdt=0&as_vis=1&oi=scholart&sa=X&ved=0ahUKEwiO16X0tIbXAhXiKsAKHbGrBzoQgQMIJjAA) . A regra dos polegares aqui é:

*   um recurso é altamente relevante se a remoção de degrada o BOC
*   um recurso é pouco relevante se não for muito relevante e adicioná-lo em combinação com outros recursos melhora o BOC
*   caso contrário, um recurso é irrelevante

Bem, nem sempre. Depende da quantidade de dados que você tem e da força dos sinais concorrentes. Você pode ajudar seu algoritmo a "focar" no que é importante destacando-o de antemão.

*   Variável de indicador dos limites: digamos que você esteja estudando as preferências de bebidas alcoólicas dos consumidores dos EUA e seu conjunto de dados tenha um recurso de idade. Você pode criar uma variável indicadora para idade> = 21 para distinguir os indivíduos que estavam acima da idade legal para beber.
*   Variável de indicador de vários recursos: Você está prevendo preços de imóveis e você tem os recursos n _quartos e n_ banheiros. Se as casas com 2 camas e 2 banheiros comandarem um prêmio como propriedades de aluguel, você poderá criar uma variável de indicador para sinalizá-las.
*   Variável de indicador para eventos especiais: você está modelando as vendas semanais para um site de comércio eletrônico. Você pode criar duas variáveis ​​indicadoras para as semanas de Black Friday e Christmas.
*   Variável de indicador para grupos de classes: você está analisando conversões de websites e seu conjunto de dados tem a _origem de_ tráfego de recurso categórico _. Você pode criar uma variável indicadora de_ tráfego _pago_ marcando observações com valores de origem de tráfego de "Anúncios do Facebook" ou "Google Adwords".

## Recursos de interação

O próximo tipo de engenharia de recursos envolve destacar as interações entre dois ou mais recursos.

Você já ouviu a frase "a soma é maior que as partes?" Bem, alguns recursos podem ser combinados para fornecer mais informações do que como indivíduos.

Especificamente, procure oportunidades para obter a soma, a diferença, o produto ou o quociente de vários recursos.

\* Observação: não recomendamos o uso de um loop automatizado para criar interações para todos os seus recursos. Isso leva à "explosão de recursos".

*   Soma de dois recursos: digamos que você deseja prever receita com base em dados preliminares de vendas. Você tem os recursos de vendas de canetas _azuis_ e canetas _pretas de_ vendas. Você poderia somar esses recursos se você se preocupasse apenas com as vendas totais.
*   Diferença entre dois recursos: você tem a data de _construção da_ casa e a data de _compra da_ casa. Você pode fazer a diferença para criar a _idade_ da feature house na compra.
*   Produto de dois recursos: você está executando um teste de precificação e tem o preço do recurso e uma conversão de variável do indicador. Você pode pegar o produto deles para criar os ganhos do recurso.
*   Quociente de dois recursos: você tem um conjunto de dados de campanhas de marketing com os recursos n _cliques e n_ impressões. Você pode dividir cliques por impressões para criar clique _com a_ taxa, o que lhe permite comparar através de campanhas de volume diferente.

#### Mais Informações:

*   [Pesquisa de papel "Feature Engineering for Text Classification"](https://pdfs.semanticscholar.org/6e51/8946c59c8c5d005054af319783b3eba128a9.pdf)
*   [Artigo "Descubra a engenharia de recursos, como projetar recursos e como obter bons resultados"](https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/)
*   [Um guia abrangente para análise de dados](https://www.analyticsvidhya.com/blog/2016/01/guide-data-exploration/)
*   [Transformações de dados](https://onlinecourses.science.psu.edu/stat501/node/318)
*   [Engenharia de recursos em ciência de dados](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/create-features)
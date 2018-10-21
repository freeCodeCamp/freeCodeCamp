---
title: Principal Component Analysis
localeTitle: Análise do componente principal
---
## Análise de Componentes Principais (PCA)

### O que é isso?

A Análise de Componentes Principais (PCA) é um algoritmo usado no aprendizado de máquina para reduzir as dimensões de um conjunto de dados. Você pode reduzir um conjunto de dados contendo centenas de recursos diferentes para um novo conjunto de dados contendo apenas dois.

Por exemplo, imagine que você queira medir a capacidade de um piloto. Existem muitos fatores diferentes envolvidos nisso. Duas características relevantes a serem levadas em consideração podem ser a habilidade do piloto e o prazer do piloto. Este seria um conjunto de dados bidimensional, pois contém dois recursos. O PCA poderia reduzir esses recursos em um, unindo-os. Você pode chamar esse novo recurso de "piloto de aptidão". Esse novo recurso oferece uma métrica mais simples para medir a capacidade de um piloto.

Se você planejar a habilidade do piloto contra o prazer do piloto, você pode obter algo assim:

![Traçando habilidade piloto versus diversão piloto](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/plot-skill-vs-enjoyment.png?raw=true)

Intuitivamente, o que o PCA faz é encontrar a melhor linha reta (ou plano, em situações dimensionais mais altas) na qual projetar esses dois recursos. A projeção é feita desenhando uma linha perpendicular entre o ponto e a linha. Você pode ver uma ilustração disso abaixo:

![Projeção para linha](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/projection.png?raw=true)

Você pode pensar no PCA como encontrar a melhor linha para o conjunto de dados para que as informações de cada ponto sejam preservadas melhor. Isso é feito minimizando a soma dos erros de projeção ao quadrado de cada ponto. O erro de projeção é o comprimento das linhas perpendiculares projetando cada ponto na linha. Ao minimizá-los, você garante que a linha reta escolhida seja a melhor combinação desses dois recursos.

Abaixo estão exemplos de uma boa linha na qual projetar os dados e um mau. As projeções resultantes da linha boa são mais representativas dos dados originais e possuem erros menores. As projeções resultantes da linha ruim são claramente uma representação pior, e os erros de projeção são muito maiores.

![Boa versus má projeção de pontos](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/good-vs-bad-projection.png?raw=true)

**Importante** : Vale a pena notar que o PCA é diferente da [regressão linear](https://en.wikipedia.org/wiki/Linear_regression) . Seus objetivos de otimização (o que eles pretendem minimizar) são diferentes.

Se você executar o PCA no conjunto de dados piloto, poderá obter um novo recurso, "piloto de aptidão", semelhante a este:

![Transformando o conjunto de dados piloto usando o PCA](https://github.com/DHDaniel/guides/blob/master/src/pages/machine-learning/principal-component-analysis/PCA-on-dataset.png?raw=true)

A matemática por trás do PCA é um pouco complicada, mas você não precisa ser especialista para usá-lo. Embora exista muita álgebra linear, o uso é relativamente fácil. Isso ocorre porque há muitas bibliotecas de códigos com implementações de PCA prontas. Alguns exemplos incluem:

*   [Uma implementação do JavaScript PCA](https://github.com/mljs/pca) .
*   [Implementação de scikit-learn em Python](http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html) .
*   [Implementação do MATLAB](https://www.mathworks.com/help/stats/pca.html) .

### Por que usar isso?

Existem muitas razões para usar o algoritmo PCA. Um muito importante é visualizar dados. É fácil visualizar dados em 1-D, 2-D e até 3-D, mas além disso, torna-se difícil. No aprendizado de máquina, geralmente é muito útil visualizar os dados antes de começar a trabalhar nele. Mas um conjunto de dados de alta dimensão é muito difícil de visualizar. Ao usar o PCA, um conjunto de dados de cem dimensões pode ser reduzido para um conjunto de dados bidimensional.

Isso é especialmente útil em situações do mundo real, em que os conjuntos de dados geralmente são de alta dimensão. Por exemplo, você pode combinar métricas de desempenho econômico, como PIB, IDH, etc., em um único recurso. Isso permite que você faça comparações melhores entre os países e também permite visualizar os dados usando um gráfico.

Outra razão para usar o algoritmo PCA é tornar seu conjunto de dados menor. Para problemas que envolvem centenas de milhares de recursos (como processamento de imagem), os algoritmos de aprendizado de máquina podem levar muito tempo para serem executados. Ao reduzir o número de recursos, você pode melhorar a velocidade desses algoritmos sem sacrificar a precisão. Você também pode economizar muito espaço em disco, especialmente se estiver trabalhando com grandes conjuntos de dados.

### Limitações

Como você está basicamente simplificando um conjunto de dados ao executar o PCA, alguns detalhes podem ser perdidos no processo. Este é especialmente o caso de pontos de dados muito dispersos e que não possuem uma correlação muito forte.

#### Leitura sugerida:

*   https://www.reddit.com/r/datascience/comments/668pp1
*   https://en.wikipedia.org/wiki/Análise de _componente principal_
*   http://www.cs.otago.ac.nz/cosc453/student _tutorials / principal_ components.pdf
*   http://setosa.io/ev/principal-component-analysis/ (interativo)

Wikipedia Says, "Análise de componentes principais (PCA) é um procedimento estatístico que usa uma transformação ortogonal para converter um conjunto de observações de variáveis ​​possivelmente correlacionadas em um conjunto de valores de variáveis ​​lineares não correlacionadas chamados componentes principais (ou às vezes, principais modos de variação) "

Análise de componentes principais (PCA) é uma técnica estatística usada para examinar as inter-relações entre um conjunto de variáveis, a fim de identificar a estrutura subjacente dessas variáveis. O PCA geralmente reduz o número de recursos de N-Dimensional a k-Dimensional, onde k <N

O PCA tem as seguintes aplicações: 1) Compressão: Aumentar a velocidade computacional e também reduzir o espaço de armazenamento 2) Visualização: PCA pode reduzir os dados para dois ou três dados dimensionais para fins de visualização
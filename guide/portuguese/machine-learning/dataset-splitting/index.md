---
title: Dataset Splitting
localeTitle: Divisão de Conjunto de Dados
---
## Divisão de Conjunto de Dados

Dividir-se em treinamento, validação cruzada e conjuntos de testes são práticas recomendadas comuns. Isso permite ajustar vários parâmetros do algoritmo sem fazer julgamentos que se ajustem especificamente aos dados de treinamento.

### Motivação

A decomposição de conjuntos de dados surge como uma necessidade para eliminar o viés de dados de treinamento em algoritmos de ML. Modificar parâmetros de um algoritmo ML para melhor se ajustar aos dados de treinamento comumente resulta em um algoritmo de overfit que apresenta um desempenho ruim nos dados de teste reais. Por esse motivo, dividimos o conjunto de dados em vários subconjuntos discretos nos quais treinamos diferentes parâmetros.

#### O conjunto de treinamento

O conjunto de treinamento é usado para calcular o modelo real que seu algoritmo usará quando exposto a novos dados. Este conjunto de dados é normalmente 60% -80% de todos os seus dados disponíveis (dependendo se você usa ou não um conjunto de validação cruzada).

#### O conjunto de validação cruzada

Os conjuntos de validação cruzada são para seleção de modelo (tipicamente ~ 20% de seus dados). Use este conjunto de dados para testar diferentes parâmetros para o algoritmo conforme treinado no conjunto de treinamento. Por exemplo, você pode avaliar parâmetros diferentes do modelo (grau polinomial ou lambda, o parâmetro de regularização) no conjunto de validação cruzada para ver qual pode ser mais preciso.

#### O conjunto de teste

O conjunto de testes é o conjunto de dados final que você toca (geralmente ~ 20% dos dados). É a fonte da verdade. Sua precisão na previsão do conjunto de testes é a precisão do seu algoritmo ML.

#### Mais Informações:

*   [AWS ML Doc](http://docs.aws.amazon.com/machine-learning/latest/dg/splitting-the-data-into-training-and-evaluation-data.html)
*   [Um bom post de stackoverflow](https://stackoverflow.com/questions/13610074/is-there-a-rule-of-thumb-for-how-to-divide-a-dataset-into-training-and-validatio)
*   [Artigo acadêmico](https://www.mff.cuni.cz/veda/konference/wds/proc/pdf10/WDS10_105_i1_Reitermanova.pdf)
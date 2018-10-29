---
title: pandas
localeTitle: pandas
---
![Everybody loves pandas!](https://pandas.pydata.org/_static/pandas_logo.png "pandas")

## pandas

[pandas](http://pandas.pydata.org/) é uma biblioteca Python para análise de dados usando quadros de dados. Quadros de dados são tabelas de dados, que podem ser comparadas conceitualmente a uma planilha. Cientistas de dados familiarizados com R se sentirão em casa aqui. pandas é frequentemente usado junto com numpy, pyplot e scikit-learn.

### Importando pandas

É uma convenção amplamente usada para importar a biblioteca pandas usando o alias `pd` :

```python
import pandas as pd 
```

## Quadros de dados

Um quadro de dados consiste em um número de linhas e colunas. Cada coluna representa um recurso do conjunto de dados e, portanto, tem um nome e um tipo de dados. Cada linha representa um ponto de dados por meio de valores de recursos associados. A biblioteca pandas permite manipular os dados em um quadro de dados de várias maneiras. pandas tem muitas possibilidades, então o seguinte é apenas arranhar a superfície para dar uma idéia da biblioteca.

## Series

Series é o tipo de dados básico em pandas.Uma série é muito semelhante a um array (matriz NumPy) (na verdade, é construído em cima do objeto de matriz NumPy) .A Series pode ter rótulos de eixo, como ele pode ser indexado por um rótulo sem indexação numérica para a localização dos dados. Ele pode conter qualquer Objeto do Python como Lista, Dicionário etc.

## Carregando dados de um arquivo csv

Um arquivo `.csv` é um arquivo de _valores separados por vírgula_ . Uma maneira muito comum de armazenar dados. Para carregar esses dados em um quadro de dados de pandas, use o método `read_csv` :

```python
df = pd.read_csv(file_path) 
```

Aqui, `file_path` pode ser um caminho local para um arquivo csv em seu computador ou uma URL apontando para um. Os nomes das colunas podem ser incluídos no arquivo csv ou podem ser passados ​​como um argumento. Para mais sobre isso e muito mais, dê uma olhada na [documentação](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv) .

## Obtendo uma visão geral de um quadro de dados

Para mostrar as primeiras linhas de um quadro de dados, o método `head` é útil (mais uma vez isso deve soar familiar aos programadores R):

```python
df.head() 
```

Isso mostrará as primeiras 5 linhas do quadro de dados.

Para mostrar mais do que as primeiras 5 linhas, basta colocar o número de linhas que você deseja imprimir dentro do método `head` .

```python
df.head(10) 
```

Isso mostrará as primeiras 10 linhas do quadro de dados.

Para mostrar as últimas linhas de um quadro de dados, o método `tail` é útil (mais uma vez isso deve soar familiar aos programadores R):

```python
df.tail() 
```

Isso mostrará as últimas 5 linhas do quadro de dados.

## Subconjuntos: Obtendo uma coluna por nome

Um quadro de dados pode ser subconjunto de várias maneiras. Um dos mais simples é obter uma única coluna. Por exemplo, se o frame de dados `df` contiver uma coluna chamada `age` , podemos extraí-lo da seguinte maneira:

```python
ages=df["age"] 
```

#### Mais Informações:

1.  [pandas](http://pandas.pydata.org/)
2.  [read\_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3.  [cabeça](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)
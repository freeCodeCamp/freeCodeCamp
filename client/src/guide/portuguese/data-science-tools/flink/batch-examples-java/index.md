---
title: Flink Batch Example JAVA
localeTitle: Exemplo de Lote Flink JAVA
---
## Exemplo de Lote Flink JAVA

O Apache Flink é uma estrutura de processamento de fluxo de código aberto com recursos poderosos de processamento em fluxo e em lote.

### Pré-requisitos

*   Ambiente semelhante ao Unix (Linux, Mac OS X, Cygwin)
*   git
*   Maven (recomendamos a versão 3.0.4)
*   Java 7 ou 8
*   IDE do IntelliJ IDEA ou Eclipse
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

### Conjuntos de dados

Para os dados de processamento em lote, usaremos os conjuntos de dados aqui: [conjuntos de dados](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) Neste exemplo, usaremos o movies.csv e o ratings.csv, criaremos um novo projeto java e os colocaremos em uma pasta na base do aplicativo.

### Exemplo

Vamos fazer uma execução em que recuperamos a classificação média por gênero de filme de todo o conjunto de dados que temos.

**Ambiente e conjuntos de dados**

Primeiro crie um novo arquivo Java, vou nomeá-lo AverageRating.java

A primeira coisa que faremos é criar o ambiente de execução e carregar os arquivos csv em um conjunto de dados. Como isso:
```
ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment(); 
 DataSet<Tuple3<Long, String, String>> movies = env.readCsvFile("ml-latest-small/movies.csv") 
  .ignoreFirstLine() 
  .parseQuotedStrings('"') 
  .ignoreInvalidLines() 
  .types(Long.class, String.class, String.class); 
 
 DataSet<Tuple2<Long, Double>> ratings = env.readCsvFile("ml-latest-small/ratings.csv") 
  .ignoreFirstLine() 
  .includeFields(false, true, true, false) 
  .types(Long.class, Double.class); 
```

Lá, estamos fazendo um conjunto de dados com um para os filmes, ignorando erros, citações e a linha de cabeçalho, e um conjunto de dados com para as classificações de filmes, também ignorando o cabeçalho, as linhas e aspas inválidas.

**Processamento Flink**

Aqui vamos processar o dataset com flink. O resultado será em uma lista de tuplas String, Double. onde o gênero estará na String e a classificação média será dupla.

Primeiro, ingressaremos no conjunto de dados de classificações com o conjunto de dados de filmes do moviesId presente em cada conjunto de dados. Com isso, criaremos um novo Tuple com o nome do filme, gênero e pontuação. Mais tarde, agrupamos essa tupla por gênero e adicionamos a pontuação de todos os gêneros iguais, finalmente dividimos a pontuação pelo total de resultados e temos o resultado desejado.
```
List<Tuple2<String, Double>> distribution = movies.join(ratings) 
  .where(0) 
  .equalTo(0) 
  .with(new JoinFunction<Tuple3<Long, String, String>,Tuple2<Long, Double>, Tuple3<StringValue, StringValue, DoubleValue>>() { 
    private StringValue name = new StringValue(); 
    private StringValue genre = new StringValue(); 
    private DoubleValue score = new DoubleValue(); 
    private Tuple3<StringValue, StringValue, DoubleValue> result = new Tuple3<>(name,genre,score); 
 
    @Override 
    public Tuple3<StringValue, StringValue, DoubleValue> join(Tuple3<Long, String, String> movie,Tuple2<Long, Double> rating) throws Exception { 
      name.setValue(movie.f1); 
      genre.setValue(movie.f2.split("\\|")[0]); 
      score.setValue(rating.f1); 
      return result; 
    } 
 }) 
  .groupBy(1) 
  .reduceGroup(new GroupReduceFunction<Tuple3<StringValue,StringValue,DoubleValue>, Tuple2<String, Double>>() { 
    @Override 
    public void reduce(Iterable<Tuple3<StringValue,StringValue,DoubleValue>> iterable, Collector<Tuple2<String, Double>> collector) throws Exception { 
      StringValue genre = null; 
      int count = 0; 
      double totalScore = 0; 
      for(Tuple3<StringValue,StringValue,DoubleValue> movie: iterable){ 
        genre = movie.f1; 
        totalScore += movie.f2.getValue(); 
        count++; 
      } 
 
      collector.collect(new Tuple2<>(genre.getValue(), totalScore/count)); 
    } 
 }) 
  .collect(); 
```

Com isso, você terá um aplicativo de processamento de processamento em lote. Apreciar!.
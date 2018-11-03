---
title: Flink Batch Example JAVA
localeTitle: Flink批处理示例JAVA
---
## Flink批处理示例JAVA

Apache Flink是一个开源流处理框架，具有强大的流和批处理功能。

### 先决条件

*   类Unix环境（Linux，Mac OS X，Cygwin）
*   混帐
*   Maven（我们推荐3.0.4版本）
*   Java 7或8
*   IntelliJ IDEA或Eclipse IDE
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

### 数据集

对于批处理数据，我们将使用此处的数据集： [数据集](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) 在这个例子中，我们将使用movies.csv和ratings.csv，创建一个新的java项目并将它们放在应用程序库的一个文件夹中。

### 例

我们将按照我们所拥有的整个数据集的电影类型检索平均评级来执行。

**环境和数据集**

首先创建一个新的Java文件，我将其命名为AverageRating.java

我们要做的第一件事是创建执行环境并在数据集中加载csv文件。像这样：
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

在那里，我们正在制作一个带有数据集的数据集对于电影，忽略错误，引号和标题行，以及数据集对于电影评级，也忽略标题，无效的行和引号。

**Flink Processing**

在这里，我们将使用flink处理数据集。结果将在String of String，Double元组中。类型将在字符串中，平均评级为双。

首先，我们将通过每个数据集中存在的moviesId将评级数据集与电影数据集连接起来。 有了这个，我们将创建一个新的元组，其中包含电影名称，流派和分数。 之后，我们按类型对这个元组进行分组并添加所有相同类型的分数，最后我们将分数除以总结果，我们得到了我们想要的结果。
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

有了这个，你将有一个工作批处理flink应用程序。请享用！。
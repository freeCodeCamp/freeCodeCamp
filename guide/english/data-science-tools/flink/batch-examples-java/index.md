---
title: Flink Batch Example JAVA
---
## Flink Batch Example JAVA

Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.

### Prerequisites

* Unix-like environment (Linux, Mac OS X, Cygwin)
* git
* Maven (we recommend version 3.0.4)
* Java 7 or 8
* IntelliJ IDEA or Eclipse IDE

```
git clone https://github.com/apache/flink.git
cd flink
mvn clean package -DskipTests # this will take up to 10 minutes
```

### Datasets

For the batch processing data we'll be using the datasets in here: [datasets](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip)
In this example we'll be using the movies.csv and the ratings.csv, create a new java project and put them in a folder in the application base.

### Example

We're going to make an execution where we retrieve the average rating by movie genre of the entire dataset we have. 

**Environment and datasets**

First create a new Java file, I'm going to name it AverageRating.java

The first thing we'll do is to create the execution environment and load the csv files in a dataset. Like this: 

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

There, we are making a dataset with a <Long, String, String> for the movies, ignoring errors, quotes and the header line, and a dataset with <Long, Double> for the movie ratings, also ignoring the header, invalid lines and quotes.

**Flink Processing**

Here we will process the dataset with flink. The result will be in a List of String, Double tuples. where the genre will be in the String and the average rating will be in the double.

First we'll join the ratings dataset with the movies dataset by the moviesId present in each dataset. 
With this we'll create a new Tuple  with the movie name, genre and score. 
Later, we group this tuple by genre and add the score of all equal genres, finally we divide the score by the total results and we have our desired result. 

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

With this you'll have a working batch processing flink application. Enjoy!.

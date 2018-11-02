---
title: Flink Batch Example JAVA
localeTitle: Пример последовательности Flink JAVA
---
## Пример последовательности Flink JAVA

Apache Flink - это платформа обработки потоков с открытым исходным кодом с мощными возможностями потоковой обработки и пакетной обработки.

### Предпосылки

*   Unix-подобная среда (Linux, Mac OS X, Cygwin)
*   мерзавец
*   Maven (рекомендуется версия 3.0.4)
*   Java 7 или 8
*   IntelliJ IDEA или Eclipse IDE
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

### Datasets

Для данных пакетной обработки мы будем использовать наборы данных здесь: [наборы данных](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) В этом примере мы будем использовать movies.csv и ratings.csv, создать новый проект java и поместить их в папку в базе приложения.

### пример

Мы собираемся выполнить казнь, где мы получаем средний рейтинг по жанрам фильмов всего набора данных, который у нас есть.

**Окружающая среда и наборы данных**

Сначала создайте новый файл Java, я назову его AverageRating.java

Первое, что мы сделаем, это создать среду выполнения и загрузить файлы csv в наборе данных. Как это:
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

Там мы делаем набор данных с для фильмов, игнорирование ошибок, кавычек и строки заголовка, а также набор данных с для рейтингов фильмов, также игнорируя заголовок, недопустимые строки и цитаты.

**Флинковая обработка**

Здесь мы будем обрабатывать набор данных с помощью flink. Результат будет в List of String, Double tuples. где жанр будет в String, а средний рейтинг будет в двойном.

Сначала мы присоединяемся к набору данных рейтингов с набором данных для фильмов, представленным moviesId в каждом наборе данных. С этим мы создадим новый Tuple с названием фильма, жанром и партитурой. Позже мы группируем этот кортеж по жанру и добавляем оценку всех равных жанров, и, наконец, мы делим счет на общие результаты, и у нас есть желаемый результат.
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

При этом у вас будет работающее приложение для обработки пакетной обработки. Наслаждаться!.
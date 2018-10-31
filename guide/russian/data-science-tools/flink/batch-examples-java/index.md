---
title: Flink Batch Example JAVA
localeTitle: Пример пакетной обработки в Flink JAVA
---
## Пример пакетной обработки в Flink JAVA

Apache Flink - это платформа обработки потоков с открытым исходным кодом с мощными возможностями потоковой и пакетной обработки.

### Вам потребуется

*   Unix-подобная среда (Linux, Mac OS X, Cygwin)
*   git
*   Maven (мы рекомендуем версию 3.0.4)
*   Java 7 или 8
*   IntelliJ IDEA или Eclipse IDE
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # это займет до 10 минут 
```

### Наборы данных

В качестве данных для пакетной обработки мы воспользуемся следующими [наборами данных](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) В данном примере мы создадим новый java проект и поместим файлы movies.csv и ratings.csv в поддиректорию в базовой директории приложения.

### Пример

Мы создадим среду выполнения для получения среднего рейтинга по жанру фильмов из имеющегося у нас набора данных.

**Окружение и наборы данных**

Сперва создадим новый Java файл. Я назову его AverageRating.java

Первое, что мы сделаем, это создадим среду выполнения и загрузим файлы csv в dataset. Например, так:
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

Мы создали dataset с полями типа <Long, String, String> для фильмов, игнорируя ошибки, кавычки и заголовок файла; второй dataset с полями типа <Long, Double> предназначен для рейтингов фильмов и также создан с игнорированием заголовка файла, недопустимых строк и кавычек.

**Обработка в Flink**

Теперь обработаем dataset при помощи flink. Результатом будет список кортежей типа <String, Double>, где жанр будет сохранен в String, а средний рейтинг - в Double.

Сперва объединим rating dataset с movies dataset по moviesId, имеющемуся в обоих наборах данных. В результате этой операции мы получим новый кортеж c названиями фильмов, жанрами и количеством очков. Затем сгруппируем этот кортеж по жанру и добавим количество очков по каждому жанру. Наконец, поделим количество очков на общее число фильмов в жанре и получим желаемый результат.
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

Теперь у вас есть готовое flink приложение для пакетной обработки. Наслаждайтесь!

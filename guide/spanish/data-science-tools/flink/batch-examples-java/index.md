---
title: Flink Batch Example JAVA
localeTitle: Flink Batch Example JAVA
---
## Flink Batch Example JAVA

Apache Flink es un marco de procesamiento de flujo de código abierto con poderosas capacidades de procesamiento de flujo y por lotes.

### Prerrequisitos

*   Entorno similar a Unix (Linux, Mac OS X, Cygwin)
*   git
*   Maven (recomendamos la versión 3.0.4)
*   Java 7 u 8
*   IntelliJ IDEA o Eclipse IDE
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

### Conjuntos de datos

Para los datos de procesamiento por lotes usaremos los conjuntos de datos aquí: [conjuntos de datos](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) En este ejemplo, usaremos movies.csv y ratings.csv, crearemos un nuevo proyecto java y los pondremos en una carpeta en la base de la aplicación.

### Ejemplo

Vamos a realizar una ejecución en la que recuperamos la calificación promedio por género de película de todo el conjunto de datos que tenemos.

**Medio ambiente y conjuntos de datos**

Primero crea un nuevo archivo Java, lo voy a nombrar AverageRating.java

Lo primero que haremos es crear el entorno de ejecución y cargar los archivos csv en un conjunto de datos. Me gusta esto:
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

Allí, estamos haciendo un conjunto de datos con un para las películas, ignorando errores, comillas y la línea del encabezado, y un conjunto de datos con para las clasificaciones de películas, también ignorando el encabezado, líneas inválidas y comillas.

**Procesamiento de flink**

Aquí vamos a procesar el conjunto de datos con flink. El resultado estará en una lista de cadenas, tuplas dobles. donde el género estará en la Cadena y la calificación promedio estará en el doble.

Primero, uniremos el conjunto de datos de calificaciones con el conjunto de datos de películas por las películas que está presente en cada conjunto de datos. Con esto crearemos un nuevo Tuple con el nombre de la película, el género y la partitura. Más tarde, agrupamos esta tupla por género y sumamos la puntuación de todos los géneros iguales, finalmente dividimos la puntuación por el resultado total y tenemos el resultado deseado.
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

Con esto tendrás una aplicación flink de procesamiento por lotes de trabajo. ¡Disfrutar!.
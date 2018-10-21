---
title: Flink Batch Example JAVA
localeTitle: Flink Batch مثال JAVA
---
## Flink Batch مثال JAVA

Apache Flink هو إطار مفتوح المصدر لتجهيز التدفق مع إمكانات قوية لمعالجة البث والدفعة.

### المتطلبات الأساسية

*   بيئة تشبه يونكس (Linux ، Mac OS X ، Cygwin)
*   بوابة
*   مي Mن (نوصي بالإصدار 3.0.4)
*   جافا 7 أو 8
*   IntelliJ IDEA أو Eclipse IDE

 `git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
` 

### قواعد البيانات

بالنسبة لبيانات معالجة الدُفعات ، سنستخدم مجموعات البيانات هنا: [مجموعات البيانات](http://files.grouplens.org/datasets/movielens/ml-latest-small.zip) في هذا المثال ، سنستخدم movies.csv و ratings.csv ، وننشئ مشروع جافا جديدًا ونضعه في مجلد في قاعدة التطبيق.

### مثال

سنقوم بتنفيذ عملية التنفيذ حيث نقوم باسترداد متوسط ​​تصنيف نوع الفيلم في مجموعة البيانات الكاملة التي لدينا.

**البيئة ومجموعات البيانات**

أولاً قم بإنشاء ملف Java جديد ، سأقوم بتسميته AverageRating.java

أول شيء سنقوم به هو إنشاء بيئة التنفيذ وتحميل ملفات csv في مجموعة بيانات. مثله:

 `ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment(); 
 DataSet<Tuple3<Long, String, String>> movies = env.readCsvFile("ml-latest-small/movies.csv") 
  .ignoreFirstLine() 
  .parseQuotedStrings('"') 
  .ignoreInvalidLines() 
  .types(Long.class, String.class, String.class); 
 
 DataSet<Tuple2<Long, Double>> ratings = env.readCsvFile("ml-latest-small/ratings.csv") 
  .ignoreFirstLine() 
  .includeFields(false, true, true, false) 
  .types(Long.class, Double.class); 
` 

هناك ، نحن نجعل مجموعة البيانات مع للأفلام ، وتجاهل الأخطاء ، والاقتباسات ، وخط الرأس ، ومجموعة البيانات مع بالنسبة إلى تقييمات الأفلام ، مع تجاهل أيضًا الرأس ، والخطوط والعروض غير الصالحة.

**تجهيز فلينك**

هنا سوف نقوم بمعالجة مجموعة البيانات بحرف. ستكون النتيجة في قائمة سلسلة ، مجموعات مزدوجة. حيث سيكون هذا النوع في السلسلة وستكون الدرجة المتوسطة في الحالة المزدوجة.

أولاً سننضم إلى مجموعة بيانات التصنيفات مع مجموعة بيانات الأفلام حسب الأفلام الموجودة في كل مجموعة بيانات. مع هذا سنقوم بإنشاء Tuple جديد مع اسم الفيلم والنوع والنتيجة. في وقت لاحق ، نقوم بتجميع هذه المجموعة حسب النوع وإضافة مجموع كل الأنواع المتساوية ، وأخيرا نقسم النتيجة على مجموع النتائج ولدينا النتيجة المرجوة.

 `List<Tuple2<String, Double>> distribution = movies.join(ratings) 
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
` 

مع هذا سيكون لديك تطبيق حرفة معالجة دفعة واحدة. استمتع!.
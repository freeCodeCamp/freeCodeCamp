---
title: Flink
localeTitle: Flink
---
## Flink

Apache Flink هو إطار مفتوح المصدر لتجهيز التدفق مع إمكانات قوية لمعالجة البث والدفعة.

إن جوهر Apache Flink هو محرك تدفق تدفق البيانات موزع في جافا و سكالا. Flink ينفذ برامج تدفق البيانات التعسفي بطريقة موازية البيانات وخطوط الأنابيب. يتيح نظام تشغيل Flink المضمن من خلال Flink تنفيذ برامج معالجة الدفعات الجماعية / الدُفعات. علاوة على ذلك ، يدعم وقت تشغيل Flink تنفيذ الخوارزميات المتكررة بشكل أصلي. يوفر Flink محرك تدفق عالي الإنتاجية منخفض الكمون بالإضافة إلى دعم لمعالجة وقت الحدث وإدارة الولاية. تكون تطبيقات Flink متسامحة مع الخطأ في حالة فشل الماكينة وتدعم دلالات دقيقة تمامًا. يمكن كتابة البرامج في Java و Scala و Python و SQL ويتم تجميعها وترتيبها تلقائيًا في برامج تدفق البيانات التي يتم تنفيذها في بيئة مجموعة أو بيئة سحابة.

لا توفر Flink نظام تخزين البيانات الخاص بها وتوفر مصدر بيانات وموصلات بالوعة لأنظمة Kinesis Amazon و Apache Kafka و HDFS و Apache Cassandra و ElasticSearch.

![Flink سير العمل](https://flink.apache.org/img/flink-home-graphic-update.svg)

**ما هو الجديد في Apache Flink؟**

*   Flink ينفذ معالجة البث الفعلي ولا يقلدها بمعالجة الدُفعة الصغيرة. في Spark streaming هي حالة خاصة من الخلط ، بينما في Flink batching هي حالة خاصة من التدفق (تدفق حجم محدود)
*   Flink لديه دعم أفضل للمعالجة الدورية والمتكررة
*   تتميز Flink بوقت استجابة أقل ومعدل نقل أعلى
*   Flink لديه مشغلي نوافذ أكثر قوة
*   تقوم فلينك بتطبيق اللقطات الموزعة خفيفة الوزن ذات الضمادات المنخفضة والضمانات المعالجة مرة واحدة فقط في معالجة البث ، بدون استخدام الخلط الدقيق كما يفعل سبارك
*   Flink يدعم الحالة القابلة للتغيير في معالجة الدفق

### الميزات

*   وقت تشغيل متدفق يدعم كل من برامج معالجة الدفعات وتدفق البيانات
*   واجهات برمجة تطبيقات أنيقة وجيدة في جافا وسكالا
*   وقت تشغيل يدعم معدل نقل عالٍ جدًا ووقت استجابة منخفض في نفس الوقت
*   دعم _وقت_ المعالجة ومعالجة _الطلب_ في واجهة برمجة التطبيقات DataStream ، استنادًا إلى _نموذج تدفق البيانات_
*   النوافذ المرنة (الوقت ، العدد ، الجلسات ، المشغلات المخصصة) عبر دلالات الزمن المختلفة (وقت الحدث ، وقت المعالجة)
*   التسامح مع ضمانات معالجة _مرة واحدة بالضبط_
*   الضغط الطبيعي في برامج التدفق
*   مكتبات معالجة الرسوم البيانية (الدفعة) ، تعلم الآلة (الدفعة) ، ومعالجة الأحداث المعقدة (الدفق)
*   دعم مضمّن لبرامج تكرارية (BSP) في DataSet (دفعي) API
*   إدارة الذاكرة المخصصة للتبديل الفعال والقوي بين خوارزميات معالجة البيانات في الذاكرة وخارجها
*   طبقات التوافق لـ Apache Hadoop MapReduce و Apache Storm
*   التكامل مع YARN و HDFS و HBase والمكونات الأخرى للنظام البيئي Apache Hadoop

### استخدام فلينك

المتطلبات الأساسية لبناء فلينك:

*   بيئة شبيهة بـ Unix (نستخدم Linux و Mac OS X و Cygwin)
*   بوابة
*   مي Mن (نوصي بالإصدار 3.0.4)
*   جافا 7 أو 8

 `git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
` 

## تطوير فلينك

تستخدم مفصيلات Flink IntelliJ IDEA لتطوير قاعدة البيانات Flink. نوصي IntelliJ IDEA لتطوير المشاريع التي تنطوي على رمز سكالا.

الحد الأدنى لمتطلبات IDE هي:

*   دعم Java و Scala (أيضًا مشاريع مختلطة)
*   دعم Maven مع Java و Scala

#### معلومات اكثر:

*   Flink الموقع: [أباتشي فلينك](https://flink.apache.org/)
*   وثائق [flink](https://ci.apache.org/projects/flink/flink-docs-release-1.3/) : [flinkdocs](https://ci.apache.org/projects/flink/flink-docs-release-1.3/)
*   سريع تعليمي [سريع](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/) : [بداية سريعة](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/)
*   كيف توجه: [كيف](https://data-artisans.com/blog/kafka-flink-a-practical-how-to)
*   Flink vs Spark: [المقارنة](http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/)
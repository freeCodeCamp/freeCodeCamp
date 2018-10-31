---
title: Flink
localeTitle: Flink
---
## Flink

Apache Flink es un marco de procesamiento de flujo de código abierto con poderosas capacidades de procesamiento de flujo y por lotes.

El núcleo de Apache Flink es un motor de flujo de datos de transmisión distribuido escrito en Java y Scala. Flink ejecuta programas de flujo de datos arbitrarios de manera paralela y canalizada. El sistema de tiempo de ejecución canalizado de Flink permite la ejecución de programas de procesamiento en masa / por lotes y de flujo. Además, el tiempo de ejecución de Flink admite la ejecución de algoritmos iterativos de forma nativa. Flink proporciona un motor de transmisión de alto rendimiento y baja latencia, así como soporte para el procesamiento en tiempo de evento y la administración del estado. Las aplicaciones de Flink son tolerantes a fallos en caso de falla de la máquina y admiten una semántica exactamente una vez. Los programas se pueden escribir en Java, Scala, Python y SQL, y se compilan y optimizan automáticamente en programas de flujo de datos que se ejecutan en un entorno de clúster o nube.

Flink no proporciona su propio sistema de almacenamiento de datos y proporciona conectores de fuente y receptor de datos a sistemas como Amazon Kinesis, Apache Kafka, HDFS, Apache Cassandra y ElasticSearch.

![Flink flujo de trabajo](https://flink.apache.org/img/flink-home-graphic-update.svg)

**¿Qué hay de nuevo en Apache Flink?**

*   Flink implementa el procesamiento de transmisión en tiempo real y no lo imita con el procesamiento de micro lotes. En Spark, el streaming es un caso especial de procesamiento por lotes, mientras que en Flink el procesamiento por lotes es un caso especial de streaming (flujo de un tamaño finito)
*   Flink tiene mejor soporte para el procesamiento cíclico e iterativo.
*   Flink tiene menor latencia y mayor rendimiento
*   Flink tiene operadores de ventanas más potentes.
*   Flink implementa instantáneas livianas distribuidas que tienen pocos gastos generales y garantías de procesamiento únicas en el procesamiento continuo, sin usar micro lotes como lo hace Spark
*   Flink soporta el estado mutable en el procesamiento de flujo

### Caracteristicas

*   Un tiempo de ejecución de primera transmisión que admite tanto el procesamiento por lotes como los programas de transmisión de datos
*   APIs elegantes y fluidas en Java y Scala
*   Un tiempo de ejecución que admite un rendimiento muy alto y una baja latencia de eventos al mismo tiempo
*   Compatibilidad con el _tiempo de eventos_ y el procesamiento _fuera de orden_ en la API DataStream, basado en el _modelo de flujo de datos_
*   Ventana flexible (tiempo, recuento, sesiones, disparadores personalizados) a través de diferentes semánticas de tiempo (tiempo de evento, tiempo de procesamiento)
*   Tolerancia a fallos con garantías de procesamiento _exactamente una vez._
*   Contrapresión natural en programas de streaming
*   Bibliotecas para procesamiento de gráficos (por lotes), aprendizaje automático (por lotes) y procesamiento de eventos complejos (transmisión por secuencias)
*   Soporte incorporado para programas iterativos (BSP) en la API DataSet (lote)
*   Administración de memoria personalizada para un cambio eficiente y robusto entre los algoritmos de procesamiento de datos en memoria y fuera de núcleo
*   Capas de compatibilidad para Apache Hadoop MapReduce y Apache Storm
*   Integración con YARN, HDFS, HBase y otros componentes del ecosistema de Apache Hadoop

### Uso de flink

Requisitos previos para la construcción de Flink:

*   Ambiente similar a Unix (usamos Linux, Mac OS X, Cygwin)
*   git
*   Maven (recomendamos la versión 3.0.4)
*   Java 7 u 8
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

## Desarrollo de flink

Los usuarios de Flink utilizan IntelliJ IDEA para desarrollar el código base de Flink. Recomendamos IntelliJ IDEA para desarrollar proyectos que involucren el código Scala.

Los requisitos mínimos para un IDE son:

*   Soporte para Java y Scala (también proyectos mixtos)
*   Soporte para Maven con Java y Scala.

#### Más información:

*   Sitio web de Flink: [Apache Flink](https://flink.apache.org/)
*   Documentación de Flink: [flinkdocs](https://ci.apache.org/projects/flink/flink-docs-release-1.3/)
*   Tutorial de flink [rápido](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/) : [inicio rápido](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/)
*   Cómo guiar: [Howto](https://data-artisans.com/blog/kafka-flink-a-practical-how-to)
*   Flink vs Spark: [comparación](http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/)
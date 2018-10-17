---
title: Spark
localeTitle: Chispa
---
## Chispa

[Spark](http://spark.apache.org/) es un sistema de computación en clúster rápido y general para Big Data. Proporciona API de alto nivel en Scala, Java, Python y R, y un motor optimizado que admite gráficos de computación generales para el análisis de datos. También es compatible con un amplio conjunto de herramientas de alto nivel que incluyen Spark SQL para SQL y DataFrames, MLlib para aprendizaje automático, GraphX ​​para procesamiento de gráficos y Spark Streaming para procesamiento de flujos.

## Características principales

Spark 2.0 tiene muchas características nuevas:

*   Fuente de datos CSV nativa, basada en el módulo spark-csv de Databricks
*   Administración de memoria fuera del montón para el almacenamiento en caché y la ejecución en tiempo de ejecución
*   Soporte de cubo colmena estilo
*   Estadísticas de resumen aproximadas utilizando bocetos, que incluyen el cuantil aproximado, el filtro Bloom y el boceto de conteo-minuto.

## Cómo se usa para la ciencia de datos

Spark se ha convertido en una herramienta estándar en la caja de herramientas de muchos científicos de datos. Con su flexibilidad en las opciones de API, cualquier programador puede trabajar con Spark en su idioma preferido. Como señaló [Cloudera](https://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists) , Spark ha ganado popularidad por muchas razones:

*   Al estar basado en Scala, Spark se incrusta en cualquier sistema operativo basado en JVM, pero también se puede usar interactivamente en un REPL de una manera que sea familiar para los usuarios de R y Python.
*   Para los programadores de Java, Scala todavía presenta una curva de aprendizaje. Pero al menos, cualquier biblioteca de Java se puede utilizar desde Scala. La abstracción RDD de Spark (conjunto de datos distribuido resistente) se parece a la colección de PC de Crunch, que ha demostrado ser una abstracción útil en Hadoop que ya será familiar para los desarrolladores de Crunch. (Crunch puede incluso usarse sobre Spark).
*   Spark imita la API y el estilo funcional de las colecciones de Scala, lo que es una bendición para los desarrolladores de Java y Scala, pero también es algo familiar para los desarrolladores de Python. Scala también es una opción convincente para la computación estadística.
*   La chispa en sí, y Scala debajo de ella, no son específicos para el aprendizaje automático. Proporcionan API que admiten tareas relacionadas, como acceso a datos, ETL e integración. Al igual que con Python, todo el flujo de datos puede implementarse dentro de este paradigma, no solo la adaptación y el análisis del modelo.
*   El código que se implementa en el entorno REPL se puede utilizar principalmente tal como está en un contexto operativo.
*   Las operaciones de datos se distribuyen de forma transparente en todo el clúster, incluso mientras escribe.

#### Más información

*   [Spark Github página](https://github.com/apache/spark)
*   [Wikipedia](https://en.wikipedia.org/wiki/Apache_Spark)
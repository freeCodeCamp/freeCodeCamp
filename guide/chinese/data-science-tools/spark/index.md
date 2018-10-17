---
title: Spark
localeTitle: 火花
---
## 火花

[Spark](http://spark.apache.org/)是一种快速通用的大数据集群计算系统。它提供Scala，Java，Python和R中的高级API，以及支持数据分析的通用计算图的优化引擎。它还支持一组丰富的高级工具，包括用于SQL和DataFrame的Spark SQL，用于机器学习的MLlib，用于图形处理的GraphX和用于流处理的Spark Streaming。

## 核心功能

Spark 2.0有许多新功能：

*   原生CSV数据源，基于Databricks的spark-csv模块
*   用于缓存和运行时执行的堆外内存管理
*   Hive风格的支持
*   使用草图的近似摘要统计信息，包括近似分位数，布隆过滤器和计数最小草图。

## 它如何用于数据科学

Spark已经成为许多数据科学家工具箱中的标准工具。凭借其API选择的灵活性，任何程序员都可以使用他们首选语言的Spark。正如[Cloudera](https://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists)所指出的，Spark因其原因而受到欢迎：

*   基于Scala，Spark嵌入在任何基于JVM的操作系统中，但也可以以一种让R和Python用户熟悉的方式在REPL中交互使用。
*   对于Java程序员，Scala仍然呈现学习曲线。但至少，任何Java库都可以在Scala中使用。 Spark的RDD（弹性分布式数据集）抽象类似于Crunch的PCollection，它已被证明是Hadoop中一个有用的抽象，已经为Crunch开发人员所熟悉。 （Crunch甚至可以用在Spark之上。）
*   Spark模仿Scala的集合API和函数风格，这对Java和Scala开发人员来说是一个福音，但对来自Python的开发人员也有些熟悉。 Scala也是统计计算的一个引人注目的选择。
*   Spark本身以及它下面的Scala并不特定于机器学习。它们提供支持相关任务的API，如数据访问，ETL和集成。与Python一样，整个数据科学管道可以在这个范例内实现，而不仅仅是模型拟合和分析。
*   在REPL环境中实现的代码可以主要在操作上下文中使用。
*   即使您键入内容，数据操作也会透明地分布在群集中。

#### 更多信息

*   [Spark Github页面](https://github.com/apache/spark)
*   [维基百科](https://en.wikipedia.org/wiki/Apache_Spark)
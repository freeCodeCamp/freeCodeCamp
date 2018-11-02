---
title: Flink
localeTitle: 弗林克
---
## 弗林克

Apache Flink是一个开源流处理框架，具有强大的流和批处理功能。

Apache Flink的核心是用Java和Scala编写的分布式流数据流引擎。 Flink以数据并行和流水线方式执行任意数据流程序。 Flink的流水线运行时系统可以执行批量/批处理和流处理程序。此外，Flink的运行时本身支持迭代算法的执行。 Flink提供高吞吐量，低延迟的流媒体引擎，以及对事件处理和状态管理的支持。 Flink应用程序在发生机器故障时具有容错能力，并且支持一次性语义。 程序可以用Java，Scala，Python和SQL编写，并自动编译和优化为在集群或云环境中执行的数据流程序。

Flink不提供自己的数据存储系统，并为Amazon Kinesis，Apache Kafka，HDFS，Apache Cassandra和ElasticSearch等系统提供数据源和接收器连接器。

![Flink工作流程](https://flink.apache.org/img/flink-home-graphic-update.svg)

**Apache Flink有什么新功能？**

*   Flink实现了实际的流处理，而不是通过微批处理来模仿它。在Spark中，流式传输是一种特殊的批处理案例，而在Flink中，批处理是一种特殊的流式传输（有限大小的流）
*   Flink对循环和迭代处理有更好的支持
*   Flink具有更低的延迟和更高的吞吐量
*   Flink拥有更强大的Windows运营商
*   Flink实现了轻量级的分布式快照，它具有低开销和流处理中的一次性处理保证，而不像Spark那样使用微批处理
*   Flink支持流处理中的可变状态

### 特征

*   流媒体优先运行时，支持批处理和数据流程序
*   Java和Scala中优雅流畅的API
*   运行时支持非常高的吞吐量和低事件延迟的同时
*   基于_数据流模型_ ，支持DataStream API中的_事件时间_和_无序_处理
*   灵活的窗口（时间，计数，会话，自定义触发器）跨越不同的时间语义（事件时间，处理时间）
*   具有_精确一次_处理保证的容错能力
*   流媒体节目中的自然背压
*   用于图形处理（批处理），机器学习（批处理）和复杂事件处理（流式处理）的库
*   内置支持DataSet（批处理）API中的迭代程序（BSP）
*   自定义内存管理，可在内存和核外数据处理算法之间实现高效，可靠的切换
*   Apache Hadoop MapReduce和Apache Storm的兼容性层
*   与YARN，HDFS，HBase和Apache Hadoop生态系统的其他组件集成

### Flink用法

构建Flink的先决条件：

*   类Unix环境（我们使用Linux，Mac OS X，Cygwin）
*   混帐
*   Maven（我们推荐3.0.4版本）
*   Java 7或8
```
git clone https://github.com/apache/flink.git 
 cd flink 
 mvn clean package -DskipTests # this will take up to 10 minutes 
```

## 开发Flink

Flink提交者使用IntelliJ IDEA开发Flink代码库。 我们建议使用IntelliJ IDEA来开发涉及Scala代码的项目。

IDE的最低要求是：

*   支持Java和Scala（也是混合项目）
*   使用Java和Scala支持Maven

#### 更多信息：

*   Flink网站： [Apache Flink](https://flink.apache.org/)
*   Flink文档： [flinkdocs](https://ci.apache.org/projects/flink/flink-docs-release-1.3/)
*   快速flink教程： [快速](https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/)入门
*   如何指导： [howto](https://data-artisans.com/blog/kafka-flink-a-practical-how-to)
*   Flink vs Spark： [比较](http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/)
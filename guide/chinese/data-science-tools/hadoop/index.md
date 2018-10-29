---
title: Hadoop
localeTitle: Hadoop的
---
## ![Hadoop的](http://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Hadoop_logo_2.png)

### 你知道吗？

Hadoop以属于Doug Cutting的儿子的玩具大象命名。 Doug选择了这个开源项目的名称，因为它很容易在搜索结果中拼写，发音和查找。原始的黄色毛绒大象出现在Hadoop的标志中。

### 什么是Hadoop？

Hadoop是一个框架，允许使用简单的编程模型跨计算机集群分布式处理大型数据集。它可以从单个服务器扩展到数千台机器，每台机器都提供自己的本地计算和存储。 Hadoop本身不是依靠硬件来提供高可用性，而是设计用于检测和处理应用层的故障。如果群集中的一台计算机出现故障，Hadoop可以在不丢失数据的情况下补偿故障。这使得能够在计算机集群之上交付高可用性服务，每个计算机都可能容易出现故障。

2003年，谷歌在谷歌文件系统（GFS）上发布了他们的论文。它详细介绍了一个专有的分布式文件系统，旨在使用商用硬件提供对大量数据的高效访问。一年后，谷歌发布了另一篇题为“MapReduce：大型集群上的简化数据处理”的论文。当时，Doug在雅虎工作。这些论文是他的开源项目Apache Nutch的灵感来源。 2006年，现在被称为Hadoop的项目组件从Apache Nutch迁出并被释放。

### 为什么Hadoop有用？

据IBM称：“每天都有25亿千兆字节的高速数据以各种形式创建，例如社交媒体帖子，传感器和医疗设备中收集的信息，视频和交易记录。”

经常创建的数据的一些示例是：

*   电话使用的元数据
*   网站日志
*   信用卡购买交易

“大数据”是指使用传统软件应用程序处理的数据集太大或太复杂。导致数据复杂性的因素是数据集的大小，可用处理器的速度以及数据的格式。

在发布时，Hadoop能够比传统软件更大规模地处理数据。

### 核心Hadoop

数据存储在Hadoop分布式文件系统（HDFS）中。使用map reduce，Hadoop以并行块（同时处理多个部分）而不是在单个队列中处理数据。这减少了处理大型数据集所需的时间。

HDFS的工作原理是存储分成块的大型文件，并在许多服务器上复制它们。拥有多个文件副本可创建冗余，从而防止数据丢失。

### Hadoop生态系统

存在许多其他软件包来补充Hadoop。这些计划包括Hadoop生态系统。有些程序可以更轻松地将数据加载到Hadoop集群中，而其他程序则使Hadoop更易于使用。

Hadoop生态系统包括：

*   Apache Hive
*   阿帕奇猪
*   Apache HBase
*   Apache Phoenix
*   Apache Spark
*   Apache ZooKeeper
*   Cloudera Impala
*   Apache Flume
*   Apache Sqoop
*   Apache Oozie

#### 更多信息：

1.  [hadoop的Udacity课程](https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617)
2.  [Apache Hadoop](http://hadoop.apache.org/)
3.  [edureka的大数据Hadoop教程视频！](https://www.youtube.com/playlist?list=PL9ooVrP1hQOFrYxqxb0NJCdCABPZNo0pD)
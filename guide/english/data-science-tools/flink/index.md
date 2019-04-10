---
title: Flink
---
## Flink

Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.

The core of Apache Flink is a distributed streaming dataflow engine written in Java and Scala. Flink executes arbitrary dataflow programs in a data-parallel and pipelined manner. 
Flink's pipelined runtime system enables the execution of bulk/batch and stream processing programs. Furthermore, Flink's runtime supports the execution of iterative algorithms natively.
Flink provides a high-throughput, low-latency streaming engine as well as support for event-time processing and state management. Flink applications are fault-tolerant in the event of machine failure and support exactly-once semantics. 
Programs can be written in Java, Scala, Python, and SQL and are automatically compiled and optimized into dataflow programs that are executed in a cluster or cloud environment.

Flink does not provide its own data storage system and provides data source and sink connectors to systems such as Amazon Kinesis, Apache Kafka, HDFS, Apache Cassandra, and ElasticSearch.

![Flink workflow](https://flink.apache.org/img/flink-home-graphic-update.svg)

**What Is New in Apache Flink?**
* Flink implements actual streaming processing and not imitates it with micro-batch processing. In Spark streaming is a special case of batching, while in Flink batching is a special case of streaming (stream of a finite size)
* Flink has better support for cyclical and iterative processing 
* Flink has lower latency and higher throughput
* Flink has more powerful windows operators
* Flink implements lightweight distributed snapshots that has low overhead and only-once processing guarantees in stream processing, without using micro batching as Spark does
* Flink supports mutable state in stream processing

### Features

* A streaming-first runtime that supports both batch processing and data streaming programs
* Elegant and fluent APIs in Java and Scala
* A runtime that supports very high throughput and low event latency at the same time
* Support for *event time* and *out-of-order* processing in the DataStream API, based on the *Dataflow Model*
* Flexible windowing (time, count, sessions, custom triggers) accross different time semantics (event time, processing time)
* Fault-tolerance with *exactly-once* processing guarantees
* Natural back-pressure in streaming programs
* Libraries for Graph processing (batch), Machine Learning (batch), and Complex Event Processing (streaming)
* Built-in support for iterative programs (BSP) in the DataSet (batch) API
* Custom memory management for efficient and robust switching between in-memory and out-of-core data processing algorithms
* Compatibility layers for Apache Hadoop MapReduce and Apache Storm
* Integration with YARN, HDFS, HBase, and other components of the Apache Hadoop ecosystem


### Flink Usage

Prerequisites for building Flink:

* Unix-like environment (We use Linux, Mac OS X, Cygwin)
* git
* Maven (we recommend version 3.0.4)
* Java 7 or 8

```
git clone https://github.com/apache/flink.git
cd flink
mvn clean package -DskipTests # this will take up to 10 minutes
```

## Developing Flink

The Flink committers use IntelliJ IDEA to develop the Flink codebase.
We recommend IntelliJ IDEA for developing projects that involve Scala code.

Minimal requirements for an IDE are:
* Support for Java and Scala (also mixed projects)
* Support for Maven with Java and Scala


#### More Information:
* Flink website: <a href='https://flink.apache.org/' target='_blank' rel='nofollow'>Apache Flink</a>
* Flink documentation: <a href='https://ci.apache.org/projects/flink/flink-docs-release-1.3/' target='_blank' rel='nofollow'>flinkdocs</a>
* Quick flink tutorial: <a href='https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/' target='_blank' rel='nofollow'>quick start</a>
* How to guide: <a href='https://data-artisans.com/blog/kafka-flink-a-practical-how-to' target='_blank' rel='nofollow'>howto</a>
* Flink vs Spark: <a href='http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/' target='_blank' rel='nofollow'>comparison</a>

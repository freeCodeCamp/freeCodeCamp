---
title: Spark
---

## Spark

<a href='http://spark.apache.org/' target='_blank' rel='nofollow'>Spark</a> is a fast and general cluster computing system for Big Data. It provides high-level APIs in Scala, Java, Python, and R, and an optimized engine that supports general computation graphs for data analysis. It also supports a rich set of higher-level tools including Spark SQL for SQL and DataFrames, MLlib for machine learning, GraphX for graph processing, and Spark Streaming for stream processing.

## Core Features

Spark 2.0 has many new features:
 * Native CSV data source, based on Databricks’ spark-csv module
 * Off-heap memory management for both caching and runtime execution
 * Hive style bucketing support
 * Approximate summary statistics using sketches, including approximate quantile, Bloom filter, and count-min sketch.

## How it is used for Data Science

Spark has become a standard tool in many data scientist's tool box. With its flexibility in API choices, any programmer can work with Spark in their preferred language. As noted by <a href='https://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists' target='_blank' rel='nofollow'>Cloudera</a>, Spark has gained popularity for many reasons:
 * Being Scala-based, Spark embeds in any JVM-based operational system, but can also be used interactively in a REPL in a way that will feel familiar to R and Python users.
 * For Java programmers, Scala still presents a learning curve. But at least, any Java library can be used from within Scala.
Spark’s RDD (Resilient Distributed Dataset) abstraction resembles Crunch’s PCollection, which has proved a useful abstraction in Hadoop that will already be familiar to Crunch developers. (Crunch can even be used on top of Spark.)
 * Spark imitates Scala’s collections API and functional style, which is a boon to Java and Scala developers, but also somewhat familiar to developers coming from Python. Scala is also a compelling choice for statistical computing.
 * Spark itself, and Scala underneath it, are not specific to machine learning. They provide APIs supporting related tasks, like data access, ETL, and integration. As with Python, the entire data science pipeline can be implemented within this paradigm, not just the model fitting and analysis.
* Code that is implemented in the REPL environment can be used mostly as-is in an operational context.
* Data operations are transparently distributed across the cluster, even as you type.

#### More information
* <a href='https://github.com/apache/spark' target='_blank' rel='nofollow'>Spark Github page</a>
* <a href='https://en.wikipedia.org/wiki/Apache_Spark' target='_blank' rel='nofollow'>Wikipedia</a>

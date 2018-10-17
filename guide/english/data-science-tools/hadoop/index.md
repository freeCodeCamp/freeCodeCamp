---
title: Hadoop
---
## ![Hadoop](http://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Hadoop_logo_2.png)

### Did you know? 

Hadoop is named after a toy elephant belonging to Doug Cutting's son. Doug chose the name for his open-source project as it was easy to spell, pronounce, and find in search results. The original yellow stuffed elephant that inspired the name appears in Hadoop's logo.

### What is Hadoop?

Hadoop is a framework that allows the distributed processing of large data sets across a cluster of computers, using simple programming models. It enables scaling up from single servers to thousands of machines, each offering its own local computation and storage. Rather than rely on hardware to deliver high-availability, Hadoop itself is designed to detect and handle failures at the application layer. If one machine in a cluster fails, Hadoop can compensate for the failure without losing data. This enables the delivery of a highly-available service on top of a cluster of computers, each of which may be prone to failures.

In 2003 Google released their paper on the Google File System (GFS). It detailed a proprietary distributed file system intended to provide efficient access to large amounts of data using commodity hardware. A year later, Google released another paper entitled "MapReduce: Simplified Data Processing on Large Clusters." At the time, Doug was working at Yahoo. These papers were the inspiration for his open-source project Apache Nutch. In 2006, the project components now known as Hadoop moved out of Apache Nutch and was released.

### Why is Hadoop useful?

According to IBM: "Every day, 2.5 billion gigabytes of high-velocity data are created in a variety of forms, such as social media posts, information gathered in sensors and medical devices, videos and transaction records."

Some examples of frequently created data are:
- Metadata from phone usage
- Website logs
- Credit card purchase transactions

"Big data" refers to data sets that are too large or complex to process using traditional software applications. Factors that contribute to the complexity of data are the size of the data set, speed of available processors, and the data's format.

At the time of its release, Hadoop was capable of processing data on a larger scale than traditional software.

### Core Hadoop

Data is stored in the Hadoop Distributed File System (HDFS). Using map reduce, Hadoop processes data in parallel chunks (processing several parts at the same time) rather than in a single queue. This reduces the time needed to process large data sets.

HDFS works by storing large files divided into chunks, and replicating them across many servers. Having multiple copies of files creates redundancy, which protects against data loss.

### Hadoop Ecosystem

Many other software packages exist to complement Hadoop. These programs comprise the the Hadoop Ecosystem. Some programs make it easier to load data into the Hadoop cluster, while others make Hadoop easier to use.

The Hadoop Ecosystem includes:
- Apache Hive
- Apache Pig
- Apache HBase
- Apache Phoenix
- Apache Spark
- Apache ZooKeeper
- Cloudera Impala
- Apache Flume
- Apache Sqoop
- Apache Oozie

#### More Information:

1. [Udacity course on hadoop](https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617)
1. [Apache Hadoop](http://hadoop.apache.org/)
1. [Big Data Hadoop Tutorial Videos by edureka!](https://www.youtube.com/playlist?list=PL9ooVrP1hQOFrYxqxb0NJCdCABPZNo0pD)

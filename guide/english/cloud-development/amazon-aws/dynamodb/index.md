---
title: Amazon DynamoDB
--- 
## Amazon DynamoDB

Amazon DynamoDB is a service from Amazon Web Services (AWS) that offers a fully-managed NoSQL database. Its main feature is the capacity to scale infinitely depending on the workload needed. It is fully-managed, the user does not need to worry about the underlying infrastructure such as how to scale up or down depending on the workload. It supports key-value and document-based storage. 

The basic components of the DynamoDB service are:
* **Table**: DynamoDB stores data in tables, which are like in relational databases. The main difference is that it is schemaless, it does not have a fixed structure from the moment of its creation.

* **Item**: An item is the data stored in a table and a table can have an indefinite number of items. Comparing to a relational database, an item would be a row in the table.

* **Attribute**: An item has attributes, which are like a column in relational databases. Yet, since DynamoDB is schemaless, an item does not need to have the same attributes. Moreover, the attributes can be a single value or a JSON-like document with other fields that can also be queried. 

Although DynamoDB does not need a fixed structure for its tables, it does need a primary key for each item in the table. The primary key, like in relational databases, must be unique. The primary key can be simple or composed. A simple primary key is composed only by a partition key. The composed primary key, in turn, is composed by a partition key and a sort key. In a simple primary key, the partition key must be unique, while in a composed key, the partition key can be equal, but the sort key must be different. 

The concept of partition key and sort key is very important because it relates to the way DynamoDB stores data. DynamoDB stores data in partitions and the partition key is the key for the partition. DynamoDB uses the value in the partition key as input to a hash function to know where it stores the data. In the case of a composed key, all items with the same partition key are stored in the same partition, but they are sorted by the sort key. 

Amazon DynamoDB also has high availability. It replicates the data to many servers in different availability zones in a region. Availability Zones are data centers physically separated by a safe distance. In case of a disaster in one server, other servers have the data replicated in a safe distance and untouched. 

Due to its ease of set up and its infinite capacity to scale it is good for many uses cases. It is best suited for scenarios where the load required is not known or there are sudden peaks. Some of the use cases are as data storage for serverless applications, microservices, mobile back-end, gaming, IoT and more.

### Resources:

- [Key Value Databases](https://guide.freecodecamp.org/computer-science/databases/key-value-databases)
- [Relational Databases](https://guide.freecodecamp.org/computer-science/databases/relational-databases)

### More Information:

- "What is Amazon DynamoDB?" from [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html?shortFooter=true)
- "DynamoDB Core Components" from [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html?shortFooter=true)
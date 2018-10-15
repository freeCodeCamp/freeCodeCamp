---
title: MongoDB
---
## MongoDB

MongoDB is an open-source non-relational Database that uses a JSON like structure to store data. 
It uses a document model to store and retrieve the data instead of the table model used by sequential databases such as SQL or Oracle.
MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.

### NOSQL Vs RDBMS

| MongoDB Terms And Concepts | SQL Terms and Concepts |
| --- | --- |
| Database | Database |
| Collection | Table |
| document | Row |
| Field | Column |
| Index | Index |
| Embedded Documents | Table Joins |


### MongoDB Characteristics
1. Next Generation Database
2. No Joins
3. Clustering
4. Opensource
5. Schema less
6. No Relationships

### Features of MongoDB
1. Document Database
2. High Performance
3. Rich Query Language
4. High Availability
5. Horizontal Scalability

### [Model vs Schema](https://docs.mongodb.com/manual/core/data-modeling-introduction)

In mongoDB, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indexes. A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".

In straight RDBMS, the schema is implemented by DDL statements (create table, alter table, etc), whereas there's no direct concept of a model, just SQL statements that can do highly flexible queries (select statements) as well as basic insert, update, delete operations.

Another way to think of it is the nature of SQL allows you to define a "model" for each query by selecting only particular fields as well as joining records from related tables together.

In other ORM systems like Ruby on Rails, the schema is defined via ActiveRecord mechanisms and the model is the extra methods your Model subclass adds that define additional business logic.

Example of use

* Model
``` javascript
var List = mongoose.model('List');
var sampleList = new List({name:'Sample List'});

sampleList.tasks.push(
    {name:'task one', priority:1}, 
    {name:'task two', priority:5}
);
```
* Schema
``` javascript
mongoose.model('Task', TaskSchema);

var Task = mongoose.model('Task');

var ListSchema = new Schema({
    name: String,
    tasks: [Task.schema]
});

mongoose.model('List', ListSchema);

var List = mongoose.model('List');

```
### More Information
[What is Mongo DB?](https://www.mongodb.com/what-is-mongodb)

[Wikipedia article on Document-oriented Databases](https://en.wikipedia.org/wiki/Document-oriented_database)

[SQL vs NoSQL](https://insights.dice.com/2012/07/16/sql-vs-nosql-which-is-better/)

[Learn MongoDB from MongoDB](https://university.mongodb.com/)

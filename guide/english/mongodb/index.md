---
title: MongoDB
---

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png">


## MongoDB

MongoDB is an open-source non-relational database that uses a JSON-like structure to store data. 
It uses a document model to store and retrieve the data instead of the table model used by relational databases such as SQL or Oracle.

MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.
MongoDB in applications built with javascript is mainly used with Mongoose which is a package built on top of native mongo driver . It gives features like schema based design , virtuals , data validations etc. It makes the mongodb experience smooth and easy to use. You can learn more about mongoose [here](https://mongoosejs.com/).

### NoSQL Vs RDBMS

| MongoDB Terms And Concepts | SQL Terms and Concepts |
| --- | --- |
| Database | Database |
| Collection | Table |
| Document | Row |
| Field | Column |
| Index | Index |
| Embedded Documents | Table Joins |


### MongoDB Characteristics
1. Next Generation Database
2. No Joins
3. Clustering
4. Opensource
5. Schema-Less
6. No Relationships

### Features of MongoDB
1. Document Database
2. High Performance
3. Rich Query Language
4. High Availability
5. Horizontal Scalability
6. Supports Indexing

### Cons of MongoDB
1. Schemaless design requires database manager to ensure certain constraints
2. Indexing on multiple fields takes more memory
3. Aggregation queries are at times non-intutive

### Sample Document Structure
```
{
   "_id":ObjectId("52ffc33cd85242f436123532"),
   "name": "Rich Rick",
   "contact": "8826078979",
   "dob": "11-04-1997",
   "address": [
      {
         "building": "24 A, Indiana Apt",
         "pincode": 123456,
         "city": "Los Angeles",
         "state": "California"
      },
      {
         "building": "170 A, Acropolis Apt",
         "pincode": 456899,
         "city": "Chicago",
         "state": "Illinois"
      }
   ]
}
```

### More Information
[What is Mongo DB?](https://www.mongodb.com/what-is-mongodb)

[Wikipedia article on Document-oriented Databases](https://en.wikipedia.org/wiki/Document-oriented_database)

[SQL vs NoSQL](https://insights.dice.com/2012/07/16/sql-vs-nosql-which-is-better/)

[Learn MongoDB from MongoDB](https://university.mongodb.com/)

[ACID vs BASE databases](http://www.dataversity.net/acid-vs-base-the-shifting-ph-of-database-transaction-processing/)

[Getting Started with MongoDB](https://docs.mongodb.com/manual/tutorial/getting-started/)

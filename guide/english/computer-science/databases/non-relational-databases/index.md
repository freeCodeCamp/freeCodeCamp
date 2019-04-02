---
title: Non-Relational-Databases
---

## When to Use

If you’re dealing with a phenomenally huge amount of data, it can be way too tedious, and the probability of error (in the form of an ORM Impedance Mismatch issue) increases. In that situation you may need to consider going with a non-relational database. A non-relational database just stores data without explicit and structured mechanisms to link data from different tables (or buckets) to one another. If your data model turns out to be very complex, or if you find yourself having to de-normalize your database schema, non-relational databases may be the best way to go.

Other reasons for choosing a non-relational database include:
- The need to store serialized arrays in JSON objects
- Storing records in the same collection that have different fields or attributes
- Finding yourself de-normalizing your database schema or coding around performance and horizontal scalability issues
- Problems easily pre-defining your schema because of the nature of your data model


## Disadvantages

In non-relational databases, there are no joins like there would be in relational databases. This means you need to perform multiple queries and join the data manually within your code -- and that can get very ugly, very fast.


## Example Databases

- MongoDB
- NoSQL



## References
- (https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
- (https://en.wikipedia.org/wiki/NoSQL)

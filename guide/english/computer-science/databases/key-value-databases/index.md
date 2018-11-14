---
title: Key Value Databases
---
## Key Value Databases

A key-value database, or key-value store, is a type of [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that uses a key/value storage. This means that the data stored in the database is a collection of key-value pairs.

This type of data structure is used on many programming languages. Key-value pairs are commonly known as associative arrays, dictionaries or hash. For example, consider a dictionary of phone numbers:

|    key     |    value    |
|------------|-------------|
| Rick       |   1234555   |
| Morty      |   7754321   |
| Summer     |   5512377   |

### The Key

The `key` in a key-value pair must be unique. Having a unique identifier will allow you to access the value associated with a given key.

In theory, the key can be anything you want. A key can be a string, a binary sequence, an image, among others. However, some databases may impose limitations on the type of keys that can be used.

Here are some recommendations:
- Keys should follow a convention in order to have consistency. Keys in a phone numbers dictionary should always be names, and not a combination of names, e-mail addresses and numbers.
- Keys should not be too long, or you might have performance issues.
- Keys should not be too short, or you might have readability issues.

### The Value

The `value` in a key-value store can be anything you want. This includes strings, numbers, code, an image, a list, or even another key-value pair. Some databases allow you to restrict the data type that can be stored. 

### Use Cases

Key-value databases can be used on multiple scenarios. Here is a list of the most common applications:
- Telecom directories.
- User profiles and session information.
- Shopping cart contents.
- Product details or reviews.
- Internet Protocol (IP) forwarding tables.
- Services health status or configuration.

### Examples

Here are some examples of databases that use the key-value approach:
- [Redis](https://redis.io)
- [Oracle NoSQL Database](https://www.oracle.com/database/nosql/index.html)
- [Cassandra](http://cassandra.apache.org) (hybrid between key-value and column-oriented databases)
- [Voldemort](http://www.project-voldemort.com/voldemort/)
- [Consul KV store](https://www.consul.io/intro/getting-started/kv.html) (a tool with its own key-value store)

#### More Information:
* Key-value databases on [Wikipedia](https://en.wikipedia.org/wiki/Key-value_database)


Key-Value database is a simple database that uses a map or a dictionary as the fundamental data model where each key is associated with one and only one value in a collection and is the most flexible type of NoSQL database. 

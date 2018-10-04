---
title: ACID
---
## ACID
In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties for database modifications. They help guarantee the validity of a transaction, even with errors or failures.

A **transaction** is any sequence of database operations that satisfies the ACID properties and could be viewed as a single logical operation on the data. An example is a transfer of funds from one bank account to another. This involves multiple changes, such as debiting one account and crediting another, but is considered to be a single transaction.

### Atomicity
This means that a complex transaction is either processed completely, or not at all. If one part of the transaction fails, then the entire transaction does not complete and the database is unchanged. This way, if there's a crash, power failure, or error, the database doesn't end up in a state where only parts of a transaction are done.

### Consistency
This means that data will be consistent. Any data entered into the database must be valid and permitted based on any constraints you specify. It makes sure that any transaction changes the database from one valid state to another valid state.

### Isolation
This means that if two transactions execute at the same time, one transaction can't read data from a transaction that hasn't yet completed. Each transaction will see the database as if the transactions were executing sequentially. If one transaction needs to read data that the other is writing, it has to wait until the other transaction is finished. The effects of an incomplete transaction will not affect another transaction.

### Durability 
This means that once a transaction is complete, it will remain so, even in the event of a power loss or other errors. It guarantees that all of the changes are recorded to a non-volatile storage medium (such as a hard disk), and it makes a record of the completed transaction.

### More Information:
- ACID article: <a href='https://en.wikipedia.org/wiki/ACID' target='_blank' rel='nofollow'>Wikipedia</a>
- Video overview: <a href='https://www.youtube.com/watch?v=LSB4eceRsw8' target='_blank' rel='nofollow'>YouTube</a>

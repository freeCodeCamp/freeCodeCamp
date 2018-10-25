---
title: Relational Databases
---


As a database is a way to store data, relational-databases are a model for how the data is being stored. The data is organized into tables, also known as relations. The tables contain a record for each instance of the data, known as records or tuples. Unique identifiers identify each record to describe it across the database.

## Tables

Like the a sheet in excel, tables are made up of columns and rows. Each row is an instance of data with attributes in the column of the table know as fields. There can be several tables for each category for entities. An example could be a table of users. Each row would be a user and each field would be details on the user like email, password, and contact details for that specific user. In Figure 1 you can see diagram of the example.


|             | user       | email            | Telephone                            |
|-------------|------------|------------------|--------------------------------------|
| row 1       | Jerry      | j@j.uk.za        | 771447444121                         |
| row 2       | Sally      | batgirl@gh.co.za | 771447444121                         |
| row 3       | Alex       | samwis@tty.fe    | 771447444121                         |
| row 4       | Doug       | 4sure@dam.us     | 745151515152                         |

Figure 1 - Example of user table.

## Records

A record is a single entity of data. As in the example above, it could be a user, an account, a device, or anything that data can represent. Records do need a unique identifier, sometimes referred to as a key. This key must be unique as it is used to describe relationships a record has with other records in other tables. In Figure 1, we could add keys to each row that identifies each user with a key and the table would now look like Figure 2.

| KEY       | user       | email             | Telephone                           |
|-----------|------------|------------------|--------------------------------------|
| u1        | Jerry      | j@j.uk.za        | 771447444121                         |
| u2        | Sally      | batgirl@gh.co.za | 771447444121                         |
| u3        | Alex       | samwis@tty.fe    | 771447444121                         |
| u4        | Doug       | 4sure@dam.us     | 745151515152                         |

Figure 2 - Example of user database with KEY field.

## Fields

Fields describe the record. This could hold any information on the entity that the record symbolizes. In Figure 3 you can see a table that shows pets. The columns (fields) describe each pet (record) with p\_name, p\_age, p\_type and p\_owner. The p is shorthand for pet and the last column will be explained in the next section on relationships.

| KEY       | p\_name    | p\_age           | p\_owner      |
|-----------|------------|------------------|---------------|
| p1        | Suzy       | j@j.uk.za        | u1            |
| p2        | Little Dip | batgirl@gh.co.za | u1            |
| p3        | Amillë     | samwis@tty.fe    | u2            |
| p4        | Doug       | 4sure@dam.us     | u3            |

Figure 3 - Example of Pet table.

## Relationships

Relational-databases allow you to describe the relationships entities have with each other. This is sometimes the most difficult topic of relational databases to understand. If we take our example tables we should be able to see the relationship our user table has with the pet table. If you read the p\_owner field you can see it could be also be as in Figure 4. This explains the relation each pet has with a user. Relationship could have different types.


| KEY       | p\_name    | p\_age           | p\_owner      |
|-----------|------------|------------------|---------------|
| p1        | Suzy       | j@j.uk.za        | Jerry         |
| p2        | Little Dip | batgirl@gh.co.za | Jerry         |
| p3        | Amillë     | samwis@tty.fe    | Sally         |
| p4        | Doug       | 4sure@dam.us     | Doug          |

Figure 4 - Example of Pet table with owner field linked.

A one-to-many relationship is one record linked to many other records, the example being the user Jerry having two pets. It could also be a many-to-many relationship where the tables could be books and authors, as authors could co-write many books. Finally the most common relationship type is one-to-one, a record that can only be linked to one, and only one, other record.

## Conclusion

This is just a brief intro into relational-databases. Below links are provided to resources that could help you further study the subject.

#### More Information:
* Relational databases on <a href='https://en.wikipedia.org/wiki/Relational_database' target='_blank' rel='nofollow'>wikipedia</a>
* One-to-many on <a href='https://en.wikipedia.org/wiki/One-to-many_(data_model' target='_blank' rel='nofollow'>wikipedia</a>)
* Many-to-many on <a href='https://en.wikipedia.org/wiki/Many-to-many_(data_model' target='_blank' rel='nofollow'>wikipedia</a>)
* One-to-one on <a href='https://en.wikipedia.org/wiki/One-to-one_(data_model' target='_blank' rel='nofollow'>wikipedia</a>)
* Relationship model on <a href='https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model' target='_blank' rel='nofollow'>wikipedia</a>

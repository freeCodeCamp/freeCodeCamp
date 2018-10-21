---
title: Indexes
---
## Indexes

A **database index** is a data structure that improves the efficiency of data retrievals on a database table. A database table can have more than one index and an index could be created on one or more columns of a database table.

### How do indexes work?
Now imagine you are in a library where the books are not arranged in a predetermined order. If you were tasked to find a book, you would have to go shelf by shelf to locate it. This may be fine when there are only a few shelves of books, but the process is very time consuming if it is a multi-storey library.

On the other hand, assume that the books are now arranged by the last name of author. Given that you know the last name of the author for the book you are searching for, for example "Carnegie", you may look for shelve for "C" and then search within the specific shelf. You have saved yourself from going through every single shelf.

### The tradeoff
As described earlier, an **index** is a data structure, hence it takes up storage space. The more indexes are defined, the more storage space is taken up to maintain the data structure. Another cost comes in the form of additional updates (or writes) to keep the indexes up to date. When new records are added to a table that has an index, additional writes are required to update the index data structure.

#### More Information:
[Database Index](https://en.wikipedia.org/wiki/Database_index)

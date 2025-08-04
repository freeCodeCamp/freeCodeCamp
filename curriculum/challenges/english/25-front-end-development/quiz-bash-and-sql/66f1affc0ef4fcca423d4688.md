---
id: 66f1affc0ef4fcca423d4688
title: Bash and SQL Quiz
challengeType: 8
dashedName: quiz-bash-and-sql
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What does SQL stand for?

#### --distractors--

Standard Query Language.

---

Simple Quantum Language.

---

Sophisticated Query Language.

#### --answer--

Structured Query Language.

### --question--

#### --text--

Which SQL command is used to create a new database?

#### --distractors--

`BUILD DATABASE`

---

`GENERATE DATABASE`

---

`NEW DATABASE`

#### --answer--

`CREATE DATABASE`

### --question--

#### --text--

What is First Normal Form (1NF)?

#### --distractors--

No redundant data.

---

No partial dependencies.

---

No transitive dependencies.

#### --answer--

Atomic values in columns.

### --question--

#### --text--

How do you select all columns from a table?

#### --distractors--

`SELECT []`

---

`SELECT ALL`

---

`SELECT COLUMNS`

#### --answer--

`SELECT *`

### --question--

#### --text--

What does `FOREIGN KEY` establish?

#### --distractors--

A unique identifier key.

---

A primary key.

---

A null constraint.

#### --answer--

A relationship between tables.

### --question--

#### --text--

What is the purpose of normalization in SQL?

#### --distractors--

Speed up queries.

---

Increase storage space.

---

Add more indexes.

#### --answer--

Reduce data redundancy.

### --question--

#### --text--

What is the best defense against SQL injection?

#### --distractors--

Remove all user input.

---

Disable SQL access.

---

Remove database access.

#### --answer--

Use prepared statements.

### --question--

#### --text--

Which command modifies existing table data?

#### --distractors--

`MODIFY`

---

`CHANGE`

---

`ALTER`

#### --answer--

`UPDATE`

### --question--

#### --text--

In a junction table, what do you typically include?

#### --distractors--

Only foreign keys.

---

Only timestamps.

---

Only primary keys.

#### --answer--

Foreign keys and additional data.

### --question--

#### --text--

What command adds new data to a table?

#### --distractors--

`ADD`

---

`PUT`

---

`NEW DATA`

#### --answer--

`INSERT`

### --question--

#### --text--

Which key can have duplicate values?

#### --distractors--

Primary Key.

---

Unique Key.

---

Composite Key.

#### --answer--

Foreign Key.

### --question--

#### --text--

What does Third Normal Form (3NF) eliminate?

#### --distractors--

Multi-Valued Dependencies.

---

Partial Dependencies.

---

All Dependencies.

#### --answer--

Transitive Dependencies.

### --question--

#### --text--

How do you filter SQL results?

#### --distractors--

`FILTER`

---

`SORT`

---

`TAGS`

#### --answer--

`WHERE`

### --question--

#### --text--

What is the primary characteristic of the N+1 problem in SQL?

#### --distractors--

Executing one large, complex query and sending it back to the server.

---

A query that returns too much data at once but sorts it alpabetically.

---

Using too many JOINs in a single query and returning too much data.

#### --answer--

Executing one initial query followed by N additional queries for related data.

### --question--

#### --text--

Which of the following is a key difference between a Super Key and a Candidate Key?

#### --distractors--

A Super Key cannot contain multiple attributes or columns, while a Candidate Key can.

---

A Candidate Key must be a single column and cannot be a composite key, while a Super Key can be composite.

---

A Super Key is chosen by the database administrator and it doesn't have to be unique.

#### --answer--

A Super Key can contain extra attributes not essential for unique identification, while a Candidate Key cannot.

### --question--

#### --text--

When normalizing, what do we call data that depends on only part of a composite key?

#### --distractors--

Transitive Dependency.

---

Multi-Valued Dependency.

---

Functional Dependency.

#### --answer--

Partial Dependency.

### --question--

#### --text--

In Bash, what is the primary purpose of the `>` operator?

#### --distractors--

To append output to a file and create a copy in `tmp`.

---

To read input from a file and encode it.

---

To compare two files for differences and print the differences.

#### --answer--

To redirect standard output to a file, overwriting the file if it exists.

### --question--

#### --text--

What does the `wc -l` command do?

#### --distractors--

Counts the number of words in a file.

---

Counts the number of characters in a file.

---

Lists all files in the current directory.

#### --answer--

Counts the number of lines in a file.

### --question--

#### --text--

In a Bash script, how can you access the first argument passed to it?

#### --distractors--

`$ARG1`

---

`$0`

---

`$#`

#### --answer--

`$1`

### --question--

#### --text--

In a many-to-many relationship between students and courses, what does the junction table contain?

#### --distractors--

Only student IDs.

---

Only Course IDs.

---

Full student and course details.

#### --answer--

Both IDs and Enrollment date.


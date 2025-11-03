---
id: 6724e46581a1742244e45b59
title: Bash and SQL Review
challengeType: 31
dashedName: review-bash-and-sql
---

# --description--

## Database Normalization

This is the process of organizing a relational database to reduce data redundancy and improve integrity.

Its benefits include:

- Minimizing duplicated data, which saves storage and reduces inconsistencies.
- Enforcing data integrity through the use of primary and foreign keys.
- Making databases easier to maintain and understand.

### Normal Forms

- **1NF (First Normal Form)**
  - Each cell contains a single (atomic) value.
  - Each record is unique (enforced by a primary key).
  - Order of rows/columns is irrelevant.
  - Example: Move multiple phone numbers from a `students` table into a separate `student_phones` table.

- **2NF (Second Normal Form)**
  - Meets 1NF requirements.
  - No **partial dependencies**: every non-key attribute must depend on the entire composite primary key.
  - Example: Split `orders` table into `order_header` and `order_items` to avoid attributes depending on only part of the key.

- **3NF (Third Normal Form)**
  - Meets 2NF requirements.
  - No **transitive dependencies**: non-key attributes cannot depend on other non-key attributes.
  - Example: Move `city_postal_code` to a `cities` table instead of storing it with every order.

- **BCNF (Boyce-Codd Normal Form)**
  - Meets 3NF requirements.
  - Every determinant (left-hand side of a functional dependency) must be a superkey.

**Tip**: Aim for 3NF in most designs for a good balance of integrity and performance.

## Key SQL Concepts

- SQL is a Structured Query Language for communicating with relational databases.
- **Basic commands** → `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE TABLE`, `ALTER TABLE`, etc.
- `Joins` → Combines data from multiple tables (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`).

## Running SQL Commands in Bash

You can run SQL commands directly from the command line using the `psql` command-line client for PostgreSQL or similar tools for other databases.

For example, to run a SQL file in PostgreSQL:

```bash
psql -U username -d database_name -c "SELECT * FROM students;"
```

You can also execute MySQL commands directly:

```bash
mysql -u username -p database_name -e "SELECT * FROM students;"
```

### Run SQL from a File

```bash
# PostgreSQL
psql -U username -d database_name -f script.sql

# MySQL
mysql -u username -p database_name < script.sql
```

### Embed SQL in a Bash Script

```bash
#!/bin/bash
DB_USER="school_admin"
DB_NAME="school"

# Insert student data
psql -U "$DB_USER" -d "$DB_NAME" -c \
"INSERT INTO students (name, age, major) VALUES ('Alice', 20, 'CS');"
```

### Use of Variables in SQL

```bash
#!/bin/bash
DB_USER="school_admin"
DB_NAME="school"
STUDENT_NAME="Bob"
AGE=21

psql -U "$DB_USER" -d "$DB_NAME" -c \
"INSERT INTO students (name, age) VALUES ('$STUDENT_NAME', $AGE);"
```

**Tip**: Sanitize variables to avoid SQL injection.

## Retrieving and Using SQL Query Results in Bash

When you run SQL queries via `psql`, you can **capture** and **process** the returned values in your Bash scripts.

### Capturing a Single Value

```bash
#!/bin/bash
DB_USER="school_admin"
DB_NAME="school"

# Get total student count
STUDENT_COUNT=$(psql -U "$DB_USER" -d "$DB_NAME" -t -A -c \
"SELECT COUNT(*) FROM students;")

echo "Total students: $STUDENT_COUNT"
```

Output → 42

### Retrieving Multiple Columns

```bash
#!/bin/bash
DB_USER="school_admin"
DB_NAME="school"

# Get top 3 students' names and ages
RESULTS=$(psql -U "$DB_USER" -d "$DB_NAME" -t -A -F"," -c \
"SELECT name, age FROM students LIMIT 3;")

echo "Top 3 students:"
echo "$RESULTS"
```

Output

```bash
Alice,20
Bob,21
Charlie,22
```

### Looping Through Query Results

```bash
#!/bin/bash
DB_USER="school_admin"
DB_NAME="school"

# Get student names and majors
psql -U "$DB_USER" -d "$DB_NAME" -t -A -F"," -c \
"SELECT name, major FROM students;" | while IFS="," read -r name major
do
    echo "Student: $name | Major: $major"
done
```

Shape of Output

```bash
Student: Alice | Major: CS
Student: Bob   | Major: Math
Student: Carol | Major: Physics
```

## SQL Injection

It is a web security vulnerability where attackers insert malicious SQL code into input fields to manipulate the database.

This can lead to risky actions like:

- Bypassing authentication.
- Stealing sensitive data.
- Modifying or deleting records.

An example of an SQL injection attack:

```sql
SELECT * FROM users WHERE username = ' " " OR "1"="1" -- ' AND password = 'anything';
```

This query would return all users because the condition `OR "1"="1"` is always true, allowing attackers to bypass login checks.

### Preventing SQL Injection

1. **Use Prepared Statements**: These separate SQL code from data, preventing injection. Here's an example (Node.js with pg):

    ```sql
    client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    ```

2. **Input Validation**: Sanitize and validate all user inputs to ensure they conform to expected formats.

3. **Least Privilege**: Use database accounts with the minimum permissions necessary for the application.

**Note**: Never grant admin rights to application accounts.

## N+1 Problem

The N+1 problem occurs when an application makes one query to retrieve a list of items (N) and then makes an additional query for each item to retrieve related data, resulting in N+1 queries.

**Why It's Bad**

- Each query adds network and processing overhead.
- Multiple small queries are slower than one optimized query.

### Example of N+1 Pattern

```sql
-- 1: Get list of orders
SELECT * FROM orders LIMIT 50;

-- N: For each order, get customer
SELECT * FROM customers WHERE customer_id = ...;
```

**Solution**: Use `JOINs` or other set-based operations.

```sql
SELECT 
  orders.order_id,
  orders.product,
  orders.quantity,
  customers.customer_id,
  customers.name,
  customers.email,
  customers.address
FROM orders
JOIN customers 
  ON orders.customer_id = customers.customer_id
WHERE orders.order_id IN (SELECT order_id FROM orders LIMIT 50);
```

Always look for opportunities to combine related data into a single query.

# --assignment--

Review the Bash and SQL topics and concepts.

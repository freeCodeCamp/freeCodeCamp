---
id: 68817041f57ce139bef36541
title: What Is SQL Injection, and What Are Some Ways to Prevent It?
challengeType: 19
dashedName: what-is-sql-injection-and-what-are-some-ways-to-prevent-it
---

# --description--

SQL injection is a web security vulnerability in which attackers change or take advantage of the queries that the web application makes to the database. For example, attackers can insert malicious SQL code into the query to run the malicious code on the back-end.

This can happen when you give users the option to enter data through login forms, search bars, or URL parameters and then use that user input in string interpolation or concatenation to generate the final SQL command.

Depending on the attacker's goal, the malicious SQL code can cause significant disruptions on your database and web application, like bypassing authentication, stealing data from the database, or modifying or removing database records. Therefore, you should take this threat very seriously.

For example, let's say your web application uses an SQL query like this one to authenticate users, directly embedding the username and password entered by the user:

```sql
'SELECT * FROM users WHERE username = ' + username_input + ' AND password = ' + password_input + ';'
```

If an attacker enters something like this to the `username` field:

```sql
'" " OR "1"="1" --'
```

And anything else in the `password` field, since `"1"="1"` is always `true` and `--` comments out the rest of the query, the `WHERE` clause becomes:

```sql
WHERE username = " " OR TRUE
```

Which is always `true`.

Depending on the database implementation, this may return the data of the first user or any user in the database and allow the attacker to log in without valid credentials.

So how can you prevent this? There are two main ways to prevent SQL injection:

- Don't write dynamic queries with string concatenation.
- And prevent malicious SQL input from being included in queries that will be executed in the back-end.

In practice, you can use parameterized statements, also known as parameterized queries. They separate the SQL structure from the data entered by the user, which prevents the database from interpreting the input data as executable code.

Another important technique is input validation. This is recommended as a secondary security measure in all cases, but it's specially important for parts of SQL queries related to table names, column names, and sorting order. If possible, it's recommended to assign table names and column names directly within your code, not from user input.

If, despite all the preventive measures, you do get an SQL injection attack, you can minimize its impact on the database by limiting the permissions of each database account. Grant each database user only the permissions needed for their tasks, but nothing more. If an account only needs to read data from the database, grant it read access only. And as a preventive measure, never assign admin permissions to your application accounts. It is very dangerous to do so because an attacker could get complete access and full control over the database.

SQL injection is a very common attack that you, as a developer, should be aware of and prevent in the implementation of your web application. With these techniques, you can protect your database and keep your user's data safe.

# --questions--

## --text--

What is the primary goal of an SQL injection attack?

## --answers--

To improve the performance of the database.

### --feedback--

Think about what an "injection" might imply in a technical context and what part of the system the name "SQL injection" refers to.

---

To interfere with the database queries executed by an application.

---

To encrypt sensitive user data.

### --feedback--

Think about what an "injection" might imply in a technical context and what part of the system the name "SQL injection" refers to.

---

To enhance the visual appearance of a website.

### --feedback--

Think about what an "injection" might imply in a technical context and what part of the system the name "SQL injection" refers to.

## --video-solution--

2

## --text--

Which of the following is one of the most effective methods to prevent SQL injection vulnerabilities?

## --answers--

Regularly changing database passwords.

### --feedback--

Think about how you can separate the structure of your SQL queries from the input provided by users.

---

Limiting the size of user input fields.

### --feedback--

Think about how you can separate the structure of your SQL queries from the input provided by users.

---

Using parameterized statements or queries.

---

Displaying detailed database error messages to developers.

### --feedback--

Think about how you can separate the structure of your SQL queries from the input provided by users.

## --video-solution--

3

## --text--

If a website's login form is vulnerable to SQL injection, what could an attacker potentially achieve?

## --answers--

Automatically back up the entire database.

### --feedback--

Think about the purpose of a login form and how manipulating the database query could affect its intended function.

---

Bypass the login process without valid credentials.

---

Improve the website's search engine ranking.

### --feedback--

Think about the purpose of a login form and how manipulating the database query could affect its intended function.

---

Change the website's design and layout.

### --feedback--

Think about the purpose of a login form and how manipulating the database query could affect its intended function.

## --video-solution--

2

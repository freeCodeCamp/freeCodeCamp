---
id: 6881705cd9860639e98d639d
title: What Is the N+1 Problem?
challengeType: 19
dashedName: what-is-the-n-plus-1-problem
---

# --description--

The N+1 problem is a common performance bottleneck in database-driven applications. If you've ever experienced a really long load time while using an application, it's very likely related to the N+1 problem. This problem occurs when many small queries are being performed in a sequence to get the data you requested.

But why would you perform many queries in a sequence? You might do this to query a list of records and additional information about those records. You would perform an initial query to get the list of records and then perform an additional query for each one of those records, to get additional information about them.

Even if you intuitively think that performing many small and simple queries will be more efficient than performing just one large and complex query, this is usually not the case. The more queries you perform, the longer the entire process will take because you need to send each query to the server, find the data on the database, and then receive the data sent by the server for that query. This can have a very significant performance impact on your application.

To show you a practical example, let's say you're developing an application for a food delivery service and you run a query to get the first 50 orders in the database. First, you will get a list with these orders from an `orders` table, like this one:

```sql
order_id | product   | quantity | customer_id
1        | pizza     | 2        | 3422
2        | salad     | 1        | 1255
3        | ice cream | 4        | 2344
4        | donuts    | 10       | 3455
.        | .         | .        | .
.        | .         | .        | .
.        | .         | .        | .
```

But what if you also need to get the data of the customers who submitted these orders? This information would be stored in a different `customers` table.

One way to approach this would be to get the list of orders first and then run one query per order to get the customers' information. To get the list of orders, you could run a query like this one, to get the first 50 records from the `orders` table:

```sql
SELECT * FROM orders LIMIT 50;
```

This is where the 1 in N+1 comes from. It's the initial query that gives you the list of records. Then, you will need to perform another query for each one of these records to get the information of the customer who submitted the order. For this, you might write a loop in an asynchronous function to process both orders and customers. The `getCustomerData()` function will perform a SQL query to get the data of the customer who placed a specific order. It will do this in a sequence for each order that was placed:

```js
for (const order of orders) {
  const customerId = order.customer_id;
  const customerData = await getCustomerData(customerId);
  // Process the customer's data.
}
```

That's where the N in N+1 comes from. N represents the number of queries that will be performed to get additional data for each one of the records.

This approach might seem simple and intuitive, but you might be surprised to know that this is exactly what you shouldn't do. You should avoid making queries in a loop because making multiple small queries will take much longer than performing a single, larger query to get all the data.

You should try to use the tools that SQL gives you to reduce the number of queries as much as possible. In this case, we could use a `JOIN` operation to join the `orders` and `customers` table.

```sql
SELECT 
  orders.order_id,
  orders.product,
  orders.quantity,
  customers.customer_id,
  customers.name AS customer_name,
  customers.email AS customer_email,
  customers.address AS customer_address
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id
WHERE orders.order_id IN (SELECT order_id FROM orders LIMIT 50)
```

With the `JOIN` operation, we can retrieve the data of the first 50 orders in the database, including the data of the customers, their names, email, and addresses, with only one query. It might look more complex, but it's actually more efficient this way.

Now you know what the N+1 problem involves, so you can identify it and prevent it, to interact with your database in an efficient way.

# --questions--

## --text--

What is the primary characteristic of the N+1 problem in the context of SQL?

## --answers--

Excessive data being returned in a single query.

### --feedback--

Think about the number of queries typically involved and what triggers the additional queries after the first one.

---

Executing one initial query followed by N additional queries for related data.

---

Inefficient use of database indexes.

### --feedback--

Think about the number of queries typically involved and what triggers the additional queries after the first one.

---

Conflicts arising from concurrent database transactions.

### --feedback--

Think about the number of queries typically involved and what triggers the additional queries after the first one.

## --video-solution--

2

## --text--

What is the main performance implication of the N+1 problem?

## --answers--

Increased CPU usage on the database server due to complex joins.

### --feedback--

Think about the overhead associated with the communication between the application and the database.

---

Reduced data integrity due to inconsistencies in related data.

### --feedback--

Think about the overhead associated with the communication between the application and the database.

---

Higher memory consumption on the application server due to large result sets.

### --feedback--

Think about the overhead associated with the communication between the application and the database.

---

Increased number of database round trips, leading to increased load time.

## --video-solution--

4

## --text--

A strategy to reduce the number of database queries when retrieving related data and avoid the N+1 problem involves:

## --answers--

Increasing the database connection pool size.

### --feedback--

Think about how you can combine the retrieval of the main data and its related information into a single database interaction.

---

Optimizing individual SQL queries for speed.

### --feedback--

Think about how you can combine the retrieval of the main data and its related information into a single database interaction.

---

Fetching related data within the initial query using JOIN clauses.

---

Implementing client-side data filtering and sorting.

### --feedback--

Think about how you can combine the retrieval of the main data and its related information into a single database interaction.

## --video-solution--

3

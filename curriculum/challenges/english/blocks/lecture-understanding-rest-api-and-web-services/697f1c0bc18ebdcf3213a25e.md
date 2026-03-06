---
id: 697f1c0bc18ebdcf3213a25e
title: What Is The REST Architecture and How Does It Work?
challengeType: 19
dashedName: what-is-the-rest-architecture-and-how-does-it-work
---

# --description--

**REST** stands for representational state transfer. Think of it as a set of guidelines that describe how web clients and servers should communicate with each other over the internet.

In this lesson, you’ll learn what REST is, its key concepts, and how it works.

REST defines a way for different systems to interact by using standard web technologies. With REST, clients such as web browsers, mobile apps, and APIs communicate with a server using common HTTP methods like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`, which we discussed in a previous lesson.

Some core concepts of REST include **statelessness**, **resources**, **HTTP methods**, and **response or status codes**.

**Statelessness** means that each request a client sends to the server is handled independently. The server does not remember previous requests. Because of this, every request must include all the information needed to process it. For example, if a user is authenticated, their authentication token must be sent with each request.

In REST, everything is treated as a resource. A resource is a piece of data that can be accessed or modified. Each resource is identified by a URL, such as `/products` for all products, or `/products/1` for a specific product.

Below is an overview of HTTP methods, status codes, and a step-by-step example of how the REST architecture works.

## HTTP Methods

HTTP methods define the action to perform on a resource:

* `GET`: Retrieve a resource
    
* `POST`: Create a new resource
    
* `PUT / PATCH`: Update an existing resource
    
* `DELETE`: Remove a resource
    

## HTTP Status Codes

After processing a request, the server responds with a **status code** that indicates the result:

* `200` **(OK)**: The request was successful
    
* `201` **(Created)**: A new resource was created
    
* `400` **(Bad Request)**: The client sent invalid data
    
* `404` **(Not Found)**: The requested resource does not exist
    
* `500` **(Internal Server Error)**: An error occurred on the server
    

## How REST Works: A Step-by-Step Example

### 1\. Client Sends a Request

* The client sends an HTTP request using a method like `GET` or `POST`
    
* The request includes a URL identifying the resource
    
* It may also include headers, metadata, and a request body
    

### 2\. Server Receives the Request

* The server validates the request format and authentication (if required)
    
* It identifies the target resource from the URL
    
* It determines the requested action based on the HTTP method
    
* It checks permissions and access control
    

### 3\. Server Performs the Action

* `GET`: Retrieve the resource
    
* `POST`: Create a new resource
    
* `PUT / PATCH`: Update the resource
    
* `DELETE`: Remove the resource
    
* Any other necessary logic is executed
    

### 4\. Server Builds the Response

* The server selects an appropriate status code (for example, `200`, `201`, or `404`)
    
* It formats the response data, usually as **JSON**
    
* It adds relevant headers such as `Content-Type` or `Cache-Control`
    

### 5\. Server Sends the Response

* The response includes a status code, headers, and an optional body
    
* No client state is stored on the server (statelessness)
    

### 6\. Client Handles the Response

* The client checks the status code to determine success or failure
    
* It processes any data returned by the server

# --questions--

## --text--

What does statelessness mean in the REST architecture?

## --answers--

The server stores client data between requests.

### --feedback--

Think about how the server does not retain any memory of previous requests.

---

Each request is independent and contains all necessary information.

---

The client must store all server data locally.

### --feedback--

Think about how the server does not retain any memory of previous requests.

---

Requests do not require authentication tokens.

### --feedback--

Think about how the server does not retain any memory of previous requests.

## --video-solution--

2

## --text--

How does the REST architecture work step by step?

## --answers--

The server sends a request to the client, and the client processes it before sending a response.

### --feedback--

The client always initiates the request, and the server responds accordingly.

---

The client connects to the server, which continuously updates resources without new requests.

### --feedback--

The client always initiates the request, and the server responds accordingly.

---

The client sends a request, the server processes it, performs an operation, and sends a response.

---

The server automatically updates clients by pushing data without a request.

### --feedback--

The client always initiates the request, and the server responds accordingly.

## --video-solution--

3

## --text--

What does REST stand for?

## --answers--

Remote Execution and State Transfer 

### --feedback--

It's a standard for web communication between clients and servers.

---

Representational State Transfer

---

Rapid Encoding for Server Transactions

### --feedback--

It's a standard for web communication between clients and servers.

---

Reliable Endpoint Synchronization Technology

### --feedback--

It's a standard for web communication between clients and servers.

## --video-solution--

2

---
id: 69661c7d084c85542e76a597
title: What is a Server and How Does it Work on a Higher Level?
challengeType: 19
dashedName: what-is-a-server-and-how-does-it-work-on-a-higher-level
---

# --description--

Servers are essential for the modern web. They power the online experiences that we rely on every day as users, and they will power most of the experiences that you will create as a developer.

Let’s learn more about them.

As you may know, the internet is a global system of interconnected computer networks. Servers are the central components that enable this communication by handling the process of exchanging data.

A **server** is a computer or computer program that receives requests from other computers and sends data or services to them over the network as a response.

Server is a dual concept because it can refer to:

* The actual physical, powerful computer **hardware** that is designed to run efficiently and continuously to provide these services. These machines are built and designed for reliability.
    
* Or to the actual computer **software** that is running on that physical hardware to provide the services.
    
The physical computers that we refer to as “servers” are usually stored at data centers, which are large and secure facilities with controlled environments.

Servers are an essential part of **The Client-Server Model**.

The Client-Server Model is a distributed system architecture where components are either clients or servers.

* The **client** is the process or application that sends requests to servers for data or services. For example, a web browser.
    
* The **server** is the physical device or computer program that handles those requests and returns a response.

Essentially, the client and the server are part of a request-response cycle, where the client sends a request to the server, and the server returns a response to the client.

For example, when you use your browser (the client) to authenticate on an application with your username and password, your information is securely sent to a server. The server then checks if the username and password that you entered match the information that the platform currently has in its database. If there is a match, the server returns a successful response to the client (your browser), and you are successfully authenticated on the site.

If no match is found, the server returns a failure response to the client, and you’ll typically see an error or some sort of feedback explaining why your login attempt was unsuccessful.

All of this authentication logic runs on the server. The server is responsible for validating credentials, interacting with the database, and deciding how to respond to each request.

Each server response includes an HTTP status code, which tells the client what happened. These status codes let the client know whether a request succeeded or failed and why.

For example:

* 200 means that everything was OK.
    
* 404 means that the resource was not found on the server.
    
* 500 means that there was an internal server error.
    
* 503 means that the server is temporarily unavailable.
    
* And so on…
    

Each status code has its own unique meaning.

Examples of real-world applications that use servers include e-commerce, search engines, gaming, video streaming, cloud storage and collaboration platforms, social media platforms, financial applications, and more.

If the data is updated dynamically or the application needs some sort of communication with a database, servers are very likely key components of the communication process.

These are some of the main types of servers:

* **Web servers** deliver web content, such as HTML pages, images, and CSS files, to browsers.
    
* **Application servers** handle business logic, process user input, and coordinate responses.
    
* **Database servers** run database management systems and store, retrieve, and manage data.
    
* **Mail servers** send, receive, and store email messages.
    
* **File servers** manage access to files and allow them to be stored and shared across a network.
    
* **Proxy servers** act as intermediaries between clients and other servers, often used for caching, security, or traffic control.

Servers are the backbone of the powerful online platforms we use every day. They make it possible to run complex logic, store and process large amounts of data, and support millions of users at the same time. Without servers, the modern digital world we rely on would not exist.

# --questions--

## --text--

Which of the following statements best defines the dual concept of a server?

## --answers--

A server is always a massive supercomputer used only by organizations.

### --feedback--

Think about what is running the service and what the service itself is.

---

A server is exclusively the software application that delivers services, never the physical machine.

### --feedback--

Think about what is running the service and what the service itself is.

---

A server refers to both the dedicated physical computer hardware and the specialized software program that provides services.

---

A server is the connection cable that links clients to the internet network.

### --feedback--

Think about what is running the service and what the service itself is.

## --video-solution--

3

## --text--

In the Client-Server Model, what is the server's primary function in the Request-Response Cycle?

## --answers--

To act as the client's firewall, blocking all incoming traffic.

### --feedback--

Think about the relationship in the cycle: who asks for something, and who is responsible for providing it?

---

To generate the initial request that starts the communication process.

### --feedback--

Think about the relationship in the cycle: who asks for something, and who is responsible for providing it?

---

To process the client's request, execute the necessary logic (like querying a database), and return the requested data.

---

To convert the data from analog signals to digital signals.

### --feedback--

Think about the relationship in the cycle: who asks for something, and who is responsible for providing it?

## --video-solution--

3

## --text--

Which status code is returned by a server when the requested resource cannot be found?

## --answers--

200

### --feedback--

This code belongs to the 4xx family.

---

404

---

301

### --feedback--

This code belongs to the 4xx family.

---

500

### --feedback--

This code belongs to the 4xx family.

## --video-solution--

2

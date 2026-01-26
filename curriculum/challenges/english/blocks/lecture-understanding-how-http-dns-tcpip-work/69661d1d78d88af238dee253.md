---
id: 69661d1d78d88af238dee253
title: What are TCP/IP and HTTP and What is the Basic Syntax for HTTP?
challengeType: 19
dashedName: what-are-tcp-ip-and-http-and-what-is-the-basic-syntax-for-http
---

# --description--

The digital world as we know it today is based on the notion that devices can communicate with each other, sending and receiving data as needed.

But have you ever thought about how this process works behind the scenes?

When you browse the internet, you constantly request and send data through the network. This is possible thanks to a detailed process based on standard rules and procedures that make sure that the information is sent and received correctly by the appropriate devices.

That set of rules and procedures is known as a **protocol**.

Protocols basically allow two or more devices to communicate with each other by making sure that they all follow certain standards, such as the format of the data that will be exchanged.

Protocols make sure that all devices involved in the data exchange process will be able to understand each other. Figuratively, they will all know how to “speak the same language”.

At their core, TCP/IP are the protocols that make the internet possible.

**TCP/IP** is a suite of communication protocols that determine how data is packaged, sent, routed, and received through a network. It ensures that information is transported reliably.

Specifically, the **IP**, where IP stands for **Internet Protocol**, is a protocol that makes sure that the data goes from the source to the correct destination in the network.

Why is this important? Remember that the internet is a global network of interconnected devices. For your device to send a request, first it has to know where to send that data. That is the main purpose of IP addresses, the foundation of the Internet Protocol (IP). They uniquely identify the devices on the network, so the source device knows where to send the data.

By itself, the Internet Protocol is connectionless, which means that each unit of data (called a “packet”) is sent independently to its destination across the network, without previously establishing a connection or ensuring that it will be delivered correctly or in the right order. If they do reach their destination, the source is not notified at all.

This is where protocols like TCP become really important.

The **TCP** protocol, known as the **Transmission Control Protocol**, breaks the data into small segments. These fundamental data units are numbered and reassembled when they reach their destination using specific algorithms that detect if the data is complete and correct. These algorithms also check for errors and lost packets, so they can ask the source to resend them if needed, making sure that the information is received correctly.

Together, the Transmission Control Protocol and the Internet Protocol set the rules and standards needed to ensure that data is transmitted in a reliable way across the internet.

In addition to TCP/IP, there is another very important protocol for modern internet: HTTP.

HTTP works at the application level.

**HTTP** stands for **HyperText Transfer Protocol**. It defines the rules and standards for the communication between the client (like your browser) and the server.

When you try to access a website on your browser, the browser sends an HTTP request to the server asking for that specific resource and its related assets. The server receives the HTTP request, executes its logic, and returns an HTTP response to the client with the content requested or some information indicating why the request was not successful.

HTTP requests and HTTP responses have very similar structures, including:

* A request line (the start line)
    
* Headers
    
* Body (optional)

## **HTTP Requests**

The **request line** of an HTTP request is divided into three main parts:

* A method, which describes the action that is being requested. For example, `GET` to retrieve data and `POST` to submit data. Other common methods include `PUT`, `PATCH`, `DELETE`, and `HEAD`.
    
* A path or URI, which describes the specific resource that the client is requesting.
    
* The version of the HTTP protocol being used for the communication process. For example, `HTTP/1.1`.

This is an example with the `GET` method on the root `/` path and HTTP version 1.1:

`GET / HTTP/1.1`

The **header** contains key-value pairs with information about the request.

For example: `Content-Type: application/json`.

Below the header, there’s an empty line to indicate that the metadata (additional information about the request) is complete.

And finally, the **body**. This is optional. It’s sent when the client has to send information to the server, like when submitting new data with the `POST` method.

This is an example of an HTTP request:

```md
GET / HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html
Connection: keep-alive
```

## **HTTP responses**

They have a very similar structure:

* A status line
    
* Header
    
* Body
    

First, the **status line** contains information about the result of the request. You will usually find this:

* The version of HTTP being used for the communication process. For example, `HTTP/1.1`.
    
* The status code, which indicates the result of the request.
    
* A reason phrase, a brief human-readable description of the status code. This is helpful to understand what happened.
    

Common status codes include:

* `200 OK`
    
* `201 CREATED`
    
* `400 BAD REQUEST`
    
* `404 NOT FOUND`
    
* `403 FORBIDDEN`
    
* `500 INTERNAL SERVER ERROR`
    

There are many status codes. They are categorized by their first digit from left to right.

* `1xx` for informational responses.
    
* `2xx` for successful responses.
    
* `3xx` for redirection messages.
    
* `4xx` for client error responses.
    
* `5xx` for server error responses.
    

Below the status line of an HTTP response, we find the **header** with metadata about the response. For example, `Content-Type: text/html`. This may also include the content length, date, location, and additional information that the client may find helpful.

And finally, we find the HTTP response **body**, which contains the data that the client was requesting or an explanation of what happened if the request was not successful. This is optional, but it’s included in most responses.

This is an example of an HTTP response:

```md
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 105
Connection: keep-alive

<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body><h1>Welcome!</h1></body>
</html>
```

Now that you know about HTTP, you might be curious to know more about HTTPS.

You can think of HTTPS as a “secure” version of HTTP, where data sent between the browser and the server is encrypted for security purposes. Most modern web traffic uses HTTPS.

Protocols like TCP/IP and HTTP have made the World Wide Web and the internet as a whole become the essential tool that most of us rely on every single day. Thanks to them, devices can communicate properly over a network and exchange data all around the world.

# --questions--

## --text--

Which of the following protocols is primarily responsible for ensuring the reliable, ordered, and correct delivery of data across a network?

## --answers--

HTTP

### --feedback--

Think about the set of rules that makes sure data arrives in the right order, confirms that it was received correctly, and asks for any missing data to be sent again.

---

TCP

---

IP

### --feedback--

Think about the set of rules that makes sure data arrives in the right order, confirms that it was received correctly, and asks for any missing data to be sent again.

---

FTP

### --feedback--

Think about the set of rules that makes sure data arrives in the right order, confirms that it was received correctly, and asks for any missing data to be sent again.

## --video-solution--

2

## --text--

What is the primary purpose of the Internet Protocol (IP) within the TCP/IP suite?

## --answers--

To establish and terminate a reliable connection between the client and server.

### --feedback--

Think about the specific purpose of IP addresses in a network.

---

To handle the addressing and routing of data packets across different networks.

---

To define the syntax and semantics of web content exchange.

### --feedback--

Think about the specific purpose of IP addresses in a network.

---

To ensure that all packets arrive in the correct sequential order.

### --feedback--

Think about the specific purpose of IP addresses in a network.

## --video-solution--

2

## --text--

In the context of web browsing, what is the main role of the HTTP protocol?

## --answers--

To break data into small, numbered packets and route them to the correct address.

### --feedback--

Think about what kind of data HTTP is designed to manage.

---

To encrypt all data using SSL/TLS before transmission.

### --feedback--

Think about what kind of data HTTP is designed to manage.

---

To define the structure and rules for clients (browsers) and servers to exchange web content.

---

To establish a physical, dedicated circuit connection between the client and the server.

### --feedback--

Think about what kind of data HTTP is designed to manage.

## --video-solution--

3

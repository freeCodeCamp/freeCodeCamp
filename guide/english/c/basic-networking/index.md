---
title: Basic Networking
---
## Basic Networking

Basic Networking in C mainly involves opening sockets and communicating through them. This begs the question, what is a Socket?

## What is a Socket
A socket is one endpoint of a two-way communication link between two programs running on a network. An endpoint is a combination of an IP address and a port number. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to. 

When a program is running on a network it is available to access from different locations other than the local location. By different locations I mean all the computers on the same network can access it. But, how will they? Hence every program registers itself with a port number. Think of port number as an apartment number in a huge apartment. If a letter is sent to an apartment, the apartment number tells the post office the specific apartment he should go to.

But, how will it arrive at the apartment? Every apartment has there own unique address, the post office looks at those unique address(which is infact a string) and decides the destination of the letter. In this case, every computer connected to a network will have an IP address which is like an address used when sending a letter through the post office. Likewise, a computer connected to a network needs to know the IP addresses of the other computers on the same network to communicate with them. To communicate with a specific program on a specific computer the port number for that program is needed. (Think of the apartment number from our apartment analogy.)

## Basics of Socket Programming

Socket programming is a way of connecting two nodes on a network to communicate with each other. One socket(node) listens on a particular port at an IP, while other socket reaches out to the other to form a connection. Server forms the listener socket while client reaches out to the server.

## I have Socket... Now what?

Once a socket has been created between two nodes (a.k.a hosts or computing systems), a language needs to be agreed upon so the hosts can communicate between themselves - and others.  This language is often referred to as a [protocol](https://en.wikipedia.org/wiki/Communication_protocol "Wikipedia: Communication Protocol") - or an agreed upon way to communicate between hosts.  While there are many different protocols, the two most often used protocols are [UDP (User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "Wikipedia: User Datagram Procol") and [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Wikipedia: Transmission Control Protocol").  

#### More Information
- [GeekForGeeks: Socket Programming in C](https://www.geeksforgeeks.org/socket-programming-cc)
- [Beej's guide to Network Programming](https://beej.us/guide/bgnet/)


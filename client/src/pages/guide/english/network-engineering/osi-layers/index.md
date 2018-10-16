---
title: OSI Layers 
---
## OSI Layers

### Introduction

Have you ever wondered how data is sent through the network from one machine to another? If yes, then the Open System Interconnected model is what you are looking for. 

The OSI model is used to help standardise and characterise how data should flow from sender to receiver without taking into consideration the underlying internal structure of the endpoint (sender, receiver).

The organisation that came up with this model is the **International Standardisation Organisation** and hence this model is formally referred to as **ISO - OSI**.

### Architecture 

As in the figure below the model divides the network into **7 layers**. Data communication in the OSI model starts with the top layer ( Application Layer ) of the stack at the sending side, travels down the stack to the sender's lowest layer ( Physical Layer ), then traverses the physical network connection to the bottom layer on the receiving side, and up its OSI model stack. 

We go for a layered approach because it is easy to design independent layers with dedicated functions which interact with each other as compared to a single complex model.

![Relationship between sender, intermediate nodes, and receiver across multiple layers](https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg)

### **Important Observations**

* _**End-to-end layers:**_
In the diagram above, you would notice that the upper layers of the protocol (Application - Transport), the sender's and receiver's layers are directly connected via arrows. This is because these layers are not aware of intermediate devices that are used to transport data (such as switches and routers). These layers appear to communicate directly with each other.

* _**Unit of Data:**_
In the diagram above, to the extreme left is the unit of data that is used in each of the layer. The transport layer (and the layers below it) have a unique name for the unit of data being transferred from sender to receiver. 

### **Functions of Layers**

* _**Layer 1 - Physical Layer:**_  This layer is the root of the OSI model, where information is transmitted either in the Local Area Network (LAN) for the Link Layer, and a physical signal such as electrical, mechanical medium in the form of code words or symbols in the Physical Layer.

* _**Layer 2 - Data Link Layer:**_ The data link layer is responsible for transferring data to adjacent devices on the same Local Area Network (LAN). This layer also has provisions to make sure that error-free data is being passed on to the higher layers from the physical layer. Hence, it contains error detection and correction mechanisms to ensure the integrity of data is maintained. Data at this layer is commonly referred to as a "frame". The transmission of frames at layer 2 is known as "switching", and is the common function of a Network Switch.

* _**Layer 3 - Network Layer:**_ This layer is responsible for providing data routing paths for network connections. Basically, it moves data packets across the network with the most logical path.

Internet Protocol (IP)
Defines the structure of the data packets, as well as labeling it with the source and destination information.

The source and destination information are in the form of IP Addresses, in which can be in the form 104.16.121.127(IPv4), or 2001:db8:0:1234:0:567:8:1(IPv6).

* _**Layer 4 - Transport Layer:**_ This layer is responsible for the host-to-host communication of messages. Examples of protocols in this layer include TCP and UDP.

Transmission Control Protocol (TCP)
The most common connection-oriented protocol. It defines how to establish and maintain a network conversation. It is responsible for establishing a connection (called a socket) between the client and the host in a 3-way handshake.

* _**Layer 5 - Session Layer:**_ The session layer allows session establishment between processes running on different stations. 

* _**Layer 6 - Presentation Layer:**_ The presentation layer formats the data to be presented to the application layer. 

* _**Layer 7 - Application Layer:**_ Application Layer
This layer allows applications to communicate over the network once the connection has been established, such as from the Web Browser (Application) to the Server. Examples of protocols in this layer include HTTP and TELNET.

HyperText Transfer Protocol (HTTP)
A set of rules for transferring files over the Internet. For example, when you enter the URL into the browser, the browser sends an HTTP request for the webpage. The host would then return the webpage, together with all the elements that are within, such as images, text, videos, styling fonts, etc.

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
In the diagram above, to the extreme left is the unit of data that is used in each of the layers. The transport layer (and the layers below it) have a unique name for the unit of data being transferred from sender to receiver. 

### **Functions of Layers**

* _**Layer 1 - Physical Layer:**_  The physical layer is the lowest of the OSI Layers and the most complex. This is because of the underlying hardware technologies used. The function of this layer is to define how the bit stream will be transmitted rather than the logical data packet. It deals with defining which frequency will the bit be transmitted on, what kind of modulation will be used, how the bits will be grouped and other low lying physical parameters needed for transmission of bits.

* _**Layer 2 - Data Link Layer:**_ The data link layer is responsible for transferring data to adjacent devices on the same Local Area Network (LAN). This layer also has provisions to make sure that error-free data is being passed on to the higher layers from the physical layer. Hence, it contains error detection and correction mechanisms to ensure the integrity of data is maintained. Data at this layer is commonly referred to as a "frame". The transmission of frames at layer 2 is known as "switching", and is the common function of a Network Switch.

* _**Layer 3 - Network Layer:**_ The network layer is responsible for forwarding packets to other networks. Usually, a network is divided into multiple subnets and the network layer with the help of routers forwards packets between such networks to establish a Wide Area Network (WAN). 

* _**Layer 4 - Transport Layer:**_ The transport layer ensures that messages are delivered error-free, in sequence, and with no losses or duplications. It relieves the higher layer protocols from any concern with the transfer of data between them and their peers.

* _**Layer 5 - Session Layer:**_ The session layer allows session establishment between processes running on different stations. 

* _**Layer 6 - Presentation Layer:**_ The presentation layer formats the data to be presented to the application layer. 

* _**Layer 7 - Application Layer:**_ The application layer serves as the window for users and application processes to access network services.

#### More Information:
* https://www.mheducation.com/highered/product/data-communications-networking-forouzan/M0073376221.html

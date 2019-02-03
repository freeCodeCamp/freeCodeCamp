---
title: OSI Layers 
---

# OSI Layers

## Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
  - [Important Observations](#important-observations)
    - [End-to-end Layers](#end-to-end-layers)
    - [Unit of Data](#unit-of-data)
- [Functions of Each Layer](#functions-of-each-layer)
  - [Layer 1 - Physical Layer](#layer-1---physical-layer)
  - [Layer 2 - Data Link Layer](#layer-2---data-link-layer)
  - [Layer 3 - Network Layer](#layer-3---Network-layer)
  - [Layer 4 - Transport Layer](#layer-4---transport-layer)
  - [Layer 5 - Session Layer](#layer-5---session-layer)
  - [Layer 6 - Presentation Layer](#layer-6---presentation-layer)
  - [Layer 7 - Application Layer](#layer-7---application-layer)
- [Additional Resources](#additional-resources)

## Introduction
Have you ever wondered how data is sent through the network from one machine to another? If yes, then the Open System Interconnected model is what you are looking for. 

The OSI model is used to help standardize and characterize how data should flow from sender to receiver without taking into consideration the underlying internal structure of the endpoint (sender, receiver).

The organization that created this model is the **International Standardization Organization** and hence this model is formally referred to as **ISO - OSI**.

## Architecture 
As described in the figure below, the model divides the network into **7 layers**. Data communication in the OSI model starts with the top layer (Application Layer) of the stack on the sending device, travels down the stack to the sender's lowest layer (Physical Layer), traverses the network to the bottom layer of the receiving device, and goes up the receiving device's OSI model stack. 

The model goes for a layered approach because it is easy to design independent layers with dedicated functions which interact with each other as compared to a single complex model.

![Relationship between sender, intermediate nodes, and receiver across multiple layers](https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg)

### Important Observations

#### End-to-end Layers
In the diagram above, you would notice that the upper layers of the protocol (Application - Transport), the sender's and receiver's layers are directly connected via arrows. This is because these layers are not aware of intermediate devices that are used to transport data (such as switches and routers). These layers appear to communicate directly with each other.

#### Unit of Data
In the diagram above, to the extreme left is the unit of data that is used in each of the layers. The transport layer (and the layers below it) have a unique name for the unit of data being transferred from sender to receiver. 

## Functions of Each Layer

### Layer 1 - Physical Layer
The physical layer is the lowest of the OSI Layers and the most complex. This is because of the underlying hardware technologies used. The function of this layer is to define how the bit stream will be transmitted rather than the logical data packet. It deals with defining which frequency will the bit be transmitted on, what kind of modulation will be used, how the bits will be grouped and other low lying physical parameters needed for transmission of bits.

### Layer 2 - Data Link Layer
The data link layer is responsible for transferring data to adjacent devices on the same Local Area Network (LAN). This layer also has provisions to make sure that error-free data is being passed on to the higher layers from the physical layer. Hence, it contains error detection and correction mechanisms to ensure the integrity of data is maintained. Data at this layer is commonly referred to as a "frame". The transmission of frames at layer 2 is known as "switching", and is the common function of a Network Switch.

### Layer 3 - Network Layer
The network layer is responsible for forwarding packets to other networks. Usually, a network is divided into multiple sub-networks (subnets) and the network layer with the help of routers forwards packets between such networks to establish a Wide Area Network (WAN). 

### Layer 4 - Transport Layer
The transport layer ensures that messages are delivered error-free, in sequence, and with no losses or duplications. It relieves the higher layer protocols from any concern with the transfer of data between them and their peers. Two major protocols utilized on this layer are the TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

### Layer 5 - Session Layer
The session layer allows session establishment between processes running on different stations. 

### Layer 6 - Presentation Layer
The presentation layer formats the data to be presented to the application layer. 

### Layer 7 - Application Layer
The application layer serves as the window for users and application processes to access network services like DNS (Domain Name System), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), etc..

## Additional Resources

### Books on Networking
- [Data Communications and Networking 5th Edition](https://www.mheducation.com/highered/product/data-communications-networking-forouzan/M0073376221.html)

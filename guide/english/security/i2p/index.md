---
title: I2P
---
### Invisible Internet Project

**Invisible Internet Project** or in short **I2P** created in 2003, which is an anonymous network that establish secure internal connections between users. Anonymous connections are achieved by encrypting the user's traffic, and sending it through a network of computers distributed around the world. I2P main objective is to establish it's own internal internet, so that the network isn't accessible from a regular computer. A group of hackers, developerts and software architects whose main objective was to create a virtual, private network, resistant to censorship. I2p differs from another popular anonymous network known as Tor in several ways that make it unique.  I2p was designed and optimized to be used for hidden services, while Tor is more focused on proxying to the regular Internet.

### Software Used

The software that implements this layer is called an **I2P router**, and a computer running I2P is called an **I2P node**. I2P is free and open source.

### How it Works?

1. The network itself is strictly message-based (like IP), but there is a library available to allow reliable streaming communication on top of it *(similar to TCP, although from version 0.6 there is a new UDP-based SSU transport)*.
2. All communication is end-to-end encrypted *(in total there are four layers of encryption used when sending a message)* through garlic routing.
3. The end points are cryptographic identifiers *(essentially a pair of public keys)*, so that neither sender nor recipient of a message need to reveal their IP address to the other side or to third-party observers.
4. I2P is an anonymous peer-to-peer distributed communication layer designed to run any traditional internet service *(e.g. Usenet, email, IRC, file sharing, Web hosting and HTTP, Telnet)*, as well as more traditional distributed applications *(e.g. a distributed data store, a web proxy network using Squid, or DNS)*.
5. I2P uses **2048bit ElGamal/AES256/SHA256+Session** Tags encryption and **Ed25519 EdDSA/ECDSA signatures**.  
6. I2p supports TCP and UDP connections which make it useful for things like Bittorrent and VOIP.The way I2p focuses on hidden service performance makes it a thriving environment for novel anonymous applications.  

### Applications

+ **Email** - I2P-Bote is a free, fully decentralized and distributed anonymous email system with a strong focus on security.

+ **Instant Messaging** - I2P-Messenger is a simple Qt-based, serverless, end-to-end-encrypted instant messenger for I2P. No servers can log the user's conversations. No ISP can log with whom the user chats. As it is serverless, it can make use of I2P's end-to-end encryption, preventing any node between two parties from having access to the plain text.

+ **Routers** - I2PBerry is a Linux distribution which can be used as a router to encrypt and route network traffic through the I2P network.

+ **Crypto-Currency**

### More Information

+ [geti2p.net](https://geti2p.net/en/)
+ [Tor vs I2P comparison](https://geti2p.net/en/comparison/tor)
+ [I2P - Wikipedia](https://en.wikipedia.org/wiki/I2P)
+ [Guide to I2P and how to install and use it](https://www.comparitech.com/blog/vpn-privacy/i2p-install-use-guide/)
---
title: I2P
---
## Invisible Internet Project
### Introduction

<ul><li>Invisible Internet Project or in short I2P created in 2003, which is an anonymious network that establish secure internal connections between users. Anonymous connections are achieved by encrypting the user's traffic, and sending it through a network of computers distributed around the world.</li>
<li>I2P main objective is to establish it's own internal internet, so that the network isn't accessible from a regular computer.</li></ul>

### Software Used

<ul><li>The software that implements this layer is called an <b>I2P router</b>, and a computer running I2P is called an <b>I2P node</b></li>
<li>I2P is free and open source.</li></ul>

### How it Works?

<ul>
<li>The network itself is strictly message-based (like IP), but there is a library available to allow reliable streaming communication on top of it (similar to TCP, although from version 0.6 there is a new UDP-based SSU transport).</li>
<li>All communication is end-to-end encrypted (in total there are four layers of encryption used when sending a message) through garlic routing</li>
<li>The end points are cryptographic identifiers (essentially a pair of public keys), so that neither sender nor recipient of a message need to reveal their IP address to the other side or to third-party observers.</li>
<li>I2P is an anonymous peer-to-peer distributed communication layer designed to run any traditional internet service (e.g. Usenet, email, IRC, file sharing, Web hosting and HTTP, Telnet), as well as more traditional distributed applications (e.g. a distributed data store, a web proxy network using Squid, or DNS).</li>
<li>I2P uses 2048bit ElGamal/AES256/SHA256+Session Tags encryption and Ed25519 EdDSA/ECDSA signatures.</li>
</ul>

### Applications

<ul>
  <li><b>Email<b></li>
  <p> I2P-Bote is a free, fully decentralized and distributed anonymous email system with a strong focus on security.</p>
 <li><b>Instant Messaging<b></li>
   <p> I2P-Messenger is a simple Qt-based, serverless, end-to-end-encrypted instant messenger for I2P. No servers can log the user's conversations. No ISP can log with whom the user chats. As it is serverless, it can make use of I2P's end-to-end encryption, preventing any node between two parties from having access to the plain text.</p>
 <li><b>Routers<b></li>
   <p> I2PBerry is a Linux distribution which can be used as a router to encrypt and route network traffic through the I2P network.</p>
 <li><b>Crypto-Currency<b></li>
</ul>

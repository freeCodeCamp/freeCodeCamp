---
title: Scanning
---
# Scanning

## Introduction

Network Scanning refers to a set of procedures for indentifying hosts, posts and services on a network.

Scanning activities can involve:
Checking for Open Ports on a Network,
Banner Grabbing,
Creating Network Diagrams

## Scanning Techniques

One of the most common ways to scan a a network is a technique called a Ping Sweep. This can determine the live hosts on a range of IP address. A really simple example of this is just going to your command line and typing `ping 8.8.8.8`. This will send an [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) ECHO request to a host, in this case it will be Google's Public DNS.

Different Internet protocols require different methods of scanning; for example scanning a [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) network would be different to scanning a [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) network.

TCP scans generally take advantage of the way in which TCP operates and how TCP goes through a "handshake" to initiate communication on a network. 
1.  A device (Host A) attempting to communicate across a network to another device (Server B) will send a SYN message.
2. B needs to reply to A with an SYN and an ACK to acknowledge B's request to start communication
3. A needs to send back an ACK message to acknowledge B's response.
4. Communication can then start 

Throughout this communication, there are bits of information that each participant sends in an attempt to initiate the conversation. 

There are a lot more types of [scans](https://nmap.org/bennieston-tutorial/) that further abuse the TCP Handshake process; such as IDLE scans, Xmas tree scans, Inverse TCP scans and Full Scans

## Tools

There are many tools available for this but one of the most common is `nmap`. 
[You can watch a great talk from Gordon Lyon aka Fydor, the creator of the nmap tool](https://www.youtube.com/watch?v=Hk-21p2m8YY)
`nmap` is a pretty useful tool with so many functions (getting information about live hosts on a network, services that are running, types and versions of OS being used) and is beyond the scope of this article to explain them all. But go check it out if you haven't already!

## Anything else?
IPv6 Networks can also be scanned.

IPv6 increases the IP address size to make a lot more addresses available




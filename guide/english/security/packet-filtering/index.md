---
title: Packet Filtering
---
## Packet Filtering

Packet filtering is the process of passing or blocking packets at a network interface based on source and destination addresses, ports, or protocols. The process is used in conjunction with packet mangling and Network Address Translation (NAT). Packet filtering is often part of a firewall program for protecting a local network from unwanted intrusion.

### How to Achieve Packet Filtering
Network layer firewalls define packet filtering rule sets, which provide highly efficient security mechanisms. In a software firewall, packet filtering is done by a program called a packet filter. The packet filter examines the header of each packet based on a specific set of rules, and on that basis, decides to prevent it from passing (called DROP) or allow it to pass (called ACCEPT).

### Filtering Methods

There are three ways in which a packet filter can be configured, once the set of filtering rules has been defined. In the first method, the filter accepts only those packets that it is certain are safe, dropping all others. This is the most secure mode, but it can cause inconvenience if legitimate packets are inadvertently dropped. In the second method, the filter drops only the packets that it is certain are unsafe, accepting all others. This mode is the least secure, but is causes less inconvenience, particularly in casual Web browsing. In the third method, if the filter encounters a packet for which its rules do not provide instructions, that packet can be quarantined, or the user can be specifically queried concerning what should be done with it. This can be inconvenient if it causes numerous dialog boxes to appear, for example, during Web browsing.

## Various ways to do packet filtering
1) The user can sniff through the packet via wireshark tool and filter the packets.
2) Packets can also be filtered using the netfilter queue library in python.
3) One can use scapy or pyshark python library or tshark tool to filter out packets.

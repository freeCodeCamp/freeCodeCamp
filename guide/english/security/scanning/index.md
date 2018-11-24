---
title: Scanning
---
# Scanning

## Introduction
Network Scanning refers to a set of procedures for indentifying hosts, posts and services on a network.

Scanning activities can involve checking for open ports on a network, banner grabbing, and creating network diagrams.

## Scanning Techniques
One of the most common ways to scan a network is a technique called a Ping Sweep. This can determine the live hosts on a range of IP address. A really simple example of this is just going to your command line and typing `ping 8.8.8.8`. This will send an [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) ECHO request to a host, in this case it will be Google's Public DNS.

Different Internet protocols require different methods of scanning; for example scanning a [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) network would be different to scanning a [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) network.

TCP scans generally take advantage of the way in which TCP operates and how TCP goes through a "handshake" to initiate communication on a network:

1. A device (Host A) will send a `SYN` message in an attempt to communicate across a network to another device (Server B)
2. B needs to reply to A with an `SYN` and an `ACK` to acknowledge A's request to start communication
3. A needs to send back an `ACK` message to acknowledge B's response
4. Communication can then start

Throughout this communication, there are bits of information that each participant sends in an attempt to initiate the conversation. 

Note that you can also scan IPv6 networks (IPv6 increases the IP address size to make a lot more addresses available).

There are a lot more types of [scans](https://nmap.org/bennieston-tutorial/) that further abuse the TCP Handshake process. These include IDLE scans, Xmas tree scans, Inverse TCP scans, and Full Scans.

## Scanning in Penetration Testing
Scanning is the second phase out of the typical five phases of penetration testing. The phase of scanning requires the application of technical tools to gather further intelligence on your target, but in this case, the intel being sought is more commonly about the systems that they have in place.<sup>1</sup> 

There are three main goals:
1. Determining if a system is alive
2. Port scanning the system
3. Scanning the system for vulnerabilities<sup>2</sup>

### Determining if the system is alive

One way to determine if the target system is alive is by using the <b>ping</b> command, as mentioned in the Ping Sweep technique above. 

For example:
```
ping <target_ip_address> -c <number_of_packets_to_send>
ping 10.10.0.1 -c 4
```

If the target system is alive, you should get a response back that looks similar to below.

```
Pinging 10.10.0.1 with 32 bytes of data:

Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Ping statistics for 10.10.0.1:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milliseconds:
    Minimum = 26ms, Maximum = 26ms, Average = 26ms
```
<ul>
  <li><b>Reply from</b> indicates that our ICMP Echo Request packet was received an ICMP Echo Reply packet was sent back.</li>
  <li><b>Bytes=32</b> tells us that the size of the packet that was sent.</li>
  <li><b>time=26ms</b> lets us know how the combined time it took the ICMP Echo Request packet to get to the target and for the ICMP Echo Reply packet to come back to our machine.</li>
  <li><b>TTL=240</b> is a Time To Live value that tells us the maximum number of hops that the packet would take before it would drop.</li>
</ul>

<!-- Could have more information about ping sweeps in order to ping multiple hosts -->
<!--
### Port scanning the system

### Scanning the system for vulnerabilities
-->

## Scanning Tools
There are many tools available to scan but one of the most common is `nmap`. It's a useful tool with functions such as getting information about live hosts on a network, services that are running, and the types and versions of the operating system being used.

## More Information:
- How to Ping in Linux https://www.wikihow.com/Ping-in-Linux
- [Video from Gordon Lyon aka Fydor, the creator of the nmap tool](https://www.youtube.com/watch?v=Hk-21p2m8YY)

## Sources
<ol>
  <li>Summarizing The Five Phases of Penetration Testing. (2015, May 06). Retrieved October 26, 2017, from https://www.cybrary.it/2015/05/summarizing-the-five-phases-of-penetration-testing/<li>
  <li>Engebretson, P. (2013). The Basics of Hacking and Penetration Testing: Ethical Hacking and Penetration Testing Made Easy Ed. 2. Syngress.</li>
</ol>
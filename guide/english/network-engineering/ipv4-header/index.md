---
title: IPv4 Header 
---
## IPv4 Header Format

Below is the IPv4 header format according to [RFC791](https://tools.ietf.org/html/rfc791):

![Image of IPv4 Header](https://i.imgur.com/5ys9G3k.png)


##### Version [4-bits]
  * Internet Protocol (IP) version number (decimal 4, binary 0100, hex 4)
##### Internet Header Length (IHL) [4-bits]
  * Length of the IPv4 header
  * The value of the IHL is measured in 32-bit words
    * A value of 5 specifies the length of the header is 5 * 32-bits = 160bits = 20 bytes
    * The minimum value of an IPv4 header is 20 bytes

##### Differentiated Services Code Point (DSCP) [6-bits]
  * This value is used by network devices to determine precedence of an IP packet [[RFC2474](https://tools.ietf.org/html/rfc2474)]
  * Rules can be created on network devices to handle different DSCP values appropriately
    * For example - VoIP traffic may be given a DSCP value of 46 (binary 101110, hex 0x2E) which may inform a network device this packet should be given high priority

##### Explicit Congestion Notification (ECN) [2-bits]
  * An optional feature that allows communicating end hosts to identify network congestion without necessarily dropping packets.
  * ECN feature is only available if the underlying network infrastructure also supports it.
##### Total Length [16-bits]
  * Length of the packet, including the header.
  * This value is measured in bytes (8-bits), and has a maximum value of 2^16 - 1 = 65,535 bytes
##### Identification [16-bits]
  * Assigned by the sending host to help in assembling the fragments of a packet
##### Flags [3-bits]
  * Used to determine if a packet may be fragmented or to inform the receiving host that additional fragmented packets are inbound
  * The Do Not Fragment (DF) bit is used when a packet may not be fragmented.  If a device must fragment the packet because the packet is larger than the Maximum Transmission Unit (MTU) of the link, the packet is dropped
##### Fragment Offset [13-bits]
  * The calculated offset for a fragmented packet relative to the beginning of the original unfragmented packet
  * Measured in 8-byte blocks
  * Maximum value is (2^13 - 1) * 8 = 65,528 bytes 
##### Time To Live (TTL) [8-bits]
  * The amount of time (in seconds) a packet is allowed to remain in the network
  * This value is increased by one second at each network device encountered
  * When the value reaches zero, the packet is discarded
##### Protocol [8-bits]
  * Similar to the Next Header field in IPv6, this field specifies the protocol encapsulated in the IPv4 packet
  * For example, TCP Protocol Number 6 would be binary 110, hex 0x6
##### Header Checksum [16-bits]
  * The checksum is the 16-bit [one's complement](https://www.cs.uaf.edu/2004/fall/cs301/notes/node41.html) of the one's complement sum of all 16-bit words in the header. [[RFC792](https://tools.ietf.org/html/rfc791#page-14)]
##### Source IP Address [32-bits]
  * The source IP address of the sender of the packet
##### Destination IP Address [32-bits]
  * The destination IP address for the receiver of the packet
##### Options [32-bits]
  * Specifies additional options
  * Only present if the IHL is greater than 5, meaning the length is more than 5 * 32-bit words or 160-bits or 20 bytes - the length of a standard IPv4 header without options
  * Options must include additional padding if they do not completely fill a 32-bit word boundary



#### More Information:
  * IP Option Numbers [[iana.org]](https://www.iana.org/assignments/ip-parameters/ip-parameters.xhtml)
  * List of IP protocol numbers used in the Next Header [[iana.org]](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

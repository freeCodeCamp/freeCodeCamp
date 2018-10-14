## IPv4 Header 
### Introduction
Internet Protocol version 4 (IPv4) is the fourth revision in the development of the Internet Protocol (IP) and the first version of the protocol to be widely deployed. 

IPv4 is a connectionless protocol for use on packet-switched Link Layer networks (e.g., Ethernet). It operates on a best effort delivery model, in that it does not guarantee delivery, nor does it assure proper sequencing or avoidance of duplicate delivery. These aspects, including data integrity, are addressed by an upper layer transport protocol , such as the Transmission Control Protocol (TCP).

An **IPv4 header** is a prefix to an IP packet that contains information about the IP version, length of the packet, source and destination IP addresses, etc.

![IP Encapsulation](https://www.tutorialspoint.com/ipv4/images/ip_encapsulation.jpg)

IPV4 header contains all the necessary information to deliver the packet at the other end.

![IP Encapsulation](https://advancedinternettechnologies.files.wordpress.com/2012/01/ipv4-header.png)

The IPv4 packet header consists of 14 fields, of which 13 are required. The 14th field is optional named: options.

**Version**:- The first header field in an IP packet is the four-bit version field. The Version field indicates the format of the internet header. Version identifies the IP version to which the packet belongs.

**Header length or Internet Header Length (IHL)**:- The second field (4 bits) is the Internet Header Length (IHL) telling the number of 32-bit words in the header. Since an IPv4 header may contain a variable number of options, this field specifies the size of the header (this also coincides with the offset to the data). 

**Type of Service(ToS)**:– now known as Differentiated Services Code Point (DSCP). The TOS field is used to carry information to provide quality of service features. New technologies are emerging that require real-time data streaming and therefore make use of the DSCP field. *An example is Voice over IP (VoIP) that is used for interactive data voice exchange.*

**Explicit Congestion Notification (ECN)**:-It allows end-to-end notification of network congestion without dropping packets. ECN is an optional feature that is only used when both endpoints support it and are willing to use it. It is only effective when supported by the underlying network.

**Total Length**:- This 16-bit field defines the entire datagram size, including header and data, in bytes. The minimum-length datagram is 20 bytes (20-byte header + 0 bytes data) and the maximum is 65,535 bytes — the maximum value of a 16-bit word. The minimum size datagram that any host is required to be able to handle is 576 bytes, but most modern hosts handle much larger packets.

**Identification**:– This field is an identification field and is primarily used for uniquely identifying fragments of an original IP datagram. Some experimental work has suggested using the ID field for other purposes, such as for adding packet-tracing information to datagrams in order to help trace back datagrams with spoofed source addresses.

**Flags**:–A three-bit field follows and is used to control or identify fragments. 

**Time To Live (TTL)**:-It is of 8 bit field. This field indicates the maximum time the datagram is allowed to remain in the internet system. If this field contains the value zero, then the datagram must be destroyed. This field is modified in internet header processing. The time is measured in units of seconds, but since every module that processes a datagram must decrease the TTL by at least one even if it process the datagram in less than a second, the TTL must be thought of only as an upper bound on the time a datagram may exist.

**Protocol**:-This field defines the protocol used in the data portion of the IP datagram.

**Header Checksum**:- The 16-bit checksum field is used for error-checking of the header. At each hop, the checksum of the header must be compared to the value of this field. If a header checksum is found to be mismatched, then the packet is discarded. Errors in the data field must be handled by the encapsulated protocol and both UDP and TCP have checksum fields.

**Source address**:- Sets the source IP address. This option lets you specify a custom IP address to be used as source IP address in sent packets.

**Destination address**:- An IPv4 address indicating the receiver of the packet. As with the Source address, this may be changed in transit by a network address translation device.

**Options**:-Additional header fields may follow the destination address field, but these are not often used. The value in the IHL field must include enough extra 32-bit words to hold all the options (plus any padding needed to ensure that the header contains an integral number of 32-bit words).

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information on IPv4 header visit the links below:
https://www.tutorialspoint.com/ipv4/ipv4_packet_structure.htm

https://advancedinternettechnologies.wordpress.com/ipv4-header/

https://en.wikipedia.org/wiki/IPv4_Header


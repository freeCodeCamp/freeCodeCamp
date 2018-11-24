---
title: ICMP Header
---
## ICMP Header Format

Below is the Internet Control Message Protocol (ICMP) header format for IPv4 according to [RFC792](https://tools.ietf.org/html/rfc792):

![ICMP Header](https://i.imgur.com/W3amiIr.png)

ICMP for IPv4 is encapsulated within an IPv4 packet and contains a data section that includes a copy of the entire IPv4 header along with at least the first 64 bits (8 bytes) of the original datagram's data.  The additional 8 bytes of data is used by the receiving host to match the message to an internal process.  IP-in-IP tunneling (encapsulating an IP packet within another IP header), adds additional bytes in the form of the added IPv4 header(s) and may require additional bytes are included in the data portion of the ICMP packet to allow the host to identify the associated process [[RFC1812](https://tools.ietf.org/html/rfc1812#section-4.3.2.3)].

ICMP packets for IPv4 may not exceed 576 bytes in length, including headers.

##### Network Address Translation [NAT]
* During traffic flow, packets are sent out in order to remap an IP address to modify to another address. This process only works with IPv4. Lastly, this is process ensures that IPv4 addresses will not run out by IP modification on a normal basis. 

##### Type [8-bits]
  * Type field refers to the type of ICMP message
  * Some useful ICMP types include:
    * `8` - Echo Request
    * `0` - Echo Reply
    * `3` - Destination Unreachable
    * `5` - Redirect Message
    
##### Code [8-bits]
  * Code field provides additional details for the ICMP message
  * Example Codes for Type 3 Destination Unreachable Requests:
    * `0` - Net Unreachable
    * `1` - Host Unreachable
    * `2` - Protocol Unreachable
    * `3` - Port Unreachable
  
##### Checksum [16-bits]
  * Calculated from the ICMP header and data as an error detection mechanism to determine if data was changed in transit.
  * The checksum is the 16-bit [one's complement](https://www.cs.uaf.edu/2004/fall/cs301/notes/node41.html) of the one's complement sum of the ICMP message starting with the Type field. [[RFC792](https://tools.ietf.org/html/rfc792)]


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
 * [IANA assignments of ICMP Types/Codes/Extensions](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml)

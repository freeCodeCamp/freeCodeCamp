---
title: IPv6 Header
---
## IPv6 Header Format

Below is the IPv6 header format according to [RFC2460](https://tools.ietf.org/html/rfc2460):

![Image of IPv6 Header](https://i.imgur.com/Jq0eKrO.jpg)

##### Version [4-bits]
  * Internet Protocol (IP) version number (decimal 6, binary 0110)
##### Traffic Class [8-bits]
  * Identifies different classes or priorities of IPv6 packets
##### Flow Label [20-bits]
  * Services that require special handling can utilize this field (defaults to all 0's)
##### Payload Length [16-bits]
  * Specifies the size of the payload including extension headers.  Value is measured in Octets (8-bit values)
##### Next Header [8-bits]
  * Specifies the type of the next header after the IPv6 header
##### Hop Limit [8-bits]
  * Number of hops before the packet is discarded
  * Value is decremented by each forwarding node in the network.  When the value reaches 0, the packet is discarded
  * Maximum hops using 8-bits is `2^8` or 256 hops
##### Source Address [128-bits]
  * The IPv6 address of the device sending the packet
##### Destination Address [128-bits]
  * The IPv6 address of the device(s) destined to receive the packet
  * Destination may be more than one host/device when using Multicast/Anycast

#### More Information:
* [List of IP protocol numbers used in the Next Header](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers)

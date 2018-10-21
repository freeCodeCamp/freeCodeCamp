---
title: ICMP Header
---
## ICMP Header Format

Below is the ICMP header format according to [RFC792](https://tools.ietf.org/html/rfc792):

![ICMP Header](https://i.imgur.com/W3amiIr.png)

##### Type
  * Type field refers to the type of ICMP message
  * Some useful ICMP types include:
    * 8 - Echo Request
    * 0 - Echo Reply
    * 3 - Destination Unreachable
    * 5 - Redirect Message
    
##### Code
  * Code field provides additional details for the ICMP message
  * Example of some useful codes for Type 3 Destination Unreachable Request:
  
  

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



---
title: UDP Header
---
## UDP Header Format


The User Datagram Protcol (UDP) is is one of the commonly used protocols in the Internet Protocol (IP) suite along with TCP and ICMP. UDP's defining features are that is a fast, connection-less protocol. These features are facilitated through the UDP Header.

The UDP Header is made of the following four fields: 

  - Source Port (16 bits):
    The port used on the senders computer for the UDP connection also refered to as the sending port. When combined with the senders IP it     allows the sending computer to create multiple, separate connections (known as Multiplexing).
    
  - Destination Port (16 bits):
    The port used on the receiving computer for the UDP connection also refered to as the receiving port. When combined with the receivers     IP it allows for multiplexing.

  - Length (16 bits):
    Specifies the length of the UDP header and data.
    
  - Checksum (16 bits):
    Used for error checking the header and data. Optional.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



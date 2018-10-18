---
title: VPNs
---
## VPNs

VPN is a private network that uses a public network to create an encrypted connection for users, thus ensuring security and privacy. It was widely adopted by businesses to allow its employees to be able to connect to the company’s network remotely, and later adopted as a software product for everyday customers. 

A common analogy of how VPN works is an island. In short, VPNs serve as an island for its customers on the way to its destination. When the client reaches its destination, you can’t tell where is the original source of the client - you only know that it came from the island. To extend this analogy, we say that we actually have a network of islands, and we can only travel between them in a provided submarine, and no one can see what’s going on inside the submarine.

Let’s break down this analogy in technical terms. We said that VPN serves as an island, that is, all client traffic has to go through the VPN servers. When the destination server (say, google.com) sees a request packet, it only sees VPN's IP address as the source of the packet - therefore it’ll send the response packet back to the VPN server. 
  
Now here comes the second part - the submarine. VPN is based on a concept called tunnelling. To understand tunnelling, we need to be familiar with the term encapsulation. Encapsulation is essentially when a protocol attaches a header with protocol-specific information (metadata) to  the packet - thus encapsulating it. In networks, encapsulation describes how different network layer protocols (application layer, transport layer , network layer, etc.)  encapsulate each other to move a packet from source to its destination. For VPNs, this header will be a way to make sure that the packet gets to its destination, its response gets rerouted back to the source client, and the whole connection remains encrypted.
  
Encryption is the last bit we need to visit in order to understand tunneling. To help ensure confidentiality of the data as it travels through the Internet, the VPN client will encrypt the packet and send it to the VPN, which will then decrypt that packet. Since the contents of the packet are encrypted, someone who would intercept it wouldn’t know neither the “actual” destination of the packet (e.g. google.com), nor the contents of it. They can only see that the packet is going to the VPN, and only the VPN servers have access to the information inside that packet. 
  
Once the encrypted data gets to the VPN, it’s decrypted and then sent from one edge server of the VPN to another through a "tunnel”. How is this achieved? Encryption again. The edge server that received the client packet will encrypt it and send it to the other edge server that can then decrypt it. However, this communication will still happen on the Internet, so you can see why this tunnel is called a “virtual private network”. It’s not exactly private in a sense that it’s isolated from the rest of the world, but the encryption mechanism makes it private over a shared network. Once the packet is decrypted on the other end of the VPN, it’s ready to be sent to the ‘actual’ destination. Remember, since the VPN acts as an island, the destination server only knows that it came from the VPN server, not the VPN client. 
  
In practice, this mechanism is often implemented with IPSec which is a widely used protocol for securing traffic on IP networks, including the Internet. IPSec has manyunderlying encryption protocols for different modes and uses, such as IPSec Encapsulation Security Payload, and IPSec Authentication Header, and Point-to-Point protocols.

#### More Information:
[How VPNs work](https://technet.microsoft.com/pt-pt/library/cc779919(v=ws.10).aspx) - a guide by Microsoft

[How VPNs work](https://computer.howstuffworks.com/vpn1.htm) - a guide by HowStuffWorks

[Overview of IPSec](https://www.routeralley.com/guides/ipsec_overview.pdf) 

---
title: Basic Networking
---
## Basic Networking

In order for computers to connect, both computers must first run a piece of code that is requesting certain packets to be scanned in from the kernel. When the code on either computer is ready to send data, it gives it to the kernel to send it out.

Many packets land on our **__Network Interface Card__** (NIC) but none of these packets are given to our application -- without asking the Kernel, first!

Writing Network Programs, or better put, asking the Kernel for network data, involves the __Berkley Socket Interface__ (for Apple's OSX and systems with the Linux Kernel) or the __Winsocket Interface__ (for Windows). 

So, *what is a socket?*

## What is a Socket?

A socket is a representation of a connection with another machine. This representation is a way for you to communicate to the Kernel what IP address you want to hear from (read from) and what you want to say to this IP address (write).

When you create a socket, you signal to the Kernel that you want to send and recieve packets to a certain address. The Kernel maps a socket structure into memory that contains settings that allow you to have more control over what the Kernel does for you such as specifying which part of the packets you're interested in and to some extent control how the Kernel behaves. The socket structure also holds the data that you wanted along with flags for lower-level events that occur (such as a closed connection from the other machine, which results in recieving a FIN packet).

The great thing is, sockets are an abstraction over the actual data you recieve from a specific computer and it is treated exactly as a file. In fact, the Kernel gives you a file descriptor -- called a socket descriptor -- which represents the offset in the Kernal's array of open-socket-blocks that represent the specific socket you're interested in. You can perform most file operations on a socket (using the socket-descriptor), including read(), write(), and close(). Each connection your application makes with each different machine is given its own separate socket. This way you can distinguish between all the different IP addresses that your program connects to.

Undoubtedly, more questions have been created from this answer. Bit by bit digest the details and hold on to what's important. At the end of each sub-topic there will be a __takeaway__, the takeaway is all you need to know, anything more you can recall later is simply icing on the cake.

### Takeaway
**__Sockets are a representation of an internet connection that allow us to read and write to another computer without worrying about how the messages are getting to and from the other machine.__**

## Socket/Network Programming

When we say __Socket Programming__ we really mean __Network Programming Using Sockets__. __Network Programming__ is programming an application on a computer to exchange data with another application that is running on another computer. Actually, it could even be used to send data between applications that are running on the **same computer**... a socket connection with yourself..

__*Can you write Network Programs without using sockets?*__ Uhh, sure.. sockets are a medium between you and your Network Drivers, provided by the Kernel, for convenience. So you'll need to find out who made you're NIC card, read their manual, delete your network card driver, and then write your own network card driver and network device drivers, implement your own network stack, and then provide your own way of representing a network connection and add it as a Kernel Module (a network API). Not in the scope of this guide (gulp). [Here's a start in user-space using existing linux drivers and kernel calls](https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp) the rest is on you, little Linus :)

__*How do you connect to another application running on another machine using sockets?*__ __First__, we need to know which type of socket (ie which protocol) we want to use to talk with the other application on the other machine. __Second__, we need to request that the Kernel creates a socket for our application. __Third__, we need to figure out if we want to **start connections** or **wait for connections**, this depends on what we are building (We can actually do both but will need separate sockets, one for taking connections one for making connections).

### 1: Choosing the Type of Socket
There are 3 types of sockets: Stream-Sockets (or TCP Sockets), User-Datagram-Sockets (or UDP Sockets), and Raw-Sockets (Your own protocol).

#### TCP Sockets
Stream-Sockets are used for TCP connections. The Transport Control Protocol (TCP) is a type of conversation between two computers where each computer waits for a response after sending a message to another computer. This response "acknowledges" all of the packets recieved, if all of the packets recieved are not acknowledged, the sender automatically resends the packets (we don't have to worry about any of this, just know that we can gauruntee all the data will have reached the other computer). [See TCP Windowing for more information](https://www.youtube.com/watch?v=hkXPXJA8-UA)

Commonly used for writing HTTP/1.x, HTTPS, HTTP/2 servers and clients (ie how NGINX and Apache **wait for connections** on a website, and how google chrome **starts connections** to visit those websites). Also used in ssh and email **servers** and **clients**, which we will talk about clients vs servers later.

#### UDP Sockets
User-Datagram-Sockets are used for UDP connections. The User Datagram Protocol (UDP) is a type of conversation between two computers where neither computer requires confirmation that all packets were recieved. Applications send data to each other at will, without needing to wait. This is faster, results in less traffic on the wires and wifi (not sending Acknowledgments -- or ACK packets), but must be carefully implemented so that data is not being dropped on the other end (ie if you send more data than the other computer can hold on to, it will never see that data, this happens when a computer has more connections than it can handle)

Commonly used for a site or application offering a video streaming service, communication between machines in a companies network, is part of Google's QUIC protocol which will be a part of the new HTTP/3.

#### Raw Sockets
Here you have pure IP connections. This is primarily used for routers, and yes, routers also use sockets (in most cases).


#### Clients VS Servers
A client is a network program that **starts a connection** with another machine. A server is a network program that **waits for a connection** with usually more than one machine. The website you are on now, is a server, the client is your web browser; ie, Chrome, Safari, Edge.

A client connects to a server using a socket, the server has one socket devoted to waiting for connections and for each new connection it creates a new socket to distinguish between the different client-connections. More later.

### Takeaway
Stream Sockets are used for TCP connections, we can call them TCP Sockets, Datagram Sockets are used for UDP connections, we can call them UDP Sockets. A client creates a socket and "connects" to a server, a server creates a socket and "listens" for connections. More on that later. Raw sockets are only used when a custom protocol is wanted or if someone wants to manually control the TCP / UDP from the IP level in user space, ie don't worry about it, even if you're writing a network server for a tech giant, you wouldn't need to worry about it..

### 2: Requesting the Socket
For Windows, this the socket function
```C
#include <Winsock2.h>
SOCKET WSAAPI socket(       /* The Kernel Asks:  
  int addressFamily,        // What format will the IP Address be in?
  int socketType,           // What kind of socket do you want?
  int protocol              // What protocol? A bit redundant since the socket type usually gives this away*/
);
```
As you can see the sharp difference between the same socket function for Linux, OSX, and BSD below
```C
#include <sys/socket.h>
int socket(                 /* The Kernel Asks:  
  int domain,               // What format will the IP Address be in?
  int socketType,           // What kind of socket do you want?
  int protocol              // What protocol? A bit redundant since the socket type usually gives this away*/
);
```
Both return a socket descriptor, in the Berkley Socket API (linux/osx/bsd) the type is an int, in the Winsock2 API it's still a number but it's wrapped in a typedef as SOCKET WSAAPI... confusing.. but.. ok. Don't worry yet.

#### Address Family / Domain
When we call `socket()` we need to give it the first parameter -- this is the Address Family, or interchangeably the domain. This is the format that the address will be in. There is IPv4 and IPv6. IPv6 was invented to increase the total number of possible unique IP addresses since an IPv6 address is 16 bytes so 128 bits which is 2^128 - 1 (340,282,366,920,938,463,463,374,607,431,768,211,456) possible unique addresses, whereas IPv4 is 4 bytes so 32 bits which is 2^32 - 1 (4,294,967,295) possible unique addresses. Idk they are preparing for the way future. Cell phones use IPv6 addresses.. usually.. no almost always, they aren't required to but they do.

All IPv4 addresses can be converted to IPv6, but not all IPv6 addresses can be converted to IPv4. [Here's a tool](https://www.ultratools.com/tools/ipv4toipv6). The "shorthand" for IPv6 addresses can be very confusing. It's really easy. But looks confusing. All consequtive zeros can be substituted with '::'. So IPv4 address 127.0.0.1 => IPv6 0000:0000:0000:0000:0000:ffff:7f00:0001 == 0:0:0:0:0:ffff:7f00:1 == ::ffff:7f00:1 (technically, *this* specific address can be shortened to '::1' only because this is a special address -- the loopback address -- more on that later)

You really don't even need to worry about IPv6 addresses or even worry about IP address formats at all, just for extra info. We will use functions to find addresses and get the format right.. don't worry yet.

So now that we see there's different ways an address can be written -- one is a really long string of bytes, the other is a really short string of bytes -- the kernel needs to know which one we want to use. Or we could choose either, as in not specify it... here's the values you can pass to the first argument of the socket() function:
```C
/* In Winsock2.h  ie windows */
#define AF_UNSPEC 0      // IPv4 or IPv6
#define AF_INET   2      // IPv4
#define AF_INET6  23     // IPv6

/* In socket.h   ie anything not-windows */
#define AF_UNSPEC 0     // IPv4 or IPv6
#define AF_INET   2     // IPv4
#define AF_INET6  4     // IPv6 
// you'll sometimes see PF instead of AF, it stood for protocol families, literally the same as address families
#define PF_UNSPEC AF_UNSPEC  // IPv4 of IPv6
#define PF_INET   AF_INET    // IPv4
#define PF_INET6  AF_INET6   // IPv6
// I told you.. it's literally the same as address families, you'll see other explanations online that will use PF_INET and AF_INET and think to yourself "am I missing something? Just ignore it"
```
So far, our socket() call could look like this 
```C
socket(AF_UNSPEC, ..., ...);
```
Or this
```C
socket(0, ..., ...);
```
Or
```C
socket(PF_UNSPEC, ..., ...);
```
#### Socket Type
The socket type is just as we described above. Are we going to have a TCP socket or a UDP socket. TCP socket for the example. But let's look at the definitions for some of the types:
socket.h and winsock2.h (ie, works on windows/linux/osx/bsd)
```C
#define SOCK_STREAM 1     // Stream-Socket / TCP-Socket
#define SOCK_DGRAM  2     // User-Datagram-Socket / UDP-Socket
#define SOCK_RAW    3     // Raw-Socket
```
Since TCP is currently used for HTTP/1.x and HTTPS and HTTP/2 and HTTP/3 will fall back on HTTP/2, we will use TCP. Although, HTTP/3 and further implementations will likely continue to optimize UDP for the web.

So our socket() call could look like this
```C
socket(AF_INET, SOCK_STREAM, ...);
```
Or
```C
socket(0, 1, ...);
```
#### Protocol
Again, redundant, but here's the definitions:

*__Defined in winsock2.h for windows, all others need to now include <netinet/in.h> to include these macros instead of using the plain numbers (looking back it will be tricky to remember why you chose those numbers!)__*
```C
#define IPPROTO_TCP  6
#define IPPROTO_UDP  17
```
So our socket() call can look like this
```C
socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
```
Or
```C
socket(0, 1, 6);
```
### 3: Choose between Client or Server, or both
We need to get the IP addresses involved now... thought you could escape that? 

There are two possible ways we could continue:
1. __Get the IP address of the machine we want to connect to, and continue as a client__ then call connect() after getting the remote-machine's address info (multiple ways to do this, don't worry yet) and our socket to connect our socket to a remote address.
2. __Get an IP address on our own machine and wait for clients to connect to us, and continue as a server__ we need to call bind() after specifying one of the local addresses (more on local addresses in a second) this will let the Kernel know that we want all incoming connections on a certain local address from a certain port (more on ports in a second don't worry)

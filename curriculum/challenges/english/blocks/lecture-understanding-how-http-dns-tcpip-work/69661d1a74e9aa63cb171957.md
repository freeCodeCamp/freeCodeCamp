---
id: 69661d1a74e9aa63cb171957
title: What is DNS and How Does it Work at a High Level?
challengeType: 19
dashedName: what-is-dns-and-how-does-it-work-at-a-high-level
---

# --description--

When you visit a website, the first thing you do is type in a web address in your browser.

For example, to go to freeCodeCamp, you would enter `freecodecamp.org` in your browser’s address bar.

This is known as a domain name. It’s a unique human-readable identifier for that resource on the internet.

Domain names are very closely related to the concept of DNS, which is the main topic of this lesson. Let’s start by talking a little bit about the domain name hierarchy, so you can understand how a DNS works behind the scenes.

The domain name hierarchy is read from right to left, moving from the most general category to the most specific one.

The main structure of a domain name is, from right to left:

* **Top-Level Domain (TLD):** the last segment of the domain name, located to the right. In the case of `freecodecamp.org`, that would be `.org`. Other examples include `.com` and `.edu`.
    
* **Second-Level Domain (SLD):** the name registered by the person or organization. That would be `freecodecamp` in `freecodecamp.org`. This is what you usually notice first when you see a web address.
    
* **Third-Level Domain (Subdomain):** used to identify a specific section of the main domain. For example, `www`, which stands for “World Wide Web.” Nowadays, modern web servers automatically handle domain routing, so you can access a website with or without entering `www`. Other examples of subdomains include `blog.`, `shop.`, `support.`, and `api.`.
    

Domain names are very helpful to us as humans because they’re easy to remember and type into a browser. However, as you know, computers work with numbers. Your browser has to transform the domain name that you entered into something known as an IP address to find the website you are looking for.

An **IP address** is a unique sequence of numbers that identifies a computer on a network, such as the internet.

IP addresses are essential for allowing clients to send requests to the correct servers and get the appropriate responses. An example of an IPv4 address is `127.0.0.1`. The equivalent IP address in a newer standard called IPv6 would be `0:0:0:0:0:0:0:1`.

There is a lot to learn about IP addresses, and you might want to explore them in more depth as you continue learning. But for now, you just need to understand that they are the unique numerical addresses used to identify computers on a network.

From the concepts of domain names and IP addresses, now we can reach the concept of DNS.

DNS stands for **Domain Name System**. This is usually referred to as the “phone book” of the internet.

The DNS translates the domain name that you write on your browser to its corresponding IP address. It’s a hierarchical and decentralized naming system for computers and devices that are connected to the internet or a specific network.

When the user enters a domain name in the browser, such as `freecodecamp.org`, the DNS maps that name to the IP address of its corresponding server. Once the server has been identified, the client’s request is sent to the server. The server handles that request based on how it was programmed, and it finally sends a response to the client. This completes the request-response cycle.

This is all possible thanks to the DNS that performed that initial conversion to the target IP address.

Let’s dive into the details of the DNS resolution process.

## The DNS Resolution Process

* DNS resolution works by sending a query through a chain of DNS servers.

* When you (the user) enter a domain name on the browser, the **client** sends a request to a local DNS server. This local DNS server is known as the **Recursive Resolver**. This is usually managed by your internet service provider (ISP).
    
* The Recursive Resolver forwards that request to **Root Servers**. These are general servers that do not have direct information about IP addresses. They work by directing the Recursive Resolver to a more specific server, specifically to the Top-Level Domain (TLD) Server for the particular top-level domain of the request. For example, the server responsible for all `.org` domains.
    
* The Recursive Resolver then queries the **Top-Level Domain (TLD) Server**. This server returns the address of the specific Authoritative Name Server that holds the records for the domain that was requested (for example, `freecodecamp.org`).
    
* The Recursive Resolver starts a final query to the corresponding **Authoritative Name Server.** If the **DNS record** is found, it is returned to the Recursive Resolver.
    
* When the Recursive Resolver receives the IP Address, it delivers it to the client, so you can start browsing the website.

The Authoritative Name Server returns **DNS Records**, not just IP addresses. DNS Records are structured text entries that contain important information about a domain, such as subdomain information, how long the information should be cached, and information required to perform the service requested.

To optimize the process, the Recursive Resolver caches the DNS Record temporarily to speed up the process. This way, you won’t be making the same request repeatedly in a short time period. That makes the overall process much more efficient.

As you can see, DNS Servers are essential because they provide the initial, critical step of translating domain names into IP addresses. This translation process allows every client to locate and connect to the correct server. Without this directory system, the client-server model, the backbone of the modern web, would not be functional.

# --questions--

## --text--

The Domain Name System (DNS) is frequently compared to which real-world service?

## --answers--

A Library Catalog

### --feedback--

The service it is compared to involves looking up a familiar name to find a corresponding numerical address.

---

A Phone Book or Directory

---

A Global Positioning System (GPS)

### --feedback--

The service it is compared to involves looking up a familiar name to find a corresponding numerical address.

---

A Barcode Scanner

### --feedback--

The service it is compared to involves looking up a familiar name to find a corresponding numerical address.

## --video-solution--

2

## --text--

What is the main problem that the Domain Name System (DNS) was invented to solve for internet users?

## --answers--

To encrypt all communication between a client and a server for security.

### --feedback--

Focus on the difference between how humans prefer to identify things (names) and how computers need to identify them (numbers).

---

To compress website files so they load faster on slow connections.

### --feedback--

Focus on the difference between how humans prefer to identify things (names) and how computers need to identify them (numbers).

---

To host all website files and content on a single centralized server.

### --feedback--

Focus on the difference between how humans prefer to identify things (names) and how computers need to identify them (numbers).

---

To allow humans to use easy-to-remember domain names instead of complicated numerical IP addresses.

## --video-solution--

4

## --text--

Which component in the DNS resolution process is responsible for performing the multiple iterative queries to find the final IP address?

## --answers--

The Root Server

### --feedback--

This component acts as an intermediary, taking the client's single request and traversing the server hierarchy.

---

The TLD Server

### --feedback--

This component acts as an intermediary, taking the client's single request and traversing the server hierarchy.

---

The Recursive Resolver

---

The Authoritative Name Server

### --feedback--

This component acts as an intermediary, taking the client's single request and traversing the server hierarchy.

## --video-solution--

3

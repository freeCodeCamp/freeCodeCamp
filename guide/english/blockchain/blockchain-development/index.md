---
title: Blockchain Development
---

#### Blockchain engineering can break down into several subcategories, each with their own set of tools and goals:

1. Development **_of_** Blockchain
2. Development **_on_** Blockchain
3. Blockchain Applications

#### DEVELOPMENT **_OF_** BLOCKCHAIN
One facet of blockchain engineering is the actual development of blockchain technology. This includes doing things like contributing to the codebase of a major chain to, say, change their consensus protocol, or building a new blockchain entirely. This task is best thought of as language-agnostic, which is the case in many situations. Because blockchain is a digital ledger, however, it’s more of a concept than a “program”. This means that one can build “a blockchain” using any language. For example, Ethereum can be (and has been) written in Python, Go, Java, etc., and each one of these versions is called an ‘implementation’. All of them communicate with the Ethereum network despite existing in their own language and running their own client code.

A person interested in getting into this side of blockchain engineering can do things like learn about the philosophies underpinning blockchain technology and use their chosen language to build a new protocol from the ground up, or pick an implementation of an existing blockchain and use the correct language to contribute to the codebase. You could even build a new implementation of an existing protocol in a language that hasn’t been used yet!

#### DEVELOPMENT **_ON_** BLOCKCHAIN
Separate and distinct from this is doing development work on a given blockchain platform. Just because a chain has been implemented and runs on nodes around the world doesn’t mean that there is nothing else we can do with it. Blockchain has the power to run smart contracts (self-executable contracts, written in and triggered by code), run decentralized applications (dApps), even power entire protocols like the world wide web. Just as we use programs to write programs (for example, you likely use an IDE to write mobile apps), we can use blockchain to write blockchain “programs”. But building the IDE is very different from building the mobile app, and blockchain is no different.
Take, for example, a project like Bitcoin. Bitcoin was originally implemented in C++ (and is now in Java, Python, etc.), but this is nothing more than a client that runs the protocol. But what if you want to use smart contracts (a popular feature of many blockchain protocols)? Or build a dApp? This is a different task with a different set of tools. 
The best way to think about this is to think of blockchains as a platform. To take a more concrete example than IDEs, most people are familiar with a tool like Microsoft Excel. Excel first existed as an idea (“a relational spreadsheet”), and was then implemented as a real program using such languages as assembler, C, C++, etc. (although, for simplicity’s sake, I’ll pretend that Excel only has a C++ implementation). This maps onto blockchain in that the idea of a “digital ledger” has been implemented using various languages like Python or Go. But there are also things that can be done with Excel that require languages beyond C++. Formulas use their own language, and despite the fact that Excel has been implemented in C++, using C++ to write a vLookup or summation formula would not go well. This is because using these aspects of Excel requires a completely different syntax!

The same thing is true about blockchains. Developers have implemented Ethereum in a wide variety of languages, but if you want to write smart contracts, you’ll need to use an Ethereum-specific language called Solidity (once called Serpent, and evolving into Vyper). Just like Excel only understands formulas and macros written in a specific language that need not be the original implementation language, all Ethereum clients only understand smart contracts written in Solidity regardless of the implementation language. But this doesn’t mean that Solidity can be used for any development on any blockchain—smart contracts on Bitcoin use a different language, called Bitcoin Script, while other projects (such as Neo) have adopted more standard languages such as Java, C#, Python, etc. for smart contract and dApp building.

#### BLOCKCHAIN APPLICATIONS
There is a third subset of blockchain engineering that is more about getting non-blockchain applications to interact with blockchain technology. So far, we’ve discussed something like a closed ecosystem—a digital ledger idea, and then the implementation, and then coding on that ledger. But thinking back to our Excel analogy, what if we want more? What if we want other applications to be able to act with our product? With something like Excel, this may look like, say, a banking app. We may have a C++ implementation of Excel. We may also recognize that this implementation is able to write formula code in its native language, in the application. But then, we may want a banking website on the internet to be able to write to an Excel sheet and read data from the sheet. This site may be completely outside of the Excel ecosystem—it may have been written in javascript, and run on a browser written in a completely different language, all hosted on a distinct platform (the internet).

We have similar goals with blockchain technology. One major use for blockchain is to build cryptocurrencies, such as Bitcoin or Ethereum. We may have the implementation and the native language, but what if we want a website that tells us how many Bitcoins we have? Or how much Ether? We need some way for one environment (the internet and a web browser) to interface with another environment (say, the Ethereum network). This is yet another dimension of blockchain engineering. To build applications that can communicate outside of a blockchain environment, we need to have one foot in both worlds. This is less about coding in a given implementation language or a smart contract language, and more about using different protocol languages and libraries to build the bridge. For example, one of the ways to get Ethereum blockchain data via the internet is by using Javascript to leverage the Web3 libraries to talk to the Ethereum network and pull real-time data. This is blockchain engineering, as it’s a critical component of the technology stack—but most of this work uses much more familiar languages.



### Resources
- [Bitcoin Developer Guide](https://bitcoin.org/en/developer-guide)

- [Ethereum Development Tutorial](https://github.com/ethereum/wiki/wiki/Ethereum-Development-Tutorial)

- [Solidity Documentation](https://solidity.readthedocs.io/en/v0.5.3/)


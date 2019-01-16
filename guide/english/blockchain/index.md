---
title: Blockchain
---

# Blockchain

## Introduction
If you want to know what is a Blockchain but have no understanding of the technology, then this is for you, my friend!

Blockchain is a new technology that is able to resolve many modern problems including money transfer, a difficult problem indeed.

But let’s study what a blockchain really does for us.

![What Blockchain means](https://cdn-images-1.medium.com/max/800/0*QKJVQSLjey6I1pdU.png)

Looking at the above example, Andi wishes to transfer some form of valuable data to his manager, Kevin.

- Andi passes the data to Kevin
- Andi’s transaction to Kevin is logged within his blockchain ledger
- On the receiving end (Kevin’s), the ledger is also updated with the transaction which Andi just made

Hence you could understand that there are two duplicate copies of the exact transaction Andi just made. But hey, this is a very simple overview. Now, let’s go in depth.

In an actual scenario, Andi won’t be able to transfer ‘whatever data‘ directly to Kevin.  He would instead go through a series of networks (which contains nodes of the blockchain - individuals like Andi and Kevin) just to transfer the data.

This is what it looks like:

![How Blockchain Works Like?](https://cdn-images-1.medium.com/max/800/0*ywNY7Z4nnxMpx5Ae.png)

Essentially, for Andi to transfer any form of data, this is the process:

- Andi passes the data to the next node after his Andi’s transaction to Kevin is logged within his blockchain ledger
- The next node’s ledger is also updated with the transaction which Andi just made
- This continues until the data is received by Kevin and also updated in Kevin’s ledger

Simple, isn’t it?

Well, now let’s move on in understanding on the construction of the blocks in a blockchain.

![construction of blocks within blockchain](https://cdn-images-1.medium.com/max/1400/0*TsdaupTghK3lOhnr.png)

A blockchain consists of blocks in which the current block refers to the earlier block using a hash.

For example, the latest block present in a Blockchain would refer / call to the previous block using the previous block’s hash number and would also declare its current hash using a cryptographic hashing algorithm.

When the next node is going to be created, it creates it’s newest hash number using a cryptographic hashing algorithm and indicates the previous hash number in the block itself.

I know some of you coders might assume this is a `linked list`, but hang on — yes, this is based on `linked list`!

## Blockchain
> "Is a decentralized database that stores a registry of assets and transactions across a peer-to-peer network. Is basically a public registry of who owns what and who transacts what. The transactions are secured by cryptography, and over time, that transaction history gets locked in blocks of data that are then cryptographically linked together and secured. This creates an immutable, unforgeable record of all the transactions across this network. This record is replicated on every computer that uses the network."
>
> --Bettina Warburg<sup>1</sup>

Blockchains are often associated with Bitcoin and other cryptocurrencies, but they are not the same thing. Bitcoin was the first to implement the concept of a blockchain. The structure of a blockchain, an ever growing list of records, can be applied to many other fields such as digital identity, supply chain, and even [democracy](https://www.democracy.earth/).

A blockchain is built out of a combination of two different “hash-based data structures” (Narayanan, Bonneau, Felten, Miller, & Goldfeder, 2016, p. 64), a hash chain of blocks and a Merkle tree. “In short, the blockchain is a network and a database; it has rules and built-in security; and it maintains internal integrity and its own history” (Depository Trust and Clearing Corporation, 2016, p. 7). In the chain, each block has a pointer to the previous block as well as a pointer to its Merkle tree of transactions. A Merkle tree, sometimes called a hash tree, is a type of tree where each node that has at least one child is marked with a hash of its own children.

Even though blockchain technology can be applied to a wide range of problems, it is not the solution to everything. This technology is best used to solve problems where the parties would prefer to avoid trusting each other. This trustless feature of blockchain thus facilitates an easing of difficulties associated with trade and other ventures.

Difficulties with updating and eliminating errors is a big disadvantage of blockchain technology. The application must be updated on each node of the peer-to-peer network or forked if parts of nodes don’t accept amendments.

A third party is usually needed to validate trust relationships. In the most common example, which is the banking system, a trusted authority is needed, such as a bank, to intermediate transactions, manage accounts, verify balances, and validate transfers. Blockchains then serve to replace the regulatory or central authority. In the case of cryptocurrencies, it replaces the figure of the bank, doing all the validations and guaranteeing the security and veracity of the transactions.

For this reason, Blockchain is also known as **"The Trust Protocol"**.

## History
The first work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta. They wanted to implement a system where documents' timestamps could not be tampered with or backdated. In 1992, Bayer, Haber, and Stornetta incorporated Merkle trees to the design, which improved its efficiency by allowing several documents to be collated into one block.

The first blockchain was conceptualized by a person (or group of people) known as Satoshi Nakamoto in 2008. It was implemented the following year by Nakamoto as a core component of the cryptocurrency Bitcoin, where it serves as the public ledger for all transactions on the network. The identity of Satoshi Nakamoto is not known, with some claiming him to be an Australian or Japanese man. Furthermore, Nakamoto introduced the concept of proof of work to ensure a more decentralized trust in the records' security.

In August 2014, the bitcoin blockchain file size, containing records of all transactions that have occurred on the network, reached 20 GB (gigabytes). In January 2015, the size had grown to almost 30 GB, and from January 2016 to January 2017, the bitcoin blockchain grew from 50 GB to 100 GB in size. According to [Statista](https://www.statista.com/statistics/647523/worldwide-bitcoin-blockchain-size/), the size of the Bitcoin blockchain reached approximately 185 gigabytes in size by the end of September 2018.

The words block and chain were used separately in Satoshi Nakamoto's original paper but were eventually popularized as a single word, blockchain, by 2016. The term blockchain 2.0 refers to new applications of the distributed blockchain database, first emerging in 2014. The Economist described one implementation of this second-generation programmable blockchain as coming with "a programming language that allows users to write more sophisticated smart contracts, thus creating invoices that pay themselves when a shipment arrives or share certificates which automatically send their owners dividends if profits reach a certain level."

As of 2016, blockchain 2.0 implementations continue to require an off-chain oracle to access any "external data or events based on time or market conditions to interact with the blockchain."

> “What the internet did for communications, blockchain will do for trusted transactions.”
>
> --Ginni Rometty, CEO of IBM

In May 2018, Gartner found that only 1% of CIOs indicated any kind of blockchain adoption within their organisations, and only 8% of CIOs were in the short-term planning or [looking at] active experimentation with blockchain.

## Types of Blockchains
Blockchains can be broadly classified into two categories -
1. Permissionless, public blockchains - these are not controlled by any single company or person. The blockchain is accessible to anyone to participate in. Bitcoin and Ethereum are examples of permissionless blockchains. Consensus is arrived at by participating miner nodes in the network, who perform certain actions (Proof-of-Work) and are rewarded for helping to maintain the state of the distributed ledger. Anyone interested can become a miner and participate in the consensus building process. 
2. Permissioned blockchain - these are typically owned by a single party, or by a consortium of organizations. The participants in the network, along with their roles in the network, are pre-determined. These kinds of blockchains are implemented by enterprises who are looking to improve efficiencies across business processes that span multiple parties. Examples of permissioned blockchain platforms would be Ripple, Corda, Quorum and Hyperledger. [Hyperledger](https://www.hyperledger.org) is an open source project run by [The Linux Foundation](https://www.linuxfoundation.org/projects/), and is a set of frameworks and tools which can be used to build permissioned blockchain networks. Of the frameworks available, Hyperledge Fabric has gained a level of maturity required for production level blockchains.

## Bitcoin
The main problem Bitcoin faced was how to achieve distributed consensus while remaining a decentralized system. Distributed consensus is essentially the idea that all the nodes that make up the network must reach a collective agreement without the use of a centralized control. In the Bitcoin blockchain, the nodes must agree on exactly which transactions present on the network are valid. This is difficult in many ways, one of which is the potential for `n` number of nodes to be malicious and not want to follow the consensus of the other nodes. Bitcoin has the benefit of being able to incentivize its nodes to “follow the rules” through rewards and transaction fees because it is a currency system.

## Byzantine Fault Tolerance
Imagine the scenario where there is an empire and there are three generals with their respective armies at different positions. All of them must attack in order to win the fight or they can choose to retreat. Their only means of communications are through pigeon posts. But there is a problem, the generals can't trust each other or ensure that the message has not been corrupted along the way. How do they solve this problem? Blockchain essentially does so by listening to information broadcasted by other people, reaching to a consensus of which information is deemed true. As such, this model asssumes that the amount of "traitors" do not exceed more than 1/3 of the entire network.

## Modern Use Cases of Blockchain
- Asset Tokenization : Using blockchain technology, previously illiquid assets can now be converted into its tokenized form and cheaply and efficiently fractionalized, traded and settled on chain (rather than go through the lengthy process of clearing and settlement process through third parties like clearing houses)
- Supply Chain Management : Blockchains allow multiple parties to access a database to act as the single source of truth. Recorded transactions are immutable, are append only and provide a time stamped audit trail.
- Digital Identity : A self sovereign ID can be used to verify identity without needing an individual to produce numerous documents and paperwork each time they need their identity verified. This could be done with a single key that can be matched against an immutable ledger. The digital ID can also collect other online information about a user’s identity like social security information, medical records and social media credentials and have that stored securely on the blockchain.
- Energy Market : Blockchain technology can enable the smart metering of electricity generated through an individual’s solar panels to be recorded, traded and settled on a ledger.
- Healthcare : Using blockchain technology to record patient information on a distributed ledger can allow different stakeholders conditional access to a single source of truth where each interaction with a patient’s health data can be recorded on a ledger as a transaction with a time stamped audit trail.

## Issues
Whilst blockchain technology is undoubtedly elegant, there are several problems that its presence brings, the main one being use my malicious third parties. Due to the extremely secure nature of blockchain, its technologies are often used by criminals to carry out transactions, which are impossible for governments to track.

An unavoidable issue with the security of the system itself is the so-called "51% attack" whereby if more than half of the nodes on the network are issuing false ledgers, the "lie" becomes truth. This means that the global network has to constantly be monitored to make sure that nobody can gain this kind of influence.

Another issue is its lack of regulation, or a central authority backing its currencies, which in the past has lead to huge increases in speculation, and ultimately crashes. An example of this, is the huge surge in the value of bitcoin, the poster child of blockchain, which after surging to a new high in January 2018, fell by around 75% by August of the same year. This left many eager speculators ruined. However, this is not an inherent problem with the technology itself, being more a reflection of peoples desires to get rich quick than the evil of blockchain.

A final issue is the political connotations of the technology. Since the network is effectively community run, there can be disagreements as to changes being implemented, and how the network is run on a day-to-day basis. This can sometimes lead to 'forks' in the network, whereby splinter groups form their own currencies.

### Sources
1. [Bettina Warburg, "How the blockchain will radically transform the economy", TED Talks, December 8, 2016](https://youtu.be/RplnSVTzvnU?t=213)
2. [Depository Trust and Clearing Corporation, "Embracing Disruption: Tapping the Potential of Distributed Ledgers to Improve the Post-Trade Landscape", DTCC, 2016](https://hub.digitalasset.com/hubfs/Industry%20Reports/dtcc-embracing-disruption.pdf?t=1539879453546)
3. [Brian Curran, "What is Practical Byzantine Fault Tolerance? Complete Beginner’s Guide", October 21, 2018 ](https://blockonomi.com/practical-byzantine-fault-tolerance/)
4. [Nathaniel Popper and Su-Hyun Lee, "After the Bitcoin Boom: Hard Lessons for Cryptocurrency Investors", *The New York Times*, August 20, 2018](https://www.nytimes.com/2018/08/20/technology/cryptocurrency-investor-losses.html)
5. [Nolan Bauerle, "What are Blockchain's Issues and Limitations?", *coindesk"](https://www.coindesk.com/information/blockchains-issues-limitations/)

### More information
* [Bitcoin Whitepaper by Satoshi Nakamoto](https://bitcoin.org/bitcoin.pdf)
* [WTF is The Blockchain?](https://hackernoon.com/wtf-is-the-blockchain-1da89ba19348)    
* [Blockchain: the revolution we’re not ready for](https://medium.freecodecamp.org/blockchain-is-our-first-22nd-century-technology-d4ad45fca2ce)
* [How the blockchain is changing money and business | Don Tapscott (YouTube video)](https://www.youtube.com/watch?v=Pl8OlkkwRpc)
* [Introduction to Bitcoin, Ethereum and Smart Contracts](https://github.com/WizardOfAus/WizardsEthereumWorkshop)
* [Blockchain academic papers](https://github.com/decrypto-org/blockchain-papers)
* [Blockchain Resources](https://github.com/BlockchainDevs/CryptocurrencyAwesome/blob/master/README.md)
* [Blockchain Wikipedia](https://en.wikipedia.org/wiki/Blockchain)

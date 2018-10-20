---
title: Blockchain
---
# Blockchain

> "Is a decentralized database that stores a registry of assets and transactions across a peer-to-peer network. Is basically a public registry of who owns what and who transacts what. The transactions are secured by cryptography, and over time, that transaction history gets locked in blocks of data that are then cryptographically linked together and secured. This creates an immutable, unforgeable record of all the transactions across this network. This record is replicated on every computer that uses the network."
>
> --Bettina Warburg<sup>1</sup>

Blockchain is often associated with Bitcoin and other cryptocurrencies, but they are not the same thing. Bitcoin was the first to implement the concept of the Blockchain. The structure of a blockchain, a growing list of records, can be applied to many other fields such as digital identity, supply chain and even [democracy](https://www.democracy.earth/).

Even though blockchain can be applied to a big range of problems, it is not the solution to everything. This technology is usually used to solve problems where the parts don't trust each other.

A third party is usually needed to validate trust relationships. In the most common example, which is the banking system, a trusted authority is needed, such as a bank, to intermediate transactions, manage accounts, verify balances, and validate transfers. Blockchain then, comes in this case to replace the regulatory authority. In the case of cryptocurrencies, it replaces the figure of the bank, doing all the validations and guaranteeing the security and veracity in the transactions.

For this reason Blockchain is also known as **"The Trust Protocol"**.

## Structure

A blockchain database is managed autonomously using a peer-to-peer network and a distributed timestamping server. They are authenticated by mass collaboration powered by collective self-interests. The result is a robust workflow where participants' uncertainty regarding data security is marginal.

### Blocks

Blocks hold batches of valid transactions that are hashed and encoded into a Merkle tree. Each block includes the cryptographic hash of the prior block in the blockchain, linking the two. The linked blocks form a chain. This iterative process confirms the integrity of the previous block, all the way back to the original genesis block.

### Block time

The block time is the average time it takes for the network to generate one extra block in the blockchain. Some blockchains create a new block as frequently as every five seconds. By the time of block completion, the included data becomes verifiable. In cryptocurrency, this is practically when the transaction takes place, so a shorter block time means faster transactions. The block time for Ethereum is set to between 14 and 15 seconds, while for bitcoin it is 10 minutes.

### Uses

Blockchain technology can be integrated into multiple areas. The primary use of blockchains today is as a distributed ledger for cryptocurrencies, most notably bitcoin. There are a few operational products maturing from proof of concept by late 2016.

Blockchain technology can be used to create a permanent, public, transparent ledger system for compiling data on sales, tracking digital use and payments to content creators, such as wireless users or musicians. 

New distribution methods are available for the insurance industry such as peer-to-peer insurance, parametric insurance and microinsurance following the adoption of blockchain. The sharing economy and IoT are also set to benefit from blockchains because they involve many collaborating peers. Online voting is another application of the blockchain.

Blockchains can be used to catalog game assets (digital assets), as with Cryptokitties.

## Types of blockchains

Currently, there are three types of blockchain networks - public blockchains, private blockchains and consortium blockchains.

### Public blockchains

A public blockchain has absolutely no access restrictions. Anyone with an internet connection can send transactions to it as well as become a validator (i.e., participate in the execution of a consensus protocol). Usually, such networks offer economic incentives for those who secure them and utilize some type of a Proof of Stake or Proof of Work algorithm.

Some of the largest, most known public blockchains are Bitcoin and Ethereum.

### Private blockchains

A private blockchain is permissioned. One cannot join it unless invited by the network administrators. Participant and validator access is restricted.

This type of blockchains can be considered a middle-ground for companies that are interested in the blockchain technology in general but are not comfortable with a level of control offered by public networks. Typically, they seek to incorporate blockchain into their accounting and record-keeping procedures without sacrificing autonomy and running the risk of exposing sensitive data to the public internet.

### Consortium blockchains

A consortium blockchain is often said to be semi-decentralized. It, too, is permissioned but instead of a single organization controlling it, a number of companies might each operate a node on such a network. The administrators of a consortium chain restrict users' reading rights as they see fit and only allow a limited set of trusted nodes to execute a consensus protocol. 

## History
The first work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta. They wanted to implement a system where documents' timestamps could not be tampered with or backdated. In 1992, Bayer, Haber and Stornetta incorporated Merkle trees to the design, which improved its efficiency by allowing several documents to be collected into one block.

The first blockchain was conceptualized by a person (or group of people) known as Satoshi Nakamoto in 2008. It was implemented the following year by Nakamoto as a core component of the cryptocurrency bitcoin, where it serves as the public ledger for all transactions on the network.

In August 2014, the bitcoin blockchain file size, containing records of all transactions that have occurred on the network, reached 20 GB (gigabytes). In January 2015, the size had grown to almost 30 GB, and from January 2016 to January 2017, the bitcoin blockchain grew from 50 GB to 100 GB in size. Furthermore, Nakamoto introduced the concept of proof of work to ensure a more decentralised trust in the records' security.

The words block and chain were used separately in Satoshi Nakamoto's original paper, but were eventually popularized as a single word, blockchain, by 2016. The term blockchain 2.0 refers to new applications of the distributed blockchain database, first emerging in 2014. The Economist described one implementation of this second-generation programmable blockchain as coming with "a programming language that allows users to write more sophisticated smart contracts, thus creating invoices that pay themselves when a shipment arrives or share certificates which automatically send their owners dividends if profits reach a certain level."

As of 2016, blockchain 2.0 implementations continue to require an off-chain oracle to access any "external data or events based on time or market conditions to interact with the blockchain."

#### Sources
1. [Bettina Warburg, "How the blockchain will radically transform the economy", *TED Talks*, December 8, 2016](https://youtu.be/RplnSVTzvnU?t=213)
2. Wikipedia, the free encyclopedia (https://en.wikipedia.org/wiki/Blockchain)

##### More information

* [WTF is The Blockchain?](https://hackernoon.com/wtf-is-the-blockchain-1da89ba19348)    
* [Blockchain: the revolution we’re not ready for](https://medium.freecodecamp.org/blockchain-is-our-first-22nd-century-technology-d4ad45fca2ce)
* [How the blockchain is changing money and business | Don Tapscott (YouTube video)](https://www.youtube.com/watch?v=Pl8OlkkwRpc)
* [Introduction to Bitcoin, Ethereum and Smart Contracts](https://github.com/WizardOfAus/WizardsEthereumWorkshop)
* [Blockchain academic papers](https://github.com/decrypto-org/blockchain-papers)
* [Blockchain Resources](https://github.com/BlockchainDevs/CryptocurrencyAwesome/blob/master/README.md)


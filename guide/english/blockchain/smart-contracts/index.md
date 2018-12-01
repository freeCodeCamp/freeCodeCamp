---
title: Smart Contracts
---
## Smart Contracts
Cryptocurrency transactions that occur on a blockchain are an example of a very basic contract: one party sends money to another. However, blockchains also have the potential to manage and execute more complicated contracts. On the Ethereum blockchain, for example, one can utilize _smart contracts_ — blocks of code that only execute when their conditions are met. Smart contracts are Turing-Complete and as decentralized as the monetary transactions that occur on the blockchain. The combination of decentralized programs and money make for interesting possibilities.

As a piece of code that sits on the blockchain, a smart contract can automate tasks in a decentralized and transparent manner. Examples of this include managing the process of recieving and distributing micro-payments for viewing ads (such as with the Basic Attention Token) and managing buy/sell order books for exchanges transparently (such as with the 0x project).

## Applications of Smart Contacts
Smart Contracts allows the transfer of goods and services without the need for a independent third party. Logic and rules are built into the smart contract that define the permissions and processes associated with a particular agreement and enforce the obligations attached to it. This provides an opportunity to remove middlemen that are traditionally required to interact with physical property or financial service instruments.

## Blockchain Technologies
Two of the most common technologies used are:
- Ethereum: generally made with Solidity
- Hyperledger: generally made with Go, or Java

### Smart Contracts in Ethereum
Smart contracts in ethereum are written using Solidity, its a high-level, contract-oriented programmng language, and targets Ethereum Virtual Machine, one can use Remix online IDE to try writting and deploying smart contracts

### Smart Contracts in Hyperledger
Smart contracts in Hyperledger is called chaincode, and is written in Golang programming language.

## Hello World Smart Contract
```solidity
pragma solidity ^0.4.24;
contract Hello {
    string public message;
    function Hello(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
```

Pulled from [Medium - How to Write a Simple Smart Contract](https://medium.com/coinmonks/how-to-write-a-simple-smart-contract-25f6d3c1d6db).

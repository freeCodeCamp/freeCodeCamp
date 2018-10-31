---
title: Smart Contracts
---
## Smart Contracts

Transactions in a blockchain are a very basic contract - One party sends resources to another.
In the Ethereum blockchain, transactions can support any kind of logic. They have the expressive
power of a Turing-Complete machine - meaning they can be steps for a task that a computer can do.

As a piece of code that sits on the blockchain, a smart contract can automate tasks.
When an account receives money it can automatically distribute it to others.
This is entirely transparent so all the nodes(miners) can see what logic is being executed.


## Blockchain Technologies

Two of the most common technologies used are :
- Ethereum: generally made with Solidity
- Hyperledger: generally made with Go, or Java

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
Pulled from https://medium.com/coinmonks/how-to-write-a-simple-smart-contract-25f6d3c1d6db

---
title: Smart Contracts
---
## Smart Contracts
Cryptocurrency transactions that occur on a blockchain are an example of a very basic contract: one party sends money to another. However, blockchains also have the potential to manage and execute more complicated contracts. On the Ethereum blockchain, for example, one can utilize _smart contracts_ — blocks of code that only execute when their conditions are met. Smart contracts are Turing-Complete and as decentralized as the monetary transactions that occur on the blockchain. The combination of decentralized programs and money make for interesting possibilities.

As a piece of code that sits on the blockchain, a Smart Contract can automate tasks in a decentralized and transparent manner. Examples of this include managing the process of recieving and distributing micro-payments for viewing ads (such as with the Basic Attention Token) and managing buy/sell order books for exchanges transparently (such as with the 0x project). The term Smart Contract was coined by computer scientist Nick Szabo in 1994.

Transactions in a blockchain are a very basic form of Smart Contract - One party sends resources to another once an authorization for the transfer has been given. The Bitcoin blockchain supports slightly more complex contracts involving transactions between several parties, but not "fully smart" contracts. That can be achieved in the Ethereum blockchain, given that its transactions can support any kind of logic. They have the expressive power of a Turing-Complete machine - meaning they can carry out any task that a computer can do.

Deployed contracts can be viewed on platforms such as [Etherscan](www.etherscan.io).

## Applications of Smart Contacts
Smart Contracts allows the transfer of goods and services without the need for a independent third party. Logic and rules are built into the smart contract that define the permissions and processes associated with a particular agreement and enforce the obligations attached to it. This provides an opportunity to remove middlemen that are traditionally required to interact with physical property or financial service instruments.

## Blockchain Technologies Supporting Smart Contracts
Some of the most common technologies used are:
- Ethereum - Created to be a blockchain for smart contracts. The smart contracts run in the Ethereum Virtual Machine (EVM), which can be thought of as a  decentralized computer. Ethereum smart contracts can be written in Solidity, Serpent or Vyper, which are then compiled to byte-code and fed to the EVM.
- Hyperledger - An initiative hosted by the Linux Foundation for private blockchains and tends to be more business-oriented. There are several projects under the Hyperledger name, most of them with Smart Contract capabilities. Ethereum Smart Contracts can be run in Hyperledger too.
- Corda - A new Operating System for Financial Services

There are many other blockchain projects offering (or promising) smart contract capabilities  - e.g., EOS, NEO or ICON. They may compete with Ethereum for market adoption (still very low globally) in the future.

### Smart Contracts in Ethereum
Smart contracts in Ethereum are written using Solidity.  Solidity is a contract-oriented, high-level language for implementing Smart Contracts, and targets the Ethereum Virtual Machine. One can use Remix online IDE to try writing and deploying Smart Contracts.

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

## Example of a Smart Contract
A classic example is that of a lottery. The pseudo-code for a smart contract implementing a
very simple lottery could be as follows:

```
contract Lottery {
    initialize variable 'luckyNumber' = 0
    
    function setLuckyNumber {
        only the creator of the contract should be capable of calling this function
        the function should be callable only if 'luckyNumber' == 0
        set 'luckyNumber' to a random integer != 0 // Not easy to do!
        // The random integer should not be visible (we could hash it) since all
        // data of the contract is visible in the blockchain
    }
    
    function play(int _guess) {
        require the address calling this function to pay a price to pay
        require guess != 0
        if guess == luckyNumber {
            // the prize could be 99% of the money accumulated in the contract from the
            // participants playing, and the remaining 1% could be transfered to the
            // lottery creator
            transfer 0.99 * (contract balance) to address calling this function
            transfer 0.01 * (contract balance) to creator
        }
    }
}
```

## Additional Resources

### Ethereum Development Tools
- [Remix (official Solidity IDE)] (https://remix.readthedocs.io/en/latest/)
- [Truffle] (https://github.com/trufflesuite/truffle)
- [MetaMask] (https://metamask.io/)
- [DAppBoard] (http://dappboard.com/app)

### Sources
- [Nick Szabo on the concept of smart contracts](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)
- ["Smart" contracts in Bitcoin](https://bitcoin.org/en/developer-guide#contracts)
- [Hyperledger official webpage](https://www.hyperledger.org/)

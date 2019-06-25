---
title: Basics of Bitcoin & Cyptocurrency
---

#### Bitcoin is a collection of concepts and technologies that form the basis of a digital money ecosystem, including: 
- A decentralized peer to peer network (enabled by the _Bitcoin protocol_)
- A public transaction ledger (_the blockchain_)
- A decentralized mathematical and deterministic currency issuance mechanism (distributed mining and the  _“Proof of Work”_ concept)
- A decentralized transaction verification system (transaction script)

#### The Bitcoin system is based on decentralized trust, thus it heavily relies on cryptographic technologies, such as:
- Cryptographic hash functions (i.e.SHA-256 and RIPEMD-160)
- Public Key Cryptography (i.e. ECDSA–
the Elliptic Curve Digital Signature Algorithm)



#### Some Important Excerpts 

1.  In Bitcoin, a transaction is a record informing the network of a transfer of bitcoins from one owner to another owner.
    - You may think of a transaction as the equivalent of a single line in a notebook page
    - You may think of a block as the equivalent of a page on taht notebook
    - You may think of blockchain as the quivalent of the whole notebook
    - All the users are able to read , write and get updated on that notebook.
2. Ownership of bitcoins is established through digital keys, Bitcoin addresses, and digital signatures.
3. _Digital Keys_ are crated and stored offline and consist of a mathematically-related Private-Public key-pair, created using the Elliptic Curve Signature Algorithm(_ECDSA_)
4. The **Private key(Privkey)** is initially generated at random, and is kept secret at all times. It is used by the current owner of bitcoins to digitally sign a Bitcoin transaction, when he authorizes the transfer to the new user. A transaction 
5. The **Public Key(Pubkey)** is generated from the Private Key using a one-way cryptpgraphic hash function. It is used by the owner to validate a transaction's digital signature.

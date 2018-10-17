---
title: Cryptography
---

## Cryptography

The basic objective of cryptography is to enable two people to communicate through the unsecure channel in such a way that a third person cannot understand what is being said. This channel could be a telephone line or a computer network. 

Cryptography started being used by the Romans in order to make messages in battle unreadable by the enemy if deciphered. 

Cryptography prior to the modern age was effectively synonymous with encryption, the conversion of information from a readable state to apparent nonsense. 

Modern cryptography is used in data so that only one party or only authorised partys have the ability to access the information. 

Encryption over the years has become more advanced.

### Example

The information that Person1 wants to send to Person2, which we call "plaintext", can be text, numerical data, or any type of data at all. Person1 encrypts the plaintext, using a predetermined key, and sends the resulting "ciphertext" over the channel. Person3, upon seeing the ciphertext in the channel, cannot determine what the plaintext was, but Person2, who knows the encryption key, can decrypt the ciphertext and reconstruct the plaintext.

### Caesar Cypher (Shift Cypher)

The first known cypher was the Ceasar cypher. The Ceasar cypher works by shifting the letters of a "plaintext" by a specific amount up or down in the alphabet. 

From an outside person's perspective, the message appears to be random letters with spaces in between.

### Simple Substitution Cipher

It is an improvement to the Caesar Cipher. Instead of shifting the alphabets by some number, this scheme uses some permutation of the letters in alphabet.
For example, A.B…..Y.Z and Z.Y……B.A are two obvious permutation of all the letters in alphabet

### Playfair Cipher

In this scheme, pairs of letters are encrypted, instead of single letters as in the case of simple substitution cipher.
In playfair cipher, initially a key table is created. The key table is a 5×5 grid of alphabets that acts as the key for encrypting the plaintext. Each of the 25 alphabets must be unique and one letter of the alphabet (usually J) is omitted from the table as we need only 25 alphabets instead of 26. If the plaintext contains J, then it is replaced by I.

### Modern Cryptography

Modern encryption uses almost random numbers and mathematically sound functions in order to allow secure communication. These newly developed functions cannot be easily cracked due to their structure, requiring even supercomputers hundreds of years to crack.

There are 2 main types of modern encryption:

### 1) Symmetric or Single Key Encryption:

Symmetric Key Encryption is an encryption method where both parties use only one key for encryption and decryption. These algorithms, due to their design, are generally much faster than Asymmetric or Public Key Encryption.

Some Symmetric encryption techniques include: Data Encryption Standard (DES), Advance Encryption Standard (AES), Blow Fish, Two Fish, RC4.

### 2) Asymmetric or Public Key Encryption:

Asymmetric Encryption algorithms provide each user with a pair of keys: one public and one private. Any message encrypted with one key from the pair can only be decrypted with the other. 

Some Asymmetric techniques include: RSA, Diffie-Hellman, DSS(Digital Signature Standard), ElGamal.

### Cryptographic Hashing

Most cryptographic hash functions are designed to take a string of any length as input and produce a fixed-length hash value.

A cryptographic hash function must be able to withstand all known types of cryptanalytic attack.

### Cryptography Hashing
A cryptographic hash function is a type of hash function that is designed to also be a one-way function (a function that takes too much time and resources to brute force). The main purpose of hashes deal with message intregrity, so the same message always results in the same hash.

#### More Information:

- [Cryptography: Theory and Practice by Douglas Stinson](https://www.crcpress.com/Cryptography-Theory-and-Practice-Third-Edition/Stinson/p/book/9781584885085)
- [TechTarget on Encryption](http://searchsecurity.techtarget.com/definition/encryption)
- [Cryptography Guide](https://www.tutorialspoint.com/cryptography/index.htm)

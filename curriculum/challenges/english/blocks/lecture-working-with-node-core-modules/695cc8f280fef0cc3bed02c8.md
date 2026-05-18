---
id: 695cc8f280fef0cc3bed02c8
title: What Is the Crypto Module and How Does It Work?
challengeType: 19
dashedName: what-is-the-crypto-module-and-how-does-it-work
---

# --description--

Crypto is another core module that's built into Node.js. It includes tools for things like hashing, encryption, decryption, and creating digital signatures, all of which are used to protect sensitive information and keep your app secure.

That said, `crypto` gives you low-level building blocks, not plug-and-play security. Writing your own encryption or authentication code can be unsafe if you're not careful. In most cases, it's best to use well-tested libraries like `bcrypt` for password hashing or `jsonwebtoken` (JWT) for handling logins and tokens.

That said, it's still useful to understand how some of the methods in the crypto module work.

To use these methods, you need to import the `crypto` module:

```js
const crypto = require("crypto");
```

Some of the methods are used for data transformation purposes, such as the ones for hashing and encrypting data, and some others are for key and security management, such as the ones for generating random values and creating secrets.

Let's look at the methods for hashing and encrypting data first.

The `createHash()` method creates a hash object by taking in algorithms like `sha256`, `sha512`, or `md5`. It's a one-way operation, so you can't reverse it.

`createHash()` is useful for hashing passwords and fingerprinting files. To use it, you pass in your algorithm, use the `update()` method to feed in the data, and finally use `digest()` with an encoding to get the hash value:

```js
const crypto = require("crypto");

const hashedPassword = crypto
  .createHash("sha256")
  .update("myStrongPassword")
  .digest("hex");

console.log("createHash result:", hashedPassword);
// createHash result: f92c9cfa0ead1bcec05ca75888a4074ba994ad237e5e2a8c7cc6a620378c061d
```

`createHmac()` does almost the same thing as `createHash()`, but it takes things to the next level by accepting a secret key, so only someone with that key can verify the hash. It is ideal for authentication and verifying data integrity:

```js
const crypto = require("crypto");

const hashedMessage = crypto
  .createHmac("sha256", "secretkey")
  .update("important-secret-message")
  .digest("hex");

console.log("createHmac result:", hashedMessage);
// createHmac result: da48d6f026b6036286b1fb872c63264130d5cc4271f3a213bb6ddca5a023e77e
```

The `createCipheriv()` and `createDecipheriv()` methods encrypt and decrypt data. They both take in an algorithm, a key, and an `iv`, which is a block of random or unique data used at the start of the encryption process:

```js
createCipheriv(algorithm, key, iv);
createDecipheriv(algorithm, key, iv);
```

To decrypt the data, the key must be the same, otherwise, the decryption will fail, and you'll either get an error or unreadable gibberish instead of the original message.

Here are the two in action:

```js
const crypto = require("crypto");

// A key must match the algorithm length. Here AES-256 is 32 bytes
const key = Buffer.from("12345678901234567890123456789012");

// A fixed IV, 16 bytes for AES
const iv = Buffer.from("1234567890123456");

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update("Hello campers!", "utf8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted data:", encrypted);
// Encrypted data: 4ee93aa398ab44e3540e4a67ca96bc8c

// Decrypt the "Hello campers!" message
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted data:", decrypted);
// Decrypted data: Hello campers!
```

Another crypto method for data transformation is `sign()` and `verify()`. 

`sign()` creates a digital signature from some data using a private key. This signature proves that the data came from the holder of the private key and has not been tampered with.

`verify()` then checks that signature, and it fails if the data or signature does not match.

Now, let's look at the crypto methods for generating random values and creating secrets.

`randomBytes()` takes in a `size` and generates cryptographically secured tokens. That makes it good for generating UUIDs (universally unique IDs). In addition, it's a good replacement for `Math.random()`, which is not secure for tokens and keys.

```js
console.log("Random Bytes:", crypto.randomBytes(16));
// Random Bytes: <Buffer 01 88 aa 1e 2c 38 48 39 26 e1 6b a9 d8 c5 ed 49>
```

The output is a buffer by default. As you learned in the lesson on the Buffer module, you can convert that Buffer to a string with the `toString()` method:

```js
console.log("Random Bytes:", crypto.randomBytes(16).toString("hex"));
// Random Bytes: a6154ef5a296fa176ad0f332bd94d712
```

The `'hex'` argument in `toString('hex')` here tells Node to encode the binary data from the Buffer as a hexadecimal string.

The `randomInt()` method takes in a `min` and `max` values and generates a secure random integer between them. It is useful for OTPs and random selection.

```js
console.log("Random Int:", crypto.randomInt(0, 100)); // 89
```

Again, the upgrade over `Math.random()` and `Math.floor()` is that the method uses cryptographically secure randomness under the hood, so attackers can't predict the resulting random number.

Another method is `createSecretKey()`. It takes a buffer and generates a raw byte wrapped into a `KeyObject`:

```js
const crypto = require("crypto");

const secret = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret); // SecretKeyObject [KeyObject] { [Symbol(kKeyType)]: 'secret' }
```

You can then use the `export` method to send out that `KeyObject`:

```js
const secret = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret.export());
// <Buffer 53 06 a1 c7 75 69 8b 38 8b a4 b2 f7 1b bc b8
// ae e2 d1 bf 67 af 1a 6a 0a 6e a0 29 62 bb 52 52 32>
```

And finally, use `toString()` on the buffer to see the string representation of it:

```js
const secret = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret.export().toString('hex'));
// 32dfe5917668580160986f1623bf8152913329c71163be9c3404a110cd78efd6
```

In addition to these, there are:

- `createPublicKey()` and `createPrivateKey()` that lets you work with keys generated elsewhere
- `createDiffieHellman()` for two parties to generate a shared secret without sending the secret directly
- `Certificate()` for working with the one used in HTTPS, so you can parse, export, and verify certificate contents

# --questions--

## --text--

Which of these is the correct way to import the Node.js crypto module?

## --answers--

`const crypto = require('crypto')`

---

`const crypto = import('crypto')`

### --feedback--

Focus on the syntax Node.js uses for requiring built-in modules.

---

`import crypto from 'nodes:crypto'`

### --feedback--

Focus on the syntax Node.js uses for requiring built-in modules.

---

`crypto = requireModule('crypto')`

### --feedback--

Focus on the syntax Node.js uses for requiring built-in modules.

## --video-solution--

1

## --text--

Which of these statements about `sign()` and `verify()` is correct?

## --answers--

`sign()` uses a public key to create a signature, and `verify()` checks it with a private key.

### --feedback--

Remember that digital signatures work with private–public key pairs.

---

Both `sign()` and `verify()` require only a private key.

### --feedback--

Remember that digital signatures work with private–public key pairs.

---

`sign()` creates a digital signature with a private key, and `verify()` checks it with the corresponding public key.

---

`verify()` can check signatures without needing any key.

### --feedback--

Remember that digital signatures work with private–public key pairs.

## --video-solution--

3

## --text--

What method in the crypto module creates a one-way hash object using algorithms like `sha256`, `sha512`, or `md5`?

## --answers--

`createCipheriv()`

### --feedback--

This method is often used for hashing passwords and fingerprinting files.

---

`createDiffieHellman()`

### --feedback--

This method is often used for hashing passwords and fingerprinting files.

---

`createSign()`

### --feedback--

This method is often used for hashing passwords and fingerprinting files.

---

`createHash()`

## --video-solution--

4

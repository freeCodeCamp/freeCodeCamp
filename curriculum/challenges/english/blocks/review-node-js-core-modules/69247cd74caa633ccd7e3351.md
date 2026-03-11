---
id: 69247cd74caa633ccd7e3351
title: Node.js Core Modules Review
challengeType: 31
dashedName: review-node-js-core-modules
---

# --description--

## Introduction to Node.js Core Modules

- **Node.js Core Modules**: Built-in modules that come pre-installed with Node.js, providing essential functionality for file operations, cryptography, operating system interactions, and more.
- **Standard Modules**: No need for separate installation; available as long as Node.js is installed.
- **Import Syntax**: Use `require()` to import core modules into your application.

```javascript
const fs = require("fs");
const crypto = require("crypto");
const os = require("os");
```

## File System (fs) Module

- **Purpose**: Provides methods for working with files and folders, including opening, closing, reading, writing, and deleting operations.
- **Import**: `const fs = require("fs");`
- **Flexibility**: Methods available in three forms: callbacks, promises, and synchronous.

### Method Usage Patterns

- **Asynchronous with Callbacks**: Default behavior, non-blocking.

```javascript
fs.writeFile("filePath", "content", "utf8", (err) => {
  if (err) throw err;
  console.log("File written to!");
});
```

- **Promises-based**: Preferred for modern applications, uses `async/await`.

```javascript
const fs = require("fs/promises");

async function writeToFile() {
  try {
    await fs.writeFile("article.md", "## Node fs Module");
    console.log("File written to!");
  } catch (err) {
    console.error(err);
  }
}
```

- **Synchronous**: Blocking operation, suitable for simple scripts.

```javascript
try {
  fs.writeFileSync("article.md", "## Node fs Module", "utf8");
  console.log("File written to!");
} catch (err) {
  console.error(err);
}
```

### Core File Operations

- **`writeFile()` Method**: Creates or overwrites a file with specified content.

```javascript
await fs.writeFile("article.md", "## Node fs Module: The Complete Guide");
```

- **`appendFile()` Method**: Adds content to the end of an existing file.

```javascript
await fs.appendFile("article.md", "\n\nIn this article, you will learn...");
```

- **`readFile()` Method**: Reads the contents of a file.

```javascript
const content = await fs.readFile("article.md", "utf8");
console.log("File content:", content);
```

- **`unlink()` Method**: Deletes a file from the file system.

```javascript
await fs.unlink("article.md");
console.log("File deleted successfully");
```

### Character Encoding

- **UTF-8 Encoding**: Specify `"utf8"` to read files as text strings.
- **Buffer Format**: Without encoding specification, files are read as binary buffer objects.

```javascript
// Returns string
const textContent = await fs.readFile("file.txt", "utf8");

// Returns Buffer
const bufferContent = await fs.readFile("file.txt");
```

## Buffer Module

- **Purpose**: Handles binary data directly in memory for files, images, and network streams.
- **Import**: `const { Buffer } = require("buffer");`
- **Use Cases**: File I/O, TCP streams, image processing, and binary data manipulation.

### Buffer Creation

- **`Buffer.from()` Method**: Creates buffer from strings, arrays, or other data.

```javascript
// From string
const myStrBuffer = Buffer.from("freeCodeCamp");
console.log(myStrBuffer); // <Buffer 66 72 65 65 43 6f 64 65 43 61 6d 70>

// From array of numbers
const myNumBuffer = Buffer.from([70, 82, 69, 69, 67, 79, 68, 69, 67, 65, 77, 80]);
```

- **`Buffer.alloc()` Method**: Creates buffer of specified size filled with zeros.

```javascript
const someBuffer = Buffer.alloc(10);
console.log(someBuffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

### Buffer Operations

- **Array-like Access**: Access individual buffer elements using index notation.

```javascript
console.log(myStrBuffer[0]); // 102 (byte value for 'f')
```

- **`toString()` Method**: Converts buffer to readable string.

```javascript
console.log(myStrBuffer.toString()); // "freeCodeCamp"
```

- **`Buffer.write()` Method**: Writes data to an allocated buffer.

```javascript
someBuffer.write("Hello fCC");
console.log(someBuffer.toString()); // "Hello fCC"
```

- **`Buffer.byteLength()` Method**: Returns number of bytes needed to store a string.

```javascript
console.log(Buffer.byteLength("Hello freeCodeCamp")); // 18
```

### Additional Buffer Methods

- **`Buffer.isBuffer()`**: Checks if an object is a buffer.
- **`Buffer.compare()`**: Compares two buffers and returns sort order.
- **`Buffer.concat()`**: Joins multiple buffers into one.

## Crypto Module

- **Purpose**: Provides cryptographic functionality, including hashing, encryption, decryption, and digital signatures.
- **Import**: `const crypto = require("crypto");`
- **Security Note**: Use well-tested libraries like `bcrypt` or `jsonwebtoken` for production authentication.

### Hashing Methods

- **`createHash()` Method**: Creates one-way hash using algorithms like SHA256, SHA512, or MD5.

```javascript
const hashedPassword = crypto
  .createHash("sha256")
  .update("myPassword123")
  .digest("hex");

console.log("createHash result:", hashedPassword);
```

- **`createHmac()` Method**: Creates a hash with a secret key for authentication and data integrity.

```javascript
const hashedMessage = crypto
  .createHmac("sha256", "secret-key")
  .update("Hello World")
  .digest("hex");
```

### Encryption and Decryption

- **`createCipheriv()` and `createDecipheriv()` Methods**: Encrypt and decrypt data using algorithms, keys, and initialization vectors.

```javascript
const key = Buffer.from("12345678901234567890123456789012"); // 32 bytes for AES-256
const iv = Buffer.from("1234567890123456"); // 16 bytes for AES

// Encryption
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update("Hello campers!", "utf8", "hex");
encrypted += cipher.final("hex");

// Decryption
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
```

### Random Value Generation

- **`randomBytes()` Method**: Generates cryptographically secure random bytes.

```javascript
console.log("Random Bytes:", crypto.randomBytes(16).toString("hex"));
// Output: a6154ef5a296fa176ad0f332bd94d712
```

- **`randomInt()` Method**: Generates secure random integers within specified range.

```javascript
console.log("Random Int:", crypto.randomInt(0, 100)); // Random number 0-99
```

### Key Management

- **`createSecretKey()` Method**: Creates cryptographic key objects from raw bytes.

```javascript
const secret = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret.export().toString('hex'));
```

### Digital Signatures

- **`sign()` and `verify()` Methods**: Create and validate digital signatures using private/public key pairs.
- **Use Case**: Proves data authenticity and integrity.

### Additional Crypto Methods

- **`createPublicKey()` and `createPrivateKey()`**: Work with externally generated keys.
- **`createDiffieHellman()`**: Enables secure shared secret generation.
- **`Certificate()`**: Handles HTTPS certificate operations.

## OS Module

- **Purpose**: Provides operating system-related utilities for system information and cross-platform compatibility.
- **Import**: `const os = require("os");`
- **Use Cases**: System monitoring, cross-platform scripting, hardware information.

### System Information Methods

- **`platform()` Method**: Returns operating system platform.

```javascript
console.log(os.platform()); // 'darwin', 'win32', 'linux', etc.

// Cross-platform usage
if (os.platform() === 'win32') {
  // Windows-specific code
} else {
  // Unix-like systems
}
```

- **`arch()` Method**: Returns CPU architecture.

```javascript
console.log(os.arch()); // 'arm64', 'x64', 'arm', 'ia32', etc.
```

- **`type()` Method**: Returns official operating system name.

```javascript
console.log(os.type()); // 'Darwin', 'Linux', 'Windows_NT'
```

### Version Information

- **`release()` Method**: Shows OS kernel version.

```javascript
console.log(os.release()); // '25.0.0'
```

- **`version()` Method**: Returns detailed OS version information.

```javascript
console.log(os.version());
// Darwin Kernel Version 25.0.0: Wed Sep 17 21:41:39 PDT 2025
```

### Hardware Information

- **`cpus()` Method**: Returns an array of CPU core information.

```javascript
console.log(os.cpus()); // Array of CPU core objects with model, speed, times
```

- **`uptime()` Method**: Returns system uptime in seconds.

```javascript
console.log(os.uptime()); // 23047 (seconds since system boot)
```

### Memory Information

- **`totalmem()` Method**: Returns total system memory in bytes.
- **`freemem()` Method**: Returns available system memory in bytes.

## Best Practices

### Performance Considerations

- **Avoid Synchronous Methods**: Use asynchronous methods in production applications to prevent blocking.
- **Prefer Promises**: Use `async/await` with promises-based API for cleaner, maintainable code.
- **Error Handling**: Always implement proper error handling with try-catch blocks or error callbacks.

### Security Guidelines

- **Crypto Module**: Use established libraries for authentication rather than building custom crypto solutions.
- **Input Validation**: Validate file paths and user input to prevent security vulnerabilities.
- **Key Management**: Store cryptographic keys securely, never hardcode them in source code.

### Cross-Platform Development

- **OS Module Usage**: Use OS module methods for cross-platform compatibility.
- **Path Handling**: Use `path` module for cross-platform file path operations.
- **Environment Variables**: Check platform-specific environment variables and configurations.

## Common Use Cases

### File Operations

- Configuration file management
- Log file creation and maintenance
- Data export/import functionality
- Template processing

### Data Security

- Password hashing for user authentication
- Data encryption for sensitive information
- Random token generation for sessions
- Digital signature verification

### System Integration

- Cross-platform application deployment
- System resource monitoring
- Hardware compatibility checks
- Performance optimization based on system capabilities

# --assignment--

Review the Node.js Core Modules topics and concepts.

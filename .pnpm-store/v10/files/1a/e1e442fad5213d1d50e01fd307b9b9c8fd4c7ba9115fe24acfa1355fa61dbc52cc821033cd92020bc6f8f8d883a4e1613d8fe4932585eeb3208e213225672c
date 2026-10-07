# socks  [![Build Status](https://travis-ci.org/JoshGlazebrook/socks.svg?branch=master)](https://travis-ci.org/JoshGlazebrook/socks)  [![Coverage Status](https://coveralls.io/repos/github/JoshGlazebrook/socks/badge.svg?branch=master)](https://coveralls.io/github/JoshGlazebrook/socks?branch=v2)

Fully featured SOCKS proxy client supporting SOCKSv4, SOCKSv4a, and SOCKSv5. Includes Bind and Associate functionality.

> Looking for Node.js agent? Check [node-socks-proxy-agent](https://github.com/TooTallNate/node-socks-proxy-agent).

### Features

* Supports SOCKS v4, v4a, v5, and v5h protocols.
* Supports the CONNECT, BIND, and ASSOCIATE commands.
* Supports callbacks, promises, and events for proxy connection creation async flow control.
* Supports proxy chaining (CONNECT only).
* Supports user/password authentication.
* Supports custom authentication.
* Built in UDP frame creation & parse functions.
* Created with TypeScript, type definitions are provided.

### Requirements

* Node.js v10.0+  (Please use [v1](https://github.com/JoshGlazebrook/socks/tree/82d83923ad960693d8b774cafe17443ded7ed584) for older versions of Node.js)

### Looking for v1?
* Docs for v1 are available [here](https://github.com/JoshGlazebrook/socks/tree/82d83923ad960693d8b774cafe17443ded7ed584)

## Installation

`yarn add socks`

or

`npm install --save socks`

## Usage

```typescript
// TypeScript
import { SocksClient, SocksClientOptions, SocksClientChainOptions } from 'socks';

// ES6 JavaScript
import { SocksClient } from 'socks';

// Legacy JavaScript
const SocksClient = require('socks').SocksClient;
```

## Quick Start Example

Connect to github.com (192.30.253.113) on port 80, using a SOCKS proxy.

```javascript
const options = {
  proxy: {
    host: '159.203.75.200', // ipv4 or ipv6 or hostname
    port: 1080,
    type: 5 // Proxy version (4 or 5)
  },

  command: 'connect', // SOCKS command (createConnection factory function only supports the connect command)

  destination: {
    host: '192.30.253.113', // github.com (hostname lookups are supported with SOCKS v4a and 5)
    port: 80
  }
};

// Async/Await
try {
  const info = await SocksClient.createConnection(options);

  console.log(info.socket);
  // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
} catch (err) {
  // Handle errors
}

// Promises
SocksClient.createConnection(options)
.then(info => {
  console.log(info.socket);
  // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
})
.catch(err => {
  // Handle errors
});

// Callbacks
SocksClient.createConnection(options, (err, info) => {
  if (!err) {
    console.log(info.socket);
    // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
  } else {
    // Handle errors
  }
});
```

## Chaining Proxies

**Note:** Chaining is only supported when using the SOCKS connect command, and chaining can only be done through the special factory chaining function.

This example makes a proxy chain through two SOCKS proxies to ip-api.com. Once the connection to the destination is established it sends an HTTP request to get a JSON response that returns ip info for the requesting ip.

```javascript
const options = {
  destination: {
    host: 'ip-api.com', // host names are supported with SOCKS v4a and SOCKS v5.
    port: 80
  },
  command: 'connect', // Only the connect command is supported when chaining proxies.
  proxies: [ // The chain order is the order in the proxies array, meaning the last proxy will establish a connection to the destination.
    {
      host: '159.203.75.235', // ipv4, ipv6, or hostname
      port: 1081,
      type: 5
    },
    {
      host: '104.131.124.203', // ipv4, ipv6, or hostname
      port: 1081,
      type: 5
    }
  ]
}

// Async/Await
try {
  const info = await SocksClient.createConnectionChain(options);

  console.log(info.socket);
  // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy servers)

  console.log(info.socket.remoteAddress) // The remote address of the returned socket is the first proxy in the chain.
  // 159.203.75.235

  info.socket.write('GET /json HTTP/1.1\nHost: ip-api.com\n\n');
  info.socket.on('data', (data) => {
    console.log(data.toString()); // ip-api.com sees that the last proxy in the chain (104.131.124.203) is connected to it.
    /*
      HTTP/1.1 200 OK
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Date: Sun, 24 Dec 2017 03:47:51 GMT
      Content-Length: 300

      {
        "as":"AS14061 Digital Ocean, Inc.",
        "city":"Clifton",
        "country":"United States",
        "countryCode":"US",
        "isp":"Digital Ocean",
        "lat":40.8326,
        "lon":-74.1307,
        "org":"Digital Ocean",
        "query":"104.131.124.203",
        "region":"NJ",
        "regionName":"New Jersey",
        "status":"success",
        "timezone":"America/New_York",
        "zip":"07014"
      }
    */
  });
} catch (err) {
  // Handle errors
}

// Promises
SocksClient.createConnectionChain(options)
.then(info => {
  console.log(info.socket);
  // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)

  console.log(info.socket.remoteAddress) // The remote address of the returned socket is the first proxy in the chain.
  // 159.203.75.235

  info.socket.write('GET /json HTTP/1.1\nHost: ip-api.com\n\n');
  info.socket.on('data', (data) => {
    console.log(data.toString()); // ip-api.com sees that the last proxy in the chain (104.131.124.203) is connected to it.
    /*
      HTTP/1.1 200 OK
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Date: Sun, 24 Dec 2017 03:47:51 GMT
      Content-Length: 300

      {
        "as":"AS14061 Digital Ocean, Inc.",
        "city":"Clifton",
        "country":"United States",
        "countryCode":"US",
        "isp":"Digital Ocean",
        "lat":40.8326,
        "lon":-74.1307,
        "org":"Digital Ocean",
        "query":"104.131.124.203",
        "region":"NJ",
        "regionName":"New Jersey",
        "status":"success",
        "timezone":"America/New_York",
        "zip":"07014"
      }
    */
  });
})
.catch(err => {
  // Handle errors
});

// Callbacks
SocksClient.createConnectionChain(options, (err, info) => {
  if (!err) {
    console.log(info.socket);
    // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)

    console.log(info.socket.remoteAddress) // The remote address of the returned socket is the first proxy in the chain.
  // 159.203.75.235

  info.socket.write('GET /json HTTP/1.1\nHost: ip-api.com\n\n');
  info.socket.on('data', (data) => {
    console.log(data.toString()); // ip-api.com sees that the last proxy in the chain (104.131.124.203) is connected to it.
    /*
      HTTP/1.1 200 OK
      Access-Control-Allow-Origin: *
      Content-Type: application/json; charset=utf-8
      Date: Sun, 24 Dec 2017 03:47:51 GMT
      Content-Length: 300

      {
        "as":"AS14061 Digital Ocean, Inc.",
        "city":"Clifton",
        "country":"United States",
        "countryCode":"US",
        "isp":"Digital Ocean",
        "lat":40.8326,
        "lon":-74.1307,
        "org":"Digital Ocean",
        "query":"104.131.124.203",
        "region":"NJ",
        "regionName":"New Jersey",
        "status":"success",
        "timezone":"America/New_York",
        "zip":"07014"
      }
    */
  });
  } else {
    // Handle errors
  }
});
```

## Bind Example (TCP Relay)

When the bind command is sent to a SOCKS v4/v5 proxy server, the proxy server starts listening on a new TCP port and the proxy relays then remote host information back to the client. When another remote client connects to the proxy server on this port the SOCKS proxy sends a notification that an incoming connection has been accepted to the initial client and a full duplex stream is now established to the initial client and the client that connected to that special port.

```javascript
const options = {
  proxy: {
    host: '159.203.75.235', // ipv4, ipv6, or hostname
    port: 1081,
    type: 5
  },

  command: 'bind',

  // When using BIND, the destination should be the remote client that is expected to connect to the SOCKS proxy. Using 0.0.0.0 makes the Proxy accept any incoming connection on that port.
  destination: {
    host: '0.0.0.0',
    port: 0
  }
};

// Creates a new SocksClient instance.
const client = new SocksClient(options);

// When the SOCKS proxy has bound a new port and started listening, this event is fired.
client.on('bound', info => {
  console.log(info.remoteHost);
  /*
  {
    host: "159.203.75.235",
    port: 57362
  }
  */
});

// When a client connects to the newly bound port on the SOCKS proxy, this event is fired.
client.on('established', info => {
  // info.remoteHost is the remote address of the client that connected to the SOCKS proxy.
  console.log(info.remoteHost);
  /*
    host: 67.171.34.23,
    port: 49823
  */

  console.log(info.socket);
  // <Socket ...>  (This is a raw net.Socket that is a connection between the initial client and the remote client that connected to the proxy)

  // Handle received data...
  info.socket.on('data', data => {
    console.log('recv', data);
  });
});

// An error occurred trying to establish this SOCKS connection.
client.on('error', err => {
  console.error(err);
});

// Start connection to proxy
client.connect();
```

## Associate Example (UDP Relay)

When the associate command is sent to a SOCKS v5 proxy server, it sets up a UDP relay that allows the client to send UDP packets to a remote host through the proxy server, and also receive UDP packet responses back through the proxy server.

```javascript
const options = {
  proxy: {
    host: '159.203.75.235', // ipv4, ipv6, or hostname
    port: 1081,
    type: 5
  },

  command: 'associate',

  // When using associate, the destination should be the remote client that is expected to send UDP packets to the proxy server to be forwarded. This should be your local ip, or optionally the wildcard address (0.0.0.0)  UDP Client <-> Proxy <-> UDP Client
  destination: {
    host: '0.0.0.0',
    port: 0
  }
};

// Create a local UDP socket for sending packets to the proxy.
const udpSocket = dgram.createSocket('udp4');
udpSocket.bind();

// Listen for incoming UDP packets from the proxy server.
udpSocket.on('message', (message, rinfo) => {
  console.log(SocksClient.parseUDPFrame(message));
  /*
  { frameNumber: 0,
    remoteHost: { host: '165.227.108.231', port: 4444 }, // The remote host that replied with a UDP packet
    data: <Buffer 74 65 73 74 0a> // The data
  }
  */
});

let client = new SocksClient(options);

// When the UDP relay is established, this event is fired and includes the UDP relay port to send data to on the proxy server.
client.on('established', info => {
  console.log(info.remoteHost);
  /*
    {
      host: '159.203.75.235',
      port: 44711
    }
  */

  // Send 'hello' to 165.227.108.231:4444
  const packet = SocksClient.createUDPFrame({
    remoteHost: { host: '165.227.108.231', port: 4444 },
    data: Buffer.from('hello')
  });
  udpSocket.send(packet, info.remoteHost.port, info.remoteHost.host);
});

// Start connection
client.connect();
```

**Note:** The associate TCP connection to the proxy must remain open for the UDP relay to work.

## Additional Examples

[Documentation](docs/index.md)


## Migrating from v1

Looking for a guide to migrate from v1? Look [here](docs/migratingFromV1.md)

## Api Reference:

**Note:** socks includes full TypeScript definitions. These can even be used without using TypeScript as most IDEs (such as VS Code) will use these type definition files for auto completion intellisense even in JavaScript files.

* Class: SocksClient
  * [new SocksClient(options[, callback])](#new-socksclientoptions)
  * [Class Method: SocksClient.createConnection(options[, callback])](#class-method-socksclientcreateconnectionoptions-callback)
  * [Class Method: SocksClient.createConnectionChain(options[, callback])](#class-method-socksclientcreateconnectionchainoptions-callback)
  * [Class Method: SocksClient.createUDPFrame(options)](#class-method-socksclientcreateudpframedetails)
  * [Class Method: SocksClient.parseUDPFrame(data)](#class-method-socksclientparseudpframedata)
  * [Event: 'error'](#event-error)
  * [Event: 'bound'](#event-bound)
  * [Event: 'established'](#event-established)
  * [client.connect()](#clientconnect)
  * [client.socksClientOptions](#clientconnect)

### SocksClient

SocksClient establishes SOCKS proxy connections to remote destination hosts. These proxy connections are fully transparent to the server and once established act as full duplex streams. SOCKS v4, v4a, v5, and v5h are supported, as well as the connect, bind, and associate commands.

SocksClient supports creating connections using callbacks, promises, and async/await flow control using two static factory functions createConnection and createConnectionChain. It also internally extends EventEmitter which results in allowing event handling based async flow control.

**SOCKS Compatibility Table**

Note: When using 4a please specify type: 4, and when using 5h please specify type 5.

| Socks Version | TCP | UDP | IPv4 | IPv6 | Hostname |
| --- | :---: | :---: | :---: | :---: | :---: |
| SOCKS v4 | ✅ | ❌ | ✅ | ❌ | ❌ |
| SOCKS v4a | ✅ | ❌ | ✅ | ❌ | ✅ |
| SOCKS v5 (includes v5h) | ✅ | ✅ | ✅ | ✅ | ✅ |

### new SocksClient(options)

* ```options``` {SocksClientOptions} - An object describing the SOCKS proxy to use, the command to send and establish, and the destination host to connect to.

### SocksClientOptions

```typescript
{
  proxy: {
    host: '159.203.75.200', // ipv4, ipv6, or hostname
    port: 1080,
    type: 5, // Proxy version (4 or 5). For v4a use 4, for v5h use 5.

    // Optional fields
    userId: 'some username', // Used for SOCKS4 userId auth, and SOCKS5 user/pass auth in conjunction with password.
    password: 'some password', // Used in conjunction with userId for user/pass auth for SOCKS5 proxies.
    custom_auth_method: 0x80,  // If using a custom auth method, specify the type here. If this is set, ALL other custom_auth_*** options must be set as well.
    custom_auth_request_handler: async () =>. {
      // This will be called when it's time to send the custom auth handshake. You must return a Buffer containing the data to send as your authentication.
      return Buffer.from([0x01,0x02,0x03]);
    },
    // This is the expected size (bytes) of the custom auth response from the proxy server.
    custom_auth_response_size: 2,
    // This is called when the auth response is received. The received packet is passed in as a Buffer, and you must return a boolean indicating the response from the server said your custom auth was successful or failed.
    custom_auth_response_handler: async (data) => {
      return data[1] === 0x00;
    }
  },

  command: 'connect', // connect, bind, associate

  destination: {
    host: '192.30.253.113', // ipv4, ipv6, hostname. Hostnames work with v4a and v5.
    port: 80
  },

  // Optional fields
  timeout: 30000, // How long to wait to establish a proxy connection. (defaults to 30 seconds)

  set_tcp_nodelay: true // If true, will turn on the underlying sockets TCP_NODELAY option.
}
```

### Class Method: SocksClient.createConnection(options[, callback])
* ```options``` { SocksClientOptions } - An object describing the SOCKS proxy to use, the command to send and establish, and the destination host to connect to.
* ```callback``` { Function } - Optional callback function that is called when the proxy connection is established, or an error occurs.
* ```returns``` { Promise } - A Promise is returned that is resolved when the proxy connection is established, or rejected when an error occurs.

Creates a new proxy connection through the given proxy to the given destination host. This factory function supports callbacks and promises for async flow control.

**Note:** If a callback function is provided, the promise will always resolve regardless of an error occurring. Please be sure to exclusively use either promises or callbacks when using this factory function.

```typescript
const options = {
  proxy: {
    host: '159.203.75.200', // ipv4, ipv6, or hostname
    port: 1080,
    type: 5 // Proxy version (4 or 5)
  },

  command: 'connect', // connect, bind, associate

  destination: {
    host: '192.30.253.113', // ipv4, ipv6, or hostname
    port: 80
  }
}

// Await/Async (uses a Promise)
try {
  const info = await SocksClient.createConnection(options);
  console.log(info);
  /*
  {
    socket: <Socket ...>,  // Raw net.Socket
  }
  */
  / <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)

} catch (err) {
  // Handle error...
}

// Promise
SocksClient.createConnection(options)
.then(info => {
  console.log(info);
  /*
  {
    socket: <Socket ...>,  // Raw net.Socket
  }
  */
})
.catch(err => {
  // Handle error...
});

// Callback
SocksClient.createConnection(options, (err, info) => {
  if (!err) {
    console.log(info);
  /*
  {
    socket: <Socket ...>,  // Raw net.Socket
  }
  */
  } else {
    // Handle error...
  }
});
```

### Class Method: SocksClient.createConnectionChain(options[, callback])
* ```options``` { SocksClientChainOptions } - An object describing a list of SOCKS proxies to use, the command to send and establish, and the destination host to connect to.
* ```callback``` { Function } - Optional callback function that is called when the proxy connection chain is established, or an error occurs.
* ```returns``` { Promise } - A Promise is returned that is resolved when the proxy connection chain is established, or rejected when an error occurs.

Creates a new proxy connection chain through a list of at least two SOCKS proxies to the given destination host. This factory method supports callbacks and promises for async flow control.

**Note:** If a callback function is provided, the promise will always resolve regardless of an error occurring. Please be sure to exclusively use either promises or callbacks when using this factory function.

**Note:** At least two proxies must be provided for the chain to be established.

```typescript
const options = {
  proxies: [ // The chain order is the order in the proxies array, meaning the last proxy will establish a connection to the destination.
    {
      host: '159.203.75.235', // ipv4, ipv6, or hostname
      port: 1081,
      type: 5
    },
    {
      host: '104.131.124.203', // ipv4, ipv6, or hostname
      port: 1081,
      type: 5
    }
  ]

  command: 'connect', // Only connect is supported in chaining mode.

  destination: {
    host: '192.30.253.113', // ipv4, ipv6, hostname
    port: 80
  }
}
```

### Class Method: SocksClient.createUDPFrame(details)
* ```details``` { SocksUDPFrameDetails } - An object containing the remote host, frame number, and frame data to use when creating a SOCKS UDP frame packet.
* ```returns``` { Buffer } - A Buffer containing all of the UDP frame data.

Creates a SOCKS UDP frame relay packet that is sent and received via a SOCKS proxy when using the associate command for UDP packet forwarding.

**SocksUDPFrameDetails**

```typescript
{
  frameNumber: 0, // The frame number (used for breaking up larger packets)

  remoteHost: { // The remote host to have the proxy send data to, or the remote host that send this data.
    host: '1.2.3.4',
    port: 1234
  },

  data: <Buffer 01 02 03 04...> // A Buffer instance of data to include in the packet (actual data sent to the remote host)
}
interface SocksUDPFrameDetails {
  // The frame number of the packet.
  frameNumber?: number;

  // The remote host.
  remoteHost: SocksRemoteHost;

  // The packet data.
  data: Buffer;
}
```

### Class Method: SocksClient.parseUDPFrame(data)
* ```data``` { Buffer } - A Buffer instance containing SOCKS UDP frame data to parse.
* ```returns``` { SocksUDPFrameDetails } - An object containing the remote host, frame number, and frame data of the SOCKS UDP frame.

```typescript
const frame = SocksClient.parseUDPFrame(data);
console.log(frame);
/*
{
  frameNumber: 0,
  remoteHost: {
    host: '1.2.3.4',
    port: 1234
  },
  data: <Buffer 01 02 03 04 ...>
}
*/
```

Parses a Buffer instance and returns the parsed SocksUDPFrameDetails object.

## Event: 'error'
* ```err``` { SocksClientError } - An Error object containing an error message and the original SocksClientOptions.

This event is emitted if an error occurs when trying to establish the proxy connection.

## Event: 'bound'
* ```info``` { SocksClientBoundEvent } An object containing a Socket and SocksRemoteHost info.

This event is emitted when using the BIND command on a remote SOCKS proxy server. This event indicates the proxy server is now listening for incoming connections on a specified port.

**SocksClientBoundEvent**
```typescript
{
  socket: net.Socket, // The underlying raw Socket
  remoteHost: {
    host: '1.2.3.4', // The remote host that is listening (usually the proxy itself)
    port: 4444 // The remote port the proxy is listening on for incoming connections (when using BIND).
  }
}
```

## Event: 'established'
* ```info``` { SocksClientEstablishedEvent } An object containing a Socket and SocksRemoteHost info.

This event is emitted when the following conditions are met:
1. When using the CONNECT command, and a proxy connection has been established to the remote host.
2. When using the BIND command, and an incoming connection has been accepted by the proxy and a TCP relay has been established.
3. When using the ASSOCIATE command, and a UDP relay has been established.

When using BIND, 'bound' is first emitted to indicate the SOCKS server is waiting for an incoming connection, and provides the remote port the SOCKS server is listening on.

When using ASSOCIATE, 'established' is emitted with the remote UDP port the SOCKS server is accepting UDP frame packets on.

**SocksClientEstablishedEvent**
```typescript
{
  socket: net.Socket, // The underlying raw Socket
  remoteHost: {
    host: '1.2.3.4', // The remote host that is listening (usually the proxy itself)
    port: 52738 // The remote port the proxy is listening on for incoming connections (when using BIND).
  }
}
```

## client.connect()

Starts connecting to the remote SOCKS proxy server to establish a proxy connection to the destination host.

## client.socksClientOptions
* ```returns``` { SocksClientOptions } The options that were passed to the SocksClient.

Gets the options that were passed to the SocksClient when it was created.


**SocksClientError**
```typescript
{ // Subclassed from Error.
  message: 'An error has occurred',
  options: {
    // SocksClientOptions
  }
}
```

# Further Reading:

Please read the SOCKS 5 specifications for more information on how to use BIND and Associate.
http://www.ietf.org/rfc/rfc1928.txt

# License

This work is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

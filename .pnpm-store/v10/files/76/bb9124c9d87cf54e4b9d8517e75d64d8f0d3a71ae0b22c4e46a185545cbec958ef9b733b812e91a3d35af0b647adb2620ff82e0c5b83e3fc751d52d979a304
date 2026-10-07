base64id
========

Node.js module that generates a base64 id.

Uses crypto.randomBytes when available, falls back to unsafe methods for node.js <= 0.4.

To increase performance, random bytes are buffered to minimize the number of synchronous calls to crypto.randomBytes.

## Installation

   $ npm install base64id

## Usage

   var base64id = require('base64id');

   var id = base64id.generateId();

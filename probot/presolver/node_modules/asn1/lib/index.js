// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

// If you have no idea what ASN.1 or BER is, see this:
// ftp://ftp.rsa.com/pub/pkcs/ascii/layman.asc

var Ber = require('./ber/index');



// --- Exported API

module.exports = {

  Ber: Ber,

  BerReader: Ber.Reader,

  BerWriter: Ber.Writer

};

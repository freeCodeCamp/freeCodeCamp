var ecc = require("./index.js");
var key1 = new ecc.ECKey(ecc.ECCurves.secp160r1);
var key2 = new ecc.ECKey(ecc.ECCurves.secp160r1);
console.log(key1.deriveSharedSecret(key2));
var key3 = new ecc.ECKey(ecc.ECCurves.secp160r1,key1.PrivateKey);
var key4 = new ecc.ECKey(ecc.ECCurves.secp160r1,key2.PublicKey,true);
console.log(key3.deriveSharedSecret(key4));

var key1 = new ecc.ECKey(ecc.ECCurves.secp256r1);
var key2 = new ecc.ECKey(ecc.ECCurves.secp256r1);
console.log(key1.deriveSharedSecret(key2));
var key3 = new ecc.ECKey(ecc.ECCurves.secp256r1,key1.PrivateKey);
var key4 = new ecc.ECKey(ecc.ECCurves.secp256r1,key2.PublicKey,true);
console.log(key3.deriveSharedSecret(key4));

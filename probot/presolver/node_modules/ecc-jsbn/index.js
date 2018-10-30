var crypto = require("crypto");
var BigInteger = require("jsbn").BigInteger;
var ECPointFp = require("./lib/ec.js").ECPointFp;
var Buffer = require("safer-buffer").Buffer;
exports.ECCurves = require("./lib/sec.js");

// zero prepad
function unstupid(hex,len)
{
	return (hex.length >= len) ? hex : unstupid("0"+hex,len);
}

exports.ECKey = function(curve, key, isPublic)
{
  var priv;
	var c = curve();
	var n = c.getN();
  var bytes = Math.floor(n.bitLength()/8);

  if(key)
  {
    if(isPublic)
    {
      var curve = c.getCurve();
//      var x = key.slice(1,bytes+1); // skip the 04 for uncompressed format
//      var y = key.slice(bytes+1);
//      this.P = new ECPointFp(curve,
//        curve.fromBigInteger(new BigInteger(x.toString("hex"), 16)),
//        curve.fromBigInteger(new BigInteger(y.toString("hex"), 16)));      
      this.P = curve.decodePointHex(key.toString("hex"));
    }else{
      if(key.length != bytes) return false;
      priv = new BigInteger(key.toString("hex"), 16);      
    }
  }else{
    var n1 = n.subtract(BigInteger.ONE);
    var r = new BigInteger(crypto.randomBytes(n.bitLength()));
    priv = r.mod(n1).add(BigInteger.ONE);
    this.P = c.getG().multiply(priv);
  }
  if(this.P)
  {
//  var pubhex = unstupid(this.P.getX().toBigInteger().toString(16),bytes*2)+unstupid(this.P.getY().toBigInteger().toString(16),bytes*2);
//  this.PublicKey = Buffer.from("04"+pubhex,"hex");
    this.PublicKey = Buffer.from(c.getCurve().encodeCompressedPointHex(this.P),"hex");
  }
  if(priv)
  {
    this.PrivateKey = Buffer.from(unstupid(priv.toString(16),bytes*2),"hex");
    this.deriveSharedSecret = function(key)
    {
      if(!key || !key.P) return false;
      var S = key.P.multiply(priv);
      return Buffer.from(unstupid(S.getX().toBigInteger().toString(16),bytes*2),"hex");
   }     
  }
}


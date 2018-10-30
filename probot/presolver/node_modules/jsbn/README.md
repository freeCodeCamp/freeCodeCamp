# jsbn: javascript big number

[Tom Wu's Original Website](http://www-cs-students.stanford.edu/~tjw/jsbn/)

I felt compelled to put this on github and publish to npm. I haven't tested every other big integer library out there, but the few that I have tested in comparison to this one have not even come close in performance. I am aware of the `bi` module on npm, however it has been modified and I wanted to publish the original without modifications. This is jsbn and jsbn2 from Tom Wu's original website above, with the modular pattern applied to prevent global leaks and to allow for use with node.js on the server side.

## usage

    var BigInteger = require('jsbn');
    
    var a = new BigInteger('91823918239182398123');
    alert(a.bitLength()); // 67


## API

### bi.toString()

returns the base-10 number as a string

### bi.negate()

returns a new BigInteger equal to the negation of `bi`

### bi.abs

returns new BI of absolute value

### bi.compareTo



### bi.bitLength



### bi.mod



### bi.modPowInt



### bi.clone



### bi.intValue



### bi.byteValue



### bi.shortValue



### bi.signum



### bi.toByteArray



### bi.equals



### bi.min



### bi.max



### bi.and



### bi.or



### bi.xor



### bi.andNot



### bi.not



### bi.shiftLeft



### bi.shiftRight



### bi.getLowestSetBit



### bi.bitCount



### bi.testBit



### bi.setBit



### bi.clearBit



### bi.flipBit



### bi.add



### bi.subtract



### bi.multiply



### bi.divide



### bi.remainder



### bi.divideAndRemainder



### bi.modPow



### bi.modInverse



### bi.pow



### bi.gcd



### bi.isProbablePrime



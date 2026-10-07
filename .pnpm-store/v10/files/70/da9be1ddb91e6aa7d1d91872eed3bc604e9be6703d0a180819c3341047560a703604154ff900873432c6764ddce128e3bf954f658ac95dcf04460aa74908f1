// Copyright © 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// LZ-based compression algorithm, version 1.0.2-rc1
var LZString = {

  writeBit : function(value, data) {
    data.val = (data.val << 1) | value;
    if (data.position == 15) {
      data.position = 0;
      data.string += String.fromCharCode(data.val);
      data.val = 0;
    } else {
      data.position++;
    }
  },
  
  writeBits : function(numBits, value, data) {
    if (typeof(value)=="string")
      value = value.charCodeAt(0);
    for (var i=0 ; i<numBits ; i++) {
      this.writeBit(value&1, data);
      value = value >> 1;
    }
  },
  
  produceW : function (context) {
    if (Object.prototype.hasOwnProperty.call(context.dictionaryToCreate,context.w)) {
      if (context.w.charCodeAt(0)<256) {
        this.writeBits(context.numBits, 0, context.data);
        this.writeBits(8, context.w, context.data);
      } else {
        this.writeBits(context.numBits, 1, context.data);
        this.writeBits(16, context.w, context.data);
      }
      this.decrementEnlargeIn(context);
      delete context.dictionaryToCreate[context.w];
    } else {
      this.writeBits(context.numBits, context.dictionary[context.w], context.data);
    }
    this.decrementEnlargeIn(context);
  },
  
  decrementEnlargeIn : function(context) {
    context.enlargeIn--;
    if (context.enlargeIn == 0) {
      context.enlargeIn = Math.pow(2, context.numBits);
      context.numBits++;
    }
  },
  
  compress: function (uncompressed) {
    var context = {
      dictionary: {},
      dictionaryToCreate: {},
      c:"",
      wc:"",
      w:"",
      enlargeIn: 2, // Compensate for the first entry which should not count
      dictSize: 3,
      numBits: 2,
      result: "",
      data: {string:"", val:0, position:0}
    }, i;
    
    for (i = 0; i < uncompressed.length; i += 1) {
      context.c = uncompressed.charAt(i);
      if (!Object.prototype.hasOwnProperty.call(context.dictionary,context.c)) {
        context.dictionary[context.c] = context.dictSize++;
        context.dictionaryToCreate[context.c] = true;
      }
      
      context.wc = context.w + context.c;
      if (Object.prototype.hasOwnProperty.call(context.dictionary,context.wc)) {
        context.w = context.wc;
      } else {
        this.produceW(context);
        // Add wc to the dictionary.
        context.dictionary[context.wc] = context.dictSize++;
        context.w = String(context.c);
      }
    }
    
    // Output the code for w.
    if (context.w !== "") {
      this.produceW(context);
    }
    
    // Mark the end of the stream
    this.writeBits(context.numBits, 2, context.data);
    
    // Flush the last char
    while (context.data.val>0) this.writeBit(0,context.data)
    return context.data.string;
  },
  
  readBit : function(data) {
    var res = data.val & data.position;
    data.position >>= 1;
    if (data.position == 0) {
      data.position = 32768;
      data.val = data.string.charCodeAt(data.index++);
    }
    //data.val = (data.val << 1);
    return res>0 ? 1 : 0;
  },
  
  readBits : function(numBits, data) {
    var res = 0;
    var maxpower = Math.pow(2,numBits);
    var power=1;
    while (power!=maxpower) {
      res |= this.readBit(data) * power;
      power <<= 1;
    }
    return res;
  },
  
  decompress: function (compressed) {
    var dictionary = {},
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = "",
        i,
        w,
        c,
        errorCount=0,
        literal,
        data = {string:compressed, val:compressed.charCodeAt(0), position:32768, index:1};
    
    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }
    
    next = this.readBits(2, data);
    switch (next) {
      case 0: 
        c = String.fromCharCode(this.readBits(8, data));
        break;
      case 1: 
        c = String.fromCharCode(this.readBits(16, data));
        break;
      case 2: 
        return "";
    }
    dictionary[3] = c;
    w = result = c;
    while (true) {
      c = this.readBits(numBits, data);
      
      switch (c) {
        case 0: 
          if (errorCount++ > 10000) return "Error";
          c = String.fromCharCode(this.readBits(8, data));
          dictionary[dictSize++] = c;
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1: 
          c = String.fromCharCode(this.readBits(16, data));
          dictionary[dictSize++] = c;
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2: 
          return result;
      }
      
      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result += entry;
      
      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;
      
      w = entry;
      
      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }
      
    }
    return result;
  }
};

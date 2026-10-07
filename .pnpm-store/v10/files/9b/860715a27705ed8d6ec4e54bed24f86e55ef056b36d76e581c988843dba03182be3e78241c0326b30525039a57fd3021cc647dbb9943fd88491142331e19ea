// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// This lib is part of the lz-string project.
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/index.html
//
// Base64 compression / decompression for already compressed content (gif, png, jpg, mp3, ...) 
// version 1.4.1
var Base64String = {
  
  compressToUTF16 : function (input) {
    var output = [],
        i,c,
        current,
        status = 0;
    
    input = this.compress(input);
    
    for (i=0 ; i<input.length ; i++) {
      c = input.charCodeAt(i);
      switch (status++) {
        case 0:
          output.push(String.fromCharCode((c >> 1)+32));
          current = (c & 1) << 14;
          break;
        case 1:
          output.push(String.fromCharCode((current + (c >> 2))+32));
          current = (c & 3) << 13;
          break;
        case 2:
          output.push(String.fromCharCode((current + (c >> 3))+32));
          current = (c & 7) << 12;
          break;
        case 3:
          output.push(String.fromCharCode((current + (c >> 4))+32));
          current = (c & 15) << 11;
          break;
        case 4:
          output.push(String.fromCharCode((current + (c >> 5))+32));
          current = (c & 31) << 10;
          break;
        case 5:
          output.push(String.fromCharCode((current + (c >> 6))+32));
          current = (c & 63) << 9;
          break;
        case 6:
          output.push(String.fromCharCode((current + (c >> 7))+32));
          current = (c & 127) << 8;
          break;
        case 7:
          output.push(String.fromCharCode((current + (c >> 8))+32));
          current = (c & 255) << 7;
          break;
        case 8:
          output.push(String.fromCharCode((current + (c >> 9))+32));
          current = (c & 511) << 6;
          break;
        case 9:
          output.push(String.fromCharCode((current + (c >> 10))+32));
          current = (c & 1023) << 5;
          break;
        case 10:
          output.push(String.fromCharCode((current + (c >> 11))+32));
          current = (c & 2047) << 4;
          break;
        case 11:
          output.push(String.fromCharCode((current + (c >> 12))+32));
          current = (c & 4095) << 3;
          break;
        case 12:
          output.push(String.fromCharCode((current + (c >> 13))+32));
          current = (c & 8191) << 2;
          break;
        case 13:
          output.push(String.fromCharCode((current + (c >> 14))+32));
          current = (c & 16383) << 1;
          break;
        case 14:
          output.push(String.fromCharCode((current + (c >> 15))+32, (c & 32767)+32));
          status = 0;
          break;
      }
    }
    output.push(String.fromCharCode(current + 32));
    return output.join('');
  },
  

  decompressFromUTF16 : function (input) {
    var output = [],
        current,c,
        status=0,
        i = 0;
    
    while (i < input.length) {
      c = input.charCodeAt(i) - 32;
      
      switch (status++) {
        case 0:
          current = c << 1;
          break;
        case 1:
          output.push(String.fromCharCode(current | (c >> 14)));
          current = (c&16383) << 2;
          break;
        case 2:
          output.push(String.fromCharCode(current | (c >> 13)));
          current = (c&8191) << 3;
          break;
        case 3:
          output.push(String.fromCharCode(current | (c >> 12)));
          current = (c&4095) << 4;
          break;
        case 4:
          output.push(String.fromCharCode(current | (c >> 11)));
          current = (c&2047) << 5;
          break;
        case 5:
          output.push(String.fromCharCode(current | (c >> 10)));
          current = (c&1023) << 6;
          break;
        case 6:
          output.push(String.fromCharCode(current | (c >> 9)));
          current = (c&511) << 7;
          break;
        case 7:
          output.push(String.fromCharCode(current | (c >> 8)));
          current = (c&255) << 8;
          break;
        case 8:
          output.push(String.fromCharCode(current | (c >> 7)));
          current = (c&127) << 9;
          break;
        case 9:
          output.push(String.fromCharCode(current | (c >> 6)));
          current = (c&63) << 10;
          break;
        case 10:
          output.push(String.fromCharCode(current | (c >> 5)));
          current = (c&31) << 11;
          break;
        case 11:
          output.push(String.fromCharCode(current | (c >> 4)));
          current = (c&15) << 12;
          break;
        case 12:
          output.push(String.fromCharCode(current | (c >> 3)));
          current = (c&7) << 13;
          break;
        case 13:
          output.push(String.fromCharCode(current | (c >> 2)));
          current = (c&3) << 14;
          break;
        case 14:
          output.push(String.fromCharCode(current | (c >> 1)));
          current = (c&1) << 15;
          break;
        case 15:
          output.push(String.fromCharCode(current | c));
          status=0;
          break;
      }
      
      
      i++;
    }
    
    return this.decompress(output.join(''));
    //return output;
    
  },


  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  
  decompress : function (input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 1;
    var odd = input.charCodeAt(0) >> 8;
    
    while (i < input.length*2 && (i < input.length*2-1 || odd==0)) {
      
      if (i%2==0) {
        chr1 = input.charCodeAt(i/2) >> 8;
        chr2 = input.charCodeAt(i/2) & 255;
        if (i/2+1 < input.length) 
          chr3 = input.charCodeAt(i/2+1) >> 8;
        else 
          chr3 = NaN;
      } else {
        chr1 = input.charCodeAt((i-1)/2) & 255;
        if ((i+1)/2 < input.length) {
          chr2 = input.charCodeAt((i+1)/2) >> 8;
          chr3 = input.charCodeAt((i+1)/2) & 255;
        } else 
          chr2=chr3=NaN;
      }
      i+=3;
      
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      
      if (isNaN(chr2) || (i==input.length*2+1 && odd)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3) || (i==input.length*2 && odd)) {
        enc4 = 64;
      }
      
      output.push(this._keyStr.charAt(enc1));
      output.push(this._keyStr.charAt(enc2));
      output.push(this._keyStr.charAt(enc3));
      output.push(this._keyStr.charAt(enc4));
    }
    
    return output.join('');
  },
  
  compress : function (input) {
    var output = [],
        ol = 1, 
        output_,
        chr1, chr2, chr3,
        enc1, enc2, enc3, enc4,
        i = 0, flush=false;
    
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
    while (i < input.length) {
      
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      
      if (ol%2==0) {
        output_ = chr1 << 8;
        flush = true;
        
        if (enc3 != 64) {
          output.push(String.fromCharCode(output_ | chr2));
          flush = false;
        }
        if (enc4 != 64) {
          output_ = chr3 << 8;
          flush = true;
        }
      } else {
        output.push(String.fromCharCode(output_ | chr1));
        flush = false;
        
        if (enc3 != 64) {
          output_ = chr2 << 8;
          flush = true;
        }
        if (enc4 != 64) {
          output.push(String.fromCharCode(output_ | chr3));
          flush = false;
        }
      }
      ol+=3;
    }
    
    if (flush) {
      output.push(String.fromCharCode(output_));
      output = output.join('');
      output = String.fromCharCode(output.charCodeAt(0)|256) + output.substring(1);
    } else {
      output = output.join('');
    }
    
    return output;
    
  }
}

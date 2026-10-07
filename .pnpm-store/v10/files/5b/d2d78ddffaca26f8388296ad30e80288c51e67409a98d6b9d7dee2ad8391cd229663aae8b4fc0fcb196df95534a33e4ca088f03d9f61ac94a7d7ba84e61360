/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */
!function(){function t(h,r){var s=this instanceof t?this:e;return s.reset(r),"string"==typeof h&&h.length>0&&s.hash(h),s!==this?s:void 0}var e;t.prototype.hash=function(t){var e,h,r,s,i;switch(i=t.length,this.len+=i,h=this.k1,r=0,this.rem){case 0:h^=i>r?65535&t.charCodeAt(r++):0;case 1:h^=i>r?(65535&t.charCodeAt(r++))<<8:0;case 2:h^=i>r?(65535&t.charCodeAt(r++))<<16:0;case 3:h^=i>r?(255&t.charCodeAt(r))<<24:0,h^=i>r?(65280&t.charCodeAt(r++))>>8:0}if(this.rem=3&i+this.rem,i-=this.rem,i>0){for(e=this.h1;;){if(h=4294967295&11601*h+3432906752*(65535&h),h=h<<15|h>>>17,h=4294967295&13715*h+461832192*(65535&h),e^=h,e=e<<13|e>>>19,e=4294967295&5*e+3864292196,r>=i)break;h=65535&t.charCodeAt(r++)^(65535&t.charCodeAt(r++))<<8^(65535&t.charCodeAt(r++))<<16,s=t.charCodeAt(r++),h^=(255&s)<<24^(65280&s)>>8}switch(h=0,this.rem){case 3:h^=(65535&t.charCodeAt(r+2))<<16;case 2:h^=(65535&t.charCodeAt(r+1))<<8;case 1:h^=65535&t.charCodeAt(r)}this.h1=e}return this.k1=h,this},t.prototype.result=function(){var t,e;return t=this.k1,e=this.h1,t>0&&(t=4294967295&11601*t+3432906752*(65535&t),t=t<<15|t>>>17,t=4294967295&13715*t+461832192*(65535&t),e^=t),e^=this.len,e^=e>>>16,e=4294967295&51819*e+2246770688*(65535&e),e^=e>>>13,e=4294967295&44597*e+3266445312*(65535&e),e^=e>>>16,e>>>0},t.prototype.reset=function(t){return this.h1="number"==typeof t?t:0,this.rem=this.k1=this.len=0,this},e=new t,"undefined"!=typeof module?module.exports=t:this.MurmurHash3=t}();
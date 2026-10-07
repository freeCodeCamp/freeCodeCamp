(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.csso = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var csstree_min = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){function e(e){return {prev:null,next:null,data:e}}function t(e,t,n){var i;return null!==r?(i=r,r=r.cursor,i.prev=t,i.next=n,i.cursor=e.cursor):i={prev:t,next:n,cursor:e.cursor},e.cursor=i,i}function n(e){var t=e.cursor;e.cursor=t.cursor,t.prev=null,t.next=null,t.cursor=r,r=t;}var r=null,i=function(){this.cursor=null,this.head=null,this.tail=null;};i.createItem=e,i.prototype.createItem=e,i.prototype.updateCursors=function(e,t,n,r){for(var i=this.cursor;null!==i;)i.prev===e&&(i.prev=t),i.next===n&&(i.next=r),i=i.cursor;},i.prototype.getSize=function(){for(var e=0,t=this.head;t;)e++,t=t.next;return e},i.prototype.fromArray=function(t){var n=null;this.head=null;for(var r=0;r<t.length;r++){var i=e(t[r]);null!==n?n.next=i:this.head=i,i.prev=n,n=i;}return this.tail=n,this},i.prototype.toArray=function(){for(var e=this.head,t=[];e;)t.push(e.data),e=e.next;return t},i.prototype.toJSON=i.prototype.toArray,i.prototype.isEmpty=function(){return null===this.head},i.prototype.first=function(){return this.head&&this.head.data},i.prototype.last=function(){return this.tail&&this.tail.data},i.prototype.each=function(e,r){var i;void 0===r&&(r=this);for(var a=t(this,null,this.head);null!==a.next;)i=a.next,a.next=i.next,e.call(r,i.data,i,this);n(this);},i.prototype.forEach=i.prototype.each,i.prototype.eachRight=function(e,r){var i;void 0===r&&(r=this);for(var a=t(this,this.tail,null);null!==a.prev;)i=a.prev,a.prev=i.prev,e.call(r,i.data,i,this);n(this);},i.prototype.forEachRight=i.prototype.eachRight,i.prototype.reduce=function(e,r,i){var a;void 0===i&&(i=this);for(var o=t(this,null,this.head),s=r;null!==o.next;)a=o.next,o.next=a.next,s=e.call(i,s,a.data,a,this);return n(this),s},i.prototype.reduceRight=function(e,r,i){var a;void 0===i&&(i=this);for(var o=t(this,this.tail,null),s=r;null!==o.prev;)a=o.prev,o.prev=a.prev,s=e.call(i,s,a.data,a,this);return n(this),s},i.prototype.nextUntil=function(e,r,i){if(null!==e){var a;void 0===i&&(i=this);for(var o=t(this,null,e);null!==o.next&&(a=o.next,o.next=a.next,!r.call(i,a.data,a,this)););n(this);}},i.prototype.prevUntil=function(e,r,i){if(null!==e){var a;void 0===i&&(i=this);for(var o=t(this,e,null);null!==o.prev&&(a=o.prev,o.prev=a.prev,!r.call(i,a.data,a,this)););n(this);}},i.prototype.some=function(e,t){var n=this.head;for(void 0===t&&(t=this);null!==n;){if(e.call(t,n.data,n,this))return !0;n=n.next;}return !1},i.prototype.map=function(e,t){var n=new i,r=this.head;for(void 0===t&&(t=this);null!==r;)n.appendData(e.call(t,r.data,r,this)),r=r.next;return n},i.prototype.filter=function(e,t){var n=new i,r=this.head;for(void 0===t&&(t=this);null!==r;)e.call(t,r.data,r,this)&&n.appendData(r.data),r=r.next;return n},i.prototype.clear=function(){this.head=null,this.tail=null;},i.prototype.copy=function(){for(var t=new i,n=this.head;null!==n;)t.insert(e(n.data)),n=n.next;return t},i.prototype.prepend=function(e){return this.updateCursors(null,e,this.head,e),null!==this.head?(this.head.prev=e,e.next=this.head):this.tail=e,this.head=e,this},i.prototype.prependData=function(t){return this.prepend(e(t))},i.prototype.append=function(e){return this.insert(e)},i.prototype.appendData=function(t){return this.insert(e(t))},i.prototype.insert=function(e,t){if(null!=t)if(this.updateCursors(t.prev,e,t,e),null===t.prev){if(this.head!==t)throw new Error("before doesn't belong to list");this.head=e,t.prev=e,e.next=t,this.updateCursors(null,e);}else t.prev.next=e,e.prev=t.prev,t.prev=e,e.next=t;else this.updateCursors(this.tail,e,null,e),null!==this.tail?(this.tail.next=e,e.prev=this.tail):this.head=e,this.tail=e;return this},i.prototype.insertData=function(t,n){return this.insert(e(t),n)},i.prototype.remove=function(e){if(this.updateCursors(e,e.prev,e,e.next),null!==e.prev)e.prev.next=e.next;else {if(this.head!==e)throw new Error("item doesn't belong to list");this.head=e.next;}if(null!==e.next)e.next.prev=e.prev;else {if(this.tail!==e)throw new Error("item doesn't belong to list");this.tail=e.prev;}return e.prev=null,e.next=null,e},i.prototype.push=function(t){this.insert(e(t));},i.prototype.pop=function(){if(null!==this.tail)return this.remove(this.tail)},i.prototype.unshift=function(t){this.prepend(e(t));},i.prototype.shift=function(){if(null!==this.head)return this.remove(this.head)},i.prototype.prependList=function(e){return this.insertList(e,this.head)},i.prototype.appendList=function(e){return this.insertList(e)},i.prototype.insertList=function(e,t){return null===e.head||(null!=t?(this.updateCursors(t.prev,e.tail,t,e.head),null!==t.prev?(t.prev.next=e.head,e.head.prev=t.prev):this.head=e.head,t.prev=e.tail,e.tail.next=t):(this.updateCursors(this.tail,e.tail,null,e.head),null!==this.tail?(this.tail.next=e.head,e.head.prev=this.tail):this.head=e.head,this.tail=e.tail),e.head=null,e.tail=null),this},i.prototype.replace=function(e,t){"head"in t?this.insertList(t,e):this.insert(t,e),this.remove(e);};var a=i,o=function(e,t){var n=Object.create(SyntaxError.prototype),r=new Error;return n.name=e,n.message=t,Object.defineProperty(n,"stack",{get:function(){return (r.stack||"").replace(/^(.+\n){1,3}/,e+": "+t+"\n")}}),n};function s(e,t){function n(e,t){return r.slice(e,t).map((function(t,n){for(var r=String(e+n+1);r.length<l;)r=" "+r;return r+" |"+t})).join("\n")}var r=e.source.split(/\r\n?|\n|\f/),i=e.line,a=e.column,o=Math.max(1,i-t)-1,s=Math.min(i+t,r.length+1),l=Math.max(4,String(s).length)+1,c=0;(a+=("    ".length-1)*(r[i-1].substr(0,a-1).match(/\t/g)||[]).length)>100&&(c=a-60+3,a=58);for(var u=o;u<=s;u++)u>=0&&u<r.length&&(r[u]=r[u].replace(/\t/g,"    "),r[u]=(c>0&&r[u].length>c?"…":"")+r[u].substr(c,98)+(r[u].length>c+100-1?"…":""));return [n(o,i),new Array(a+l+2).join("-")+"^",n(i,s)].filter(Boolean).join("\n")}var l=function(e,t,n,r,i){var a=o("SyntaxError",e);return a.source=t,a.offset=n,a.line=r,a.column=i,a.sourceFragment=function(e){return s(a,isNaN(e)?0:e)},Object.defineProperty(a,"formattedMessage",{get:function(){return "Parse error: "+a.message+"\n"+s(a,2)}}),a.parseError={offset:n,line:r,column:i},a},c={EOF:0,Ident:1,Function:2,AtKeyword:3,Hash:4,String:5,BadString:6,Url:7,BadUrl:8,Delim:9,Number:10,Percentage:11,Dimension:12,WhiteSpace:13,CDO:14,CDC:15,Colon:16,Semicolon:17,Comma:18,LeftSquareBracket:19,RightSquareBracket:20,LeftParenthesis:21,RightParenthesis:22,LeftCurlyBracket:23,RightCurlyBracket:24,Comment:25},u=Object.keys(c).reduce((function(e,t){return e[c[t]]=t,e}),{}),h={TYPE:c,NAME:u};function p(e){return e>=48&&e<=57}function d(e){return e>=65&&e<=90}function m(e){return e>=97&&e<=122}function g(e){return d(e)||m(e)}function f(e){return e>=128}function b(e){return g(e)||f(e)||95===e}function y(e){return e>=0&&e<=8||11===e||e>=14&&e<=31||127===e}function k(e){return 10===e||13===e||12===e}function v(e){return k(e)||32===e||9===e}function x(e,t){return 92===e&&(!k(t)&&0!==t)}var w=new Array(128);C.Eof=128,C.WhiteSpace=130,C.Digit=131,C.NameStart=132,C.NonPrintable=133;for(var S=0;S<w.length;S++)switch(!0){case v(S):w[S]=C.WhiteSpace;break;case p(S):w[S]=C.Digit;break;case b(S):w[S]=C.NameStart;break;case y(S):w[S]=C.NonPrintable;break;default:w[S]=S||C.Eof;}function C(e){return e<128?w[e]:C.NameStart}var z={isDigit:p,isHexDigit:function(e){return p(e)||e>=65&&e<=70||e>=97&&e<=102},isUppercaseLetter:d,isLowercaseLetter:m,isLetter:g,isNonAscii:f,isNameStart:b,isName:function(e){return b(e)||p(e)||45===e},isNonPrintable:y,isNewline:k,isWhiteSpace:v,isValidEscape:x,isIdentifierStart:function(e,t,n){return 45===e?b(t)||45===t||x(t,n):!!b(e)||92===e&&x(e,t)},isNumberStart:function(e,t,n){return 43===e||45===e?p(t)?2:46===t&&p(n)?3:0:46===e?p(t)?2:0:p(e)?1:0},isBOM:function(e){return 65279===e||65534===e?1:0},charCodeCategory:C},A=z.isDigit,P=z.isHexDigit,T=z.isUppercaseLetter,L=z.isName,E=z.isWhiteSpace,D=z.isValidEscape;function O(e,t){return t<e.length?e.charCodeAt(t):0}function B(e,t,n){return 13===n&&10===O(e,t+1)?2:1}function I(e,t,n){var r=e.charCodeAt(t);return T(r)&&(r|=32),r===n}function N(e,t){for(;t<e.length&&A(e.charCodeAt(t));t++);return t}function R(e,t){if(P(O(e,(t+=2)-1))){for(var n=Math.min(e.length,t+5);t<n&&P(O(e,t));t++);var r=O(e,t);E(r)&&(t+=B(e,t,r));}return t}var M={consumeEscaped:R,consumeName:function(e,t){for(;t<e.length;t++){var n=e.charCodeAt(t);if(!L(n)){if(!D(n,O(e,t+1)))break;t=R(e,t)-1;}}return t},consumeNumber:function(e,t){var n=e.charCodeAt(t);if(43!==n&&45!==n||(n=e.charCodeAt(t+=1)),A(n)&&(t=N(e,t+1),n=e.charCodeAt(t)),46===n&&A(e.charCodeAt(t+1))&&(n=e.charCodeAt(t+=2),t=N(e,t)),I(e,t,101)){var r=0;45!==(n=e.charCodeAt(t+1))&&43!==n||(r=1,n=e.charCodeAt(t+2)),A(n)&&(t=N(e,t+1+r+1));}return t},consumeBadUrlRemnants:function(e,t){for(;t<e.length;t++){var n=e.charCodeAt(t);if(41===n){t++;break}D(n,O(e,t+1))&&(t=R(e,t));}return t},cmpChar:I,cmpStr:function(e,t,n,r){if(n-t!==r.length)return !1;if(t<0||n>e.length)return !1;for(var i=t;i<n;i++){var a=e.charCodeAt(i),o=r.charCodeAt(i-t);if(T(a)&&(a|=32),a!==o)return !1}return !0},getNewlineLength:B,findWhiteSpaceStart:function(e,t){for(;t>=0&&E(e.charCodeAt(t));t--);return t+1},findWhiteSpaceEnd:function(e,t){for(;t<e.length&&E(e.charCodeAt(t));t++);return t}},j=h.TYPE,_=h.NAME,F=M.cmpStr,W=j.EOF,q=j.WhiteSpace,Y=j.Comment,U=function(){this.offsetAndType=null,this.balance=null,this.reset();};U.prototype={reset:function(){this.eof=!1,this.tokenIndex=-1,this.tokenType=0,this.tokenStart=this.firstCharOffset,this.tokenEnd=this.firstCharOffset;},lookupType:function(e){return (e+=this.tokenIndex)<this.tokenCount?this.offsetAndType[e]>>24:W},lookupOffset:function(e){return (e+=this.tokenIndex)<this.tokenCount?16777215&this.offsetAndType[e-1]:this.source.length},lookupValue:function(e,t){return (e+=this.tokenIndex)<this.tokenCount&&F(this.source,16777215&this.offsetAndType[e-1],16777215&this.offsetAndType[e],t)},getTokenStart:function(e){return e===this.tokenIndex?this.tokenStart:e>0?e<this.tokenCount?16777215&this.offsetAndType[e-1]:16777215&this.offsetAndType[this.tokenCount]:this.firstCharOffset},getRawLength:function(e,t){var n,r=e,i=16777215&this.offsetAndType[Math.max(r-1,0)];e:for(;r<this.tokenCount&&!((n=this.balance[r])<e);r++)switch(t(this.offsetAndType[r]>>24,this.source,i)){case 1:break e;case 2:r++;break e;default:i=16777215&this.offsetAndType[r],this.balance[n]===r&&(r=n);}return r-this.tokenIndex},isBalanceEdge:function(e){return this.balance[this.tokenIndex]<e},isDelim:function(e,t){return t?this.lookupType(t)===j.Delim&&this.source.charCodeAt(this.lookupOffset(t))===e:this.tokenType===j.Delim&&this.source.charCodeAt(this.tokenStart)===e},getTokenValue:function(){return this.source.substring(this.tokenStart,this.tokenEnd)},getTokenLength:function(){return this.tokenEnd-this.tokenStart},substrToCursor:function(e){return this.source.substring(e,this.tokenStart)},skipWS:function(){for(var e=this.tokenIndex,t=0;e<this.tokenCount&&this.offsetAndType[e]>>24===q;e++,t++);t>0&&this.skip(t);},skipSC:function(){for(;this.tokenType===q||this.tokenType===Y;)this.next();},skip:function(e){var t=this.tokenIndex+e;t<this.tokenCount?(this.tokenIndex=t,this.tokenStart=16777215&this.offsetAndType[t-1],t=this.offsetAndType[t],this.tokenType=t>>24,this.tokenEnd=16777215&t):(this.tokenIndex=this.tokenCount,this.next());},next:function(){var e=this.tokenIndex+1;e<this.tokenCount?(this.tokenIndex=e,this.tokenStart=this.tokenEnd,e=this.offsetAndType[e],this.tokenType=e>>24,this.tokenEnd=16777215&e):(this.tokenIndex=this.tokenCount,this.eof=!0,this.tokenType=W,this.tokenStart=this.tokenEnd=this.source.length);},forEachToken(e){for(var t=0,n=this.firstCharOffset;t<this.tokenCount;t++){var r=n,i=this.offsetAndType[t],a=16777215&i;n=a,e(i>>24,r,a,t);}},dump(){var e=new Array(this.tokenCount);return this.forEachToken((t,n,r,i)=>{e[i]={idx:i,type:_[t],chunk:this.source.substring(n,r),balance:this.balance[i]};}),e}};var H=U;function V(e){return e}function K(e,t,n,r){var i,a;switch(e.type){case"Group":i=function(e,t,n,r){var i=" "===e.combinator||r?e.combinator:" "+e.combinator+" ",a=e.terms.map((function(e){return K(e,t,n,r)})).join(i);return (e.explicit||n)&&(a=(r||","===a[0]?"[":"[ ")+a+(r?"]":" ]")),a}(e,t,n,r)+(e.disallowEmpty?"!":"");break;case"Multiplier":return K(e.term,t,n,r)+t(0===(a=e).min&&0===a.max?"*":0===a.min&&1===a.max?"?":1===a.min&&0===a.max?a.comma?"#":"+":1===a.min&&1===a.max?"":(a.comma?"#":"")+(a.min===a.max?"{"+a.min+"}":"{"+a.min+","+(0!==a.max?a.max:"")+"}"),e);case"Type":i="<"+e.name+(e.opts?t(function(e){switch(e.type){case"Range":return " ["+(null===e.min?"-∞":e.min)+","+(null===e.max?"∞":e.max)+"]";default:throw new Error("Unknown node type `"+e.type+"`")}}(e.opts),e.opts):"")+">";break;case"Property":i="<'"+e.name+"'>";break;case"Keyword":i=e.name;break;case"AtKeyword":i="@"+e.name;break;case"Function":i=e.name+"(";break;case"String":case"Token":i=e.value;break;case"Comma":i=",";break;default:throw new Error("Unknown node type `"+e.type+"`")}return t(i,e)}var G=function(e,t){var n=V,r=!1,i=!1;return "function"==typeof t?n=t:t&&(r=Boolean(t.forceBraces),i=Boolean(t.compact),"function"==typeof t.decorate&&(n=t.decorate)),K(e,n,r,i)};const Q={offset:0,line:1,column:1};function X(e,t){const n=e&&e.loc&&e.loc[t];return n?"line"in n?Z(n):n:null}function Z({offset:e,line:t,column:n},r){const i={offset:e,line:t,column:n};if(r){const e=r.split(/\n|\r\n?|\f/);i.offset+=r.length,i.line+=e.length-1,i.column=1===e.length?i.column+r.length:e.pop().length+1;}return i}var $=function(e,t){const n=o("SyntaxReferenceError",e+(t?" `"+t+"`":""));return n.reference=t,n},J=function(e,t,n,r){const i=o("SyntaxMatchError",e),{css:a,mismatchOffset:s,mismatchLength:l,start:c,end:u}=function(e,t){const n=e.tokens,r=e.longestMatch,i=r<n.length&&n[r].node||null,a=i!==t?i:null;let o,s,l=0,c=0,u=0,h="";for(let e=0;e<n.length;e++){const t=n[e].value;e===r&&(c=t.length,l=h.length),null!==a&&n[e].node===a&&(e<=r?u++:u=0),h+=t;}return r===n.length||u>1?(o=X(a||t,"end")||Z(Q,h),s=Z(o)):(o=X(a,"start")||Z(X(t,"start")||Q,h.slice(0,l)),s=X(a,"end")||Z(o,h.substr(l,c))),{css:h,mismatchOffset:l,mismatchLength:c,start:o,end:s}}(r,n);return i.rawMessage=e,i.syntax=t?G(t):"<generic>",i.css=a,i.mismatchOffset=s,i.mismatchLength=l,i.message=e+"\n  syntax: "+i.syntax+"\n   value: "+(a||"<empty string>")+"\n  --------"+new Array(i.mismatchOffset+1).join("-")+"^",Object.assign(i,c),i.loc={source:n&&n.loc&&n.loc.source||"<unknown>",start:c,end:u},i},ee=Object.prototype.hasOwnProperty,te=Object.create(null),ne=Object.create(null);function re(e,t){return t=t||0,e.length-t>=2&&45===e.charCodeAt(t)&&45===e.charCodeAt(t+1)}function ie(e,t){if(t=t||0,e.length-t>=3&&45===e.charCodeAt(t)&&45!==e.charCodeAt(t+1)){var n=e.indexOf("-",t+2);if(-1!==n)return e.substring(t,n+1)}return ""}var ae={keyword:function(e){if(ee.call(te,e))return te[e];var t=e.toLowerCase();if(ee.call(te,t))return te[e]=te[t];var n=re(t,0),r=n?"":ie(t,0);return te[e]=Object.freeze({basename:t.substr(r.length),name:t,vendor:r,prefix:r,custom:n})},property:function(e){if(ee.call(ne,e))return ne[e];var t=e,n=e[0];"/"===n?n="/"===e[1]?"//":"/":"_"!==n&&"*"!==n&&"$"!==n&&"#"!==n&&"+"!==n&&"&"!==n&&(n="");var r=re(t,n.length);if(!r&&(t=t.toLowerCase(),ee.call(ne,t)))return ne[e]=ne[t];var i=r?"":ie(t,n.length),a=t.substr(0,n.length+i.length);return ne[e]=Object.freeze({basename:t.substr(a.length),name:t.substr(n.length),hack:n,vendor:i,prefix:a,custom:r})},isCustomProperty:re,vendorPrefix:ie},oe="undefined"!=typeof Uint32Array?Uint32Array:Array,se=function(e,t){return null===e||e.length<t?new oe(Math.max(t+1024,16384)):e},le=h.TYPE,ce=z.isNewline,ue=z.isName,he=z.isValidEscape,pe=z.isNumberStart,de=z.isIdentifierStart,me=z.charCodeCategory,ge=z.isBOM,fe=M.cmpStr,be=M.getNewlineLength,ye=M.findWhiteSpaceEnd,ke=M.consumeEscaped,ve=M.consumeName,xe=M.consumeNumber,we=M.consumeBadUrlRemnants;function Se(e,t){function n(t){return t<o?e.charCodeAt(t):0}function r(){return h=xe(e,h),de(n(h),n(h+1),n(h+2))?(f=le.Dimension,void(h=ve(e,h))):37===n(h)?(f=le.Percentage,void h++):void(f=le.Number)}function i(){const t=h;return h=ve(e,h),fe(e,t,h,"url")&&40===n(h)?34===n(h=ye(e,h+1))||39===n(h)?(f=le.Function,void(h=t+4)):void function(){for(f=le.Url,h=ye(e,h);h<e.length;h++){var t=e.charCodeAt(h);switch(me(t)){case 41:return void h++;case me.Eof:return;case me.WhiteSpace:return 41===n(h=ye(e,h))||h>=e.length?void(h<e.length&&h++):(h=we(e,h),void(f=le.BadUrl));case 34:case 39:case 40:case me.NonPrintable:return h=we(e,h),void(f=le.BadUrl);case 92:if(he(t,n(h+1))){h=ke(e,h)-1;break}return h=we(e,h),void(f=le.BadUrl)}}}():40===n(h)?(f=le.Function,void h++):void(f=le.Ident)}function a(t){for(t||(t=n(h++)),f=le.String;h<e.length;h++){var r=e.charCodeAt(h);switch(me(r)){case t:return void h++;case me.Eof:return;case me.WhiteSpace:if(ce(r))return h+=be(e,h,r),void(f=le.BadString);break;case 92:if(h===e.length-1)break;var i=n(h+1);ce(i)?h+=be(e,h+1,i):he(r,i)&&(h=ke(e,h)-1);}}}t||(t=new H);for(var o=(e=String(e||"")).length,s=se(t.offsetAndType,o+1),l=se(t.balance,o+1),c=0,u=ge(n(0)),h=u,p=0,d=0,m=0;h<o;){var g=e.charCodeAt(h),f=0;switch(l[c]=o,me(g)){case me.WhiteSpace:f=le.WhiteSpace,h=ye(e,h+1);break;case 34:a();break;case 35:ue(n(h+1))||he(n(h+1),n(h+2))?(f=le.Hash,h=ve(e,h+1)):(f=le.Delim,h++);break;case 39:a();break;case 40:f=le.LeftParenthesis,h++;break;case 41:f=le.RightParenthesis,h++;break;case 43:pe(g,n(h+1),n(h+2))?r():(f=le.Delim,h++);break;case 44:f=le.Comma,h++;break;case 45:pe(g,n(h+1),n(h+2))?r():45===n(h+1)&&62===n(h+2)?(f=le.CDC,h+=3):de(g,n(h+1),n(h+2))?i():(f=le.Delim,h++);break;case 46:pe(g,n(h+1),n(h+2))?r():(f=le.Delim,h++);break;case 47:42===n(h+1)?(f=le.Comment,1===(h=e.indexOf("*/",h+2)+2)&&(h=e.length)):(f=le.Delim,h++);break;case 58:f=le.Colon,h++;break;case 59:f=le.Semicolon,h++;break;case 60:33===n(h+1)&&45===n(h+2)&&45===n(h+3)?(f=le.CDO,h+=4):(f=le.Delim,h++);break;case 64:de(n(h+1),n(h+2),n(h+3))?(f=le.AtKeyword,h=ve(e,h+1)):(f=le.Delim,h++);break;case 91:f=le.LeftSquareBracket,h++;break;case 92:he(g,n(h+1))?i():(f=le.Delim,h++);break;case 93:f=le.RightSquareBracket,h++;break;case 123:f=le.LeftCurlyBracket,h++;break;case 125:f=le.RightCurlyBracket,h++;break;case me.Digit:r();break;case me.NameStart:i();break;case me.Eof:break;default:f=le.Delim,h++;}switch(f){case p:for(p=(d=l[m=16777215&d])>>24,l[c]=m,l[m++]=c;m<c;m++)l[m]===o&&(l[m]=c);break;case le.LeftParenthesis:case le.Function:l[c]=d,d=(p=le.RightParenthesis)<<24|c;break;case le.LeftSquareBracket:l[c]=d,d=(p=le.RightSquareBracket)<<24|c;break;case le.LeftCurlyBracket:l[c]=d,d=(p=le.RightCurlyBracket)<<24|c;}s[c++]=f<<24|h;}for(s[c]=le.EOF<<24|h,l[c]=o,l[o]=o;0!==d;)d=l[m=16777215&d],l[m]=o;return t.source=e,t.firstCharOffset=u,t.offsetAndType=s,t.tokenCount=c,t.balance=l,t.reset(),t.next(),t}Object.keys(h).forEach((function(e){Se[e]=h[e];})),Object.keys(z).forEach((function(e){Se[e]=z[e];})),Object.keys(M).forEach((function(e){Se[e]=M[e];}));var Ce=Se,ze=Ce.isDigit,Ae=Ce.cmpChar,Pe=Ce.TYPE,Te=Pe.Delim,Le=Pe.WhiteSpace,Ee=Pe.Comment,De=Pe.Ident,Oe=Pe.Number,Be=Pe.Dimension;function Ie(e,t){return null!==e&&e.type===Te&&e.value.charCodeAt(0)===t}function Ne(e,t,n){for(;null!==e&&(e.type===Le||e.type===Ee);)e=n(++t);return t}function Re(e,t,n,r){if(!e)return 0;var i=e.value.charCodeAt(t);if(43===i||45===i){if(n)return 0;t++;}for(;t<e.value.length;t++)if(!ze(e.value.charCodeAt(t)))return 0;return r+1}function Me(e,t,n){var r=!1,i=Ne(e,t,n);if(null===(e=n(i)))return t;if(e.type!==Oe){if(!Ie(e,43)&&!Ie(e,45))return t;if(r=!0,i=Ne(n(++i),i,n),null===(e=n(i))&&e.type!==Oe)return 0}if(!r){var a=e.value.charCodeAt(0);if(43!==a&&45!==a)return 0}return Re(e,r?0:1,r,i)}var je=Ce.isHexDigit,_e=Ce.cmpChar,Fe=Ce.TYPE,We=Fe.Ident,qe=Fe.Delim,Ye=Fe.Number,Ue=Fe.Dimension;function He(e,t){return null!==e&&e.type===qe&&e.value.charCodeAt(0)===t}function Ve(e,t){return e.value.charCodeAt(0)===t}function Ke(e,t,n){for(var r=t,i=0;r<e.value.length;r++){var a=e.value.charCodeAt(r);if(45===a&&n&&0!==i)return Ke(e,t+i+1,!1)>0?6:0;if(!je(a))return 0;if(++i>6)return 0}return i}function Ge(e,t,n){if(!e)return 0;for(;He(n(t),63);){if(++e>6)return 0;t++;}return t}var Qe=Ce.isIdentifierStart,Xe=Ce.isHexDigit,Ze=Ce.isDigit,$e=Ce.cmpStr,Je=Ce.consumeNumber,et=Ce.TYPE,tt=["unset","initial","inherit"],nt=["calc(","-moz-calc(","-webkit-calc("];function rt(e,t){return t<e.length?e.charCodeAt(t):0}function it(e,t){return $e(e,0,e.length,t)}function at(e,t){for(var n=0;n<t.length;n++)if(it(e,t[n]))return !0;return !1}function ot(e,t){return t===e.length-2&&(92===e.charCodeAt(t)&&Ze(e.charCodeAt(t+1)))}function st(e,t,n){if(e&&"Range"===e.type){var r=Number(void 0!==n&&n!==t.length?t.substr(0,n):t);if(isNaN(r))return !0;if(null!==e.min&&r<e.min)return !0;if(null!==e.max&&r>e.max)return !0}return !1}function lt(e,t){var n=e.index,r=0;do{if(r++,e.balance<=n)break}while(e=t(r));return r}function ct(e){return function(t,n,r){return null===t?0:t.type===et.Function&&at(t.value,nt)?lt(t,n):e(t,n,r)}}function ut(e){return function(t){return null===t||t.type!==e?0:1}}function ht(e){return function(t,n,r){if(null===t||t.type!==et.Dimension)return 0;var i=Je(t.value,0);if(null!==e){var a=t.value.indexOf("\\",i),o=-1!==a&&ot(t.value,a)?t.value.substring(i,a):t.value.substr(i);if(!1===e.hasOwnProperty(o.toLowerCase()))return 0}return st(r,t.value,i)?0:1}}function pt(e){return "function"!=typeof e&&(e=function(){return 0}),function(t,n,r){return null!==t&&t.type===et.Number&&0===Number(t.value)?1:e(t,n,r)}}var dt,mt={"ident-token":ut(et.Ident),"function-token":ut(et.Function),"at-keyword-token":ut(et.AtKeyword),"hash-token":ut(et.Hash),"string-token":ut(et.String),"bad-string-token":ut(et.BadString),"url-token":ut(et.Url),"bad-url-token":ut(et.BadUrl),"delim-token":ut(et.Delim),"number-token":ut(et.Number),"percentage-token":ut(et.Percentage),"dimension-token":ut(et.Dimension),"whitespace-token":ut(et.WhiteSpace),"CDO-token":ut(et.CDO),"CDC-token":ut(et.CDC),"colon-token":ut(et.Colon),"semicolon-token":ut(et.Semicolon),"comma-token":ut(et.Comma),"[-token":ut(et.LeftSquareBracket),"]-token":ut(et.RightSquareBracket),"(-token":ut(et.LeftParenthesis),")-token":ut(et.RightParenthesis),"{-token":ut(et.LeftCurlyBracket),"}-token":ut(et.RightCurlyBracket),string:ut(et.String),ident:ut(et.Ident),"custom-ident":function(e){if(null===e||e.type!==et.Ident)return 0;var t=e.value.toLowerCase();return at(t,tt)||it(t,"default")?0:1},"custom-property-name":function(e){return null===e||e.type!==et.Ident||45!==rt(e.value,0)||45!==rt(e.value,1)?0:1},"hex-color":function(e){if(null===e||e.type!==et.Hash)return 0;var t=e.value.length;if(4!==t&&5!==t&&7!==t&&9!==t)return 0;for(var n=1;n<t;n++)if(!Xe(e.value.charCodeAt(n)))return 0;return 1},"id-selector":function(e){return null===e||e.type!==et.Hash?0:Qe(rt(e.value,1),rt(e.value,2),rt(e.value,3))?1:0},"an-plus-b":function(e,t){var n=0;if(!e)return 0;if(e.type===Oe)return Re(e,0,!1,n);if(e.type===De&&45===e.value.charCodeAt(0)){if(!Ae(e.value,1,110))return 0;switch(e.value.length){case 2:return Me(t(++n),n,t);case 3:return 45!==e.value.charCodeAt(2)?0:(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n));default:return 45!==e.value.charCodeAt(2)?0:Re(e,3,!0,n)}}else if(e.type===De||Ie(e,43)&&t(n+1).type===De){if(e.type!==De&&(e=t(++n)),null===e||!Ae(e.value,0,110))return 0;switch(e.value.length){case 1:return Me(t(++n),n,t);case 2:return 45!==e.value.charCodeAt(1)?0:(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n));default:return 45!==e.value.charCodeAt(1)?0:Re(e,2,!0,n)}}else if(e.type===Be){for(var r=e.value.charCodeAt(0),i=43===r||45===r?1:0,a=i;a<e.value.length&&ze(e.value.charCodeAt(a));a++);return a===i?0:Ae(e.value,a,110)?a+1===e.value.length?Me(t(++n),n,t):45!==e.value.charCodeAt(a+1)?0:a+2===e.value.length?(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n)):Re(e,a+2,!0,n):0}return 0},urange:function(e,t){var n=0;if(null===e||e.type!==We||!_e(e.value,0,117))return 0;if(null===(e=t(++n)))return 0;if(He(e,43))return null===(e=t(++n))?0:e.type===We?Ge(Ke(e,0,!0),++n,t):He(e,63)?Ge(1,++n,t):0;if(e.type===Ye){if(!Ve(e,43))return 0;var r=Ke(e,1,!0);return 0===r?0:null===(e=t(++n))?n:e.type===Ue||e.type===Ye?Ve(e,45)&&Ke(e,1,!1)?n+1:0:Ge(r,n,t)}return e.type===Ue&&Ve(e,43)?Ge(Ke(e,1,!0),++n,t):0},"declaration-value":function(e,t){if(!e)return 0;var n=0,r=0,i=e.index;e:do{switch(e.type){case et.BadString:case et.BadUrl:break e;case et.RightCurlyBracket:case et.RightParenthesis:case et.RightSquareBracket:if(e.balance>e.index||e.balance<i)break e;r--;break;case et.Semicolon:if(0===r)break e;break;case et.Delim:if("!"===e.value&&0===r)break e;break;case et.Function:case et.LeftParenthesis:case et.LeftSquareBracket:case et.LeftCurlyBracket:r++;}if(n++,e.balance<=i)break}while(e=t(n));return n},"any-value":function(e,t){if(!e)return 0;var n=e.index,r=0;e:do{switch(e.type){case et.BadString:case et.BadUrl:break e;case et.RightCurlyBracket:case et.RightParenthesis:case et.RightSquareBracket:if(e.balance>e.index||e.balance<n)break e}if(r++,e.balance<=n)break}while(e=t(r));return r},dimension:ct(ht(null)),angle:ct(ht({deg:!0,grad:!0,rad:!0,turn:!0})),decibel:ct(ht({db:!0})),frequency:ct(ht({hz:!0,khz:!0})),flex:ct(ht({fr:!0})),length:ct(pt(ht({px:!0,mm:!0,cm:!0,in:!0,pt:!0,pc:!0,q:!0,em:!0,ex:!0,ch:!0,rem:!0,vh:!0,vw:!0,vmin:!0,vmax:!0,vm:!0}))),resolution:ct(ht({dpi:!0,dpcm:!0,dppx:!0,x:!0})),semitones:ct(ht({st:!0})),time:ct(ht({s:!0,ms:!0})),percentage:ct((function(e,t,n){return null===e||e.type!==et.Percentage||st(n,e.value,e.value.length-1)?0:1})),zero:pt(),number:ct((function(e,t,n){if(null===e)return 0;var r=Je(e.value,0);return r===e.value.length||ot(e.value,r)?st(n,e.value,r)?0:1:0})),integer:ct((function(e,t,n){if(null===e||e.type!==et.Number)return 0;for(var r=43===e.value.charCodeAt(0)||45===e.value.charCodeAt(0)?1:0;r<e.value.length;r++)if(!Ze(e.value.charCodeAt(r)))return 0;return st(n,e.value,r)?0:1})),"-ms-legacy-expression":(dt="expression",dt+="(",function(e,t){return null!==e&&it(e.value,dt)?lt(e,t):0})},gt=function(e,t,n){var r=o("SyntaxError",e);return r.input=t,r.offset=n,r.rawMessage=e,r.message=r.rawMessage+"\n  "+r.input+"\n--"+new Array((r.offset||r.input.length)+1).join("-")+"^",r},ft=function(e){this.str=e,this.pos=0;};ft.prototype={charCodeAt:function(e){return e<this.str.length?this.str.charCodeAt(e):0},charCode:function(){return this.charCodeAt(this.pos)},nextCharCode:function(){return this.charCodeAt(this.pos+1)},nextNonWsCode:function(e){return this.charCodeAt(this.findWsEnd(e))},findWsEnd:function(e){for(;e<this.str.length;e++){var t=this.str.charCodeAt(e);if(13!==t&&10!==t&&12!==t&&32!==t&&9!==t)break}return e},substringToPos:function(e){return this.str.substring(this.pos,this.pos=e)},eat:function(e){this.charCode()!==e&&this.error("Expect `"+String.fromCharCode(e)+"`"),this.pos++;},peek:function(){return this.pos<this.str.length?this.str.charAt(this.pos++):""},error:function(e){throw new gt(e,this.str,this.pos)}};var bt=ft,yt=function(e){for(var t="function"==typeof Uint32Array?new Uint32Array(128):new Array(128),n=0;n<128;n++)t[n]=e(String.fromCharCode(n))?1:0;return t}((function(e){return /[a-zA-Z0-9\-]/.test(e)})),kt={" ":1,"&&":2,"||":3,"|":4};function vt(e){return e.substringToPos(e.findWsEnd(e.pos))}function xt(e){for(var t=e.pos;t<e.str.length;t++){var n=e.str.charCodeAt(t);if(n>=128||0===yt[n])break}return e.pos===t&&e.error("Expect a keyword"),e.substringToPos(t)}function wt(e){for(var t=e.pos;t<e.str.length;t++){var n=e.str.charCodeAt(t);if(n<48||n>57)break}return e.pos===t&&e.error("Expect a number"),e.substringToPos(t)}function St(e){var t=e.str.indexOf("'",e.pos+1);return -1===t&&(e.pos=e.str.length,e.error("Expect an apostrophe")),e.substringToPos(t+1)}function Ct(e){var t,n=null;return e.eat(123),t=wt(e),44===e.charCode()?(e.pos++,125!==e.charCode()&&(n=wt(e))):n=t,e.eat(125),{min:Number(t),max:n?Number(n):0}}function zt(e,t){var n=function(e){var t=null,n=!1;switch(e.charCode()){case 42:e.pos++,t={min:0,max:0};break;case 43:e.pos++,t={min:1,max:0};break;case 63:e.pos++,t={min:0,max:1};break;case 35:e.pos++,n=!0,t=123===e.charCode()?Ct(e):{min:1,max:0};break;case 123:t=Ct(e);break;default:return null}return {type:"Multiplier",comma:n,min:t.min,max:t.max,term:null}}(e);return null!==n?(n.term=t,n):t}function At(e){var t=e.peek();return ""===t?null:{type:"Token",value:t}}function Pt(e){var t,n=null;return e.eat(60),t=xt(e),40===e.charCode()&&41===e.nextCharCode()&&(e.pos+=2,t+="()"),91===e.charCodeAt(e.findWsEnd(e.pos))&&(vt(e),n=function(e){var t=null,n=null,r=1;return e.eat(91),45===e.charCode()&&(e.peek(),r=-1),-1==r&&8734===e.charCode()?e.peek():t=r*Number(wt(e)),vt(e),e.eat(44),vt(e),8734===e.charCode()?e.peek():(r=1,45===e.charCode()&&(e.peek(),r=-1),n=r*Number(wt(e))),e.eat(93),null===t&&null===n?null:{type:"Range",min:t,max:n}}(e)),e.eat(62),zt(e,{type:"Type",name:t,opts:n})}function Tt(e,t){function n(e,t){return {type:"Group",terms:e,combinator:t,disallowEmpty:!1,explicit:!1}}for(t=Object.keys(t).sort((function(e,t){return kt[e]-kt[t]}));t.length>0;){for(var r=t.shift(),i=0,a=0;i<e.length;i++){var o=e[i];"Combinator"===o.type&&(o.value===r?(-1===a&&(a=i-1),e.splice(i,1),i--):(-1!==a&&i-a>1&&(e.splice(a,i-a,n(e.slice(a,i),r)),i=a+1),a=-1));}-1!==a&&t.length&&e.splice(a,i-a,n(e.slice(a,i),r));}return r}function Lt(e){for(var t,n=[],r={},i=null,a=e.pos;t=Et(e);)"Spaces"!==t.type&&("Combinator"===t.type?(null!==i&&"Combinator"!==i.type||(e.pos=a,e.error("Unexpected combinator")),r[t.value]=!0):null!==i&&"Combinator"!==i.type&&(r[" "]=!0,n.push({type:"Combinator",value:" "})),n.push(t),i=t,a=e.pos);return null!==i&&"Combinator"===i.type&&(e.pos-=a,e.error("Unexpected combinator")),{type:"Group",terms:n,combinator:Tt(n,r)||" ",disallowEmpty:!1,explicit:!1}}function Et(e){var t=e.charCode();if(t<128&&1===yt[t])return function(e){var t;return t=xt(e),40===e.charCode()?(e.pos++,{type:"Function",name:t}):zt(e,{type:"Keyword",name:t})}(e);switch(t){case 93:break;case 91:return zt(e,function(e){var t;return e.eat(91),t=Lt(e),e.eat(93),t.explicit=!0,33===e.charCode()&&(e.pos++,t.disallowEmpty=!0),t}(e));case 60:return 39===e.nextCharCode()?function(e){var t;return e.eat(60),e.eat(39),t=xt(e),e.eat(39),e.eat(62),zt(e,{type:"Property",name:t})}(e):Pt(e);case 124:return {type:"Combinator",value:e.substringToPos(124===e.nextCharCode()?e.pos+2:e.pos+1)};case 38:return e.pos++,e.eat(38),{type:"Combinator",value:"&&"};case 44:return e.pos++,{type:"Comma"};case 39:return zt(e,{type:"String",value:St(e)});case 32:case 9:case 10:case 13:case 12:return {type:"Spaces",value:vt(e)};case 64:return (t=e.nextCharCode())<128&&1===yt[t]?(e.pos++,{type:"AtKeyword",name:xt(e)}):At(e);case 42:case 43:case 63:case 35:case 33:break;case 123:if((t=e.nextCharCode())<48||t>57)return At(e);break;default:return At(e)}}function Dt(e){var t=new bt(e),n=Lt(t);return t.pos!==e.length&&t.error("Unexpected input"),1===n.terms.length&&"Group"===n.terms[0].type&&(n=n.terms[0]),n}Dt("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");var Ot=Dt,Bt=function(){};function It(e){return "function"==typeof e?e:Bt}var Nt=function(e,t,n){var r=Bt,i=Bt;if("function"==typeof t?r=t:t&&(r=It(t.enter),i=It(t.leave)),r===Bt&&i===Bt)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");!function e(t){switch(r.call(n,t),t.type){case"Group":t.terms.forEach(e);break;case"Multiplier":e(t.term);break;case"Type":case"Property":case"Keyword":case"AtKeyword":case"Function":case"String":case"Token":case"Comma":break;default:throw new Error("Unknown type: "+t.type)}i.call(n,t);}(e);},Rt=new H,Mt={decorator:function(e){var t=null,n={len:0,node:null},r=[n],i="";return {children:e.children,node:function(n){var r=t;t=n,e.node.call(this,n),t=r;},chunk:function(e){i+=e,n.node!==t?r.push({len:e.length,node:t}):n.len+=e.length;},result:function(){return jt(i,r)}}}};function jt(e,t){var n=[],r=0,i=0,a=t?t[i].node:null;for(Ce(e,Rt);!Rt.eof;){if(t)for(;i<t.length&&r+t[i].len<=Rt.tokenStart;)r+=t[i++].len,a=t[i].node;n.push({type:Rt.tokenType,value:Rt.getTokenValue(),index:Rt.tokenIndex,balance:Rt.balance[Rt.tokenIndex],node:a}),Rt.next();}return n}var _t={type:"Match"},Ft={type:"Mismatch"},Wt={type:"DisallowEmpty"};function qt(e,t,n){return t===_t&&n===Ft||e===_t&&t===_t&&n===_t?e:("If"===e.type&&e.else===Ft&&t===_t&&(t=e.then,e=e.match),{type:"If",match:e,then:t,else:n})}function Yt(e){return e.length>2&&40===e.charCodeAt(e.length-2)&&41===e.charCodeAt(e.length-1)}function Ut(e){return "Keyword"===e.type||"AtKeyword"===e.type||"Function"===e.type||"Type"===e.type&&Yt(e.name)}function Ht(e){if("function"==typeof e)return {type:"Generic",fn:e};switch(e.type){case"Group":var t=function e(t,n,r){switch(t){case" ":for(var i=_t,a=n.length-1;a>=0;a--){i=qt(l=n[a],i,Ft);}return i;case"|":i=Ft;var o=null;for(a=n.length-1;a>=0;a--){if(Ut(l=n[a])&&(null===o&&a>0&&Ut(n[a-1])&&(i=qt({type:"Enum",map:o=Object.create(null)},_t,i)),null!==o)){var s=(Yt(l.name)?l.name.slice(0,-1):l.name).toLowerCase();if(s in o==!1){o[s]=l;continue}}o=null,i=qt(l,_t,i);}return i;case"&&":if(n.length>5)return {type:"MatchOnce",terms:n,all:!0};for(i=Ft,a=n.length-1;a>=0;a--){var l=n[a];c=n.length>1?e(t,n.filter((function(e){return e!==l})),!1):_t,i=qt(l,c,i);}return i;case"||":if(n.length>5)return {type:"MatchOnce",terms:n,all:!1};for(i=r?_t:Ft,a=n.length-1;a>=0;a--){var c;l=n[a];c=n.length>1?e(t,n.filter((function(e){return e!==l})),!0):_t,i=qt(l,c,i);}return i}}(e.combinator,e.terms.map(Ht),!1);return e.disallowEmpty&&(t=qt(t,Wt,Ft)),t;case"Multiplier":return function(e){var t=_t,n=Ht(e.term);if(0===e.max)n=qt(n,Wt,Ft),(t=qt(n,null,Ft)).then=qt(_t,_t,t),e.comma&&(t.then.else=qt({type:"Comma",syntax:e},t,Ft));else for(var r=e.min||1;r<=e.max;r++)e.comma&&t!==_t&&(t=qt({type:"Comma",syntax:e},t,Ft)),t=qt(n,qt(_t,_t,t),Ft);if(0===e.min)t=qt(_t,_t,t);else for(r=0;r<e.min-1;r++)e.comma&&t!==_t&&(t=qt({type:"Comma",syntax:e},t,Ft)),t=qt(n,t,Ft);return t}(e);case"Type":case"Property":return {type:e.type,name:e.name,syntax:e};case"Keyword":return {type:e.type,name:e.name.toLowerCase(),syntax:e};case"AtKeyword":return {type:e.type,name:"@"+e.name.toLowerCase(),syntax:e};case"Function":return {type:e.type,name:e.name.toLowerCase()+"(",syntax:e};case"String":return 3===e.value.length?{type:"Token",value:e.value.charAt(1),syntax:e}:{type:e.type,value:e.value.substr(1,e.value.length-2).replace(/\\'/g,"'"),syntax:e};case"Token":return {type:e.type,value:e.value,syntax:e};case"Comma":return {type:e.type,syntax:e};default:throw new Error("Unknown node type:",e.type)}}var Vt=_t,Kt=Ft,Gt=Wt,Qt=function(e,t){return "string"==typeof e&&(e=Ot(e)),{type:"MatchGraph",match:Ht(e),syntax:t||null,source:e}},Xt=Object.prototype.hasOwnProperty,Zt=Vt,$t=Kt,Jt=Gt,en=h.TYPE;function tn(e){for(var t=null,n=null,r=e;null!==r;)n=r.prev,r.prev=t,t=r,r=n;return t}function nn(e,t){if(e.length!==t.length)return !1;for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r>=65&&r<=90&&(r|=32),r!==t.charCodeAt(n))return !1}return !0}function rn(e){return null===e||(e.type===en.Comma||e.type===en.Function||e.type===en.LeftParenthesis||e.type===en.LeftSquareBracket||e.type===en.LeftCurlyBracket||function(e){return e.type===en.Delim&&"?"!==e.value}(e))}function an(e){return null===e||(e.type===en.RightParenthesis||e.type===en.RightSquareBracket||e.type===en.RightCurlyBracket||e.type===en.Delim)}function on(e,t,n){function r(){do{b++,f=b<e.length?e[b]:null;}while(null!==f&&(f.type===en.WhiteSpace||f.type===en.Comment))}function i(t){var n=b+t;return n<e.length?e[n]:null}function a(e,t){return {nextState:e,matchStack:k,syntaxStack:u,thenStack:h,tokenIndex:b,prev:t}}function o(e){h={nextState:e,matchStack:k,syntaxStack:u,prev:h};}function s(e){p=a(e,p);}function l(){k={type:1,syntax:t.syntax,token:f,prev:k},r(),d=null,b>y&&(y=b);}function c(){k=2===k.type?k.prev:{type:3,syntax:u.syntax,token:k.token,prev:k},u=u.prev;}var u=null,h=null,p=null,d=null,m=0,g=null,f=null,b=-1,y=0,k={type:0,syntax:null,token:null,prev:null};for(r();null===g&&++m<15e3;)switch(t.type){case"Match":if(null===h){if(null!==f&&(b!==e.length-1||"\\0"!==f.value&&"\\9"!==f.value)){t=$t;break}g="Match";break}if((t=h.nextState)===Jt){if(h.matchStack===k){t=$t;break}t=Zt;}for(;h.syntaxStack!==u;)c();h=h.prev;break;case"Mismatch":if(null!==d&&!1!==d)(null===p||b>p.tokenIndex)&&(p=d,d=!1);else if(null===p){g="Mismatch";break}t=p.nextState,h=p.thenStack,u=p.syntaxStack,k=p.matchStack,b=p.tokenIndex,f=b<e.length?e[b]:null,p=p.prev;break;case"MatchGraph":t=t.match;break;case"If":t.else!==$t&&s(t.else),t.then!==Zt&&o(t.then),t=t.match;break;case"MatchOnce":t={type:"MatchOnceBuffer",syntax:t,index:0,mask:0};break;case"MatchOnceBuffer":var v=t.syntax.terms;if(t.index===v.length){if(0===t.mask||t.syntax.all){t=$t;break}t=Zt;break}if(t.mask===(1<<v.length)-1){t=Zt;break}for(;t.index<v.length;t.index++){var x=1<<t.index;if(0==(t.mask&x)){s(t),o({type:"AddMatchOnce",syntax:t.syntax,mask:t.mask|x}),t=v[t.index++];break}}break;case"AddMatchOnce":t={type:"MatchOnceBuffer",syntax:t.syntax,index:0,mask:t.mask};break;case"Enum":if(null!==f)if(-1!==(A=f.value.toLowerCase()).indexOf("\\")&&(A=A.replace(/\\[09].*$/,"")),Xt.call(t.map,A)){t=t.map[A];break}t=$t;break;case"Generic":var w=null!==u?u.opts:null,S=b+Math.floor(t.fn(f,i,w));if(!isNaN(S)&&S>b){for(;b<S;)l();t=Zt;}else t=$t;break;case"Type":case"Property":var C="Type"===t.type?"types":"properties",z=Xt.call(n,C)?n[C][t.name]:null;if(!z||!z.match)throw new Error("Bad syntax reference: "+("Type"===t.type?"<"+t.name+">":"<'"+t.name+"'>"));if(!1!==d&&null!==f&&"Type"===t.type)if("custom-ident"===t.name&&f.type===en.Ident||"length"===t.name&&"0"===f.value){null===d&&(d=a(t,p)),t=$t;break}u={syntax:t.syntax,opts:t.syntax.opts||null!==u&&u.opts||null,prev:u},k={type:2,syntax:t.syntax,token:k.token,prev:k},t=z.match;break;case"Keyword":var A=t.name;if(null!==f){var P=f.value;if(-1!==P.indexOf("\\")&&(P=P.replace(/\\[09].*$/,"")),nn(P,A)){l(),t=Zt;break}}t=$t;break;case"AtKeyword":case"Function":if(null!==f&&nn(f.value,t.name)){l(),t=Zt;break}t=$t;break;case"Token":if(null!==f&&f.value===t.value){l(),t=Zt;break}t=$t;break;case"Comma":null!==f&&f.type===en.Comma?rn(k.token)?t=$t:(l(),t=an(f)?$t:Zt):t=rn(k.token)||an(f)?Zt:$t;break;case"String":var T="";for(S=b;S<e.length&&T.length<t.value.length;S++)T+=e[S].value;if(nn(T,t.value)){for(;b<S;)l();t=Zt;}else t=$t;break;default:throw new Error("Unknown node type: "+t.type)}switch(g){case null:console.warn("[csstree-match] BREAK after 15000 iterations"),g="Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",k=null;break;case"Match":for(;null!==u;)c();break;default:k=null;}return {tokens:e,reason:g,iterations:m,match:k,longestMatch:y}}var sn=function(e,t,n){var r=on(e,t,n||{});if(null===r.match)return r;var i=r.match,a=r.match={syntax:t.syntax||null,match:[]},o=[a];for(i=tn(i).prev;null!==i;){switch(i.type){case 2:a.match.push(a={syntax:i.syntax,match:[]}),o.push(a);break;case 3:o.pop(),a=o[o.length-1];break;default:a.match.push({syntax:i.syntax||null,token:i.token.value,node:i.token.node});}i=i.prev;}return r};function ln(e){function t(e){return null!==e&&("Type"===e.type||"Property"===e.type||"Keyword"===e.type)}var n=null;return null!==this.matched&&function r(i){if(Array.isArray(i.match)){for(var a=0;a<i.match.length;a++)if(r(i.match[a]))return t(i.syntax)&&n.unshift(i.syntax),!0}else if(i.node===e)return n=t(i.syntax)?[i.syntax]:[],!0;return !1}(this.matched),n}function cn(e,t,n){var r=ln.call(e,t);return null!==r&&r.some(n)}var un={getTrace:ln,isType:function(e,t){return cn(this,e,(function(e){return "Type"===e.type&&e.name===t}))},isProperty:function(e,t){return cn(this,e,(function(e){return "Property"===e.type&&e.name===t}))},isKeyword:function(e){return cn(this,e,(function(e){return "Keyword"===e.type}))}};var hn={matchFragments:function(e,t,n,r,i){var o=[];return null!==n.matched&&function n(s){if(null!==s.syntax&&s.syntax.type===r&&s.syntax.name===i){var l=function e(t){return "node"in t?t.node:e(t.match[0])}(s),c=function e(t){return "node"in t?t.node:e(t.match[t.match.length-1])}(s);e.syntax.walk(t,(function(e,t,n){if(e===l){var r=new a;do{if(r.appendData(t.data),t.data===c)break;t=t.next;}while(null!==t);o.push({parent:n,nodes:r});}}));}Array.isArray(s.match)&&s.match.forEach(n);}(n.matched),o}},pn=Object.prototype.hasOwnProperty;function dn(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&e>=0}function mn(e){return Boolean(e)&&dn(e.offset)&&dn(e.line)&&dn(e.column)}function gn(e,t){return function(n,r){if(!n||n.constructor!==Object)return r(n,"Type of node should be an Object");for(var i in n){var o=!0;if(!1!==pn.call(n,i)){if("type"===i)n.type!==e&&r(n,"Wrong node type `"+n.type+"`, expected `"+e+"`");else if("loc"===i){if(null===n.loc)continue;if(n.loc&&n.loc.constructor===Object)if("string"!=typeof n.loc.source)i+=".source";else if(mn(n.loc.start)){if(mn(n.loc.end))continue;i+=".end";}else i+=".start";o=!1;}else if(t.hasOwnProperty(i)){var s=0;for(o=!1;!o&&s<t[i].length;s++){var l=t[i][s];switch(l){case String:o="string"==typeof n[i];break;case Boolean:o="boolean"==typeof n[i];break;case null:o=null===n[i];break;default:"string"==typeof l?o=n[i]&&n[i].type===l:Array.isArray(l)&&(o=n[i]instanceof a);}}}else r(n,"Unknown field `"+i+"` for "+e+" node type");o||r(n,"Bad value for `"+e+"."+i+"`");}}for(var i in t)pn.call(t,i)&&!1===pn.call(n,i)&&r(n,"Field `"+e+"."+i+"` is missed");}}function fn(e,t){var n=t.structure,r={type:String,loc:!0},i={type:'"'+e+'"'};for(var a in n)if(!1!==pn.call(n,a)){for(var o=[],s=r[a]=Array.isArray(n[a])?n[a].slice():[n[a]],l=0;l<s.length;l++){var c=s[l];if(c===String||c===Boolean)o.push(c.name);else if(null===c)o.push("null");else if("string"==typeof c)o.push("<"+c+">");else {if(!Array.isArray(c))throw new Error("Wrong value `"+c+"` in `"+e+"."+a+"` structure definition");o.push("List");}}i[a]=o.join(" | ");}return {docs:i,check:gn(e,r)}}var bn=$,yn=J,kn=Qt,vn=sn,xn=function(e){var t={};if(e.node)for(var n in e.node)if(pn.call(e.node,n)){var r=e.node[n];if(!r.structure)throw new Error("Missed `structure` field in `"+n+"` node type definition");t[n]=fn(n,r);}return t},wn=kn("inherit | initial | unset"),Sn=kn("inherit | initial | unset | <-ms-legacy-expression>");function Cn(e,t,n){var r={};for(var i in e)e[i].syntax&&(r[i]=n?e[i].syntax:G(e[i].syntax,{compact:t}));return r}function zn(e,t,n){const r={};for(const[i,a]of Object.entries(e))r[i]={prelude:a.prelude&&(n?a.prelude.syntax:G(a.prelude.syntax,{compact:t})),descriptors:a.descriptors&&Cn(a.descriptors,t,n)};return r}function An(e,t,n){return {matched:e,iterations:n,error:t,getTrace:un.getTrace,isType:un.isType,isProperty:un.isProperty,isKeyword:un.isKeyword}}function Pn(e,t,n,r){var i,a=function(e,t){return "string"==typeof e?jt(e,null):t.generate(e,Mt)}(n,e.syntax);return function(e){for(var t=0;t<e.length;t++)if("var("===e[t].value.toLowerCase())return !0;return !1}(a)?An(null,new Error("Matching for a tree with var() is not supported")):(r&&(i=vn(a,e.valueCommonSyntax,e)),r&&i.match||(i=vn(a,t.match,e)).match?An(i.match,null,i.iterations):An(null,new yn(i.reason,t.syntax,n,i),i.iterations))}var Tn=function(e,t,n){if(this.valueCommonSyntax=wn,this.syntax=t,this.generic=!1,this.atrules={},this.properties={},this.types={},this.structure=n||xn(e),e){if(e.types)for(var r in e.types)this.addType_(r,e.types[r]);if(e.generic)for(var r in this.generic=!0,mt)this.addType_(r,mt[r]);if(e.atrules)for(var r in e.atrules)this.addAtrule_(r,e.atrules[r]);if(e.properties)for(var r in e.properties)this.addProperty_(r,e.properties[r]);}};Tn.prototype={structure:{},checkStructure:function(e){function t(e,t){r.push({node:e,message:t});}var n=this.structure,r=[];return this.syntax.walk(e,(function(e){n.hasOwnProperty(e.type)?n[e.type].check(e,t):t(e,"Unknown node type `"+e.type+"`");})),!!r.length&&r},createDescriptor:function(e,t,n,r=null){var i={type:t,name:n},a={type:t,name:n,parent:r,syntax:null,match:null};return "function"==typeof e?a.match=kn(e,i):("string"==typeof e?Object.defineProperty(a,"syntax",{get:function(){return Object.defineProperty(a,"syntax",{value:Ot(e)}),a.syntax}}):a.syntax=e,Object.defineProperty(a,"match",{get:function(){return Object.defineProperty(a,"match",{value:kn(a.syntax,i)}),a.match}})),a},addAtrule_:function(e,t){t&&(this.atrules[e]={type:"Atrule",name:e,prelude:t.prelude?this.createDescriptor(t.prelude,"AtrulePrelude",e):null,descriptors:t.descriptors?Object.keys(t.descriptors).reduce((n,r)=>(n[r]=this.createDescriptor(t.descriptors[r],"AtruleDescriptor",r,e),n),{}):null});},addProperty_:function(e,t){t&&(this.properties[e]=this.createDescriptor(t,"Property",e));},addType_:function(e,t){t&&(this.types[e]=this.createDescriptor(t,"Type",e),t===mt["-ms-legacy-expression"]&&(this.valueCommonSyntax=Sn));},checkAtruleName:function(e){if(!this.getAtrule(e))return new bn("Unknown at-rule","@"+e)},checkAtrulePrelude:function(e,t){let n=this.checkAtruleName(e);if(n)return n;var r=this.getAtrule(e);return !r.prelude&&t?new SyntaxError("At-rule `@"+e+"` should not contain a prelude"):r.prelude&&!t?new SyntaxError("At-rule `@"+e+"` should contain a prelude"):void 0},checkAtruleDescriptorName:function(e,t){let n=this.checkAtruleName(e);if(n)return n;var r=this.getAtrule(e),i=ae.keyword(t);return r.descriptors?r.descriptors[i.name]||r.descriptors[i.basename]?void 0:new bn("Unknown at-rule descriptor",t):new SyntaxError("At-rule `@"+e+"` has no known descriptors")},checkPropertyName:function(e){return ae.property(e).custom?new Error("Lexer matching doesn't applicable for custom properties"):this.getProperty(e)?void 0:new bn("Unknown property",e)},matchAtrulePrelude:function(e,t){var n=this.checkAtrulePrelude(e,t);return n?An(null,n):t?Pn(this,this.getAtrule(e).prelude,t,!0):An(null,null)},matchAtruleDescriptor:function(e,t,n){var r=this.checkAtruleDescriptorName(e,t);if(r)return An(null,r);var i=this.getAtrule(e),a=ae.keyword(t);return Pn(this,i.descriptors[a.name]||i.descriptors[a.basename],n,!0)},matchDeclaration:function(e){return "Declaration"!==e.type?An(null,new Error("Not a Declaration node")):this.matchProperty(e.property,e.value)},matchProperty:function(e,t){var n=this.checkPropertyName(e);return n?An(null,n):Pn(this,this.getProperty(e),t,!0)},matchType:function(e,t){var n=this.getType(e);return n?Pn(this,n,t,!1):An(null,new bn("Unknown type",e))},match:function(e,t){return "string"==typeof e||e&&e.type?("string"!=typeof e&&e.match||(e=this.createDescriptor(e,"Type","anonymous")),Pn(this,e,t,!1)):An(null,new bn("Bad syntax"))},findValueFragments:function(e,t,n,r){return hn.matchFragments(this,t,this.matchProperty(e,t),n,r)},findDeclarationValueFragments:function(e,t,n){return hn.matchFragments(this,e.value,this.matchDeclaration(e),t,n)},findAllFragments:function(e,t,n){var r=[];return this.syntax.walk(e,{visit:"Declaration",enter:function(e){r.push.apply(r,this.findDeclarationValueFragments(e,t,n));}.bind(this)}),r},getAtrule:function(e,t=!0){var n=ae.keyword(e);return (n.vendor&&t?this.atrules[n.name]||this.atrules[n.basename]:this.atrules[n.name])||null},getAtrulePrelude:function(e,t=!0){const n=this.getAtrule(e,t);return n&&n.prelude||null},getAtruleDescriptor:function(e,t){return this.atrules.hasOwnProperty(e)&&this.atrules.declarators&&this.atrules[e].declarators[t]||null},getProperty:function(e,t=!0){var n=ae.property(e);return (n.vendor&&t?this.properties[n.name]||this.properties[n.basename]:this.properties[n.name])||null},getType:function(e){return this.types.hasOwnProperty(e)?this.types[e]:null},validate:function(){function e(r,i,a,o){if(a.hasOwnProperty(i))return a[i];a[i]=!1,null!==o.syntax&&Nt(o.syntax,(function(o){if("Type"===o.type||"Property"===o.type){var s="Type"===o.type?r.types:r.properties,l="Type"===o.type?t:n;s.hasOwnProperty(o.name)&&!e(r,o.name,l,s[o.name])||(a[i]=!0);}}),this);}var t={},n={};for(var r in this.types)e(this,r,t,this.types[r]);for(var r in this.properties)e(this,r,n,this.properties[r]);return t=Object.keys(t).filter((function(e){return t[e]})),n=Object.keys(n).filter((function(e){return n[e]})),t.length||n.length?{types:t,properties:n}:null},dump:function(e,t){return {generic:this.generic,types:Cn(this.types,!t,e),properties:Cn(this.properties,!t,e),atrules:zn(this.atrules,!t,e)}},toString:function(){return JSON.stringify(this.dump())}};var Ln=Tn,En={SyntaxError:gt,parse:Ot,generate:G,walk:Nt},Dn=Ce.isBOM;var On=function(){this.lines=null,this.columns=null,this.linesAndColumnsComputed=!1;};On.prototype={setSource:function(e,t,n,r){this.source=e,this.startOffset=void 0===t?0:t,this.startLine=void 0===n?1:n,this.startColumn=void 0===r?1:r,this.linesAndColumnsComputed=!1;},ensureLinesAndColumnsComputed:function(){this.linesAndColumnsComputed||(!function(e,t){for(var n=t.length,r=se(e.lines,n),i=e.startLine,a=se(e.columns,n),o=e.startColumn,s=t.length>0?Dn(t.charCodeAt(0)):0;s<n;s++){var l=t.charCodeAt(s);r[s]=i,a[s]=o++,10!==l&&13!==l&&12!==l||(13===l&&s+1<n&&10===t.charCodeAt(s+1)&&(r[++s]=i,a[s]=o),i++,o=1);}r[s]=i,a[s]=o,e.lines=r,e.columns=a;}(this,this.source),this.linesAndColumnsComputed=!0);},getLocation:function(e,t){return this.ensureLinesAndColumnsComputed(),{source:t,offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]}},getLocationRange:function(e,t,n){return this.ensureLinesAndColumnsComputed(),{source:n,start:{offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]},end:{offset:this.startOffset+t,line:this.lines[t],column:this.columns[t]}}}};var Bn=On,In=Ce.TYPE,Nn=In.WhiteSpace,Rn=In.Comment,Mn=function(e){var t=this.createList(),n=null,r={recognizer:e,space:null,ignoreWS:!1,ignoreWSAfter:!1};for(this.scanner.skipSC();!this.scanner.eof;){switch(this.scanner.tokenType){case Rn:this.scanner.next();continue;case Nn:r.ignoreWS?this.scanner.next():r.space=this.WhiteSpace();continue}if(void 0===(n=e.getNode.call(this,r)))break;null!==r.space&&(t.push(r.space),r.space=null),t.push(n),r.ignoreWSAfter?(r.ignoreWSAfter=!1,r.ignoreWS=!0):r.ignoreWS=!1;}return t},{findWhiteSpaceStart:jn,cmpStr:_n}=M,Fn=function(){},Wn=h.TYPE,qn=h.NAME,Yn=Wn.WhiteSpace,Un=Wn.Comment,Hn=Wn.Ident,Vn=Wn.Function,Kn=Wn.Url,Gn=Wn.Hash,Qn=Wn.Percentage,Xn=Wn.Number;function Zn(e){return function(){return this[e]()}}var $n=function(e){var t={scanner:new H,locationMap:new Bn,filename:"<unknown>",needPositions:!1,onParseError:Fn,onParseErrorThrow:!1,parseAtrulePrelude:!0,parseRulePrelude:!0,parseValue:!0,parseCustomProperty:!1,readSequence:Mn,createList:function(){return new a},createSingleNodeList:function(e){return (new a).appendData(e)},getFirstListNode:function(e){return e&&e.first()},getLastListNode:function(e){return e.last()},parseWithFallback:function(e,t){var n=this.scanner.tokenIndex;try{return e.call(this)}catch(e){if(this.onParseErrorThrow)throw e;var r=t.call(this,n);return this.onParseErrorThrow=!0,this.onParseError(e,r),this.onParseErrorThrow=!1,r}},lookupNonWSType:function(e){do{var t=this.scanner.lookupType(e++);if(t!==Yn)return t}while(0!==t);return 0},eat:function(e){if(this.scanner.tokenType!==e){var t=this.scanner.tokenStart,n=qn[e]+" is expected";switch(e){case Hn:this.scanner.tokenType===Vn||this.scanner.tokenType===Kn?(t=this.scanner.tokenEnd-1,n="Identifier is expected but function found"):n="Identifier is expected";break;case Gn:this.scanner.isDelim(35)&&(this.scanner.next(),t++,n="Name is expected");break;case Qn:this.scanner.tokenType===Xn&&(t=this.scanner.tokenEnd,n="Percent sign is expected");break;default:this.scanner.source.charCodeAt(this.scanner.tokenStart)===e&&(t+=1);}this.error(n,t);}this.scanner.next();},consume:function(e){var t=this.scanner.getTokenValue();return this.eat(e),t},consumeFunctionName:function(){var e=this.scanner.source.substring(this.scanner.tokenStart,this.scanner.tokenEnd-1);return this.eat(Vn),e},getLocation:function(e,t){return this.needPositions?this.locationMap.getLocationRange(e,t,this.filename):null},getLocationFromList:function(e){if(this.needPositions){var t=this.getFirstListNode(e),n=this.getLastListNode(e);return this.locationMap.getLocationRange(null!==t?t.loc.start.offset-this.locationMap.startOffset:this.scanner.tokenStart,null!==n?n.loc.end.offset-this.locationMap.startOffset:this.scanner.tokenStart,this.filename)}return null},error:function(e,t){var n=void 0!==t&&t<this.scanner.source.length?this.locationMap.getLocation(t):this.scanner.eof?this.locationMap.getLocation(jn(this.scanner.source,this.scanner.source.length-1)):this.locationMap.getLocation(this.scanner.tokenStart);throw new l(e||"Unexpected input",this.scanner.source,n.offset,n.line,n.column)}};for(var n in e=function(e){var t={context:{},scope:{},atrule:{},pseudo:{}};if(e.parseContext)for(var n in e.parseContext)switch(typeof e.parseContext[n]){case"function":t.context[n]=e.parseContext[n];break;case"string":t.context[n]=Zn(e.parseContext[n]);}if(e.scope)for(var n in e.scope)t.scope[n]=e.scope[n];if(e.atrule)for(var n in e.atrule){var r=e.atrule[n];r.parse&&(t.atrule[n]=r.parse);}if(e.pseudo)for(var n in e.pseudo){var i=e.pseudo[n];i.parse&&(t.pseudo[n]=i.parse);}if(e.node)for(var n in e.node)t[n]=e.node[n].parse;return t}(e||{}))t[n]=e[n];return function(e,n){var r,i=(n=n||{}).context||"default",a=n.onComment;if(Ce(e,t.scanner),t.locationMap.setSource(e,n.offset,n.line,n.column),t.filename=n.filename||"<unknown>",t.needPositions=Boolean(n.positions),t.onParseError="function"==typeof n.onParseError?n.onParseError:Fn,t.onParseErrorThrow=!1,t.parseAtrulePrelude=!("parseAtrulePrelude"in n)||Boolean(n.parseAtrulePrelude),t.parseRulePrelude=!("parseRulePrelude"in n)||Boolean(n.parseRulePrelude),t.parseValue=!("parseValue"in n)||Boolean(n.parseValue),t.parseCustomProperty="parseCustomProperty"in n&&Boolean(n.parseCustomProperty),!t.context.hasOwnProperty(i))throw new Error("Unknown context `"+i+"`");return "function"==typeof a&&t.scanner.forEachToken((n,r,i)=>{if(n===Un){const n=t.getLocation(r,i),o=_n(e,i-2,i,"*/")?e.slice(r+2,i-2):e.slice(r+2,i);a(o,n);}}),r=t.context[i].call(t,n),t.scanner.eof||t.error(),r}},Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),er=function(e){if(0<=e&&e<Jn.length)return Jn[e];throw new TypeError("Must be between 0 and 63: "+e)};var tr=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=er(t);}while(r>0);return n};var nr=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,r=/^data:.+\,.+$/;function i(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function a(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var n=e,r=i(e);if(r){if(!r.path)return e;n=r.path;}for(var o,s=t.isAbsolute(n),l=n.split(/\/+/),c=0,u=l.length-1;u>=0;u--)"."===(o=l[u])?l.splice(u,1):".."===o?c++:c>0&&(""===o?(l.splice(u+1,c),c=0):(l.splice(u,2),c--));return ""===(n=l.join("/"))&&(n=s?"/":"."),r?(r.path=n,a(r)):n}function s(e,t){""===e&&(e="."),""===t&&(t=".");var n=i(t),s=i(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),a(n);if(n||t.match(r))return t;if(s&&!s.host&&!s.path)return s.host=t,a(s);var l="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=l,a(s)):l}t.urlParse=i,t.urlGenerate=a,t.normalize=o,t.join=s,t.isAbsolute=function(e){return "/"===e.charAt(0)||n.test(e)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n;}return Array(n+1).join("../")+t.substr(e.length+1)};var l=!("__proto__"in Object.create(null));function c(e){return e}function u(e){if(!e)return !1;var t=e.length;if(t<9)return !1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return !1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return !1;return !0}function h(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}t.toSetString=l?c:function(e){return u(e)?"$"+e:e},t.fromSetString=l?c:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=h(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:h(e.name,t.name)},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=h(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:h(e.name,t.name)},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=h(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:h(e.name,t.name)},t.parseSourceMapInput=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},t.computeSourceURL=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=i(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var l=r.path.lastIndexOf("/");l>=0&&(r.path=r.path.substring(0,l+1));}t=s(a(r),t);}return o(t)};})),rr=(nr.getArg,nr.urlParse,nr.urlGenerate,nr.normalize,nr.join,nr.isAbsolute,nr.relative,nr.toSetString,nr.fromSetString,nr.compareByOriginalPositions,nr.compareByGeneratedPositionsDeflated,nr.compareByGeneratedPositionsInflated,nr.parseSourceMapInput,nr.computeSourceURL,Object.prototype.hasOwnProperty),ir="undefined"!=typeof Map;function ar(){this._array=[],this._set=ir?new Map:Object.create(null);}ar.fromArray=function(e,t){for(var n=new ar,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},ar.prototype.size=function(){return ir?this._set.size:Object.getOwnPropertyNames(this._set).length},ar.prototype.add=function(e,t){var n=ir?e:nr.toSetString(e),r=ir?this.has(e):rr.call(this._set,n),i=this._array.length;r&&!t||this._array.push(e),r||(ir?this._set.set(e,i):this._set[n]=i);},ar.prototype.has=function(e){if(ir)return this._set.has(e);var t=nr.toSetString(e);return rr.call(this._set,t)},ar.prototype.indexOf=function(e){if(ir){var t=this._set.get(e);if(t>=0)return t}else {var n=nr.toSetString(e);if(rr.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},ar.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},ar.prototype.toArray=function(){return this._array.slice()};var or={ArraySet:ar};function sr(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0};}sr.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t);},sr.prototype.add=function(e){var t,n,r,i,a,o;t=this._last,n=e,r=t.generatedLine,i=n.generatedLine,a=t.generatedColumn,o=n.generatedColumn,i>r||i==r&&o>=a||nr.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e));},sr.prototype.toArray=function(){return this._sorted||(this._array.sort(nr.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};var lr=or.ArraySet,cr={MappingList:sr}.MappingList;function ur(e){e||(e={}),this._file=nr.getArg(e,"file",null),this._sourceRoot=nr.getArg(e,"sourceRoot",null),this._skipValidation=nr.getArg(e,"skipValidation",!1),this._sources=new lr,this._names=new lr,this._mappings=new cr,this._sourcesContents=null;}ur.prototype._version=3,ur.fromSourceMap=function(e){var t=e.sourceRoot,n=new ur({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=nr.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r);})),e.sources.forEach((function(r){var i=r;null!==t&&(i=nr.relative(t,r)),n._sources.has(i)||n._sources.add(i);var a=e.sourceContentFor(r);null!=a&&n.setSourceContent(r,a);})),n},ur.prototype.addMapping=function(e){var t=nr.getArg(e,"generated"),n=nr.getArg(e,"original",null),r=nr.getArg(e,"source",null),i=nr.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i});},ur.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=nr.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[nr.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[nr.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null));},ur.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file;}var i=this._sourceRoot;null!=i&&(r=nr.relative(i,r));var a=new lr,o=new lr;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=nr.join(n,t.source)),null!=i&&(t.source=nr.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name));}var l=t.source;null==l||a.has(l)||a.add(l);var c=t.name;null==c||o.has(c)||o.add(c);}),this),this._sources=a,this._names=o,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=nr.join(n,t)),null!=i&&(t=nr.relative(i,t)),this.setSourceContent(t,r));}),this);},ur.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},ur.prototype._serializeMappings=function(){for(var e,t,n,r,i=0,a=1,o=0,s=0,l=0,c=0,u="",h=this._mappings.toArray(),p=0,d=h.length;p<d;p++){if(e="",(t=h[p]).generatedLine!==a)for(i=0;t.generatedLine!==a;)e+=";",a++;else if(p>0){if(!nr.compareByGeneratedPositionsInflated(t,h[p-1]))continue;e+=",";}e+=tr(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=tr(r-c),c=r,e+=tr(t.originalLine-1-s),s=t.originalLine-1,e+=tr(t.originalColumn-o),o=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=tr(n-l),l=n)),u+=e;}return u},ur.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=nr.relative(t,e));var n=nr.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},ur.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},ur.prototype.toString=function(){return JSON.stringify(this.toJSON())};var hr={SourceMapGenerator:ur}.SourceMapGenerator,pr={Atrule:!0,Selector:!0,Declaration:!0},dr=Object.prototype.hasOwnProperty;function mr(e,t){var n=e.children,r=null;"function"!=typeof t?n.forEach(this.node,this):n.forEach((function(e){null!==r&&t.call(this,r),this.node(e),r=e;}),this);}var gr=function(e){function t(e){if(!dr.call(n,e.type))throw new Error("Unknown node type: "+e.type);n[e.type].call(this,e);}var n={};if(e.node)for(var r in e.node)n[r]=e.node[r].generate;return function(e,n){var r="",i={children:mr,node:t,chunk:function(e){r+=e;},result:function(){return r}};return n&&("function"==typeof n.decorator&&(i=n.decorator(i)),n.sourceMap&&(i=function(e){var t=new hr,n=1,r=0,i={line:1,column:0},a={line:0,column:0},o=!1,s={line:1,column:0},l={generated:s},c=e.node;e.node=function(e){if(e.loc&&e.loc.start&&pr.hasOwnProperty(e.type)){var u=e.loc.start.line,h=e.loc.start.column-1;a.line===u&&a.column===h||(a.line=u,a.column=h,i.line=n,i.column=r,o&&(o=!1,i.line===s.line&&i.column===s.column||t.addMapping(l)),o=!0,t.addMapping({source:e.loc.source,original:a,generated:i}));}c.call(this,e),o&&pr.hasOwnProperty(e.type)&&(s.line=n,s.column=r);};var u=e.chunk;e.chunk=function(e){for(var t=0;t<e.length;t++)10===e.charCodeAt(t)?(n++,r=0):r++;u(e);};var h=e.result;return e.result=function(){return o&&t.addMapping(l),{css:h(),map:t}},e}(i))),i.node(e),i.result()}},fr=Object.prototype.hasOwnProperty,br=function(){};function yr(e){return "function"==typeof e?e:br}function kr(e,t){return function(n,r,i){n.type===t&&e.call(this,n,r,i);}}function vr(e,t){var n=t.structure,r=[];for(var i in n)if(!1!==fr.call(n,i)){var a=n[i],o={name:i,type:!1,nullable:!1};Array.isArray(n[i])||(a=[n[i]]);for(var s=0;s<a.length;s++){var l=a[s];null===l?o.nullable=!0:"string"==typeof l?o.type="node":Array.isArray(l)&&(o.type="list");}o.type&&r.push(o);}return r.length?{context:t.walkContext,fields:r}:null}function xr(e,t){var n=e.fields.slice(),r=e.context,i="string"==typeof r;return t&&n.reverse(),function(e,a,o,s){var l;i&&(l=a[r],a[r]=e);for(var c=0;c<n.length;c++){var u=n[c],h=e[u.name];if(!u.nullable||h)if("list"===u.type){if(t?h.reduceRight(s,!1):h.reduce(s,!1))return !0}else if(o(h))return !0}i&&(a[r]=l);}}function wr(e){return {Atrule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Rule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Declaration:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block,DeclarationList:e.DeclarationList}}}var Sr=function(e){var t=function(e){var t={};for(var n in e.node)if(fr.call(e.node,n)){var r=e.node[n];if(!r.structure)throw new Error("Missed `structure` field in `"+n+"` node type definition");t[n]=vr(0,r);}return t}(e),n={},r={},i=Symbol("break-walk"),a=Symbol("skip-node");for(var o in t)fr.call(t,o)&&null!==t[o]&&(n[o]=xr(t[o],!1),r[o]=xr(t[o],!0));var s=wr(n),l=wr(r),c=function(e,o){function c(e,t,n){var r=h.call(m,e,t,n);return r===i||r!==a&&(!(!d.hasOwnProperty(e.type)||!d[e.type](e,m,c,u))||p.call(m,e,t,n)===i)}var u=(e,t,n,r)=>e||c(t,n,r),h=br,p=br,d=n,m={break:i,skip:a,root:e,stylesheet:null,atrule:null,atrulePrelude:null,rule:null,selector:null,block:null,declaration:null,function:null};if("function"==typeof o)h=o;else if(o&&(h=yr(o.enter),p=yr(o.leave),o.reverse&&(d=r),o.visit)){if(s.hasOwnProperty(o.visit))d=o.reverse?l[o.visit]:s[o.visit];else if(!t.hasOwnProperty(o.visit))throw new Error("Bad value `"+o.visit+"` for `visit` option (should be: "+Object.keys(t).join(", ")+")");h=kr(h,o.visit),p=kr(p,o.visit);}if(h===br&&p===br)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");c(e);};return c.break=i,c.skip=a,c.find=function(e,t){var n=null;return c(e,(function(e,r,a){if(t.call(this,e,r,a))return n=e,i})),n},c.findLast=function(e,t){var n=null;return c(e,{reverse:!0,enter:function(e,r,a){if(t.call(this,e,r,a))return n=e,i}}),n},c.findAll=function(e,t){var n=[];return c(e,(function(e,r,i){t.call(this,e,r,i)&&n.push(e);})),n},c},Cr=function e(t){var n={};for(var r in t){var i=t[r];i&&(Array.isArray(i)||i instanceof a?i=i.map(e):i.constructor===Object&&(i=e(i))),n[r]=i;}return n};const zr=Object.prototype.hasOwnProperty,Ar={generic:!0,types:Er,atrules:{prelude:Dr,descriptors:Dr},properties:Er,parseContext:function(e,t){return Object.assign(e,t)},scope:function e(t,n){for(const r in n)zr.call(n,r)&&(Pr(t[r])?e(t[r],Tr(n[r])):t[r]=Tr(n[r]));return t},atrule:["parse"],pseudo:["parse"],node:["name","structure","parse","generate","walkContext"]};function Pr(e){return e&&e.constructor===Object}function Tr(e){return Pr(e)?Object.assign({},e):e}function Lr(e,t){return "string"==typeof t&&/^\s*\|/.test(t)?"string"==typeof e?e+t:t.replace(/^\s*\|\s*/,""):t||null}function Er(e,t){if("string"==typeof t)return Lr(e,t);const n=Object.assign({},e);for(let r in t)zr.call(t,r)&&(n[r]=Lr(zr.call(e,r)?e[r]:void 0,t[r]));return n}function Dr(e,t){const n=Er(e,t);return !Pr(n)||Object.keys(n).length?n:null}var Or=(e,t)=>function e(t,n,r){for(const i in r)if(!1!==zr.call(r,i))if(!0===r[i])i in n&&zr.call(n,i)&&(t[i]=Tr(n[i]));else if(r[i])if("function"==typeof r[i]){const e=r[i];t[i]=e({},t[i]),t[i]=e(t[i]||{},n[i]);}else if(Pr(r[i])){const a={};for(let n in t[i])a[n]=e({},t[i][n],r[i]);for(let t in n[i])a[t]=e(a[t]||{},n[i][t],r[i]);t[i]=a;}else if(Array.isArray(r[i])){const a={},o=r[i].reduce((function(e,t){return e[t]=!0,e}),{});for(const[n,r]of Object.entries(t[i]||{}))a[n]={},r&&e(a[n],r,o);for(const t in n[i])zr.call(n[i],t)&&(a[t]||(a[t]={}),n[i]&&n[i][t]&&e(a[t],n[i][t],o));t[i]=a;}return t}(e,t,Ar);function Br(e){var t=$n(e),n=Sr(e),r=gr(e),i=function(e){return {fromPlainObject:function(t){return e(t,{enter:function(e){e.children&&e.children instanceof a==!1&&(e.children=(new a).fromArray(e.children));}}),t},toPlainObject:function(t){return e(t,{leave:function(e){e.children&&e.children instanceof a&&(e.children=e.children.toArray());}}),t}}}(n),o={List:a,SyntaxError:l,TokenStream:H,Lexer:Ln,vendorPrefix:ae.vendorPrefix,keyword:ae.keyword,property:ae.property,isCustomProperty:ae.isCustomProperty,definitionSyntax:En,lexer:null,createLexer:function(e){return new Ln(e,o,o.lexer.structure)},tokenize:Ce,parse:t,walk:n,generate:r,find:n.find,findLast:n.findLast,findAll:n.findAll,clone:Cr,fromPlainObject:i.fromPlainObject,toPlainObject:i.toPlainObject,createSyntax:function(e){return Br(Or({},e))},fork:function(t){var n=Or({},e);return Br("function"==typeof t?t(n,Object.assign):Or(n,t))}};return o.lexer=new Ln({generic:!0,types:e.types,atrules:e.atrules,properties:e.properties,node:e.node},o),o}var Ir=function(e){return Br(Or({},e))},Nr={generic:!0,types:{"absolute-size":"xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large","alpha-value":"<number>|<percentage>","angle-percentage":"<angle>|<percentage>","angular-color-hint":"<angle-percentage>","angular-color-stop":"<color>&&<color-stop-angle>?","angular-color-stop-list":"[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>","animateable-feature":"scroll-position|contents|<custom-ident>",attachment:"scroll|fixed|local","attr()":"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )","attr-matcher":"['~'|'|'|'^'|'$'|'*']? '='","attr-modifier":"i|s","attribute-selector":"'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'","auto-repeat":"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )","auto-track-list":"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?","baseline-position":"[first|last]? baseline","basic-shape":"<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>","bg-image":"none|<image>","bg-layer":"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","bg-position":"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]","bg-size":"[<length-percentage>|auto]{1,2}|cover|contain","blur()":"blur( <length> )","blend-mode":"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",box:"border-box|padding-box|content-box","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [['+'|'-'] <calc-product>]*","calc-product":"<calc-value> ['*' <calc-value>|'/' <number>]*","calc-value":"<number>|<dimension>|<percentage>|( <calc-sum> )","cf-final-image":"<image>|<color>","cf-mixing-image":"<percentage>?&&<image>","circle()":"circle( [<shape-radius>]? [at <position>]? )","clamp()":"clamp( <calc-sum>#{3} )","class-selector":"'.' <ident-token>","clip-source":"<url>",color:"<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>","color-stop":"<color-stop-length>|<color-stop-angle>","color-stop-angle":"<angle-percentage>{1,2}","color-stop-length":"<length-percentage>{1,2}","color-stop-list":"[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",combinator:"'>'|'+'|'~'|['||']","common-lig-values":"[common-ligatures|no-common-ligatures]","compat-auto":"searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button","composite-style":"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor","compositing-operator":"add|subtract|intersect|exclude","compound-selector":"[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!","compound-selector-list":"<compound-selector>#","complex-selector":"<compound-selector> [<combinator>? <compound-selector>]*","complex-selector-list":"<complex-selector>#","conic-gradient()":"conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )","contextual-alt-values":"[contextual|no-contextual]","content-distribution":"space-between|space-around|space-evenly|stretch","content-list":"[<string>|contents|<image>|<quote>|<target>|<leader()>|<attr()>|counter( <ident> , <'list-style-type'>? )]+","content-position":"center|start|end|flex-start|flex-end","content-replacement":"<image>","contrast()":"contrast( [<number-percentage>] )","counter()":"counter( <custom-ident> , <counter-style>? )","counter-style":"<counter-style-name>|symbols( )","counter-style-name":"<custom-ident>","counters()":"counters( <custom-ident> , <string> , <counter-style>? )","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier-timing-function":"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )","deprecated-system-color":"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText","discretionary-lig-values":"[discretionary-ligatures|no-discretionary-ligatures]","display-box":"contents|none","display-inside":"flow|flow-root|table|flex|grid|ruby","display-internal":"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container","display-legacy":"inline-block|inline-list-item|inline-table|inline-flex|inline-grid","display-listitem":"<display-outside>?&&[flow|flow-root]?&&list-item","display-outside":"block|inline|run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[jis78|jis83|jis90|jis04|simplified|traditional]","east-asian-width-values":"[full-width|proportional-width]","element()":"element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )","ellipse()":"ellipse( [<shape-radius>{2}]? [at <position>]? )","ending-shape":"circle|ellipse","env()":"env( <custom-ident> , <declaration-value>? )","explicit-track-list":"[<line-names>? <track-size>]+ <line-names>?","family-name":"<string>|<custom-ident>+","feature-tag-value":"<string> [<integer>|on|off]?","feature-type":"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation","feature-value-block":"<feature-type> '{' <feature-value-declaration-list> '}'","feature-value-block-list":"<feature-value-block>+","feature-value-declaration":"<custom-ident> : <integer>+ ;","feature-value-declaration-list":"<feature-value-declaration>","feature-value-name":"<custom-ident>","fill-rule":"nonzero|evenodd","filter-function":"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>","filter-function-list":"[<filter-function>|<url>]+","final-bg-layer":"<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","fit-content()":"fit-content( [<length>|<percentage>] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )","fixed-size":"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )","font-stretch-absolute":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>","font-variant-css21":"[normal|small-caps]","font-weight-absolute":"normal|bold|<number [1,1000]>","frequency-percentage":"<frequency>|<percentage>","general-enclosed":"[<function-token> <any-value> )]|( <ident> <any-value> )","generic-family":"serif|sans-serif|cursive|fantasy|monospace|-apple-system","generic-name":"serif|sans-serif|cursive|fantasy|monospace","geometry-box":"<shape-box>|fill-box|stroke-box|view-box",gradient:"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]","historical-lig-values":"[historical-ligatures|no-historical-ligatures]","hsl()":"hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )","hsla()":"hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",hue:"<number>|<angle>","hue-rotate()":"hue-rotate( <angle> )",image:"<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>","image()":"image( <image-tags>? [<image-src>? , <color>?]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[<image>|<string>] <resolution>","image-src":"<url>|<string>","image-tags":"ltr|rtl","inflexible-breadth":"<length>|<percentage>|min-content|max-content|auto","inset()":"inset( <length-percentage>{1,4} [round <'border-radius'>]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident>|<string>","keyframe-block":"<keyframe-selector># { <declaration-list> }","keyframe-block-list":"<keyframe-block>+","keyframe-selector":"from|to|<percentage>","leader()":"leader( <leader-type> )","leader-type":"dotted|solid|space|<string>","length-percentage":"<length>|<percentage>","line-names":"'[' <custom-ident>* ']'","line-name-list":"[<line-names>|<name-repeat>]+","line-style":"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","line-width":"<length>|thin|medium|thick","linear-color-hint":"<length-percentage>","linear-color-stop":"<color> <color-stop-length>?","linear-gradient()":"linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","mask-layer":"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>","mask-position":"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?","mask-reference":"none|<image>|<mask-source>","mask-source":"<url>","masking-mode":"alpha|luminance|match-source","matrix()":"matrix( <number>#{6} )","matrix3d()":"matrix3d( <number>#{16} )","max()":"max( <calc-sum># )","media-and":"<media-in-parens> [and <media-in-parens>]+","media-condition":"<media-not>|<media-and>|<media-or>|<media-in-parens>","media-condition-without-or":"<media-not>|<media-and>|<media-in-parens>","media-feature":"( [<mf-plain>|<mf-boolean>|<mf-range>] )","media-in-parens":"( <media-condition> )|<media-feature>|<general-enclosed>","media-not":"not <media-in-parens>","media-or":"<media-in-parens> [or <media-in-parens>]+","media-query":"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?","media-query-list":"<media-query>#","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","mf-plain":"<mf-name> : <mf-value>","mf-range":"<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>","mf-value":"<number>|<dimension>|<ident>|<ratio>","min()":"min( <calc-sum># )","minmax()":"minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )","named-color":"transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>","namespace-prefix":"<ident>","ns-prefix":"[<ident-token>|'*']? '|'","number-percentage":"<number>|<percentage>","numeric-figure-values":"[lining-nums|oldstyle-nums]","numeric-fraction-values":"[diagonal-fractions|stacked-fractions]","numeric-spacing-values":"[proportional-nums|tabular-nums]",nth:"<an-plus-b>|even|odd","opacity()":"opacity( [<number-percentage>] )","overflow-position":"unsafe|safe","outline-radius":"<length>|<percentage>","page-body":"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>","page-margin-box":"<page-margin-box-type> '{' <declaration-list> '}'","page-margin-box-type":"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom","page-selector-list":"[<page-selector>#]?","page-selector":"<pseudo-page>+|<ident> <pseudo-page>*","path()":"path( [<fill-rule> ,]? <string> )","paint()":"paint( <ident> , <declaration-value>? )","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",position:"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]","pseudo-class-selector":"':' <ident-token>|':' <function-token> <any-value> ')'","pseudo-element-selector":"':' <pseudo-class-selector>","pseudo-page":": [left|right|first|blank]",quote:"open-quote|close-quote|no-open-quote|no-close-quote","radial-gradient()":"radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","relative-selector":"<combinator>? <complex-selector>","relative-selector-list":"<relative-selector>#","relative-size":"larger|smaller","repeat-style":"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","rgb()":"rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )","rgba()":"rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )","rotate()":"rotate( [<angle>|<zero>] )","rotate3d()":"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )","rotateX()":"rotateX( [<angle>|<zero>] )","rotateY()":"rotateY( [<angle>|<zero>] )","rotateZ()":"rotateZ( [<angle>|<zero>] )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> , <number>? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","self-position":"center|start|end|self-start|self-end|flex-start|flex-end","shape-radius":"<length-percentage>|closest-side|farthest-side","skew()":"skew( [<angle>|<zero>] , [<angle>|<zero>]? )","skewX()":"skewX( [<angle>|<zero>] )","skewY()":"skewY( [<angle>|<zero>] )","sepia()":"sepia( <number-percentage> )",shadow:"inset?&&<length>{2,4}&&<color>?","shadow-t":"[<length>{2,3}&&<color>?]",shape:"rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )","shape-box":"<box>|margin-box","side-or-corner":"[left|right]||[top|bottom]","single-animation":"<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]","single-animation-direction":"normal|reverse|alternate|alternate-reverse","single-animation-fill-mode":"none|forwards|backwards|both","single-animation-iteration-count":"infinite|<number>","single-animation-play-state":"running|paused","single-transition":"[none|<single-transition-property>]||<time>||<timing-function>||<time>","single-transition-property":"all|<custom-ident>",size:"closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}","step-position":"jump-start|jump-end|jump-none|jump-both|start|end","step-timing-function":"step-start|step-end|steps( <integer> [, <step-position>]? )","subclass-selector":"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>","supports-condition":"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*","supports-in-parens":"( <supports-condition> )|<supports-feature>|<general-enclosed>","supports-feature":"<supports-decl>|<supports-selector-fn>","supports-decl":"( <declaration> )","supports-selector-fn":"selector( <complex-selector> )",symbol:"<string>|<image>|<custom-ident>",target:"<target-counter()>|<target-counters()>|<target-text()>","target-counter()":"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [<string>|<url>] , [content|before|after|first-letter]? )","time-percentage":"<time>|<percentage>","timing-function":"linear|<cubic-bezier-timing-function>|<step-timing-function>","track-breadth":"<length-percentage>|<flex>|min-content|max-content|auto","track-list":"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?","track-repeat":"repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )","track-size":"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )","transform-function":"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> , <length-percentage>? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%","type-selector":"<wq-name>|<ns-prefix>? '*'","var()":"var( <custom-property-name> , <declaration-value>? )","viewport-length":"auto|<length-percentage>","wq-name":"<ns-prefix>? <ident-token>","-legacy-gradient":"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>","-legacy-linear-gradient":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[<angle>|<side-or-corner>]? , <color-stop-list>","-legacy-radial-gradient":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover","-legacy-radial-gradient-shape":"circle|ellipse","-non-standard-font":"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body","-non-standard-color":"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text","-non-standard-image-rendering":"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast","-non-standard-overflow":"-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable","-non-standard-width":"fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )","-webkit-gradient-color-stop":"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )","-webkit-gradient-point":"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]","-webkit-gradient-radius":"<length>|<percentage>","-webkit-gradient-type":"linear|radial","-webkit-mask-box-repeat":"repeat|stretch|round","-webkit-mask-clip-style":"border|border-box|padding|padding-box|content|content-box|text","-ms-filter-function-list":"<-ms-filter-function>+","-ms-filter-function":"<-ms-filter-function-progid>|<-ms-filter-function-legacy>","-ms-filter-function-progid":"'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]","-ms-filter-function-legacy":"<ident-token>|<function-token> <any-value>? )","-ms-filter":"<string>",age:"child|young|old","attr-name":"<wq-name>","attr-fallback":"<any-value>","border-radius":"<length-percentage>{1,2}",bottom:"<length>|auto","generic-voice":"[<age>? <gender> <integer>?]",gender:"male|female|neutral",left:"<length>|auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [<positive-integer>|auto-fill] , <line-names>+ )",paint:"none|<color>|<url> [none|<color>]?|context-fill|context-stroke","page-size":"A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",ratio:"<integer> / <integer>",right:"<length>|auto","svg-length":"<percentage>|<length>|<number>","svg-writing-mode":"lr-tb|rl-tb|tb-rl|lr|rl|tb",top:"<length>|auto","track-group":"'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>","track-list-v0":"[<string>* <track-group> <string>*]+|none","track-minmax":"minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",x:"<number>",y:"<number>",declaration:"<ident-token> : <declaration-value>? ['!' important]?","declaration-list":"[<declaration>? ';']* <declaration>?",url:"url( <string> <url-modifier>* )|<url-token>","url-modifier":"<ident>|<function-token> <any-value> )","number-zero-one":"<number [0,1]>","number-one-or-greater":"<number [1,∞]>","positive-integer":"<integer [0,∞]>","-non-standard-display":"-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"},properties:{"--*":"<declaration-value>","-ms-accelerator":"false|true","-ms-block-progression":"tb|rl|bt|lr","-ms-content-zoom-chaining":"none|chained","-ms-content-zooming":"none|zoom","-ms-content-zoom-limit":"<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>","-ms-content-zoom-limit-max":"<percentage>","-ms-content-zoom-limit-min":"<percentage>","-ms-content-zoom-snap":"<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>","-ms-content-zoom-snap-points":"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )","-ms-content-zoom-snap-type":"none|proximity|mandatory","-ms-filter":"<string>","-ms-flow-from":"[none|<custom-ident>]#","-ms-flow-into":"[none|<custom-ident>]#","-ms-grid-columns":"none|<track-list>|<auto-track-list>","-ms-grid-rows":"none|<track-list>|<auto-track-list>","-ms-high-contrast-adjust":"auto|none","-ms-hyphenate-limit-chars":"auto|<integer>{1,3}","-ms-hyphenate-limit-lines":"no-limit|<integer>","-ms-hyphenate-limit-zone":"<percentage>|<length>","-ms-ime-align":"auto|after","-ms-overflow-style":"auto|none|scrollbar|-ms-autohiding-scrollbar","-ms-scrollbar-3dlight-color":"<color>","-ms-scrollbar-arrow-color":"<color>","-ms-scrollbar-base-color":"<color>","-ms-scrollbar-darkshadow-color":"<color>","-ms-scrollbar-face-color":"<color>","-ms-scrollbar-highlight-color":"<color>","-ms-scrollbar-shadow-color":"<color>","-ms-scrollbar-track-color":"<color>","-ms-scroll-chaining":"chained|none","-ms-scroll-limit":"<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>","-ms-scroll-limit-x-max":"auto|<length>","-ms-scroll-limit-x-min":"<length>","-ms-scroll-limit-y-max":"auto|<length>","-ms-scroll-limit-y-min":"<length>","-ms-scroll-rails":"none|railed","-ms-scroll-snap-points-x":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-points-y":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-type":"none|proximity|mandatory","-ms-scroll-snap-x":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>","-ms-scroll-snap-y":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>","-ms-scroll-translation":"none|vertical-to-horizontal","-ms-text-autospace":"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space","-ms-touch-select":"grippers|none","-ms-user-select":"none|element|text","-ms-wrap-flow":"auto|both|start|end|maximum|clear","-ms-wrap-margin":"<length>","-ms-wrap-through":"wrap|none","-moz-appearance":"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized","-moz-binding":"<url>|none","-moz-border-bottom-colors":"<color>+|none","-moz-border-left-colors":"<color>+|none","-moz-border-right-colors":"<color>+|none","-moz-border-top-colors":"<color>+|none","-moz-context-properties":"none|[fill|fill-opacity|stroke|stroke-opacity]#","-moz-float-edge":"border-box|content-box|margin-box|padding-box","-moz-force-broken-image-icon":"<integer [0,1]>","-moz-image-region":"<shape>|auto","-moz-orient":"inline|block|horizontal|vertical","-moz-outline-radius":"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore|stretch-to-fit","-moz-text-blink":"none|blink","-moz-user-focus":"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none","-moz-user-input":"auto|none|enabled|disabled","-moz-user-modify":"read-only|read-write|write-only","-moz-window-dragging":"drag|no-drag","-moz-window-shadow":"default|menu|tooltip|sheet|none","-webkit-appearance":"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button","-webkit-border-before":"<'border-width'>||<'border-style'>||<'color'>","-webkit-border-before-color":"<'color'>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[above|below|right|left]? <length>? <image>?","-webkit-line-clamp":"none|<integer>","-webkit-mask":"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#","-webkit-mask-attachment":"<attachment>#","-webkit-mask-clip":"[<box>|border|padding|content|text]#","-webkit-mask-composite":"<composite-style>#","-webkit-mask-image":"<mask-reference>#","-webkit-mask-origin":"[<box>|border|padding|content]#","-webkit-mask-position":"<position>#","-webkit-mask-position-x":"[<length-percentage>|left|center|right]#","-webkit-mask-position-y":"[<length-percentage>|top|center|bottom]#","-webkit-mask-repeat":"<repeat-style>#","-webkit-mask-repeat-x":"repeat|no-repeat|space|round","-webkit-mask-repeat-y":"repeat|no-repeat|space|round","-webkit-mask-size":"<bg-size>#","-webkit-overflow-scrolling":"auto|touch","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length>||<color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default|none","-webkit-user-modify":"read-only|read-write|read-write-plaintext-only","align-content":"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>","align-items":"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]","align-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>","align-tracks":"[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",all:"initial|inherit|unset|revert",animation:"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[none|<keyframes-name>]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<timing-function>#",appearance:"none|auto|textfield|menulist-button|<compat-auto>","aspect-ratio":"auto|<ratio>",azimuth:"<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards","backdrop-filter":"none|<filter-function-list>","backface-visibility":"visible|hidden",background:"[<bg-layer> ,]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<bg-position>#","background-position-x":"[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#","background-position-y":"[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-overflow":"clip|ellipsis|<string>","block-size":"<'width'>",border:"<line-width>||<line-style>||<color>","border-block":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-color":"<'border-top-color'>{1,2}","border-block-style":"<'border-top-style'>","border-block-width":"<'border-top-width'>","border-block-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-end-color":"<'border-top-color'>","border-block-end-style":"<'border-top-style'>","border-block-end-width":"<'border-top-width'>","border-block-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-start-color":"<'border-top-color'>","border-block-start-style":"<'border-top-style'>","border-block-start-width":"<'border-top-width'>","border-bottom":"<line-width>||<line-style>||<color>","border-bottom-color":"<'border-top-color'>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<line-style>","border-bottom-width":"<line-width>","border-collapse":"collapse|separate","border-color":"<color>{1,4}","border-end-end-radius":"<length-percentage>{1,2}","border-end-start-radius":"<length-percentage>{1,2}","border-image":"<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>","border-image-outset":"[<length>|<number>]{1,4}","border-image-repeat":"[stretch|repeat|round|space]{1,2}","border-image-slice":"<number-percentage>{1,4}&&fill?","border-image-source":"none|<image>","border-image-width":"[<length-percentage>|<number>|auto]{1,4}","border-inline":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-color":"<'border-top-color'>{1,2}","border-inline-style":"<'border-top-style'>","border-inline-width":"<'border-top-width'>","border-inline-end-color":"<'border-top-color'>","border-inline-end-style":"<'border-top-style'>","border-inline-end-width":"<'border-top-width'>","border-inline-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-start-color":"<'border-top-color'>","border-inline-start-style":"<'border-top-style'>","border-inline-start-width":"<'border-top-width'>","border-left":"<line-width>||<line-style>||<color>","border-left-color":"<color>","border-left-style":"<line-style>","border-left-width":"<line-width>","border-radius":"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?","border-right":"<line-width>||<line-style>||<color>","border-right-color":"<color>","border-right-style":"<line-style>","border-right-width":"<line-width>","border-spacing":"<length> <length>?","border-start-end-radius":"<length-percentage>{1,2}","border-start-start-radius":"<length-percentage>{1,2}","border-style":"<line-style>{1,4}","border-top":"<line-width>||<line-style>||<color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<line-style>","border-top-width":"<line-width>","border-width":"<line-width>{1,4}",bottom:"<length>|<percentage>|auto","box-align":"start|center|end|baseline|stretch","box-decoration-break":"slice|clone","box-direction":"normal|reverse|inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single|multiple","box-ordinal-group":"<integer>","box-orient":"horizontal|vertical|inline-axis|block-axis|inherit","box-pack":"start|center|end|justify","box-shadow":"none|<shadow>#","box-sizing":"content-box|border-box","break-after":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-before":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-inside":"auto|avoid|avoid-page|avoid-column|avoid-region","caption-side":"top|bottom|block-start|block-end|inline-start|inline-end","caret-color":"auto|<color>",clear:"none|left|right|both|inline-start|inline-end",clip:"<shape>|auto","clip-path":"<clip-source>|[<basic-shape>||<geometry-box>]|none",color:"<color>","color-adjust":"economy|exact","column-count":"<integer>|auto","column-fill":"auto|balance|balance-all","column-gap":"normal|<length-percentage>","column-rule":"<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<'border-style'>","column-rule-width":"<'border-width'>","column-span":"none|all","column-width":"<length>|auto",columns:"<'column-width'>||<'column-count'>",contain:"none|strict|content|[size||layout||style||paint]",content:"normal|none|[<content-replacement>|<content-list>] [/ <string>]?","counter-increment":"[<custom-ident> <integer>?]+|none","counter-reset":"[<custom-ident> <integer>?]+|none","counter-set":"[<custom-ident> <integer>?]+|none",cursor:"[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",direction:"ltr|rtl",display:"[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>","empty-cells":"show|hide",filter:"none|<filter-function-list>|<-ms-filter-function-list>",flex:"none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]","flex-basis":"content|<'width'>","flex-direction":"row|row-reverse|column|column-reverse","flex-flow":"<'flex-direction'>||<'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap|wrap|wrap-reverse",float:"left|right|none|inline-start|inline-end",font:"[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar","font-family":"[<family-name>|<generic-family>]#","font-feature-settings":"normal|<feature-tag-value>#","font-kerning":"auto|normal|none","font-language-override":"normal|<string>","font-optical-sizing":"auto|none","font-variation-settings":"normal|[<string> <number>]#","font-size":"<absolute-size>|<relative-size>|<length-percentage>","font-size-adjust":"none|<number>","font-smooth":"auto|never|always|<absolute-size>|<length>","font-stretch":"<font-stretch-absolute>","font-style":"normal|italic|oblique <angle>?","font-synthesis":"none|[weight||style]","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-alternates":"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]","font-variant-caps":"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","font-variant-east-asian":"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-ligatures":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]","font-variant-numeric":"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]","font-variant-position":"normal|sub|super","font-weight":"<font-weight-absolute>|bolder|lighter",gap:"<'row-gap'> <'column-gap'>?",grid:"<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [/ <grid-line>]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[row|column]||dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [/ <grid-line>]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [/ <grid-line>]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?","grid-template-areas":"none|<string>+","grid-template-columns":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","grid-template-rows":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","hanging-punctuation":"none|[first||[force-end|allow-end]||last]",height:"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )",hyphens:"none|manual|auto","image-orientation":"from-image|<angle>|[<angle>? flip]","image-rendering":"auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>","image-resolution":"[from-image||<resolution>]&&snap?","ime-mode":"auto|normal|active|inactive|disabled","initial-letter":"normal|[<number> <integer>?]","initial-letter-align":"[auto|alphabetic|hanging|ideographic]","inline-size":"<'width'>",inset:"<'top'>{1,4}","inset-block":"<'top'>{1,2}","inset-block-end":"<'top'>","inset-block-start":"<'top'>","inset-inline":"<'top'>{1,2}","inset-inline-end":"<'top'>","inset-inline-start":"<'top'>",isolation:"auto|isolate","justify-content":"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]","justify-items":"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]","justify-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]","justify-tracks":"[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",left:"<length>|<percentage>|auto","letter-spacing":"normal|<length-percentage>","line-break":"auto|loose|normal|strict|anywhere","line-clamp":"none|<integer>","line-height":"normal|<number>|<length>|<percentage>","line-height-step":"<length>","list-style":"<'list-style-type'>||<'list-style-position'>||<'list-style-image'>","list-style-image":"<url>|none","list-style-position":"inside|outside","list-style-type":"<counter-style>|<string>|none",margin:"[<length>|<percentage>|auto]{1,4}","margin-block":"<'margin-left'>{1,2}","margin-block-end":"<'margin-left'>","margin-block-start":"<'margin-left'>","margin-bottom":"<length>|<percentage>|auto","margin-inline":"<'margin-left'>{1,2}","margin-inline-end":"<'margin-left'>","margin-inline-start":"<'margin-left'>","margin-left":"<length>|<percentage>|auto","margin-right":"<length>|<percentage>|auto","margin-top":"<length>|<percentage>|auto","margin-trim":"none|in-flow|all",mask:"<mask-layer>#","mask-border":"<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>","mask-border-mode":"luminance|alpha","mask-border-outset":"[<length>|<number>]{1,4}","mask-border-repeat":"[stretch|repeat|round|space]{1,2}","mask-border-slice":"<number-percentage>{1,4} fill?","mask-border-source":"none|<image>","mask-border-width":"[<length-percentage>|<number>|auto]{1,4}","mask-clip":"[<geometry-box>|no-clip]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance|alpha","masonry-auto-flow":"[pack|next]||[definite-first|ordered]","math-style":"normal|compact","max-block-size":"<'max-width'>","max-height":"none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )","max-inline-size":"<'max-width'>","max-lines":"none|<integer>","max-width":"none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>","min-block-size":"<'min-width'>","min-height":"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )","min-inline-size":"<'min-width'>","min-width":"auto|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill|contain|cover|none|scale-down","object-position":"<position>",offset:"[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?","offset-anchor":"auto|<position>","offset-distance":"<length-percentage>","offset-path":"none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]","offset-position":"auto|<position>","offset-rotate":"[auto|reverse]||<angle>",opacity:"<alpha-value>",order:"<integer>",orphans:"<integer>",outline:"[<'outline-color'>||<'outline-style'>||<'outline-width'>]","outline-color":"<color>|invert","outline-offset":"<length>","outline-style":"auto|<'border-style'>","outline-width":"<line-width>",overflow:"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>","overflow-anchor":"auto|none","overflow-block":"visible|hidden|clip|scroll|auto","overflow-clip-box":"padding-box|content-box","overflow-inline":"visible|hidden|clip|scroll|auto","overflow-wrap":"normal|break-word|anywhere","overflow-x":"visible|hidden|clip|scroll|auto","overflow-y":"visible|hidden|clip|scroll|auto","overscroll-behavior":"[contain|none|auto]{1,2}","overscroll-behavior-block":"contain|none|auto","overscroll-behavior-inline":"contain|none|auto","overscroll-behavior-x":"contain|none|auto","overscroll-behavior-y":"contain|none|auto",padding:"[<length>|<percentage>]{1,4}","padding-block":"<'padding-left'>{1,2}","padding-block-end":"<'padding-left'>","padding-block-start":"<'padding-left'>","padding-bottom":"<length>|<percentage>","padding-inline":"<'padding-left'>{1,2}","padding-inline-end":"<'padding-left'>","padding-inline-start":"<'padding-left'>","padding-left":"<length>|<percentage>","padding-right":"<length>|<percentage>","padding-top":"<length>|<percentage>","page-break-after":"auto|always|avoid|left|right|recto|verso","page-break-before":"auto|always|avoid|left|right|recto|verso","page-break-inside":"auto|avoid","paint-order":"normal|[fill||stroke||markers]",perspective:"none|<length>","perspective-origin":"<position>","place-content":"<'align-content'> <'justify-content'>?","place-items":"<'align-items'> <'justify-items'>?","place-self":"<'align-self'> <'justify-self'>?","pointer-events":"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",position:"static|relative|absolute|sticky|fixed|-webkit-sticky",quotes:"none|auto|[<string> <string>]+",resize:"none|both|horizontal|vertical|block|inline",right:"<length>|<percentage>|auto",rotate:"none|<angle>|[x|y|z|<number>{3}]&&<angle>","row-gap":"normal|<length-percentage>","ruby-align":"start|center|space-between|space-around","ruby-merge":"separate|collapse|auto","ruby-position":"over|under|inter-character",scale:"none|<number>{1,3}","scrollbar-color":"auto|dark|light|<color>{2}","scrollbar-gutter":"auto|[stable|always]&&both?&&force?","scrollbar-width":"auto|thin|none","scroll-behavior":"auto|smooth","scroll-margin":"<length>{1,4}","scroll-margin-block":"<length>{1,2}","scroll-margin-block-start":"<length>","scroll-margin-block-end":"<length>","scroll-margin-bottom":"<length>","scroll-margin-inline":"<length>{1,2}","scroll-margin-inline-start":"<length>","scroll-margin-inline-end":"<length>","scroll-margin-left":"<length>","scroll-margin-right":"<length>","scroll-margin-top":"<length>","scroll-padding":"[auto|<length-percentage>]{1,4}","scroll-padding-block":"[auto|<length-percentage>]{1,2}","scroll-padding-block-start":"auto|<length-percentage>","scroll-padding-block-end":"auto|<length-percentage>","scroll-padding-bottom":"auto|<length-percentage>","scroll-padding-inline":"[auto|<length-percentage>]{1,2}","scroll-padding-inline-start":"auto|<length-percentage>","scroll-padding-inline-end":"auto|<length-percentage>","scroll-padding-left":"auto|<length-percentage>","scroll-padding-right":"auto|<length-percentage>","scroll-padding-top":"auto|<length-percentage>","scroll-snap-align":"[none|start|end|center]{1,2}","scroll-snap-coordinate":"none|<position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none|repeat( <length-percentage> )","scroll-snap-points-y":"none|repeat( <length-percentage> )","scroll-snap-stop":"normal|always","scroll-snap-type":"none|[x|y|block|inline|both] [mandatory|proximity]?","scroll-snap-type-x":"none|mandatory|proximity","scroll-snap-type-y":"none|mandatory|proximity","shape-image-threshold":"<alpha-value>","shape-margin":"<length-percentage>","shape-outside":"none|<shape-box>||<basic-shape>|<image>","tab-size":"<integer>|<length>","table-layout":"auto|fixed","text-align":"start|end|left|right|center|justify|match-parent","text-align-last":"auto|start|end|left|right|center|justify","text-combine-upright":"none|all|[digits <integer>?]","text-decoration":"<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>","text-decoration-color":"<color>","text-decoration-line":"none|[underline||overline||line-through||blink]|spelling-error|grammar-error","text-decoration-skip":"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]","text-decoration-skip-ink":"auto|all|none","text-decoration-style":"solid|double|dotted|dashed|wavy","text-decoration-thickness":"auto|from-font|<length>|<percentage>","text-emphasis":"<'text-emphasis-style'>||<'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"[over|under]&&[right|left]","text-emphasis-style":"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>","text-indent":"<length-percentage>&&hanging?&&each-line?","text-justify":"auto|inter-character|inter-word|none","text-orientation":"mixed|upright|sideways","text-overflow":"[clip|ellipsis|<string>]{1,2}","text-rendering":"auto|optimizeSpeed|optimizeLegibility|geometricPrecision","text-shadow":"none|<shadow-t>#","text-size-adjust":"none|auto|<percentage>","text-transform":"none|capitalize|uppercase|lowercase|full-width|full-size-kana","text-underline-offset":"auto|<length>|<percentage>","text-underline-position":"auto|from-font|[under||[left|right]]",top:"<length>|<percentage>|auto","touch-action":"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",transform:"none|<transform-list>","transform-box":"content-box|border-box|fill-box|stroke-box|view-box","transform-origin":"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?","transform-style":"flat|preserve-3d",transition:"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none|<single-transition-property>#","transition-timing-function":"<timing-function>#",translate:"none|<length-percentage> [<length-percentage> <length>?]?","unicode-bidi":"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext","user-select":"auto|text|none|contain|all","vertical-align":"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",visibility:"visible|hidden|collapse","white-space":"normal|pre|nowrap|pre-wrap|pre-line|break-spaces",widows:"<integer>",width:"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )","will-change":"auto|<animateable-feature>#","word-break":"normal|break-all|keep-all|break-word","word-spacing":"normal|<length-percentage>","word-wrap":"normal|break-word","writing-mode":"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>","z-index":"auto|<integer>",zoom:"normal|reset|<number>|<percentage>","-moz-background-clip":"padding|border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-control-character-visibility":"visible|hidden","-moz-osx-font-smoothing":"auto|grayscale","-moz-user-select":"none|text|all|-moz-none","-ms-flex-align":"start|end|center|baseline|stretch","-ms-flex-item-align":"auto|start|end|center|baseline|stretch","-ms-flex-line-pack":"start|end|center|justify|distribute|stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start|end|center|justify|distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor|bicubic","-ms-grid-column-align":"start|end|center|stretch","-ms-grid-row-align":"start|end|center|stretch","-ms-hyphenate-limit-last":"none|always|column|page|spread","-webkit-background-clip":"[<box>|border|padding|content|text]#","-webkit-column-break-after":"always|auto|avoid","-webkit-column-break-before":"always|auto|avoid","-webkit-column-break-inside":"always|auto|avoid","-webkit-font-smoothing":"auto|none|antialiased|subpixel-antialiased","-webkit-mask-box-image":"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?","-webkit-print-color-adjust":"economy|exact","-webkit-text-security":"none|circle|disc|square","-webkit-user-drag":"none|element|auto","-webkit-user-select":"auto|none|text|all","alignment-baseline":"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical","baseline-shift":"baseline|sub|super|<svg-length>",behavior:"<url>+","clip-rule":"nonzero|evenodd",cue:"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>?|none","cue-before":"<url> <decibel>?|none","dominant-baseline":"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",fill:"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero|evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>",kerning:"auto|<svg-length>",marker:"none|<url>","marker-end":"none|<url>","marker-mid":"none|<url>","marker-start":"none|<url>",pause:"<'pause-before'> <'pause-after'>?","pause-after":"<time>|none|x-weak|weak|medium|strong|x-strong","pause-before":"<time>|none|x-weak|weak|medium|strong|x-strong",rest:"<'rest-before'> <'rest-after'>?","rest-after":"<time>|none|x-weak|weak|medium|strong|x-strong","rest-before":"<time>|none|x-weak|weak|medium|strong|x-strong","shape-rendering":"auto|optimizeSpeed|crispEdges|geometricPrecision",src:"[<url> [format( <string># )]?|local( <family-name> )]#",speak:"auto|none|normal","speak-as":"normal|spell-out||digits||[literal-punctuation|no-punctuation]",stroke:"<paint>","stroke-dasharray":"none|[<svg-length>+]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt|round|square","stroke-linejoin":"miter|round|bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start|middle|end","unicode-range":"<urange>#","voice-balance":"<number>|left|center|right|leftwards|rightwards","voice-duration":"auto|<time>","voice-family":"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve","voice-pitch":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-range":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-rate":"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>","voice-stress":"normal|strong|moderate|none|reduced","voice-volume":"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"},atrules:{charset:{prelude:"<string>",descriptors:null},"counter-style":{prelude:"<counter-style-name>",descriptors:{"additive-symbols":"[<integer>&&<symbol>]#",fallback:"<counter-style-name>",negative:"<symbol> <symbol>?",pad:"<integer>&&<symbol>",prefix:"<symbol>",range:"[[<integer>|infinite]{2}]#|auto","speak-as":"auto|bullets|numbers|words|spell-out|<counter-style-name>",suffix:"<symbol>",symbols:"<symbol>+",system:"cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"}},document:{prelude:"[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",descriptors:null},"font-face":{prelude:null,descriptors:{"font-display":"[auto|block|swap|fallback|optional]","font-family":"<family-name>","font-feature-settings":"normal|<feature-tag-value>#","font-variation-settings":"normal|[<string> <number>]#","font-stretch":"<font-stretch-absolute>{1,2}","font-style":"normal|italic|oblique <angle>{0,2}","font-weight":"<font-weight-absolute>{1,2}","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",src:"[<url> [format( <string># )]?|local( <family-name> )]#","unicode-range":"<urange>#"}},"font-feature-values":{prelude:"<family-name>#",descriptors:null},import:{prelude:"[<string>|<url>] [<media-query-list>]?",descriptors:null},keyframes:{prelude:"<keyframes-name>",descriptors:null},media:{prelude:"<media-query-list>",descriptors:null},namespace:{prelude:"<namespace-prefix>? [<string>|<url>]",descriptors:null},page:{prelude:"<page-selector-list>",descriptors:{bleed:"auto|<length>",marks:"none|[crop||cross]",size:"<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"}},property:{prelude:"<custom-property-name>",descriptors:{syntax:"<string>",inherits:"true|false","initial-value":"<string>"}},supports:{prelude:"<supports-condition>",descriptors:null},viewport:{prelude:null,descriptors:{height:"<viewport-length>{1,2}","max-height":"<viewport-length>","max-width":"<viewport-length>","max-zoom":"auto|<number>|<percentage>","min-height":"<viewport-length>","min-width":"<viewport-length>","min-zoom":"auto|<number>|<percentage>",orientation:"auto|portrait|landscape","user-zoom":"zoom|fixed","viewport-fit":"auto|contain|cover",width:"<viewport-length>{1,2}",zoom:"auto|<number>|<percentage>"}}}},Rr=Ce.cmpChar,Mr=Ce.isDigit,jr=Ce.TYPE,_r=jr.WhiteSpace,Fr=jr.Comment,Wr=jr.Ident,qr=jr.Number,Yr=jr.Dimension;function Ur(e,t){var n=this.scanner.tokenStart+e,r=this.scanner.source.charCodeAt(n);for(43!==r&&45!==r||(t&&this.error("Number sign is not allowed"),n++);n<this.scanner.tokenEnd;n++)Mr(this.scanner.source.charCodeAt(n))||this.error("Integer is expected",n);}function Hr(e){return Ur.call(this,0,e)}function Vr(e,t){if(!Rr(this.scanner.source,this.scanner.tokenStart+e,t)){var n="";switch(t){case 110:n="N is expected";break;case 45:n="HyphenMinus is expected";}this.error(n,this.scanner.tokenStart+e);}}function Kr(){for(var e=0,t=0,n=this.scanner.tokenType;n===_r||n===Fr;)n=this.scanner.lookupType(++e);if(n!==qr){if(!this.scanner.isDelim(43,e)&&!this.scanner.isDelim(45,e))return null;t=this.scanner.isDelim(43,e)?43:45;do{n=this.scanner.lookupType(++e);}while(n===_r||n===Fr);n!==qr&&(this.scanner.skip(e),Hr.call(this,!0));}return e>0&&this.scanner.skip(e),0===t&&43!==(n=this.scanner.source.charCodeAt(this.scanner.tokenStart))&&45!==n&&this.error("Number sign is expected"),Hr.call(this,0!==t),45===t?"-"+this.consume(qr):this.consume(qr)}var Gr={name:"AnPlusB",structure:{a:[String,null],b:[String,null]},parse:function(){var e=this.scanner.tokenStart,t=null,n=null;if(this.scanner.tokenType===qr)Hr.call(this,!1),n=this.consume(qr);else if(this.scanner.tokenType===Wr&&Rr(this.scanner.source,this.scanner.tokenStart,45))switch(t="-1",Vr.call(this,1,110),this.scanner.getTokenLength()){case 2:this.scanner.next(),n=Kr.call(this);break;case 3:Vr.call(this,2,45),this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr);break;default:Vr.call(this,2,45),Ur.call(this,3,!0),this.scanner.next(),n=this.scanner.substrToCursor(e+2);}else if(this.scanner.tokenType===Wr||this.scanner.isDelim(43)&&this.scanner.lookupType(1)===Wr){var r=0;switch(t="1",this.scanner.isDelim(43)&&(r=1,this.scanner.next()),Vr.call(this,0,110),this.scanner.getTokenLength()){case 1:this.scanner.next(),n=Kr.call(this);break;case 2:Vr.call(this,1,45),this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr);break;default:Vr.call(this,1,45),Ur.call(this,2,!0),this.scanner.next(),n=this.scanner.substrToCursor(e+r+1);}}else if(this.scanner.tokenType===Yr){for(var i=this.scanner.source.charCodeAt(this.scanner.tokenStart),a=(r=43===i||45===i,this.scanner.tokenStart+r);a<this.scanner.tokenEnd&&Mr(this.scanner.source.charCodeAt(a));a++);a===this.scanner.tokenStart+r&&this.error("Integer is expected",this.scanner.tokenStart+r),Vr.call(this,a-this.scanner.tokenStart,110),t=this.scanner.source.substring(e,a),a+1===this.scanner.tokenEnd?(this.scanner.next(),n=Kr.call(this)):(Vr.call(this,a-this.scanner.tokenStart+1,45),a+2===this.scanner.tokenEnd?(this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr)):(Ur.call(this,a-this.scanner.tokenStart+2,!0),this.scanner.next(),n=this.scanner.substrToCursor(a+1)));}else this.error();return null!==t&&43===t.charCodeAt(0)&&(t=t.substr(1)),null!==n&&43===n.charCodeAt(0)&&(n=n.substr(1)),{type:"AnPlusB",loc:this.getLocation(e,this.scanner.tokenStart),a:t,b:n}},generate:function(e){var t=null!==e.a&&void 0!==e.a,n=null!==e.b&&void 0!==e.b;t?(this.chunk("+1"===e.a?"+n":"1"===e.a?"n":"-1"===e.a?"-n":e.a+"n"),n&&("-"===(n=String(e.b)).charAt(0)||"+"===n.charAt(0)?(this.chunk(n.charAt(0)),this.chunk(n.substr(1))):(this.chunk("+"),this.chunk(n)))):this.chunk(String(e.b));}},Qr=Ce.TYPE,Xr=Qr.WhiteSpace,Zr=Qr.Semicolon,$r=Qr.LeftCurlyBracket,Jr=Qr.Delim;function ei(){return this.scanner.tokenIndex>0&&this.scanner.lookupType(-1)===Xr?this.scanner.tokenIndex>1?this.scanner.getTokenStart(this.scanner.tokenIndex-1):this.scanner.firstCharOffset:this.scanner.tokenStart}function ti(){return 0}var ni={name:"Raw",structure:{value:String},parse:function(e,t,n){var r,i=this.scanner.getTokenStart(e);return this.scanner.skip(this.scanner.getRawLength(e,t||ti)),r=n&&this.scanner.tokenStart>i?ei.call(this):this.scanner.tokenStart,{type:"Raw",loc:this.getLocation(i,r),value:this.scanner.source.substring(i,r)}},generate:function(e){this.chunk(e.value);},mode:{default:ti,leftCurlyBracket:function(e){return e===$r?1:0},leftCurlyBracketOrSemicolon:function(e){return e===$r||e===Zr?1:0},exclamationMarkOrSemicolon:function(e,t,n){return e===Jr&&33===t.charCodeAt(n)||e===Zr?1:0},semicolonIncluded:function(e){return e===Zr?2:0}}},ri=Ce.TYPE,ii=ni.mode,ai=ri.AtKeyword,oi=ri.Semicolon,si=ri.LeftCurlyBracket,li=ri.RightCurlyBracket;function ci(e){return this.Raw(e,ii.leftCurlyBracketOrSemicolon,!0)}function ui(){for(var e,t=1;e=this.scanner.lookupType(t);t++){if(e===li)return !0;if(e===si||e===ai)return !1}return !1}var hi={name:"Atrule",structure:{name:String,prelude:["AtrulePrelude","Raw",null],block:["Block",null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null,i=null;switch(this.eat(ai),t=(e=this.scanner.substrToCursor(n+1)).toLowerCase(),this.scanner.skipSC(),!1===this.scanner.eof&&this.scanner.tokenType!==si&&this.scanner.tokenType!==oi&&(this.parseAtrulePrelude?"AtrulePrelude"===(r=this.parseWithFallback(this.AtrulePrelude.bind(this,e),ci)).type&&null===r.children.head&&(r=null):r=ci.call(this,this.scanner.tokenIndex),this.scanner.skipSC()),this.scanner.tokenType){case oi:this.scanner.next();break;case si:i=this.atrule.hasOwnProperty(t)&&"function"==typeof this.atrule[t].block?this.atrule[t].block.call(this):this.Block(ui.call(this));}return {type:"Atrule",loc:this.getLocation(n,this.scanner.tokenStart),name:e,prelude:r,block:i}},generate:function(e){this.chunk("@"),this.chunk(e.name),null!==e.prelude&&(this.chunk(" "),this.node(e.prelude)),e.block?this.node(e.block):this.chunk(";");},walkContext:"atrule"},pi=Ce.TYPE,di=pi.Semicolon,mi=pi.LeftCurlyBracket,gi={name:"AtrulePrelude",structure:{children:[[]]},parse:function(e){var t=null;return null!==e&&(e=e.toLowerCase()),this.scanner.skipSC(),t=this.atrule.hasOwnProperty(e)&&"function"==typeof this.atrule[e].prelude?this.atrule[e].prelude.call(this):this.readSequence(this.scope.AtrulePrelude),this.scanner.skipSC(),!0!==this.scanner.eof&&this.scanner.tokenType!==mi&&this.scanner.tokenType!==di&&this.error("Semicolon or block is expected"),null===t&&(t=this.createList()),{type:"AtrulePrelude",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e);},walkContext:"atrulePrelude"},fi=Ce.TYPE,bi=fi.Ident,yi=fi.String,ki=fi.Colon,vi=fi.LeftSquareBracket,xi=fi.RightSquareBracket;function wi(){this.scanner.eof&&this.error("Unexpected end of input");var e=this.scanner.tokenStart,t=!1,n=!0;return this.scanner.isDelim(42)?(t=!0,n=!1,this.scanner.next()):this.scanner.isDelim(124)||this.eat(bi),this.scanner.isDelim(124)?61!==this.scanner.source.charCodeAt(this.scanner.tokenStart+1)?(this.scanner.next(),this.eat(bi)):t&&this.error("Identifier is expected",this.scanner.tokenEnd):t&&this.error("Vertical line is expected"),n&&this.scanner.tokenType===ki&&(this.scanner.next(),this.eat(bi)),{type:"Identifier",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}}function Si(){var e=this.scanner.tokenStart,t=this.scanner.source.charCodeAt(e);return 61!==t&&126!==t&&94!==t&&36!==t&&42!==t&&124!==t&&this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"),this.scanner.next(),61!==t&&(this.scanner.isDelim(61)||this.error("Equal sign is expected"),this.scanner.next()),this.scanner.substrToCursor(e)}var Ci={name:"AttributeSelector",structure:{name:"Identifier",matcher:[String,null],value:["String","Identifier",null],flags:[String,null]},parse:function(){var e,t=this.scanner.tokenStart,n=null,r=null,i=null;return this.eat(vi),this.scanner.skipSC(),e=wi.call(this),this.scanner.skipSC(),this.scanner.tokenType!==xi&&(this.scanner.tokenType!==bi&&(n=Si.call(this),this.scanner.skipSC(),r=this.scanner.tokenType===yi?this.String():this.Identifier(),this.scanner.skipSC()),this.scanner.tokenType===bi&&(i=this.scanner.getTokenValue(),this.scanner.next(),this.scanner.skipSC())),this.eat(xi),{type:"AttributeSelector",loc:this.getLocation(t,this.scanner.tokenStart),name:e,matcher:n,value:r,flags:i}},generate:function(e){var t=" ";this.chunk("["),this.node(e.name),null!==e.matcher&&(this.chunk(e.matcher),null!==e.value&&(this.node(e.value),"String"===e.value.type&&(t=""))),null!==e.flags&&(this.chunk(t),this.chunk(e.flags)),this.chunk("]");}},zi=Ce.TYPE,Ai=ni.mode,Pi=zi.WhiteSpace,Ti=zi.Comment,Li=zi.Semicolon,Ei=zi.AtKeyword,Di=zi.LeftCurlyBracket,Oi=zi.RightCurlyBracket;function Bi(e){return this.Raw(e,null,!0)}function Ii(){return this.parseWithFallback(this.Rule,Bi)}function Ni(e){return this.Raw(e,Ai.semicolonIncluded,!0)}function Ri(){if(this.scanner.tokenType===Li)return Ni.call(this,this.scanner.tokenIndex);var e=this.parseWithFallback(this.Declaration,Ni);return this.scanner.tokenType===Li&&this.scanner.next(),e}var Mi={name:"Block",structure:{children:[["Atrule","Rule","Declaration"]]},parse:function(e){var t=e?Ri:Ii,n=this.scanner.tokenStart,r=this.createList();this.eat(Di);e:for(;!this.scanner.eof;)switch(this.scanner.tokenType){case Oi:break e;case Pi:case Ti:this.scanner.next();break;case Ei:r.push(this.parseWithFallback(this.Atrule,Bi));break;default:r.push(t.call(this));}return this.scanner.eof||this.eat(Oi),{type:"Block",loc:this.getLocation(n,this.scanner.tokenStart),children:r}},generate:function(e){this.chunk("{"),this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";");})),this.chunk("}");},walkContext:"block"},ji=Ce.TYPE,_i=ji.LeftSquareBracket,Fi=ji.RightSquareBracket,Wi={name:"Brackets",structure:{children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart;return this.eat(_i),n=e.call(this,t),this.scanner.eof||this.eat(Fi),{type:"Brackets",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("["),this.children(e),this.chunk("]");}},qi=Ce.TYPE.CDC,Yi={name:"CDC",structure:[],parse:function(){var e=this.scanner.tokenStart;return this.eat(qi),{type:"CDC",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("--\x3e");}},Ui=Ce.TYPE.CDO,Hi={name:"CDO",structure:[],parse:function(){var e=this.scanner.tokenStart;return this.eat(Ui),{type:"CDO",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("\x3c!--");}},Vi=Ce.TYPE.Ident,Ki={name:"ClassSelector",structure:{name:String},parse:function(){return this.scanner.isDelim(46)||this.error("Full stop is expected"),this.scanner.next(),{type:"ClassSelector",loc:this.getLocation(this.scanner.tokenStart-1,this.scanner.tokenEnd),name:this.consume(Vi)}},generate:function(e){this.chunk("."),this.chunk(e.name);}},Gi=Ce.TYPE.Ident,Qi={name:"Combinator",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 62:case 43:case 126:this.scanner.next();break;case 47:this.scanner.next(),this.scanner.tokenType===Gi&&!1!==this.scanner.lookupValue(0,"deep")||this.error("Identifier `deep` is expected"),this.scanner.next(),this.scanner.isDelim(47)||this.error("Solidus is expected"),this.scanner.next();break;default:this.error("Combinator is expected");}return {type:"Combinator",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name);}},Xi=Ce.TYPE.Comment,Zi={name:"Comment",structure:{value:String},parse:function(){var e=this.scanner.tokenStart,t=this.scanner.tokenEnd;return this.eat(Xi),t-e+2>=2&&42===this.scanner.source.charCodeAt(t-2)&&47===this.scanner.source.charCodeAt(t-1)&&(t-=2),{type:"Comment",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e+2,t)}},generate:function(e){this.chunk("/*"),this.chunk(e.value),this.chunk("*/");}},$i=ae.isCustomProperty,Ji=Ce.TYPE,ea=ni.mode,ta=Ji.Ident,na=Ji.Hash,ra=Ji.Colon,ia=Ji.Semicolon,aa=Ji.Delim,oa=Ji.WhiteSpace;function sa(e){return this.Raw(e,ea.exclamationMarkOrSemicolon,!0)}function la(e){return this.Raw(e,ea.exclamationMarkOrSemicolon,!1)}function ca(){var e=this.scanner.tokenIndex,t=this.Value();return "Raw"!==t.type&&!1===this.scanner.eof&&this.scanner.tokenType!==ia&&!1===this.scanner.isDelim(33)&&!1===this.scanner.isBalanceEdge(e)&&this.error(),t}var ua={name:"Declaration",structure:{important:[Boolean,String],property:String,value:["Value","Raw"]},parse:function(){var e,t=this.scanner.tokenStart,n=this.scanner.tokenIndex,r=ha.call(this),i=$i(r),a=i?this.parseCustomProperty:this.parseValue,o=i?la:sa,s=!1;this.scanner.skipSC(),this.eat(ra);const l=this.scanner.tokenIndex;if(i||this.scanner.skipSC(),e=a?this.parseWithFallback(ca,o):o.call(this,this.scanner.tokenIndex),i&&"Value"===e.type&&e.children.isEmpty())for(let t=l-this.scanner.tokenIndex;t<=0;t++)if(this.scanner.lookupType(t)===oa){e.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}return this.scanner.isDelim(33)&&(s=pa.call(this),this.scanner.skipSC()),!1===this.scanner.eof&&this.scanner.tokenType!==ia&&!1===this.scanner.isBalanceEdge(n)&&this.error(),{type:"Declaration",loc:this.getLocation(t,this.scanner.tokenStart),important:s,property:r,value:e}},generate:function(e){this.chunk(e.property),this.chunk(":"),this.node(e.value),e.important&&this.chunk(!0===e.important?"!important":"!"+e.important);},walkContext:"declaration"};function ha(){var e=this.scanner.tokenStart;if(this.scanner.tokenType===aa)switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 42:case 36:case 43:case 35:case 38:this.scanner.next();break;case 47:this.scanner.next(),this.scanner.isDelim(47)&&this.scanner.next();}return this.scanner.tokenType===na?this.eat(na):this.eat(ta),this.scanner.substrToCursor(e)}function pa(){this.eat(aa),this.scanner.skipSC();var e=this.consume(ta);return "important"===e||e}var da=Ce.TYPE,ma=ni.mode,ga=da.WhiteSpace,fa=da.Comment,ba=da.Semicolon;function ya(e){return this.Raw(e,ma.semicolonIncluded,!0)}var ka={name:"DeclarationList",structure:{children:[["Declaration"]]},parse:function(){for(var e=this.createList();!this.scanner.eof;)switch(this.scanner.tokenType){case ga:case fa:case ba:this.scanner.next();break;default:e.push(this.parseWithFallback(this.Declaration,ya));}return {type:"DeclarationList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";");}));}},va=M.consumeNumber,xa=Ce.TYPE.Dimension,wa={name:"Dimension",structure:{value:String,unit:String},parse:function(){var e=this.scanner.tokenStart,t=va(this.scanner.source,e);return this.eat(xa),{type:"Dimension",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t),unit:this.scanner.source.substring(t,this.scanner.tokenStart)}},generate:function(e){this.chunk(e.value),this.chunk(e.unit);}},Sa=Ce.TYPE.RightParenthesis,Ca={name:"Function",structure:{name:String,children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart,i=this.consumeFunctionName(),a=i.toLowerCase();return n=t.hasOwnProperty(a)?t[a].call(this,t):e.call(this,t),this.scanner.eof||this.eat(Sa),{type:"Function",loc:this.getLocation(r,this.scanner.tokenStart),name:i,children:n}},generate:function(e){this.chunk(e.name),this.chunk("("),this.children(e),this.chunk(")");},walkContext:"function"},za=Ce.TYPE.Hash,Aa={name:"Hash",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return this.eat(za),{type:"Hash",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#"),this.chunk(e.value);}},Pa=Ce.TYPE.Ident,Ta={name:"Identifier",structure:{name:String},parse:function(){return {type:"Identifier",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),name:this.consume(Pa)}},generate:function(e){this.chunk(e.name);}},La=Ce.TYPE.Hash,Ea={name:"IdSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;return this.eat(La),{type:"IdSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#"),this.chunk(e.name);}},Da=Ce.TYPE,Oa=Da.Ident,Ba=Da.Number,Ia=Da.Dimension,Na=Da.LeftParenthesis,Ra=Da.RightParenthesis,Ma=Da.Colon,ja=Da.Delim,_a={name:"MediaFeature",structure:{name:String,value:["Identifier","Number","Dimension","Ratio",null]},parse:function(){var e,t=this.scanner.tokenStart,n=null;if(this.eat(Na),this.scanner.skipSC(),e=this.consume(Oa),this.scanner.skipSC(),this.scanner.tokenType!==Ra){switch(this.eat(Ma),this.scanner.skipSC(),this.scanner.tokenType){case Ba:n=this.lookupNonWSType(1)===ja?this.Ratio():this.Number();break;case Ia:n=this.Dimension();break;case Oa:n=this.Identifier();break;default:this.error("Number, dimension, ratio or identifier is expected");}this.scanner.skipSC();}return this.eat(Ra),{type:"MediaFeature",loc:this.getLocation(t,this.scanner.tokenStart),name:e,value:n}},generate:function(e){this.chunk("("),this.chunk(e.name),null!==e.value&&(this.chunk(":"),this.node(e.value)),this.chunk(")");}},Fa=Ce.TYPE,Wa=Fa.WhiteSpace,qa=Fa.Comment,Ya=Fa.Ident,Ua=Fa.LeftParenthesis,Ha={name:"MediaQuery",structure:{children:[["Identifier","MediaFeature","WhiteSpace"]]},parse:function(){this.scanner.skipSC();var e=this.createList(),t=null,n=null;e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case qa:this.scanner.next();continue;case Wa:n=this.WhiteSpace();continue;case Ya:t=this.Identifier();break;case Ua:t=this.MediaFeature();break;default:break e}null!==n&&(e.push(n),n=null),e.push(t);}return null===t&&this.error("Identifier or parenthesis is expected"),{type:"MediaQuery",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e);}},Va=Ce.TYPE.Comma,Ka={name:"MediaQueryList",structure:{children:[["MediaQuery"]]},parse:function(e){var t=this.createList();for(this.scanner.skipSC();!this.scanner.eof&&(t.push(this.MediaQuery(e)),this.scanner.tokenType===Va);)this.scanner.next();return {type:"MediaQueryList",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e,(function(){this.chunk(",");}));}},Ga=Ce.TYPE.Number,Qa={name:"Number",structure:{value:String},parse:function(){return {type:"Number",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(Ga)}},generate:function(e){this.chunk(e.value);}},Xa={name:"Operator",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return this.scanner.next(),{type:"Operator",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value);}},Za=Ce.TYPE,$a=Za.LeftParenthesis,Ja=Za.RightParenthesis,eo={name:"Parentheses",structure:{children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart;return this.eat($a),n=e.call(this,t),this.scanner.eof||this.eat(Ja),{type:"Parentheses",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("("),this.children(e),this.chunk(")");}},to=M.consumeNumber,no=Ce.TYPE.Percentage,ro={name:"Percentage",structure:{value:String},parse:function(){var e=this.scanner.tokenStart,t=to(this.scanner.source,e);return this.eat(no),{type:"Percentage",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t)}},generate:function(e){this.chunk(e.value),this.chunk("%");}},io=Ce.TYPE,ao=io.Ident,oo=io.Function,so=io.Colon,lo=io.RightParenthesis,co={name:"PseudoClassSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null;return this.eat(so),this.scanner.tokenType===oo?(t=(e=this.consumeFunctionName()).toLowerCase(),this.pseudo.hasOwnProperty(t)?(this.scanner.skipSC(),r=this.pseudo[t].call(this),this.scanner.skipSC()):(r=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1)),this.eat(lo)):e=this.consume(ao),{type:"PseudoClassSelector",loc:this.getLocation(n,this.scanner.tokenStart),name:e,children:r}},generate:function(e){this.chunk(":"),this.chunk(e.name),null!==e.children&&(this.chunk("("),this.children(e),this.chunk(")"));},walkContext:"function"},uo=Ce.TYPE,ho=uo.Ident,po=uo.Function,mo=uo.Colon,go=uo.RightParenthesis,fo={name:"PseudoElementSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null;return this.eat(mo),this.eat(mo),this.scanner.tokenType===po?(t=(e=this.consumeFunctionName()).toLowerCase(),this.pseudo.hasOwnProperty(t)?(this.scanner.skipSC(),r=this.pseudo[t].call(this),this.scanner.skipSC()):(r=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1)),this.eat(go)):e=this.consume(ho),{type:"PseudoElementSelector",loc:this.getLocation(n,this.scanner.tokenStart),name:e,children:r}},generate:function(e){this.chunk("::"),this.chunk(e.name),null!==e.children&&(this.chunk("("),this.children(e),this.chunk(")"));},walkContext:"function"},bo=Ce.isDigit,yo=Ce.TYPE,ko=yo.Number,vo=yo.Delim;function xo(){this.scanner.skipWS();for(var e=this.consume(ko),t=0;t<e.length;t++){var n=e.charCodeAt(t);bo(n)||46===n||this.error("Unsigned number is expected",this.scanner.tokenStart-e.length+t);}return 0===Number(e)&&this.error("Zero number is not allowed",this.scanner.tokenStart-e.length),e}var wo={name:"Ratio",structure:{left:String,right:String},parse:function(){var e,t=this.scanner.tokenStart,n=xo.call(this);return this.scanner.skipWS(),this.scanner.isDelim(47)||this.error("Solidus is expected"),this.eat(vo),e=xo.call(this),{type:"Ratio",loc:this.getLocation(t,this.scanner.tokenStart),left:n,right:e}},generate:function(e){this.chunk(e.left),this.chunk("/"),this.chunk(e.right);}},So=Ce.TYPE,Co=ni.mode,zo=So.LeftCurlyBracket;function Ao(e){return this.Raw(e,Co.leftCurlyBracket,!0)}function Po(){var e=this.SelectorList();return "Raw"!==e.type&&!1===this.scanner.eof&&this.scanner.tokenType!==zo&&this.error(),e}var To={name:"Rule",structure:{prelude:["SelectorList","Raw"],block:["Block"]},parse:function(){var e,t,n=this.scanner.tokenIndex,r=this.scanner.tokenStart;return e=this.parseRulePrelude?this.parseWithFallback(Po,Ao):Ao.call(this,n),t=this.Block(!0),{type:"Rule",loc:this.getLocation(r,this.scanner.tokenStart),prelude:e,block:t}},generate:function(e){this.node(e.prelude),this.node(e.block);},walkContext:"rule"},Lo=Ce.TYPE.Comma,Eo={name:"SelectorList",structure:{children:[["Selector","Raw"]]},parse:function(){for(var e=this.createList();!this.scanner.eof&&(e.push(this.Selector()),this.scanner.tokenType===Lo);)this.scanner.next();return {type:"SelectorList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(){this.chunk(",");}));},walkContext:"selector"},Do=Ce.TYPE.String,Oo={name:"String",structure:{value:String},parse:function(){return {type:"String",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(Do)}},generate:function(e){this.chunk(e.value);}},Bo=Ce.TYPE,Io=Bo.WhiteSpace,No=Bo.Comment,Ro=Bo.AtKeyword,Mo=Bo.CDO,jo=Bo.CDC;function _o(e){return this.Raw(e,null,!1)}var Fo={name:"StyleSheet",structure:{children:[["Comment","CDO","CDC","Atrule","Rule","Raw"]]},parse:function(){for(var e,t=this.scanner.tokenStart,n=this.createList();!this.scanner.eof;){switch(this.scanner.tokenType){case Io:this.scanner.next();continue;case No:if(33!==this.scanner.source.charCodeAt(this.scanner.tokenStart+2)){this.scanner.next();continue}e=this.Comment();break;case Mo:e=this.CDO();break;case jo:e=this.CDC();break;case Ro:e=this.parseWithFallback(this.Atrule,_o);break;default:e=this.parseWithFallback(this.Rule,_o);}n.push(e);}return {type:"StyleSheet",loc:this.getLocation(t,this.scanner.tokenStart),children:n}},generate:function(e){this.children(e);},walkContext:"stylesheet"},Wo=Ce.TYPE.Ident;function qo(){this.scanner.tokenType!==Wo&&!1===this.scanner.isDelim(42)&&this.error("Identifier or asterisk is expected"),this.scanner.next();}var Yo={name:"TypeSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;return this.scanner.isDelim(124)?(this.scanner.next(),qo.call(this)):(qo.call(this),this.scanner.isDelim(124)&&(this.scanner.next(),qo.call(this))),{type:"TypeSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name);}},Uo=Ce.isHexDigit,Ho=Ce.cmpChar,Vo=Ce.TYPE,Ko=Ce.NAME,Go=Vo.Ident,Qo=Vo.Number,Xo=Vo.Dimension;function Zo(e,t){for(var n=this.scanner.tokenStart+e,r=0;n<this.scanner.tokenEnd;n++){var i=this.scanner.source.charCodeAt(n);if(45===i&&t&&0!==r)return 0===Zo.call(this,e+r+1,!1)&&this.error(),-1;Uo(i)||this.error(t&&0!==r?"HyphenMinus"+(r<6?" or hex digit":"")+" is expected":r<6?"Hex digit is expected":"Unexpected input",n),++r>6&&this.error("Too many hex digits",n);}return this.scanner.next(),r}function $o(e){for(var t=0;this.scanner.isDelim(63);)++t>e&&this.error("Too many question marks"),this.scanner.next();}function Jo(e){this.scanner.source.charCodeAt(this.scanner.tokenStart)!==e&&this.error(Ko[e]+" is expected");}function es(){var e=0;return this.scanner.isDelim(43)?(this.scanner.next(),this.scanner.tokenType===Go?void((e=Zo.call(this,0,!0))>0&&$o.call(this,6-e)):this.scanner.isDelim(63)?(this.scanner.next(),void $o.call(this,5)):void this.error("Hex digit or question mark is expected")):this.scanner.tokenType===Qo?(Jo.call(this,43),e=Zo.call(this,1,!0),this.scanner.isDelim(63)?void $o.call(this,6-e):this.scanner.tokenType===Xo||this.scanner.tokenType===Qo?(Jo.call(this,45),void Zo.call(this,1,!1)):void 0):this.scanner.tokenType===Xo?(Jo.call(this,43),void((e=Zo.call(this,1,!0))>0&&$o.call(this,6-e))):void this.error()}var ts={name:"UnicodeRange",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return Ho(this.scanner.source,e,117)||this.error("U is expected"),Ho(this.scanner.source,e+1,43)||this.error("Plus sign is expected"),this.scanner.next(),es.call(this),{type:"UnicodeRange",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value);}},ns=Ce.isWhiteSpace,rs=Ce.cmpStr,is=Ce.TYPE,as=is.Function,os=is.Url,ss=is.RightParenthesis,ls={name:"Url",structure:{value:["String","Raw"]},parse:function(){var e,t=this.scanner.tokenStart;switch(this.scanner.tokenType){case os:for(var n=t+4,r=this.scanner.tokenEnd-1;n<r&&ns(this.scanner.source.charCodeAt(n));)n++;for(;n<r&&ns(this.scanner.source.charCodeAt(r-1));)r--;e={type:"Raw",loc:this.getLocation(n,r),value:this.scanner.source.substring(n,r)},this.eat(os);break;case as:rs(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")||this.error("Function name must be `url`"),this.eat(as),this.scanner.skipSC(),e=this.String(),this.scanner.skipSC(),this.eat(ss);break;default:this.error("Url or Function is expected");}return {type:"Url",loc:this.getLocation(t,this.scanner.tokenStart),value:e}},generate:function(e){this.chunk("url"),this.chunk("("),this.node(e.value),this.chunk(")");}},cs=Ce.TYPE.WhiteSpace,us=Object.freeze({type:"WhiteSpace",loc:null,value:" "}),hs={AnPlusB:Gr,Atrule:hi,AtrulePrelude:gi,AttributeSelector:Ci,Block:Mi,Brackets:Wi,CDC:Yi,CDO:Hi,ClassSelector:Ki,Combinator:Qi,Comment:Zi,Declaration:ua,DeclarationList:ka,Dimension:wa,Function:Ca,Hash:Aa,Identifier:Ta,IdSelector:Ea,MediaFeature:_a,MediaQuery:Ha,MediaQueryList:Ka,Nth:{name:"Nth",structure:{nth:["AnPlusB","Identifier"],selector:["SelectorList",null]},parse:function(e){this.scanner.skipSC();var t,n=this.scanner.tokenStart,r=n,i=null;return t=this.scanner.lookupValue(0,"odd")||this.scanner.lookupValue(0,"even")?this.Identifier():this.AnPlusB(),this.scanner.skipSC(),e&&this.scanner.lookupValue(0,"of")?(this.scanner.next(),i=this.SelectorList(),this.needPositions&&(r=this.getLastListNode(i.children).loc.end.offset)):this.needPositions&&(r=t.loc.end.offset),{type:"Nth",loc:this.getLocation(n,r),nth:t,selector:i}},generate:function(e){this.node(e.nth),null!==e.selector&&(this.chunk(" of "),this.node(e.selector));}},Number:Qa,Operator:Xa,Parentheses:eo,Percentage:ro,PseudoClassSelector:co,PseudoElementSelector:fo,Ratio:wo,Raw:ni,Rule:To,Selector:{name:"Selector",structure:{children:[["TypeSelector","IdSelector","ClassSelector","AttributeSelector","PseudoClassSelector","PseudoElementSelector","Combinator","WhiteSpace"]]},parse:function(){var e=this.readSequence(this.scope.Selector);return null===this.getFirstListNode(e)&&this.error("Selector is expected"),{type:"Selector",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e);}},SelectorList:Eo,String:Oo,StyleSheet:Fo,TypeSelector:Yo,UnicodeRange:ts,Url:ls,Value:{name:"Value",structure:{children:[[]]},parse:function(){var e=this.scanner.tokenStart,t=this.readSequence(this.scope.Value);return {type:"Value",loc:this.getLocation(e,this.scanner.tokenStart),children:t}},generate:function(e){this.children(e);}},WhiteSpace:{name:"WhiteSpace",structure:{value:String},parse:function(){return this.eat(cs),us},generate:function(e){this.chunk(e.value);}}},ps={generic:!0,types:Nr.types,atrules:Nr.atrules,properties:Nr.properties,node:hs},ds=Ce.cmpChar,ms=Ce.cmpStr,gs=Ce.TYPE,fs=gs.Ident,bs=gs.String,ys=gs.Number,ks=gs.Function,vs=gs.Url,xs=gs.Hash,ws=gs.Dimension,Ss=gs.Percentage,Cs=gs.LeftParenthesis,zs=gs.LeftSquareBracket,As=gs.Comma,Ps=gs.Delim,Ts=function(e){switch(this.scanner.tokenType){case xs:return this.Hash();case As:return e.space=null,e.ignoreWSAfter=!0,this.Operator();case Cs:return this.Parentheses(this.readSequence,e.recognizer);case zs:return this.Brackets(this.readSequence,e.recognizer);case bs:return this.String();case ws:return this.Dimension();case Ss:return this.Percentage();case ys:return this.Number();case ks:return ms(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")?this.Url():this.Function(this.readSequence,e.recognizer);case vs:return this.Url();case fs:return ds(this.scanner.source,this.scanner.tokenStart,117)&&ds(this.scanner.source,this.scanner.tokenStart+1,43)?this.UnicodeRange():this.Identifier();case Ps:var t=this.scanner.source.charCodeAt(this.scanner.tokenStart);if(47===t||42===t||43===t||45===t)return this.Operator();35===t&&this.error("Hex or identifier is expected",this.scanner.tokenStart+1);}},Ls={getNode:Ts},Es=Ce.TYPE,Ds=Es.Delim,Os=Es.Ident,Bs=Es.Dimension,Is=Es.Percentage,Ns=Es.Number,Rs=Es.Hash,Ms=Es.Colon,js=Es.LeftSquareBracket;var _s={getNode:function(e){switch(this.scanner.tokenType){case js:return this.AttributeSelector();case Rs:return this.IdSelector();case Ms:return this.scanner.lookupType(1)===Ms?this.PseudoElementSelector():this.PseudoClassSelector();case Os:return this.TypeSelector();case Ns:case Is:return this.Percentage();case Bs:46===this.scanner.source.charCodeAt(this.scanner.tokenStart)&&this.error("Identifier is expected",this.scanner.tokenStart+1);break;case Ds:switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 43:case 62:case 126:return e.space=null,e.ignoreWSAfter=!0,this.Combinator();case 47:return this.Combinator();case 46:return this.ClassSelector();case 42:case 124:return this.TypeSelector();case 35:return this.IdSelector()}}}},Fs=Ce.TYPE,Ws=ni.mode,qs=Fs.Comma,Ys=Fs.WhiteSpace,Us={AtrulePrelude:Ls,Selector:_s,Value:{getNode:Ts,expression:function(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))},var:function(){var e=this.createList();if(this.scanner.skipSC(),e.push(this.Identifier()),this.scanner.skipSC(),this.scanner.tokenType===qs){e.push(this.Operator());const t=this.scanner.tokenIndex,n=this.parseCustomProperty?this.Value(null):this.Raw(this.scanner.tokenIndex,Ws.exclamationMarkOrSemicolon,!1);if("Value"===n.type&&n.children.isEmpty())for(let e=t-this.scanner.tokenIndex;e<=0;e++)if(this.scanner.lookupType(e)===Ys){n.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}e.push(n);}return e}}},Hs=Ce.TYPE,Vs=Hs.String,Ks=Hs.Ident,Gs=Hs.Url,Qs=Hs.Function,Xs=Hs.LeftParenthesis,Zs={parse:{prelude:function(){var e=this.createList();switch(this.scanner.skipSC(),this.scanner.tokenType){case Vs:e.push(this.String());break;case Gs:case Qs:e.push(this.Url());break;default:this.error("String or url() is expected");}return this.lookupNonWSType(0)!==Ks&&this.lookupNonWSType(0)!==Xs||(e.push(this.WhiteSpace()),e.push(this.MediaQueryList())),e},block:null}},$s=Ce.TYPE,Js=$s.WhiteSpace,el=$s.Comment,tl=$s.Ident,nl=$s.Function,rl=$s.Colon,il=$s.LeftParenthesis;function al(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))}function ol(){return this.scanner.skipSC(),this.scanner.tokenType===tl&&this.lookupNonWSType(1)===rl?this.createSingleNodeList(this.Declaration()):sl.call(this)}function sl(){var e,t=this.createList(),n=null;this.scanner.skipSC();e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case Js:n=this.WhiteSpace();continue;case el:this.scanner.next();continue;case nl:e=this.Function(al,this.scope.AtrulePrelude);break;case tl:e=this.Identifier();break;case il:e=this.Parentheses(ol,this.scope.AtrulePrelude);break;default:break e}null!==n&&(t.push(n),n=null),t.push(e);}return t}var ll,cl={parse:function(){return this.createSingleNodeList(this.SelectorList())}},ul={parse:function(){return this.createSingleNodeList(this.Nth(!0))}},hl={parse:function(){return this.createSingleNodeList(this.Nth(!1))}},pl={parseContext:{default:"StyleSheet",stylesheet:"StyleSheet",atrule:"Atrule",atrulePrelude:function(e){return this.AtrulePrelude(e.atrule?String(e.atrule):null)},mediaQueryList:"MediaQueryList",mediaQuery:"MediaQuery",rule:"Rule",selectorList:"SelectorList",selector:"Selector",block:function(){return this.Block(!0)},declarationList:"DeclarationList",declaration:"Declaration",value:"Value"},scope:Us,atrule:{"font-face":{parse:{prelude:null,block:function(){return this.Block(!0)}}},import:Zs,media:{parse:{prelude:function(){return this.createSingleNodeList(this.MediaQueryList())},block:function(){return this.Block(!1)}}},page:{parse:{prelude:function(){return this.createSingleNodeList(this.SelectorList())},block:function(){return this.Block(!0)}}},supports:{parse:{prelude:function(){var e=sl.call(this);return null===this.getFirstListNode(e)&&this.error("Condition is expected"),e},block:function(){return this.Block(!1)}}}},pseudo:{dir:{parse:function(){return this.createSingleNodeList(this.Identifier())}},has:{parse:function(){return this.createSingleNodeList(this.SelectorList())}},lang:{parse:function(){return this.createSingleNodeList(this.Identifier())}},matches:cl,not:cl,"nth-child":ul,"nth-last-child":ul,"nth-last-of-type":hl,"nth-of-type":hl,slotted:{parse:function(){return this.createSingleNodeList(this.Selector())}}},node:hs},dl={node:hs},ml={version:"1.1.2"},gl=(ll=Object.freeze({__proto__:null,version:"1.1.2",default:ml}))&&ll.default||ll;var fl=Ir(function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r];}return e}(ps,pl,dl)),bl=gl.version;return fl.version=bl,fl}));
	});

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function buildMap(list, caseInsensitive) {
	    var map = Object.create(null);

	    if (!Array.isArray(list)) {
	        return null;
	    }

	    for (var i = 0; i < list.length; i++) {
	        var name = list[i];

	        if (caseInsensitive) {
	            name = name.toLowerCase();
	        }

	        map[name] = true;
	    }

	    return map;
	}

	function buildList(data) {
	    if (!data) {
	        return null;
	    }

	    var tags = buildMap(data.tags, true);
	    var ids = buildMap(data.ids);
	    var classes = buildMap(data.classes);

	    if (tags === null &&
	        ids === null &&
	        classes === null) {
	        return null;
	    }

	    return {
	        tags: tags,
	        ids: ids,
	        classes: classes
	    };
	}

	function buildIndex(data) {
	    var scopes = false;

	    if (data.scopes && Array.isArray(data.scopes)) {
	        scopes = Object.create(null);

	        for (var i = 0; i < data.scopes.length; i++) {
	            var list = data.scopes[i];

	            if (!list || !Array.isArray(list)) {
	                throw new Error('Wrong usage format');
	            }

	            for (var j = 0; j < list.length; j++) {
	                var name = list[j];

	                if (hasOwnProperty.call(scopes, name)) {
	                    throw new Error('Class can\'t be used for several scopes: ' + name);
	                }

	                scopes[name] = i + 1;
	            }
	        }
	    }

	    return {
	        whitelist: buildList(data),
	        blacklist: buildList(data.blacklist),
	        scopes: scopes
	    };
	}

	var usage = {
	    buildIndex: buildIndex
	};

	var utils = {
	    hasNoChildren: function(node) {
	        return !node || !node.children || node.children.isEmpty();
	    },
	    isNodeChildrenList: function(node, list) {
	        return node !== null && node.children === list;
	    }
	};

	var resolveKeyword = csstree_min.keyword;
	var { hasNoChildren } = utils;

	var Atrule = function cleanAtrule(node, item, list) {
	    if (node.block) {
	        // otherwise removed at-rule don't prevent @import for removal
	        if (this.stylesheet !== null) {
	            this.stylesheet.firstAtrulesAllowed = false;
	        }

	        if (hasNoChildren(node.block)) {
	            list.remove(item);
	            return;
	        }
	    }

	    switch (node.name) {
	        case 'charset':
	            if (hasNoChildren(node.prelude)) {
	                list.remove(item);
	                return;
	            }

	            // if there is any rule before @charset -> remove it
	            if (item.prev) {
	                list.remove(item);
	                return;
	            }

	            break;

	        case 'import':
	            if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
	                list.remove(item);
	                return;
	            }

	            // if there are some rules that not an @import or @charset before @import
	            // remove it
	            list.prevUntil(item.prev, function(rule) {
	                if (rule.type === 'Atrule') {
	                    if (rule.name === 'import' || rule.name === 'charset') {
	                        return;
	                    }
	                }

	                this.root.firstAtrulesAllowed = false;
	                list.remove(item);
	                return true;
	            }, this);

	            break;

	        default:
	            var name = resolveKeyword(node.name).basename;
	            if (name === 'keyframes' ||
	                name === 'media' ||
	                name === 'supports') {

	                // drop at-rule with no prelude
	                if (hasNoChildren(node.prelude) || hasNoChildren(node.block)) {
	                    list.remove(item);
	                }
	            }
	    }
	};

	var Comment = function cleanComment(data, item, list) {
	    list.remove(item);
	};

	var property = csstree_min.property;

	var Declaration = function cleanDeclartion(node, item, list) {
	    if (node.value.children && node.value.children.isEmpty()) {
	        list.remove(item);
	        return;
	    }

	    if (property(node.property).custom) {
	        if (/\S/.test(node.value.value)) {
	            node.value.value = node.value.value.trim();
	        }
	    }
	};

	var { isNodeChildrenList } = utils;

	var Raw = function cleanRaw(node, item, list) {
	    // raw in stylesheet or block children
	    if (isNodeChildrenList(this.stylesheet, list) ||
	        isNodeChildrenList(this.block, list)) {
	        list.remove(item);
	    }
	};

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var walk = csstree_min.walk;
	var { hasNoChildren: hasNoChildren$1 } = utils;

	function cleanUnused(selectorList, usageData) {
	    selectorList.children.each(function(selector, item, list) {
	        var shouldRemove = false;

	        walk(selector, function(node) {
	            // ignore nodes in nested selectors
	            if (this.selector === null || this.selector === selectorList) {
	                switch (node.type) {
	                    case 'SelectorList':
	                        // TODO: remove toLowerCase when pseudo selectors will be normalized
	                        // ignore selectors inside :not()
	                        if (this.function === null || this.function.name.toLowerCase() !== 'not') {
	                            if (cleanUnused(node, usageData)) {
	                                shouldRemove = true;
	                            }
	                        }
	                        break;

	                    case 'ClassSelector':
	                        if (usageData.whitelist !== null &&
	                            usageData.whitelist.classes !== null &&
	                            !hasOwnProperty$1.call(usageData.whitelist.classes, node.name)) {
	                            shouldRemove = true;
	                        }
	                        if (usageData.blacklist !== null &&
	                            usageData.blacklist.classes !== null &&
	                            hasOwnProperty$1.call(usageData.blacklist.classes, node.name)) {
	                            shouldRemove = true;
	                        }
	                        break;

	                    case 'IdSelector':
	                        if (usageData.whitelist !== null &&
	                            usageData.whitelist.ids !== null &&
	                            !hasOwnProperty$1.call(usageData.whitelist.ids, node.name)) {
	                            shouldRemove = true;
	                        }
	                        if (usageData.blacklist !== null &&
	                            usageData.blacklist.ids !== null &&
	                            hasOwnProperty$1.call(usageData.blacklist.ids, node.name)) {
	                            shouldRemove = true;
	                        }
	                        break;

	                    case 'TypeSelector':
	                        // TODO: remove toLowerCase when type selectors will be normalized
	                        // ignore universal selectors
	                        if (node.name.charAt(node.name.length - 1) !== '*') {
	                            if (usageData.whitelist !== null &&
	                                usageData.whitelist.tags !== null &&
	                                !hasOwnProperty$1.call(usageData.whitelist.tags, node.name.toLowerCase())) {
	                                shouldRemove = true;
	                            }
	                            if (usageData.blacklist !== null &&
	                                usageData.blacklist.tags !== null &&
	                                hasOwnProperty$1.call(usageData.blacklist.tags, node.name.toLowerCase())) {
	                                shouldRemove = true;
	                            }
	                        }
	                        break;
	                }
	            }
	        });

	        if (shouldRemove) {
	            list.remove(item);
	        }
	    });

	    return selectorList.children.isEmpty();
	}

	var Rule = function cleanRule(node, item, list, options) {
	    if (hasNoChildren$1(node.prelude) || hasNoChildren$1(node.block)) {
	        list.remove(item);
	        return;
	    }

	    var usageData = options.usage;

	    if (usageData && (usageData.whitelist !== null || usageData.blacklist !== null)) {
	        cleanUnused(node.prelude, usageData);

	        if (hasNoChildren$1(node.prelude)) {
	            list.remove(item);
	            return;
	        }
	    }
	};

	// remove useless universal selector
	var TypeSelector = function cleanTypeSelector(node, item, list) {
	    var name = item.data.name;

	    // check it's a non-namespaced universal selector
	    if (name !== '*') {
	        return;
	    }

	    // remove when universal selector before other selectors
	    var nextType = item.next && item.next.data.type;
	    if (nextType === 'IdSelector' ||
	        nextType === 'ClassSelector' ||
	        nextType === 'AttributeSelector' ||
	        nextType === 'PseudoClassSelector' ||
	        nextType === 'PseudoElementSelector') {
	        list.remove(item);
	    }
	};

	var { isNodeChildrenList: isNodeChildrenList$1 } = utils;

	function isSafeOperator(node) {
	    return node.type === 'Operator' && node.value !== '+' && node.value !== '-';
	}

	var WhiteSpace = function cleanWhitespace(node, item, list) {
	    // remove when first or last item in sequence
	    if (item.next === null || item.prev === null) {
	        list.remove(item);
	        return;
	    }

	    // white space in stylesheet or block children
	    if (isNodeChildrenList$1(this.stylesheet, list) ||
	        isNodeChildrenList$1(this.block, list)) {
	        list.remove(item);
	        return;
	    }

	    if (item.next.data.type === 'WhiteSpace') {
	        list.remove(item);
	        return;
	    }

	    if (isSafeOperator(item.prev.data) || isSafeOperator(item.next.data)) {
	        list.remove(item);
	        return;
	    }
	};

	var walk$1 = csstree_min.walk;
	var handlers = {
	    Atrule: Atrule,
	    Comment: Comment,
	    Declaration: Declaration,
	    Raw: Raw,
	    Rule: Rule,
	    TypeSelector: TypeSelector,
	    WhiteSpace: WhiteSpace
	};

	var clean = function(ast, options) {
	    walk$1(ast, {
	        leave: function(node, item, list) {
	            if (handlers.hasOwnProperty(node.type)) {
	                handlers[node.type].call(this, node, item, list, options);
	            }
	        }
	    });
	};

	var keyframes = function(node) {
	    node.block.children.each(function(rule) {
	        rule.prelude.children.each(function(simpleselector) {
	            simpleselector.children.each(function(data, item) {
	                if (data.type === 'Percentage' && data.value === '100') {
	                    item.data = {
	                        type: 'TypeSelector',
	                        loc: data.loc,
	                        name: 'to'
	                    };
	                } else if (data.type === 'TypeSelector' && data.name === 'from') {
	                    item.data = {
	                        type: 'Percentage',
	                        loc: data.loc,
	                        value: '0'
	                    };
	                }
	            });
	        });
	    });
	};

	var resolveKeyword$1 = csstree_min.keyword;


	var Atrule$1 = function(node) {
	    // compress @keyframe selectors
	    if (resolveKeyword$1(node.name).basename === 'keyframes') {
	        keyframes(node);
	    }
	};

	// Can unquote attribute detection
	// Adopted implementation of Mathias Bynens
	// https://github.com/mathiasbynens/mothereff.in/blob/master/unquoted-attributes/eff.js
	var escapesRx = /\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g;
	var blockUnquoteRx = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;

	function canUnquote(value) {
	    if (value === '' || value === '-') {
	        return;
	    }

	    // Escapes are valid, so replace them with a valid non-empty string
	    value = value.replace(escapesRx, 'a');

	    return !blockUnquoteRx.test(value);
	}

	var AttributeSelector = function(node) {
	    var attrValue = node.value;

	    if (!attrValue || attrValue.type !== 'String') {
	        return;
	    }

	    var unquotedValue = attrValue.value.replace(/^(.)(.*)\1$/, '$2');
	    if (canUnquote(unquotedValue)) {
	        node.value = {
	            type: 'Identifier',
	            loc: attrValue.loc,
	            name: unquotedValue
	        };
	    }
	};

	var font = function compressFont(node) {
	    var list = node.children;

	    list.eachRight(function(node, item) {
	        if (node.type === 'Identifier') {
	            if (node.name === 'bold') {
	                item.data = {
	                    type: 'Number',
	                    loc: node.loc,
	                    value: '700'
	                };
	            } else if (node.name === 'normal') {
	                var prev = item.prev;

	                if (prev && prev.data.type === 'Operator' && prev.data.value === '/') {
	                    this.remove(prev);
	                }

	                this.remove(item);
	            } else if (node.name === 'medium') {
	                var next = item.next;

	                if (!next || next.data.type !== 'Operator') {
	                    this.remove(item);
	                }
	            }
	        }
	    });

	    // remove redundant spaces
	    list.each(function(node, item) {
	        if (node.type === 'WhiteSpace') {
	            if (!item.prev || !item.next || item.next.data.type === 'WhiteSpace') {
	                this.remove(item);
	            }
	        }
	    });

	    if (list.isEmpty()) {
	        list.insert(list.createItem({
	            type: 'Identifier',
	            name: 'normal'
	        }));
	    }
	};

	var fontWeight = function compressFontWeight(node) {
	    var value = node.children.head.data;

	    if (value.type === 'Identifier') {
	        switch (value.name) {
	            case 'normal':
	                node.children.head.data = {
	                    type: 'Number',
	                    loc: value.loc,
	                    value: '400'
	                };
	                break;
	            case 'bold':
	                node.children.head.data = {
	                    type: 'Number',
	                    loc: value.loc,
	                    value: '700'
	                };
	                break;
	        }
	    }
	};

	var List = csstree_min.List;

	var background = function compressBackground(node) {
	    function lastType() {
	        if (buffer.length) {
	            return buffer[buffer.length - 1].type;
	        }
	    }

	    function flush() {
	        if (lastType() === 'WhiteSpace') {
	            buffer.pop();
	        }

	        if (!buffer.length) {
	            buffer.unshift(
	                {
	                    type: 'Number',
	                    loc: null,
	                    value: '0'
	                },
	                {
	                    type: 'WhiteSpace',
	                    value: ' '
	                },
	                {
	                    type: 'Number',
	                    loc: null,
	                    value: '0'
	                }
	            );
	        }

	        newValue.push.apply(newValue, buffer);

	        buffer = [];
	    }

	    var newValue = [];
	    var buffer = [];

	    node.children.each(function(node) {
	        if (node.type === 'Operator' && node.value === ',') {
	            flush();
	            newValue.push(node);
	            return;
	        }

	        // remove defaults
	        if (node.type === 'Identifier') {
	            if (node.name === 'transparent' ||
	                node.name === 'none' ||
	                node.name === 'repeat' ||
	                node.name === 'scroll') {
	                return;
	            }
	        }

	        // don't add redundant spaces
	        if (node.type === 'WhiteSpace' && (!buffer.length || lastType() === 'WhiteSpace')) {
	            return;
	        }

	        buffer.push(node);
	    });

	    flush();
	    node.children = new List().fromArray(newValue);
	};

	function removeItemAndRedundantWhiteSpace(list, item) {
	    var prev = item.prev;
	    var next = item.next;

	    if (next !== null) {
	        if (next.data.type === 'WhiteSpace' && (prev === null || prev.data.type === 'WhiteSpace')) {
	            list.remove(next);
	        }
	    } else if (prev !== null && prev.data.type === 'WhiteSpace') {
	        list.remove(prev);
	    }

	    list.remove(item);
	}

	var border = function compressBorder(node) {
	    node.children.each(function(node, item, list) {
	        if (node.type === 'Identifier' && node.name.toLowerCase() === 'none') {
	            if (list.head === list.tail) {
	                // replace `none` for zero when `none` is a single term
	                item.data = {
	                    type: 'Number',
	                    loc: node.loc,
	                    value: '0'
	                };
	            } else {
	                removeItemAndRedundantWhiteSpace(list, item);
	            }
	        }
	    });
	};

	var resolveName = csstree_min.property;
	var handlers$1 = {
	    'font': font,
	    'font-weight': fontWeight,
	    'background': background,
	    'border': border,
	    'outline': border
	};

	var Value = function compressValue(node) {
	    if (!this.declaration) {
	        return;
	    }

	    var property = resolveName(this.declaration.property);

	    if (handlers$1.hasOwnProperty(property.basename)) {
	        handlers$1[property.basename](node);
	    }
	};

	var OMIT_PLUSSIGN = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
	var KEEP_PLUSSIGN = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
	var unsafeToRemovePlusSignAfter = {
	    Dimension: true,
	    Hash: true,
	    Identifier: true,
	    Number: true,
	    Raw: true,
	    UnicodeRange: true
	};

	function packNumber(value, item) {
	    // omit plus sign only if no prev or prev is safe type
	    var regexp = item && item.prev !== null && unsafeToRemovePlusSignAfter.hasOwnProperty(item.prev.data.type)
	        ? KEEP_PLUSSIGN
	        : OMIT_PLUSSIGN;

	    // 100 -> '100'
	    // 00100 -> '100'
	    // +100 -> '100' (only when safe, e.g. omitting plus sign for 1px+1px leads to single dimension instead of two)
	    // -100 -> '-100'
	    // 0.123 -> '.123'
	    // 0.12300 -> '.123'
	    // 0.0 -> ''
	    // 0 -> ''
	    // -0 -> '-'
	    value = String(value).replace(regexp, '$1$2$3');

	    if (value === '' || value === '-') {
	        value = '0';
	    }

	    return value;
	}

	var _Number = function(node, item) {
	    node.value = packNumber(node.value, item);
	};
	var pack = packNumber;
	_Number.pack = pack;

	var packNumber$1 = _Number.pack;
	var MATH_FUNCTIONS = {
	    'calc': true,
	    'min': true,
	    'max': true,
	    'clamp': true
	};
	var LENGTH_UNIT = {
	    // absolute length units
	    'px': true,
	    'mm': true,
	    'cm': true,
	    'in': true,
	    'pt': true,
	    'pc': true,

	    // relative length units
	    'em': true,
	    'ex': true,
	    'ch': true,
	    'rem': true,

	    // viewport-percentage lengths
	    'vh': true,
	    'vw': true,
	    'vmin': true,
	    'vmax': true,
	    'vm': true
	};

	var Dimension = function compressDimension(node, item) {
	    var value = packNumber$1(node.value, item);

	    node.value = value;

	    if (value === '0' && this.declaration !== null && this.atrulePrelude === null) {
	        var unit = node.unit.toLowerCase();

	        // only length values can be compressed
	        if (!LENGTH_UNIT.hasOwnProperty(unit)) {
	            return;
	        }

	        // issue #362: shouldn't remove unit in -ms-flex since it breaks flex in IE10/11
	        // issue #200: shouldn't remove unit in flex since it breaks flex in IE10/11
	        if (this.declaration.property === '-ms-flex' ||
	            this.declaration.property === 'flex') {
	            return;
	        }

	        // issue #222: don't remove units inside calc
	        if (this.function && MATH_FUNCTIONS.hasOwnProperty(this.function.name)) {
	            return;
	        }

	        item.data = {
	            type: 'Number',
	            loc: node.loc,
	            value: value
	        };
	    }
	};

	var lexer = csstree_min.lexer;
	var packNumber$2 = _Number.pack;
	var blacklist = new Set([
	    // see https://github.com/jakubpawlowicz/clean-css/issues/957
	    'width',
	    'min-width',
	    'max-width',
	    'height',
	    'min-height',
	    'max-height',

	    // issue #410: Don’t remove units in flex-basis value for (-ms-)flex shorthand
	    // issue #362: shouldn't remove unit in -ms-flex since it breaks flex in IE10/11
	    // issue #200: shouldn't remove unit in flex since it breaks flex in IE10/11
	    'flex',
	    '-ms-flex'
	]);

	var Percentage = function compressPercentage(node, item) {
	    node.value = packNumber$2(node.value, item);

	    if (node.value === '0' && this.declaration && !blacklist.has(this.declaration.property)) {
	        // try to convert a number
	        item.data = {
	            type: 'Number',
	            loc: node.loc,
	            value: node.value
	        };

	        // that's ok only when new value matches on length
	        if (!lexer.matchDeclaration(this.declaration).isType(item.data, 'length')) {
	            // otherwise rollback changes
	            item.data = node;
	        }
	    }
	};

	var _String = function(node) {
	    var value = node.value;

	    // remove escaped newlines, i.e.
	    // .a { content: "foo\
	    // bar"}
	    // ->
	    // .a { content: "foobar" }
	    value = value.replace(/\\(\r\n|\r|\n|\f)/g, '');

	    node.value = value;
	};

	var UNICODE = '\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?';
	var ESCAPE = '(' + UNICODE + '|\\\\[^\\n\\r\\f0-9a-fA-F])';
	var NONPRINTABLE = '\u0000\u0008\u000b\u000e-\u001f\u007f';
	var SAFE_URL = new RegExp('^(' + ESCAPE + '|[^\"\'\\(\\)\\\\\\s' + NONPRINTABLE + '])*$', 'i');

	var Url = function(node) {
	    var value = node.value;

	    if (value.type !== 'String') {
	        return;
	    }

	    var quote = value.value[0];
	    var url = value.value.substr(1, value.value.length - 2);

	    // convert `\\` to `/`
	    url = url.replace(/\\\\/g, '/');

	    // remove quotes when safe
	    // https://www.w3.org/TR/css-syntax-3/#url-unquoted-diagram
	    if (SAFE_URL.test(url)) {
	        node.value = {
	            type: 'Raw',
	            loc: node.value.loc,
	            value: url
	        };
	    } else {
	        // use double quotes if string has no double quotes
	        // otherwise use original quotes
	        // TODO: make better quote type selection
	        node.value.value = url.indexOf('"') === -1 ? '"' + url + '"' : quote + url + quote;
	    }
	};

	var lexer$1 = csstree_min.lexer;
	var packNumber$3 = _Number.pack;

	// http://www.w3.org/TR/css3-color/#svg-color
	var NAME_TO_HEX = {
	    'aliceblue': 'f0f8ff',
	    'antiquewhite': 'faebd7',
	    'aqua': '0ff',
	    'aquamarine': '7fffd4',
	    'azure': 'f0ffff',
	    'beige': 'f5f5dc',
	    'bisque': 'ffe4c4',
	    'black': '000',
	    'blanchedalmond': 'ffebcd',
	    'blue': '00f',
	    'blueviolet': '8a2be2',
	    'brown': 'a52a2a',
	    'burlywood': 'deb887',
	    'cadetblue': '5f9ea0',
	    'chartreuse': '7fff00',
	    'chocolate': 'd2691e',
	    'coral': 'ff7f50',
	    'cornflowerblue': '6495ed',
	    'cornsilk': 'fff8dc',
	    'crimson': 'dc143c',
	    'cyan': '0ff',
	    'darkblue': '00008b',
	    'darkcyan': '008b8b',
	    'darkgoldenrod': 'b8860b',
	    'darkgray': 'a9a9a9',
	    'darkgrey': 'a9a9a9',
	    'darkgreen': '006400',
	    'darkkhaki': 'bdb76b',
	    'darkmagenta': '8b008b',
	    'darkolivegreen': '556b2f',
	    'darkorange': 'ff8c00',
	    'darkorchid': '9932cc',
	    'darkred': '8b0000',
	    'darksalmon': 'e9967a',
	    'darkseagreen': '8fbc8f',
	    'darkslateblue': '483d8b',
	    'darkslategray': '2f4f4f',
	    'darkslategrey': '2f4f4f',
	    'darkturquoise': '00ced1',
	    'darkviolet': '9400d3',
	    'deeppink': 'ff1493',
	    'deepskyblue': '00bfff',
	    'dimgray': '696969',
	    'dimgrey': '696969',
	    'dodgerblue': '1e90ff',
	    'firebrick': 'b22222',
	    'floralwhite': 'fffaf0',
	    'forestgreen': '228b22',
	    'fuchsia': 'f0f',
	    'gainsboro': 'dcdcdc',
	    'ghostwhite': 'f8f8ff',
	    'gold': 'ffd700',
	    'goldenrod': 'daa520',
	    'gray': '808080',
	    'grey': '808080',
	    'green': '008000',
	    'greenyellow': 'adff2f',
	    'honeydew': 'f0fff0',
	    'hotpink': 'ff69b4',
	    'indianred': 'cd5c5c',
	    'indigo': '4b0082',
	    'ivory': 'fffff0',
	    'khaki': 'f0e68c',
	    'lavender': 'e6e6fa',
	    'lavenderblush': 'fff0f5',
	    'lawngreen': '7cfc00',
	    'lemonchiffon': 'fffacd',
	    'lightblue': 'add8e6',
	    'lightcoral': 'f08080',
	    'lightcyan': 'e0ffff',
	    'lightgoldenrodyellow': 'fafad2',
	    'lightgray': 'd3d3d3',
	    'lightgrey': 'd3d3d3',
	    'lightgreen': '90ee90',
	    'lightpink': 'ffb6c1',
	    'lightsalmon': 'ffa07a',
	    'lightseagreen': '20b2aa',
	    'lightskyblue': '87cefa',
	    'lightslategray': '789',
	    'lightslategrey': '789',
	    'lightsteelblue': 'b0c4de',
	    'lightyellow': 'ffffe0',
	    'lime': '0f0',
	    'limegreen': '32cd32',
	    'linen': 'faf0e6',
	    'magenta': 'f0f',
	    'maroon': '800000',
	    'mediumaquamarine': '66cdaa',
	    'mediumblue': '0000cd',
	    'mediumorchid': 'ba55d3',
	    'mediumpurple': '9370db',
	    'mediumseagreen': '3cb371',
	    'mediumslateblue': '7b68ee',
	    'mediumspringgreen': '00fa9a',
	    'mediumturquoise': '48d1cc',
	    'mediumvioletred': 'c71585',
	    'midnightblue': '191970',
	    'mintcream': 'f5fffa',
	    'mistyrose': 'ffe4e1',
	    'moccasin': 'ffe4b5',
	    'navajowhite': 'ffdead',
	    'navy': '000080',
	    'oldlace': 'fdf5e6',
	    'olive': '808000',
	    'olivedrab': '6b8e23',
	    'orange': 'ffa500',
	    'orangered': 'ff4500',
	    'orchid': 'da70d6',
	    'palegoldenrod': 'eee8aa',
	    'palegreen': '98fb98',
	    'paleturquoise': 'afeeee',
	    'palevioletred': 'db7093',
	    'papayawhip': 'ffefd5',
	    'peachpuff': 'ffdab9',
	    'peru': 'cd853f',
	    'pink': 'ffc0cb',
	    'plum': 'dda0dd',
	    'powderblue': 'b0e0e6',
	    'purple': '800080',
	    'rebeccapurple': '639',
	    'red': 'f00',
	    'rosybrown': 'bc8f8f',
	    'royalblue': '4169e1',
	    'saddlebrown': '8b4513',
	    'salmon': 'fa8072',
	    'sandybrown': 'f4a460',
	    'seagreen': '2e8b57',
	    'seashell': 'fff5ee',
	    'sienna': 'a0522d',
	    'silver': 'c0c0c0',
	    'skyblue': '87ceeb',
	    'slateblue': '6a5acd',
	    'slategray': '708090',
	    'slategrey': '708090',
	    'snow': 'fffafa',
	    'springgreen': '00ff7f',
	    'steelblue': '4682b4',
	    'tan': 'd2b48c',
	    'teal': '008080',
	    'thistle': 'd8bfd8',
	    'tomato': 'ff6347',
	    'turquoise': '40e0d0',
	    'violet': 'ee82ee',
	    'wheat': 'f5deb3',
	    'white': 'fff',
	    'whitesmoke': 'f5f5f5',
	    'yellow': 'ff0',
	    'yellowgreen': '9acd32'
	};

	var HEX_TO_NAME = {
	    '800000': 'maroon',
	    '800080': 'purple',
	    '808000': 'olive',
	    '808080': 'gray',
	    '00ffff': 'cyan',
	    'f0ffff': 'azure',
	    'f5f5dc': 'beige',
	    'ffe4c4': 'bisque',
	    '000000': 'black',
	    '0000ff': 'blue',
	    'a52a2a': 'brown',
	    'ff7f50': 'coral',
	    'ffd700': 'gold',
	    '008000': 'green',
	    '4b0082': 'indigo',
	    'fffff0': 'ivory',
	    'f0e68c': 'khaki',
	    '00ff00': 'lime',
	    'faf0e6': 'linen',
	    '000080': 'navy',
	    'ffa500': 'orange',
	    'da70d6': 'orchid',
	    'cd853f': 'peru',
	    'ffc0cb': 'pink',
	    'dda0dd': 'plum',
	    'f00': 'red',
	    'ff0000': 'red',
	    'fa8072': 'salmon',
	    'a0522d': 'sienna',
	    'c0c0c0': 'silver',
	    'fffafa': 'snow',
	    'd2b48c': 'tan',
	    '008080': 'teal',
	    'ff6347': 'tomato',
	    'ee82ee': 'violet',
	    'f5deb3': 'wheat',
	    'ffffff': 'white',
	    'ffff00': 'yellow'
	};

	function hueToRgb(p, q, t) {
	    if (t < 0) {
	        t += 1;
	    }
	    if (t > 1) {
	        t -= 1;
	    }
	    if (t < 1 / 6) {
	        return p + (q - p) * 6 * t;
	    }
	    if (t < 1 / 2) {
	        return q;
	    }
	    if (t < 2 / 3) {
	        return p + (q - p) * (2 / 3 - t) * 6;
	    }
	    return p;
	}

	function hslToRgb(h, s, l, a) {
	    var r;
	    var g;
	    var b;

	    if (s === 0) {
	        r = g = b = l; // achromatic
	    } else {
	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;

	        r = hueToRgb(p, q, h + 1 / 3);
	        g = hueToRgb(p, q, h);
	        b = hueToRgb(p, q, h - 1 / 3);
	    }

	    return [
	        Math.round(r * 255),
	        Math.round(g * 255),
	        Math.round(b * 255),
	        a
	    ];
	}

	function toHex(value) {
	    value = value.toString(16);
	    return value.length === 1 ? '0' + value : value;
	}

	function parseFunctionArgs(functionArgs, count, rgb) {
	    var cursor = functionArgs.head;
	    var args = [];
	    var wasValue = false;

	    while (cursor !== null) {
	        var node = cursor.data;
	        var type = node.type;

	        switch (type) {
	            case 'Number':
	            case 'Percentage':
	                if (wasValue) {
	                    return;
	                }

	                wasValue = true;
	                args.push({
	                    type: type,
	                    value: Number(node.value)
	                });
	                break;

	            case 'Operator':
	                if (node.value === ',') {
	                    if (!wasValue) {
	                        return;
	                    }
	                    wasValue = false;
	                } else if (wasValue || node.value !== '+') {
	                    return;
	                }
	                break;

	            default:
	                // something we couldn't understand
	                return;
	        }

	        cursor = cursor.next;
	    }

	    if (args.length !== count) {
	        // invalid arguments count
	        // TODO: remove those tokens
	        return;
	    }

	    if (args.length === 4) {
	        if (args[3].type !== 'Number') {
	            // 4th argument should be a number
	            // TODO: remove those tokens
	            return;
	        }

	        args[3].type = 'Alpha';
	    }

	    if (rgb) {
	        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
	            // invalid color, numbers and percentage shouldn't be mixed
	            // TODO: remove those tokens
	            return;
	        }
	    } else {
	        if (args[0].type !== 'Number' ||
	            args[1].type !== 'Percentage' ||
	            args[2].type !== 'Percentage') {
	            // invalid color, for hsl values should be: number, percentage, percentage
	            // TODO: remove those tokens
	            return;
	        }

	        args[0].type = 'Angle';
	    }

	    return args.map(function(arg) {
	        var value = Math.max(0, arg.value);

	        switch (arg.type) {
	            case 'Number':
	                // fit value to [0..255] range
	                value = Math.min(value, 255);
	                break;

	            case 'Percentage':
	                // convert 0..100% to value in [0..255] range
	                value = Math.min(value, 100) / 100;

	                if (!rgb) {
	                    return value;
	                }

	                value = 255 * value;
	                break;

	            case 'Angle':
	                // fit value to (-360..360) range
	                return (((value % 360) + 360) % 360) / 360;

	            case 'Alpha':
	                // fit value to [0..1] range
	                return Math.min(value, 1);
	        }

	        return Math.round(value);
	    });
	}

	function compressFunction(node, item, list) {
	    var functionName = node.name;
	    var args;

	    if (functionName === 'rgba' || functionName === 'hsla') {
	        args = parseFunctionArgs(node.children, 4, functionName === 'rgba');

	        if (!args) {
	            // something went wrong
	            return;
	        }

	        if (functionName === 'hsla') {
	            args = hslToRgb.apply(null, args);
	            node.name = 'rgba';
	        }

	        if (args[3] === 0) {
	            // try to replace `rgba(x, x, x, 0)` to `transparent`
	            // always replace `rgba(0, 0, 0, 0)` to `transparent`
	            // otherwise avoid replacement in gradients since it may break color transition
	            // http://stackoverflow.com/questions/11829410/css3-gradient-rendering-issues-from-transparent-to-white
	            var scopeFunctionName = this.function && this.function.name;
	            if ((args[0] === 0 && args[1] === 0 && args[2] === 0) ||
	                !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {

	                item.data = {
	                    type: 'Identifier',
	                    loc: node.loc,
	                    name: 'transparent'
	                };

	                return;
	            }
	        }

	        if (args[3] !== 1) {
	            // replace argument values for normalized/interpolated
	            node.children.each(function(node, item, list) {
	                if (node.type === 'Operator') {
	                    if (node.value !== ',') {
	                        list.remove(item);
	                    }
	                    return;
	                }

	                item.data = {
	                    type: 'Number',
	                    loc: node.loc,
	                    value: packNumber$3(args.shift(), null)
	                };
	            });

	            return;
	        }

	        // otherwise convert to rgb, i.e. rgba(255, 0, 0, 1) -> rgb(255, 0, 0)
	        functionName = 'rgb';
	    }

	    if (functionName === 'hsl') {
	        args = args || parseFunctionArgs(node.children, 3, false);

	        if (!args) {
	            // something went wrong
	            return;
	        }

	        // convert to rgb
	        args = hslToRgb.apply(null, args);
	        functionName = 'rgb';
	    }

	    if (functionName === 'rgb') {
	        args = args || parseFunctionArgs(node.children, 3, true);

	        if (!args) {
	            // something went wrong
	            return;
	        }

	        // check if color is not at the end and not followed by space
	        var next = item.next;
	        if (next && next.data.type !== 'WhiteSpace') {
	            list.insert(list.createItem({
	                type: 'WhiteSpace',
	                value: ' '
	            }), next);
	        }

	        item.data = {
	            type: 'Hash',
	            loc: node.loc,
	            value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
	        };

	        compressHex(item.data, item);
	    }
	}

	function compressIdent(node, item) {
	    if (this.declaration === null) {
	        return;
	    }

	    var color = node.name.toLowerCase();

	    if (NAME_TO_HEX.hasOwnProperty(color) &&
	        lexer$1.matchDeclaration(this.declaration).isType(node, 'color')) {
	        var hex = NAME_TO_HEX[color];

	        if (hex.length + 1 <= color.length) {
	            // replace for shorter hex value
	            item.data = {
	                type: 'Hash',
	                loc: node.loc,
	                value: hex
	            };
	        } else {
	            // special case for consistent colors
	            if (color === 'grey') {
	                color = 'gray';
	            }

	            // just replace value for lower cased name
	            node.name = color;
	        }
	    }
	}

	function compressHex(node, item) {
	    var color = node.value.toLowerCase();

	    // #112233 -> #123
	    if (color.length === 6 &&
	        color[0] === color[1] &&
	        color[2] === color[3] &&
	        color[4] === color[5]) {
	        color = color[0] + color[2] + color[4];
	    }

	    if (HEX_TO_NAME[color]) {
	        item.data = {
	            type: 'Identifier',
	            loc: node.loc,
	            name: HEX_TO_NAME[color]
	        };
	    } else {
	        node.value = color;
	    }
	}

	var color = {
	    compressFunction: compressFunction,
	    compressIdent: compressIdent,
	    compressHex: compressHex
	};

	var walk$2 = csstree_min.walk;
	var handlers$2 = {
	    Atrule: Atrule$1,
	    AttributeSelector: AttributeSelector,
	    Value: Value,
	    Dimension: Dimension,
	    Percentage: Percentage,
	    Number: _Number,
	    String: _String,
	    Url: Url,
	    Hash: color.compressHex,
	    Identifier: color.compressIdent,
	    Function: color.compressFunction
	};

	var replace = function(ast) {
	    walk$2(ast, {
	        leave: function(node, item, list) {
	            if (handlers$2.hasOwnProperty(node.type)) {
	                handlers$2[node.type].call(this, node, item, list);
	            }
	        }
	    });
	};

	var generate = csstree_min.generate;

	function Index() {
	    this.seed = 0;
	    this.map = Object.create(null);
	}

	Index.prototype.resolve = function(str) {
	    var index = this.map[str];

	    if (!index) {
	        index = ++this.seed;
	        this.map[str] = index;
	    }

	    return index;
	};

	var createDeclarationIndexer = function createDeclarationIndexer() {
	    var ids = new Index();

	    return function markDeclaration(node) {
	        var id = generate(node);

	        node.id = ids.resolve(id);
	        node.length = id.length;
	        node.fingerprint = null;

	        return node;
	    };
	};

	var specificity = function specificity(simpleSelector) {
	    var A = 0;
	    var B = 0;
	    var C = 0;

	    simpleSelector.children.each(function walk(node) {
	        switch (node.type) {
	            case 'SelectorList':
	            case 'Selector':
	                node.children.each(walk);
	                break;

	            case 'IdSelector':
	                A++;
	                break;

	            case 'ClassSelector':
	            case 'AttributeSelector':
	                B++;
	                break;

	            case 'PseudoClassSelector':
	                switch (node.name.toLowerCase()) {
	                    case 'not':
	                        node.children.each(walk);
	                        break;

	                    case 'before':
	                    case 'after':
	                    case 'first-line':
	                    case 'first-letter':
	                        C++;
	                        break;

	                    // TODO: support for :nth-*(.. of <SelectorList>), :matches(), :has()
	                    default:
	                        B++;
	                }
	                break;

	            case 'PseudoElementSelector':
	                C++;
	                break;

	            case 'TypeSelector':
	                // ignore universal selector
	                if (node.name.charAt(node.name.length - 1) !== '*') {
	                    C++;
	                }
	                break;

	        }
	    });

	    return [A, B, C];
	};

	var generate$1 = csstree_min.generate;


	var nonFreezePseudoElements = {
	    'first-letter': true,
	    'first-line': true,
	    'after': true,
	    'before': true
	};
	var nonFreezePseudoClasses = {
	    'link': true,
	    'visited': true,
	    'hover': true,
	    'active': true,
	    'first-letter': true,
	    'first-line': true,
	    'after': true,
	    'before': true
	};

	var processSelector = function freeze(node, usageData) {
	    var pseudos = Object.create(null);
	    var hasPseudo = false;

	    node.prelude.children.each(function(simpleSelector) {
	        var tagName = '*';
	        var scope = 0;

	        simpleSelector.children.each(function(node) {
	            switch (node.type) {
	                case 'ClassSelector':
	                    if (usageData && usageData.scopes) {
	                        var classScope = usageData.scopes[node.name] || 0;

	                        if (scope !== 0 && classScope !== scope) {
	                            throw new Error('Selector can\'t has classes from different scopes: ' + generate$1(simpleSelector));
	                        }

	                        scope = classScope;
	                    }
	                    break;

	                case 'PseudoClassSelector':
	                    var name = node.name.toLowerCase();

	                    if (!nonFreezePseudoClasses.hasOwnProperty(name)) {
	                        pseudos[':' + name] = true;
	                        hasPseudo = true;
	                    }
	                    break;

	                case 'PseudoElementSelector':
	                    var name = node.name.toLowerCase();

	                    if (!nonFreezePseudoElements.hasOwnProperty(name)) {
	                        pseudos['::' + name] = true;
	                        hasPseudo = true;
	                    }
	                    break;

	                case 'TypeSelector':
	                    tagName = node.name.toLowerCase();
	                    break;

	                case 'AttributeSelector':
	                    if (node.flags) {
	                        pseudos['[' + node.flags.toLowerCase() + ']'] = true;
	                        hasPseudo = true;
	                    }
	                    break;

	                case 'WhiteSpace':
	                case 'Combinator':
	                    tagName = '*';
	                    break;
	            }
	        });

	        simpleSelector.compareMarker = specificity(simpleSelector).toString();
	        simpleSelector.id = null; // pre-init property to avoid multiple hidden class
	        simpleSelector.id = generate$1(simpleSelector);

	        if (scope) {
	            simpleSelector.compareMarker += ':' + scope;
	        }

	        if (tagName !== '*') {
	            simpleSelector.compareMarker += ',' + tagName;
	        }
	    });

	    // add property to all rule nodes to avoid multiple hidden class
	    node.pseudoSignature = hasPseudo && Object.keys(pseudos).sort().join(',');
	};

	var resolveKeyword$2 = csstree_min.keyword;
	var walk$3 = csstree_min.walk;
	var generate$2 = csstree_min.generate;



	var prepare = function prepare(ast, options) {
	    var markDeclaration = createDeclarationIndexer();

	    walk$3(ast, {
	        visit: 'Rule',
	        enter: function processRule(node) {
	            node.block.children.each(markDeclaration);
	            processSelector(node, options.usage);
	        }
	    });

	    walk$3(ast, {
	        visit: 'Atrule',
	        enter: function(node) {
	            if (node.prelude) {
	                node.prelude.id = null; // pre-init property to avoid multiple hidden class for generate
	                node.prelude.id = generate$2(node.prelude);
	            }

	            // compare keyframe selectors by its values
	            // NOTE: still no clarification about problems with keyframes selector grouping (issue #197)
	            if (resolveKeyword$2(node.name).basename === 'keyframes') {
	                node.block.avoidRulesMerge = true;  /* probably we don't need to prevent those merges for @keyframes
	                                                       TODO: need to be checked */
	                node.block.children.each(function(rule) {
	                    rule.prelude.children.each(function(simpleselector) {
	                        simpleselector.compareMarker = simpleselector.id;
	                    });
	                });
	            }
	        }
	    });

	    return {
	        declaration: markDeclaration
	    };
	};

	var List$1 = csstree_min.List;
	var resolveKeyword$3 = csstree_min.keyword;
	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	var walk$4 = csstree_min.walk;

	function addRuleToMap(map, item, list, single) {
	    var node = item.data;
	    var name = resolveKeyword$3(node.name).basename;
	    var id = node.name.toLowerCase() + '/' + (node.prelude ? node.prelude.id : null);

	    if (!hasOwnProperty$2.call(map, name)) {
	        map[name] = Object.create(null);
	    }

	    if (single) {
	        delete map[name][id];
	    }

	    if (!hasOwnProperty$2.call(map[name], id)) {
	        map[name][id] = new List$1();
	    }

	    map[name][id].append(list.remove(item));
	}

	function relocateAtrules(ast, options) {
	    var collected = Object.create(null);
	    var topInjectPoint = null;

	    ast.children.each(function(node, item, list) {
	        if (node.type === 'Atrule') {
	            var name = resolveKeyword$3(node.name).basename;

	            switch (name) {
	                case 'keyframes':
	                    addRuleToMap(collected, item, list, true);
	                    return;

	                case 'media':
	                    if (options.forceMediaMerge) {
	                        addRuleToMap(collected, item, list, false);
	                        return;
	                    }
	                    break;
	            }

	            if (topInjectPoint === null &&
	                name !== 'charset' &&
	                name !== 'import') {
	                topInjectPoint = item;
	            }
	        } else {
	            if (topInjectPoint === null) {
	                topInjectPoint = item;
	            }
	        }
	    });

	    for (var atrule in collected) {
	        for (var id in collected[atrule]) {
	            ast.children.insertList(
	                collected[atrule][id],
	                atrule === 'media' ? null : topInjectPoint
	            );
	        }
	    }
	}
	function isMediaRule(node) {
	    return node.type === 'Atrule' && node.name === 'media';
	}

	function processAtrule(node, item, list) {
	    if (!isMediaRule(node)) {
	        return;
	    }

	    var prev = item.prev && item.prev.data;

	    if (!prev || !isMediaRule(prev)) {
	        return;
	    }

	    // merge @media with same query
	    if (node.prelude &&
	        prev.prelude &&
	        node.prelude.id === prev.prelude.id) {
	        prev.block.children.appendList(node.block.children);
	        list.remove(item);

	        // TODO: use it when we can refer to several points in source
	        // prev.loc = {
	        //     primary: prev.loc,
	        //     merged: node.loc
	        // };
	    }
	}

	var _1MergeAtrule = function rejoinAtrule(ast, options) {
	    relocateAtrules(ast, options);

	    walk$4(ast, {
	        visit: 'Atrule',
	        reverse: true,
	        enter: processAtrule
	    });
	};

	var hasOwnProperty$3 = Object.prototype.hasOwnProperty;

	function isEqualSelectors(a, b) {
	    var cursor1 = a.head;
	    var cursor2 = b.head;

	    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
	        cursor1 = cursor1.next;
	        cursor2 = cursor2.next;
	    }

	    return cursor1 === null && cursor2 === null;
	}

	function isEqualDeclarations(a, b) {
	    var cursor1 = a.head;
	    var cursor2 = b.head;

	    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
	        cursor1 = cursor1.next;
	        cursor2 = cursor2.next;
	    }

	    return cursor1 === null && cursor2 === null;
	}

	function compareDeclarations(declarations1, declarations2) {
	    var result = {
	        eq: [],
	        ne1: [],
	        ne2: [],
	        ne2overrided: []
	    };

	    var fingerprints = Object.create(null);
	    var declarations2hash = Object.create(null);

	    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
	        declarations2hash[cursor.data.id] = true;
	    }

	    for (var cursor = declarations1.head; cursor; cursor = cursor.next)  {
	        var data = cursor.data;

	        if (data.fingerprint) {
	            fingerprints[data.fingerprint] = data.important;
	        }

	        if (declarations2hash[data.id]) {
	            declarations2hash[data.id] = false;
	            result.eq.push(data);
	        } else {
	            result.ne1.push(data);
	        }
	    }

	    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
	        var data = cursor.data;

	        if (declarations2hash[data.id]) {
	            // when declarations1 has an overriding declaration, this is not a difference
	            // unless no !important is used on prev and !important is used on the following
	            if (!hasOwnProperty$3.call(fingerprints, data.fingerprint) ||
	                (!fingerprints[data.fingerprint] && data.important)) {
	                result.ne2.push(data);
	            }

	            result.ne2overrided.push(data);
	        }
	    }

	    return result;
	}

	function addSelectors(dest, source) {
	    source.each(function(sourceData) {
	        var newStr = sourceData.id;
	        var cursor = dest.head;

	        while (cursor) {
	            var nextStr = cursor.data.id;

	            if (nextStr === newStr) {
	                return;
	            }

	            if (nextStr > newStr) {
	                break;
	            }

	            cursor = cursor.next;
	        }

	        dest.insert(dest.createItem(sourceData), cursor);
	    });

	    return dest;
	}

	// check if simpleselectors has no equal specificity and element selector
	function hasSimilarSelectors(selectors1, selectors2) {
	    var cursor1 = selectors1.head;

	    while (cursor1 !== null) {
	        var cursor2 = selectors2.head;

	        while (cursor2 !== null) {
	            if (cursor1.data.compareMarker === cursor2.data.compareMarker) {
	                return true;
	            }

	            cursor2 = cursor2.next;
	        }

	        cursor1 = cursor1.next;
	    }

	    return false;
	}

	// test node can't to be skipped
	function unsafeToSkipNode(node) {
	    switch (node.type) {
	        case 'Rule':
	            // unsafe skip ruleset with selector similarities
	            return hasSimilarSelectors(node.prelude.children, this);

	        case 'Atrule':
	            // can skip at-rules with blocks
	            if (node.block) {
	                // unsafe skip at-rule if block contains something unsafe to skip
	                return node.block.children.some(unsafeToSkipNode, this);
	            }
	            break;

	        case 'Declaration':
	            return false;
	    }

	    // unsafe by default
	    return true;
	}

	var utils$1 = {
	    isEqualSelectors: isEqualSelectors,
	    isEqualDeclarations: isEqualDeclarations,
	    compareDeclarations: compareDeclarations,
	    addSelectors: addSelectors,
	    hasSimilarSelectors: hasSimilarSelectors,
	    unsafeToSkipNode: unsafeToSkipNode
	};

	var walk$5 = csstree_min.walk;


	function processRule(node, item, list) {
	    var selectors = node.prelude.children;
	    var declarations = node.block.children;

	    list.prevUntil(item.prev, function(prev) {
	        // skip non-ruleset node if safe
	        if (prev.type !== 'Rule') {
	            return utils$1.unsafeToSkipNode.call(selectors, prev);
	        }

	        var prevSelectors = prev.prelude.children;
	        var prevDeclarations = prev.block.children;

	        // try to join rulesets with equal pseudo signature
	        if (node.pseudoSignature === prev.pseudoSignature) {
	            // try to join by selectors
	            if (utils$1.isEqualSelectors(prevSelectors, selectors)) {
	                prevDeclarations.appendList(declarations);
	                list.remove(item);
	                return true;
	            }

	            // try to join by declarations
	            if (utils$1.isEqualDeclarations(declarations, prevDeclarations)) {
	                utils$1.addSelectors(prevSelectors, selectors);
	                list.remove(item);
	                return true;
	            }
	        }

	        // go to prev ruleset if has no selector similarities
	        return utils$1.hasSimilarSelectors(selectors, prevSelectors);
	    });
	}

	// NOTE: direction should be left to right, since rulesets merge to left
	// ruleset. When direction right to left unmerged rulesets may prevent lookup
	// TODO: remove initial merge
	var _2InitialMergeRuleset = function initialMergeRule(ast) {
	    walk$5(ast, {
	        visit: 'Rule',
	        enter: processRule
	    });
	};

	var List$2 = csstree_min.List;
	var walk$6 = csstree_min.walk;

	function processRule$1(node, item, list) {
	    var selectors = node.prelude.children;

	    // generate new rule sets:
	    // .a, .b { color: red; }
	    // ->
	    // .a { color: red; }
	    // .b { color: red; }

	    // while there are more than 1 simple selector split for rulesets
	    while (selectors.head !== selectors.tail) {
	        var newSelectors = new List$2();
	        newSelectors.insert(selectors.remove(selectors.head));

	        list.insert(list.createItem({
	            type: 'Rule',
	            loc: node.loc,
	            prelude: {
	                type: 'SelectorList',
	                loc: node.prelude.loc,
	                children: newSelectors
	            },
	            block: {
	                type: 'Block',
	                loc: node.block.loc,
	                children: node.block.children.copy()
	            },
	            pseudoSignature: node.pseudoSignature
	        }), item);
	    }
	}

	var _3DisjoinRuleset = function disjoinRule(ast) {
	    walk$6(ast, {
	        visit: 'Rule',
	        reverse: true,
	        enter: processRule$1
	    });
	};

	var List$3 = csstree_min.List;
	var generate$3 = csstree_min.generate;
	var walk$7 = csstree_min.walk;

	var REPLACE = 1;
	var REMOVE = 2;
	var TOP = 0;
	var RIGHT = 1;
	var BOTTOM = 2;
	var LEFT = 3;
	var SIDES = ['top', 'right', 'bottom', 'left'];
	var SIDE = {
	    'margin-top': 'top',
	    'margin-right': 'right',
	    'margin-bottom': 'bottom',
	    'margin-left': 'left',

	    'padding-top': 'top',
	    'padding-right': 'right',
	    'padding-bottom': 'bottom',
	    'padding-left': 'left',

	    'border-top-color': 'top',
	    'border-right-color': 'right',
	    'border-bottom-color': 'bottom',
	    'border-left-color': 'left',
	    'border-top-width': 'top',
	    'border-right-width': 'right',
	    'border-bottom-width': 'bottom',
	    'border-left-width': 'left',
	    'border-top-style': 'top',
	    'border-right-style': 'right',
	    'border-bottom-style': 'bottom',
	    'border-left-style': 'left'
	};
	var MAIN_PROPERTY = {
	    'margin': 'margin',
	    'margin-top': 'margin',
	    'margin-right': 'margin',
	    'margin-bottom': 'margin',
	    'margin-left': 'margin',

	    'padding': 'padding',
	    'padding-top': 'padding',
	    'padding-right': 'padding',
	    'padding-bottom': 'padding',
	    'padding-left': 'padding',

	    'border-color': 'border-color',
	    'border-top-color': 'border-color',
	    'border-right-color': 'border-color',
	    'border-bottom-color': 'border-color',
	    'border-left-color': 'border-color',
	    'border-width': 'border-width',
	    'border-top-width': 'border-width',
	    'border-right-width': 'border-width',
	    'border-bottom-width': 'border-width',
	    'border-left-width': 'border-width',
	    'border-style': 'border-style',
	    'border-top-style': 'border-style',
	    'border-right-style': 'border-style',
	    'border-bottom-style': 'border-style',
	    'border-left-style': 'border-style'
	};

	function TRBL(name) {
	    this.name = name;
	    this.loc = null;
	    this.iehack = undefined;
	    this.sides = {
	        'top': null,
	        'right': null,
	        'bottom': null,
	        'left': null
	    };
	}

	TRBL.prototype.getValueSequence = function(declaration, count) {
	    var values = [];
	    var iehack = '';
	    var hasBadValues = declaration.value.type !== 'Value' || declaration.value.children.some(function(child) {
	        var special = false;

	        switch (child.type) {
	            case 'Identifier':
	                switch (child.name) {
	                    case '\\0':
	                    case '\\9':
	                        iehack = child.name;
	                        return;

	                    case 'inherit':
	                    case 'initial':
	                    case 'unset':
	                    case 'revert':
	                        special = child.name;
	                        break;
	                }
	                break;

	            case 'Dimension':
	                switch (child.unit) {
	                    // is not supported until IE11
	                    case 'rem':

	                    // v* units is too buggy across browsers and better
	                    // don't merge values with those units
	                    case 'vw':
	                    case 'vh':
	                    case 'vmin':
	                    case 'vmax':
	                    case 'vm': // IE9 supporting "vm" instead of "vmin".
	                        special = child.unit;
	                        break;
	                }
	                break;

	            case 'Hash': // color
	            case 'Number':
	            case 'Percentage':
	                break;

	            case 'Function':
	                if (child.name === 'var') {
	                    return true;
	                }

	                special = child.name;
	                break;

	            case 'WhiteSpace':
	                return false; // ignore space

	            default:
	                return true;  // bad value
	        }

	        values.push({
	            node: child,
	            special: special,
	            important: declaration.important
	        });
	    });

	    if (hasBadValues || values.length > count) {
	        return false;
	    }

	    if (typeof this.iehack === 'string' && this.iehack !== iehack) {
	        return false;
	    }

	    this.iehack = iehack; // move outside

	    return values;
	};

	TRBL.prototype.canOverride = function(side, value) {
	    var currentValue = this.sides[side];

	    return !currentValue || (value.important && !currentValue.important);
	};

	TRBL.prototype.add = function(name, declaration) {
	    function attemptToAdd() {
	        var sides = this.sides;
	        var side = SIDE[name];

	        if (side) {
	            if (side in sides === false) {
	                return false;
	            }

	            var values = this.getValueSequence(declaration, 1);

	            if (!values || !values.length) {
	                return false;
	            }

	            // can mix only if specials are equal
	            for (var key in sides) {
	                if (sides[key] !== null && sides[key].special !== values[0].special) {
	                    return false;
	                }
	            }

	            if (!this.canOverride(side, values[0])) {
	                return true;
	            }

	            sides[side] = values[0];
	            return true;
	        } else if (name === this.name) {
	            var values = this.getValueSequence(declaration, 4);

	            if (!values || !values.length) {
	                return false;
	            }

	            switch (values.length) {
	                case 1:
	                    values[RIGHT] = values[TOP];
	                    values[BOTTOM] = values[TOP];
	                    values[LEFT] = values[TOP];
	                    break;

	                case 2:
	                    values[BOTTOM] = values[TOP];
	                    values[LEFT] = values[RIGHT];
	                    break;

	                case 3:
	                    values[LEFT] = values[RIGHT];
	                    break;
	            }

	            // can mix only if specials are equal
	            for (var i = 0; i < 4; i++) {
	                for (var key in sides) {
	                    if (sides[key] !== null && sides[key].special !== values[i].special) {
	                        return false;
	                    }
	                }
	            }

	            for (var i = 0; i < 4; i++) {
	                if (this.canOverride(SIDES[i], values[i])) {
	                    sides[SIDES[i]] = values[i];
	                }
	            }

	            return true;
	        }
	    }

	    if (!attemptToAdd.call(this)) {
	        return false;
	    }

	    // TODO: use it when we can refer to several points in source
	    // if (this.loc) {
	    //     this.loc = {
	    //         primary: this.loc,
	    //         merged: declaration.loc
	    //     };
	    // } else {
	    //     this.loc = declaration.loc;
	    // }
	    if (!this.loc) {
	        this.loc = declaration.loc;
	    }

	    return true;
	};

	TRBL.prototype.isOkToMinimize = function() {
	    var top = this.sides.top;
	    var right = this.sides.right;
	    var bottom = this.sides.bottom;
	    var left = this.sides.left;

	    if (top && right && bottom && left) {
	        var important =
	            top.important +
	            right.important +
	            bottom.important +
	            left.important;

	        return important === 0 || important === 4;
	    }

	    return false;
	};

	TRBL.prototype.getValue = function() {
	    var result = new List$3();
	    var sides = this.sides;
	    var values = [
	        sides.top,
	        sides.right,
	        sides.bottom,
	        sides.left
	    ];
	    var stringValues = [
	        generate$3(sides.top.node),
	        generate$3(sides.right.node),
	        generate$3(sides.bottom.node),
	        generate$3(sides.left.node)
	    ];

	    if (stringValues[LEFT] === stringValues[RIGHT]) {
	        values.pop();
	        if (stringValues[BOTTOM] === stringValues[TOP]) {
	            values.pop();
	            if (stringValues[RIGHT] === stringValues[TOP]) {
	                values.pop();
	            }
	        }
	    }

	    for (var i = 0; i < values.length; i++) {
	        if (i) {
	            result.appendData({ type: 'WhiteSpace', value: ' ' });
	        }

	        result.appendData(values[i].node);
	    }

	    if (this.iehack) {
	        result.appendData({ type: 'WhiteSpace', value: ' ' });
	        result.appendData({
	            type: 'Identifier',
	            loc: null,
	            name: this.iehack
	        });
	    }

	    return {
	        type: 'Value',
	        loc: null,
	        children: result
	    };
	};

	TRBL.prototype.getDeclaration = function() {
	    return {
	        type: 'Declaration',
	        loc: this.loc,
	        important: this.sides.top.important,
	        property: this.name,
	        value: this.getValue()
	    };
	};

	function processRule$2(rule, shorts, shortDeclarations, lastShortSelector) {
	    var declarations = rule.block.children;
	    var selector = rule.prelude.children.first().id;

	    rule.block.children.eachRight(function(declaration, item) {
	        var property = declaration.property;

	        if (!MAIN_PROPERTY.hasOwnProperty(property)) {
	            return;
	        }

	        var key = MAIN_PROPERTY[property];
	        var shorthand;
	        var operation;

	        if (!lastShortSelector || selector === lastShortSelector) {
	            if (key in shorts) {
	                operation = REMOVE;
	                shorthand = shorts[key];
	            }
	        }

	        if (!shorthand || !shorthand.add(property, declaration)) {
	            operation = REPLACE;
	            shorthand = new TRBL(key);

	            // if can't parse value ignore it and break shorthand children
	            if (!shorthand.add(property, declaration)) {
	                lastShortSelector = null;
	                return;
	            }
	        }

	        shorts[key] = shorthand;
	        shortDeclarations.push({
	            operation: operation,
	            block: declarations,
	            item: item,
	            shorthand: shorthand
	        });

	        lastShortSelector = selector;
	    });

	    return lastShortSelector;
	}

	function processShorthands(shortDeclarations, markDeclaration) {
	    shortDeclarations.forEach(function(item) {
	        var shorthand = item.shorthand;

	        if (!shorthand.isOkToMinimize()) {
	            return;
	        }

	        if (item.operation === REPLACE) {
	            item.item.data = markDeclaration(shorthand.getDeclaration());
	        } else {
	            item.block.remove(item.item);
	        }
	    });
	}

	var _4RestructShorthand = function restructBlock(ast, indexer) {
	    var stylesheetMap = {};
	    var shortDeclarations = [];

	    walk$7(ast, {
	        visit: 'Rule',
	        reverse: true,
	        enter: function(node) {
	            var stylesheet = this.block || this.stylesheet;
	            var ruleId = (node.pseudoSignature || '') + '|' + node.prelude.children.first().id;
	            var ruleMap;
	            var shorts;

	            if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
	                ruleMap = {
	                    lastShortSelector: null
	                };
	                stylesheetMap[stylesheet.id] = ruleMap;
	            } else {
	                ruleMap = stylesheetMap[stylesheet.id];
	            }

	            if (ruleMap.hasOwnProperty(ruleId)) {
	                shorts = ruleMap[ruleId];
	            } else {
	                shorts = {};
	                ruleMap[ruleId] = shorts;
	            }

	            ruleMap.lastShortSelector = processRule$2.call(this, node, shorts, shortDeclarations, ruleMap.lastShortSelector);
	        }
	    });

	    processShorthands(shortDeclarations, indexer.declaration);
	};

	var resolveProperty = csstree_min.property;
	var resolveKeyword$4 = csstree_min.keyword;
	var walk$8 = csstree_min.walk;
	var generate$4 = csstree_min.generate;
	var fingerprintId = 1;
	var dontRestructure = {
	    'src': 1 // https://github.com/afelix/csso/issues/50
	};

	var DONT_MIX_VALUE = {
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility
	    'display': /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
	    // https://developer.mozilla.org/en/docs/Web/CSS/text-align
	    'text-align': /^(start|end|match-parent|justify-all)$/i
	};

	var SAFE_VALUES = {
	    cursor: [
	        'auto', 'crosshair', 'default', 'move', 'text', 'wait', 'help',
	        'n-resize', 'e-resize', 's-resize', 'w-resize',
	        'ne-resize', 'nw-resize', 'se-resize', 'sw-resize',
	        'pointer', 'progress', 'not-allowed', 'no-drop', 'vertical-text', 'all-scroll',
	        'col-resize', 'row-resize'
	    ],
	    overflow: [
	        'hidden', 'visible', 'scroll', 'auto'
	    ],
	    position: [
	        'static', 'relative', 'absolute', 'fixed'
	    ]
	};

	var NEEDLESS_TABLE = {
	    'border-width': ['border'],
	    'border-style': ['border'],
	    'border-color': ['border'],
	    'border-top': ['border'],
	    'border-right': ['border'],
	    'border-bottom': ['border'],
	    'border-left': ['border'],
	    'border-top-width': ['border-top', 'border-width', 'border'],
	    'border-right-width': ['border-right', 'border-width', 'border'],
	    'border-bottom-width': ['border-bottom', 'border-width', 'border'],
	    'border-left-width': ['border-left', 'border-width', 'border'],
	    'border-top-style': ['border-top', 'border-style', 'border'],
	    'border-right-style': ['border-right', 'border-style', 'border'],
	    'border-bottom-style': ['border-bottom', 'border-style', 'border'],
	    'border-left-style': ['border-left', 'border-style', 'border'],
	    'border-top-color': ['border-top', 'border-color', 'border'],
	    'border-right-color': ['border-right', 'border-color', 'border'],
	    'border-bottom-color': ['border-bottom', 'border-color', 'border'],
	    'border-left-color': ['border-left', 'border-color', 'border'],
	    'margin-top': ['margin'],
	    'margin-right': ['margin'],
	    'margin-bottom': ['margin'],
	    'margin-left': ['margin'],
	    'padding-top': ['padding'],
	    'padding-right': ['padding'],
	    'padding-bottom': ['padding'],
	    'padding-left': ['padding'],
	    'font-style': ['font'],
	    'font-variant': ['font'],
	    'font-weight': ['font'],
	    'font-size': ['font'],
	    'font-family': ['font'],
	    'list-style-type': ['list-style'],
	    'list-style-position': ['list-style'],
	    'list-style-image': ['list-style']
	};

	function getPropertyFingerprint(propertyName, declaration, fingerprints) {
	    var realName = resolveProperty(propertyName).basename;

	    if (realName === 'background') {
	        return propertyName + ':' + generate$4(declaration.value);
	    }

	    var declarationId = declaration.id;
	    var fingerprint = fingerprints[declarationId];

	    if (!fingerprint) {
	        switch (declaration.value.type) {
	            case 'Value':
	                var vendorId = '';
	                var iehack = '';
	                var special = {};
	                var raw = false;

	                declaration.value.children.each(function walk(node) {
	                    switch (node.type) {
	                        case 'Value':
	                        case 'Brackets':
	                        case 'Parentheses':
	                            node.children.each(walk);
	                            break;

	                        case 'Raw':
	                            raw = true;
	                            break;

	                        case 'Identifier':
	                            var name = node.name;

	                            if (!vendorId) {
	                                vendorId = resolveKeyword$4(name).vendor;
	                            }

	                            if (/\\[09]/.test(name)) {
	                                iehack = RegExp.lastMatch;
	                            }

	                            if (SAFE_VALUES.hasOwnProperty(realName)) {
	                                if (SAFE_VALUES[realName].indexOf(name) === -1) {
	                                    special[name] = true;
	                                }
	                            } else if (DONT_MIX_VALUE.hasOwnProperty(realName)) {
	                                if (DONT_MIX_VALUE[realName].test(name)) {
	                                    special[name] = true;
	                                }
	                            }

	                            break;

	                        case 'Function':
	                            var name = node.name;

	                            if (!vendorId) {
	                                vendorId = resolveKeyword$4(name).vendor;
	                            }

	                            if (name === 'rect') {
	                                // there are 2 forms of rect:
	                                //   rect(<top>, <right>, <bottom>, <left>) - standart
	                                //   rect(<top> <right> <bottom> <left>) – backwards compatible syntax
	                                // only the same form values can be merged
	                                var hasComma = node.children.some(function(node) {
	                                    return node.type === 'Operator' && node.value === ',';
	                                });
	                                if (!hasComma) {
	                                    name = 'rect-backward';
	                                }
	                            }

	                            special[name + '()'] = true;

	                            // check nested tokens too
	                            node.children.each(walk);

	                            break;

	                        case 'Dimension':
	                            var unit = node.unit;

	                            if (/\\[09]/.test(unit)) {
	                                iehack = RegExp.lastMatch;
	                            }

	                            switch (unit) {
	                                // is not supported until IE11
	                                case 'rem':

	                                // v* units is too buggy across browsers and better
	                                // don't merge values with those units
	                                case 'vw':
	                                case 'vh':
	                                case 'vmin':
	                                case 'vmax':
	                                case 'vm': // IE9 supporting "vm" instead of "vmin".
	                                    special[unit] = true;
	                                    break;
	                            }
	                            break;
	                    }
	                });

	                fingerprint = raw
	                    ? '!' + fingerprintId++
	                    : '!' + Object.keys(special).sort() + '|' + iehack + vendorId;
	                break;

	            case 'Raw':
	                fingerprint = '!' + declaration.value.value;
	                break;

	            default:
	                fingerprint = generate$4(declaration.value);
	        }

	        fingerprints[declarationId] = fingerprint;
	    }

	    return propertyName + fingerprint;
	}

	function needless(props, declaration, fingerprints) {
	    var property = resolveProperty(declaration.property);

	    if (NEEDLESS_TABLE.hasOwnProperty(property.basename)) {
	        var table = NEEDLESS_TABLE[property.basename];

	        for (var i = 0; i < table.length; i++) {
	            var ppre = getPropertyFingerprint(property.prefix + table[i], declaration, fingerprints);
	            var prev = props.hasOwnProperty(ppre) ? props[ppre] : null;

	            if (prev && (!declaration.important || prev.item.data.important)) {
	                return prev;
	            }
	        }
	    }
	}

	function processRule$3(rule, item, list, props, fingerprints) {
	    var declarations = rule.block.children;

	    declarations.eachRight(function(declaration, declarationItem) {
	        var property = declaration.property;
	        var fingerprint = getPropertyFingerprint(property, declaration, fingerprints);
	        var prev = props[fingerprint];

	        if (prev && !dontRestructure.hasOwnProperty(property)) {
	            if (declaration.important && !prev.item.data.important) {
	                props[fingerprint] = {
	                    block: declarations,
	                    item: declarationItem
	                };

	                prev.block.remove(prev.item);

	                // TODO: use it when we can refer to several points in source
	                // declaration.loc = {
	                //     primary: declaration.loc,
	                //     merged: prev.item.data.loc
	                // };
	            } else {
	                declarations.remove(declarationItem);

	                // TODO: use it when we can refer to several points in source
	                // prev.item.data.loc = {
	                //     primary: prev.item.data.loc,
	                //     merged: declaration.loc
	                // };
	            }
	        } else {
	            var prev = needless(props, declaration, fingerprints);

	            if (prev) {
	                declarations.remove(declarationItem);

	                // TODO: use it when we can refer to several points in source
	                // prev.item.data.loc = {
	                //     primary: prev.item.data.loc,
	                //     merged: declaration.loc
	                // };
	            } else {
	                declaration.fingerprint = fingerprint;

	                props[fingerprint] = {
	                    block: declarations,
	                    item: declarationItem
	                };
	            }
	        }
	    });

	    if (declarations.isEmpty()) {
	        list.remove(item);
	    }
	}

	var _6RestructBlock = function restructBlock(ast) {
	    var stylesheetMap = {};
	    var fingerprints = Object.create(null);

	    walk$8(ast, {
	        visit: 'Rule',
	        reverse: true,
	        enter: function(node, item, list) {
	            var stylesheet = this.block || this.stylesheet;
	            var ruleId = (node.pseudoSignature || '') + '|' + node.prelude.children.first().id;
	            var ruleMap;
	            var props;

	            if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
	                ruleMap = {};
	                stylesheetMap[stylesheet.id] = ruleMap;
	            } else {
	                ruleMap = stylesheetMap[stylesheet.id];
	            }

	            if (ruleMap.hasOwnProperty(ruleId)) {
	                props = ruleMap[ruleId];
	            } else {
	                props = {};
	                ruleMap[ruleId] = props;
	            }

	            processRule$3.call(this, node, item, list, props, fingerprints);
	        }
	    });
	};

	var walk$9 = csstree_min.walk;


	/*
	    At this step all rules has single simple selector. We try to join by equal
	    declaration blocks to first rule, e.g.

	    .a { color: red }
	    b { ... }
	    .b { color: red }
	    ->
	    .a, .b { color: red }
	    b { ... }
	*/

	function processRule$4(node, item, list) {
	    var selectors = node.prelude.children;
	    var declarations = node.block.children;
	    var nodeCompareMarker = selectors.first().compareMarker;
	    var skippedCompareMarkers = {};

	    list.nextUntil(item.next, function(next, nextItem) {
	        // skip non-ruleset node if safe
	        if (next.type !== 'Rule') {
	            return utils$1.unsafeToSkipNode.call(selectors, next);
	        }

	        if (node.pseudoSignature !== next.pseudoSignature) {
	            return true;
	        }

	        var nextFirstSelector = next.prelude.children.head;
	        var nextDeclarations = next.block.children;
	        var nextCompareMarker = nextFirstSelector.data.compareMarker;

	        // if next ruleset has same marked as one of skipped then stop joining
	        if (nextCompareMarker in skippedCompareMarkers) {
	            return true;
	        }

	        // try to join by selectors
	        if (selectors.head === selectors.tail) {
	            if (selectors.first().id === nextFirstSelector.data.id) {
	                declarations.appendList(nextDeclarations);
	                list.remove(nextItem);
	                return;
	            }
	        }

	        // try to join by properties
	        if (utils$1.isEqualDeclarations(declarations, nextDeclarations)) {
	            var nextStr = nextFirstSelector.data.id;

	            selectors.some(function(data, item) {
	                var curStr = data.id;

	                if (nextStr < curStr) {
	                    selectors.insert(nextFirstSelector, item);
	                    return true;
	                }

	                if (!item.next) {
	                    selectors.insert(nextFirstSelector);
	                    return true;
	                }
	            });

	            list.remove(nextItem);
	            return;
	        }

	        // go to next ruleset if current one can be skipped (has no equal specificity nor element selector)
	        if (nextCompareMarker === nodeCompareMarker) {
	            return true;
	        }

	        skippedCompareMarkers[nextCompareMarker] = true;
	    });
	}

	var _7MergeRuleset = function mergeRule(ast) {
	    walk$9(ast, {
	        visit: 'Rule',
	        enter: processRule$4
	    });
	};

	var List$4 = csstree_min.List;
	var walk$a = csstree_min.walk;


	function calcSelectorLength(list) {
	    var length = 0;

	    list.each(function(data) {
	        length += data.id.length + 1;
	    });

	    return length - 1;
	}

	function calcDeclarationsLength(tokens) {
	    var length = 0;

	    for (var i = 0; i < tokens.length; i++) {
	        length += tokens[i].length;
	    }

	    return (
	        length +          // declarations
	        tokens.length - 1 // delimeters
	    );
	}

	function processRule$5(node, item, list) {
	    var avoidRulesMerge = this.block !== null ? this.block.avoidRulesMerge : false;
	    var selectors = node.prelude.children;
	    var block = node.block;
	    var disallowDownMarkers = Object.create(null);
	    var allowMergeUp = true;
	    var allowMergeDown = true;

	    list.prevUntil(item.prev, function(prev, prevItem) {
	        var prevBlock = prev.block;
	        var prevType = prev.type;

	        if (prevType !== 'Rule') {
	            var unsafe = utils$1.unsafeToSkipNode.call(selectors, prev);

	            if (!unsafe && prevType === 'Atrule' && prevBlock) {
	                walk$a(prevBlock, {
	                    visit: 'Rule',
	                    enter: function(node) {
	                        node.prelude.children.each(function(data) {
	                            disallowDownMarkers[data.compareMarker] = true;
	                        });
	                    }
	                });
	            }

	            return unsafe;
	        }

	        var prevSelectors = prev.prelude.children;

	        if (node.pseudoSignature !== prev.pseudoSignature) {
	            return true;
	        }

	        allowMergeDown = !prevSelectors.some(function(selector) {
	            return selector.compareMarker in disallowDownMarkers;
	        });

	        // try prev ruleset if simpleselectors has no equal specifity and element selector
	        if (!allowMergeDown && !allowMergeUp) {
	            return true;
	        }

	        // try to join by selectors
	        if (allowMergeUp && utils$1.isEqualSelectors(prevSelectors, selectors)) {
	            prevBlock.children.appendList(block.children);
	            list.remove(item);
	            return true;
	        }

	        // try to join by properties
	        var diff = utils$1.compareDeclarations(block.children, prevBlock.children);

	        // console.log(diff.eq, diff.ne1, diff.ne2);

	        if (diff.eq.length) {
	            if (!diff.ne1.length && !diff.ne2.length) {
	                // equal blocks
	                if (allowMergeDown) {
	                    utils$1.addSelectors(selectors, prevSelectors);
	                    list.remove(prevItem);
	                }

	                return true;
	            } else if (!avoidRulesMerge) { /* probably we don't need to prevent those merges for @keyframes
	                                              TODO: need to be checked */

	                if (diff.ne1.length && !diff.ne2.length) {
	                    // prevBlock is subset block
	                    var selectorLength = calcSelectorLength(selectors);
	                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

	                    if (allowMergeUp && selectorLength < blockLength) {
	                        utils$1.addSelectors(prevSelectors, selectors);
	                        block.children = new List$4().fromArray(diff.ne1);
	                    }
	                } else if (!diff.ne1.length && diff.ne2.length) {
	                    // node is subset of prevBlock
	                    var selectorLength = calcSelectorLength(prevSelectors);
	                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

	                    if (allowMergeDown && selectorLength < blockLength) {
	                        utils$1.addSelectors(selectors, prevSelectors);
	                        prevBlock.children = new List$4().fromArray(diff.ne2);
	                    }
	                } else {
	                    // diff.ne1.length && diff.ne2.length
	                    // extract equal block
	                    var newSelector = {
	                        type: 'SelectorList',
	                        loc: null,
	                        children: utils$1.addSelectors(prevSelectors.copy(), selectors)
	                    };
	                    var newBlockLength = calcSelectorLength(newSelector.children) + 2; // selectors length + curly braces length
	                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

	                    // create new ruleset if declarations length greater than
	                    // ruleset description overhead
	                    if (blockLength >= newBlockLength) {
	                        var newItem = list.createItem({
	                            type: 'Rule',
	                            loc: null,
	                            prelude: newSelector,
	                            block: {
	                                type: 'Block',
	                                loc: null,
	                                children: new List$4().fromArray(diff.eq)
	                            },
	                            pseudoSignature: node.pseudoSignature
	                        });

	                        block.children = new List$4().fromArray(diff.ne1);
	                        prevBlock.children = new List$4().fromArray(diff.ne2overrided);

	                        if (allowMergeUp) {
	                            list.insert(newItem, prevItem);
	                        } else {
	                            list.insert(newItem, item);
	                        }

	                        return true;
	                    }
	                }
	            }
	        }

	        if (allowMergeUp) {
	            // TODO: disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
	            // await property families to find property interception correctly
	            allowMergeUp = !prevSelectors.some(function(prevSelector) {
	                return selectors.some(function(selector) {
	                    return selector.compareMarker === prevSelector.compareMarker;
	                });
	            });
	        }

	        prevSelectors.each(function(data) {
	            disallowDownMarkers[data.compareMarker] = true;
	        });
	    });
	}

	var _8RestructRuleset = function restructRule(ast) {
	    walk$a(ast, {
	        visit: 'Rule',
	        reverse: true,
	        enter: processRule$5
	    });
	};

	var restructure = function(ast, options) {
	    // prepare ast for restructing
	    var indexer = prepare(ast, options);
	    options.logger('prepare', ast);

	    _1MergeAtrule(ast, options);
	    options.logger('mergeAtrule', ast);

	    _2InitialMergeRuleset(ast);
	    options.logger('initialMergeRuleset', ast);

	    _3DisjoinRuleset(ast);
	    options.logger('disjoinRuleset', ast);

	    _4RestructShorthand(ast, indexer);
	    options.logger('restructShorthand', ast);

	    _6RestructBlock(ast);
	    options.logger('restructBlock', ast);

	    _7MergeRuleset(ast);
	    options.logger('mergeRuleset', ast);

	    _8RestructRuleset(ast);
	    options.logger('restructRuleset', ast);
	};

	var List$5 = csstree_min.List;
	var clone = csstree_min.clone;




	var walk$b = csstree_min.walk;

	function readChunk(children, specialComments) {
	    var buffer = new List$5();
	    var nonSpaceTokenInBuffer = false;
	    var protectedComment;

	    children.nextUntil(children.head, function(node, item, list) {
	        if (node.type === 'Comment') {
	            if (!specialComments || node.value.charAt(0) !== '!') {
	                list.remove(item);
	                return;
	            }

	            if (nonSpaceTokenInBuffer || protectedComment) {
	                return true;
	            }

	            list.remove(item);
	            protectedComment = node;
	            return;
	        }

	        if (node.type !== 'WhiteSpace') {
	            nonSpaceTokenInBuffer = true;
	        }

	        buffer.insert(list.remove(item));
	    });

	    return {
	        comment: protectedComment,
	        stylesheet: {
	            type: 'StyleSheet',
	            loc: null,
	            children: buffer
	        }
	    };
	}

	function compressChunk(ast, firstAtrulesAllowed, num, options) {
	    options.logger('Compress block #' + num, null, true);

	    var seed = 1;

	    if (ast.type === 'StyleSheet') {
	        ast.firstAtrulesAllowed = firstAtrulesAllowed;
	        ast.id = seed++;
	    }

	    walk$b(ast, {
	        visit: 'Atrule',
	        enter: function markScopes(node) {
	            if (node.block !== null) {
	                node.block.id = seed++;
	            }
	        }
	    });
	    options.logger('init', ast);

	    // remove redundant
	    clean(ast, options);
	    options.logger('clean', ast);

	    // replace nodes for shortened forms
	    replace(ast);
	    options.logger('replace', ast);

	    // structure optimisations
	    if (options.restructuring) {
	        restructure(ast, options);
	    }

	    return ast;
	}

	function getCommentsOption(options) {
	    var comments = 'comments' in options ? options.comments : 'exclamation';

	    if (typeof comments === 'boolean') {
	        comments = comments ? 'exclamation' : false;
	    } else if (comments !== 'exclamation' && comments !== 'first-exclamation') {
	        comments = false;
	    }

	    return comments;
	}

	function getRestructureOption(options) {
	    if ('restructure' in options) {
	        return options.restructure;
	    }

	    return 'restructuring' in options ? options.restructuring : true;
	}

	function wrapBlock(block) {
	    return new List$5().appendData({
	        type: 'Rule',
	        loc: null,
	        prelude: {
	            type: 'SelectorList',
	            loc: null,
	            children: new List$5().appendData({
	                type: 'Selector',
	                loc: null,
	                children: new List$5().appendData({
	                    type: 'TypeSelector',
	                    loc: null,
	                    name: 'x'
	                })
	            })
	        },
	        block: block
	    });
	}

	var compress = function compress(ast, options) {
	    ast = ast || { type: 'StyleSheet', loc: null, children: new List$5() };
	    options = options || {};

	    var compressOptions = {
	        logger: typeof options.logger === 'function' ? options.logger : function() {},
	        restructuring: getRestructureOption(options),
	        forceMediaMerge: Boolean(options.forceMediaMerge),
	        usage: options.usage ? usage.buildIndex(options.usage) : false
	    };
	    var specialComments = getCommentsOption(options);
	    var firstAtrulesAllowed = true;
	    var input;
	    var output = new List$5();
	    var chunk;
	    var chunkNum = 1;
	    var chunkChildren;

	    if (options.clone) {
	        ast = clone(ast);
	    }

	    if (ast.type === 'StyleSheet') {
	        input = ast.children;
	        ast.children = output;
	    } else {
	        input = wrapBlock(ast);
	    }

	    do {
	        chunk = readChunk(input, Boolean(specialComments));
	        compressChunk(chunk.stylesheet, firstAtrulesAllowed, chunkNum++, compressOptions);
	        chunkChildren = chunk.stylesheet.children;

	        if (chunk.comment) {
	            // add \n before comment if there is another content in output
	            if (!output.isEmpty()) {
	                output.insert(List$5.createItem({
	                    type: 'Raw',
	                    value: '\n'
	                }));
	            }

	            output.insert(List$5.createItem(chunk.comment));

	            // add \n after comment if chunk is not empty
	            if (!chunkChildren.isEmpty()) {
	                output.insert(List$5.createItem({
	                    type: 'Raw',
	                    value: '\n'
	                }));
	            }
	        }

	        if (firstAtrulesAllowed && !chunkChildren.isEmpty()) {
	            var lastRule = chunkChildren.last();

	            if (lastRule.type !== 'Atrule' ||
	               (lastRule.name !== 'import' && lastRule.name !== 'charset')) {
	                firstAtrulesAllowed = false;
	            }
	        }

	        if (specialComments !== 'exclamation') {
	            specialComments = false;
	        }

	        output.appendList(chunkChildren);
	    } while (!input.isEmpty());

	    return {
	        ast: ast
	    };
	};

	var version = "4.2.0";
	var _package = {
		version: version
	};

	var _package$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		version: version,
		'default': _package
	});

	var require$$0 = getCjsExportFromNamespace(_package$1);

	var parse = csstree_min.parse;

	var generate$5 = csstree_min.generate;

	function debugOutput(name, options, startTime, data) {
	    if (options.debug) {
	        console.error('## ' + name + ' done in %d ms\n', Date.now() - startTime);
	    }

	    return data;
	}

	function createDefaultLogger(level) {
	    var lastDebug;

	    return function logger(title, ast) {
	        var line = title;

	        if (ast) {
	            line = '[' + ((Date.now() - lastDebug) / 1000).toFixed(3) + 's] ' + line;
	        }

	        if (level > 1 && ast) {
	            var css = generate$5(ast);

	            // when level 2, limit css to 256 symbols
	            if (level === 2 && css.length > 256) {
	                css = css.substr(0, 256) + '...';
	            }

	            line += '\n  ' + css + '\n';
	        }

	        console.error(line);
	        lastDebug = Date.now();
	    };
	}

	function copy(obj) {
	    var result = {};

	    for (var key in obj) {
	        result[key] = obj[key];
	    }

	    return result;
	}

	function buildCompressOptions(options) {
	    options = copy(options);

	    if (typeof options.logger !== 'function' && options.debug) {
	        options.logger = createDefaultLogger(options.debug);
	    }

	    return options;
	}

	function runHandler(ast, options, handlers) {
	    if (!Array.isArray(handlers)) {
	        handlers = [handlers];
	    }

	    handlers.forEach(function(fn) {
	        fn(ast, options);
	    });
	}

	function minify(context, source, options) {
	    options = options || {};

	    var filename = options.filename || '<unknown>';
	    var result;

	    // parse
	    var ast = debugOutput('parsing', options, Date.now(),
	        parse(source, {
	            context: context,
	            filename: filename,
	            positions: Boolean(options.sourceMap)
	        })
	    );

	    // before compress handlers
	    if (options.beforeCompress) {
	        debugOutput('beforeCompress', options, Date.now(),
	            runHandler(ast, options, options.beforeCompress)
	        );
	    }

	    // compress
	    var compressResult = debugOutput('compress', options, Date.now(),
	        compress(ast, buildCompressOptions(options))
	    );

	    // after compress handlers
	    if (options.afterCompress) {
	        debugOutput('afterCompress', options, Date.now(),
	            runHandler(compressResult, options, options.afterCompress)
	        );
	    }

	    // generate
	    if (options.sourceMap) {
	        result = debugOutput('generate(sourceMap: true)', options, Date.now(), (function() {
	            var tmp = generate$5(compressResult.ast, { sourceMap: true });
	            tmp.map._file = filename; // since other tools can relay on file in source map transform chain
	            tmp.map.setSourceContent(filename, source);
	            return tmp;
	        }()));
	    } else {
	        result = debugOutput('generate', options, Date.now(), {
	            css: generate$5(compressResult.ast),
	            map: null
	        });
	    }

	    return result;
	}

	function minifyStylesheet(source, options) {
	    return minify('stylesheet', source, options);
	}

	function minifyBlock(source, options) {
	    return minify('declarationList', source, options);
	}

	var lib = {
	    version: require$$0.version,

	    // main methods
	    minify: minifyStylesheet,
	    minifyBlock: minifyBlock,

	    // css syntax parser/walkers/generator/etc
	    syntax: Object.assign({
	        compress: compress
	    }, csstree_min)
	};
	var lib_1 = lib.version;
	var lib_2 = lib.minify;
	var lib_3 = lib.minifyBlock;
	var lib_4 = lib.syntax;

	exports.default = lib;
	exports.minify = lib_2;
	exports.minifyBlock = lib_3;
	exports.syntax = lib_4;
	exports.version = lib_1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

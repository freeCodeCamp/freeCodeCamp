module.exports = (function(){function _waka(parser, startRule) {
  if(startRule && ! parser.rules[startRule])
    throw new Error('start rule missing: ' + JSON.stringify(startRule))

  return {
    getState: function() {
      return parser.state
    },

    getTrace: function(message) {
      return (message ? message + '\n' : '') + parser.state.traceLine()
    },

    exec: function(input) {
      if(! startRule)
        throw new Error('no start rule given')

      parser.state.setInput(input)

      try {
        var value = parser.rules[startRule]()
      }
      catch(err) {
        var error = err
      }

      if(error == null) {
        if(! parser.state.adv || ! parser.state.isEOF())
          var error = new Error('Unexpected syntax in top')
      }

      return {
        success: error == null,
        value: ! error ? value : undefined,
        error: error
      }
    },

    startWith: function(rule) {
      return _waka(parser, rule)
    },
  }
};
return _waka((function(){'use strict';
var _rules={};
_rules.NameStartChar = function() {
var _R=_P.match(":");
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("A"<=$0&&$0<="Z");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("_");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("a"<=$1&&$1<="z");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00C0"<=$2&&$2<="\u00D6");
}
}
if(!_P.adv){ _P.adv=true;
var $3=_P.cur();
if($3==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00D8"<=$3&&$3<="\u00F6");
}
}
if(!_P.adv){ _P.adv=true;
var $4=_P.cur();
if($4==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00F8"<=$4&&$4<="\u02FF");
}
}
if(!_P.adv){ _P.adv=true;
var $5=_P.cur();
if($5==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u0370"<=$5&&$5<="\u037D");
}
}
if(!_P.adv){ _P.adv=true;
var $6=_P.cur();
if($6==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u037F"<=$6&&$6<="\u1FFF");
}
}
if(!_P.adv){ _P.adv=true;
var $7=_P.cur();
if($7==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u200C"<=$7&&$7<="\u200D");
}
}
if(!_P.adv){ _P.adv=true;
var $8=_P.cur();
if($8==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u2070"<=$8&&$8<="\u218F");
}
}
if(!_P.adv){ _P.adv=true;
var $9=_P.cur();
if($9==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u2C00"<=$9&&$9<="\u2FEF");
}
}
if(!_P.adv){ _P.adv=true;
var $a=_P.cur();
if($a==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u3001"<=$a&&$a<="\uD7FF");
}
}
if(!_P.adv){ _P.adv=true;
var $b=_P.cur();
if($b==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\uF900"<=$b&&$b<="\uFDCF");
}
}
if(!_P.adv){ _P.adv=true;
var $c=_P.cur();
if($c==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\uFDF0"<=$c&&$c<="\uFFFD");
}
}
if(!_P.adv){ _P.adv=true;
$d:{var $e=_P.pos;
var $f=_P.cur();
if($f==null){_P.adv=false;
null;
}else{
_P.step("\uD800"<=$f&&$f<="\uDB7F");
}
if(!_P.adv) break $d;
var $g=_P.cur();
if($g==null){_P.adv=false;
null;
}else{
_P.step("\uDC00"<=$g&&$g<="\uDFFF");
}
var _R=_P.doc.substring($e,_P.pos);
}
if(!_P.adv) _P.pos=$e;
}
return _R;
}
_rules.NameChar = function() {
var _R=_rules.NameStartChar();
if(!_P.adv){ _P.adv=true;
var _R=_P.match("-");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match(".");
}
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("0"<=$0&&$0<="9");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("\u00B7");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u0300"<=$1&&$1<="\u036F");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u203F"<=$2&&$2<="\u2040");
}
}
return _R;
}
_rules.Name = function() {
$0:{var $1=_P.pos;
_rules.NameStartChar();
if(!_P.adv) break $0;
var $2=false;
for(;;) {
_rules.NameChar();
if(!_P.adv) break;
$2=true;
}; _P.adv=true;
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
}
_rules.QName = function() {
var _R=_rules.PrefixedName();
if(!_P.adv){ _P.adv=true;
var _R=_rules.UnprefixedName();
}
return _R;
}
_rules.PrefixedName = function() {
$0:{var $1=_P.pos;
_rules.Prefix();
if(!_P.adv) break $0;
_P.match(":");
if(!_P.adv) break $0;
_rules.LocalPart();
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
}
_rules.UnprefixedName = function() {
var _R=_rules.LocalPart();
return _R;
}
_rules.Prefix = function() {
var _R=_rules.NCName();
return _R;
}
_rules.LocalPart = function() {
var _R=_rules.NCName();
return _R;
}
_rules.NCNameStartChar = function() {
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("A"<=$0&&$0<="Z");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("_");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("a"<=$1&&$1<="z");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00C0"<=$2&&$2<="\u00D6");
}
}
if(!_P.adv){ _P.adv=true;
var $3=_P.cur();
if($3==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00D8"<=$3&&$3<="\u00F6");
}
}
if(!_P.adv){ _P.adv=true;
var $4=_P.cur();
if($4==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u00F8"<=$4&&$4<="\u02FF");
}
}
if(!_P.adv){ _P.adv=true;
var $5=_P.cur();
if($5==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u0370"<=$5&&$5<="\u037D");
}
}
if(!_P.adv){ _P.adv=true;
var $6=_P.cur();
if($6==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u037F"<=$6&&$6<="\u1FFF");
}
}
if(!_P.adv){ _P.adv=true;
var $7=_P.cur();
if($7==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u200C"<=$7&&$7<="\u200D");
}
}
if(!_P.adv){ _P.adv=true;
var $8=_P.cur();
if($8==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u2070"<=$8&&$8<="\u218F");
}
}
if(!_P.adv){ _P.adv=true;
var $9=_P.cur();
if($9==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u2C00"<=$9&&$9<="\u2FEF");
}
}
if(!_P.adv){ _P.adv=true;
var $a=_P.cur();
if($a==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u3001"<=$a&&$a<="\uD7FF");
}
}
if(!_P.adv){ _P.adv=true;
var $b=_P.cur();
if($b==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\uF900"<=$b&&$b<="\uFDCF");
}
}
if(!_P.adv){ _P.adv=true;
var $c=_P.cur();
if($c==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\uFDF0"<=$c&&$c<="\uFFFD");
}
}
if(!_P.adv){ _P.adv=true;
$d:{var $e=_P.pos;
var $f=_P.cur();
if($f==null){_P.adv=false;
null;
}else{
_P.step("\uD800"<=$f&&$f<="\uDB7F");
}
if(!_P.adv) break $d;
var $g=_P.cur();
if($g==null){_P.adv=false;
null;
}else{
_P.step("\uDC00"<=$g&&$g<="\uDFFF");
}
var _R=_P.doc.substring($e,_P.pos);
}
if(!_P.adv) _P.pos=$e;
}
return _R;
}
_rules.NCNameChar = function() {
var _R=_rules.NCNameStartChar();
if(!_P.adv){ _P.adv=true;
var _R=_P.match("-");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match(".");
}
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("0"<=$0&&$0<="9");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("\u00B7");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u0300"<=$1&&$1<="\u036F");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else{
var _R=_P.step("\u203F"<=$2&&$2<="\u2040");
}
}
return _R;
}
_rules.NCName = function() {
$0:{var $1=_P.pos;
_rules.NCNameStartChar();
if(!_P.adv) break $0;
var $2=false;
for(;;) {
_rules.NCNameChar();
if(!_P.adv) break;
$2=true;
}; _P.adv=true;
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
}
function ParserState() {
  this.doc = ''
  this.pos = 0
  this.adv = true

  this.setInput = function(doc) {
    this.doc = doc
    this.pos = 0
    this.adv = true
  }

  this.isEOF = function() {
    return this.pos == this.doc.length
  }

  this.cur = function() {
    return _P.doc[_P.pos]
  }

  this.match = function(str) {
    if(_P.adv = _P.doc.substr(_P.pos, str.length) == str) {
      _P.pos += str.length
      return str
    }
  }

  this.step = function(flag) {
    if(_P.adv = flag) {
      _P.pos++
      return _P.doc[_P.pos - 1]
    }
  }

  this.unexpected = function(rule) {
    throw new Error('Unexpected syntax in ' + rule)
  }

  this.traceLine = function(pos) {
    if(! pos) pos = _P.pos

    var from = _P.doc.lastIndexOf('\n', pos), to = _P.doc.indexOf('\n', pos)
    
    if(from == -1)
      from = 0
    else
      from++
    
    if(to == -1)
      to = pos.length

    var lineNo = _P.doc.substring(0, from).split('\n').length
    var line = _P.doc.substring(from, to)
    var pointer = Array(200).join(' ').substr(0, pos - from) + '^^^'

    return (
      'Line ' + lineNo + ':\n' +
      line + '\n' +
      pointer
    )
  }
}
var _P = new ParserState
return {
  state: _P,
  rules: _rules,
}
})(),null)})()
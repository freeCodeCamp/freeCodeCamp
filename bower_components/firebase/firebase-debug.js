/* Firebase v1.0.24 - License: https://www.firebase.com/terms/terms-of-service.html */ var CLOSURE_NO_DEPS = true; var scope = this; (function(){"use strict";function m(c,b){if(0===c.length||0===b.length)return c.concat(b);var a=c[c.length-1],d=Math.round(a/1099511627776)||32,e;if(32===d)e=c.concat(b);else{e=b;var a=a|0,f=c.slice(0,c.length-1),g;for(void 0===f&&(f=[]);32<=d;d-=32)f.push(a),a=0;if(0===d)e=f.concat(e);else{for(g=0;g<e.length;g++)f.push(a|e[g]>>>d),a=e[g]<<32-d;g=e.length?e[e.length-1]:0;e=Math.round(g/1099511627776)||32;f.push(n(d+e&31,32<d+e?a:f.pop(),1));e=f}}return e}
function p(c){var b=c.length;return 0===b?0:32*(b-1)+(Math.round(c[b-1]/1099511627776)||32)}function n(c,b,a){return 32===c?b:(a?b|0:b<<32-c)+1099511627776*c}function r(c){c?(this.c=c.c.slice(0),this.b=c.b.slice(0),this.a=c.a):this.reset()}
r.prototype={d:512,reset:function(){this.c=this.e.slice(0);this.b=[];this.a=0;return this},update:function(c){if("string"===typeof c){c=unescape(encodeURIComponent(c));var b=[],a,d=0;for(a=0;a<c.length;a++)d=d<<8|c.charCodeAt(a),3===(a&3)&&(b.push(d),d=0);a&3&&b.push(n(8*(a&3),d));c=b}a=this.b=m(this.b,c);b=this.a;c=this.a=b+p(c);for(b=this.d+b&-this.d;b<=c;b+=this.d)s(this,a.splice(0,16));return this},e:[1732584193,4023233417,2562383102,271733878,3285377520],f:[1518500249,1859775393,2400959708,3395469782]};
function s(c,b){var a,d,e,f,g,l,q,k=b.slice(0),h=c.c;e=h[0];f=h[1];g=h[2];l=h[3];q=h[4];for(a=0;79>=a;a++)16<=a&&(k[a]=(k[a-3]^k[a-8]^k[a-14]^k[a-16])<<1|(k[a-3]^k[a-8]^k[a-14]^k[a-16])>>>31),d=19>=a?f&g|~f&l:39>=a?f^g^l:59>=a?f&g|f&l|g&l:79>=a?f^g^l:void 0,d=(e<<5|e>>>27)+d+q+k[a]+c.f[Math.floor(a/20)]|0,q=l,l=g,g=f<<30|f>>>2,f=e,e=d;h[0]=h[0]+e|0;h[1]=h[1]+f|0;h[2]=h[2]+g|0;h[3]=h[3]+l|0;h[4]=h[4]+q|0}
function t(c){var b=(new r).update(c),a,d=b.b;c=b.c;d=m(d,[n(1,1)]);for(a=d.length+2;a&15;a++)d.push(0);d.push(Math.floor(b.a/4294967296));for(d.push(b.a|0);d.length;)s(b,d.splice(0,16));b.reset();var e,b="";a=0;var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,g=p(c);e&&(d=d.substr(0,62)+"-_");for(e=0;6*b.length<g;)b+=d.charAt((f^c[e]>>>a)>>>26),6>a?(f=c[e]<<6-a,a+=26,e++):(f<<=6,a-=6);for(;b.length&3;)b+="=";return b}var u=["sjclHashToBase64"],v=this;
u[0]in v||!v.execScript||v.execScript("var "+u[0]);for(var w;u.length&&(w=u.shift());)u.length||void 0===t?v=v[w]?v[w]:v[w]={}:v[w]=t;}).apply(scope); var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.global.CLOSURE_UNCOMPILED_DEFINES;
goog.global.CLOSURE_DEFINES;
goog.isDef = function(val) {
  return val !== void 0;
};
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0]);
  }
  for (var part;parts.length && (part = parts.shift());) {
    if (!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object;
    } else {
      if (cur[part]) {
        cur = cur[part];
      } else {
        cur = cur[part] = {};
      }
    }
  }
};
goog.define = function(name, defaultValue) {
  var value = defaultValue;
  if (!COMPILED) {
    if (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, name)) {
      value = goog.global.CLOSURE_UNCOMPILED_DEFINES[name];
    } else {
      if (goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, name)) {
        value = goog.global.CLOSURE_DEFINES[name];
      }
    }
  }
  goog.exportPath_(name, value);
};
goog.DEBUG = true;
goog.define("goog.LOCALE", "en");
goog.define("goog.TRUSTED_SITE", true);
goog.define("goog.STRICT_MODE_COMPATIBLE", false);
goog.provide = function(name) {
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }
  goog.exportPath_(name);
};
goog.setTestOnly = function(opt_message) {
  if (COMPILED && !goog.DEBUG) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + opt_message ? ": " + opt_message : ".");
  }
};
goog.forwardDeclare = function(name) {
};
if (!COMPILED) {
  goog.isProvided_ = function(name) {
    return!goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name));
  };
  goog.implicitNamespaces_ = {};
}
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for (var part;part = parts.shift();) {
    if (goog.isDefAndNotNull(cur[part])) {
      cur = cur[part];
    } else {
      return null;
    }
  }
  return cur;
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for (var x in obj) {
    global[x] = obj[x];
  }
};
goog.addDependency = function(relPath, provides, requires) {
  if (goog.DEPENDENCIES_ENABLED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for (var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      if (!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {};
      }
      deps.pathToNames[path][provide] = true;
    }
    for (var j = 0;require = requires[j];j++) {
      if (!(path in deps.requires)) {
        deps.requires[path] = {};
      }
      deps.requires[path][require] = true;
    }
  }
};
goog.define("goog.ENABLE_DEBUG_LOADER", true);
goog.require = function(name) {
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      return;
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var path = goog.getPathFromDeps_(name);
      if (path) {
        goog.included_[path] = true;
        goog.writeScripts_();
        return;
      }
    }
    var errorMessage = "goog.require could not find: " + name;
    if (goog.global.console) {
      goog.global.console["error"](errorMessage);
    }
    throw Error(errorMessage);
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.identityFunction = function(opt_returnValue, var_args) {
  return opt_returnValue;
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return ctor.instance_ = new ctor;
  };
};
goog.instantiatedSingletons_ = [];
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
if (goog.DEPENDENCIES_ENABLED) {
  goog.included_ = {};
  goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc;
  };
  goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else {
      if (!goog.inHtmlDocument_()) {
        return;
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("script");
    for (var i = scripts.length - 1;i >= 0;--i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if (src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return;
      }
    }
  };
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if (!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true;
    }
  };
  goog.writeScriptTag_ = function(src) {
    if (goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      if (doc.readyState == "complete") {
        var isDeps = /\bdeps.js$/.test(src);
        if (isDeps) {
          return false;
        } else {
          throw Error('Cannot write "' + src + '" after document load');
        }
      }
      doc.write('<script type="text/javascript" src="' + src + '"></' + "script>");
      return true;
    } else {
      return false;
    }
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if (path in deps.written) {
        return;
      }
      if (path in deps.visited) {
        if (!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path);
        }
        return;
      }
      deps.visited[path] = true;
      if (path in deps.requires) {
        for (var requireName in deps.requires[path]) {
          if (!goog.isProvided_(requireName)) {
            if (requireName in deps.nameToPath) {
              visitNode(deps.nameToPath[requireName]);
            } else {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if (!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path);
      }
    }
    for (var path in goog.included_) {
      if (!deps.written[path]) {
        visitNode(path);
      }
    }
    for (var i = 0;i < scripts.length;i++) {
      if (scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i]);
      } else {
        throw Error("Undefined script input");
      }
    }
  };
  goog.getPathFromDeps_ = function(rule) {
    if (rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule];
    } else {
      return null;
    }
  };
  goog.findBasePath_();
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js");
  }
}
goog.typeOf = function(value) {
  var s = typeof value;
  if (s == "object") {
    if (value) {
      if (value instanceof Array) {
        return "array";
      } else {
        if (value instanceof Object) {
          return s;
        }
      }
      var className = Object.prototype.toString.call((value));
      if (className == "[object Window]") {
        return "object";
      }
      if (className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return "array";
      }
      if (className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if (s == "function" && typeof value.call == "undefined") {
      return "object";
    }
  }
  return s;
};
goog.isNull = function(val) {
  return val === null;
};
goog.isDefAndNotNull = function(val) {
  return val != null;
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array";
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number";
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function";
};
goog.isString = function(val) {
  return typeof val == "string";
};
goog.isBoolean = function(val) {
  return typeof val == "boolean";
};
goog.isNumber = function(val) {
  return typeof val == "number";
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function";
};
goog.isObject = function(val) {
  var type = typeof val;
  return type == "object" && val != null || type == "function";
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(obj) {
  return!!obj[goog.UID_PROPERTY_];
};
goog.removeUid = function(obj) {
  if ("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1E9 >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.bindNative_ = function(fn, selfObj, var_args) {
  return(fn.call.apply(fn.bind, arguments));
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error;
  }
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};
goog.mixin = function(target, source) {
  for (var x in source) {
    target[x] = source[x];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return+new Date;
};
goog.globalEval = function(script) {
  if (goog.global.execScript) {
    goog.global.execScript(script, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if (typeof goog.global["_et_"] != "undefined") {
          delete goog.global["_et_"];
          goog.evalWorksForGlobals_ = true;
        } else {
          goog.evalWorksForGlobals_ = false;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(script);
      } else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("script");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for (var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join("-");
  };
  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }
  if (opt_modifier) {
    return className + "-" + rename(opt_modifier);
  } else {
    return rename(className);
  }
};
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};
goog.global.CLOSURE_CSS_NAME_MAPPING;
if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for (var key in values) {
    var value = ("" + values[key]).replace(/\$/g, "$$$$");
    str = str.replace(new RegExp("\\{\\$" + key + "\\}", "gi"), value);
  }
  return str;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo);
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor;
  childCtor.base = function(me, methodName, var_args) {
    var args = Array.prototype.slice.call(arguments, 2);
    return parentCtor.prototype[methodName].apply(me, args);
  };
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used " + "with strict mode code. See " + "http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (caller.superClass_) {
    return caller.superClass_.constructor.apply(me, Array.prototype.slice.call(arguments, 1));
  }
  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for (var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if (ctor.prototype[opt_methodName] === caller) {
      foundCaller = true;
    } else {
      if (foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args);
      }
    }
  }
  if (me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args);
  } else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global);
};
if (!COMPILED) {
  goog.global["COMPILED"] = COMPILED;
}
;goog.provide("goog.json");
goog.provide("goog.json.Replacer");
goog.provide("goog.json.Reviver");
goog.provide("goog.json.Serializer");
goog.define("goog.json.USE_NATIVE_JSON", false);
goog.json.isValid_ = function(s) {
  if (/^\s*$/.test(s)) {
    return false;
  }
  var backslashesRe = /\\["\\\/bfnrtu]/g;
  var simpleValuesRe = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var openBracketsRe = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
  var remainderRe = /^[\],:{}\s\u2028\u2029]*$/;
  return remainderRe.test(s.replace(backslashesRe, "@").replace(simpleValuesRe, "]").replace(openBracketsRe, ""));
};
goog.json.parse = goog.json.USE_NATIVE_JSON ? (goog.global["JSON"]["parse"]) : function(s) {
  var o = String(s);
  if (goog.json.isValid_(o)) {
    try {
      return(eval("(" + o + ")"));
    } catch (ex) {
    }
  }
  throw Error("Invalid JSON string: " + o);
};
goog.json.unsafeParse = goog.json.USE_NATIVE_JSON ? (goog.global["JSON"]["parse"]) : function(s) {
  return(eval("(" + s + ")"));
};
goog.json.Replacer;
goog.json.Reviver;
goog.json.serialize = goog.json.USE_NATIVE_JSON ? (goog.global["JSON"]["stringify"]) : function(object, opt_replacer) {
  return(new goog.json.Serializer(opt_replacer)).serialize(object);
};
goog.json.Serializer = function(opt_replacer) {
  this.replacer_ = opt_replacer;
};
goog.json.Serializer.prototype.serialize = function(object) {
  var sb = [];
  this.serializeInternal(object, sb);
  return sb.join("");
};
goog.json.Serializer.prototype.serializeInternal = function(object, sb) {
  switch(typeof object) {
    case "string":
      this.serializeString_((object), sb);
      break;
    case "number":
      this.serializeNumber_((object), sb);
      break;
    case "boolean":
      sb.push(object);
      break;
    case "undefined":
      sb.push("null");
      break;
    case "object":
      if (object == null) {
        sb.push("null");
        break;
      }
      if (goog.isArray(object)) {
        this.serializeArray((object), sb);
        break;
      }
      this.serializeObject_((object), sb);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof object);;
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function(s, sb) {
  sb.push('"', s.replace(goog.json.Serializer.charsToReplace_, function(c) {
    if (c in goog.json.Serializer.charToJsonCharCache_) {
      return goog.json.Serializer.charToJsonCharCache_[c];
    }
    var cc = c.charCodeAt(0);
    var rv = "\\u";
    if (cc < 16) {
      rv += "000";
    } else {
      if (cc < 256) {
        rv += "00";
      } else {
        if (cc < 4096) {
          rv += "0";
        }
      }
    }
    return goog.json.Serializer.charToJsonCharCache_[c] = rv + cc.toString(16);
  }), '"');
};
goog.json.Serializer.prototype.serializeNumber_ = function(n, sb) {
  sb.push(isFinite(n) && !isNaN(n) ? n : "null");
};
goog.json.Serializer.prototype.serializeArray = function(arr, sb) {
  var l = arr.length;
  sb.push("[");
  var sep = "";
  for (var i = 0;i < l;i++) {
    sb.push(sep);
    var value = arr[i];
    this.serializeInternal(this.replacer_ ? this.replacer_.call(arr, String(i), value) : value, sb);
    sep = ",";
  }
  sb.push("]");
};
goog.json.Serializer.prototype.serializeObject_ = function(obj, sb) {
  sb.push("{");
  var sep = "";
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var value = obj[key];
      if (typeof value != "function") {
        sb.push(sep);
        this.serializeString_(key, sb);
        sb.push(":");
        this.serializeInternal(this.replacer_ ? this.replacer_.call(obj, key, value) : value, sb);
        sep = ",";
      }
    }
  }
  sb.push("}");
};
goog.provide("fb.util.json");
goog.require("goog.json");
fb.util.json.eval = function(str) {
  if (typeof JSON !== "undefined" && goog.isDef(JSON.parse)) {
    return JSON.parse(str);
  } else {
    return goog.json.parse(str);
  }
};
fb.util.json.stringify = function(data) {
  if (typeof JSON !== "undefined" && goog.isDef(JSON.stringify)) {
    return JSON.stringify(data);
  } else {
    return goog.json.serialize(data);
  }
};
goog.provide("fb.util.utf8");
fb.util.utf8.stringToByteArray = function(str) {
  var out = [], p = 0;
  for (var i = 0;i < str.length;i++) {
    var c = str.charCodeAt(i);
    if (c >= 55296 && c <= 56319) {
      var high = c - 55296;
      i++;
      fb.core.util.assert(i < str.length, "Surrogate pair missing trail surrogate.");
      var low = str.charCodeAt(i) - 56320;
      c = 65536 + (high << 10) + low;
    }
    if (c < 128) {
      out[p++] = c;
    } else {
      if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else {
        if (c < 65536) {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
    }
  }
  return out;
};
fb.util.utf8.stringLength = function(str) {
  var p = 0;
  for (var i = 0;i < str.length;i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      p++;
    } else {
      if (c < 2048) {
        p += 2;
      } else {
        if (c >= 55296 && c <= 56319) {
          p += 4;
          i++;
        } else {
          p += 3;
        }
      }
    }
  }
  return p;
};
goog.provide("fb.util.validation");
fb.util.validation.validateArgCount = function(fnName, minCount, maxCount, argCount) {
  var argError;
  if (argCount < minCount) {
    argError = "at least " + minCount;
  } else {
    if (argCount > maxCount) {
      argError = maxCount === 0 ? "none" : "no more than " + maxCount;
    }
  }
  if (argError) {
    var error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
    throw new Error(error);
  }
};
fb.util.validation.errorPrefix = function(fnName, argumentNumber, optional) {
  var argName = "";
  switch(argumentNumber) {
    case 1:
      argName = optional ? "first" : "First";
      break;
    case 2:
      argName = optional ? "second" : "Second";
      break;
    case 3:
      argName = optional ? "third" : "Third";
      break;
    case 4:
      argName = optional ? "fourth" : "Fourth";
      break;
    default:
      fb.core.util.validation.assert(false, "errorPrefix_ called with argumentNumber > 4.  Need to update it?");
  }
  var error = fnName + " failed: ";
  error += argName + " argument ";
  return error;
};
fb.util.validation.validateNamespace = function(fnName, argumentNumber, namespace, optional) {
  if (optional && !goog.isDef(namespace)) {
    return;
  }
  if (!goog.isString(namespace)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid firebase namespace.");
  }
};
fb.util.validation.validateCallback = function(fnName, argumentNumber, callback, optional) {
  if (optional && !goog.isDef(callback)) {
    return;
  }
  if (!goog.isFunction(callback)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid function.");
  }
};
fb.util.validation.validateString = function(fnName, argumentNumber, string, optional) {
  if (optional && !goog.isDef(string)) {
    return;
  }
  if (!goog.isString(string)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid string.");
  }
};
fb.util.validation.validateContextObject = function(fnName, argumentNumber, context, optional) {
  if (optional && !goog.isDef(context)) {
    return;
  }
  if (!goog.isObject(context) || context === null) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid context object.");
  }
};
goog.provide("fb.util.obj");
fb.util.obj.contains = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
fb.util.obj.get = function(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  }
};
goog.provide("fb.core.util.validation");
goog.require("fb.util.obj");
goog.require("fb.util.utf8");
goog.require("fb.util.validation");
fb.core.util.validation.INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
fb.core.util.validation.INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
fb.core.util.validation.MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
fb.core.util.validation.MAX_DEPTH_SIZE_ = 1E3;
fb.core.util.validation.isValidKey = function(key) {
  return goog.isString(key) && key.length !== 0 && !fb.core.util.validation.INVALID_KEY_REGEX_.test(key);
};
fb.core.util.validation.isValidPathString = function(pathString) {
  return goog.isString(pathString) && pathString.length !== 0 && !fb.core.util.validation.INVALID_PATH_REGEX_.test(pathString);
};
fb.core.util.validation.isValidRootPathString = function(pathString) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  return fb.core.util.validation.isValidPathString(pathString);
};
fb.core.util.validation.validateFirebaseDataArg = function(fnName, argumentNumber, data, optional) {
  if (optional && !goog.isDef(data)) {
    return;
  }
  fb.core.util.validation.validateFirebaseData(fb.util.validation.errorPrefix(fnName, argumentNumber, optional), data);
};
fb.core.util.validation.validateFirebaseData = function(errorPrefix, data, depth, opt_path) {
  if (!depth) {
    depth = 0;
  }
  var path = opt_path || [];
  if (!goog.isDef(data)) {
    throw new Error(errorPrefix + "contains undefined" + fb.core.util.validation.pathLocation_(path));
  }
  if (goog.isFunction(data)) {
    throw new Error(errorPrefix + "contains a function" + fb.core.util.validation.pathLocation_(path) + " with contents: " + data.toString());
  }
  if (fb.core.util.isInvalidJSONNumber(data)) {
    throw new Error(errorPrefix + "contains " + data.toString() + fb.core.util.validation.pathLocation_(path));
  }
  if (depth > fb.core.util.validation.MAX_DEPTH_SIZE_) {
    throw new TypeError(errorPrefix + "contains a cyclic object value (" + path.slice(0, 100).join(".") + "...)");
  }
  if (goog.isString(data) && data.length > fb.core.util.validation.MAX_LEAF_SIZE_ / 3 && fb.util.utf8.stringToByteArray(data).length > fb.core.util.validation.MAX_LEAF_SIZE_) {
    throw new Error(errorPrefix + "contains a string greater than " + fb.core.util.validation.MAX_LEAF_SIZE_ + " utf8 bytes" + fb.core.util.validation.pathLocation_(path) + " ('" + data.substring(0, 50) + "...')");
  }
  if (goog.isObject(data)) {
    for (var key in data) {
      if (fb.util.obj.contains(data, key)) {
        var value = data[key];
        if (key !== ".priority" && key !== ".value" && key !== ".sv" && !fb.core.util.validation.isValidKey(key)) {
          throw new Error(errorPrefix + " contains an invalid key (" + key + ")" + fb.core.util.validation.pathLocation_(path) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
        path.push(key);
        fb.core.util.validation.validateFirebaseData(errorPrefix, value, depth + 1, path);
        path.pop();
      }
    }
  }
};
fb.core.util.validation.pathLocation_ = function(path) {
  if (path.length == 0) {
    return "";
  } else {
    return " in property '" + path.join(".") + "'";
  }
};
fb.core.util.validation.validateFirebaseObjectDataArg = function(fnName, argumentNumber, data, optional) {
  if (optional && !goog.isDef(data)) {
    return;
  }
  if (!goog.isObject(data) || goog.isArray(data)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + " must be an Object containing " + "the children to replace.");
  }
  fb.core.util.validation.validateFirebaseDataArg(fnName, argumentNumber, data, optional);
};
fb.core.util.validation.validatePriority = function(fnName, argumentNumber, priority, optional) {
  if (optional && !goog.isDef(priority)) {
    return;
  }
  if (fb.core.util.isInvalidJSONNumber(priority)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "is " + priority.toString() + ", but must be a valid Firebase priority (a string, finite number, or null).");
  }
  if (priority !== null && !goog.isNumber(priority) && !goog.isString(priority) && !(goog.isObject(priority) && fb.util.obj.contains(priority, ".sv"))) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid Firebase priority " + "(a string, finite number, or null).");
  }
};
fb.core.util.validation.validateEventType = function(fnName, argumentNumber, eventType, optional) {
  if (optional && !goog.isDef(eventType)) {
    return;
  }
  switch(eventType) {
    case "value":
    ;
    case "child_added":
    ;
    case "child_removed":
    ;
    case "child_changed":
    ;
    case "child_moved":
      break;
    default:
      throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');;
  }
};
fb.core.util.validation.validateKey = function(fnName, argumentNumber, key, optional) {
  if (optional && !goog.isDef(key)) {
    return;
  }
  if (!fb.core.util.validation.isValidKey(key)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid key: "' + key + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
  }
};
fb.core.util.validation.validatePathString = function(fnName, argumentNumber, pathString, optional) {
  if (optional && !goog.isDef(pathString)) {
    return;
  }
  if (!fb.core.util.validation.isValidPathString(pathString)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid path: "' + pathString + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
  }
};
fb.core.util.validation.validateRootPathString = function(fnName, argumentNumber, pathString, optional) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  fb.core.util.validation.validatePathString(fnName, argumentNumber, pathString, optional);
};
fb.core.util.validation.validateWritablePath = function(fnName, path) {
  if (path.getFront() === ".info") {
    throw new Error(fnName + " failed: Can't modify data under /.info/");
  }
};
fb.core.util.validation.validateUrl = function(fnName, argumentNumber, parsedUrl) {
  var pathString = parsedUrl.path.toString();
  if (!goog.isString(parsedUrl.repoInfo.host) || parsedUrl.repoInfo.host.length === 0 || !fb.core.util.validation.isValidKey(parsedUrl.repoInfo.namespace) || pathString.length !== 0 && !fb.core.util.validation.isValidRootPathString(pathString)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, false) + "must be a valid firebase URL and " + 'the path can\'t contain ".", "#", "$", "[", or "]".');
  }
};
fb.core.util.validation.validateCredential = function(fnName, argumentNumber, cred, optional) {
  if (optional && !goog.isDef(cred)) {
    return;
  }
  if (!goog.isString(cred)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a valid credential (a string).");
  }
};
fb.core.util.validation.validateBoolean = function(fnName, argumentNumber, bool, optional) {
  if (optional && !goog.isDef(bool)) {
    return;
  }
  if (!goog.isBoolean(bool)) {
    throw new Error(fb.util.validation.errorPrefix(fnName, argumentNumber, optional) + "must be a boolean.");
  }
};
goog.provide("fb.api.Query");
goog.require("fb.core.util.validation");
goog.require("fb.util.json");
fb.api.Query = function(repo, path, opt_limit, opt_startPriority, opt_startName, opt_endPriority, opt_endName) {
  this.repo = repo;
  this.path = path;
  this.itemLimit = opt_limit;
  this.startPriority = opt_startPriority;
  this.startName = opt_startName;
  this.endPriority = opt_endPriority;
  this.endName = opt_endName;
  if (goog.isDef(this.startPriority) && goog.isDef(this.endPriority) && goog.isDef(this.itemLimit)) {
    throw "Query: Can't combine startAt(), endAt(), and limit().";
  }
};
fb.api.Query.prototype.ref = function() {
  fb.util.validation.validateArgCount("Query.ref", 0, 0, arguments.length);
  return new Firebase(this.repo, this.path);
};
goog.exportProperty(fb.api.Query.prototype, "ref", fb.api.Query.prototype.ref);
fb.api.Query.prototype.on = function(eventType, callback) {
  fb.util.validation.validateArgCount("Query.on", 2, 4, arguments.length);
  fb.core.util.validation.validateEventType("Query.on", 1, eventType, false);
  fb.util.validation.validateCallback("Query.on", 2, callback, false);
  var ret = this.getCancelAndContextArgs_("Query.on", arguments[2], arguments[3]);
  this.repo.addEventCallbackForQuery(this, eventType, callback, ret.cancel, ret.context);
  return callback;
};
goog.exportProperty(fb.api.Query.prototype, "on", fb.api.Query.prototype.on);
fb.api.Query.prototype.off = function(eventType, callback, opt_context) {
  fb.util.validation.validateArgCount("Query.off", 0, 3, arguments.length);
  fb.core.util.validation.validateEventType("Query.off", 1, eventType, true);
  fb.util.validation.validateCallback("Query.off", 2, callback, true);
  fb.util.validation.validateContextObject("Query.off", 3, opt_context, true);
  this.repo.removeEventCallbackForQuery(this, eventType, callback, opt_context);
};
goog.exportProperty(fb.api.Query.prototype, "off", fb.api.Query.prototype.off);
fb.api.Query.prototype.once = function(eventType, userCallback) {
  fb.util.validation.validateArgCount("Query.once", 2, 4, arguments.length);
  fb.core.util.validation.validateEventType("Query.once", 1, eventType, false);
  fb.util.validation.validateCallback("Query.once", 2, userCallback, false);
  var ret = this.getCancelAndContextArgs_("Query.once", arguments[2], arguments[3]);
  var self = this, firstCall = true;
  var onceCallback = function(snapshot) {
    if (firstCall) {
      firstCall = false;
      self.off(eventType, onceCallback);
      goog.bind(userCallback, ret.context)(snapshot);
    }
  };
  this.on(eventType, onceCallback, function(err) {
    self.off(eventType, onceCallback);
    if (ret.cancel) {
      goog.bind(ret.cancel, ret.context)(err);
    }
  });
};
goog.exportProperty(fb.api.Query.prototype, "once", fb.api.Query.prototype.once);
fb.api.Query.prototype.limit = function(limit) {
  fb.util.validation.validateArgCount("Query.limit", 1, 1, arguments.length);
  if (!goog.isNumber(limit) || Math.floor(limit) !== limit || limit <= 0) {
    throw "Query.limit: First argument must be a positive integer.";
  }
  return new fb.api.Query(this.repo, this.path, limit, this.startPriority, this.startName, this.endPriority, this.endName);
};
goog.exportProperty(fb.api.Query.prototype, "limit", fb.api.Query.prototype.limit);
fb.api.Query.prototype.startAt = function(priority, name) {
  fb.util.validation.validateArgCount("Query.startAt", 0, 2, arguments.length);
  fb.core.util.validation.validatePriority("Query.startAt", 1, priority, true);
  fb.core.util.validation.validateKey("Query.startAt", 2, name, true);
  if (!goog.isDef(priority)) {
    priority = null;
    name = null;
  }
  return new fb.api.Query(this.repo, this.path, this.itemLimit, priority, name, this.endPriority, this.endName);
};
goog.exportProperty(fb.api.Query.prototype, "startAt", fb.api.Query.prototype.startAt);
fb.api.Query.prototype.endAt = function(priority, name) {
  fb.util.validation.validateArgCount("Query.endAt", 0, 2, arguments.length);
  fb.core.util.validation.validatePriority("Query.endAt", 1, priority, true);
  fb.core.util.validation.validateKey("Query.endAt", 2, name, true);
  return new fb.api.Query(this.repo, this.path, this.itemLimit, this.startPriority, this.startName, priority, name);
};
goog.exportProperty(fb.api.Query.prototype, "endAt", fb.api.Query.prototype.endAt);
fb.api.Query.prototype.equalTo = function(priority, name) {
  fb.util.validation.validateArgCount("Query.equalTo", 1, 2, arguments.length);
  fb.core.util.validation.validatePriority("Query.equalTo", 1, priority, false);
  fb.core.util.validation.validateKey("Query.equalTo", 2, name, true);
  return this.startAt(priority, name).endAt(priority, name);
};
goog.exportProperty(fb.api.Query.prototype, "equalTo", fb.api.Query.prototype.equalTo);
fb.api.Query.prototype.queryObject = function() {
  var obj = {};
  if (goog.isDef(this.startPriority)) {
    obj["sp"] = this.startPriority;
  }
  if (goog.isDef(this.startName)) {
    obj["sn"] = this.startName;
  }
  if (goog.isDef(this.endPriority)) {
    obj["ep"] = this.endPriority;
  }
  if (goog.isDef(this.endName)) {
    obj["en"] = this.endName;
  }
  if (goog.isDef(this.itemLimit)) {
    obj["l"] = this.itemLimit;
  }
  if (goog.isDef(this.startPriority) && goog.isDef(this.startName) && this.startPriority === null && this.startName === null) {
    obj["vf"] = "l";
  }
  return obj;
};
fb.api.Query.prototype.queryIdentifier = function() {
  var obj = this.queryObject();
  var id = fb.core.util.ObjectToUniqueKey(obj);
  return id === "{}" ? "default" : id;
};
fb.api.Query.prototype.getCancelAndContextArgs_ = function(fnName, opt_first, opt_second) {
  var ret = {};
  if (opt_first && opt_second) {
    ret.cancel = opt_first;
    fb.util.validation.validateCallback(fnName, 3, ret.cancel, true);
    ret.context = opt_second;
    fb.util.validation.validateContextObject(fnName, 4, ret.context, true);
  } else {
    if (opt_first) {
      if (typeof opt_first === "object" && opt_first !== null) {
        ret.context = opt_first;
      } else {
        if (typeof opt_first === "function") {
          ret.cancel = opt_first;
        } else {
          throw new Error(fb.util.validation.errorPrefix_(fnName, 3, true) + "must either be a cancel callback or a context object.");
        }
      }
    }
  }
  return ret;
};
goog.provide("fb.core.util.Path");
fb.core.util.Path = function(pathOrString, maybePieceNum) {
  if (arguments.length == 1) {
    this.pieces_ = pathOrString.split("/");
    var copyTo = 0;
    for (var i = 0;i < this.pieces_.length;i++) {
      if (this.pieces_[i].length > 0) {
        this.pieces_[copyTo] = this.pieces_[i];
        copyTo++;
      }
    }
    this.pieces_.length = copyTo;
    this.pieceNum_ = 0;
  } else {
    this.pieces_ = pathOrString;
    this.pieceNum_ = maybePieceNum;
  }
};
fb.core.util.Path.prototype.getFront = function() {
  if (this.pieceNum_ >= this.pieces_.length) {
    return null;
  }
  return this.pieces_[this.pieceNum_];
};
fb.core.util.Path.prototype.popFront = function() {
  var pieceNum = this.pieceNum_;
  if (pieceNum < this.pieces_.length) {
    pieceNum++;
  }
  return new fb.core.util.Path(this.pieces_, pieceNum);
};
fb.core.util.Path.prototype.getBack = function() {
  if (this.pieceNum_ < this.pieces_.length) {
    return this.pieces_[this.pieces_.length - 1];
  }
  return null;
};
fb.core.util.Path.prototype.toString = function() {
  var pathString = "";
  for (var i = this.pieceNum_;i < this.pieces_.length;i++) {
    if (this.pieces_[i] !== "") {
      pathString += "/" + this.pieces_[i];
    }
  }
  return pathString || "/";
};
fb.core.util.Path.prototype.parent = function() {
  if (this.pieceNum_ >= this.pieces_.length) {
    return null;
  }
  var pieces = [];
  for (var i = this.pieceNum_;i < this.pieces_.length - 1;i++) {
    pieces.push(this.pieces_[i]);
  }
  return new fb.core.util.Path(pieces, 0);
};
fb.core.util.Path.prototype.child = function(childPathObj) {
  var pieces = [];
  for (var i = this.pieceNum_;i < this.pieces_.length;i++) {
    pieces.push(this.pieces_[i]);
  }
  if (childPathObj instanceof fb.core.util.Path) {
    for (i = childPathObj.pieceNum_;i < childPathObj.pieces_.length;i++) {
      pieces.push(childPathObj.pieces_[i]);
    }
  } else {
    var childPieces = childPathObj.split("/");
    for (i = 0;i < childPieces.length;i++) {
      if (childPieces[i].length > 0) {
        pieces.push(childPieces[i]);
      }
    }
  }
  return new fb.core.util.Path(pieces, 0);
};
fb.core.util.Path.prototype.isEmpty = function() {
  return this.pieceNum_ >= this.pieces_.length;
};
fb.core.util.Path.prototype.length = function() {
  return this.pieces_.length - this.pieceNum_;
};
fb.core.util.Path.RelativePath = function(outerPath, innerPath) {
  var outer = outerPath.getFront(), inner = innerPath.getFront();
  if (outer === null) {
    return innerPath;
  } else {
    if (outer === inner) {
      return fb.core.util.Path.RelativePath(outerPath.popFront(), innerPath.popFront());
    } else {
      throw "INTERNAL ERROR: innerPath (" + innerPath + ") is not within " + "outerPath (" + outerPath + ")";
    }
  }
};
fb.core.util.Path.prototype.contains = function(other) {
  var i = this.pieceNum_;
  var j = other.pieceNum_;
  if (this.length() > other.length()) {
    return false;
  }
  while (i < this.pieces_.length) {
    if (this.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
    ++i;
    ++j;
  }
  return true;
};
goog.provide("fb.core.util.Tree");
goog.require("fb.core.util.Path");
goog.require("fb.util.obj");
fb.core.util.TreeNode = function() {
  this.children = {};
  this.childCount = 0;
  this.value = null;
};
fb.core.util.Tree = function(opt_name, opt_parent, opt_node) {
  this.name_ = opt_name ? opt_name : "";
  this.parent_ = opt_parent ? opt_parent : null;
  this.node_ = opt_node ? opt_node : new fb.core.util.TreeNode;
};
fb.core.util.Tree.prototype.subTree = function(pathObj) {
  var path = pathObj instanceof fb.core.util.Path ? pathObj : new fb.core.util.Path(pathObj);
  var child = this, next;
  while ((next = path.getFront()) !== null) {
    var childNode = fb.util.obj.get(child.node_.children, next) || new fb.core.util.TreeNode;
    child = new fb.core.util.Tree(next, child, childNode);
    path = path.popFront();
  }
  return child;
};
fb.core.util.Tree.prototype.getValue = function() {
  return this.node_.value;
};
fb.core.util.Tree.prototype.setValue = function(value) {
  fb.core.util.assert(typeof value !== "undefined", "Cannot set value to undefined");
  this.node_.value = value;
  this.updateParents_();
};
fb.core.util.Tree.prototype.clear = function() {
  this.node_.value = null;
  this.node_.children = {};
  this.node_.childCount = 0;
  this.updateParents_();
};
fb.core.util.Tree.prototype.hasChildren = function() {
  return this.node_.childCount > 0;
};
fb.core.util.Tree.prototype.isEmpty = function() {
  return this.getValue() === null && !this.hasChildren();
};
fb.core.util.Tree.prototype.forEachChild = function(action) {
  for (var child in this.node_.children) {
    action(new fb.core.util.Tree(child, this, this.node_.children[child]));
  }
};
fb.core.util.Tree.prototype.forEachDescendant = function(action, opt_includeSelf, opt_childrenFirst) {
  if (opt_includeSelf && !opt_childrenFirst) {
    action(this);
  }
  this.forEachChild(function(child) {
    child.forEachDescendant(action, true, opt_childrenFirst);
  });
  if (opt_includeSelf && opt_childrenFirst) {
    action(this);
  }
};
fb.core.util.Tree.prototype.forEachAncestor = function(action, opt_includeSelf) {
  var node = opt_includeSelf ? this : this.parent();
  while (node !== null) {
    if (action(node)) {
      return true;
    }
    node = node.parent();
  }
  return false;
};
fb.core.util.Tree.prototype.forEachImmediateDescendantWithValue = function(action) {
  this.forEachChild(function(child) {
    if (child.getValue() !== null) {
      action(child);
    } else {
      child.forEachImmediateDescendantWithValue(action);
    }
  });
};
fb.core.util.Tree.prototype.path = function() {
  return new fb.core.util.Path(this.parent_ === null ? this.name_ : this.parent_.path() + "/" + this.name_);
};
fb.core.util.Tree.prototype.name = function() {
  return this.name_;
};
fb.core.util.Tree.prototype.parent = function() {
  return this.parent_;
};
fb.core.util.Tree.prototype.updateParents_ = function() {
  if (this.parent_ !== null) {
    this.parent_.updateChild_(this.name_, this);
  }
};
fb.core.util.Tree.prototype.updateChild_ = function(childName, child) {
  var childEmpty = child.isEmpty();
  var childExists = fb.util.obj.contains(this.node_.children, childName);
  if (childEmpty && childExists) {
    delete this.node_.children[childName];
    this.node_.childCount--;
    this.updateParents_();
  } else {
    if (!childEmpty && !childExists) {
      this.node_.children[childName] = child.node_;
      this.node_.childCount++;
      this.updateParents_();
    }
  }
};
goog.provide("fb.core.util.SortedMap");
fb.Comparator;
fb.core.util.SortedMap = function(opt_comparator, opt_root) {
  this.comparator_ = opt_comparator ? opt_comparator : fb.core.util.SortedMap.STANDARD_COMPARATOR_;
  this.root_ = opt_root ? opt_root : fb.core.util.SortedMap.EMPTY_NODE_;
};
fb.core.util.SortedMap.STANDARD_COMPARATOR_ = function(elem1, elem2) {
  if (elem1 < elem2) {
    return-1;
  } else {
    if (elem1 > elem2) {
      return 1;
    } else {
      return 0;
    }
  }
};
fb.core.util.SortedMap.prototype.insert = function(key, value) {
  return new fb.core.util.SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, fb.LLRBNode.BLACK, null, null));
};
fb.core.util.SortedMap.prototype.remove = function(key) {
  return new fb.core.util.SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, fb.LLRBNode.BLACK, null, null));
};
fb.core.util.SortedMap.prototype.get = function(key) {
  var cmp;
  var node = this.root_;
  while (!node.isEmpty()) {
    cmp = this.comparator_(key, node.key);
    if (cmp === 0) {
      return node.value;
    } else {
      if (cmp < 0) {
        node = node.left;
      } else {
        if (cmp > 0) {
          node = node.right;
        }
      }
    }
  }
  return null;
};
fb.core.util.SortedMap.prototype.getPredecessorKey = function(key) {
  var cmp, node = this.root_, rightParent = null;
  while (!node.isEmpty()) {
    cmp = this.comparator_(key, node.key);
    if (cmp === 0) {
      if (!node.left.isEmpty()) {
        node = node.left;
        while (!node.right.isEmpty()) {
          node = node.right;
        }
        return node.key;
      } else {
        if (rightParent) {
          return rightParent.key;
        } else {
          return null;
        }
      }
    } else {
      if (cmp < 0) {
        node = node.left;
      } else {
        if (cmp > 0) {
          rightParent = node;
          node = node.right;
        }
      }
    }
  }
  throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
};
fb.core.util.SortedMap.prototype.isEmpty = function() {
  return this.root_.isEmpty();
};
fb.core.util.SortedMap.prototype.count = function() {
  return this.root_.count();
};
fb.core.util.SortedMap.prototype.minKey = function() {
  return this.root_.minKey();
};
fb.core.util.SortedMap.prototype.maxKey = function() {
  return this.root_.maxKey();
};
fb.core.util.SortedMap.prototype.inorderTraversal = function(action) {
  return this.root_.inorderTraversal(action);
};
fb.core.util.SortedMap.prototype.reverseTraversal = function(action) {
  return this.root_.reverseTraversal(action);
};
fb.core.util.SortedMap.prototype.getIterator = function(opt_resultGenerator) {
  return new fb.core.util.SortedMapIterator(this.root_, opt_resultGenerator);
};
fb.core.util.SortedMapIterator = function(node, opt_resultGenerator) {
  this.resultGenerator_ = opt_resultGenerator;
  this.nodeStack_ = [];
  while (!node.isEmpty()) {
    this.nodeStack_.push(node);
    node = node.left;
  }
};
fb.core.util.SortedMapIterator.prototype.getNext = function() {
  if (this.nodeStack_.length === 0) {
    return null;
  }
  var node = this.nodeStack_.pop(), result;
  if (this.resultGenerator_) {
    result = this.resultGenerator_(node.key, node.value);
  } else {
    result = {key:node.key, value:node.value};
  }
  node = node.right;
  while (!node.isEmpty()) {
    this.nodeStack_.push(node);
    node = node.left;
  }
  return result;
};
fb.LLRBNode = function(key, value, color, left, right) {
  this.key = key;
  this.value = value;
  this.color = color != null ? color : fb.LLRBNode.RED;
  this.left = left != null ? left : fb.core.util.SortedMap.EMPTY_NODE_;
  this.right = right != null ? right : fb.core.util.SortedMap.EMPTY_NODE_;
};
fb.LLRBNode.RED = true;
fb.LLRBNode.BLACK = false;
fb.LLRBNode.prototype.copy = function(key, value, color, left, right) {
  return new fb.LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
};
fb.LLRBNode.prototype.count = function() {
  return this.left.count() + 1 + this.right.count();
};
fb.LLRBNode.prototype.isEmpty = function() {
  return false;
};
fb.LLRBNode.prototype.inorderTraversal = function(action) {
  return this.left.inorderTraversal(action) || action(this.key, this.value) || this.right.inorderTraversal(action);
};
fb.LLRBNode.prototype.reverseTraversal = function(action) {
  return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
};
fb.LLRBNode.prototype.min_ = function() {
  if (this.left.isEmpty()) {
    return this;
  } else {
    return this.left.min_();
  }
};
fb.LLRBNode.prototype.minKey = function() {
  return this.min_().key;
};
fb.LLRBNode.prototype.maxKey = function() {
  if (this.right.isEmpty()) {
    return this.key;
  } else {
    return this.right.maxKey();
  }
};
fb.LLRBNode.prototype.insert = function(key, value, comparator) {
  var cmp, n;
  n = this;
  cmp = comparator(key, n.key);
  if (cmp < 0) {
    n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
  } else {
    if (cmp === 0) {
      n = n.copy(null, value, null, null, null);
    } else {
      n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
    }
  }
  return n.fixUp_();
};
fb.LLRBNode.prototype.removeMin_ = function() {
  var n;
  if (this.left.isEmpty()) {
    return fb.core.util.SortedMap.EMPTY_NODE_;
  }
  n = this;
  if (!n.left.isRed_() && !n.left.left.isRed_()) {
    n = n.moveRedLeft_();
  }
  n = n.copy(null, null, null, n.left.removeMin_(), null);
  return n.fixUp_();
};
fb.LLRBNode.prototype.remove = function(key, comparator) {
  var n, smallest;
  n = this;
  if (comparator(key, n.key) < 0) {
    if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
      n = n.moveRedLeft_();
    }
    n = n.copy(null, null, null, n.left.remove(key, comparator), null);
  } else {
    if (n.left.isRed_()) {
      n = n.rotateRight_();
    }
    if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
      n = n.moveRedRight_();
    }
    if (comparator(key, n.key) === 0) {
      if (n.right.isEmpty()) {
        return fb.core.util.SortedMap.EMPTY_NODE_;
      } else {
        smallest = n.right.min_();
        n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
      }
    }
    n = n.copy(null, null, null, null, n.right.remove(key, comparator));
  }
  return n.fixUp_();
};
fb.LLRBNode.prototype.isRed_ = function() {
  return this.color;
};
fb.LLRBNode.prototype.fixUp_ = function() {
  var n = this;
  if (n.right.isRed_() && !n.left.isRed_()) {
    n = n.rotateLeft_();
  }
  if (n.left.isRed_() && n.left.left.isRed_()) {
    n = n.rotateRight_();
  }
  if (n.left.isRed_() && n.right.isRed_()) {
    n = n.colorFlip_();
  }
  return n;
};
fb.LLRBNode.prototype.moveRedLeft_ = function() {
  var n = this.colorFlip_();
  if (n.right.left.isRed_()) {
    n = n.copy(null, null, null, null, n.right.rotateRight_());
    n = n.rotateLeft_();
    n = n.colorFlip_();
  }
  return n;
};
fb.LLRBNode.prototype.moveRedRight_ = function() {
  var n = this.colorFlip_();
  if (n.left.left.isRed_()) {
    n = n.rotateRight_();
    n = n.colorFlip_();
  }
  return n;
};
fb.LLRBNode.prototype.rotateLeft_ = function() {
  var nl;
  nl = this.copy(null, null, fb.LLRBNode.RED, null, this.right.left);
  return this.right.copy(null, null, this.color, nl, null);
};
fb.LLRBNode.prototype.rotateRight_ = function() {
  var nr;
  nr = this.copy(null, null, fb.LLRBNode.RED, this.left.right, null);
  return this.left.copy(null, null, this.color, null, nr);
};
fb.LLRBNode.prototype.colorFlip_ = function() {
  var left, right;
  left = this.left.copy(null, null, !this.left.color, null, null);
  right = this.right.copy(null, null, !this.right.color, null, null);
  return this.copy(null, null, !this.color, left, right);
};
fb.LLRBNode.prototype.checkMaxDepth_ = function() {
  var blackDepth;
  blackDepth = this.check_();
  if (Math.pow(2, blackDepth) <= this.count() + 1) {
    return true;
  } else {
    return false;
  }
};
fb.LLRBNode.prototype.check_ = function() {
  var blackDepth;
  if (this.isRed_() && this.left.isRed_()) {
    throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
  }
  if (this.right.isRed_()) {
    throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
  }
  blackDepth = this.left.check_();
  if (blackDepth !== this.right.check_()) {
    throw new Error("Black depths differ");
  } else {
    return blackDepth + (this.isRed_() ? 0 : 1);
  }
};
fb.LLRBEmptyNode = function() {
};
fb.LLRBEmptyNode.prototype.copy = function() {
  return this;
};
fb.LLRBEmptyNode.prototype.insert = function(key, value, comparator) {
  return new fb.LLRBNode(key, value, null);
};
fb.LLRBEmptyNode.prototype.remove = function(key, comparator) {
  return this;
};
fb.LLRBEmptyNode.prototype.count = function() {
  return 0;
};
fb.LLRBEmptyNode.prototype.isEmpty = function() {
  return true;
};
fb.LLRBEmptyNode.prototype.inorderTraversal = function(action) {
  return false;
};
fb.LLRBEmptyNode.prototype.reverseTraversal = function(action) {
  return false;
};
fb.LLRBEmptyNode.prototype.minKey = function() {
  return null;
};
fb.LLRBEmptyNode.prototype.maxKey = function() {
  return null;
};
fb.LLRBEmptyNode.prototype.check_ = function() {
  return 0;
};
fb.LLRBEmptyNode.prototype.isRed_ = function() {
  return false;
};
fb.core.util.SortedMap.EMPTY_NODE_ = new fb.LLRBEmptyNode;
goog.provide("fb.core.storage.DOMStorageWrapper");
goog.require("fb.util.obj");
goog.scope(function() {
  fb.core.storage.DOMStorageWrapper = function(domStorage) {
    this.domStorage_ = domStorage;
    this.prefix_ = "firebase:";
  };
  var DOMStorageWrapper = fb.core.storage.DOMStorageWrapper;
  DOMStorageWrapper.prototype.set = function(key, value) {
    if (value == null) {
      this.domStorage_.removeItem(this.prefixedName_(key));
    } else {
      this.domStorage_.setItem(this.prefixedName_(key), fb.util.json.stringify(value));
    }
  };
  DOMStorageWrapper.prototype.get = function(key) {
    var storedVal = this.domStorage_.getItem(this.prefixedName_(key));
    if (storedVal == null) {
      return null;
    } else {
      return fb.util.json.eval(storedVal);
    }
  };
  DOMStorageWrapper.prototype.remove = function(key) {
    this.domStorage_.removeItem(this.prefixedName_(key));
  };
  DOMStorageWrapper.prototype.isInMemoryStorage = false;
  DOMStorageWrapper.prototype.prefixedName_ = function(name) {
    return this.prefix_ + name;
  };
});
goog.provide("fb.core.storage.MemoryStorage");
goog.require("fb.util.obj");
goog.scope(function() {
  var obj = fb.util.obj;
  fb.core.storage.MemoryStorage = function() {
    this.cache_ = {};
  };
  var MemoryStorage = fb.core.storage.MemoryStorage;
  MemoryStorage.prototype.set = function(key, value) {
    if (value == null) {
      delete this.cache_[key];
    } else {
      this.cache_[key] = value;
    }
  };
  MemoryStorage.prototype.get = function(key) {
    if (obj.contains(this.cache_, key)) {
      return this.cache_[key];
    }
    return null;
  };
  MemoryStorage.prototype.remove = function(key) {
    delete this.cache_[key];
  };
  MemoryStorage.prototype.isInMemoryStorage = true;
});
goog.provide("fb.core.storage");
goog.require("fb.core.storage.DOMStorageWrapper");
goog.require("fb.core.storage.MemoryStorage");
fb.core.storage.createStoragefor = function(domStorageName) {
  try {
    if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
      var domStorage = window[domStorageName];
      domStorage.setItem("firebase:sentinel", "cache");
      domStorage.removeItem("firebase:sentinel");
      return new fb.core.storage.DOMStorageWrapper(domStorage);
    }
  } catch (e) {
  }
  return new fb.core.storage.MemoryStorage;
};
fb.core.storage.PersistentStorage = fb.core.storage.createStoragefor("localStorage");
fb.core.storage.SessionStorage = fb.core.storage.createStoragefor("sessionStorage");
goog.provide("fb.core.RepoInfo");
goog.require("fb.core.storage");
fb.core.RepoInfo = function(host, secure, namespace, webSocketOnly) {
  this.host = host.toLowerCase();
  this.domain = this.host.substr(this.host.indexOf(".") + 1);
  this.secure = secure;
  this.namespace = namespace;
  this.webSocketOnly = webSocketOnly;
  this.internalHost = fb.core.storage.PersistentStorage.get("host:" + host) || this.host;
};
fb.core.RepoInfo.prototype.needsQueryParam = function() {
  return this.host !== this.internalHost;
};
fb.core.RepoInfo.prototype.isCacheableHost = function() {
  return this.internalHost.substr(0, 2) === "s-";
};
fb.core.RepoInfo.prototype.isDemoHost = function() {
  return this.domain === "firebaseio-demo.com";
};
fb.core.RepoInfo.prototype.updateHost = function(newHost) {
  if (newHost !== this.internalHost) {
    this.internalHost = newHost;
    if (this.isCacheableHost()) {
      fb.core.storage.PersistentStorage.set("host:" + this.host, this.internalHost);
    }
  }
};
fb.core.RepoInfo.prototype.toString = function() {
  return(this.secure ? "https://" : "http://") + this.host;
};
goog.provide("goog.dom.NodeType");
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var stack = (new Error).stack;
    if (stack) {
      this.stack = stack;
    }
  }
  if (opt_msg) {
    this.message = String(opt_msg);
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.define("goog.string.DETECT_DOUBLE_ESCAPING", false);
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0;
};
goog.string.endsWith = function(str, suffix) {
  var l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l;
};
goog.string.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0;
};
goog.string.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0;
};
goog.string.caseInsensitiveEquals = function(str1, str2) {
  return str1.toLowerCase() == str2.toLowerCase();
};
goog.string.subs = function(str, var_args) {
  var splitParts = str.split("%s");
  var returnString = "";
  var subsArguments = Array.prototype.slice.call(arguments, 1);
  while (subsArguments.length && splitParts.length > 1) {
    returnString += splitParts.shift() + subsArguments.shift();
  }
  return returnString + splitParts.join("%s");
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmpty = function(str) {
  return/^[\s\xa0]*$/.test(str);
};
goog.string.isEmptySafe = function(str) {
  return goog.string.isEmpty(goog.string.makeSafe(str));
};
goog.string.isBreakingWhitespace = function(str) {
  return!/[^\t\n\r ]/.test(str);
};
goog.string.isAlpha = function(str) {
  return!/[^a-zA-Z]/.test(str);
};
goog.string.isNumeric = function(str) {
  return!/[^0-9]/.test(str);
};
goog.string.isAlphaNumeric = function(str) {
  return!/[^a-zA-Z0-9]/.test(str);
};
goog.string.isSpace = function(ch) {
  return ch == " ";
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd";
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(str) {
  return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = function(str) {
  return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function(str1, str2) {
  var test1 = String(str1).toLowerCase();
  var test2 = String(str2).toLowerCase();
  if (test1 < test2) {
    return-1;
  } else {
    if (test1 == test2) {
      return 0;
    } else {
      return 1;
    }
  }
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(str1, str2) {
  if (str1 == str2) {
    return 0;
  }
  if (!str1) {
    return-1;
  }
  if (!str2) {
    return 1;
  }
  var tokens1 = str1.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var tokens2 = str2.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var count = Math.min(tokens1.length, tokens2.length);
  for (var i = 0;i < count;i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if (a != b) {
      var num1 = parseInt(a, 10);
      if (!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if (!isNaN(num2) && num1 - num2) {
          return num1 - num2;
        }
      }
      return a < b ? -1 : 1;
    }
  }
  if (tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length;
  }
  return str1 < str2 ? -1 : 1;
};
goog.string.urlEncode = function(str) {
  return encodeURIComponent(String(str));
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
};
goog.string.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>");
};
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if (opt_isLikelyToContainHtmlChars) {
    str = str.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;");
    if (goog.string.DETECT_DOUBLE_ESCAPING) {
      str = str.replace(goog.string.E_RE_, "&#101;");
    }
    return str;
  } else {
    if (!goog.string.ALL_RE_.test(str)) {
      return str;
    }
    if (str.indexOf("&") != -1) {
      str = str.replace(goog.string.AMP_RE_, "&amp;");
    }
    if (str.indexOf("<") != -1) {
      str = str.replace(goog.string.LT_RE_, "&lt;");
    }
    if (str.indexOf(">") != -1) {
      str = str.replace(goog.string.GT_RE_, "&gt;");
    }
    if (str.indexOf('"') != -1) {
      str = str.replace(goog.string.QUOT_RE_, "&quot;");
    }
    if (str.indexOf("'") != -1) {
      str = str.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;");
    }
    if (str.indexOf("\x00") != -1) {
      str = str.replace(goog.string.NULL_RE_, "&#0;");
    }
    if (goog.string.DETECT_DOUBLE_ESCAPING && str.indexOf("e") != -1) {
      str = str.replace(goog.string.E_RE_, "&#101;");
    }
    return str;
  }
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function(str) {
  if (goog.string.contains(str, "&")) {
    if ("document" in goog.global) {
      return goog.string.unescapeEntitiesUsingDom_(str);
    } else {
      return goog.string.unescapePureXmlEntities_(str);
    }
  }
  return str;
};
goog.string.unescapeEntitiesWithDocument = function(str, document) {
  if (goog.string.contains(str, "&")) {
    return goog.string.unescapeEntitiesUsingDom_(str, document);
  }
  return str;
};
goog.string.unescapeEntitiesUsingDom_ = function(str, opt_document) {
  var seen = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var div;
  if (opt_document) {
    div = opt_document.createElement("div");
  } else {
    div = goog.global.document.createElement("div");
  }
  return str.replace(goog.string.HTML_ENTITY_PATTERN_, function(s, entity) {
    var value = seen[s];
    if (value) {
      return value;
    }
    if (entity.charAt(0) == "#") {
      var n = Number("0" + entity.substr(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    if (!value) {
      div.innerHTML = s + " ";
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    return seen[s] = value;
  });
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if (entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if (!isNaN(n)) {
            return String.fromCharCode(n);
          }
        }
        return s;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml);
};
goog.string.preserveSpaces = function(str) {
  return str.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for (var i = 0;i < length;i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1);
    }
  }
  return str;
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (str.length > chars) {
    str = str.substring(0, chars - 3) + "...";
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (opt_trailingChars && str.length > chars) {
    if (opt_trailingChars > chars) {
      opt_trailingChars = chars;
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint);
  } else {
    if (str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos);
    }
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  if (s.quote) {
    return s.quote();
  } else {
    var sb = ['"'];
    for (var i = 0;i < s.length;i++) {
      var ch = s.charAt(i);
      var cc = ch.charCodeAt(0);
      sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch));
    }
    sb.push('"');
    return sb.join("");
  }
};
goog.string.escapeString = function(str) {
  var sb = [];
  for (var i = 0;i < str.length;i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i));
  }
  return sb.join("");
};
goog.string.escapeChar = function(c) {
  if (c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c];
  }
  if (c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c];
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if (cc > 31 && cc < 127) {
    rv = c;
  } else {
    if (cc < 256) {
      rv = "\\x";
      if (cc < 16 || cc > 256) {
        rv += "0";
      }
    } else {
      rv = "\\u";
      if (cc < 4096) {
        rv += "0";
      }
    }
    rv += cc.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[c] = rv;
};
goog.string.toMap = function(s) {
  var rv = {};
  for (var i = 0;i < s.length;i++) {
    rv[s.charAt(i)] = true;
  }
  return rv;
};
goog.string.contains = function(str, subString) {
  return str.indexOf(subString) != -1;
};
goog.string.caseInsensitiveContains = function(str, subString) {
  return goog.string.contains(str.toLowerCase(), subString.toLowerCase());
};
goog.string.countOf = function(s, ss) {
  return s && ss ? s.split(ss).length - 1 : 0;
};
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if (index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength);
  }
  return resultStr;
};
goog.string.remove = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "");
  return s.replace(re, "");
};
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "");
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = function(string, length) {
  return(new Array(length + 1)).join(string);
};
goog.string.padNumber = function(num, length, opt_precision) {
  var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if (index == -1) {
    index = s.length;
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s;
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj);
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function(version1, version2) {
  var order = 0;
  var v1Subs = goog.string.trim(String(version1)).split(".");
  var v2Subs = goog.string.trim(String(version2)).split(".");
  var subCount = Math.max(v1Subs.length, v2Subs.length);
  for (var subIdx = 0;order == 0 && subIdx < subCount;subIdx++) {
    var v1Sub = v1Subs[subIdx] || "";
    var v2Sub = v2Subs[subIdx] || "";
    var v1CompParser = new RegExp("(\\d*)(\\D*)", "g");
    var v2CompParser = new RegExp("(\\d*)(\\D*)", "g");
    do {
      var v1Comp = v1CompParser.exec(v1Sub) || ["", "", ""];
      var v2Comp = v2CompParser.exec(v2Sub) || ["", "", ""];
      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break;
      }
      var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2]);
    } while (order == 0);
  }
  return order;
};
goog.string.compareElements_ = function(left, right) {
  if (left < right) {
    return-1;
  } else {
    if (left > right) {
      return 1;
    }
  }
  return 0;
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(str) {
  var result = 0;
  for (var i = 0;i < str.length;++i) {
    result = 31 * result + str.charCodeAt(i);
    result %= goog.string.HASHCODE_MAX_;
  }
  return result;
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(str) {
  var num = Number(str);
  if (num == 0 && goog.string.isEmpty(str)) {
    return NaN;
  }
  return num;
};
goog.string.isLowerCamelCase = function(str) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(str);
};
goog.string.isUpperCamelCase = function(str) {
  return/^([A-Z][a-z]*)+$/.test(str);
};
goog.string.toCamelCase = function(str) {
  return String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase();
  });
};
goog.string.toSelectorCase = function(str) {
  return String(str).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(str, opt_delimiters) {
  var delimiters = goog.isString(opt_delimiters) ? goog.string.regExpEscape(opt_delimiters) : "\\s";
  delimiters = delimiters ? "|[" + delimiters + "]+" : "";
  var regexp = new RegExp("(^" + delimiters + ")([a-z])", "g");
  return str.replace(regexp, function(all, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};
goog.string.parseInt = function(value) {
  if (isFinite(value)) {
    value = String(value);
  }
  if (goog.isString(value)) {
    return/^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10);
  }
  return NaN;
};
goog.string.splitLimit = function(str, separator, limit) {
  var parts = str.split(separator);
  var returnVal = [];
  while (limit > 0 && parts.length) {
    returnVal.push(parts.shift());
    limit--;
  }
  if (parts.length) {
    returnVal.push(parts.join(separator));
  }
  return returnVal;
};
goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.dom.NodeType");
goog.require("goog.string");
goog.define("goog.asserts.ENABLE_ASSERTS", goog.DEBUG);
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  messageArgs.shift();
  this.messagePattern = messagePattern;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if (givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs;
  } else {
    if (defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs;
    }
  }
  throw new goog.asserts.AssertionError("" + message, args || []);
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return condition;
};
goog.asserts.fail = function(opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertElement = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) {
    goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return(value);
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("instanceof check failed.", null, opt_message, Array.prototype.slice.call(arguments, 3));
  }
  return value;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var key in Object.prototype) {
    goog.asserts.fail(key + " should not be enumerable in Object.prototype.");
  }
};
goog.provide("goog.array");
goog.provide("goog.array.ArrayLike");
goog.require("goog.asserts");
goog.define("goog.NATIVE_ARRAY_PROTOTYPES", goog.TRUSTED_SITE);
goog.define("goog.array.ASSUME_NATIVE_FUNCTIONS", false);
goog.array.ArrayLike;
goog.array.peek = function(array) {
  return array[array.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr, obj, opt_fromIndex);
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
  if (goog.isString(arr)) {
    if (!goog.isString(obj) || obj.length != 1) {
      return-1;
    }
    return arr.indexOf(obj, fromIndex);
  }
  for (var i = fromIndex;i < arr.length;i++) {
    if (i in arr && arr[i] === obj) {
      return i;
    }
  }
  return-1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr, obj, fromIndex);
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  if (fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex);
  }
  if (goog.isString(arr)) {
    if (!goog.isString(obj) || obj.length != 1) {
      return-1;
    }
    return arr.lastIndexOf(obj, fromIndex);
  }
  for (var i = fromIndex;i >= 0;i--) {
    if (i in arr && arr[i] === obj) {
      return i;
    }
  }
  return-1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(arr, f, opt_obj);
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2) {
      f.call(opt_obj, arr2[i], i, arr);
    }
  }
};
goog.array.forEachRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = l - 1;i >= 0;--i) {
    if (i in arr2) {
      f.call(opt_obj, arr2[i], i, arr);
    }
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(arr, f, opt_obj);
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = [];
  var resLength = 0;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2) {
      var val = arr2[i];
      if (f.call(opt_obj, val, i, arr)) {
        res[resLength++] = val;
      }
    }
  }
  return res;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.map.call(arr, f, opt_obj);
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = new Array(l);
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2) {
      res[i] = f.call(opt_obj, arr2[i], i, arr);
    }
  }
  return res;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(arr, f, val, opt_obj) {
  goog.asserts.assert(arr.length != null);
  if (opt_obj) {
    f = goog.bind(f, opt_obj);
  }
  return goog.array.ARRAY_PROTOTYPE_.reduce.call(arr, f, val);
} : function(arr, f, val, opt_obj) {
  var rval = val;
  goog.array.forEach(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr);
  });
  return rval;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(arr, f, val, opt_obj) {
  goog.asserts.assert(arr.length != null);
  if (opt_obj) {
    f = goog.bind(f, opt_obj);
  }
  return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(arr, f, val);
} : function(arr, f, val, opt_obj) {
  var rval = val;
  goog.array.forEachRight(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr);
  });
  return rval;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.some.call(arr, f, opt_obj);
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return true;
    }
  }
  return false;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.every.call(arr, f, opt_obj);
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
      return false;
    }
  }
  return true;
};
goog.array.count = function(arr, f, opt_obj) {
  var count = 0;
  goog.array.forEach(arr, function(element, index, arr) {
    if (f.call(opt_obj, element, index, arr)) {
      ++count;
    }
  }, opt_obj);
  return count;
};
goog.array.find = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i];
};
goog.array.findIndex = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = 0;i < l;i++) {
    if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i;
    }
  }
  return-1;
};
goog.array.findRight = function(arr, f, opt_obj) {
  var i = goog.array.findIndexRight(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i];
};
goog.array.findIndexRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for (var i = l - 1;i >= 0;i--) {
    if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i;
    }
  }
  return-1;
};
goog.array.contains = function(arr, obj) {
  return goog.array.indexOf(arr, obj) >= 0;
};
goog.array.isEmpty = function(arr) {
  return arr.length == 0;
};
goog.array.clear = function(arr) {
  if (!goog.isArray(arr)) {
    for (var i = arr.length - 1;i >= 0;i--) {
      delete arr[i];
    }
  }
  arr.length = 0;
};
goog.array.insert = function(arr, obj) {
  if (!goog.array.contains(arr, obj)) {
    arr.push(obj);
  }
};
goog.array.insertAt = function(arr, obj, opt_i) {
  goog.array.splice(arr, opt_i, 0, obj);
};
goog.array.insertArrayAt = function(arr, elementsToAdd, opt_i) {
  goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd);
};
goog.array.insertBefore = function(arr, obj, opt_obj2) {
  var i;
  if (arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) {
    arr.push(obj);
  } else {
    goog.array.insertAt(arr, obj, i);
  }
};
goog.array.remove = function(arr, obj) {
  var i = goog.array.indexOf(arr, obj);
  var rv;
  if (rv = i >= 0) {
    goog.array.removeAt(arr, i);
  }
  return rv;
};
goog.array.removeAt = function(arr, i) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.call(arr, i, 1).length == 1;
};
goog.array.removeIf = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  if (i >= 0) {
    goog.array.removeAt(arr, i);
    return true;
  }
  return false;
};
goog.array.concat = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.join = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.toArray = function(object) {
  var length = object.length;
  if (length > 0) {
    var rv = new Array(length);
    for (var i = 0;i < length;i++) {
      rv[i] = object[i];
    }
    return rv;
  }
  return[];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function(arr1, var_args) {
  for (var i = 1;i < arguments.length;i++) {
    var arr2 = arguments[i];
    var isArrayLike;
    if (goog.isArray(arr2) || (isArrayLike = goog.isArrayLike(arr2)) && Object.prototype.hasOwnProperty.call(arr2, "callee")) {
      arr1.push.apply(arr1, arr2);
    } else {
      if (isArrayLike) {
        var len1 = arr1.length;
        var len2 = arr2.length;
        for (var j = 0;j < len2;j++) {
          arr1[len1 + j] = arr2[j];
        }
      } else {
        arr1.push(arr2);
      }
    }
  }
};
goog.array.splice = function(arr, index, howMany, var_args) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr, goog.array.slice(arguments, 1));
};
goog.array.slice = function(arr, start, opt_end) {
  goog.asserts.assert(arr.length != null);
  if (arguments.length <= 2) {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start);
  } else {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start, opt_end);
  }
};
goog.array.removeDuplicates = function(arr, opt_rv, opt_hashFn) {
  var returnArray = opt_rv || arr;
  var defaultHashFn = function(item) {
    return goog.isObject(current) ? "o" + goog.getUid(current) : (typeof current).charAt(0) + current;
  };
  var hashFn = opt_hashFn || defaultHashFn;
  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while (cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = hashFn(current);
    if (!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current;
    }
  }
  returnArray.length = cursorInsert;
};
goog.array.binarySearch = function(arr, target, opt_compareFn) {
  return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target);
};
goog.array.binarySelect = function(arr, evaluator, opt_obj) {
  return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj);
};
goog.array.binarySearch_ = function(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
  var left = 0;
  var right = arr.length;
  var found;
  while (left < right) {
    var middle = left + right >> 1;
    var compareResult;
    if (isEvaluator) {
      compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr);
    } else {
      compareResult = compareFn(opt_target, arr[middle]);
    }
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
      found = !compareResult;
    }
  }
  return found ? left : ~left;
};
goog.array.sort = function(arr, opt_compareFn) {
  arr.sort(opt_compareFn || goog.array.defaultCompare);
};
goog.array.stableSort = function(arr, opt_compareFn) {
  for (var i = 0;i < arr.length;i++) {
    arr[i] = {index:i, value:arr[i]};
  }
  var valueCompareFn = opt_compareFn || goog.array.defaultCompare;
  function stableCompareFn(obj1, obj2) {
    return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index;
  }
  goog.array.sort(arr, stableCompareFn);
  for (var i = 0;i < arr.length;i++) {
    arr[i] = arr[i].value;
  }
};
goog.array.sortObjectsByKey = function(arr, key, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  goog.array.sort(arr, function(a, b) {
    return compare(a[key], b[key]);
  });
};
goog.array.isSorted = function(arr, opt_compareFn, opt_strict) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  for (var i = 1;i < arr.length;i++) {
    var compareResult = compare(arr[i - 1], arr[i]);
    if (compareResult > 0 || compareResult == 0 && opt_strict) {
      return false;
    }
  }
  return true;
};
goog.array.equals = function(arr1, arr2, opt_equalsFn) {
  if (!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
    return false;
  }
  var l = arr1.length;
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  for (var i = 0;i < l;i++) {
    if (!equalsFn(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};
goog.array.compare3 = function(arr1, arr2, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  var l = Math.min(arr1.length, arr2.length);
  for (var i = 0;i < l;i++) {
    var result = compare(arr1[i], arr2[i]);
    if (result != 0) {
      return result;
    }
  }
  return goog.array.defaultCompare(arr1.length, arr2.length);
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b;
};
goog.array.binaryInsert = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  if (index < 0) {
    goog.array.insertAt(array, value, -(index + 1));
    return true;
  }
  return false;
};
goog.array.binaryRemove = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  return index >= 0 ? goog.array.removeAt(array, index) : false;
};
goog.array.bucket = function(array, sorter, opt_obj) {
  var buckets = {};
  for (var i = 0;i < array.length;i++) {
    var value = array[i];
    var key = sorter.call(opt_obj, value, i, array);
    if (goog.isDef(key)) {
      var bucket = buckets[key] || (buckets[key] = []);
      bucket.push(value);
    }
  }
  return buckets;
};
goog.array.toObject = function(arr, keyFunc, opt_obj) {
  var ret = {};
  goog.array.forEach(arr, function(element, index) {
    ret[keyFunc.call(opt_obj, element, index, arr)] = element;
  });
  return ret;
};
goog.array.range = function(startOrEnd, opt_end, opt_step) {
  var array = [];
  var start = 0;
  var end = startOrEnd;
  var step = opt_step || 1;
  if (opt_end !== undefined) {
    start = startOrEnd;
    end = opt_end;
  }
  if (step * (end - start) < 0) {
    return[];
  }
  if (step > 0) {
    for (var i = start;i < end;i += step) {
      array.push(i);
    }
  } else {
    for (var i = start;i > end;i += step) {
      array.push(i);
    }
  }
  return array;
};
goog.array.repeat = function(value, n) {
  var array = [];
  for (var i = 0;i < n;i++) {
    array[i] = value;
  }
  return array;
};
goog.array.flatten = function(var_args) {
  var result = [];
  for (var i = 0;i < arguments.length;i++) {
    var element = arguments[i];
    if (goog.isArray(element)) {
      result.push.apply(result, goog.array.flatten.apply(null, element));
    } else {
      result.push(element);
    }
  }
  return result;
};
goog.array.rotate = function(array, n) {
  goog.asserts.assert(array.length != null);
  if (array.length) {
    n %= array.length;
    if (n > 0) {
      goog.array.ARRAY_PROTOTYPE_.unshift.apply(array, array.splice(-n, n));
    } else {
      if (n < 0) {
        goog.array.ARRAY_PROTOTYPE_.push.apply(array, array.splice(0, -n));
      }
    }
  }
  return array;
};
goog.array.moveItem = function(arr, fromIndex, toIndex) {
  goog.asserts.assert(fromIndex >= 0 && fromIndex < arr.length);
  goog.asserts.assert(toIndex >= 0 && toIndex < arr.length);
  var removedItems = goog.array.ARRAY_PROTOTYPE_.splice.call(arr, fromIndex, 1);
  goog.array.ARRAY_PROTOTYPE_.splice.call(arr, toIndex, 0, removedItems[0]);
};
goog.array.zip = function(var_args) {
  if (!arguments.length) {
    return[];
  }
  var result = [];
  for (var i = 0;true;i++) {
    var value = [];
    for (var j = 0;j < arguments.length;j++) {
      var arr = arguments[j];
      if (i >= arr.length) {
        return result;
      }
      value.push(arr[i]);
    }
    result.push(value);
  }
};
goog.array.shuffle = function(arr, opt_randFn) {
  var randFn = opt_randFn || Math.random;
  for (var i = arr.length - 1;i > 0;i--) {
    var j = Math.floor(randFn() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};
goog.provide("goog.crypt");
goog.require("goog.array");
goog.require("goog.asserts");
goog.crypt.stringToByteArray = function(str) {
  var output = [], p = 0;
  for (var i = 0;i < str.length;i++) {
    var c = str.charCodeAt(i);
    while (c > 255) {
      output[p++] = c & 255;
      c >>= 8;
    }
    output[p++] = c;
  }
  return output;
};
goog.crypt.byteArrayToString = function(bytes) {
  var CHUNK_SIZE = 8192;
  if (bytes.length < CHUNK_SIZE) {
    return String.fromCharCode.apply(null, bytes);
  }
  var str = "";
  for (var i = 0;i < bytes.length;i += CHUNK_SIZE) {
    var chunk = goog.array.slice(bytes, i, i + CHUNK_SIZE);
    str += String.fromCharCode.apply(null, chunk);
  }
  return str;
};
goog.crypt.byteArrayToHex = function(array) {
  return goog.array.map(array, function(numByte) {
    var hexByte = numByte.toString(16);
    return hexByte.length > 1 ? hexByte : "0" + hexByte;
  }).join("");
};
goog.crypt.hexToByteArray = function(hexString) {
  goog.asserts.assert(hexString.length % 2 == 0, "Key string length must be multiple of 2");
  var arr = [];
  for (var i = 0;i < hexString.length;i += 2) {
    arr.push(parseInt(hexString.substring(i, i + 2), 16));
  }
  return arr;
};
goog.crypt.stringToUtf8ByteArray = function(str) {
  str = str.replace(/\r\n/g, "\n");
  var out = [], p = 0;
  for (var i = 0;i < str.length;i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else {
      if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else {
        out[p++] = c >> 12 | 224;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      }
    }
  }
  return out;
};
goog.crypt.utf8ByteArrayToString = function(bytes) {
  var out = [], pos = 0, c = 0;
  while (pos < bytes.length) {
    var c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else {
      if (c1 > 191 && c1 < 224) {
        var c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else {
        var c2 = bytes[pos++];
        var c3 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
  }
  return out.join("");
};
goog.crypt.xorByteArray = function(bytes1, bytes2) {
  goog.asserts.assert(bytes1.length == bytes2.length, "XOR array lengths must match");
  var result = [];
  for (var i = 0;i < bytes1.length;i++) {
    result.push(bytes1[i] ^ bytes2[i]);
  }
  return result;
};
goog.provide("goog.labs.userAgent.util");
goog.require("goog.string");
goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
  var navigator = goog.labs.userAgent.util.getNavigator_();
  if (navigator) {
    var userAgent = navigator.userAgent;
    if (userAgent) {
      return userAgent;
    }
  }
  return "";
};
goog.labs.userAgent.util.getNavigator_ = function() {
  return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function(opt_userAgent) {
  goog.labs.userAgent.util.userAgent_ = opt_userAgent || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function() {
  return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function(str) {
  var userAgent = goog.labs.userAgent.util.getUserAgent();
  return goog.string.contains(userAgent, str);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(str) {
  var userAgent = goog.labs.userAgent.util.getUserAgent();
  return goog.string.caseInsensitiveContains(userAgent, str);
};
goog.labs.userAgent.util.extractVersionTuples = function(userAgent) {
  var versionRegExp = new RegExp("(\\w[\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
  var data = [];
  var match;
  while (match = versionRegExp.exec(userAgent)) {
    data.push([match[1], match[2], match[3] || undefined]);
  }
  return data;
};
goog.provide("goog.labs.userAgent.browser");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.labs.userAgent.util");
goog.require("goog.string");
goog.labs.userAgent.browser.matchOpera_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR");
};
goog.labs.userAgent.browser.matchIE_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchFirefox_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Firefox");
};
goog.labs.userAgent.browser.matchSafari_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Safari") && !goog.labs.userAgent.util.matchUserAgent("Chrome") && !goog.labs.userAgent.util.matchUserAgent("CriOS") && !goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.browser.matchChrome_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS");
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Android") && !goog.labs.userAgent.util.matchUserAgent("Chrome") && !goog.labs.userAgent.util.matchUserAgent("CriOS");
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function() {
  return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function() {
  var userAgentString = goog.labs.userAgent.util.getUserAgent();
  if (goog.labs.userAgent.browser.isIE()) {
    return goog.labs.userAgent.browser.getIEVersion_(userAgentString);
  }
  if (goog.labs.userAgent.browser.isOpera()) {
    return goog.labs.userAgent.browser.getOperaVersion_(userAgentString);
  }
  var versionTuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);
  return goog.labs.userAgent.browser.getVersionFromTuples_(versionTuples);
};
goog.labs.userAgent.browser.isVersionOrHigher = function(version) {
  return goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), version) >= 0;
};
goog.labs.userAgent.browser.getIEVersion_ = function(userAgent) {
  var rv = /rv: *([\d\.]*)/.exec(userAgent);
  if (rv && rv[1]) {
    return rv[1];
  }
  var version = "";
  var msie = /MSIE +([\d\.]+)/.exec(userAgent);
  if (msie && msie[1]) {
    var tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
    if (msie[1] == "7.0") {
      if (tridentVersion && tridentVersion[1]) {
        switch(tridentVersion[1]) {
          case "4.0":
            version = "8.0";
            break;
          case "5.0":
            version = "9.0";
            break;
          case "6.0":
            version = "10.0";
            break;
          case "7.0":
            version = "11.0";
            break;
        }
      } else {
        version = "7.0";
      }
    } else {
      version = msie[1];
    }
  }
  return version;
};
goog.labs.userAgent.browser.getOperaVersion_ = function(userAgent) {
  var versionTuples = goog.labs.userAgent.util.extractVersionTuples(userAgent);
  var lastTuple = goog.array.peek(versionTuples);
  if (lastTuple[0] == "OPR" && lastTuple[1]) {
    return lastTuple[1];
  }
  return goog.labs.userAgent.browser.getVersionFromTuples_(versionTuples);
};
goog.labs.userAgent.browser.getVersionFromTuples_ = function(versionTuples) {
  goog.asserts.assert(versionTuples.length > 2, "Couldn't extract version tuple from user agent string");
  return versionTuples[2] && versionTuples[2][1] ? versionTuples[2][1] : "";
};
goog.provide("goog.labs.userAgent.engine");
goog.require("goog.array");
goog.require("goog.labs.userAgent.util");
goog.require("goog.string");
goog.labs.userAgent.engine.isPresto = function() {
  return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isWebKit = function() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit");
};
goog.labs.userAgent.engine.isGecko = function() {
  return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident();
};
goog.labs.userAgent.engine.getVersion = function() {
  var userAgentString = goog.labs.userAgent.util.getUserAgent();
  if (userAgentString) {
    var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);
    var engineTuple = tuples[1];
    if (engineTuple) {
      if (engineTuple[0] == "Gecko") {
        return goog.labs.userAgent.engine.getVersionForKey_(tuples, "Firefox");
      }
      return engineTuple[1];
    }
    var browserTuple = tuples[0];
    var info;
    if (browserTuple && (info = browserTuple[2])) {
      var match = /Trident\/([^\s;]+)/.exec(info);
      if (match) {
        return match[1];
      }
    }
  }
  return "";
};
goog.labs.userAgent.engine.isVersionOrHigher = function(version) {
  return goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), version) >= 0;
};
goog.labs.userAgent.engine.getVersionForKey_ = function(tuples, key) {
  var pair = goog.array.find(tuples, function(pair) {
    return key == pair[0];
  });
  return pair && pair[1] || "";
};
goog.provide("goog.userAgent");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.engine");
goog.require("goog.labs.userAgent.util");
goog.require("goog.string");
goog.define("goog.userAgent.ASSUME_IE", false);
goog.define("goog.userAgent.ASSUME_GECKO", false);
goog.define("goog.userAgent.ASSUME_WEBKIT", false);
goog.define("goog.userAgent.ASSUME_MOBILE_WEBKIT", false);
goog.define("goog.userAgent.ASSUME_OPERA", false);
goog.define("goog.userAgent.ASSUME_ANY_VERSION", false);
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigator = function() {
  return goog.global["navigator"] || null;
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.define("goog.userAgent.ASSUME_MAC", false);
goog.define("goog.userAgent.ASSUME_WINDOWS", false);
goog.define("goog.userAgent.ASSUME_LINUX", false);
goog.define("goog.userAgent.ASSUME_X11", false);
goog.define("goog.userAgent.ASSUME_ANDROID", false);
goog.define("goog.userAgent.ASSUME_IPHONE", false);
goog.define("goog.userAgent.ASSUME_IPAD", false);
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator()["appVersion"] || "", "X11");
  var ua = goog.userAgent.getUserAgentString();
  goog.userAgent.detectedAndroid_ = !!ua && goog.string.contains(ua, "Android");
  goog.userAgent.detectedIPhone_ = !!ua && goog.string.contains(ua, "iPhone");
  goog.userAgent.detectedIPad_ = !!ua && goog.string.contains(ua, "iPad");
};
if (!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_();
}
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.userAgent.detectedAndroid_;
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.userAgent.detectedIPhone_;
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.userAgent.detectedIPad_;
goog.userAgent.determineVersion_ = function() {
  var version = "", re;
  if (goog.userAgent.OPERA && goog.global["opera"]) {
    var operaVersion = goog.global["opera"].version;
    return goog.isFunction(operaVersion) ? operaVersion() : operaVersion;
  }
  if (goog.userAgent.GECKO) {
    re = /rv\:([^\);]+)(\)|;)/;
  } else {
    if (goog.userAgent.IE) {
      re = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
    } else {
      if (goog.userAgent.WEBKIT) {
        re = /WebKit\/(\S+)/;
      }
    }
  }
  if (re) {
    var arr = re.exec(goog.userAgent.getUserAgentString());
    version = arr ? arr[1] : "";
  }
  if (goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if (docMode > parseFloat(version)) {
      return String(docMode);
    }
  }
  return version;
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function(version) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[version] || (goog.userAgent.isVersionOrHigherCache_[version] = goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0);
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return goog.userAgent.IE && goog.userAgent.DOCUMENT_MODE >= documentMode;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var doc = goog.global["document"];
  if (!doc || !goog.userAgent.IE) {
    return undefined;
  }
  var mode = goog.userAgent.getDocumentMode_();
  return mode || (doc["compatMode"] == "CSS1Compat" ? parseInt(goog.userAgent.VERSION, 10) : 5);
}();
goog.provide("goog.crypt.base64");
goog.require("goog.crypt");
goog.require("goog.userAgent");
goog.crypt.base64.byteToCharMap_ = null;
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.byteToCharMapWebSafe_ = null;
goog.crypt.base64.charToByteMapWebSafe_ = null;
goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.";
goog.crypt.base64.HAS_NATIVE_SUPPORT = goog.userAgent.GECKO || goog.userAgent.WEBKIT || goog.userAgent.OPERA || typeof goog.global.atob == "function";
goog.crypt.base64.encodeByteArray = function(input, opt_webSafe) {
  if (!goog.isArrayLike(input)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  goog.crypt.base64.init_();
  var byteToCharMap = opt_webSafe ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_;
  var output = [];
  for (var i = 0;i < input.length;i += 3) {
    var byte1 = input[i];
    var haveByte2 = i + 1 < input.length;
    var byte2 = haveByte2 ? input[i + 1] : 0;
    var haveByte3 = i + 2 < input.length;
    var byte3 = haveByte3 ? input[i + 2] : 0;
    var outByte1 = byte1 >> 2;
    var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
    var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
    var outByte4 = byte3 & 63;
    if (!haveByte3) {
      outByte4 = 64;
      if (!haveByte2) {
        outByte3 = 64;
      }
    }
    output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
  }
  return output.join("");
};
goog.crypt.base64.encodeString = function(input, opt_webSafe) {
  if (goog.crypt.base64.HAS_NATIVE_SUPPORT && !opt_webSafe) {
    return goog.global.btoa(input);
  }
  return goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(input), opt_webSafe);
};
goog.crypt.base64.decodeString = function(input, opt_webSafe) {
  if (goog.crypt.base64.HAS_NATIVE_SUPPORT && !opt_webSafe) {
    return goog.global.atob(input);
  }
  return goog.crypt.byteArrayToString(goog.crypt.base64.decodeStringToByteArray(input, opt_webSafe));
};
goog.crypt.base64.decodeStringToByteArray = function(input, opt_webSafe) {
  goog.crypt.base64.init_();
  var charToByteMap = opt_webSafe ? goog.crypt.base64.charToByteMapWebSafe_ : goog.crypt.base64.charToByteMap_;
  var output = [];
  for (var i = 0;i < input.length;) {
    var byte1 = charToByteMap[input.charAt(i++)];
    var haveByte2 = i < input.length;
    var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
    ++i;
    var haveByte3 = i < input.length;
    var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
    ++i;
    var haveByte4 = i < input.length;
    var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
    ++i;
    if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
      throw Error();
    }
    var outByte1 = byte1 << 2 | byte2 >> 4;
    output.push(outByte1);
    if (byte3 != 64) {
      var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
      output.push(outByte2);
      if (byte4 != 64) {
        var outByte3 = byte3 << 6 & 192 | byte4;
        output.push(outByte3);
      }
    }
  }
  return output;
};
goog.crypt.base64.init_ = function() {
  if (!goog.crypt.base64.byteToCharMap_) {
    goog.crypt.base64.byteToCharMap_ = {};
    goog.crypt.base64.charToByteMap_ = {};
    goog.crypt.base64.byteToCharMapWebSafe_ = {};
    goog.crypt.base64.charToByteMapWebSafe_ = {};
    for (var i = 0;i < goog.crypt.base64.ENCODED_VALS.length;i++) {
      goog.crypt.base64.byteToCharMap_[i] = goog.crypt.base64.ENCODED_VALS.charAt(i);
      goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[i]] = i;
      goog.crypt.base64.byteToCharMapWebSafe_[i] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(i);
      goog.crypt.base64.charToByteMapWebSafe_[goog.crypt.base64.byteToCharMapWebSafe_[i]] = i;
    }
  }
};
goog.provide("fb.constants");
var NODE_CLIENT = false;
var CLIENT_VERSION = "0.0.0";
goog.provide("fb.core.util");
goog.require("fb.constants");
goog.require("fb.core.RepoInfo");
goog.require("fb.core.storage");
goog.require("fb.util.json");
goog.require("goog.crypt.base64");
fb.core.util.LUIDGenerator = function() {
  var id = 1;
  return function() {
    return id++;
  };
}();
fb.core.util.assert = function(assertion, message) {
  if (!assertion) {
    throw new Error("Firebase INTERNAL ASSERT FAILED:" + message);
  }
};
fb.core.util.assertWeak = function(assertion, message) {
  if (!assertion) {
    fb.core.util.error(message);
  }
};
fb.core.util.base64Encode = function(str) {
  var utf8Bytes = fb.util.utf8.stringToByteArray(str);
  return goog.crypt.base64.encodeByteArray(utf8Bytes, true);
};
fb.core.util.base64DecodeIfNativeSupport = function(str) {
  try {
    if (NODE_CLIENT) {
      return(new Buffer(str, "base64")).toString("utf8");
    } else {
      if (typeof atob !== "undefined") {
        return atob(str);
      }
    }
  } catch (e) {
    fb.core.util.log("base64DecodeIfNativeSupport failed: ", e);
  }
  return null;
};
fb.core.util.sha1 = function(str) {
  return sjclHashToBase64(str);
};
fb.core.util.buildLogMessage_ = function(var_args) {
  var message = "";
  for (var i = 0;i < arguments.length;i++) {
    if (goog.isArrayLike(arguments[i])) {
      message += fb.core.util.buildLogMessage_.apply(null, arguments[i]);
    } else {
      if (typeof arguments[i] === "object") {
        message += fb.util.json.stringify(arguments[i]);
      } else {
        message += arguments[i];
      }
    }
    message += " ";
  }
  return message;
};
fb.core.util.logger = null;
fb.core.util.firstLog_ = true;
fb.core.util.log = function(var_args) {
  if (fb.core.util.firstLog_ === true) {
    fb.core.util.firstLog_ = false;
    if (fb.core.util.logger === null && fb.core.storage.SessionStorage.get("logging_enabled") === true) {
      Firebase.enableLogging(true);
    }
  }
  if (fb.core.util.logger) {
    var message = fb.core.util.buildLogMessage_.apply(null, arguments);
    fb.core.util.logger(message);
  }
};
fb.core.util.logWrapper = function(prefix) {
  return function() {
    fb.core.util.log(prefix, arguments);
  };
};
fb.core.util.error = function(var_args) {
  if (typeof console !== "undefined") {
    var message = "FIREBASE INTERNAL ERROR: " + fb.core.util.buildLogMessage_.apply(null, arguments);
    if (typeof console.error !== "undefined") {
      console.error(message);
    } else {
      console.log(message);
    }
  }
};
fb.core.util.fatal = function(var_args) {
  var message = fb.core.util.buildLogMessage_.apply(null, arguments);
  throw new Error("FIREBASE FATAL ERROR: " + message);
};
fb.core.util.warn = function(var_args) {
  if (typeof console !== "undefined") {
    var message = "FIREBASE WARNING: " + fb.core.util.buildLogMessage_.apply(null, arguments);
    if (typeof console.warn !== "undefined") {
      console.warn(message);
    } else {
      console.log(message);
    }
  }
};
fb.core.util.warnIfPageIsSecure = function() {
  if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) {
    fb.core.util.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
  }
};
fb.core.util.parseURL = function(dataURL) {
  var host = "", namespace = "", secure = true, pathString = "";
  if (goog.isString(dataURL)) {
    var colonInd = dataURL.indexOf("//");
    if (colonInd >= 0) {
      var scheme = dataURL.substring(0, colonInd - 1);
      dataURL = dataURL.substring(colonInd + 2);
    }
    var slashInd = dataURL.indexOf("/");
    if (slashInd === -1) {
      slashInd = dataURL.length;
    }
    host = dataURL.substring(0, slashInd);
    dataURL = dataURL.substring(slashInd + 1);
    var parts = host.split(".");
    if (parts.length == 3) {
      colonInd = parts[2].indexOf(":");
      if (colonInd >= 0) {
        secure = scheme === "https" || scheme === "wss";
      } else {
        secure = true;
      }
      var domain = parts[1];
      if (domain === "firebase") {
        fb.core.util.fatal(host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
      } else {
        namespace = parts[0];
        pathString = fb.core.util.decodePath("/" + dataURL);
      }
      namespace = namespace.toLowerCase();
    } else {
      fb.core.util.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
    }
  }
  if (!secure) {
    fb.core.util.warnIfPageIsSecure();
  }
  var webSocketOnly = scheme === "ws" || scheme === "wss";
  return{repoInfo:new fb.core.RepoInfo(host, secure, namespace, webSocketOnly), path:new fb.core.util.Path(pathString)};
};
fb.core.util.decodePath = function(pathString) {
  var pathStringDecoded = "";
  var pieces = pathString.split("/");
  for (var i = 0;i < pieces.length;i++) {
    if (pieces[i].length > 0) {
      var piece = pieces[i];
      try {
        piece = goog.string.urlDecode(piece);
      } catch (e) {
      }
      pathStringDecoded += "/" + piece;
    }
  }
  return pathStringDecoded;
};
fb.core.util.isInvalidJSONNumber = function(data) {
  return goog.isNumber(data) && (data != data || data == Number.POSITIVE_INFINITY || data == Number.NEGATIVE_INFINITY);
};
fb.core.util.executeWhenDOMReady = function(fn) {
  if (NODE_CLIENT || document.readyState === "complete") {
    fn();
  } else {
    var called = false;
    var wrappedFn = function() {
      if (!document.body) {
        setTimeout(wrappedFn, Math.floor(10));
        return;
      }
      if (!called) {
        called = true;
        fn();
      }
    };
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", wrappedFn, false);
      window.addEventListener("load", wrappedFn, false);
    } else {
      if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "complete") {
            wrappedFn();
          }
        });
        window.attachEvent("onload", wrappedFn);
      }
    }
  }
};
fb.core.util.priorityCompare = function(a, b) {
  if (a !== b) {
    if (a === null) {
      return-1;
    } else {
      if (b === null) {
        return 1;
      }
    }
    if (typeof a !== typeof b) {
      return typeof a === "number" ? -1 : 1;
    } else {
      return a > b ? 1 : -1;
    }
  }
  return 0;
};
fb.core.util.nameCompare = function(a, b) {
  if (a === b) {
    return 0;
  } else {
    var aAsInt = fb.core.util.tryParseInt(a), bAsInt = fb.core.util.tryParseInt(b);
    if (aAsInt !== null) {
      if (bAsInt !== null) {
        return aAsInt - bAsInt == 0 ? a.length - b.length : aAsInt - bAsInt;
      } else {
        return-1;
      }
    } else {
      if (bAsInt !== null) {
        return 1;
      } else {
        return a < b ? -1 : 1;
      }
    }
  }
};
fb.core.util.requireKey = function(key, obj) {
  if (obj && key in obj) {
    return obj[key];
  } else {
    throw new Error("Missing required key (" + key + ") in object: " + fb.util.json.stringify(obj));
  }
};
fb.core.util.ObjectToUniqueKey = function(obj) {
  if (typeof obj !== "object" || obj === null) {
    return fb.util.json.stringify(obj);
  }
  var keys = [];
  for (var k in obj) {
    keys.push(k);
  }
  keys.sort();
  var key = "{";
  for (var i = 0;i < keys.length;i++) {
    if (i !== 0) {
      key += ",";
    }
    key += fb.util.json.stringify(keys[i]);
    key += ":";
    key += fb.core.util.ObjectToUniqueKey(obj[keys[i]]);
  }
  key += "}";
  return key;
};
fb.core.util.splitStringBySize = function(str, segsize) {
  if (str.length <= segsize) {
    return[str];
  }
  var dataSegs = [];
  for (var c = 0;c < str.length;c += segsize) {
    if (c + segsize > str) {
      dataSegs.push(str.substring(c, str.length));
    } else {
      dataSegs.push(str.substring(c, c + segsize));
    }
  }
  return dataSegs;
};
fb.core.util.each = function(obj, fn) {
  if (goog.isArray(obj)) {
    for (var i = 0;i < obj.length;++i) {
      fn(i, obj[i]);
    }
  } else {
    goog.object.forEach(obj, fn);
  }
};
fb.core.util.bindCallback = function(callback, opt_context) {
  return opt_context ? goog.bind(callback, opt_context) : callback;
};
fb.core.util.doubleToIEEE754String = function(v) {
  fb.core.util.assert(!fb.core.util.isInvalidJSONNumber(v), "Invalid JSON number");
  var ebits = 11, fbits = 52;
  var bias = (1 << ebits - 1) - 1, s, e, f, ln, i, bits, str, bytes;
  if (v === 0) {
    e = 0;
    f = 0;
    s = 1 / v === -Infinity ? 1 : 0;
  } else {
    s = v < 0;
    v = Math.abs(v);
    if (v >= Math.pow(2, 1 - bias)) {
      ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
      e = ln + bias;
      f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
    } else {
      e = 0;
      f = Math.round(v / Math.pow(2, 1 - bias - fbits));
    }
  }
  bits = [];
  for (i = fbits;i;i -= 1) {
    bits.push(f % 2 ? 1 : 0);
    f = Math.floor(f / 2);
  }
  for (i = ebits;i;i -= 1) {
    bits.push(e % 2 ? 1 : 0);
    e = Math.floor(e / 2);
  }
  bits.push(s ? 1 : 0);
  bits.reverse();
  str = bits.join("");
  var hexByteString = "";
  for (i = 0;i < 64;i += 8) {
    var hexByte = parseInt(str.substr(i, 8), 2).toString(16);
    if (hexByte.length === 1) {
      hexByte = "0" + hexByte;
    }
    hexByteString = hexByteString + hexByte;
  }
  return hexByteString.toLowerCase();
};
fb.core.util.isChromeExtensionContentScript = function() {
  return!!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
};
fb.core.util.isWindowsStoreApp = function() {
  return typeof Windows === "object" && typeof Windows.UI === "object";
};
fb.core.util.errorForServerCode = function(code) {
  var reason = "Unknown Error";
  if (code === "too_big") {
    reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
  } else {
    if (code == "permission_denied") {
      reason = "Client doesn't have permission to access the desired data.";
    } else {
      if (code == "unavailable") {
        reason = "The service is unavailable";
      }
    }
  }
  var error = new Error(code + ": " + reason);
  error.code = code.toUpperCase();
  return error;
};
fb.core.util.INTEGER_REGEXP_ = new RegExp("^-?\\d{1,10}$");
fb.core.util.tryParseInt = function(str) {
  if (fb.core.util.INTEGER_REGEXP_.test(str)) {
    var intVal = Number(str);
    if (intVal >= -2147483648 && intVal <= 2147483647) {
      return intVal;
    }
  }
  return null;
};
fb.core.util.exceptionGuard = function(fn) {
  try {
    fn();
  } catch (e) {
    setTimeout(function() {
      throw e;
    }, Math.floor(0));
  }
};
goog.provide("fb.core.snap.LeafNode");
goog.require("fb.core.util");
fb.core.snap.LeafNode = function(value, opt_priority) {
  this.value_ = value;
  fb.core.util.assert(this.value_ !== null, "LeafNode shouldn't be created with null value.");
  this.priority_ = typeof opt_priority !== "undefined" ? opt_priority : null;
};
fb.core.snap.LeafNode.prototype.isLeafNode = function() {
  return true;
};
fb.core.snap.LeafNode.prototype.getPriority = function() {
  return this.priority_;
};
fb.core.snap.LeafNode.prototype.updatePriority = function(newPriority) {
  return new fb.core.snap.LeafNode(this.value_, newPriority);
};
fb.core.snap.LeafNode.prototype.updateValue = function(newValue) {
  return new fb.core.snap.LeafNode(newValue, this.priority_);
};
fb.core.snap.LeafNode.prototype.getImmediateChild = function(childName) {
  return fb.core.snap.EMPTY_NODE;
};
fb.core.snap.LeafNode.prototype.getChild = function(path) {
  return path.getFront() === null ? this : fb.core.snap.EMPTY_NODE;
};
fb.core.snap.LeafNode.prototype.getPredecessorChildName = function(childName, childNode) {
  return null;
};
fb.core.snap.LeafNode.prototype.updateImmediateChild = function(childName, newChildNode) {
  return(new fb.core.snap.ChildrenNode).updateImmediateChild(childName, newChildNode).updatePriority(this.priority_);
};
fb.core.snap.LeafNode.prototype.updateChild = function(path, newChildNode) {
  var front = path.getFront();
  if (front === null) {
    return newChildNode;
  }
  return this.updateImmediateChild(front, fb.core.snap.EMPTY_NODE.updateChild(path.popFront(), newChildNode));
};
fb.core.snap.LeafNode.prototype.isEmpty = function() {
  return false;
};
fb.core.snap.LeafNode.prototype.numChildren = function() {
  return 0;
};
fb.core.snap.LeafNode.prototype.val = function(opt_exportFormat) {
  if (opt_exportFormat && this.getPriority() !== null) {
    return{".value":this.getValue(), ".priority":this.getPriority()};
  } else {
    return this.getValue();
  }
};
fb.core.snap.LeafNode.prototype.hash = function() {
  var toHash = "";
  if (this.getPriority() !== null) {
    toHash += "priority:" + fb.core.snap.priorityHashText(this.getPriority()) + ":";
  }
  var type = typeof this.value_;
  toHash += type + ":";
  if (type === "number") {
    toHash += fb.core.util.doubleToIEEE754String((this.value_));
  } else {
    toHash += this.value_;
  }
  return fb.core.util.sha1(toHash);
};
fb.core.snap.LeafNode.prototype.getValue = function() {
  return this.value_;
};
if (goog.DEBUG) {
  fb.core.snap.LeafNode.prototype.toString = function() {
    if (typeof this.value_ === "string") {
      return(this.value_);
    } else {
      return'"' + this.value_ + '"';
    }
  };
}
;goog.provide("fb.core.snap.comparators");
fb.core.snap.NAME_AND_PRIORITY_COMPARATOR = function(left, right) {
  return fb.core.util.priorityCompare(left.priority, right.priority) || fb.core.util.nameCompare(left.name, right.name);
};
fb.core.snap.NAME_ONLY_COMPARATOR = function(left, right) {
  return fb.core.util.nameCompare(left.name, right.name);
};
fb.core.snap.NAME_COMPARATOR = function(left, right) {
  return fb.core.util.nameCompare(left, right);
};
goog.provide("fb.core.snap.ChildrenNode");
goog.require("fb.core.snap.comparators");
goog.require("fb.core.util");
goog.require("fb.core.util.SortedMap");
fb.core.snap.ChildrenNode = function(opt_children, opt_priority) {
  this.children_ = opt_children || new fb.core.util.SortedMap(fb.core.snap.NAME_COMPARATOR);
  this.priority_ = typeof opt_priority !== "undefined" ? opt_priority : null;
};
fb.core.snap.ChildrenNode.prototype.isLeafNode = function() {
  return false;
};
fb.core.snap.ChildrenNode.prototype.getPriority = function() {
  return this.priority_;
};
fb.core.snap.ChildrenNode.prototype.updatePriority = function(newPriority) {
  return new fb.core.snap.ChildrenNode(this.children_, newPriority);
};
fb.core.snap.ChildrenNode.prototype.updateValue = function(newValue) {
  return new fb.core.snap.LeafNode(newValue, this.priority_);
};
fb.core.snap.ChildrenNode.prototype.updateImmediateChild = function(childName, newChildNode) {
  var newChildren = this.children_.remove(childName);
  if (newChildNode && newChildNode.isEmpty()) {
    newChildNode = null;
  }
  if (newChildNode !== null) {
    newChildren = newChildren.insert(childName, newChildNode);
  }
  if (newChildNode && newChildNode.getPriority() !== null) {
    return new fb.core.snap.SortedChildrenNode(newChildren, null, this.priority_);
  } else {
    return new fb.core.snap.ChildrenNode(newChildren, this.priority_);
  }
};
fb.core.snap.ChildrenNode.prototype.updateChild = function(path, newChildNode) {
  var front = path.getFront();
  if (front === null) {
    return newChildNode;
  }
  var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
  return this.updateImmediateChild(front, newImmediateChild);
};
fb.core.snap.ChildrenNode.prototype.isEmpty = function() {
  return this.children_.isEmpty();
};
fb.core.snap.ChildrenNode.prototype.numChildren = function() {
  return this.children_.count();
};
fb.core.snap.ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
fb.core.snap.ChildrenNode.prototype.val = function(opt_exportFormat) {
  if (this.isEmpty()) {
    return null;
  }
  var obj = {};
  var numKeys = 0, maxKey = 0, allIntegerKeys = true;
  this.forEachChild(function(key, childNode) {
    obj[key] = childNode.val(opt_exportFormat);
    numKeys++;
    if (allIntegerKeys && fb.core.snap.ChildrenNode.INTEGER_REGEXP_.test(key)) {
      maxKey = Math.max(maxKey, Number(key));
    } else {
      allIntegerKeys = false;
    }
  });
  if (!opt_exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
    var array = [];
    for (var key in obj) {
      array[key] = obj[key];
    }
    return array;
  } else {
    if (opt_exportFormat && this.getPriority() !== null) {
      obj[".priority"] = this.getPriority();
    }
    return obj;
  }
};
fb.core.snap.ChildrenNode.prototype.hash = function() {
  var toHash = "";
  if (this.getPriority() !== null) {
    toHash += "priority:" + fb.core.snap.priorityHashText(this.getPriority()) + ":";
  }
  this.forEachChild(function(key, childNode) {
    var childHash = childNode.hash();
    if (childHash !== "") {
      toHash += ":" + key + ":" + childHash;
    }
  });
  return toHash === "" ? "" : fb.core.util.sha1(toHash);
};
fb.core.snap.ChildrenNode.prototype.getImmediateChild = function(childName) {
  var child = this.children_.get(childName);
  return child === null ? fb.core.snap.EMPTY_NODE : child;
};
fb.core.snap.ChildrenNode.prototype.getChild = function(path) {
  var front = path.getFront();
  if (front === null) {
    return this;
  }
  return this.getImmediateChild(front).getChild(path.popFront());
};
fb.core.snap.ChildrenNode.prototype.getPredecessorChildName = function(childName, childNode) {
  return this.children_.getPredecessorKey(childName);
};
fb.core.snap.ChildrenNode.prototype.getFirstChildName = function() {
  return this.children_.minKey();
};
fb.core.snap.ChildrenNode.prototype.getLastChildName = function() {
  return this.children_.maxKey();
};
fb.core.snap.ChildrenNode.prototype.forEachChild = function(action) {
  return this.children_.inorderTraversal(action);
};
fb.core.snap.ChildrenNode.prototype.forEachChildReverse = function(action) {
  return this.children_.reverseTraversal(action);
};
fb.core.snap.ChildrenNode.prototype.getIterator = function() {
  return this.children_.getIterator();
};
if (goog.DEBUG) {
  fb.core.snap.ChildrenNode.prototype.toString = function() {
    var s = "{";
    var first = true;
    this.forEachChild(function(key, value) {
      if (first) {
        first = false;
      } else {
        s += ", ";
      }
      s += '"' + key + '" : ' + value.toString();
    });
    s += "}";
    return s;
  };
}
fb.core.snap.EMPTY_NODE = new fb.core.snap.ChildrenNode;
goog.provide("fb.core.snap.SortedChildrenNode");
goog.require("fb.core.snap.comparators");
goog.require("fb.core.util.SortedMap");
fb.core.snap.SortedChildrenNode = function(children, sortedChildren, opt_priority) {
  fb.core.snap.ChildrenNode.call(this, children, opt_priority);
  if (sortedChildren === null) {
    sortedChildren = new fb.core.util.SortedMap(fb.core.snap.NAME_AND_PRIORITY_COMPARATOR);
    children.inorderTraversal(function(name, node) {
      sortedChildren = sortedChildren.insert({name:name, priority:node.getPriority()}, node);
    });
  }
  this.sortedChildren_ = sortedChildren;
};
goog.inherits(fb.core.snap.SortedChildrenNode, fb.core.snap.ChildrenNode);
fb.core.snap.SortedChildrenNode.prototype.updateImmediateChild = function(childName, newChildNode) {
  var oldChildNode = this.getImmediateChild(childName);
  var newChildren = this.children_, newSortedChildren = this.sortedChildren_;
  if (oldChildNode !== null) {
    newChildren = newChildren.remove(childName);
    newSortedChildren = newSortedChildren.remove({name:childName, priority:oldChildNode.getPriority()});
  }
  if (newChildNode && newChildNode.isEmpty()) {
    newChildNode = null;
  }
  if (newChildNode !== null) {
    newChildren = newChildren.insert(childName, newChildNode);
    newSortedChildren = newSortedChildren.insert({name:childName, priority:newChildNode.getPriority()}, newChildNode);
  }
  return new fb.core.snap.SortedChildrenNode(newChildren, newSortedChildren, this.getPriority());
};
fb.core.snap.SortedChildrenNode.prototype.getPredecessorChildName = function(childName, childNode) {
  var pred = this.sortedChildren_.getPredecessorKey({name:childName, priority:childNode.getPriority()});
  return pred ? pred.name : null;
};
fb.core.snap.SortedChildrenNode.prototype.forEachChild = function(action) {
  return this.sortedChildren_.inorderTraversal(function(key, value) {
    return action(key.name, value);
  });
};
fb.core.snap.SortedChildrenNode.prototype.forEachChildReverse = function(action) {
  return this.sortedChildren_.reverseTraversal(function(key, value) {
    return action(key.name, value);
  });
};
fb.core.snap.SortedChildrenNode.prototype.getIterator = function() {
  return this.sortedChildren_.getIterator(function(key, value) {
    return{key:key.name, value:value};
  });
};
fb.core.snap.SortedChildrenNode.prototype.getFirstChildName = function() {
  return this.sortedChildren_.isEmpty() ? null : this.sortedChildren_.minKey().name;
};
fb.core.snap.SortedChildrenNode.prototype.getLastChildName = function() {
  return this.sortedChildren_.isEmpty() ? null : this.sortedChildren_.maxKey().name;
};
goog.provide("fb.core.snap");
goog.require("fb.core.snap.ChildrenNode");
goog.require("fb.core.snap.LeafNode");
goog.require("fb.core.snap.SortedChildrenNode");
var USE_HINZE = true;
fb.core.snap.NodeFromJSON = function(json, opt_priority) {
  if (json === null) {
    return fb.core.snap.EMPTY_NODE;
  }
  var priority = null;
  if (typeof json === "object" && ".priority" in json) {
    priority = json[".priority"];
  } else {
    if (typeof opt_priority !== "undefined") {
      priority = opt_priority;
    }
  }
  fb.core.util.assert(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
  if (typeof json === "object" && ".value" in json && json[".value"] !== null) {
    json = json[".value"];
  }
  if (typeof json !== "object" || ".sv" in json) {
    var jsonLeaf = (json);
    return new fb.core.snap.LeafNode(jsonLeaf, priority);
  }
  if (!(json instanceof Array) && USE_HINZE) {
    var children = [];
    var childData = {};
    var childrenHavePriority = false;
    var hinzeJsonObj = (json);
    fb.core.util.each(hinzeJsonObj, function(child, key) {
      if (typeof key !== "string" || key.substring(0, 1) !== ".") {
        var childNode = fb.core.snap.NodeFromJSON(hinzeJsonObj[key]);
        if (!childNode.isEmpty()) {
          childrenHavePriority = childrenHavePriority || childNode.getPriority() !== null;
          children.push({name:key, priority:childNode.getPriority()});
          childData[key] = childNode;
        }
      }
    });
    var childSet = fb.core.snap.buildChildSet(children, childData, false);
    if (childrenHavePriority) {
      var sortedChildSet = fb.core.snap.buildChildSet(children, childData, true);
      return new fb.core.snap.SortedChildrenNode(childSet, sortedChildSet, priority);
    } else {
      return new fb.core.snap.ChildrenNode(childSet, priority);
    }
  } else {
    var node = fb.core.snap.EMPTY_NODE;
    var jsonObj = (json);
    goog.object.forEach(jsonObj, function(childData, key) {
      if (fb.util.obj.contains(jsonObj, key)) {
        if (key.substring(0, 1) !== ".") {
          var childNode = fb.core.snap.NodeFromJSON(childData);
          if (childNode.isLeafNode() || !childNode.isEmpty()) {
            node = node.updateImmediateChild(key, childNode);
          }
        }
      }
    });
    return node.updatePriority(priority);
  }
};
var LOG_2 = Math.log(2);
fb.core.snap.Base12Num = function(length) {
  var logBase2 = function(num) {
    return parseInt(Math.log(num) / LOG_2, 10);
  };
  var bitMask = function(bits) {
    return parseInt(Array(bits + 1).join("1"), 2);
  };
  this.count = logBase2(length + 1);
  this.current_ = this.count - 1;
  var mask = bitMask(this.count);
  this.bits_ = length + 1 & mask;
};
fb.core.snap.Base12Num.prototype.nextBitIsOne = function() {
  var result = !(this.bits_ & 1 << this.current_);
  this.current_--;
  return result;
};
fb.core.snap.buildChildSet = function(childList, childData, usePriority) {
  var cmp = usePriority ? fb.core.snap.NAME_AND_PRIORITY_COMPARATOR : fb.core.snap.NAME_ONLY_COMPARATOR;
  childList.sort(cmp);
  var buildBalancedTree = function(low, high) {
    var length = high - low;
    if (length == 0) {
      return null;
    } else {
      if (length == 1) {
        var name = childList[low].name;
        var key = usePriority ? childList[low] : name;
        return new fb.LLRBNode(key, childData[name], fb.LLRBNode.BLACK, null, null);
      } else {
        var middle = parseInt(length / 2, 10) + low;
        var left = buildBalancedTree(low, middle);
        var right = buildBalancedTree(middle + 1, high);
        name = childList[middle].name;
        key = usePriority ? childList[middle] : name;
        return new fb.LLRBNode(key, childData[name], fb.LLRBNode.BLACK, left, right);
      }
    }
  };
  var buildFrom12Array = function(base12) {
    var node = null;
    var root = null;
    var index = childList.length;
    var buildPennant = function(chunkSize, color) {
      var low = index - chunkSize;
      var high = index;
      index -= chunkSize;
      var childTree = buildBalancedTree(low + 1, high);
      var pennantName = childList[low].name;
      var key = usePriority ? childList[low] : pennantName;
      attachPennant(new fb.LLRBNode(key, childData[pennantName], color, null, childTree));
    };
    var attachPennant = function(pennant) {
      if (node) {
        node.left = pennant;
        node = pennant;
      } else {
        root = pennant;
        node = pennant;
      }
    };
    for (var i = 0;i < base12.count;++i) {
      var isOne = base12.nextBitIsOne();
      var chunkSize = Math.pow(2, base12.count - (i + 1));
      if (isOne) {
        buildPennant(chunkSize, fb.LLRBNode.BLACK);
      } else {
        buildPennant(chunkSize, fb.LLRBNode.BLACK);
        buildPennant(chunkSize, fb.LLRBNode.RED);
      }
    }
    return root;
  };
  var base12 = new fb.core.snap.Base12Num(childList.length);
  var root = buildFrom12Array(base12);
  cmp = usePriority ? fb.core.snap.NAME_AND_PRIORITY_COMPARATOR : fb.core.snap.NAME_COMPARATOR;
  if (root !== null) {
    return new fb.core.util.SortedMap(cmp, root);
  } else {
    return new fb.core.util.SortedMap(cmp);
  }
};
fb.core.snap.priorityHashText = function(priority) {
  if (typeof priority === "number") {
    return "number:" + fb.core.util.doubleToIEEE754String(priority);
  } else {
    return "string:" + priority;
  }
};
goog.provide("fb.api.DataSnapshot");
goog.require("fb.core.snap");
goog.require("fb.core.util.SortedMap");
goog.require("fb.core.util.validation");
fb.api.DataSnapshot = function(node, ref) {
  this.node_ = node;
  this.ref_ = ref;
};
fb.api.DataSnapshot.prototype.val = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.val", 0, 0, arguments.length);
  return this.node_.val();
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "val", fb.api.DataSnapshot.prototype.val);
fb.api.DataSnapshot.prototype.exportVal = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
  return this.node_.val(true);
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "exportVal", fb.api.DataSnapshot.prototype.exportVal);
fb.api.DataSnapshot.prototype.child = function(childPathString) {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.child", 0, 1, arguments.length);
  if (goog.isNumber(childPathString)) {
    childPathString = String(childPathString);
  }
  fb.core.util.validation.validatePathString("Firebase.DataSnapshot.child", 1, childPathString, false);
  var childPath = new fb.core.util.Path(childPathString);
  var childRef = this.ref_.child(childPath);
  return new fb.api.DataSnapshot(this.node_.getChild(childPath), childRef);
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "child", fb.api.DataSnapshot.prototype.child);
fb.api.DataSnapshot.prototype.hasChild = function(childPathString) {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
  fb.core.util.validation.validatePathString("Firebase.DataSnapshot.hasChild", 1, childPathString, false);
  var childPath = new fb.core.util.Path(childPathString);
  return!this.node_.getChild(childPath).isEmpty();
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "hasChild", fb.api.DataSnapshot.prototype.hasChild);
fb.api.DataSnapshot.prototype.getPriority = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
  return this.node_.getPriority();
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "getPriority", fb.api.DataSnapshot.prototype.getPriority);
fb.api.DataSnapshot.prototype.forEach = function(action) {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
  fb.util.validation.validateCallback("Firebase.DataSnapshot.forEach", 1, action, false);
  if (this.node_.isLeafNode()) {
    return false;
  }
  var self = this;
  return this.node_.forEachChild(function(key, node) {
    return action(new fb.api.DataSnapshot(node, self.ref_.child(key)));
  });
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "forEach", fb.api.DataSnapshot.prototype.forEach);
fb.api.DataSnapshot.prototype.hasChildren = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
  if (this.node_.isLeafNode()) {
    return false;
  } else {
    return!this.node_.isEmpty();
  }
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "hasChildren", fb.api.DataSnapshot.prototype.hasChildren);
fb.api.DataSnapshot.prototype.name = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.name", 0, 0, arguments.length);
  return this.ref_.name();
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "name", fb.api.DataSnapshot.prototype.name);
fb.api.DataSnapshot.prototype.numChildren = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
  return this.node_.numChildren();
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "numChildren", fb.api.DataSnapshot.prototype.numChildren);
fb.api.DataSnapshot.prototype.ref = function() {
  fb.util.validation.validateArgCount("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
  return this.ref_;
};
goog.exportProperty(fb.api.DataSnapshot.prototype, "ref", fb.api.DataSnapshot.prototype.ref);
goog.provide("fb.core.util.EventEmitter");
goog.require("fb.core.util");
fb.core.util.EventEmitter = function(allowedEvents) {
  fb.core.util.assert(goog.isArray(allowedEvents) && allowedEvents.length > 0, "Requires a non-empty array");
  this.allowedEvents_ = allowedEvents;
  this.listeners_ = {};
};
fb.core.util.EventEmitter.prototype.getInitialEvent = goog.abstractMethod;
fb.core.util.EventEmitter.prototype.trigger = function(eventType, var_args) {
  var listeners = this.listeners_[eventType] || [];
  for (var i = 0;i < listeners.length;i++) {
    listeners[i].callback.apply(listeners[i].context, Array.prototype.slice.call(arguments, 1));
  }
};
fb.core.util.EventEmitter.prototype.on = function(eventType, callback, context) {
  this.validateEventType_(eventType);
  this.listeners_[eventType] = this.listeners_[eventType] || [];
  this.listeners_[eventType].push({callback:callback, context:context});
  var eventData = this.getInitialEvent(eventType);
  if (eventData) {
    callback.apply(context, eventData);
  }
};
fb.core.util.EventEmitter.prototype.off = function(eventType, callback, context) {
  this.validateEventType_(eventType);
  var listeners = this.listeners_[eventType] || [];
  for (var i = 0;i < listeners.length;i++) {
    if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
      listeners.splice(i, 1);
      return;
    }
  }
};
fb.core.util.EventEmitter.prototype.validateEventType_ = function(eventType) {
  fb.core.util.assert(goog.array.find(this.allowedEvents_, function(et) {
    return et === eventType;
  }), "Unknown event: " + eventType);
};
goog.provide("fb.core.util.VisibilityMonitor");
goog.require("fb.core.util.EventEmitter");
fb.core.util.VisibilityMonitor = function() {
  fb.core.util.EventEmitter.call(this, ["visible"]);
  var hidden, visibilityChange;
  if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
    if (typeof document["hidden"] !== "undefined") {
      visibilityChange = "visibilitychange";
      hidden = "hidden";
    } else {
      if (typeof document["mozHidden"] !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        hidden = "mozHidden";
      } else {
        if (typeof document["msHidden"] !== "undefined") {
          visibilityChange = "msvisibilitychange";
          hidden = "msHidden";
        } else {
          if (typeof document["webkitHidden"] !== "undefined") {
            visibilityChange = "webkitvisibilitychange";
            hidden = "webkitHidden";
          }
        }
      }
    }
  }
  this.visible_ = true;
  if (visibilityChange) {
    var self = this;
    document.addEventListener(visibilityChange, function() {
      var visible = !document[hidden];
      if (visible !== self.visible_) {
        self.visible_ = visible;
        self.trigger("visible", visible);
      }
    }, false);
  }
};
goog.inherits(fb.core.util.VisibilityMonitor, fb.core.util.EventEmitter);
goog.addSingletonGetter(fb.core.util.VisibilityMonitor);
fb.core.util.VisibilityMonitor.prototype.getInitialEvent = function(eventType) {
  fb.core.util.assert(eventType === "visible", "Unknown event type: " + eventType);
  return[this.visible_];
};
goog.provide("fb.core.util.OnlineMonitor");
goog.require("fb.core.util.EventEmitter");
fb.core.util.OnlineMonitor = function() {
  fb.core.util.EventEmitter.call(this, ["online"]);
  this.online_ = true;
  if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
    var self = this;
    window.addEventListener("online", function() {
      if (!self.online_) {
        self.trigger("online", true);
      }
      self.online_ = true;
    }, false);
    window.addEventListener("offline", function() {
      if (self.online_) {
        self.trigger("online", false);
      }
      self.online_ = false;
    }, false);
  }
};
goog.inherits(fb.core.util.OnlineMonitor, fb.core.util.EventEmitter);
goog.addSingletonGetter(fb.core.util.OnlineMonitor);
fb.core.util.OnlineMonitor.prototype.getInitialEvent = function(eventType) {
  fb.core.util.assert(eventType === "online", "Unknown event type: " + eventType);
  return[this.online_];
};
goog.provide("fb.realtime.Constants");
fb.realtime.Constants = {PROTOCOL_VERSION:"5", VERSION_PARAM:"v", SESSION_PARAM:"s", REFERER_PARAM:"r", FORGE_REF:"f", FORGE_DOMAIN:"firebaseio.com"};
goog.provide("fb.realtime.Transport");
goog.require("fb.core.RepoInfo");
fb.realtime.Transport = function(connId, repoInfo, sessionId) {
};
fb.realtime.Transport.prototype.open = function(onMessage, onDisconnect) {
};
fb.realtime.Transport.prototype.start = function() {
};
fb.realtime.Transport.prototype.close = function() {
};
fb.realtime.Transport.prototype.send = function(data) {
};
fb.realtime.Transport.prototype.bytesReceived;
fb.realtime.Transport.prototype.bytesSent;
goog.provide("fb.core.util.NodePatches");
(function() {
  if (NODE_CLIENT) {
    var version = process["version"];
    if (version === "v0.10.22" || version === "v0.10.23" || version === "v0.10.24") {
      var Writable = require("_stream_writable");
      Writable["prototype"]["write"] = function(chunk, encoding, cb) {
        var state = this["_writableState"];
        var ret = false;
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (Buffer["isBuffer"](chunk)) {
          encoding = "buffer";
        } else {
          if (!encoding) {
            encoding = state["defaultEncoding"];
          }
        }
        if (typeof cb !== "function") {
          cb = function() {
          };
        }
        if (state["ended"]) {
          writeAfterEnd(this, state, cb);
        } else {
          if (validChunk(this, state, chunk, cb)) {
            ret = writeOrBuffer(this, state, chunk, encoding, cb);
          }
        }
        return ret;
      };
      function writeAfterEnd(stream, state, cb) {
        var er = new Error("write after end");
        stream["emit"]("error", er);
        process["nextTick"](function() {
          cb(er);
        });
      }
      function validChunk(stream, state, chunk, cb) {
        var valid = true;
        if (!Buffer["isBuffer"](chunk) && "string" !== typeof chunk && chunk !== null && chunk !== undefined && !state["objectMode"]) {
          var er = new TypeError("Invalid non-string/buffer chunk");
          stream["emit"]("error", er);
          process["nextTick"](function() {
            cb(er);
          });
          valid = false;
        }
        return valid;
      }
      function writeOrBuffer(stream, state, chunk, encoding, cb) {
        chunk = decodeChunk(state, chunk, encoding);
        if (Buffer["isBuffer"](chunk)) {
          encoding = "buffer";
        }
        var len = state["objectMode"] ? 1 : chunk["length"];
        state["length"] += len;
        var ret = state["length"] < state["highWaterMark"];
        if (!ret) {
          state["needDrain"] = true;
        }
        if (state["writing"]) {
          state["buffer"]["push"](new WriteReq(chunk, encoding, cb));
        } else {
          doWrite(stream, state, len, chunk, encoding, cb);
        }
        return ret;
      }
      function decodeChunk(state, chunk, encoding) {
        if (!state["objectMode"] && state["decodeStrings"] !== false && typeof chunk === "string") {
          chunk = new Buffer(chunk, encoding);
        }
        return chunk;
      }
      function WriteReq(chunk, encoding, cb) {
        this["chunk"] = chunk;
        this["encoding"] = encoding;
        this["callback"] = cb;
      }
      function doWrite(stream, state, len, chunk, encoding, cb) {
        state["writelen"] = len;
        state["writecb"] = cb;
        state["writing"] = true;
        state["sync"] = true;
        stream["_write"](chunk, encoding, state["onwrite"]);
        state["sync"] = false;
      }
      var Duplex = require("_stream_duplex");
      Duplex["prototype"]["write"] = Writable["prototype"]["write"];
    }
  }
})();
goog.provide("goog.object");
goog.object.forEach = function(obj, f, opt_obj) {
  for (var key in obj) {
    f.call(opt_obj, obj[key], key, obj);
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key];
    }
  }
  return res;
};
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for (var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj);
  }
  return res;
};
goog.object.some = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (f.call(opt_obj, obj[key], key, obj)) {
      return true;
    }
  }
  return false;
};
goog.object.every = function(obj, f, opt_obj) {
  for (var key in obj) {
    if (!f.call(opt_obj, obj[key], key, obj)) {
      return false;
    }
  }
  return true;
};
goog.object.getCount = function(obj) {
  var rv = 0;
  for (var key in obj) {
    rv++;
  }
  return rv;
};
goog.object.getAnyKey = function(obj) {
  for (var key in obj) {
    return key;
  }
};
goog.object.getAnyValue = function(obj) {
  for (var key in obj) {
    return obj[key];
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val);
};
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = obj[key];
  }
  return res;
};
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for (var key in obj) {
    res[i++] = key;
  }
  return res;
};
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;
  for (var i = isArrayLike ? 0 : 1;i < keys.length;i++) {
    obj = obj[keys[i]];
    if (!goog.isDef(obj)) {
      break;
    }
  }
  return obj;
};
goog.object.containsKey = function(obj, key) {
  return key in obj;
};
goog.object.containsValue = function(obj, val) {
  for (var key in obj) {
    if (obj[key] == val) {
      return true;
    }
  }
  return false;
};
goog.object.findKey = function(obj, f, opt_this) {
  for (var key in obj) {
    if (f.call(opt_this, obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
};
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key];
};
goog.object.isEmpty = function(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
};
goog.object.clear = function(obj) {
  for (var i in obj) {
    delete obj[i];
  }
};
goog.object.remove = function(obj, key) {
  var rv;
  if (rv = key in obj) {
    delete obj[key];
  }
  return rv;
};
goog.object.add = function(obj, key, val) {
  if (key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val);
};
goog.object.get = function(obj, key, opt_val) {
  if (key in obj) {
    return obj[key];
  }
  return opt_val;
};
goog.object.set = function(obj, key, value) {
  obj[key] = value;
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value;
};
goog.object.clone = function(obj) {
  var res = {};
  for (var key in obj) {
    res[key] = obj[key];
  }
  return res;
};
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (obj.clone) {
      return obj.clone();
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.object.transpose = function(obj) {
  var transposed = {};
  for (var key in obj) {
    transposed[obj[key]] = key;
  }
  return transposed;
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  var key, source;
  for (var i = 1;i < arguments.length;i++) {
    source = arguments[i];
    for (key in source) {
      target[key] = source[key];
    }
    for (var j = 0;j < goog.object.PROTOTYPE_FIELDS_.length;j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
};
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (argLength % 2) {
    throw Error("Uneven number of arguments");
  }
  var rv = {};
  for (var i = 0;i < argLength;i += 2) {
    rv[arguments[i]] = arguments[i + 1];
  }
  return rv;
};
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  var rv = {};
  for (var i = 0;i < argLength;i++) {
    rv[arguments[i]] = true;
  }
  return rv;
};
goog.object.createImmutableView = function(obj) {
  var result = obj;
  if (Object.isFrozen && !Object.isFrozen(obj)) {
    result = Object.create(obj);
    Object.freeze(result);
  }
  return result;
};
goog.object.isImmutableView = function(obj) {
  return!!Object.isFrozen && Object.isFrozen(obj);
};
goog.provide("fb.core.stats.StatsCollection");
goog.require("fb.util.obj");
goog.require("goog.array");
goog.require("goog.object");
fb.core.stats.StatsCollection = function() {
  this.counters_ = {};
};
fb.core.stats.StatsCollection.prototype.incrementCounter = function(name, amount) {
  if (!goog.isDef(amount)) {
    amount = 1;
  }
  if (!fb.util.obj.contains(this.counters_, name)) {
    this.counters_[name] = 0;
  }
  this.counters_[name] += amount;
};
fb.core.stats.StatsCollection.prototype.get = function() {
  return goog.object.clone(this.counters_);
};
goog.provide("fb.core.stats.StatsListener");
fb.core.stats.StatsListener = function(collection) {
  this.collection_ = collection;
  this.last_ = null;
};
fb.core.stats.StatsListener.prototype.get = function() {
  var newStats = this.collection_.get();
  var delta = goog.object.clone(newStats);
  if (this.last_) {
    for (var stat in this.last_) {
      delta[stat] = delta[stat] - this.last_[stat];
    }
  }
  this.last_ = newStats;
  return delta;
};
goog.provide("fb.core.stats.StatsReporter");
var FIRST_STATS_MIN_TIME = 10 * 1E3;
var FIRST_STATS_MAX_TIME = 30 * 1E3;
var REPORT_STATS_INTERVAL = 5 * 60 * 1E3;
fb.core.stats.StatsReporter = function(collection, connection) {
  this.statsToReport_ = {};
  this.statsListener_ = new fb.core.stats.StatsListener(collection);
  this.connection_ = connection;
  var timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
  setTimeout(goog.bind(this.reportStats_, this), Math.floor(timeout));
};
fb.core.stats.StatsReporter.prototype.includeStat = function(stat) {
  this.statsToReport_[stat] = true;
};
fb.core.stats.StatsReporter.prototype.reportStats_ = function() {
  var stats = this.statsListener_.get();
  var reportedStats = {};
  var haveStatsToReport = false;
  for (var stat in stats) {
    if (stats[stat] > 0 && fb.util.obj.contains(this.statsToReport_, stat)) {
      reportedStats[stat] = stats[stat];
      haveStatsToReport = true;
    }
  }
  if (haveStatsToReport) {
    this.connection_.reportStats(reportedStats);
  }
  setTimeout(goog.bind(this.reportStats_, this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
};
goog.provide("fb.core.stats.StatsManager");
goog.require("fb.core.stats.StatsCollection");
goog.require("fb.core.stats.StatsListener");
goog.require("fb.core.stats.StatsReporter");
fb.core.stats.StatsManager = {};
fb.core.stats.StatsManager.collections_ = {};
fb.core.stats.StatsManager.reporters_ = {};
fb.core.stats.StatsManager.getCollection = function(repoInfo) {
  var hashString = repoInfo.toString();
  if (!fb.core.stats.StatsManager.collections_[hashString]) {
    fb.core.stats.StatsManager.collections_[hashString] = new fb.core.stats.StatsCollection;
  }
  return fb.core.stats.StatsManager.collections_[hashString];
};
fb.core.stats.StatsManager.getOrCreateReporter = function(repoInfo, creatorFunction) {
  var hashString = repoInfo.toString();
  if (!fb.core.stats.StatsManager.reporters_[hashString]) {
    fb.core.stats.StatsManager.reporters_[hashString] = creatorFunction();
  }
  return fb.core.stats.StatsManager.reporters_[hashString];
};
goog.provide("fb.realtime.WebSocketConnection");
goog.require("fb.constants");
goog.require("fb.core.stats.StatsManager");
goog.require("fb.core.storage");
goog.require("fb.core.util");
goog.require("fb.realtime.Constants");
goog.require("fb.realtime.Transport");
goog.require("fb.util.json");
var WEBSOCKET_MAX_FRAME_SIZE = 16384;
var WEBSOCKET_KEEPALIVE_INTERVAL = 45E3;
fb.WebSocket = null;
if (NODE_CLIENT) {
  goog.require("fb.core.util.NodePatches");
  fb.WebSocket = require("faye-websocket")["Client"];
} else {
  if (typeof MozWebSocket !== "undefined") {
    fb.WebSocket = MozWebSocket;
  } else {
    if (typeof WebSocket !== "undefined") {
      fb.WebSocket = WebSocket;
    }
  }
}
fb.realtime.WebSocketConnection = function(connId, repoInfo, sessionId) {
  this.connId = connId;
  this.log_ = fb.core.util.logWrapper(this.connId);
  this.keepaliveTimer = null;
  this.frames = null;
  this.totalFrames = 0;
  this.bytesSent = 0;
  this.bytesReceived = 0;
  this.stats_ = fb.core.stats.StatsManager.getCollection(repoInfo);
  this.connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?" + fb.realtime.Constants.VERSION_PARAM + "=" + fb.realtime.Constants.PROTOCOL_VERSION;
  if (!NODE_CLIENT && typeof location !== "undefined" && location.href && location.href.indexOf(fb.realtime.Constants.FORGE_DOMAIN) !== -1) {
    this.connURL = this.connURL + "&" + fb.realtime.Constants.REFERER_PARAM + "=" + fb.realtime.Constants.FORGE_REF;
  }
  if (repoInfo.needsQueryParam()) {
    this.connURL = this.connURL + "&ns=" + repoInfo.namespace;
  }
  if (sessionId) {
    this.connURL = this.connURL + "&" + fb.realtime.Constants.SESSION_PARAM + "=" + sessionId;
  }
};
fb.realtime.WebSocketConnection.prototype.open = function(onMess, onDisconn) {
  this.onDisconnect = onDisconn;
  this.onMessage = onMess;
  this.log_("Websocket connecting to " + this.connURL);
  this.mySock = new fb.WebSocket(this.connURL);
  this.everConnected_ = false;
  fb.core.storage.PersistentStorage.set("previous_websocket_failure", true);
  var self = this;
  this.mySock.onopen = function() {
    self.log_("Websocket connected.");
    self.everConnected_ = true;
  };
  this.mySock.onclose = function() {
    self.log_("Websocket connection was disconnected.");
    self.mySock = null;
    self.onClosed_();
  };
  this.mySock.onmessage = function(m) {
    self.handleIncomingFrame(m);
  };
  this.mySock.onerror = function(e) {
    self.log_("WebSocket error.  Closing connection.");
    var error = e.message || e.data;
    if (error) {
      self.log_(error);
    }
    self.onClosed_();
  };
};
fb.realtime.WebSocketConnection.prototype.start = function() {
};
fb.realtime.WebSocketConnection.forceDisallow = function() {
  fb.realtime.WebSocketConnection.forceDisallow_ = true;
};
fb.realtime.WebSocketConnection["isAvailable"] = function() {
  var isOldAndroid = false;
  if (typeof navigator !== "undefined" && navigator.userAgent) {
    var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
    var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
    if (oldAndroidMatch && oldAndroidMatch.length > 1) {
      if (parseFloat(oldAndroidMatch[1]) < 4.4) {
        isOldAndroid = true;
      }
    }
  }
  return!isOldAndroid && fb.WebSocket !== null && !fb.realtime.WebSocketConnection.forceDisallow_;
};
fb.realtime.WebSocketConnection["responsesRequiredToBeHealthy"] = 2;
fb.realtime.WebSocketConnection["healthyTimeout"] = 3E4;
fb.realtime.WebSocketConnection.previouslyFailed = function() {
  return fb.core.storage.PersistentStorage.isInMemoryStorage || fb.core.storage.PersistentStorage.get("previous_websocket_failure") === true;
};
fb.realtime.WebSocketConnection.prototype.markConnectionHealthy = function() {
  fb.core.storage.PersistentStorage.remove("previous_websocket_failure");
};
fb.realtime.WebSocketConnection.prototype.appendFrame_ = function(data) {
  this.frames.push(data);
  if (this.frames.length == this.totalFrames) {
    var fullMess = this.frames.join("");
    this.frames = null;
    var jsonMess = fb.util.json.eval(fullMess);
    this.onMessage(jsonMess);
  }
};
fb.realtime.WebSocketConnection.prototype.handleNewFrameCount_ = function(frameCount) {
  this.totalFrames = frameCount;
  this.frames = [];
};
fb.realtime.WebSocketConnection.prototype.extractFrameCount_ = function(data) {
  fb.core.util.assert(this.frames === null, "We already have a frame buffer");
  if (data.length <= 6) {
    var frameCount = Number(data);
    if (!isNaN(frameCount)) {
      this.handleNewFrameCount_(frameCount);
      return null;
    }
  }
  this.handleNewFrameCount_(1);
  return data;
};
fb.realtime.WebSocketConnection.prototype.handleIncomingFrame = function(mess) {
  if (this.mySock === null) {
    return;
  }
  var data = mess["data"];
  this.bytesReceived += data.length;
  this.stats_.incrementCounter("bytes_received", data.length);
  this.resetKeepAlive();
  if (this.frames !== null) {
    this.appendFrame_(data);
  } else {
    var remainingData = this.extractFrameCount_(data);
    if (remainingData !== null) {
      this.appendFrame_(remainingData);
    }
  }
};
fb.realtime.WebSocketConnection.prototype.send = function(data) {
  this.resetKeepAlive();
  var dataStr = fb.util.json.stringify(data);
  this.bytesSent += dataStr.length;
  this.stats_.incrementCounter("bytes_sent", dataStr.length);
  var dataSegs = fb.core.util.splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
  if (dataSegs.length > 1) {
    this.mySock.send(String(dataSegs.length));
  }
  for (var i = 0;i < dataSegs.length;i++) {
    this.mySock.send(dataSegs[i]);
  }
};
fb.realtime.WebSocketConnection.prototype.shutdown_ = function() {
  this.isClosed_ = true;
  if (this.keepaliveTimer) {
    clearInterval(this.keepaliveTimer);
    this.keepaliveTimer = null;
  }
  if (this.mySock) {
    this.mySock.close();
    this.mySock = null;
  }
};
fb.realtime.WebSocketConnection.prototype.onClosed_ = function() {
  if (!this.isClosed_) {
    this.log_("WebSocket is closing itself");
    this.shutdown_();
    if (this.onDisconnect) {
      this.onDisconnect(this.everConnected_);
      this.onDisconnect = null;
    }
  }
};
fb.realtime.WebSocketConnection.prototype.close = function() {
  if (!this.isClosed_) {
    this.log_("WebSocket is being closed");
    this.shutdown_();
  }
};
fb.realtime.WebSocketConnection.prototype.resetKeepAlive = function() {
  var self = this;
  clearInterval(this.keepaliveTimer);
  this.keepaliveTimer = setInterval(function() {
    if (self.mySock) {
      self.mySock.send("0");
    }
    self.resetKeepAlive();
  }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
};
goog.provide("fb.realtime.polling.PacketReceiver");
fb.realtime.polling.PacketReceiver = function(onMessage) {
  this.onMessage_ = onMessage;
  this.pendingResponses = [];
  this.currentResponseNum = 0;
  this.closeAfterResponse = -1;
  this.onClose = null;
};
fb.realtime.polling.PacketReceiver.prototype.closeAfter = function(responseNum, callback) {
  this.closeAfterResponse = responseNum;
  this.onClose = callback;
  if (this.closeAfterResponse < this.currentResponseNum) {
    this.onClose();
    this.onClose = null;
  }
};
fb.realtime.polling.PacketReceiver.prototype.handleResponse = function(requestNum, data) {
  this.pendingResponses[requestNum] = data;
  while (this.pendingResponses[this.currentResponseNum]) {
    var toProcess = this.pendingResponses[this.currentResponseNum];
    delete this.pendingResponses[this.currentResponseNum];
    for (var i = 0;i < toProcess.length;++i) {
      if (toProcess[i]) {
        var self = this;
        fb.core.util.exceptionGuard(function() {
          self.onMessage_(toProcess[i]);
        });
      }
    }
    if (this.currentResponseNum === this.closeAfterResponse) {
      if (this.onClose) {
        clearTimeout(this.onClose);
        this.onClose();
        this.onClose = null;
      }
      break;
    }
    this.currentResponseNum++;
  }
};
goog.provide("fb.core.util.CountedSet");
goog.require("fb.core.util");
goog.require("goog.object");
fb.core.util.CountedSet = function() {
  this.set = {};
};
fb.core.util.CountedSet.prototype.add = function(item, val) {
  this.set[item] = val !== null ? val : true;
};
fb.core.util.CountedSet.prototype.contains = function(key) {
  return fb.util.obj.contains(this.set, key);
};
fb.core.util.CountedSet.prototype.get = function(item) {
  return this.contains(item) ? this.set[item] : undefined;
};
fb.core.util.CountedSet.prototype.remove = function(item) {
  delete this.set[item];
};
fb.core.util.CountedSet.prototype.clear = function() {
  this.set = {};
};
fb.core.util.CountedSet.prototype.isEmpty = function() {
  return goog.object.isEmpty(this.set);
};
fb.core.util.CountedSet.prototype.count = function() {
  return goog.object.getCount(this.set);
};
fb.core.util.CountedSet.prototype.each = function(fn) {
  goog.object.forEach(this.set, function(v, k) {
    fn(k, v);
  });
};
fb.core.util.CountedSet.prototype.keys = function() {
  var keys = [];
  goog.object.forEach(this.set, function(v, k) {
    keys.push(k);
  });
  return keys;
};
goog.provide("fb.realtime.BrowserPollConnection");
goog.require("fb.constants");
goog.require("fb.core.stats.StatsManager");
goog.require("fb.core.util");
goog.require("fb.core.util.CountedSet");
goog.require("fb.realtime.Constants");
goog.require("fb.realtime.Transport");
goog.require("fb.realtime.polling.PacketReceiver");
goog.require("fb.util.json");
var FIREBASE_LONGPOLL_START_PARAM = "start";
var FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
var FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
var FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
var FIREBASE_LONGPOLL_ID_PARAM = "id";
var FIREBASE_LONGPOLL_PW_PARAM = "pw";
var FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
var FIREBASE_LONGPOLL_DATA_PARAM = "d";
var FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = "disconn";
var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30;
var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
var KEEPALIVE_REQUEST_INTERVAL = 25E3;
var LP_CONNECT_TIMEOUT = 3E4;
fb.realtime.BrowserPollConnection = function(connId, repoInfo, sessionId) {
  this.connId = connId;
  this.log_ = fb.core.util.logWrapper(connId);
  this.repoInfo = repoInfo;
  this.bytesSent = 0;
  this.bytesReceived = 0;
  this.stats_ = fb.core.stats.StatsManager.getCollection(repoInfo);
  this.sessionId = sessionId;
  this.everConnected_ = false;
  this.urlFn = function(params) {
    if (repoInfo.needsQueryParam()) {
      params["ns"] = repoInfo.namespace;
    }
    var pairs = [];
    for (var k in params) {
      if (params.hasOwnProperty(k)) {
        pairs.push(k + "=" + params[k]);
      }
    }
    return(repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?" + pairs.join("&");
  };
};
fb.realtime.BrowserPollConnection.prototype.open = function(onMessage, onDisconnect) {
  this.curSegmentNum = 0;
  this.onDisconnect_ = onDisconnect;
  this.myPacketOrderer = new fb.realtime.polling.PacketReceiver(onMessage);
  this.isClosed_ = false;
  var self = this;
  this.connectTimeoutTimer_ = setTimeout(function() {
    self.log_("Timed out trying to connect.");
    self.onClosed_();
    self.connectTimeoutTimer_ = null;
  }, Math.floor(LP_CONNECT_TIMEOUT));
  fb.core.util.executeWhenDOMReady(function() {
    if (self.isClosed_) {
      return;
    }
    self.scriptTagHolder = new FirebaseIFrameScriptHolder(function(command, arg1, arg2, arg3, arg4) {
      self.incrementIncomingBytes_(arguments);
      if (!self.scriptTagHolder) {
        return;
      }
      if (self.connectTimeoutTimer_) {
        clearTimeout(self.connectTimeoutTimer_);
        self.connectTimeoutTimer_ = null;
      }
      self.everConnected_ = true;
      if (command == FIREBASE_LONGPOLL_START_PARAM) {
        self.id = arg1;
        self.password = arg2;
      } else {
        if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
          if (arg1) {
            self.scriptTagHolder.sendNewPolls = false;
            self.myPacketOrderer.closeAfter(arg1, function() {
              self.onClosed_();
            });
          } else {
            self.onClosed_();
          }
        } else {
          throw new Error("Unrecognized command received: " + command);
        }
      }
    }, function(pN, data) {
      self.incrementIncomingBytes_(arguments);
      self.myPacketOrderer.handleResponse(pN, data);
    }, function() {
      self.onClosed_();
    }, self.urlFn);
    var urlParams = {};
    urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
    urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 1E8);
    if (self.scriptTagHolder.uniqueCallbackIdentifier) {
      urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = self.scriptTagHolder.uniqueCallbackIdentifier;
    }
    urlParams[fb.realtime.Constants.VERSION_PARAM] = fb.realtime.Constants.PROTOCOL_VERSION;
    if (self.sessionId) {
      urlParams[fb.realtime.Constants.SESSION_PARAM] = self.sessionId;
    }
    if (!NODE_CLIENT && typeof location !== "undefined" && location.href && location.href.indexOf(fb.realtime.Constants.FORGE_DOMAIN) !== -1) {
      urlParams[fb.realtime.Constants.REFERER_PARAM] = fb.realtime.Constants.FORGE_REF;
    }
    var connectURL = self.urlFn(urlParams);
    self.log_("Connecting via long-poll to " + connectURL);
    self.scriptTagHolder.addTag(connectURL, function() {
    });
  });
};
fb.realtime.BrowserPollConnection.prototype.start = function() {
  this.scriptTagHolder.startLongPoll(this.id, this.password);
  this.addDisconnectPingFrame(this.id, this.password);
};
fb.realtime.BrowserPollConnection.forceAllow = function() {
  fb.realtime.BrowserPollConnection.forceAllow_ = true;
};
fb.realtime.BrowserPollConnection.forceDisallow = function() {
  fb.realtime.BrowserPollConnection.forceDisallow_ = true;
};
fb.realtime.BrowserPollConnection["isAvailable"] = function() {
  return!fb.realtime.BrowserPollConnection.forceDisallow_ && !fb.core.util.isChromeExtensionContentScript() && !fb.core.util.isWindowsStoreApp() && (fb.realtime.BrowserPollConnection.forceAllow_ || !NODE_CLIENT);
};
fb.realtime.BrowserPollConnection.prototype.markConnectionHealthy = function() {
};
fb.realtime.BrowserPollConnection.prototype.shutdown_ = function() {
  this.isClosed_ = true;
  if (this.scriptTagHolder) {
    this.scriptTagHolder.close();
    this.scriptTagHolder = null;
  }
  if (this.myDisconnFrame) {
    document.body.removeChild(this.myDisconnFrame);
    this.myDisconnFrame = null;
  }
  if (this.connectTimeoutTimer_) {
    clearTimeout(this.connectTimeoutTimer_);
    this.connectTimeoutTimer_ = null;
  }
};
fb.realtime.BrowserPollConnection.prototype.onClosed_ = function() {
  if (!this.isClosed_) {
    this.log_("Longpoll is closing itself");
    this.shutdown_();
    if (this.onDisconnect_) {
      this.onDisconnect_(this.everConnected_);
      this.onDisconnect_ = null;
    }
  }
};
fb.realtime.BrowserPollConnection.prototype.close = function() {
  if (!this.isClosed_) {
    this.log_("Longpoll is being closed.");
    this.shutdown_();
  }
};
fb.realtime.BrowserPollConnection.prototype.send = function(data) {
  var dataStr = fb.util.json.stringify(data);
  this.bytesSent += dataStr.length;
  this.stats_.incrementCounter("bytes_sent", dataStr.length);
  var base64data = fb.core.util.base64Encode(dataStr);
  var dataSegs = fb.core.util.splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
  for (var i = 0;i < dataSegs.length;i++) {
    this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
    this.curSegmentNum++;
  }
};
fb.realtime.BrowserPollConnection.prototype.addDisconnectPingFrame = function(id, pw) {
  if (NODE_CLIENT) {
    return;
  }
  this.myDisconnFrame = document.createElement("iframe");
  var urlParams = {};
  urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
  urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
  urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
  this.myDisconnFrame.src = this.urlFn(urlParams);
  this.myDisconnFrame.style.display = "none";
  document.body.appendChild(this.myDisconnFrame);
};
fb.realtime.BrowserPollConnection.prototype.incrementIncomingBytes_ = function(args) {
  var bytesReceived = fb.util.json.stringify(args).length;
  this.bytesReceived += bytesReceived;
  this.stats_.incrementCounter("bytes_received", bytesReceived);
};
function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnectCB, urlFn) {
  this.urlFn = urlFn;
  this.onDisconnect = onDisconnectCB;
  this.outstandingRequests = new fb.core.util.CountedSet;
  this.pendingSegs = [];
  this.currentSerial = Math.floor(Math.random() * 1E8);
  this.sendNewPolls = true;
  if (!NODE_CLIENT) {
    this.uniqueCallbackIdentifier = fb.core.util.LUIDGenerator();
    window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
    window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
    this.myIFrame = this.createIFrame_();
    var script = "";
    if (this.myIFrame.src && this.myIFrame.src.substr(0, "javascript:".length) === "javascript:") {
      var currentDomain = document.domain;
      script = '<script>document.domain="' + currentDomain + '";\x3c/script>';
    }
    var iframeContents = "<html><body>" + script + "</body></html>";
    try {
      this.myIFrame.doc.open();
      this.myIFrame.doc.write(iframeContents);
      this.myIFrame.doc.close();
    } catch (e) {
      fb.core.util.log("frame writing exception");
      if (e.stack) {
        fb.core.util.log(e.stack);
      }
      fb.core.util.log(e);
    }
  } else {
    this.commandCB = commandCB;
    this.onMessageCB = onMessageCB;
  }
}
FirebaseIFrameScriptHolder.prototype.createIFrame_ = function() {
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  if (document.body) {
    document.body.appendChild(iframe);
    try {
      var a = iframe.contentWindow.document;
      if (!a) {
        fb.core.util.log("No IE domain setting required");
      }
    } catch (e) {
      var domain = document.domain;
      iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
    }
  } else {
    throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
  }
  if (iframe.contentDocument) {
    iframe.doc = iframe.contentDocument;
  } else {
    if (iframe.contentWindow) {
      iframe.doc = iframe.contentWindow.document;
    } else {
      if (iframe.document) {
        iframe.doc = iframe.document;
      }
    }
  }
  return iframe;
};
FirebaseIFrameScriptHolder.prototype.close = function() {
  this.alive = false;
  if (this.myIFrame) {
    this.myIFrame.doc.body.innerHTML = "";
    var self = this;
    setTimeout(function() {
      if (self.myIFrame !== null) {
        document.body.removeChild(self.myIFrame);
        self.myIFrame = null;
      }
    }, Math.floor(0));
  }
  if (NODE_CLIENT && this.myID) {
    var urlParams = {};
    urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = "t";
    urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
    urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
    var theURL = this.urlFn(urlParams);
    FirebaseIFrameScriptHolder.nodeRestRequest(theURL);
  }
  var onDisconnect = this.onDisconnect;
  if (onDisconnect) {
    this.onDisconnect = null;
    onDisconnect();
  }
};
FirebaseIFrameScriptHolder.prototype.startLongPoll = function(id, pw) {
  this.myID = id;
  this.myPW = pw;
  this.alive = true;
  while (this.newRequest_()) {
  }
};
FirebaseIFrameScriptHolder.prototype.newRequest_ = function() {
  if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
    this.currentSerial++;
    var urlParams = {};
    urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
    urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
    urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
    var theURL = this.urlFn(urlParams);
    var curDataString = "";
    var i = 0;
    while (this.pendingSegs.length > 0) {
      var nextSeg = this.pendingSegs[0];
      if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
        var theSeg = this.pendingSegs.shift();
        curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
        i++;
      } else {
        break;
      }
    }
    theURL = theURL + curDataString;
    this.addLongPollTag_(theURL, this.currentSerial);
    return true;
  } else {
    return false;
  }
};
FirebaseIFrameScriptHolder.prototype.enqueueSegment = function(segnum, totalsegs, data) {
  this.pendingSegs.push({seg:segnum, ts:totalsegs, d:data});
  if (this.alive) {
    this.newRequest_();
  }
};
FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function(url, serial) {
  var self = this;
  self.outstandingRequests.add(serial);
  var doNewRequest = function() {
    self.outstandingRequests.remove(serial);
    self.newRequest_();
  };
  var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
  var readyStateCB = function() {
    clearTimeout(keepaliveTimeout);
    doNewRequest();
  };
  this.addTag(url, readyStateCB);
};
FirebaseIFrameScriptHolder.prototype.addTag = function(url, loadCB) {
  if (NODE_CLIENT) {
    this.doNodeLongPoll(url, loadCB);
  } else {
    var self = this;
    setTimeout(function() {
      try {
        if (!self.sendNewPolls) {
          return;
        }
        var newScript = self.myIFrame.doc.createElement("script");
        newScript.type = "text/javascript";
        newScript.async = true;
        newScript.src = url;
        newScript.onload = newScript.onreadystatechange = function() {
          var rstate = newScript.readyState;
          if (!rstate || rstate === "loaded" || rstate === "complete") {
            newScript.onload = newScript.onreadystatechange = null;
            if (newScript.parentNode) {
              newScript.parentNode.removeChild(newScript);
            }
            loadCB();
          }
        };
        newScript.onerror = function() {
          fb.core.util.log("Long-poll script failed to load: " + url);
          self.sendNewPolls = false;
          self.close();
        };
        self.myIFrame.doc.body.appendChild(newScript);
      } catch (e) {
      }
    }, Math.floor(1));
  }
};
if (typeof NODE_CLIENT !== "undefined" && NODE_CLIENT) {
  FirebaseIFrameScriptHolder.request = null;
  FirebaseIFrameScriptHolder.nodeRestRequest = function(req, onComplete) {
    if (!FirebaseIFrameScriptHolder.request) {
      FirebaseIFrameScriptHolder.request = (require("request"));
    }
    FirebaseIFrameScriptHolder.request(req, function(error, response, body) {
      if (error) {
        throw "Rest request for " + req.url + " failed.";
      }
      if (onComplete) {
        onComplete(body);
      }
    });
  };
  FirebaseIFrameScriptHolder.prototype.doNodeLongPoll = function(url, loadCB) {
    var self = this;
    FirebaseIFrameScriptHolder.nodeRestRequest({url:url, forever:true}, function(body) {
      self.evalBody(body);
      loadCB();
    });
  };
  FirebaseIFrameScriptHolder.prototype.evalBody = function(body) {
    eval("var jsonpCB = function(" + FIREBASE_LONGPOLL_COMMAND_CB_NAME + ", " + FIREBASE_LONGPOLL_DATA_CB_NAME + ") {" + body + "}");
    jsonpCB(this.commandCB, this.onMessageCB);
  };
}
;goog.require("fb.constants");
goog.require("fb.realtime.BrowserPollConnection");
goog.require("fb.realtime.Transport");
goog.provide("fb.realtime.TransportManager");
goog.require("fb.realtime.WebSocketConnection");
fb.realtime.TransportManager = function(repoInfo) {
  this.initTransports_(repoInfo);
};
fb.realtime.TransportManager.ALL_TRANSPORTS = [fb.realtime.BrowserPollConnection, fb.realtime.WebSocketConnection];
fb.realtime.TransportManager.prototype.initTransports_ = function(repoInfo) {
  var isWebSocketsAvailable = fb.realtime.WebSocketConnection && fb.realtime.WebSocketConnection["isAvailable"]();
  var isSkipPollConnection = isWebSocketsAvailable && !fb.realtime.WebSocketConnection.previouslyFailed();
  if (repoInfo.webSocketOnly) {
    if (!isWebSocketsAvailable) {
      fb.core.util.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
    }
    isSkipPollConnection = true;
  }
  if (isSkipPollConnection) {
    this.transports_ = [fb.realtime.WebSocketConnection];
  } else {
    var transports = this.transports_ = [];
    fb.core.util.each(fb.realtime.TransportManager.ALL_TRANSPORTS, function(i, transport) {
      if (transport && transport["isAvailable"]()) {
        transports.push(transport);
      }
    });
  }
};
fb.realtime.TransportManager.prototype.initialTransport = function() {
  if (this.transports_.length > 0) {
    return this.transports_[0];
  } else {
    throw new Error("No transports available");
  }
};
fb.realtime.TransportManager.prototype.upgradeTransport = function() {
  if (this.transports_.length > 1) {
    return this.transports_[1];
  } else {
    return null;
  }
};
goog.provide("fb.realtime.Connection");
goog.require("fb.core.storage");
goog.require("fb.core.util");
goog.require("fb.realtime.Constants");
goog.require("fb.realtime.TransportManager");
var UPGRADE_TIMEOUT = 6E4;
var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5E3;
var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
var REALTIME_STATE_CONNECTING = 0;
var REALTIME_STATE_CONNECTED = 1;
var REALTIME_STATE_DISCONNECTED = 2;
var MESSAGE_TYPE = "t";
var MESSAGE_DATA = "d";
var CONTROL_SHUTDOWN = "s";
var CONTROL_RESET = "r";
var CONTROL_ERROR = "e";
var CONTROL_PONG = "o";
var SWITCH_ACK = "a";
var END_TRANSMISSION = "n";
var PING = "p";
var SERVER_HELLO = "h";
fb.realtime.Connection = function(connId, repoInfo, onMessage, onReady, onDisconnect, onKill) {
  this.id = connId;
  this.log_ = fb.core.util.logWrapper("c:" + this.id + ":");
  this.onMessage_ = onMessage;
  this.onReady_ = onReady;
  this.onDisconnect_ = onDisconnect;
  this.onKill_ = onKill;
  this.repoInfo_ = repoInfo;
  this.pendingDataMessages = [];
  this.connectionCount = 0;
  this.transportManager_ = new fb.realtime.TransportManager(repoInfo);
  this.state_ = REALTIME_STATE_CONNECTING;
  this.log_("Connection created");
  this.start_();
};
fb.realtime.Connection.prototype.start_ = function() {
  var conn = this.transportManager_.initialTransport();
  this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_);
  this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
  var onMessageReceived = this.connReceiver_(this.conn_);
  var onConnectionLost = this.disconnReceiver_(this.conn_);
  this.tx_ = this.conn_;
  this.rx_ = this.conn_;
  this.secondaryConn_ = null;
  this.isHealthy_ = false;
  var self = this;
  setTimeout(function() {
    self.conn_ && self.conn_.open(onMessageReceived, onConnectionLost);
  }, Math.floor(0));
  var healthyTimeout_ms = conn["healthyTimeout"] || 0;
  if (healthyTimeout_ms > 0) {
    this.healthyTimeout_ = setTimeout(function() {
      self.healthyTimeout_ = null;
      if (!self.isHealthy_) {
        if (self.conn_ && self.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
          self.log_("Connection exceeded healthy timeout but has received " + self.conn_.bytesReceived + " bytes.  Marking connection healthy.");
          self.isHealthy_ = true;
          self.conn_.markConnectionHealthy();
        } else {
          if (self.conn_ && self.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
            self.log_("Connection exceeded healthy timeout but has sent " + self.conn_.bytesSent + " bytes.  Leaving connection alive.");
          } else {
            self.log_("Closing unhealthy connection after timeout.");
            self.close();
          }
        }
      }
    }, Math.floor(healthyTimeout_ms));
  }
};
fb.realtime.Connection.prototype.nextTransportId_ = function() {
  return "c:" + this.id + ":" + this.connectionCount++;
};
fb.realtime.Connection.prototype.disconnReceiver_ = function(conn) {
  var self = this;
  return function(everConnected) {
    if (conn === self.conn_) {
      self.onConnectionLost_(everConnected);
    } else {
      if (conn === self.secondaryConn_) {
        self.log_("Secondary connection lost.");
        self.onSecondaryConnectionLost_();
      } else {
        self.log_("closing an old connection");
      }
    }
  };
};
fb.realtime.Connection.prototype.connReceiver_ = function(conn) {
  var self = this;
  return function(message) {
    if (self.state_ != REALTIME_STATE_DISCONNECTED) {
      if (conn === self.rx_) {
        self.onPrimaryMessageReceived_(message);
      } else {
        if (conn === self.secondaryConn_) {
          self.onSecondaryMessageReceived_(message);
        } else {
          self.log_("message on old connection");
        }
      }
    }
  };
};
fb.realtime.Connection.prototype.sendRequest = function(dataMsg) {
  var msg = {"t":"d", "d":dataMsg};
  this.sendData_(msg);
};
fb.realtime.Connection.prototype.tryCleanupConnection = function() {
  if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
    this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
    this.conn_ = this.secondaryConn_;
    this.secondaryConn_ = null;
  }
};
fb.realtime.Connection.prototype.onSecondaryControl_ = function(controlData) {
  if (MESSAGE_TYPE in controlData) {
    var cmd = controlData[MESSAGE_TYPE];
    if (cmd === SWITCH_ACK) {
      this.upgradeIfSecondaryHealthy_();
    } else {
      if (cmd === CONTROL_RESET) {
        this.log_("Got a reset on secondary, closing it");
        this.secondaryConn_.close();
        if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
          this.close();
        }
      } else {
        if (cmd === CONTROL_PONG) {
          this.log_("got pong on secondary.");
          this.secondaryResponsesRequired_--;
          this.upgradeIfSecondaryHealthy_();
        }
      }
    }
  }
};
fb.realtime.Connection.prototype.onSecondaryMessageReceived_ = function(parsedData) {
  var layer = fb.core.util.requireKey("t", parsedData);
  var data = fb.core.util.requireKey("d", parsedData);
  if (layer == "c") {
    this.onSecondaryControl_(data);
  } else {
    if (layer == "d") {
      this.pendingDataMessages.push(data);
    } else {
      throw new Error("Unknown protocol layer: " + layer);
    }
  }
};
fb.realtime.Connection.prototype.upgradeIfSecondaryHealthy_ = function() {
  if (this.secondaryResponsesRequired_ <= 0) {
    this.log_("Secondary connection is healthy.");
    this.isHealthy_ = true;
    this.secondaryConn_.markConnectionHealthy();
    this.proceedWithUpgrade_();
  } else {
    this.log_("sending ping on secondary.");
    this.secondaryConn_.send({"t":"c", "d":{"t":PING, "d":{}}});
  }
};
fb.realtime.Connection.prototype.proceedWithUpgrade_ = function() {
  this.secondaryConn_.start();
  this.log_("sending client ack on secondary");
  this.secondaryConn_.send({"t":"c", "d":{"t":SWITCH_ACK, "d":{}}});
  this.log_("Ending transmission on primary");
  this.conn_.send({"t":"c", "d":{"t":END_TRANSMISSION, "d":{}}});
  this.tx_ = this.secondaryConn_;
  this.tryCleanupConnection();
};
fb.realtime.Connection.prototype.onPrimaryMessageReceived_ = function(parsedData) {
  var layer = fb.core.util.requireKey("t", parsedData);
  var data = fb.core.util.requireKey("d", parsedData);
  if (layer == "c") {
    this.onControl_(data);
  } else {
    if (layer == "d") {
      this.onDataMessage_(data);
    }
  }
};
fb.realtime.Connection.prototype.onDataMessage_ = function(message) {
  this.onPrimaryResponse_();
  this.onMessage_(message);
};
fb.realtime.Connection.prototype.onPrimaryResponse_ = function() {
  if (!this.isHealthy_) {
    this.primaryResponsesRequired_--;
    if (this.primaryResponsesRequired_ <= 0) {
      this.log_("Primary connection is healthy.");
      this.isHealthy_ = true;
      this.conn_.markConnectionHealthy();
    }
  }
};
fb.realtime.Connection.prototype.onControl_ = function(controlData) {
  var cmd = fb.core.util.requireKey(MESSAGE_TYPE, controlData);
  if (MESSAGE_DATA in controlData) {
    var payload = controlData[MESSAGE_DATA];
    if (cmd === SERVER_HELLO) {
      this.onHandshake_(payload);
    } else {
      if (cmd === END_TRANSMISSION) {
        this.log_("recvd end transmission on primary");
        this.rx_ = this.secondaryConn_;
        for (var i = 0;i < this.pendingDataMessages.length;++i) {
          this.onDataMessage_(this.pendingDataMessages[i]);
        }
        this.pendingDataMessages = [];
        this.tryCleanupConnection();
      } else {
        if (cmd === CONTROL_SHUTDOWN) {
          this.onConnectionShutdown_(payload);
        } else {
          if (cmd === CONTROL_RESET) {
            this.onReset_(payload);
          } else {
            if (cmd === CONTROL_ERROR) {
              fb.core.util.error("Server Error: " + payload);
            } else {
              if (cmd === CONTROL_PONG) {
                this.log_("got pong on primary.");
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
              } else {
                fb.core.util.error("Unknown control packet command: " + cmd);
              }
            }
          }
        }
      }
    }
  }
};
fb.realtime.Connection.prototype.onHandshake_ = function(handshake) {
  var timestamp = handshake["ts"];
  var version = handshake["v"];
  var host = handshake["h"];
  this.sessionId = handshake["s"];
  this.repoInfo_.updateHost(host);
  if (this.state_ == REALTIME_STATE_CONNECTING) {
    this.conn_.start();
    this.onConnectionEstablished_(this.conn_, timestamp);
    if (fb.realtime.Constants.PROTOCOL_VERSION !== version) {
      fb.core.util.warn("Protocol version mismatch detected");
    }
    this.tryStartUpgrade_();
  }
};
fb.realtime.Connection.prototype.tryStartUpgrade_ = function() {
  var conn = this.transportManager_.upgradeTransport();
  if (conn) {
    this.startUpgrade_(conn);
  }
};
fb.realtime.Connection.prototype.startUpgrade_ = function(conn) {
  this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.sessionId);
  this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
  var onMessage = this.connReceiver_(this.secondaryConn_);
  var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
  this.secondaryConn_.open(onMessage, onDisconnect);
  var self = this;
  setTimeout(function() {
    if (self.secondaryConn_) {
      self.log_("Timed out trying to upgrade.");
      self.secondaryConn_.close();
    }
  }, Math.floor(UPGRADE_TIMEOUT));
};
fb.realtime.Connection.prototype.onReset_ = function(host) {
  this.log_("Reset packet received.  New host: " + host);
  this.repoInfo_.updateHost(host);
  if (this.state_ === REALTIME_STATE_CONNECTED) {
    this.close();
  } else {
    this.closeConnections_();
    this.start_();
  }
};
fb.realtime.Connection.prototype.onConnectionEstablished_ = function(conn, timestamp) {
  this.log_("Realtime connection established.");
  this.conn_ = conn;
  this.state_ = REALTIME_STATE_CONNECTED;
  if (this.onReady_) {
    this.onReady_(timestamp);
    this.onReady_ = null;
  }
  var self = this;
  if (this.primaryResponsesRequired_ === 0) {
    this.log_("Primary connection is healthy.");
    this.isHealthy_ = true;
  } else {
    setTimeout(function() {
      self.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
  }
};
fb.realtime.Connection.prototype.sendPingOnPrimaryIfNecessary_ = function() {
  if (!this.isHealthy_ && this.state_ === REALTIME_STATE_CONNECTED) {
    this.log_("sending ping on primary.");
    this.sendData_({"t":"c", "d":{"t":PING, "d":{}}});
  }
};
fb.realtime.Connection.prototype.onSecondaryConnectionLost_ = function() {
  var conn = this.secondaryConn_;
  this.secondaryConn_ = null;
  if (this.tx_ === conn || this.rx_ === conn) {
    this.close();
  }
};
fb.realtime.Connection.prototype.onConnectionLost_ = function(everConnected) {
  this.conn_ = null;
  if (!everConnected && this.state_ === REALTIME_STATE_CONNECTING) {
    this.log_("Realtime connection failed.");
    if (this.repoInfo_.isCacheableHost()) {
      fb.core.storage.PersistentStorage.remove("host:" + this.repoInfo_.host);
      this.repoInfo_.internalHost = this.repoInfo_.host;
    }
  } else {
    if (this.state_ === REALTIME_STATE_CONNECTED) {
      this.log_("Realtime connection lost.");
    }
  }
  this.close();
};
fb.realtime.Connection.prototype.onConnectionShutdown_ = function(reason) {
  this.log_("Connection shutdown command received. Shutting down...");
  if (this.onKill_) {
    this.onKill_(reason);
    this.onKill_ = null;
  }
  this.onDisconnect_ = null;
  this.close();
};
fb.realtime.Connection.prototype.sendData_ = function(data) {
  if (this.state_ !== REALTIME_STATE_CONNECTED) {
    throw "Connection is not connected";
  } else {
    this.tx_.send(data);
  }
};
fb.realtime.Connection.prototype.close = function() {
  if (this.state_ !== REALTIME_STATE_DISCONNECTED) {
    this.log_("Closing realtime connection.");
    this.state_ = REALTIME_STATE_DISCONNECTED;
    this.closeConnections_();
    if (this.onDisconnect_) {
      this.onDisconnect_();
      this.onDisconnect_ = null;
    }
  }
};
fb.realtime.Connection.prototype.closeConnections_ = function() {
  this.log_("Shutting down all connections");
  if (this.conn_) {
    this.conn_.close();
    this.conn_ = null;
  }
  if (this.secondaryConn_) {
    this.secondaryConn_.close();
    this.secondaryConn_ = null;
  }
  if (this.healthyTimeout_) {
    clearTimeout(this.healthyTimeout_);
    this.healthyTimeout_ = null;
  }
};
goog.provide("fb.core.PersistentConnection");
goog.require("fb.core.util.OnlineMonitor");
goog.require("fb.core.util.VisibilityMonitor");
goog.require("fb.realtime.Connection");
goog.require("fb.util.json");
var RECONNECT_MIN_DELAY = 1E3;
var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1E3;
var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1E3;
var RECONNECT_DELAY_MULTIPLIER = 1.3;
var RECONNECT_DELAY_RESET_TIMEOUT = 3E4;
fb.core.PersistentConnection = function(repoInfo, onDataUpdate, onConnectStatus, onAuthStatus, onServerInfoUpdate, getServerDataHashForPath) {
  this.id = fb.core.PersistentConnection.nextPersistentConnectionId_++;
  this.log_ = fb.core.util.logWrapper("p:" + this.id + ":");
  this.shouldReconnect_ = true;
  this.listens_ = {};
  this.outstandingPuts_ = [];
  this.outstandingPutCount_ = 0;
  this.onDisconnectRequestQueue_ = [];
  this.connected_ = false;
  this.reconnectDelay_ = RECONNECT_MIN_DELAY;
  this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
  this.onDataUpdate_ = onDataUpdate || goog.nullFunction;
  this.onConnectStatus_ = onConnectStatus || goog.nullFunction;
  this.onAuthStatus_ = onAuthStatus || goog.nullFunction;
  this.onServerInfoUpdate_ = onServerInfoUpdate || goog.nullFunction;
  this.getServerDataHashForPath_ = getServerDataHashForPath || goog.nullFunction;
  this.repoInfo_ = repoInfo;
  this.securityDebugCallback_ = null;
  this.requestCBHash_ = {};
  this.requestNumber_ = 0;
  this.lastConnectionAttemptTime_ = null;
  this.lastConnectionEstablishedTime_ = null;
  this.scheduleConnect_(0);
  fb.core.util.VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
  if (repoInfo.host.indexOf("fblocal") === -1) {
    fb.core.util.OnlineMonitor.getInstance().on("online", this.onOnline_, this);
  }
};
fb.core.PersistentConnection.nextPersistentConnectionId_ = 0;
fb.core.PersistentConnection.nextConnectionId_ = 0;
fb.core.PersistentConnection.prototype.sendRequest_ = function(action, body, onResponse) {
  var curReqNum = ++this.requestNumber_;
  var msg = {"r":curReqNum, "a":action, "b":body};
  this.log_(fb.util.json.stringify(msg));
  fb.core.util.assert(this.connected_, "sendRequest_ call when we're not connected not allowed.");
  this.realtime_.sendRequest(msg);
  if (onResponse) {
    this.requestCBHash_[curReqNum] = onResponse;
  }
};
fb.core.PersistentConnection.prototype.listen = function(queryMap, onComplete) {
  var queryId = queryMap.toString();
  var pathString = queryMap.path().toString();
  this.listens_[pathString] = this.listens_[pathString] || {};
  fb.core.util.assert(!this.listens_[pathString][queryId], "listen() called twice for same path/queryId.");
  this.listens_[pathString][queryId] = {queries:queryMap.queries(), onComplete:onComplete};
  if (this.connected_) {
    this.sendListen_(pathString, queryId, queryMap.queries(), onComplete);
  }
};
fb.core.PersistentConnection.prototype.sendListen_ = function(pathString, queryId, queries, onComplete) {
  var self = this;
  this.log_("Listen on " + pathString + " for " + queryId);
  var req = {"p":pathString};
  var queriesObj = goog.array.map(queries, function(q) {
    return q.queryObject();
  });
  if (queryId !== "{}") {
    req["q"] = queriesObj;
  }
  req["h"] = this.getServerDataHashForPath_(pathString);
  this.sendRequest_("l", req, function(message) {
    self.log_("listen response", message);
    var status = message["s"];
    if (status !== "ok") {
      self.removeListen_(pathString, queryId);
    }
    if (onComplete) {
      onComplete(status);
    }
  });
};
fb.core.PersistentConnection.prototype.auth = function(cred, callback, cancelCallback) {
  this.credential_ = {cred:cred, firstRequestSent:false, callback:callback, cancelCallback:cancelCallback};
  this.log_("Authenticating using credential: " + this.credential_);
  this.tryAuth();
  this.reduceReconnectDelayIfAdminCredential_(cred);
};
fb.core.PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function(credential) {
  var isFirebaseSecret = credential.length == 40;
  if (isFirebaseSecret || this.isAdminAuthToken_(credential)) {
    this.log_("Admin auth credential detected.  Reducing max reconnect time.");
    this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
  }
};
fb.core.PersistentConnection.prototype.isAdminAuthToken_ = function(credential) {
  var claims;
  try {
    var parts = credential.split(".");
    if (parts.length !== 3) {
      return false;
    }
    var claimsString = fb.core.util.base64DecodeIfNativeSupport(parts[1]);
    if (claimsString !== null) {
      claims = fb.util.json.eval(claimsString);
    }
  } catch (e) {
    fb.core.util.log("isAdminAuthToken_ failed", e);
  }
  return typeof claims === "object" && fb.util.obj.get(claims, "admin") === true;
};
fb.core.PersistentConnection.prototype.unauth = function(onComplete) {
  delete this.credential_;
  this.onAuthStatus_(false);
  if (this.connected_) {
    this.sendRequest_("unauth", {}, function(result) {
      var status = result["s"];
      var errorReason = result["d"];
      onComplete(status, errorReason);
    });
  }
};
fb.core.PersistentConnection.prototype.tryAuth = function() {
  var authdata = this.credential_;
  var self = this;
  if (this.connected_ && authdata) {
    var requestData = {"cred":authdata.cred};
    this.sendRequest_("auth", requestData, function(res) {
      var status = res["s"];
      var data = res["d"] || "error";
      if (status !== "ok" && self.credential_ === authdata) {
        delete self.credential_;
      }
      self.onAuthStatus_(status === "ok");
      if (!authdata.firstRequestSent) {
        authdata.firstRequestSent = true;
        if (authdata.callback) {
          authdata.callback(status, data);
        }
      } else {
        if (status !== "ok" && authdata.cancelCallback) {
          authdata.cancelCallback(status, data);
        }
      }
    });
  }
};
fb.core.PersistentConnection.prototype.unlisten = function(path, queryId, queries) {
  var pathString = path.toString();
  var listen = this.removeListen_(pathString, queryId);
  if (listen && this.connected_) {
    this.sendUnlisten_(pathString, queryId, queries);
  }
};
fb.core.PersistentConnection.prototype.sendUnlisten_ = function(pathString, queryId, queryObjs) {
  this.log_("Unlisten on " + pathString + " for " + queryId);
  var self = this;
  var req = {"p":pathString};
  var queries = goog.array.map(queryObjs, function(q) {
    return q.queryObject();
  });
  if (queryId !== "{}") {
    req["q"] = queries;
  }
  this.sendRequest_("u", req);
};
fb.core.PersistentConnection.prototype.onDisconnectPut = function(pathString, data, opt_onComplete) {
  if (this.connected_) {
    this.sendOnDisconnect_("o", pathString, data, opt_onComplete);
  } else {
    this.onDisconnectRequestQueue_.push({pathString:pathString, action:"o", data:data, onComplete:opt_onComplete});
  }
};
fb.core.PersistentConnection.prototype.onDisconnectMerge = function(pathString, data, opt_onComplete) {
  if (this.connected_) {
    this.sendOnDisconnect_("om", pathString, data, opt_onComplete);
  } else {
    this.onDisconnectRequestQueue_.push({pathString:pathString, action:"om", data:data, onComplete:opt_onComplete});
  }
};
fb.core.PersistentConnection.prototype.onDisconnectCancel = function(pathString, opt_onComplete) {
  if (this.connected_) {
    this.sendOnDisconnect_("oc", pathString, null, opt_onComplete);
  } else {
    this.onDisconnectRequestQueue_.push({pathString:pathString, action:"oc", data:null, onComplete:opt_onComplete});
  }
};
fb.core.PersistentConnection.prototype.sendOnDisconnect_ = function(action, pathString, data, opt_onComplete) {
  var self = this;
  var request = {"p":pathString, "d":data};
  self.log_("onDisconnect " + action, request);
  this.sendRequest_(action, request, function(response) {
    if (opt_onComplete) {
      setTimeout(function() {
        opt_onComplete(response["s"], response["d"]);
      }, Math.floor(0));
    }
  });
};
fb.core.PersistentConnection.prototype.put = function(pathString, data, opt_onComplete, opt_hash) {
  this.putInternal("p", pathString, data, opt_onComplete, opt_hash);
};
fb.core.PersistentConnection.prototype.merge = function(pathString, data, opt_onComplete, opt_hash) {
  this.putInternal("m", pathString, data, opt_onComplete, opt_hash);
};
fb.core.PersistentConnection.prototype.putInternal = function(action, pathString, data, opt_onComplete, opt_hash) {
  var request = {"p":pathString, "d":data};
  if (goog.isDef(opt_hash)) {
    request["h"] = opt_hash;
  }
  this.outstandingPuts_.push({action:action, request:request, onComplete:opt_onComplete});
  this.outstandingPutCount_++;
  var index = this.outstandingPuts_.length - 1;
  if (this.connected_) {
    this.sendPut_(index);
  }
};
fb.core.PersistentConnection.prototype.sendPut_ = function(index) {
  var self = this;
  var action = this.outstandingPuts_[index].action;
  var request = this.outstandingPuts_[index].request;
  var onComplete = this.outstandingPuts_[index].onComplete;
  this.outstandingPuts_[index].queued = this.connected_;
  this.sendRequest_(action, request, function(message) {
    self.log_(action + " response", message);
    delete self.outstandingPuts_[index];
    self.outstandingPutCount_--;
    if (self.outstandingPutCount_ === 0) {
      self.outstandingPuts_ = [];
    }
    if (onComplete) {
      onComplete(message["s"], message["d"]);
    }
  });
};
fb.core.PersistentConnection.prototype.reportStats = function(stats) {
  if (this.connected_) {
    var request = {"c":stats};
    this.log_("reportStats", request);
    this.sendRequest_("s", request);
  }
};
fb.core.PersistentConnection.prototype.onDataMessage_ = function(message) {
  if ("r" in message) {
    this.log_("from server: " + fb.util.json.stringify(message));
    var reqNum = message["r"];
    var onResponse = this.requestCBHash_[reqNum];
    if (onResponse) {
      delete this.requestCBHash_[reqNum];
      onResponse(message["b"]);
    }
  } else {
    if ("error" in message) {
      throw "A server-side error has occurred: " + message["error"];
    } else {
      if ("a" in message) {
        this.onDataPush_(message["a"], message["b"]);
      }
    }
  }
};
fb.core.PersistentConnection.prototype.onDataPush_ = function(action, body) {
  this.log_("handleServerMessage", action, body);
  if (action === "d") {
    this.onDataUpdate_(body["p"], body["d"], false);
  } else {
    if (action === "m") {
      this.onDataUpdate_(body["p"], body["d"], true);
    } else {
      if (action === "c") {
        this.onListenRevoked_(body["p"], body["q"]);
      } else {
        if (action === "ac") {
          this.onAuthRevoked_(body["s"], body["d"]);
        } else {
          if (action === "sd") {
            this.onSecurityDebugPacket_(body);
          } else {
            fb.core.util.error("Unrecognized action received from server: " + fb.util.json.stringify(action) + "\nAre you using the latest client?");
          }
        }
      }
    }
  }
};
fb.core.PersistentConnection.prototype.onReady_ = function(timestamp) {
  this.log_("connection ready");
  this.connected_ = true;
  this.lastConnectionEstablishedTime_ = (new Date).getTime();
  this.handleTimestamp_(timestamp);
  this.restoreState_();
  this.onConnectStatus_(true);
};
fb.core.PersistentConnection.prototype.scheduleConnect_ = function(timeout) {
  fb.core.util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
  if (this.establishConnectionTimer_) {
    clearTimeout(this.establishConnectionTimer_);
  }
  var self = this;
  this.establishConnectionTimer_ = setTimeout(function() {
    self.establishConnectionTimer_ = null;
    self.establishConnection_();
  }, Math.floor(timeout));
};
fb.core.PersistentConnection.prototype.onVisible_ = function(visible) {
  if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
    this.log_("Window became visible.  Reducing delay.");
    this.reconnectDelay_ = RECONNECT_MIN_DELAY;
    if (!this.realtime_) {
      this.scheduleConnect_(0);
    }
  }
  this.visible_ = visible;
};
fb.core.PersistentConnection.prototype.onOnline_ = function(online) {
  if (online) {
    this.log_("Browser went online.  Reconnecting.");
    this.reconnectDelay_ = RECONNECT_MIN_DELAY;
    this.shouldReconnect_ = true;
    if (!this.realtime_) {
      this.scheduleConnect_(0);
    }
  } else {
    this.log_("Browser went offline.  Killing connection; don't reconnect.");
    this.shouldReconnect_ = false;
    if (this.realtime_) {
      this.realtime_.close();
    }
  }
};
fb.core.PersistentConnection.prototype.onRealtimeDisconnect_ = function() {
  this.log_("data client disconnected");
  this.connected_ = false;
  this.realtime_ = null;
  this.cancelSentTransactions_();
  if (!this.shouldReconnect_) {
    for (var cbInd in this.requestCBHash_) {
      delete this.requestCBHash_[cbInd];
    }
  } else {
    if (!this.visible_) {
      this.log_("Window isn't visible.  Delaying reconnect.");
      this.reconnectDelay_ = this.maxReconnectDelay_;
      this.lastConnectionAttemptTime_ = (new Date).getTime();
    } else {
      if (this.lastConnectionEstablishedTime_) {
        var timeSinceLastConnectSucceeded = (new Date).getTime() - this.lastConnectionEstablishedTime_;
        if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        }
        this.lastConnectionEstablishedTime_ = null;
      }
    }
    var timeSinceLastConnectAttempt = (new Date).getTime() - this.lastConnectionAttemptTime_;
    var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
    reconnectDelay = Math.random() * reconnectDelay;
    this.log_("Trying to reconnect in " + reconnectDelay + "ms");
    this.scheduleConnect_(reconnectDelay);
    this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
  }
  this.onConnectStatus_(false);
};
fb.core.PersistentConnection.prototype.establishConnection_ = function() {
  if (this.shouldReconnect_) {
    this.log_("Making a connection attempt");
    this.lastConnectionAttemptTime_ = (new Date).getTime();
    this.lastConnectionEstablishedTime_ = null;
    var onDataMessage = goog.bind(this.onDataMessage_, this);
    var onReady = goog.bind(this.onReady_, this);
    var onDisconnect = goog.bind(this.onRealtimeDisconnect_, this);
    var connId = this.id + ":" + fb.core.PersistentConnection.nextConnectionId_++;
    var self = this;
    this.realtime_ = new fb.realtime.Connection(connId, this.repoInfo_, onDataMessage, onReady, onDisconnect, function(reason) {
      fb.core.util.warn(reason + " (" + self.repoInfo_.toString() + ")");
      self.shouldReconnect_ = false;
    });
  }
};
fb.core.PersistentConnection.prototype.interrupt = function() {
  this.shouldReconnect_ = false;
  if (this.realtime_) {
    this.realtime_.close();
  } else {
    if (this.establishConnectionTimer_) {
      clearTimeout(this.establishConnectionTimer_);
      this.establishConnectionTimer_ = null;
    }
    if (this.connected_) {
      this.onRealtimeDisconnect_();
    }
  }
};
fb.core.PersistentConnection.prototype.resume = function() {
  this.shouldReconnect_ = true;
  this.reconnectDelay_ = RECONNECT_MIN_DELAY;
  if (!this.connected_) {
    this.scheduleConnect_(0);
  }
};
fb.core.PersistentConnection.prototype.handleTimestamp_ = function(timestamp) {
  var delta = timestamp - (new Date).getTime();
  this.onServerInfoUpdate_({"serverTimeOffset":delta});
};
fb.core.PersistentConnection.prototype.cancelSentTransactions_ = function() {
  for (var i = 0;i < this.outstandingPuts_.length;i++) {
    var put = this.outstandingPuts_[i];
    if (put && "h" in put.request && put.queued) {
      if (put.onComplete) {
        put.onComplete("disconnect");
      }
      delete this.outstandingPuts_[i];
      this.outstandingPutCount_--;
    }
  }
  if (this.outstandingPutCount_ === 0) {
    this.outstandingPuts_ = [];
  }
};
fb.core.PersistentConnection.prototype.onListenRevoked_ = function(pathString, opt_query) {
  var queryId;
  if (!opt_query) {
    queryId = "{}";
  } else {
    queryId = goog.array.map(opt_query, function(q) {
      return fb.core.util.ObjectToUniqueKey(q);
    }).join("$");
  }
  var listen = this.removeListen_(pathString, queryId);
  if (listen && listen.onComplete) {
    listen.onComplete("permission_denied");
  }
};
fb.core.PersistentConnection.prototype.removeListen_ = function(pathString, queryId) {
  var normalizedPathString = (new fb.core.util.Path(pathString)).toString();
  if (!queryId) {
    queryId = "{}";
  }
  var listen = this.listens_[normalizedPathString][queryId];
  delete this.listens_[normalizedPathString][queryId];
  return listen;
};
fb.core.PersistentConnection.prototype.onAuthRevoked_ = function(statusCode, explanation) {
  var cred = this.credential_;
  delete this.credential_;
  if (cred && cred.cancelCallback) {
    cred.cancelCallback(statusCode, explanation);
  }
  this.onAuthStatus_(false);
};
fb.core.PersistentConnection.prototype.onSecurityDebugPacket_ = function(body) {
  if (this.securityDebugCallback_) {
    this.securityDebugCallback_(body);
  } else {
    if ("msg" in body && typeof console !== "undefined") {
      console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
    }
  }
};
fb.core.PersistentConnection.prototype.restoreState_ = function() {
  this.tryAuth();
  for (var pathString in this.listens_) {
    for (var queryId in this.listens_[pathString]) {
      var listen = this.listens_[pathString][queryId];
      this.sendListen_(pathString, queryId, listen.queries, listen.onComplete);
    }
  }
  for (var i = 0;i < this.outstandingPuts_.length;i++) {
    if (this.outstandingPuts_[i]) {
      this.sendPut_(i);
    }
  }
  while (this.onDisconnectRequestQueue_.length) {
    var request = this.onDisconnectRequestQueue_.shift();
    this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
  }
};
goog.provide("fb.core.snap.Node");
fb.core.snap.Node = function() {
};
fb.core.snap.Node.prototype.isLeafNode;
fb.core.snap.Node.prototype.getPriority;
fb.core.snap.Node.prototype.updatePriority;
fb.core.snap.Node.prototype.updateValue;
fb.core.snap.Node.prototype.getImmediateChild;
fb.core.snap.Node.prototype.getChild;
fb.core.snap.Node.prototype.getPredecessorChildName;
fb.core.snap.Node.prototype.updateImmediateChild;
fb.core.snap.Node.prototype.updateChild;
fb.core.snap.Node.prototype.isEmpty;
fb.core.snap.Node.prototype.numChildren;
fb.core.snap.Node.prototype.val;
fb.core.snap.Node.prototype.hash;
goog.provide("fb.core.SparseSnapshotTree");
goog.require("fb.core.snap.Node");
goog.require("fb.core.util.CountedSet");
goog.require("fb.core.util.Path");
fb.core.SparseSnapshotTree = function() {
  this.value_ = null;
  this.children_ = null;
};
fb.core.SparseSnapshotTree.prototype.find = function(path) {
  if (this.value_ != null) {
    return this.value_.getChild(path);
  } else {
    if (!path.isEmpty() && this.children_ != null) {
      var childKey = path.getFront();
      path = path.popFront();
      if (this.children_.contains(childKey)) {
        var childTree = this.children_.get(childKey);
        return childTree.find(path);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};
fb.core.SparseSnapshotTree.prototype.remember = function(path, data) {
  if (path.isEmpty()) {
    this.value_ = data;
    this.children_ = null;
  } else {
    if (this.value_ !== null) {
      this.value_ = this.value_.updateChild(path, data);
    } else {
      if (this.children_ == null) {
        this.children_ = new fb.core.util.CountedSet;
      }
      var childKey = path.getFront();
      if (!this.children_.contains(childKey)) {
        this.children_.add(childKey, new fb.core.SparseSnapshotTree);
      }
      var child = this.children_.get(childKey);
      path = path.popFront();
      child.remember(path, data);
    }
  }
};
fb.core.SparseSnapshotTree.prototype.forget = function(path) {
  if (path.isEmpty()) {
    this.value_ = null;
    this.children_ = null;
    return true;
  } else {
    if (this.value_ !== null) {
      if (this.value_.isLeafNode()) {
        return false;
      } else {
        var value = this.value_;
        this.value_ = null;
        var self = this;
        value.forEachChild(function(key, tree) {
          self.remember(new fb.core.util.Path(key), tree);
        });
        return this.forget(path);
      }
    } else {
      if (this.children_ !== null) {
        var childKey = path.getFront();
        path = path.popFront();
        if (this.children_.contains(childKey)) {
          var safeToRemove = this.children_.get(childKey).forget(path);
          if (safeToRemove) {
            this.children_.remove(childKey);
          }
        }
        if (this.children_.isEmpty()) {
          this.children_ = null;
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
};
fb.core.SparseSnapshotTree.prototype.forEachTree = function(prefixPath, func) {
  if (this.value_ !== null) {
    func(prefixPath, this.value_);
  } else {
    this.forEachChild(function(key, tree) {
      var path = new fb.core.util.Path(prefixPath.toString() + "/" + key);
      tree.forEachTree(path, func);
    });
  }
};
fb.core.SparseSnapshotTree.prototype.forEachChild = function(func) {
  if (this.children_ !== null) {
    this.children_.each(function(key, tree) {
      func(key, tree);
    });
  }
};
goog.provide("fb.core.SnapshotHolder");
fb.core.SnapshotHolder = function() {
  this.rootNode_ = fb.core.snap.EMPTY_NODE;
};
fb.core.SnapshotHolder.prototype.getNode = function(path) {
  return this.rootNode_.getChild(path);
};
fb.core.SnapshotHolder.prototype.updateSnapshot = function(path, newSnapshotNode) {
  this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
};
if (goog.DEBUG) {
  fb.core.SnapshotHolder.prototype.toString = function() {
    return this.rootNode_.toString();
  };
}
;goog.provide("fb.core.FirebaseData");
goog.require("fb.core.SnapshotHolder");
fb.core.FirebaseData = function() {
  this.serverData = new fb.core.SnapshotHolder;
  this.mergedData = new fb.core.SnapshotHolder;
  this.visibleData = new fb.core.SnapshotHolder;
  this.pendingPuts = new fb.core.util.Tree;
};
fb.core.FirebaseData.prototype.updateServerData = function(path, serverNode) {
  this.serverData.updateSnapshot(path, serverNode);
  return this.mergeServerAndPendingData(path);
};
fb.core.FirebaseData.prototype.mergeServerAndPendingData = function(path) {
  var serverNode = this.serverData.getNode(path);
  var mergedNode = this.mergedData.getNode(path);
  var pendingPuts = this.pendingPuts.subTree(path);
  var hiddenBySet = false;
  var tempSet = pendingPuts;
  while (tempSet !== null) {
    if (tempSet.getValue() !== null) {
      hiddenBySet = true;
      break;
    }
    tempSet = tempSet.parent();
  }
  if (hiddenBySet) {
    return false;
  }
  var newMergedNode = fb.core.FirebaseData.mergeSnapshotNodes_(serverNode, mergedNode, pendingPuts);
  if (newMergedNode !== mergedNode) {
    this.mergedData.updateSnapshot(path, newMergedNode);
    return true;
  }
  return false;
};
fb.core.FirebaseData.mergeSnapshotNodes_ = function(serverNode, pendingNode, pendingPuts) {
  if (pendingPuts.isEmpty()) {
    return serverNode;
  }
  if (pendingPuts.getValue() !== null) {
    return pendingNode;
  }
  serverNode = serverNode || fb.core.snap.EMPTY_NODE;
  pendingPuts.forEachChild(function(node) {
    var childName = node.name();
    var serverChild = serverNode.getImmediateChild(childName);
    var pendingChild = pendingNode.getImmediateChild(childName);
    var pendingPutsChild = pendingPuts.subTree(childName);
    var mergedChild = fb.core.FirebaseData.mergeSnapshotNodes_(serverChild, pendingChild, pendingPutsChild);
    serverNode = serverNode.updateImmediateChild(childName, mergedChild);
  });
  return serverNode;
};
fb.core.FirebaseData.prototype.set = function(path, toSave) {
  var self = this;
  var setIds = [];
  goog.array.forEach(toSave, function(update) {
    var path = update.path;
    var node = update.node;
    var setId = fb.core.util.LUIDGenerator();
    self.pendingPuts.subTree(path).setValue(setId);
    self.mergedData.updateSnapshot(path, node);
    setIds.push({path:path, setId:setId});
  });
  return setIds;
};
fb.core.FirebaseData.prototype.setCompleted = function(setIds) {
  var self = this;
  goog.array.forEach(setIds, function(setData) {
    var setId = setData.setId;
    var path = setData.path;
    var pendingPutTree = self.pendingPuts.subTree(path);
    var pendingPut = pendingPutTree.getValue();
    fb.core.util.assert(pendingPut !== null, "pendingPut should not be null.");
    if (pendingPut === setId) {
      pendingPutTree.setValue(null);
    }
  });
};
fb.core.FirebaseData.prototype.forgetPath = function(path, lowerBounds) {
  var childSnapshots = [];
  for (var i = 0;i < lowerBounds.length;++i) {
    childSnapshots[i] = this.serverData.getNode(lowerBounds[i]);
  }
  this.serverData.updateSnapshot(path, fb.core.snap.EMPTY_NODE);
  for (i = 0;i < lowerBounds.length;++i) {
    this.serverData.updateSnapshot(lowerBounds[i], childSnapshots[i]);
  }
  return this.mergeServerAndPendingData(path);
};
goog.provide("fb.core.util.ServerValues");
fb.core.util.ServerValues.generateWithValues = function(values) {
  values = values || {};
  values["timestamp"] = values["timestamp"] || (new Date).getTime();
  return values;
};
fb.core.util.ServerValues.resolveDeferredValue = function(value, serverValues) {
  if (!value || typeof value !== "object") {
    return(value);
  } else {
    fb.core.util.assert(".sv" in value, "Unexpected leaf node or priority contents");
    return serverValues[value[".sv"]];
  }
};
fb.core.util.ServerValues.resolveDeferredValueTree = function(tree, serverValues) {
  var resolvedTree = new fb.core.SparseSnapshotTree;
  tree.forEachTree(new fb.core.util.Path(""), function(path, node) {
    resolvedTree.remember(path, fb.core.util.ServerValues.resolveDeferredValueSnapshot(node, serverValues));
  });
  return resolvedTree;
};
fb.core.util.ServerValues.resolveDeferredValueSnapshot = function(node, serverValues) {
  var priority = fb.core.util.ServerValues.resolveDeferredValue(node.getPriority(), serverValues), newNode;
  if (node.isLeafNode()) {
    var value = fb.core.util.ServerValues.resolveDeferredValue(node.getValue(), serverValues);
    if (value !== node.getValue() || priority !== node.getPriority()) {
      return new fb.core.snap.LeafNode(value, priority);
    } else {
      return node;
    }
  } else {
    newNode = node;
    if (priority !== node.getPriority()) {
      newNode = newNode.updatePriority(priority);
    }
    node.forEachChild(function(childName, childNode) {
      var newChildNode = fb.core.util.ServerValues.resolveDeferredValueSnapshot(childNode, serverValues);
      if (newChildNode !== childNode) {
        newNode = newNode.updateImmediateChild(childName, newChildNode);
      }
    });
    return newNode;
  }
};
goog.provide("fb.core.view.EventQueue");
fb.core.view.EventQueue = function() {
  this.events = [];
};
fb.core.view.EventQueue.prototype.queueEvents = function(eventDataList) {
  if (eventDataList.length === 0) {
    return;
  }
  for (var i = 0;i < eventDataList.length;i++) {
    this.events.push(eventDataList[i]);
  }
};
fb.core.view.EventQueue.prototype.raiseQueuedEvents = function() {
  for (var i = 0;i < this.events.length;i++) {
    if (this.events[i]) {
      var eventData = this.events[i];
      this.events[i] = null;
      this.raiseEvent_(eventData);
    }
  }
  this.events = [];
};
fb.core.view.EventQueue.prototype.raiseEvent_ = function(eventData) {
  var callback = eventData.callback;
  var snapshot = eventData.snapshot;
  var prevName = eventData.prevName;
  fb.core.util.exceptionGuard(function() {
    callback(snapshot, prevName);
  });
};
goog.provide("fb.core.view.Change");
fb.core.view.Change = function(type, snapshotNode, childName, prevChildName) {
  this.type = type;
  this.snapshotNode = snapshotNode;
  this.childName = childName;
  this.prevName = prevChildName;
};
fb.core.view.Change.CHILD_ADDED = "child_added";
fb.core.view.Change.CHILD_REMOVED = "child_removed";
fb.core.view.Change.CHILD_CHANGED = "child_changed";
fb.core.view.Change.CHILD_MOVED = "child_moved";
fb.core.view.Change.VALUE = "value";
goog.provide("fb.core.view.ViewBase");
goog.require("fb.core.view.Change");
goog.require("fb.core.view.EventQueue");
fb.core.view.ViewBase = function(query) {
  this.query_ = query;
  this.callbacks_ = [];
  this.eventQueue_ = new fb.core.view.EventQueue;
};
fb.core.view.ViewBase.prototype.getQuery = function() {
  return this.query_;
};
fb.core.view.ViewBase.prototype.addEventCallback = function(eventType, callback, opt_cancelCallback, opt_context) {
  this.callbacks_.push({type:eventType, callback:callback, cancel:opt_cancelCallback, context:opt_context});
  var eventDataList = [];
  var changes = this.generateChangesForSnapshot(this.snapshotNode_);
  if (this.isComplete_) {
    changes.push(new fb.core.view.Change("value", this.snapshotNode_));
  }
  for (var i = 0;i < changes.length;i++) {
    if (changes[i].type === eventType) {
      var firebaseRef = new Firebase(this.query_.repo, this.query_.path);
      if (changes[i].childName) {
        firebaseRef = firebaseRef.child(changes[i].childName);
      }
      eventDataList.push({callback:fb.core.util.bindCallback(callback, opt_context), snapshot:new fb.api.DataSnapshot(changes[i].snapshotNode, firebaseRef), prevName:changes[i].prevName});
    }
  }
  this.eventQueue_.queueEvents(eventDataList);
};
fb.core.view.ViewBase.prototype.removeEventCallback = function(opt_eventType, opt_callback, opt_context) {
  var found = false;
  for (var i = this.callbacks_.length - 1;i >= 0;i--) {
    var cbObject = this.callbacks_[i];
    if ((!opt_eventType || cbObject.type === opt_eventType) && (!opt_callback || cbObject.callback === opt_callback) && (!opt_context || cbObject.context === opt_context)) {
      this.callbacks_.splice(i, 1);
      found = true;
      if (opt_eventType && opt_callback) {
        break;
      }
    }
  }
  return found;
};
fb.core.view.ViewBase.prototype.hasCallbacks = function() {
  return this.callbacks_.length > 0;
};
fb.core.view.ViewBase.prototype.processChanges = function(newSnapshotNode, changes) {
  changes = this.processChanges_(newSnapshotNode, changes);
  if (changes != null) {
    this.queueEventsForChanges_(changes);
  }
};
fb.core.view.ViewBase.prototype.raiseCancelEvents = function(error) {
  for (var i = 0;i < this.callbacks_.length;i++) {
    var cbObj = this.callbacks_[i];
    if (cbObj.cancel) {
      fb.core.util.bindCallback(cbObj.cancel, cbObj.context)(error);
    }
  }
};
fb.core.view.ViewBase.prototype.queueEventsForChanges_ = function(changes) {
  var eventDataList = [];
  for (var i = 0;i < changes.length;i++) {
    var event = changes[i], logData = event.type;
    var firebaseRef = new Firebase(this.query_.repo, this.query_.path);
    if (changes[i].childName) {
      firebaseRef = firebaseRef.child(changes[i].childName);
    }
    var snapshot = new fb.api.DataSnapshot(changes[i].snapshotNode, firebaseRef);
    if (event.type === "value" && !snapshot.hasChildren()) {
      logData += "(" + snapshot.val() + ")";
    } else {
      if (event.type !== "value") {
        logData += " " + snapshot.name();
      }
    }
    fb.core.util.log(this.query_.repo.connection_.id + ": event:" + this.query_.path + ":" + this.query_.queryIdentifier() + ":" + logData);
    for (var j = 0;j < this.callbacks_.length;j++) {
      var cbObj = this.callbacks_[j];
      if (changes[i].type === cbObj.type) {
        eventDataList.push({callback:fb.core.util.bindCallback(cbObj.callback, cbObj.context), snapshot:snapshot, prevName:event.prevName});
      }
    }
  }
  this.eventQueue_.queueEvents(eventDataList);
};
fb.core.view.ViewBase.prototype.raiseQueuedEvents = function() {
  this.eventQueue_.raiseQueuedEvents();
};
fb.core.view.ViewBase.prototype.generateChangesForSnapshot = function(snapshotNode) {
  var events = [];
  if (!snapshotNode.isLeafNode()) {
    var prevName = null;
    snapshotNode.forEachChild(function(name, childNode) {
      events.push(new fb.core.view.Change(fb.core.view.Change.CHILD_ADDED, childNode, name, prevName));
      prevName = name;
    });
  }
  return events;
};
fb.core.view.ViewBase.prototype.isComplete = function() {
  return this.isComplete_;
};
fb.core.view.ViewBase.prototype.markComplete = function() {
  if (!this.isComplete_) {
    this.isComplete_ = true;
    this.queueEventsForChanges_([new fb.core.view.Change("value", this.snapshotNode_)]);
  }
};
fb.core.view.ViewBase.prototype.processChanges_ = goog.abstractMethod;
fb.core.view.ViewBase.prototype.getChildRelevance = goog.abstractMethod;
goog.provide("fb.core.view.DefaultView");
goog.require("fb.core.view.ViewBase");
fb.core.view.DefaultView = function(query, snapshotNode) {
  fb.core.view.ViewBase.call(this, query);
  this.snapshotNode_ = snapshotNode;
};
goog.inherits(fb.core.view.DefaultView, fb.core.view.ViewBase);
fb.core.view.DefaultView.prototype.processChanges_ = function(snapshotNode, changes) {
  this.snapshotNode_ = snapshotNode;
  if (this.isComplete_ && changes != null) {
    changes.push(new fb.core.view.Change("value", this.snapshotNode_));
  }
  return changes;
};
fb.core.view.DefaultView.prototype.getChildRelevance = function(path, newNode, serverData) {
  return{};
};
goog.provide("fb.core.view.SnapshotDiffer");
goog.require("fb.util.obj");
fb.core.view.SnapshotDiffer = function(diffMaskTree, onDiffCallback) {
  this.diffMaskTree_ = diffMaskTree;
  this.onDiffCallback_ = onDiffCallback;
};
fb.core.view.SnapshotDiffer.Diff = function(oldRootNode, newRootNode, path, diffMaskTree, onDiffCallback) {
  var oldNode = oldRootNode.getChild(path), newNode = newRootNode.getChild(path);
  var snapshotDiffer = new fb.core.view.SnapshotDiffer(diffMaskTree, onDiffCallback);
  var changed = snapshotDiffer.diffRecursive_(path, oldNode, newNode);
  var moved = !oldNode.isEmpty() && !newNode.isEmpty() && oldNode.getPriority() !== newNode.getPriority();
  if (changed || moved) {
    snapshotDiffer.propagateDiffUpward_(path, oldRootNode, newRootNode, changed, moved);
  }
};
fb.core.view.SnapshotDiffer.prototype.propagateDiffUpward_ = function(path, oldRootNode, newRootNode, changed, moved) {
  while (path.parent() !== null) {
    var oldNode = oldRootNode.getChild(path);
    var newNode = newRootNode.getChild(path);
    var parentPath = path.parent();
    if (!this.diffMaskTree_ || this.diffMaskTree_.subTree(parentPath).getValue()) {
      var newParentSnapshotNode = newRootNode.getChild(parentPath);
      var events = [];
      var nodeName = path.getBack(), prevName;
      if (oldNode.isEmpty()) {
        prevName = newParentSnapshotNode.getPredecessorChildName(nodeName, newNode);
        events.push(new fb.core.view.Change("child_added", newNode, nodeName, prevName));
      } else {
        if (newNode.isEmpty()) {
          events.push(new fb.core.view.Change("child_removed", oldNode, nodeName));
        } else {
          prevName = newParentSnapshotNode.getPredecessorChildName(nodeName, newNode);
          if (moved) {
            events.push(new fb.core.view.Change("child_moved", newNode, nodeName, prevName));
          }
          if (changed) {
            events.push(new fb.core.view.Change("child_changed", newNode, nodeName, prevName));
          }
        }
      }
      this.onDiffCallback_(parentPath, newParentSnapshotNode, events);
    }
    if (moved) {
      moved = false;
      changed = true;
    }
    path = parentPath;
  }
};
fb.core.view.SnapshotDiffer.prototype.diffRecursive_ = function(path, oldNode, newNode) {
  var changed;
  var events = [];
  if (oldNode === newNode) {
    changed = false;
  } else {
    if (oldNode.isLeafNode() && newNode.isLeafNode()) {
      changed = oldNode.getValue() !== newNode.getValue();
    } else {
      if (oldNode.isLeafNode()) {
        this.diffChildrenRecursive_(path, fb.core.snap.EMPTY_NODE, newNode, events);
        changed = true;
      } else {
        if (newNode.isLeafNode()) {
          this.diffChildrenRecursive_(path, oldNode, fb.core.snap.EMPTY_NODE, events);
          changed = true;
        } else {
          changed = this.diffChildrenRecursive_(path, oldNode, newNode, events);
        }
      }
    }
  }
  if (changed) {
    this.onDiffCallback_(path, newNode, events);
  } else {
    if (oldNode.getPriority() !== newNode.getPriority()) {
      this.onDiffCallback_(path, newNode, null);
    }
  }
  return changed;
};
fb.core.view.SnapshotDiffer.prototype.diffChildrenRecursive_ = function(path, oldNode, newNode, events) {
  var changed = false;
  var shouldDiff = !this.diffMaskTree_ || !this.diffMaskTree_.subTree(path).isEmpty();
  var addedChildList = [], removedChildList = [], movedChildList = [], changedChildList = [];
  var addedChildMap = {}, removedChildMap = {};
  var oldIterator, newIterator, oldChild, newChild, childPath, prevChildName, childChanged;
  oldIterator = oldNode.getIterator();
  oldChild = oldIterator.getNext();
  newIterator = newNode.getIterator();
  newChild = newIterator.getNext();
  while (oldChild !== null || newChild !== null) {
    var comparison = this.compareChildren_(oldChild, newChild);
    if (comparison < 0) {
      var addedIndex = fb.util.obj.get(addedChildMap, oldChild.key);
      if (goog.isDef(addedIndex)) {
        movedChildList.push({from:oldChild, to:addedChildList[addedIndex]});
        addedChildList[addedIndex] = null;
      } else {
        removedChildMap[oldChild.key] = removedChildList.length;
        removedChildList.push(oldChild);
      }
      changed = true;
      oldChild = oldIterator.getNext();
    } else {
      if (comparison > 0) {
        var removedIndex = fb.util.obj.get(removedChildMap, newChild.key);
        if (goog.isDef(removedIndex)) {
          movedChildList.push({from:removedChildList[removedIndex], to:newChild});
          removedChildList[removedIndex] = null;
        } else {
          addedChildMap[newChild.key] = addedChildList.length;
          addedChildList.push(newChild);
        }
        changed = true;
        newChild = newIterator.getNext();
      } else {
        childPath = path.child(newChild.key);
        childChanged = this.diffRecursive_(childPath, oldChild.value, newChild.value);
        if (childChanged) {
          changedChildList.push(newChild);
          changed = true;
        }
        if (oldChild.value.getPriority() !== newChild.value.getPriority()) {
          movedChildList.push({from:oldChild, to:newChild});
          changed = true;
        }
        oldChild = oldIterator.getNext();
        newChild = newIterator.getNext();
      }
    }
    if (!shouldDiff && changed) {
      return true;
    }
  }
  for (var i = 0;i < removedChildList.length;i++) {
    var removedChild = removedChildList[i];
    if (removedChild) {
      childPath = path.child(removedChild.key);
      this.diffRecursive_(childPath, removedChild.value, fb.core.snap.EMPTY_NODE);
      events.push(new fb.core.view.Change("child_removed", removedChild.value, removedChild.key));
    }
  }
  for (i = 0;i < addedChildList.length;i++) {
    var addedChild = addedChildList[i];
    if (addedChild) {
      childPath = path.child(addedChild.key);
      prevChildName = newNode.getPredecessorChildName(addedChild.key, addedChild.value);
      this.diffRecursive_(childPath, fb.core.snap.EMPTY_NODE, addedChild.value);
      events.push(new fb.core.view.Change("child_added", addedChild.value, addedChild.key, prevChildName));
    }
  }
  for (i = 0;i < movedChildList.length;i++) {
    var fromChild = movedChildList[i].from, toChild = movedChildList[i].to;
    childPath = path.child(toChild.key);
    prevChildName = newNode.getPredecessorChildName(toChild.key, toChild.value);
    events.push(new fb.core.view.Change("child_moved", toChild.value, toChild.key, prevChildName));
    childChanged = this.diffRecursive_(childPath, fromChild.value, toChild.value);
    if (childChanged) {
      changedChildList.push(toChild);
    }
  }
  for (i = 0;i < changedChildList.length;i++) {
    var changedChild = changedChildList[i];
    prevChildName = newNode.getPredecessorChildName(changedChild.key, changedChild.value);
    events.push(new fb.core.view.Change("child_changed", changedChild.value, changedChild.key, prevChildName));
  }
  return changed;
};
fb.core.view.SnapshotDiffer.prototype.compareChildren_ = function(a, b) {
  if (a === null) {
    return 1;
  } else {
    if (b === null) {
      return-1;
    } else {
      if (a.key === b.key) {
        return 0;
      } else {
        return fb.core.snap.NAME_AND_PRIORITY_COMPARATOR({name:a.key, priority:a.value.getPriority()}, {name:b.key, priority:b.value.getPriority()});
      }
    }
  }
};
goog.provide("fb.core.view.QueryMap");
goog.require("fb.core.util.CountedSet");
fb.core.view.QueryMap = function() {
  this.stopListener_ = null;
  this.path_ = null;
  fb.core.util.CountedSet.call(this);
};
goog.inherits(fb.core.view.QueryMap, fb.core.util.CountedSet);
fb.core.view.QueryMap.prototype.setActive = function(onDeactivate) {
  this.stopListener_ = onDeactivate;
};
fb.core.view.QueryMap.prototype.isActive = function() {
  return this.stopListener_ != null;
};
fb.core.view.QueryMap.prototype.setView = function(queryId, view) {
  this.add(queryId, view);
  if (!this.path_) {
    this.path_ = view.getQuery().path;
  }
};
fb.core.view.QueryMap.prototype.deactivate = function() {
  this.stopListener_ && this.stopListener_();
  this.stopListener_ = null;
};
fb.core.view.QueryMap.prototype.removeStopListener = function() {
  var result = this.stopListener_;
  this.stopListener_ = null;
  return result;
};
fb.core.view.QueryMap.prototype.hasDefaultQuery = function() {
  return this.contains("default");
};
fb.core.view.QueryMap.prototype.hasActiveDefaultQuery = function() {
  return this.stopListener_ != null && this.hasDefaultQuery();
};
fb.core.view.QueryMap.prototype.defaultView = function() {
  if (this.hasDefaultQuery()) {
    return this.get("default");
  } else {
    return null;
  }
};
fb.core.view.QueryMap.prototype.path = function() {
  return this.path_;
};
fb.core.view.QueryMap.prototype.toString = function() {
  return goog.array.map(this.keys(), function(k) {
    if (k === "default") {
      return "{}";
    }
    return k;
  }).join("$");
};
fb.core.view.QueryMap.prototype.queries = function() {
  var queries = [];
  this.each(function(queryId, view) {
    queries.push(view.getQuery());
  });
  return queries;
};
goog.provide("fb.core.view.QueryView");
goog.require("fb.core.view.ViewBase");
goog.require("fb.util.obj");
fb.core.view.QueryView = function(query, snapshotNode) {
  fb.core.view.ViewBase.call(this, query);
  this.snapshotNode_ = fb.core.snap.EMPTY_NODE;
  this.processChanges_(snapshotNode, this.generateChangesForSnapshot(snapshotNode));
};
goog.inherits(fb.core.view.QueryView, fb.core.view.ViewBase);
fb.core.view.QueryView.prototype.processChanges_ = function(snapshotNode, changes) {
  if (changes === null) {
    return changes;
  }
  var constraints = [], query = this.query_;
  if (goog.isDef(query.startPriority)) {
    if (goog.isDef(query.startName) && query.startName != null) {
      constraints.push(function(name, priority) {
        var priorityDiff = fb.core.util.priorityCompare(priority, query.startPriority);
        return priorityDiff > 0 || priorityDiff === 0 && fb.core.util.nameCompare(name, query.startName) >= 0;
      });
    } else {
      constraints.push(function(name, priority) {
        return fb.core.util.priorityCompare(priority, query.startPriority) >= 0;
      });
    }
  }
  if (goog.isDef(query.endPriority)) {
    if (goog.isDef(query.endName)) {
      constraints.push(function(name, priority) {
        var priorityDiff = fb.core.util.priorityCompare(priority, query.endPriority);
        return priorityDiff < 0 || priorityDiff === 0 && fb.core.util.nameCompare(name, query.endName) <= 0;
      });
    } else {
      constraints.push(function(name, priority) {
        return fb.core.util.priorityCompare(priority, query.endPriority) <= 0;
      });
    }
  }
  var limitEndName = null, limitStartName = null;
  if (goog.isDef(this.query_.itemLimit)) {
    if (goog.isDef(this.query_.startPriority)) {
      limitEndName = this.getLimitName_(snapshotNode, constraints, this.query_.itemLimit, false);
      if (limitEndName) {
        var endPriority = snapshotNode.getImmediateChild(limitEndName).getPriority();
        constraints.push(function(name, priority) {
          var priorityDiff = fb.core.util.priorityCompare(priority, endPriority);
          return priorityDiff < 0 || priorityDiff === 0 && fb.core.util.nameCompare(name, limitEndName) <= 0;
        });
      }
    } else {
      limitStartName = this.getLimitName_(snapshotNode, constraints, this.query_.itemLimit, true);
      if (limitStartName) {
        var startPriority = snapshotNode.getImmediateChild(limitStartName).getPriority();
        constraints.push(function(name, priority) {
          var priorityDiff = fb.core.util.priorityCompare(priority, startPriority);
          return priorityDiff > 0 || priorityDiff === 0 && fb.core.util.nameCompare(name, limitStartName) >= 0;
        });
      }
    }
  }
  var filteredChanges = [];
  var addedChildren = [], movedChildren = [], changedChildren = [];
  for (var i = 0;i < changes.length;i++) {
    var type = changes[i].type;
    var childName = changes[i].childName, childNode = changes[i].snapshotNode;
    switch(type) {
      case fb.core.view.Change.CHILD_ADDED:
        if (this.meetsConstraints_(constraints, childName, childNode)) {
          this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, childNode);
          addedChildren.push(changes[i]);
        }
        break;
      case fb.core.view.Change.CHILD_REMOVED:
        if (!this.snapshotNode_.getImmediateChild(childName).isEmpty()) {
          this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, null);
          filteredChanges.push(changes[i]);
        }
        break;
      case fb.core.view.Change.CHILD_CHANGED:
        if (!this.snapshotNode_.getImmediateChild(childName).isEmpty() && this.meetsConstraints_(constraints, childName, childNode)) {
          this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, childNode);
          changedChildren.push(changes[i]);
        }
        break;
      case fb.core.view.Change.CHILD_MOVED:
        var wasVisible = !this.snapshotNode_.getImmediateChild(childName).isEmpty();
        var isNowVisible = this.meetsConstraints_(constraints, childName, childNode);
        if (wasVisible) {
          if (isNowVisible) {
            this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, childNode);
            movedChildren.push(changes[i]);
          } else {
            filteredChanges.push(new fb.core.view.Change("child_removed", this.snapshotNode_.getImmediateChild(childName), childName));
            this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, null);
          }
        } else {
          if (isNowVisible) {
            this.snapshotNode_ = this.snapshotNode_.updateImmediateChild(childName, childNode);
            addedChildren.push(changes[i]);
          }
        }
        break;
    }
  }
  var startDeletingAt = limitEndName || limitStartName;
  if (startDeletingAt) {
    var reverse = limitStartName !== null;
    var startAddingAt = reverse ? this.snapshotNode_.getFirstChildName() : this.snapshotNode_.getLastChildName();
    var traversal = reverse ? snapshotNode.forEachChildReverse : snapshotNode.forEachChild;
    var deleting = false;
    var adding = false;
    var self = this;
    traversal.call(snapshotNode, function(name, node) {
      if (!adding && startAddingAt === null) {
        adding = true;
      }
      if (adding && deleting) {
        return true;
      }
      if (deleting) {
        filteredChanges.push(new fb.core.view.Change("child_removed", self.snapshotNode_.getImmediateChild(name), name));
        self.snapshotNode_ = self.snapshotNode_.updateImmediateChild(name, null);
      } else {
        if (adding) {
          addedChildren.push(new fb.core.view.Change("child_added", node, name));
          self.snapshotNode_ = self.snapshotNode_.updateImmediateChild(name, node);
        }
      }
      if (startAddingAt === name) {
        adding = true;
      }
      if (name === startDeletingAt) {
        deleting = true;
      }
    });
  }
  for (i = 0;i < addedChildren.length;i++) {
    var item = addedChildren[i];
    var prevName = this.snapshotNode_.getPredecessorChildName(item.childName, item.snapshotNode);
    filteredChanges.push(new fb.core.view.Change("child_added", item.snapshotNode, item.childName, prevName));
  }
  for (i = 0;i < movedChildren.length;i++) {
    item = movedChildren[i];
    prevName = this.snapshotNode_.getPredecessorChildName(item.childName, item.snapshotNode);
    filteredChanges.push(new fb.core.view.Change("child_moved", item.snapshotNode, item.childName, prevName));
  }
  for (i = 0;i < changedChildren.length;i++) {
    item = changedChildren[i];
    prevName = this.snapshotNode_.getPredecessorChildName(item.childName, item.snapshotNode);
    filteredChanges.push(new fb.core.view.Change("child_changed", item.snapshotNode, item.childName, prevName));
  }
  if (this.isComplete_ && filteredChanges.length > 0) {
    filteredChanges.push(new fb.core.view.Change("value", this.snapshotNode_));
  }
  return filteredChanges;
};
fb.core.view.QueryView.prototype.getLimitName_ = function(snapshotNode, constraints, limit, reverse) {
  if (snapshotNode.isLeafNode()) {
    return null;
  }
  var forEachChild = reverse ? snapshotNode.forEachChildReverse : snapshotNode.forEachChild;
  var self = this, lastChild = null;
  forEachChild.call(snapshotNode, function(childName, child) {
    if (self.meetsConstraints_(constraints, childName, child)) {
      lastChild = childName;
      limit--;
      if (limit === 0) {
        return true;
      }
    }
  });
  return lastChild;
};
fb.core.view.QueryView.prototype.meetsConstraints_ = function(constraints, childName, child) {
  for (var i = 0;i < constraints.length;i++) {
    if (!constraints[i](childName, child.getPriority())) {
      return false;
    }
  }
  return true;
};
fb.core.view.QueryView.prototype.hasChild = function(childName) {
  return this.snapshotNode_.getImmediateChild(childName) !== fb.core.snap.EMPTY_NODE;
};
fb.core.view.QueryView.ENTERING_VIEW = 1;
fb.core.view.QueryView.LEAVING_VIEW = 2;
fb.core.view.QueryView.IN_VIEW = 3;
fb.core.view.QueryView.OUT_OF_VIEW = 4;
fb.core.view.QueryView.prototype.getChildRelevance = function(path, newNode, serverData) {
  var childView = {};
  if (!this.snapshotNode_.isLeafNode()) {
    this.snapshotNode_.forEachChild(function(childName) {
      childView[childName] = fb.core.view.QueryView.IN_VIEW;
    });
  }
  var snapshotCopy = this.snapshotNode_;
  var queryRoot = serverData.getNode(new fb.core.util.Path(""));
  var diffMask = new fb.core.util.Tree;
  var queryPath = this.query_.path;
  var querySubTree = diffMask.subTree(queryPath);
  querySubTree.setValue(true);
  var newSnap = fb.core.snap.EMPTY_NODE.updateChild(path, newNode);
  var self = this;
  var onDiff = function(path, snap, changes) {
    if (changes !== null && path.toString() === self.query_.path.toString()) {
      self.processChanges_(snap, changes);
    }
  };
  fb.core.view.SnapshotDiffer.Diff(queryRoot, newSnap, path, diffMask, onDiff);
  if (!this.snapshotNode_.isLeafNode()) {
    this.snapshotNode_.forEachChild(function(childName) {
      if (!fb.util.obj.contains(childView, childName)) {
        childView[childName] = fb.core.view.QueryView.ENTERING_VIEW;
      }
    });
    goog.object.forEach(childView, function(childState, childName) {
      if (self.snapshotNode_.getImmediateChild(childName).isEmpty()) {
        childView[childName] = fb.core.view.QueryView.LEAVING_VIEW;
      }
    });
  } else {
    goog.object.forEach(childView, function(childState, childName) {
      childView[childName] = fb.core.view.QueryView.LEAVING_VIEW;
    });
  }
  this.snapshotNode_ = snapshotCopy;
  return childView;
};
goog.provide("fb.core.ViewManager");
goog.require("fb.core.util");
goog.require("fb.core.view.DefaultView");
goog.require("fb.core.view.QueryMap");
goog.require("fb.core.view.QueryView");
goog.require("fb.core.view.SnapshotDiffer");
goog.require("fb.util.obj");
fb.core.ViewManager = function(connection, data) {
  this.connection_ = connection;
  this.data_ = data;
  this.oldDataNode_ = data.rootNode_;
  this.viewsTree_ = new fb.core.util.Tree;
};
fb.core.ViewManager.prototype.addEventCallbackForQuery = function(query, eventType, callback, opt_cancelCallback, opt_context) {
  var path = query.path;
  var viewsNode = this.viewsTree_.subTree(path);
  var queryMap = viewsNode.getValue();
  if (queryMap === null) {
    queryMap = new fb.core.view.QueryMap;
    viewsNode.setValue(queryMap);
  } else {
    fb.core.util.assert(!queryMap.isEmpty(), "We shouldn't be storing empty QueryMaps");
  }
  var queryId = query.queryIdentifier();
  if (!queryMap.contains(queryId)) {
    var snapNode = this.data_.rootNode_.getChild(path);
    var view = this.createView_(query, snapNode);
    this.ensureListening_(viewsNode, queryMap, queryId, view);
    view.addEventCallback(eventType, callback, opt_cancelCallback, opt_context);
    var isComplete = this.viewsTree_.subTree(path).forEachAncestor(function(viewsNode) {
      if (viewsNode.getValue() && viewsNode.getValue().defaultView() && viewsNode.getValue().defaultView().isComplete()) {
        return true;
      }
    }, true);
    isComplete = isComplete || this.connection_ === null && !this.data_.getNode(path).isEmpty();
    if (isComplete) {
      view.markComplete();
    }
    view.raiseQueuedEvents();
  } else {
    var view = queryMap.get(queryId);
    view.addEventCallback(eventType, callback, opt_cancelCallback, opt_context);
    view.raiseQueuedEvents();
  }
};
fb.core.ViewManager.prototype.removeCallbackForQuery_ = function(queryMap, queryId, eventType, callback, ctx) {
  var view = queryMap.get(queryId);
  var found = view && view.removeEventCallback(eventType, callback, ctx) && !view.hasCallbacks();
  if (found) {
    queryMap.remove(queryId);
  }
  return found;
};
fb.core.ViewManager.prototype.doRemoveQueries_ = function(queryMap, query, eventType, callback, ctx) {
  var queryId = query ? query.queryIdentifier() : null;
  var foundQueryIds = [];
  if (queryId && queryId !== "default") {
    if (this.removeCallbackForQuery_(queryMap, queryId, eventType, callback, ctx)) {
      foundQueryIds.push(queryId);
    }
  } else {
    var self = this;
    goog.array.forEach(queryMap.keys(), function(qId) {
      if (self.removeCallbackForQuery_(queryMap, qId, eventType, callback, ctx)) {
        foundQueryIds.push(qId);
      }
    });
  }
  return foundQueryIds;
};
fb.core.ViewManager.prototype.removeEventCallbackForQuery = function(query, eventType, opt_callback, opt_context) {
  var path = query.path;
  var viewsNode = this.viewsTree_.subTree(path);
  var queryMap = viewsNode.getValue();
  if (queryMap === null) {
    return null;
  }
  return this.removeQueries_(queryMap, query, eventType, opt_callback, opt_context);
};
fb.core.ViewManager.prototype.removeQueries_ = function(queryMap, query, eventType, callback, ctx) {
  var path = queryMap.path();
  var viewsNode = this.viewsTree_.subTree(path);
  var foundQueryIds = this.doRemoveQueries_(queryMap, query, eventType, callback, ctx);
  if (queryMap.isEmpty()) {
    viewsNode.setValue(null);
  }
  var activeAncestor = this.hasActiveAncestor(viewsNode);
  if (foundQueryIds.length > 0 && !activeAncestor) {
    var child = viewsNode;
    var parent = viewsNode.parent();
    var found = false;
    while (!found && parent) {
      var parentQueryMap = parent.getValue();
      if (parentQueryMap) {
        fb.core.util.assert(!parentQueryMap.hasActiveDefaultQuery());
        var pathSegment = child.name();
        var relevant = false;
        parentQueryMap.each(function(queryId, view) {
          relevant = view.hasChild(pathSegment) || relevant;
        });
        if (relevant) {
          found = true;
        }
      }
      child = parent;
      parent = parent.parent();
    }
    var newListenerPaths = null;
    if (!queryMap.hasActiveDefaultQuery()) {
      var stopListener = queryMap.removeStopListener();
      newListenerPaths = this.collectListeners_(viewsNode, true);
      stopListener && stopListener();
    }
    return found ? null : newListenerPaths;
  } else {
    return null;
  }
};
fb.core.ViewManager.prototype.markQueriesComplete = function(path, includeSelf) {
  var viewsNode = this.viewsTree_.subTree(path);
  viewsNode.forEachDescendant(function(descendant) {
    var queryMap = descendant.getValue();
    if (queryMap) {
      queryMap.each(function(queryId, view) {
        view.markComplete();
      });
    }
  }, includeSelf, true);
};
fb.core.ViewManager.prototype.raiseEventsForChange = function(changePath, completeQueryPaths) {
  var self = this;
  var oldNode = this.oldDataNode_;
  var newNode = this.data_.rootNode_;
  this.oldDataNode_ = newNode;
  var path2Complete = {};
  for (var i = 0;i < completeQueryPaths.length;i++) {
    path2Complete[completeQueryPaths[i].toString()] = true;
  }
  var shouldMarkComplete = function(path) {
    do {
      if (path2Complete[path.toString()]) {
        return true;
      }
      path = path.parent();
    } while (path !== null);
    return false;
  };
  var onDiff = function(path, snapNode, changes) {
    if (changePath.contains(path)) {
      var markQueriesComplete = shouldMarkComplete(path);
      if (markQueriesComplete) {
        self.markQueriesComplete(path, false);
      }
      self.processChanges(path, snapNode, changes);
      if (markQueriesComplete) {
        self.markQueriesComplete(path, true);
      }
    } else {
      self.processChanges(path, snapNode, changes);
    }
  };
  fb.core.view.SnapshotDiffer.Diff(oldNode, newNode, changePath, this.viewsTree_, onDiff);
  if (shouldMarkComplete(changePath)) {
    this.markQueriesComplete(changePath, true);
  }
  this.raiseQueuedEvents_(changePath);
};
fb.core.ViewManager.prototype.raiseQueuedEvents_ = function(path) {
  var viewsNode = this.viewsTree_.subTree(path);
  viewsNode.forEachDescendant(function(descendant) {
    var queryMap = descendant.getValue();
    if (queryMap) {
      queryMap.each(function(queryId, view) {
        view.raiseQueuedEvents();
      });
    }
  }, true, true);
  viewsNode.forEachAncestor(function(ancestor) {
    var queryMap = ancestor.getValue();
    if (queryMap) {
      queryMap.each(function(queryId, view) {
        view.raiseQueuedEvents();
      });
    }
  }, false);
};
fb.core.ViewManager.prototype.processChanges = function(path, snapNode, changes) {
  var queryMap = this.viewsTree_.subTree(path).getValue();
  if (queryMap === null) {
    return;
  }
  queryMap.each(function(queryId, view) {
    view.processChanges(snapNode, changes);
  });
};
fb.core.ViewManager.prototype.hasActiveAncestor = function(viewNode) {
  return viewNode.forEachAncestor(function(node) {
    return node.getValue() && node.getValue().hasActiveDefaultQuery();
  });
};
fb.core.ViewManager.prototype.ensureListening_ = function(viewNode, queryMap, queryId, view) {
  if (queryMap.hasActiveDefaultQuery() || this.hasActiveAncestor(viewNode)) {
    queryMap.setView(queryId, view);
  } else {
    var currentId;
    var currentQueries;
    if (!queryMap.isEmpty()) {
      currentId = queryMap.toString();
      currentQueries = queryMap.queries();
    }
    queryMap.setView(queryId, view);
    queryMap.setActive(this.startListening(queryMap));
    if (currentId && currentQueries) {
      this.connection_.unlisten(queryMap.path(), currentId, currentQueries);
    }
  }
  if (queryMap.hasActiveDefaultQuery()) {
    viewNode.forEachDescendant(function(node) {
      var childQueryMap = node.getValue();
      childQueryMap && childQueryMap.deactivate();
    });
  }
};
fb.core.ViewManager.prototype.collectListeners_ = function(viewsNode, startListeners) {
  var newListenerPaths = [];
  var self = this;
  var collectRecursive = function(node) {
    var queryMap = node.getValue();
    if (queryMap && queryMap.hasDefaultQuery()) {
      newListenerPaths.push(queryMap.path());
      if (startListeners && !queryMap.isActive()) {
        queryMap.setActive(self.startListening(queryMap));
      }
    } else {
      if (startListeners && queryMap) {
        if (!queryMap.isActive()) {
          queryMap.setActive(self.startListening(queryMap));
        }
        var childSet = {};
        queryMap.each(function(queryId, view) {
          view.snapshotNode_.forEachChild(function(childName, child) {
            if (!fb.util.obj.contains(childSet, childName)) {
              childSet[childName] = true;
              var newPath = queryMap.path().child(childName);
              newListenerPaths.push(newPath);
            }
          });
        });
      }
      node.forEachChild(collectRecursive);
    }
  };
  collectRecursive(viewsNode);
  return newListenerPaths;
};
fb.core.ViewManager.prototype.startListening = function(queryMap) {
  if (this.connection_) {
    var self = this;
    var connection = this.connection_, path = queryMap.path(), qid = queryMap.toString(), queries = queryMap.queries();
    var listenCanceled;
    var cancelListen = function() {
      listenCanceled = true;
      connection.unlisten(path, qid, queries);
    };
    var qids = queryMap.keys();
    var isDefault = queryMap.hasDefaultQuery();
    this.connection_.listen(queryMap, function(status) {
      if (status !== "ok") {
        var error = fb.core.util.errorForServerCode(status);
        fb.core.util.warn("on() or once() for " + queryMap.path().toString() + " failed: " + error.toString());
        self.raiseCancelEventsForQuery_(queryMap, error);
      } else {
        if (!listenCanceled) {
          if (isDefault) {
            self.markQueriesComplete(queryMap.path(), true);
          } else {
            goog.array.forEach(qids, function(qid) {
              var view = queryMap.get(qid);
              view && view.markComplete();
            });
          }
          self.raiseQueuedEvents_(queryMap.path());
        }
      }
    });
    return cancelListen;
  } else {
    return goog.nullFunction;
  }
};
fb.core.ViewManager.prototype.raiseCancelEventsForQuery_ = function(queryMap, error) {
  if (!queryMap) {
    return;
  }
  queryMap.each(function(queryId, view) {
    view.raiseCancelEvents(error);
  });
  this.removeQueries_(queryMap);
};
fb.core.ViewManager.prototype.createView_ = function(query, snapNode) {
  if (query.queryIdentifier() === "default") {
    return new fb.core.view.DefaultView(query, snapNode);
  } else {
    return new fb.core.view.QueryView(query, snapNode);
  }
};
fb.core.ViewManager.prototype.getChildRelevance = function(path, queryMap, newNode, mergedData) {
  var childRelevance = {};
  var updateChildRelevance = function(newRelevances) {
    goog.object.forEach(newRelevances, function(viewState, childName) {
      if (viewState === fb.core.view.QueryView.IN_VIEW) {
        childRelevance[childName] = fb.core.view.QueryView.IN_VIEW;
      } else {
        var oldViewState = fb.util.obj.get(childRelevance, childName) || viewState;
        if (oldViewState === viewState) {
          childRelevance[childName] = viewState;
        } else {
          childRelevance[childName] = fb.core.view.QueryView.IN_VIEW;
        }
      }
    });
  };
  queryMap.each(function(queryId, view) {
    updateChildRelevance(view.getChildRelevance(path, newNode, mergedData));
  });
  if (!newNode.isLeafNode()) {
    newNode.forEachChild(function(childName) {
      if (!fb.util.obj.contains(childRelevance, childName)) {
        childRelevance[childName] = fb.core.view.QueryView.OUT_OF_VIEW;
      }
    });
  }
  return childRelevance;
};
fb.core.ViewManager.prototype.getAncestorUpdate = function(path, newNode, mergedData) {
  var childTree = this.viewsTree_.subTree(path);
  var parentTree = childTree.parent();
  var prunedUpdates = [];
  while (parentTree !== null) {
    var parentQueryMap = parentTree.getValue();
    if (parentQueryMap !== null) {
      if (parentQueryMap.hasDefaultQuery()) {
        return[{path:path, node:newNode}];
      } else {
        var childRelevance = this.getChildRelevance(path, parentQueryMap, newNode, mergedData);
        var viewState = fb.util.obj.get(childRelevance, childTree.name());
        if (viewState === fb.core.view.QueryView.IN_VIEW || viewState === fb.core.view.QueryView.ENTERING_VIEW) {
          return[{path:path, node:newNode}];
        } else {
          if (viewState === fb.core.view.QueryView.LEAVING_VIEW) {
            prunedUpdates.push({path:path, node:fb.core.snap.EMPTY_NODE});
          } else {
          }
        }
      }
    }
    childTree = parentTree;
    parentTree = parentTree.parent();
  }
  return prunedUpdates;
};
fb.core.ViewManager.prototype.pruneNonDefaultQuery = function(queryMap, viewNode, newNode, mergedData) {
  var path = queryMap.path();
  var childRelevance = this.getChildRelevance(path, queryMap, newNode, mergedData);
  var constructed = fb.core.snap.EMPTY_NODE;
  var childListeners = [];
  var self = this;
  goog.object.forEach(childRelevance, function(viewState, childName) {
    var childPath = new fb.core.util.Path(childName);
    if (viewState === fb.core.view.QueryView.IN_VIEW || viewState === fb.core.view.QueryView.ENTERING_VIEW) {
      constructed = constructed.updateImmediateChild(childName, newNode.getChild(childPath));
    } else {
      if (viewState === fb.core.view.QueryView.LEAVING_VIEW) {
        childListeners.push({path:path.child(childName), node:fb.core.snap.EMPTY_NODE});
        childListeners = childListeners.concat(self.pruneObjectToListeners_(newNode.getChild(childPath), viewNode.subTree(childPath), mergedData));
      } else {
        childListeners = childListeners.concat(self.pruneObjectToListeners_(newNode.getChild(childPath), viewNode.subTree(childPath), mergedData));
      }
    }
  });
  return[{path:path, node:constructed}].concat(childListeners);
};
fb.core.ViewManager.prototype.pruneUpdateNode = function(path, newNode, mergedData) {
  var ancestorUpdates = this.getAncestorUpdate(path, newNode, mergedData);
  if (ancestorUpdates.length == 1) {
    if (!ancestorUpdates[0].node.isEmpty() || newNode.isEmpty()) {
      return ancestorUpdates;
    }
  }
  var updateRoot = this.viewsTree_.subTree(path);
  var queryMap = updateRoot.getValue();
  if (queryMap !== null) {
    if (queryMap.hasDefaultQuery()) {
      ancestorUpdates.push({path:path, node:newNode});
    } else {
      ancestorUpdates = ancestorUpdates.concat(this.pruneNonDefaultQuery(queryMap, updateRoot, newNode, mergedData));
    }
  } else {
    ancestorUpdates = ancestorUpdates.concat(this.pruneObjectToListeners_(newNode, updateRoot, mergedData));
  }
  return ancestorUpdates;
};
fb.core.ViewManager.prototype.pruneObjectToListeners_ = function(node, subTree, mergedData) {
  var queryMap = subTree.getValue();
  if (queryMap !== null) {
    if (queryMap.hasDefaultQuery()) {
      return[{path:subTree.path(), node:node}];
    } else {
      return this.pruneNonDefaultQuery(queryMap, subTree, node, mergedData);
    }
  } else {
    var snapshots = [];
    var self = this;
    subTree.forEachChild(function(childTree) {
      if (node.isLeafNode()) {
        var childNode = fb.core.snap.EMPTY_NODE
      } else {
        childNode = node.getImmediateChild(childTree.name());
      }
      var childSnaps = self.pruneObjectToListeners_(childNode, childTree, mergedData);
      snapshots = snapshots.concat(childSnaps);
    });
    return snapshots;
  }
};
goog.provide("fb.core.Repo");
goog.require("fb.core.FirebaseData");
goog.require("fb.api.DataSnapshot");
goog.require("fb.core.FirebaseData");
goog.require("fb.core.PersistentConnection");
goog.require("fb.core.SparseSnapshotTree");
goog.require("fb.core.ViewManager");
goog.require("fb.core.stats.StatsCollection");
goog.require("fb.core.stats.StatsListener");
goog.require("fb.core.stats.StatsManager");
goog.require("fb.core.stats.StatsReporter");
goog.require("fb.core.util.ServerValues");
goog.require("fb.core.util.Tree");
goog.require("fb.util.json");
goog.require("goog.string");
fb.core.Repo = function(repoInfo) {
  this.repoInfo_ = repoInfo;
  this.stats_ = fb.core.stats.StatsManager.getCollection(repoInfo);
  this.connection_ = new fb.core.PersistentConnection(this.repoInfo_, goog.bind(this.onDataUpdate_, this), goog.bind(this.onConnectStatus_, this), goog.bind(this.onAuthStatus_, this), goog.bind(this.onServerInfoUpdate_, this), goog.bind(this.getServerDataHashForPath_, this));
  this.statsReporter_ = fb.core.stats.StatsManager.getOrCreateReporter(repoInfo, goog.bind(function() {
    return new fb.core.stats.StatsReporter(this.stats_, this.connection_);
  }, this));
  this.transactions_init_();
  this.data_ = new fb.core.FirebaseData;
  this.viewManager_ = new fb.core.ViewManager(this.connection_, this.data_.visibleData);
  this.infoData_ = new fb.core.SnapshotHolder;
  this.infoViewManager_ = new fb.core.ViewManager(null, this.infoData_);
  this.updateInfo_("connected", false);
  this.updateInfo_("authenticated", false);
  this.onDisconnect_ = new fb.core.SparseSnapshotTree;
  this.dataUpdateCount = 0;
};
fb.core.Repo.prototype.toString = function() {
  return(this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
};
fb.core.Repo.prototype.name = function() {
  return this.repoInfo_.namespace;
};
fb.core.Repo.prototype.serverTime = function() {
  var offsetNode = this.infoData_.getNode(new fb.core.util.Path(".info/serverTimeOffset"));
  var offset = offsetNode.val() || 0;
  return(new Date).getTime() + offset;
};
fb.core.Repo.prototype.generateServerValues = function() {
  return fb.core.util.ServerValues.generateWithValues({"timestamp":this.serverTime()});
};
fb.core.Repo.prototype.onDataUpdate_ = function(pathString, data, isMerge) {
  this.dataUpdateCount++;
  if (this.interceptServerDataCallback_) {
    data = this.interceptServerDataCallback_(pathString, data);
  }
  var path, newNode;
  var completePaths = [];
  if (pathString.length >= 9 && pathString.lastIndexOf(".priority") === pathString.length - 9) {
    path = new fb.core.util.Path(pathString.substring(0, pathString.length - 9));
    newNode = this.data_.serverData.getNode(path).updatePriority(data);
    completePaths.push(path);
  } else {
    if (isMerge) {
      path = new fb.core.util.Path(pathString);
      newNode = this.data_.serverData.getNode(path);
      goog.object.forEach(data, function(childData, childName) {
        var childPath = new fb.core.util.Path(childName);
        if (childName === ".priority") {
          newNode = newNode.updatePriority(childData);
        } else {
          newNode = newNode.updateChild(childPath, fb.core.snap.NodeFromJSON(childData));
          completePaths.push(path.child(childName));
        }
      });
    } else {
      path = new fb.core.util.Path(pathString);
      newNode = fb.core.snap.NodeFromJSON(data);
      completePaths.push(path);
    }
  }
  var prunedNodes = this.viewManager_.pruneUpdateNode(path, newNode, this.data_.mergedData, isMerge ? data : null);
  var changed = false;
  for (var i = 0;i < prunedNodes.length;++i) {
    var node = prunedNodes[i];
    changed = this.data_.updateServerData(node.path, node.node) || changed;
  }
  if (changed) {
    path = this.rerunTransactionsAndUpdateVisibleData_(path);
  }
  this.viewManager_.raiseEventsForChange(path, completePaths);
};
fb.core.Repo.prototype.interceptServerData_ = function(callback) {
  this.interceptServerDataCallback_ = callback;
};
fb.core.Repo.prototype.onConnectStatus_ = function(connectStatus) {
  this.updateInfo_("connected", connectStatus);
  if (connectStatus === false) {
    this.runOnDisconnectEvents_();
  }
};
fb.core.Repo.prototype.onServerInfoUpdate_ = function(updates) {
  var self = this;
  fb.core.util.each(updates, function(value, key) {
    self.updateInfo_(key, value);
  });
};
fb.core.Repo.prototype.getServerDataHashForPath_ = function(pathString) {
  var path = new fb.core.util.Path(pathString);
  return this.data_.serverData.getNode(path).hash();
};
fb.core.Repo.prototype.onAuthStatus_ = function(authStatus) {
  this.updateInfo_("authenticated", authStatus);
};
fb.core.Repo.prototype.updateInfo_ = function(pathString, value) {
  var path = new fb.core.util.Path("/.info/" + pathString);
  this.infoData_.updateSnapshot(path, fb.core.snap.NodeFromJSON(value));
  this.infoViewManager_.raiseEventsForChange(path, [path]);
};
fb.core.Repo.prototype.auth = function(cred, onComplete, onCancel) {
  if (this.repoInfo_.isDemoHost()) {
    fb.core.util.warn("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");
  }
  var self = this;
  this.connection_.auth(cred, function(status, data) {
    self.callOnCompleteCallback(onComplete, status, data);
  }, function(cancelStatus, cancelReason) {
    fb.core.util.warn("auth() was canceled: " + cancelReason);
    if (onCancel) {
      var err = new Error(cancelReason);
      err.code = cancelStatus.toUpperCase();
      onCancel(err);
    }
  });
};
fb.core.Repo.prototype.unauth = function(onComplete) {
  var self = this;
  this.connection_.unauth(function(status, errorReason) {
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
};
fb.core.Repo.prototype.setWithPriority = function(path, newVal, newPriority, onComplete) {
  this.log_("set", {path:path.toString(), value:newVal, priority:newPriority});
  var serverValues = this.generateServerValues();
  var newNodeUnresolved = fb.core.snap.NodeFromJSON(newVal, newPriority);
  var newNode = fb.core.util.ServerValues.resolveDeferredValueSnapshot(newNodeUnresolved, serverValues);
  var prunedNodes = this.viewManager_.pruneUpdateNode(path, newNode, this.data_.mergedData, null);
  var setIds = this.data_.set(path, prunedNodes);
  var self = this;
  this.connection_.put(path.toString(), newNodeUnresolved.val(true), function(status, errorReason) {
    var success = status === "ok";
    if (!success) {
      fb.core.util.warn("set at " + path + " failed: " + status);
    }
    self.data_.setCompleted(setIds);
    self.data_.mergeServerAndPendingData(path);
    var affectedPath = self.rerunTransactionsAndUpdateVisibleData_(path);
    self.viewManager_.raiseEventsForChange(affectedPath, []);
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
  var affectedPath = this.abortTransactions_(path);
  this.rerunTransactionsAndUpdateVisibleData_(affectedPath);
  this.viewManager_.raiseEventsForChange(affectedPath, [path]);
};
fb.core.Repo.prototype.update = function(path, childrenToMerge, onComplete) {
  this.log_("update", {path:path.toString(), value:childrenToMerge});
  var updatedNode = this.data_.visibleData.getNode(path);
  var empty = true;
  var completePaths = [];
  var serverValues = this.generateServerValues();
  var setIds = [];
  for (var childName in childrenToMerge) {
    empty = false;
    var newChildNodeUnresolved = fb.core.snap.NodeFromJSON(childrenToMerge[childName]);
    var newChildNode = fb.core.util.ServerValues.resolveDeferredValueSnapshot(newChildNodeUnresolved, serverValues);
    updatedNode = updatedNode.updateImmediateChild(childName, newChildNode);
    var childPath = path.child(childName);
    completePaths.push(childPath);
    var prunedNodes = this.viewManager_.pruneUpdateNode(childPath, newChildNode, this.data_.mergedData, null);
    setIds = setIds.concat(this.data_.set(path, prunedNodes));
  }
  if (empty) {
    fb.core.util.log("update() called with empty data.  Don't do anything.");
    this.callOnCompleteCallback(onComplete, "ok");
    return;
  }
  var self = this;
  this.connection_.merge(path.toString(), childrenToMerge, function(status, errorReason) {
    var success = status === "ok";
    if (!success) {
      fb.core.util.warn("update at " + path + " failed: " + status);
    }
    self.data_.setCompleted(setIds);
    self.data_.mergeServerAndPendingData(path);
    var affectedPath = self.rerunTransactionsAndUpdateVisibleData_(path);
    self.viewManager_.raiseEventsForChange(affectedPath, []);
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
  var affectedPath = this.abortTransactions_(path);
  this.rerunTransactionsAndUpdateVisibleData_(affectedPath);
  self.viewManager_.raiseEventsForChange(affectedPath, completePaths);
};
fb.core.Repo.prototype.setPriority = function(path, priority, opt_onComplete) {
  this.log_("setPriority", {path:path.toString(), priority:priority});
  var serverValues = this.generateServerValues();
  var resolvedPriority = fb.core.util.ServerValues.resolveDeferredValue(priority, serverValues);
  var newNode = this.data_.mergedData.getNode(path).updatePriority(resolvedPriority);
  var prunedNodes = this.viewManager_.pruneUpdateNode(path, newNode, this.data_.mergedData, null);
  var setIds = this.data_.set(path, prunedNodes);
  var self = this;
  this.connection_.put(path.toString() + "/.priority", priority, function(status, errorReason) {
    if (status === "permission_denied") {
      fb.core.util.warn("setPriority at " + path + " failed: " + status);
    }
    self.data_.setCompleted(setIds);
    self.data_.mergeServerAndPendingData(path);
    var affectedPath = self.rerunTransactionsAndUpdateVisibleData_(path);
    self.viewManager_.raiseEventsForChange(affectedPath, []);
    self.callOnCompleteCallback(opt_onComplete, status, errorReason);
  });
  var affectedPath = this.rerunTransactionsAndUpdateVisibleData_(path);
  self.viewManager_.raiseEventsForChange(affectedPath, []);
};
fb.core.Repo.prototype.runOnDisconnectEvents_ = function() {
  this.log_("onDisconnectEvents");
  var self = this;
  var setIds = [];
  var serverValues = this.generateServerValues();
  var resolvedOnDisconnectTree = fb.core.util.ServerValues.resolveDeferredValueTree(this.onDisconnect_, serverValues);
  resolvedOnDisconnectTree.forEachTree(new fb.core.util.Path(""), function(path, subtree) {
    var prunedNodes = self.viewManager_.pruneUpdateNode(path, subtree, self.data_.mergedData, null);
    setIds.push.apply(setIds, self.data_.set(path, prunedNodes));
    var affectedPath = self.abortTransactions_(path);
    self.rerunTransactionsAndUpdateVisibleData_(affectedPath);
    self.viewManager_.raiseEventsForChange(affectedPath, [path]);
  });
  this.data_.setCompleted(setIds);
  this.onDisconnect_ = new fb.core.SparseSnapshotTree;
};
fb.core.Repo.prototype.onDisconnectCancel = function(path, onComplete) {
  var self = this;
  this.connection_.onDisconnectCancel(path.toString(), function(status, errorReason) {
    if (status === "ok") {
      self.onDisconnect_.forget(path);
    }
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
};
fb.core.Repo.prototype.onDisconnectSet = function(path, value, onComplete) {
  var self = this;
  var newNode = fb.core.snap.NodeFromJSON(value);
  this.connection_.onDisconnectPut(path.toString(), newNode.val(true), function(status, errorReason) {
    if (status === "ok") {
      self.onDisconnect_.remember(path, newNode);
    }
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
};
fb.core.Repo.prototype.onDisconnectSetWithPriority = function(path, value, priority, onComplete) {
  var self = this;
  var newNode = fb.core.snap.NodeFromJSON(value, priority);
  this.connection_.onDisconnectPut(path.toString(), newNode.val(true), function(status, errorReason) {
    if (status === "ok") {
      self.onDisconnect_.remember(path, newNode);
    }
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
};
fb.core.Repo.prototype.onDisconnectUpdate = function(path, childrenToMerge, onComplete) {
  var empty = true;
  for (var childName in childrenToMerge) {
    empty = false;
  }
  if (empty) {
    fb.core.util.log("onDisconnect().update() called with empty data.  Don't do anything.");
    this.callOnCompleteCallback(onComplete, "ok");
    return;
  }
  var self = this;
  this.connection_.onDisconnectMerge(path.toString(), childrenToMerge, function(status, errorReason) {
    if (status === "ok") {
      for (var childName in childrenToMerge) {
        var newChildNode = fb.core.snap.NodeFromJSON(childrenToMerge[childName]);
        self.onDisconnect_.remember(path.child(childName), newChildNode);
      }
    }
    self.callOnCompleteCallback(onComplete, status, errorReason);
  });
};
fb.core.Repo.prototype.logOnDisconnectDeprecatedSignature = function() {
  this.stats_.incrementCounter("deprecated_on_disconnect");
  this.statsReporter_.includeStat("deprecated_on_disconnect");
};
fb.core.Repo.prototype.addEventCallbackForQuery = function(query, eventType, callback, opt_cancelCallback, opt_context) {
  if (query.path.getFront() === ".info") {
    this.infoViewManager_.addEventCallbackForQuery(query, eventType, callback, opt_cancelCallback, opt_context);
  } else {
    this.viewManager_.addEventCallbackForQuery(query, eventType, callback, opt_cancelCallback, opt_context);
  }
};
fb.core.Repo.prototype.removeEventCallbackForQuery = function(query, opt_eventType, opt_callback, opt_context) {
  if (query.path.getFront() === ".info") {
    this.infoViewManager_.removeEventCallbackForQuery(query, opt_eventType, opt_callback, opt_context);
  } else {
    var lowerBounds = this.viewManager_.removeEventCallbackForQuery(query, opt_eventType, opt_callback, opt_context);
    if (lowerBounds !== null) {
      var changed = this.data_.forgetPath(query.path, lowerBounds);
      if (changed) {
        fb.core.util.assert(this.data_.visibleData.rootNode_ === this.viewManager_.oldDataNode_, "We should have raised any outstanding events by now.  Else, we'll blow them away.");
        this.data_.visibleData.updateSnapshot(query.path, this.data_.mergedData.getNode(query.path));
        this.viewManager_.oldDataNode_ = this.data_.visibleData.rootNode_;
      }
    }
  }
};
fb.core.Repo.prototype.interrupt = function() {
  this.connection_.interrupt();
};
fb.core.Repo.prototype.resume = function() {
  this.connection_.resume();
};
fb.core.Repo.prototype.stats = function(showDelta) {
  if (typeof console === "undefined") {
    return;
  }
  var stats;
  if (showDelta) {
    if (!this.statsListener_) {
      this.statsListener_ = new fb.core.stats.StatsListener(this.stats_);
    }
    stats = this.statsListener_.get();
  } else {
    stats = this.stats_.get();
  }
  var longestName = goog.array.reduce(goog.object.getKeys(stats), function(previousValue, currentValue, index, array) {
    return Math.max(currentValue.length, previousValue);
  }, 0);
  for (var stat in stats) {
    var value = stats[stat];
    for (var i = stat.length;i < longestName + 2;i++) {
      stat += " ";
    }
    console.log(stat + value);
  }
};
fb.core.Repo.prototype.statsIncrementCounter = function(metric) {
  this.stats_.incrementCounter(metric);
  this.statsReporter_.includeStat(metric);
};
fb.core.Repo.prototype.log_ = function() {
  fb.core.util.log("r:" + this.connection_.id + ":", arguments);
};
fb.core.Repo.prototype.callOnCompleteCallback = function(callback, status, data) {
  if (callback) {
    fb.core.util.exceptionGuard(function() {
      if (status == "ok") {
        callback(null, data);
      } else {
        var code = (status || "error").toUpperCase();
        var message = code;
        if (data) {
          message += ": " + data;
        }
        var error = new Error(message);
        error.code = code;
        callback(error);
      }
    });
  }
};
goog.provide("fb.core.Repo_transaction");
goog.require("fb.core.Repo");
fb.core.TransactionStatus = {RUN:1, SENT:2, COMPLETED:3, SENT_NEEDS_ABORT:4, NEEDS_ABORT:5};
fb.core.MAX_TRANSACTION_RETRIES_ = 25;
fb.core.Repo.prototype.transactions_init_ = function() {
  this.transactionQueueTree_ = new fb.core.util.Tree;
  this.transactionResultData_ = new fb.core.SnapshotHolder;
};
fb.core.Repo.prototype.startTransaction = function(path, transactionUpdate, onComplete, applyLocally) {
  this.log_("transaction on " + path);
  var valueCallback = function() {
  };
  var watchRef = new Firebase(this, path);
  watchRef.on("value", valueCallback);
  var unwatcher = function() {
    watchRef.off("value", valueCallback);
  };
  var transaction = {path:path, update:transactionUpdate, onComplete:onComplete, status:null, order:fb.core.util.LUIDGenerator(), applyLocally:applyLocally, retryCount:0, unwatcher:unwatcher, abortReason:null};
  this.pruneResultData_();
  var newVal = transaction.update(this.transactionResultData_.getNode(path).val());
  if (!goog.isDef(newVal)) {
    transaction.unwatcher();
    if (transaction.onComplete) {
      var snapshot = this.getSnapshot_(path);
      transaction.onComplete(null, false, snapshot);
    }
  } else {
    fb.core.util.validation.validateFirebaseData("transaction failed: Data returned ", newVal);
    transaction.status = fb.core.TransactionStatus.RUN;
    var queueNode = this.transactionQueueTree_.subTree(path);
    var nodeQueue = queueNode.getValue() || [];
    nodeQueue.push(transaction);
    queueNode.setValue(nodeQueue);
    var priorityForNode;
    if (typeof newVal === "object" && newVal !== null && fb.util.obj.contains(newVal, ".priority")) {
      priorityForNode = newVal[".priority"];
    } else {
      var currentNode = this.data_.mergedData.getNode(path);
      priorityForNode = currentNode.getPriority();
    }
    var serverValues = this.generateServerValues();
    var newNodeUnresolved = fb.core.snap.NodeFromJSON(newVal, priorityForNode);
    var newNode = fb.core.util.ServerValues.resolveDeferredValueSnapshot(newNodeUnresolved, serverValues);
    this.transactionResultData_.updateSnapshot(path, newNode);
    if (transaction.applyLocally) {
      this.data_.visibleData.updateSnapshot(path, newNode);
      this.viewManager_.raiseEventsForChange(path, [path]);
    }
    this.sendReadyTransactions_();
  }
};
fb.core.Repo.prototype.sendReadyTransactions_ = function(opt_node) {
  var node = opt_node || this.transactionQueueTree_;
  if (!opt_node) {
    this.pruneCompletedTransactionsBelowNode_(node);
  }
  if (node.getValue() !== null) {
    var queue = this.buildTransactionQueue_(node);
    fb.core.util.assert(queue.length > 0);
    var allRun = goog.array.every(queue, function(transaction) {
      return transaction.status === fb.core.TransactionStatus.RUN;
    });
    if (allRun) {
      this.sendTransactionQueue_(node.path(), queue);
    }
  } else {
    if (node.hasChildren()) {
      var self = this;
      node.forEachChild(function(childNode) {
        self.sendReadyTransactions_(childNode);
      });
    }
  }
};
fb.core.Repo.prototype.sendTransactionQueue_ = function(path, queue) {
  for (var i = 0;i < queue.length;i++) {
    fb.core.util.assert(queue[i].status === fb.core.TransactionStatus.RUN, "tryToSendTransactionQueue_: items in queue should all be run.");
    queue[i].status = fb.core.TransactionStatus.SENT;
    queue[i].retryCount++;
  }
  var beforeHash = this.data_.mergedData.getNode(path).hash();
  this.data_.mergedData.updateSnapshot(path, this.data_.visibleData.getNode(path));
  var dataToSend = this.transactionResultData_.getNode(path).val(true);
  var putId = fb.core.util.LUIDGenerator();
  var paths = this.pathsWithLocallyAppliedChanges(queue);
  for (i = 0;i < paths.length;i++) {
    this.data_.pendingPuts.subTree(paths[i]).setValue(putId);
  }
  var self = this;
  this.connection_.put(path.toString(), dataToSend, function(status) {
    self.log_("transaction put response", {path:path.toString(), status:status});
    for (i = 0;i < paths.length;i++) {
      var pendingPutTree = self.data_.pendingPuts.subTree(paths[i]);
      var pendingPut = pendingPutTree.getValue();
      fb.core.util.assert(pendingPut !== null, "sendTransactionQueue_: pendingPut should not be null.");
      if (pendingPut === putId) {
        pendingPutTree.setValue(null);
        self.data_.mergedData.updateSnapshot(paths[i], self.data_.serverData.getNode(paths[i]));
      }
    }
    if (status === "ok") {
      var callbacks = [];
      for (i = 0;i < queue.length;i++) {
        queue[i].status = fb.core.TransactionStatus.COMPLETED;
        if (queue[i].onComplete) {
          var snapshot = self.getSnapshot_(queue[i].path);
          callbacks.push(goog.bind(queue[i].onComplete, null, null, true, snapshot));
        }
        queue[i].unwatcher();
      }
      self.pruneCompletedTransactionsBelowNode_(self.transactionQueueTree_.subTree(path));
      self.sendReadyTransactions_();
      for (i = 0;i < callbacks.length;i++) {
        fb.core.util.exceptionGuard(callbacks[i]);
      }
    } else {
      if (status === "datastale") {
        for (i = 0;i < queue.length;i++) {
          if (queue[i].status === fb.core.TransactionStatus.SENT_NEEDS_ABORT) {
            queue[i].status = fb.core.TransactionStatus.NEEDS_ABORT;
          } else {
            queue[i].status = fb.core.TransactionStatus.RUN;
          }
        }
      } else {
        fb.core.util.warn("transaction at " + path + " failed: " + status);
        for (i = 0;i < queue.length;i++) {
          queue[i].status = fb.core.TransactionStatus.NEEDS_ABORT;
          queue[i].abortReason = status;
        }
      }
      var affectedPath = self.rerunTransactionsAndUpdateVisibleData_(path);
      self.viewManager_.raiseEventsForChange(affectedPath, [path]);
    }
  }, beforeHash);
};
fb.core.Repo.prototype.pathsWithLocallyAppliedChanges = function(queue) {
  var pathSet = {};
  for (var i = 0;i < queue.length;i++) {
    if (queue[i].applyLocally) {
      pathSet[queue[i].path.toString()] = queue[i].path;
    }
  }
  var paths = [];
  for (var path in pathSet) {
    paths.push(pathSet[path]);
  }
  return paths;
};
fb.core.Repo.prototype.rerunTransactionsAndUpdateVisibleData_ = function(changedPath) {
  var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
  var path = rootMostTransactionNode.path();
  var queue = this.buildTransactionQueue_(rootMostTransactionNode);
  this.rerunTransactionQueue_(queue, path);
  return path;
};
fb.core.Repo.prototype.rerunTransactionQueue_ = function(queue, path) {
  this.data_.visibleData.updateSnapshot(path, this.data_.mergedData.getNode(path));
  this.transactionResultData_.updateSnapshot(path, this.data_.mergedData.getNode(path));
  if (queue.length === 0) {
    return;
  }
  var resultNode = this.data_.visibleData.getNode(path);
  var dataToRaiseEventsForNode = resultNode;
  var callbacks = [];
  for (var i = 0;i < queue.length;i++) {
    var relativePath = fb.core.util.Path.RelativePath(path, queue[i].path);
    var abortTransaction = false, abortReason;
    fb.core.util.assert(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
    if (queue[i].status === fb.core.TransactionStatus.NEEDS_ABORT) {
      abortTransaction = true;
      abortReason = queue[i].abortReason;
    } else {
      if (queue[i].status === fb.core.TransactionStatus.RUN) {
        if (queue[i].retryCount >= fb.core.MAX_TRANSACTION_RETRIES_) {
          abortTransaction = true;
          abortReason = "maxretry";
        } else {
          var currentNode = resultNode.getChild(relativePath);
          var newData = queue[i].update(currentNode.val());
          if (goog.isDef(newData)) {
            fb.core.util.validation.validateFirebaseData("transaction failed: Data returned ", newData);
            var newDataNode = fb.core.snap.NodeFromJSON(newData);
            var hasExplicitPriority = typeof newData === "object" && newData != null && fb.util.obj.contains(newData, ".priority");
            if (!hasExplicitPriority) {
              newDataNode = newDataNode.updatePriority(currentNode.getPriority());
            }
            resultNode = resultNode.updateChild(relativePath, newDataNode);
            if (queue[i].applyLocally) {
              dataToRaiseEventsForNode = dataToRaiseEventsForNode.updateChild(relativePath, newDataNode);
            }
          } else {
            abortTransaction = true;
            abortReason = "nodata";
          }
        }
      }
    }
    if (abortTransaction) {
      queue[i].status = fb.core.TransactionStatus.COMPLETED;
      (function(unwatcher) {
        setTimeout(unwatcher, Math.floor(0));
      })(queue[i].unwatcher);
      if (queue[i].onComplete) {
        var ref = new Firebase(this, queue[i].path);
        var snapshot = new fb.api.DataSnapshot(resultNode.getChild(relativePath), ref);
        if (abortReason === "nodata") {
          callbacks.push(goog.bind(queue[i].onComplete, null, null, false, snapshot));
        } else {
          callbacks.push(goog.bind(queue[i].onComplete, null, new Error(abortReason), false, snapshot));
        }
      }
    }
  }
  this.transactionResultData_.updateSnapshot(path, resultNode);
  this.data_.visibleData.updateSnapshot(path, dataToRaiseEventsForNode);
  this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
  for (i = 0;i < callbacks.length;i++) {
    fb.core.util.exceptionGuard(callbacks[i]);
  }
  this.sendReadyTransactions_();
};
fb.core.Repo.prototype.getAncestorTransactionNode_ = function(path) {
  var front;
  var transactionNode = this.transactionQueueTree_;
  while ((front = path.getFront()) !== null && transactionNode.getValue() === null) {
    transactionNode = transactionNode.subTree(front);
    path = path.popFront();
  }
  return transactionNode;
};
fb.core.Repo.prototype.buildTransactionQueue_ = function(transactionNode) {
  var transactionQueue = [];
  this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue);
  transactionQueue.sort(function(a, b) {
    return a.order - b.order;
  });
  return transactionQueue;
};
fb.core.Repo.prototype.aggregateTransactionQueuesForNode_ = function(node, queue) {
  var nodeQueue = node.getValue();
  if (nodeQueue !== null) {
    for (var i = 0;i < nodeQueue.length;i++) {
      queue.push(nodeQueue[i]);
    }
  }
  var self = this;
  node.forEachChild(function(child) {
    self.aggregateTransactionQueuesForNode_(child, queue);
  });
};
fb.core.Repo.prototype.pruneCompletedTransactionsBelowNode_ = function(node) {
  var queue = node.getValue();
  if (queue) {
    var to = 0;
    for (var from = 0;from < queue.length;from++) {
      if (queue[from].status !== fb.core.TransactionStatus.COMPLETED) {
        queue[to] = queue[from];
        to++;
      }
    }
    queue.length = to;
    node.setValue(queue.length > 0 ? queue : null);
  }
  var self = this;
  node.forEachChild(function(childNode) {
    self.pruneCompletedTransactionsBelowNode_(childNode);
  });
};
fb.core.Repo.prototype.abortTransactions_ = function(path) {
  var affectedPath = this.getAncestorTransactionNode_(path).path();
  var transactionNode = this.transactionQueueTree_.subTree(path);
  var self = this;
  transactionNode.forEachAncestor(function(node) {
    self.abortTransactionsOnNode_(node);
  });
  this.abortTransactionsOnNode_(transactionNode);
  transactionNode.forEachDescendant(function(node) {
    self.abortTransactionsOnNode_(node);
  });
  return affectedPath;
};
fb.core.Repo.prototype.abortTransactionsOnNode_ = function(node) {
  var queue = node.getValue();
  if (queue !== null) {
    var callbacks = [];
    var lastSent = -1;
    for (var i = 0;i < queue.length;i++) {
      if (queue[i].status === fb.core.TransactionStatus.SENT_NEEDS_ABORT) {
      } else {
        if (queue[i].status === fb.core.TransactionStatus.SENT) {
          fb.core.util.assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
          lastSent = i;
          queue[i].status = fb.core.TransactionStatus.SENT_NEEDS_ABORT;
          queue[i].abortReason = "set";
        } else {
          fb.core.util.assert(queue[i].status === fb.core.TransactionStatus.RUN);
          queue[i].unwatcher();
          if (queue[i].onComplete) {
            var snapshot = null;
            callbacks.push(goog.bind(queue[i].onComplete, null, new Error("set"), false, snapshot));
          }
        }
      }
    }
    if (lastSent === -1) {
      node.setValue(null);
    } else {
      queue.length = lastSent + 1;
    }
    for (i = 0;i < callbacks.length;i++) {
      fb.core.util.exceptionGuard(callbacks[i]);
    }
  }
};
fb.core.Repo.prototype.getSnapshot_ = function(path) {
  var snapshotRef = new Firebase(this, path);
  return new fb.api.DataSnapshot(this.transactionResultData_.getNode(path), snapshotRef);
};
fb.core.Repo.prototype.pruneResultData_ = function() {
  this.transactionResultData_.rootNode_ = this.pruneResultDataHelper_(this.transactionResultData_.rootNode_, this.data_.mergedData.rootNode_, this.transactionQueueTree_);
};
fb.core.Repo.prototype.pruneResultDataHelper_ = function(resultDataNode, mergedDataNode, transactionTree) {
  var self = this;
  if (transactionTree.isEmpty()) {
    return mergedDataNode;
  } else {
    if (transactionTree.getValue() != null) {
      return resultDataNode;
    } else {
      var newResultDataNode = mergedDataNode;
      transactionTree.forEachChild(function(childTransactionNode) {
        var childName = childTransactionNode.name();
        var childPath = new fb.core.util.Path(childName);
        var prunedChildNode = self.pruneResultDataHelper_(resultDataNode.getChild(childPath), mergedDataNode.getChild(childPath), childTransactionNode);
        newResultDataNode = newResultDataNode.updateImmediateChild(childName, prunedChildNode);
      });
      return newResultDataNode;
    }
  }
};
goog.provide("fb.core.RepoManager");
goog.require("fb.core.Repo");
goog.require("fb.core.Repo_transaction");
goog.require("fb.util.obj");
fb.core.RepoManager = function() {
  this.repos_ = {};
};
goog.addSingletonGetter(fb.core.RepoManager);
fb.core.RepoManager.prototype.interrupt = function() {
  for (var repo in this.repos_) {
    this.repos_[repo].interrupt();
  }
};
goog.exportProperty(fb.core.RepoManager.prototype, "interrupt", fb.core.RepoManager.prototype.interrupt);
fb.core.RepoManager.prototype.resume = function() {
  for (var repo in this.repos_) {
    this.repos_[repo].resume();
  }
};
goog.exportProperty(fb.core.RepoManager.prototype, "resume", fb.core.RepoManager.prototype.resume);
fb.core.RepoManager.prototype.getRepo = function(repoInfo) {
  var repoHashString = repoInfo.toString();
  var repo = fb.util.obj.get(this.repos_, repoHashString);
  if (!repo) {
    repo = new fb.core.Repo(repoInfo);
    this.repos_[repoHashString] = repo;
  }
  return repo;
};
goog.provide("fb.api.INTERNAL");
goog.require("fb.core.PersistentConnection");
goog.require("fb.realtime.Connection");
fb.api.INTERNAL = {};
fb.api.INTERNAL.hijackHash = function(newHash) {
  var oldChildrenHash = fb.core.snap.ChildrenNode.prototype.hash;
  fb.core.snap.ChildrenNode.prototype.hash = newHash;
  var oldLeafHash = fb.core.snap.LeafNode.prototype.hash;
  fb.core.snap.LeafNode.prototype.hash = newHash;
  return function() {
    fb.core.snap.ChildrenNode.prototype.hash = oldChildrenHash;
    fb.core.snap.LeafNode.prototype.hash = oldLeafHash;
  };
};
goog.exportProperty(fb.api.INTERNAL, "hijackHash", fb.api.INTERNAL.hijackHash);
fb.api.INTERNAL.queryIdentifier = function(query) {
  return query.queryIdentifier();
};
goog.exportProperty(fb.api.INTERNAL, "queryIdentifier", fb.api.INTERNAL.queryIdentifier);
fb.api.INTERNAL.listens = function(firebaseRef) {
  return firebaseRef.repo.connection_.listens_;
};
goog.exportProperty(fb.api.INTERNAL, "listens", fb.api.INTERNAL.listens);
fb.api.INTERNAL.refConnection = function(firebaseRef) {
  return firebaseRef.repo.connection_.realtime_;
};
goog.exportProperty(fb.api.INTERNAL, "refConnection", fb.api.INTERNAL.refConnection);
fb.api.INTERNAL.DataConnection = fb.core.PersistentConnection;
goog.exportProperty(fb.api.INTERNAL, "DataConnection", fb.api.INTERNAL.DataConnection);
goog.exportProperty(fb.core.PersistentConnection.prototype, "sendRequest", fb.core.PersistentConnection.prototype.sendRequest_);
goog.exportProperty(fb.core.PersistentConnection.prototype, "interrupt", fb.core.PersistentConnection.prototype.interrupt);
fb.api.INTERNAL.RealTimeConnection = fb.realtime.Connection;
goog.exportProperty(fb.api.INTERNAL, "RealTimeConnection", fb.api.INTERNAL.RealTimeConnection);
goog.exportProperty(fb.realtime.Connection.prototype, "sendRequest", fb.realtime.Connection.prototype.sendRequest);
goog.exportProperty(fb.realtime.Connection.prototype, "close", fb.realtime.Connection.prototype.close);
fb.api.INTERNAL.ConnectionTarget = fb.core.RepoInfo;
goog.exportProperty(fb.api.INTERNAL, "ConnectionTarget", fb.api.INTERNAL.ConnectionTarget);
fb.api.INTERNAL.forceLongPolling = function() {
  fb.realtime.WebSocketConnection.forceDisallow();
  fb.realtime.BrowserPollConnection.forceAllow();
};
goog.exportProperty(fb.api.INTERNAL, "forceLongPolling", fb.api.INTERNAL.forceLongPolling);
fb.api.INTERNAL.forceWebSockets = function() {
  fb.realtime.BrowserPollConnection.forceDisallow();
};
goog.exportProperty(fb.api.INTERNAL, "forceWebSockets", fb.api.INTERNAL.forceWebSockets);
fb.api.INTERNAL.setSecurityDebugCallback = function(ref, callback) {
  ref.repo.connection_.securityDebugCallback_ = callback;
};
goog.exportProperty(fb.api.INTERNAL, "setSecurityDebugCallback", fb.api.INTERNAL.setSecurityDebugCallback);
fb.api.INTERNAL.stats = function(ref, showDelta) {
  ref.repo.stats(showDelta);
};
goog.exportProperty(fb.api.INTERNAL, "stats", fb.api.INTERNAL.stats);
fb.api.INTERNAL.statsIncrementCounter = function(ref, metric) {
  ref.repo.statsIncrementCounter(metric);
};
goog.exportProperty(fb.api.INTERNAL, "statsIncrementCounter", fb.api.INTERNAL.statsIncrementCounter);
fb.api.INTERNAL.dataUpdateCount = function(ref) {
  return ref.repo.dataUpdateCount;
};
goog.exportProperty(fb.api.INTERNAL, "dataUpdateCount", fb.api.INTERNAL.dataUpdateCount);
fb.api.INTERNAL.interceptServerData = function(ref, callback) {
  return ref.repo.interceptServerData_(callback);
};
goog.exportProperty(fb.api.INTERNAL, "interceptServerData", fb.api.INTERNAL.interceptServerData);
goog.provide("fb.api.OnDisconnect");
goog.require("fb.constants");
goog.require("fb.core.Repo");
goog.require("fb.core.util.validation");
goog.require("fb.util.validation");
fb.api.OnDisconnect = function(repo, path, name) {
  this.repo_ = repo;
  this.path_ = path;
  this.name_ = name;
};
fb.api.OnDisconnect.prototype.cancel = function(opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
  fb.util.validation.validateCallback("Firebase.onDisconnect().cancel", 1, opt_onComplete, true);
  this.repo_.onDisconnectCancel(this.path_, opt_onComplete);
};
goog.exportProperty(fb.api.OnDisconnect.prototype, "cancel", fb.api.OnDisconnect.prototype.cancel);
fb.api.OnDisconnect.prototype.remove = function(opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.onDisconnect().remove", 0, 1, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.onDisconnect().remove", this.path_);
  fb.util.validation.validateCallback("Firebase.onDisconnect().remove", 1, opt_onComplete, true);
  this.repo_.onDisconnectSet(this.path_, null, opt_onComplete);
};
goog.exportProperty(fb.api.OnDisconnect.prototype, "remove", fb.api.OnDisconnect.prototype.remove);
fb.api.OnDisconnect.prototype.set = function(value, opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.onDisconnect().set", 1, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.onDisconnect().set", this.path_);
  fb.core.util.validation.validateFirebaseDataArg("Firebase.onDisconnect().set", 1, value, false);
  fb.util.validation.validateCallback("Firebase.onDisconnect().set", 2, opt_onComplete, true);
  this.repo_.onDisconnectSet(this.path_, value, opt_onComplete);
};
goog.exportProperty(fb.api.OnDisconnect.prototype, "set", fb.api.OnDisconnect.prototype.set);
fb.api.OnDisconnect.prototype.setWithPriority = function(value, priority, opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.onDisconnect().setWithPriority", this.path_);
  fb.core.util.validation.validateFirebaseDataArg("Firebase.onDisconnect().setWithPriority", 1, value, false);
  fb.core.util.validation.validatePriority("Firebase.onDisconnect().setWithPriority", 2, priority, false);
  fb.util.validation.validateCallback("Firebase.onDisconnect().setWithPriority", 3, opt_onComplete, true);
  if (this.name_ === ".length" || this.name_ === ".keys") {
    throw "Firebase.onDisconnect().setWithPriority failed: " + this.name_ + " is a read-only object.";
  }
  this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, opt_onComplete);
};
goog.exportProperty(fb.api.OnDisconnect.prototype, "setWithPriority", fb.api.OnDisconnect.prototype.setWithPriority);
fb.api.OnDisconnect.prototype.update = function(objectToMerge, opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.onDisconnect().update", 1, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.onDisconnect().update", this.path_);
  if (goog.isArray(objectToMerge)) {
    var newObjectToMerge = {};
    for (var i = 0;i < objectToMerge.length;++i) {
      newObjectToMerge["" + i] = objectToMerge[i];
    }
    objectToMerge = newObjectToMerge;
    fb.core.util.warn("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the " + "existing data, or an Object with integer keys if you really do want to only update some of the children.");
  }
  fb.core.util.validation.validateFirebaseObjectDataArg("Firebase.onDisconnect().update", 1, objectToMerge, false);
  fb.util.validation.validateCallback("Firebase.onDisconnect().update", 2, opt_onComplete, true);
  this.repo_.onDisconnectUpdate(this.path_, objectToMerge, opt_onComplete);
};
goog.exportProperty(fb.api.OnDisconnect.prototype, "update", fb.api.OnDisconnect.prototype.update);
goog.provide("fb.core.util.NextPushId");
goog.require("fb.core.util");
fb.core.util.NextPushId = function() {
  var PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  var lastPushTime = 0;
  var lastRandChars = [];
  return function(now) {
    var duplicateTime = now === lastPushTime;
    lastPushTime = now;
    var timeStampChars = new Array(8);
    for (var i = 7;i >= 0;i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }
    fb.core.util.assert(now === 0, "Cannot push at time == 0");
    var id = timeStampChars.join("");
    if (!duplicateTime) {
      for (i = 0;i < 12;i++) {
        lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      for (i = 11;i >= 0 && lastRandChars[i] === 63;i--) {
        lastRandChars[i] = 0;
      }
      lastRandChars[i]++;
    }
    for (i = 0;i < 12;i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }
    fb.core.util.assert(id.length === 20, "NextPushId: Length should be 20.");
    return id;
  };
}();
goog.provide("Firebase");
goog.require("fb.api.INTERNAL");
goog.require("fb.api.OnDisconnect");
goog.require("fb.api.Query");
goog.require("fb.constants");
goog.require("fb.core.Repo");
goog.require("fb.core.RepoManager");
goog.require("fb.core.storage");
goog.require("fb.core.util");
goog.require("fb.core.util.NextPushId");
goog.require("fb.core.util.validation");
goog.require("goog.string");
Firebase = function(urlOrRepo, pathOrContext) {
  var repo, path;
  if (urlOrRepo instanceof fb.core.Repo) {
    repo = urlOrRepo;
    path = pathOrContext;
  } else {
    fb.util.validation.validateArgCount("new Firebase", 1, 2, arguments.length);
    var parsedUrl = fb.core.util.parseURL(arguments[0]);
    fb.core.util.validation.validateUrl("new Firebase", 1, parsedUrl);
    if (pathOrContext) {
      if (pathOrContext instanceof fb.core.RepoManager) {
        var repoManager = (pathOrContext)
      } else {
        throw new Error("Expected a valid Firebase.Context for second argument to new Firebase()");
      }
    } else {
      repoManager = fb.core.RepoManager.getInstance();
    }
    repo = repoManager.getRepo(parsedUrl.repoInfo);
    path = parsedUrl.path;
  }
  fb.api.Query.call(this, repo, path);
};
goog.inherits(Firebase, fb.api.Query);
if (NODE_CLIENT) {
  module["exports"] = Firebase;
}
Firebase.prototype.name = function() {
  fb.util.validation.validateArgCount("Firebase.name", 0, 0, arguments.length);
  if (this.path.isEmpty()) {
    return null;
  } else {
    return this.path.getBack();
  }
};
Firebase.prototype.child = function(pathString) {
  fb.util.validation.validateArgCount("Firebase.child", 1, 1, arguments.length);
  if (goog.isNumber(pathString)) {
    pathString = String(pathString);
  } else {
    if (!(pathString instanceof fb.core.util.Path)) {
      if (this.path.getFront() === null) {
        fb.core.util.validation.validateRootPathString("Firebase.child", 1, pathString, false);
      } else {
        fb.core.util.validation.validatePathString("Firebase.child", 1, pathString, false);
      }
    }
  }
  return new Firebase(this.repo, this.path.child(pathString));
};
Firebase.prototype.parent = function() {
  fb.util.validation.validateArgCount("Firebase.parent", 0, 0, arguments.length);
  var parentPath = this.path.parent();
  return parentPath === null ? null : new Firebase(this.repo, parentPath);
};
Firebase.prototype.root = function() {
  fb.util.validation.validateArgCount("Firebase.ref", 0, 0, arguments.length);
  var ref = this;
  while (ref.parent() !== null) {
    ref = ref.parent();
  }
  return ref;
};
Firebase.prototype.toString = function() {
  fb.util.validation.validateArgCount("Firebase.toString", 0, 0, arguments.length);
  if (this.parent() === null) {
    return this.repo.toString();
  } else {
    return this.parent().toString() + "/" + goog.string.urlEncode(this.name());
  }
};
Firebase.prototype.set = function(newVal, onComplete) {
  fb.util.validation.validateArgCount("Firebase.set", 1, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.set", this.path);
  fb.core.util.validation.validateFirebaseDataArg("Firebase.set", 1, newVal, false);
  fb.util.validation.validateCallback("Firebase.set", 2, onComplete, true);
  this.repo.setWithPriority(this.path, newVal, null, onComplete);
};
Firebase.prototype.update = function(objectToMerge, onComplete) {
  fb.util.validation.validateArgCount("Firebase.update", 1, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.update", this.path);
  if (goog.isArray(objectToMerge)) {
    var newObjectToMerge = {};
    for (var i = 0;i < objectToMerge.length;++i) {
      newObjectToMerge["" + i] = objectToMerge[i];
    }
    objectToMerge = newObjectToMerge;
    fb.core.util.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or " + "an Object with integer keys if you really do want to only update some of the children.");
  }
  fb.core.util.validation.validateFirebaseObjectDataArg("Firebase.update", 1, objectToMerge, false);
  fb.util.validation.validateCallback("Firebase.update", 2, onComplete, true);
  if (fb.util.obj.contains(objectToMerge, ".priority")) {
    throw new Error("update() does not currently support updating .priority.");
  }
  this.repo.update(this.path, objectToMerge, onComplete);
};
Firebase.prototype.setWithPriority = function(newVal, newPriority, onComplete) {
  fb.util.validation.validateArgCount("Firebase.setWithPriority", 2, 3, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.setWithPriority", this.path);
  fb.core.util.validation.validateFirebaseDataArg("Firebase.setWithPriority", 1, newVal, false);
  fb.core.util.validation.validatePriority("Firebase.setWithPriority", 2, newPriority, false);
  fb.util.validation.validateCallback("Firebase.setWithPriority", 3, onComplete, true);
  if (this.name() === ".length" || this.name() === ".keys") {
    throw "Firebase.setWithPriority failed: " + this.name() + " is a read-only object.";
  }
  this.repo.setWithPriority(this.path, newVal, newPriority, onComplete);
};
Firebase.prototype.remove = function(onComplete) {
  fb.util.validation.validateArgCount("Firebase.remove", 0, 1, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.remove", this.path);
  fb.util.validation.validateCallback("Firebase.remove", 1, onComplete, true);
  this.set(null, onComplete);
};
Firebase.prototype.transaction = function(transactionUpdate, onComplete, applyLocally) {
  fb.util.validation.validateArgCount("Firebase.transaction", 1, 3, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.transaction", this.path);
  fb.util.validation.validateCallback("Firebase.transaction", 1, transactionUpdate, false);
  fb.util.validation.validateCallback("Firebase.transaction", 2, onComplete, true);
  fb.core.util.validation.validateBoolean("Firebase.transaction", 3, applyLocally, true);
  if (this.name() === ".length" || this.name() === ".keys") {
    throw "Firebase.transaction failed: " + this.name() + " is a read-only object.";
  }
  if (typeof applyLocally === "undefined") {
    applyLocally = true;
  }
  this.repo.startTransaction(this.path, transactionUpdate, onComplete, applyLocally);
};
Firebase.prototype.setPriority = function(priority, opt_onComplete) {
  fb.util.validation.validateArgCount("Firebase.setPriority", 1, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.setPriority", this.path);
  fb.core.util.validation.validatePriority("Firebase.setPriority", 1, priority, false);
  fb.util.validation.validateCallback("Firebase.setPriority", 2, opt_onComplete, true);
  this.repo.setPriority(this.path, priority, opt_onComplete);
};
Firebase.prototype.push = function(value, onComplete) {
  fb.util.validation.validateArgCount("Firebase.push", 0, 2, arguments.length);
  fb.core.util.validation.validateWritablePath("Firebase.push", this.path);
  fb.core.util.validation.validateFirebaseDataArg("Firebase.push", 1, value, true);
  fb.util.validation.validateCallback("Firebase.push", 2, onComplete, true);
  var now = this.repo.serverTime();
  var name = fb.core.util.NextPushId(now);
  var pushedRef = this.child(name);
  if (typeof value !== "undefined" && value !== null) {
    pushedRef.set(value, onComplete);
  }
  return pushedRef;
};
Firebase.prototype.onDisconnect = function() {
  return new fb.api.OnDisconnect(this.repo, this.path, this.name());
};
Firebase.prototype.removeOnDisconnect = function() {
  fb.core.util.warn("FirebaseRef.removeOnDisconnect() being deprecated. " + "Please use FirebaseRef.onDisconnect().remove() instead.");
  this.onDisconnect().remove();
  this.repo.logOnDisconnectDeprecatedSignature();
};
Firebase.prototype.setOnDisconnect = function(value) {
  fb.core.util.warn("FirebaseRef.setOnDisconnect(value) being deprecated. " + "Please use FirebaseRef.onDisconnect().set(value) instead.");
  this.onDisconnect().set(value);
  this.repo.logOnDisconnectDeprecatedSignature();
};
Firebase.prototype.auth = function(cred, onComplete, onCancel) {
  fb.util.validation.validateArgCount("Firebase.auth", 1, 3, arguments.length);
  fb.core.util.validation.validateCredential("Firebase.auth", 1, cred, false);
  fb.util.validation.validateCallback("Firebase.auth", 2, onComplete, true);
  fb.util.validation.validateCallback("Firebase.auth", 3, onComplete, true);
  this.repo.auth(cred, onComplete, onCancel);
};
Firebase.prototype.unauth = function(onComplete) {
  fb.util.validation.validateArgCount("Firebase.unauth", 0, 1, arguments.length);
  fb.util.validation.validateCallback("Firebase.unauth", 1, onComplete, true);
  this.repo.unauth(onComplete);
};
Firebase.goOffline = function() {
  fb.util.validation.validateArgCount("Firebase.goOffline", 0, 0, arguments.length);
  fb.core.RepoManager.getInstance().interrupt();
};
Firebase.goOnline = function() {
  fb.util.validation.validateArgCount("Firebase.goOnline", 0, 0, arguments.length);
  fb.core.RepoManager.getInstance().resume();
};
Firebase.enableLogging = function(logger, persistent) {
  fb.core.util.assert(!persistent || (logger === true || logger === false), "Can't turn on custom loggers persistently.");
  if (logger === true) {
    if (typeof console !== "undefined") {
      if (typeof console.log === "function") {
        fb.core.util.logger = goog.bind(console.log, console);
      } else {
        if (typeof console.log === "object") {
          fb.core.util.logger = function(message) {
            console.log(message);
          };
        }
      }
    }
    if (persistent) {
      fb.core.storage.SessionStorage.set("logging_enabled", true);
    }
  } else {
    if (logger) {
      fb.core.util.logger = logger;
    } else {
      fb.core.util.logger = null;
      fb.core.storage.SessionStorage.remove("logging_enabled");
    }
  }
};
Firebase.ServerValue = {"TIMESTAMP":{".sv":"timestamp"}};
Firebase.SDK_VERSION = CLIENT_VERSION;
Firebase.INTERNAL = fb.api.INTERNAL;
Firebase.Context = fb.core.RepoManager;
; Firebase.SDK_VERSION='1.0.24';

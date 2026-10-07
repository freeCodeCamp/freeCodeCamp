'use strict';

let _lazyMatch = () => { var __lib__=(()=>{var m=Object.defineProperty,V=Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyNames,T=Object.prototype.hasOwnProperty,q=(r,e)=>{for(var n in e)m(r,n,{get:e[n],enumerable:true});},H=(r,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of G(e))!T.call(r,t)&&t!==n&&m(r,t,{get:()=>e[t],enumerable:!(a=V(e,t))||a.enumerable});return r},J=r=>H(m({},"__esModule",{value:true}),r),w={};q(w,{default:()=>re});var A=r=>Array.isArray(r),d=r=>typeof r=="function",Q=r=>r.length===0,W=r=>typeof r=="number",K=r=>typeof r=="object"&&r!==null,X=r=>r instanceof RegExp,b=r=>typeof r=="string",h=r=>r===void 0,Y=r=>{const e=new Map;return n=>{const a=e.get(n);if(a)return a;const t=r(n);return e.set(n,t),t}},rr=(r,e,n={})=>{const a={cache:{},input:r,index:0,indexMax:0,options:n,output:[]};if(v(e)(a)&&a.index===r.length)return a.output;throw new Error(`Failed to parse at index ${a.indexMax}`)},i=(r,e)=>A(r)?er(r,e):b(r)?ar(r,e):nr(r,e),er=(r,e)=>{const n={};for(const a of r){if(a.length!==1)throw new Error(`Invalid character: "${a}"`);const t=a.charCodeAt(0);n[t]=true;}return a=>{const t=a.index,o=a.input;for(;a.index<o.length&&o.charCodeAt(a.index)in n;)a.index+=1;const u=a.index;if(u>t){if(!h(e)&&!a.options.silent){const s=a.input.slice(t,u),c=d(e)?e(s,o,String(t)):e;h(c)||a.output.push(c);}a.indexMax=Math.max(a.indexMax,a.index);}return  true}},nr=(r,e)=>{const n=r.source,a=r.flags.replace(/y|$/,"y"),t=new RegExp(n,a);return g(o=>{t.lastIndex=o.index;const u=t.exec(o.input);if(u){if(!h(e)&&!o.options.silent){const s=d(e)?e(...u,o.input,String(o.index)):e;h(s)||o.output.push(s);}return o.index+=u[0].length,o.indexMax=Math.max(o.indexMax,o.index),true}else return  false})},ar=(r,e)=>n=>{if(n.input.startsWith(r,n.index)){if(!h(e)&&!n.options.silent){const t=d(e)?e(r,n.input,String(n.index)):e;h(t)||n.output.push(t);}return n.index+=r.length,n.indexMax=Math.max(n.indexMax,n.index),true}else return  false},C=(r,e,n,a)=>{const t=v(r);return g(_(M(o=>{let u=0;for(;u<n;){const s=o.index;if(!t(o)||(u+=1,o.index===s))break}return u>=e})))},tr=(r,e)=>C(r,0,1),f=(r,e)=>C(r,0,1/0),x=(r,e)=>{const n=r.map(v);return g(_(M(a=>{for(let t=0,o=n.length;t<o;t++)if(!n[t](a))return  false;return  true})))},l=(r,e)=>{const n=r.map(v);return g(_(a=>{for(let t=0,o=n.length;t<o;t++)if(n[t](a))return  true;return  false}))},M=(r,e=false)=>{const n=v(r);return a=>{const t=a.index,o=a.output.length,u=n(a);return (!u||e)&&(a.index=t,a.output.length!==o&&(a.output.length=o)),u}},_=(r,e)=>{const n=v(r);return n},g=(()=>{let r=0;return e=>{const n=v(e),a=r+=1;return t=>{var o;if(t.options.memoization===false)return n(t);const u=t.index,s=(o=t.cache)[a]||(o[a]=new Map),c=s.get(u);if(c===false)return  false;if(W(c))return t.index=c,true;if(c)return t.index=c.index,c.output?.length&&t.output.push(...c.output),true;{const Z=t.output.length;if(n(t)){const D=t.index,U=t.output.length;if(U>Z){const ee=t.output.slice(Z,U);s.set(u,{index:D,output:ee});}else s.set(u,D);return  true}else return s.set(u,false),false}}}})(),E=r=>{let e;return n=>(e||(e=v(r())),e(n))},v=Y(r=>{if(d(r))return Q(r)?E(r):r;if(b(r)||X(r))return i(r);if(A(r))return x(r);if(K(r))return l(Object.values(r));throw new Error("Invalid rule")}),P="abcdefghijklmnopqrstuvwxyz",ir=r=>{let e="";for(;r>0;){const n=(r-1)%26;e=P[n]+e,r=Math.floor((r-1)/26);}return e},O=r=>{let e=0;for(let n=0,a=r.length;n<a;n++)e=e*26+P.indexOf(r[n])+1;return e},S=(r,e)=>{if(e<r)return S(e,r);const n=[];for(;r<=e;)n.push(r++);return n},or=(r,e,n)=>S(r,e).map(a=>String(a).padStart(n,"0")),R=(r,e)=>S(O(r),O(e)).map(ir),p=r=>r,z=r=>ur(e=>rr(e,r,{memoization:false}).join("")),ur=r=>{const e={};return n=>e[n]??(e[n]=r(n))},sr=i(/^\*\*\/\*$/,".*"),cr=i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]+)$/,(r,e,n)=>`.*${e?"":"(?:^|/)"}${n.replaceAll(".","\\.")}`),lr=i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]*)\{([ a-zA-Z0-9._-]+(?:,[ a-zA-Z0-9._-]+)*)\}$/,(r,e,n,a)=>`.*${e?"":"(?:^|/)"}${n.replaceAll(".","\\.")}(?:${a.replaceAll(",","|").replaceAll(".","\\.")})`),y=i(/\\./,p),pr=i(/[$.*+?^(){}[\]\|]/,r=>`\\${r}`),vr=i(/./,p),hr=i(/^(?:!!)*!(.*)$/,(r,e)=>`(?!^${L(e)}$).*?`),dr=i(/^(!!)+/,""),fr=l([hr,dr]),xr=i(/\/(\*\*\/)+/,"(?:/.+/|/)"),gr=i(/^(\*\*\/)+/,"(?:^|.*/)"),mr=i(/\/(\*\*)$/,"(?:/.*|$)"),_r=i(/\*\*/,".*"),j=l([xr,gr,mr,_r]),Sr=i(/\*\/(?!\*\*\/)/,"[^/]*/"),yr=i(/\*/,"[^/]*"),N=l([Sr,yr]),k=i("?","[^/]"),$r=i("[",p),wr=i("]",p),Ar=i(/[!^]/,"^/"),br=i(/[a-z]-[a-z]|[0-9]-[0-9]/i,p),Cr=i(/[$.*+?^(){}[\|]/,r=>`\\${r}`),Mr=i(/[^\]]/,p),Er=l([y,Cr,br,Mr]),B=x([$r,tr(Ar),f(Er),wr]),Pr=i("{","(?:"),Or=i("}",")"),Rr=i(/(\d+)\.\.(\d+)/,(r,e,n)=>or(+e,+n,Math.min(e.length,n.length)).join("|")),zr=i(/([a-z]+)\.\.([a-z]+)/,(r,e,n)=>R(e,n).join("|")),jr=i(/([A-Z]+)\.\.([A-Z]+)/,(r,e,n)=>R(e.toLowerCase(),n.toLowerCase()).join("|").toUpperCase()),Nr=l([Rr,zr,jr]),I=x([Pr,Nr,Or]),kr=i("{","(?:"),Br=i("}",")"),Ir=i(",","|"),Fr=i(/[$.*+?^(){[\]\|]/,r=>`\\${r}`),Lr=i(/[^}]/,p),Zr=E(()=>F),Dr=l([j,N,k,B,I,Zr,y,Fr,Ir,Lr]),F=x([kr,f(Dr),Br]),Ur=f(l([sr,cr,lr,fr,j,N,k,B,I,F,y,pr,vr])),Vr=Ur,Gr=z(Vr),L=Gr,Tr=i(/\\./,p),qr=i(/./,p),Hr=i(/\*\*\*+/,"*"),Jr=i(/([^/{[(!])\*\*/,(r,e)=>`${e}*`),Qr=i(/(^|.)\*\*(?=[^*/)\]}])/,(r,e)=>`${e}*`),Wr=f(l([Tr,Hr,Jr,Qr,qr])),Kr=Wr,Xr=z(Kr),Yr=Xr,$=(r,e)=>{const n=Array.isArray(r)?r:[r];if(!n.length)return  false;const a=n.map($.compile),t=n.every(s=>/(\/(?:\*\*)?|\[\/\])$/.test(s)),o=e.replace(/[\\\/]+/g,"/").replace(/\/$/,t?"/":"");return a.some(s=>s.test(o))};$.compile=r=>new RegExp(`^${L(Yr(r))}$`,"s");var re=$;return J(w)})();
 return __lib__.default || __lib__; };
let _match;
const zeptomatch = (path, pattern) => {
  if (!_match) {
    _match = _lazyMatch();
    _lazyMatch = null;
  }
  return _match(path, pattern);
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}

const _UNC_REGEX = /^[/\\]{2}/;
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
const _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
const _EXTNAME_RE = /.(\.[^./]+|\.)$/;
const _PATH_ROOT_RE = /^[/\\]|^[a-zA-Z]:[/\\]/;
const sep = "/";
const normalize = function(path) {
  if (path.length === 0) {
    return ".";
  }
  path = normalizeWindowsPath(path);
  const isUNCPath = path.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute(path);
  const trailingSeparator = path[path.length - 1] === "/";
  path = normalizeString(path, !isPathAbsolute);
  if (path.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path += "/";
  }
  if (_DRIVE_LETTER_RE.test(path)) {
    path += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path}`;
    }
    return `//${path}`;
  }
  return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
const join = function(...segments) {
  let path = "";
  for (const seg of segments) {
    if (!seg) {
      continue;
    }
    if (path.length > 0) {
      const pathTrailing = path[path.length - 1] === "/";
      const segLeading = seg[0] === "/";
      const both = pathTrailing && segLeading;
      if (both) {
        path += seg.slice(1);
      } else {
        path += pathTrailing || segLeading ? seg : `/${seg}`;
      }
    } else {
      path += seg;
    }
  }
  return normalize(path);
};
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const toNamespacedPath = function(p) {
  return normalizeWindowsPath(p);
};
const extname = function(p) {
  if (p === "..") return "";
  const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
  return match && match[1] || "";
};
const relative = function(from, to) {
  const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
  const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
  if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) {
    return _to.join("/");
  }
  const _fromCopy = [..._from];
  for (const segment of _fromCopy) {
    if (_to[0] !== segment) {
      break;
    }
    _from.shift();
    _to.shift();
  }
  return [..._from.map(() => ".."), ..._to].join("/");
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const format = function(p) {
  const ext = p.ext ? p.ext.startsWith(".") ? p.ext : `.${p.ext}` : "";
  const segments = [p.root, p.dir, p.base ?? (p.name ?? "") + ext].filter(
    Boolean
  );
  return normalizeWindowsPath(
    p.root ? resolve(...segments) : segments.join("/")
  );
};
const basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
const parse = function(p) {
  const root = _PATH_ROOT_RE.exec(p)?.[0]?.replace(/\\/g, "/") || "";
  const base = basename(p);
  const extension = extname(base);
  return {
    root,
    dir: dirname(p),
    base,
    ext: extension,
    name: base.slice(0, base.length - extension.length)
  };
};
const matchesGlob = (path, pattern) => {
  return zeptomatch(pattern, normalize(path));
};

const _path = {
  __proto__: null,
  basename: basename,
  dirname: dirname,
  extname: extname,
  format: format,
  isAbsolute: isAbsolute,
  join: join,
  matchesGlob: matchesGlob,
  normalize: normalize,
  normalizeString: normalizeString,
  parse: parse,
  relative: relative,
  resolve: resolve,
  sep: sep,
  toNamespacedPath: toNamespacedPath
};

exports._path = _path;
exports.basename = basename;
exports.dirname = dirname;
exports.extname = extname;
exports.format = format;
exports.isAbsolute = isAbsolute;
exports.join = join;
exports.matchesGlob = matchesGlob;
exports.normalize = normalize;
exports.normalizeString = normalizeString;
exports.normalizeWindowsPath = normalizeWindowsPath;
exports.parse = parse;
exports.relative = relative;
exports.resolve = resolve;
exports.sep = sep;
exports.toNamespacedPath = toNamespacedPath;

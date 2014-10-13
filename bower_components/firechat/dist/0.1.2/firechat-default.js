(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
this["FirechatDefaultTemplates"] = this["FirechatDefaultTemplates"] || {};

this["FirechatDefaultTemplates"]["templates/layout-full.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'firechat\' class=\'full\'>\n<div id=\'firechat-header\' class=\'clearfix\'>\n<div class=\'clearfix\'><div class=\'half dropdown\' style=\'\'>\n<a id=\'firechat-btn-rooms\' class=\'dropdown-toggle btn full\' data-toggle="dropdown" href=\'#\'>\n<span class=\'icon user-chat\'></span>\nChat Rooms\n<span class=\'caret\'></span>\n</a>\n<div class=\'dropdown-menu full\' role=\'menu\'><ul id=\'firechat-room-list\'></ul><div class=\'dropdown-footer aligncenter\'>\n<button type=\'button\' class=\'btn twothird center\' id=\'firechat-btn-create-room-prompt\'>Create Room</button>\n</div></div></div>\n<div class=\'half dropdown\' style=\'\'>\n<a data-event=\'firechat-user-search-btn\' class=\'btn full dropdown-toggle\' data-toggle="dropdown" href=\'#\'>\n<span class=\'icon user-group\'></span>\nVisitors\n<span class=\'caret\'></span>\n</a>\n<div class=\'dropdown-menu\' role=\'menu\'>\n<div class=\'dropdown-header aligncenter clearfix\'>\n<div class=\'search-wrapper\'>\n<span class=\'icon search\'></span>\n<input type=\'text\' data-event=\'firechat-user-search\' data-template=\'templates/user-search-list-item.html\' data-target=\'firechat-user-search\' data-controls=\'firechat-user-search-controls\' class=\'center fivesixth\'>\n</div>\n</div>\n<ul id=\'firechat-user-search\'></ul><div class=\'dropdown-footer aligncenter clearfix\'>\n<div id=\'firechat-user-search-controls\' class=\'clearfix\'>\n<span class="quarter"></span>\n<button type=\'button\' class=\'btn half\' data-event=\'firechat-user-search\' data-toggle=\'firechat-pagination-next\' data-template=\'templates/user-search-list-item.html\' data-target=\'firechat-user-search\' data-controls=\'firechat-user-search-controls\' disabled=disabled>Next</button>\n</div><label class=\'center full\'>\n<small>Use "+ Invite" button within chat rooms for regular invites.</small>\n</label>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id=\'firechat-tabs\' class=\'clearfix\'>\n<ul id=\'firechat-tab-list\' class=\'nav nav-tabs clearfix\'></ul>\n<div id=\'firechat-tab-content\' class=\'tab-content\'></div>\n</div><div id=\'firechat-footer\' class=\'clearfix\'></div>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/layout-popout.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'firechat\' class=\'full\'>\n<div id=\'firechat-tabs\' class=\'clearfix\'>\n<ul id=\'firechat-tab-list\' class=\'nav nav-tabs clearfix\'></ul>\n<div id=\'firechat-tab-content\' class=\'tab-content\'></div>\n</div>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/message-context-menu.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div data-toggle=\'firechat-contextmenu\' class=\'contextmenu\' data-message-id=\'' +__e( id ) +'\'>\n<ul>\n<li><a href=\'#!\' data-event=\'firechat-user-warn\'>Warn User</a></li>\n'; if (allowKick) { ;__p += '\n<li><a href=\'#!\' data-event=\'firechat-user-kick\'>Kick User</a></li>\n'; } ;__p += '\n<li><a href=\'#!\' data-event=\'firechat-user-suspend-hour\'>Suspend User (1 Hour)</a></li>\n<li><a href=\'#!\' data-event=\'firechat-user-suspend-day\'>Suspend User (1 Day)</a></li>\n<li><a href=\'#!\' data-event=\'firechat-message-delete\'>Delete Message</a></li>\n</ul>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/message.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'message message-' +__e( type ) +' '; if (isSelfMessage) { ;__p += ' message-self '; } ;__p += '\' data-message-id=\'' +__e( id ) +'\' data-user-id=\'' +__e( userId ) +'\' data-user-name=\'' +__e( name ) +'\' data-class="firechat-message">\n<div class=\'clearfix\'>\n<label class=\'fourfifth\'>\n<strong class=\'name\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</strong>\n<em>(' +__e( localtime ) +')</em>:\n</label>'; if (!disableActions) { ;__p += '\n<label class=\'fifth alignright\'>\n<a href=\'#!\' data-event=\'firechat-user-chat\' class=\'icon user-chat\' title=\'Invite to Private Chat\'>&nbsp;</a>\n<a href=\'#!\' data-event=\'firechat-user-mute-toggle\' class=\'icon user-mute\' title=\'Mute User\'>&nbsp;</a>\n</label>\n'; } ;__p += '</div>\n<div class=\'clearfix message-content\'>\n' +((__t = ( message )) == null ? '' : __t) +'\n</div>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-alert.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h6>' +__e( message ) +'</h6>\n<p class=\'clearfix\'>\n<button type=\'button\' class=\'btn quarter right close\'>Close</button>\n</p>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-create-room.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'clearfix\'>\n<h6>Give your chat room a name:</h6>\n<input data-input=\'firechat-room-name\' type=\'text\' placeholder=\'Room name...\' style=\'margin-bottom: 5px;\' maxlength=\'' +__e( maxLengthRoomName ) +'\'>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-invitation.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( fromUserName ) +'</h5>\n<p>invited you to join</p>\n<h5>' +__e( toRoomName ) +'</h5>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Accept</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'btn\'>Decline</button>\n</p>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-invite-private.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h6>Invite <strong>' +__e( userName ) +'</strong> to ' +__e( roomName ) +'?</h6>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Invite</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'close btn\'>Cancel</button>\n</p>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-invite-reply.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( toUserName ) +'</h5>\n<p>\n'; if (status === 'accepted') { ;__p += ' accepted your invite. '; } else { ;__p += ' declined your invite. '; } ;__p += '\n</p>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt-user-mute.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( userName ) +'</h5>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Mute</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'btn\'>Cancel</button>\n</p>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/prompt.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'prompt hidden\'>\n<div class=\'prompt-header\'>\n' +__e( title ) +'\n<a href=\'#!\' class=\'close right\'>X</a>\n</div>\n<div class=\'prompt-body clearfix\'>\n' +((__t = ( content )) == null ? '' : __t) +'\n</div>\n<div class=\'prompt-footer\'></div>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/room-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-room-type=\'' +__e( type ) +'\' data-room-id=\'' +__e( id ) +'\' data-room-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix '; if (isRoomOpen) { ;__p += ' highlight '; } ;__p += '\'>\n<span class=\'left\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n</a>\n</li>';}return __p};

this["FirechatDefaultTemplates"]["templates/room-user-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n<span class=\'left twothird clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>'; if (!disableActions) { ;__p += '\n<span data-event=\'firechat-user-mute-toggle\' class=\'icon user-mute right '; if (isMuted) { ;__p += ' red '; } ;__p += '\' title=\'Toggle User Mute\'>&nbsp;</span>\n<span data-event=\'firechat-user-chat\' class=\'icon user-chat right\' title=\'Invite to Private Chat\'>&nbsp;</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};

this["FirechatDefaultTemplates"]["templates/room-user-search-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n'; if (disableActions) { ;__p += '\n<span class=\'left fourfifth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n'; } else { ;__p += '\n<span data-event=\'firechat-user-invite\' class=\'left fourfifth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n<span data-event=\'firechat-user-invite\' class=\'icon plus right\' title=\'Invite to Room\'>+</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};

this["FirechatDefaultTemplates"]["templates/tab-content.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'' +__e( id ) +'\' data-room-id=\'' +__e( id ) +'\' class=\'tab-pane\'>\n<div class=\'tab-pane-menu clearfix\'><div class=\'dropdown twofifth\'>\n<a data-event=\'firechat-user-room-list-btn\' class=\'full btn dropdown-toggle\' data-toggle="dropdown" href=\'#\' data-target=\'firechat-room-user-list-' +__e( id ) +'\'>\n<span class=\'icon user-group\'></span>\nIn Room\n<span class=\'caret\'></span>\n</a>\n<div class=\'dropdown-menu\' role=\'menu\'>\n<ul id=\'firechat-room-user-list-' +__e( id ) +'\' class=\'full\'></ul>\n</div>\n</div><div class=\'dropdown twofifth\'>\n<a data-event=\'firechat-user-search-btn\' class=\'full btn dropdown-toggle\' data-toggle="dropdown" href=\'#\'>\n<span class=\'icon plus\'>+</span>\nInvite\n<span class=\'caret\'></span>\n</a><div class=\'dropdown-menu\' role=\'menu\'>\n<div class=\'dropdown-header aligncenter clearfix\'>\n<div class=\'search-wrapper\'>\n<span class=\'icon search\'></span>\n<input type=\'text\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' class=\'center fivesixth\'>\n</div>\n</div>\n<ul id=\'firechat-room-user-search-' +__e( id ) +'\'></ul><div class=\'dropdown-footer aligncenter clearfix\'>\n<div id=\'firechat-room-user-search-controls-' +__e( id ) +'\' class=\'clearfix\'><span class="quarter"></span>\n<!--\n<button type=\'button\' class=\'btn third disabled\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' data-toggle=\'firechat-pagination-prev\' disabled=disabled>Prev</button>\n-->\n<button type=\'button\' class=\'btn half disabled\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' data-toggle=\'firechat-pagination-next\'  disabled=disabled>Next</button>\n</div>\n</div>\n</div>\n</div><a href=\'#!\' data-event=\'firechat-close-tab\' class=\'icon close right\' style=\'15px 5px\' title=\'Leave Room\'></a></div><div class=\'clearfix\'>\n<div id=\'firechat-messages' +__e( id ) +'\' class=\'chat\'></div>\n</div><div class=\'clearfix\'>\n<label>Your message:</label>\n<textarea id=\'textarea' +__e( id ) +'\' placeholder=\'Type your message here...\'></textarea>\n</div>\n</div>';}return __p};

this["FirechatDefaultTemplates"]["templates/tab-menu-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<li data-room-id=\'' +__e( id ) +'\'>\n<a href=\'#' +__e( id ) +'\' data-toggle=\'tab\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</a>\n</li>';}return __p};

this["FirechatDefaultTemplates"]["templates/user-search-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n'; if (disableActions) { ;__p += '\n<span class=\'left fivesixth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n'; } else { ;__p += '\n<span data-event=\'firechat-user-chat\' class=\'left fivesixth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n<span data-event=\'firechat-user-chat\' class=\'icon user-chat right\' title=\'Invite to Private Chat\'>&nbsp;</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};
(function($) {

  // Shim for Function.bind(...) - (Required by IE < 9, FF < 4, SF < 6)
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
  
      var aArgs = Array.prototype.slice.call(arguments, 1), 
          fToBind = this, 
          fNOP = function() {},
          fBound = function() {
            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                 aArgs.concat(Array.prototype.slice.call(arguments)));
          };
   
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  // Shim for Object.keys(...) - (Required by IE < 9, FF < 4)
  Object.keys = Object.keys || function(oObj) {  
    var result = [];  
    for (var name in oObj) {  
      if (oObj.hasOwnProperty(name)) {
        result.push(name);  
      }
    }  
    return result;  
  };

})();

// Firechat is a simple, easily-extensible data layer for multi-user,
// multi-room chat, built entirely on [Firebase](https://firebase.com).
//
// The Firechat object is the primary conduit for all underlying data events.
// It exposes a number of methods for binding event listeners, creating,
// entering, or leaving chat rooms, initiating chats, sending messages,
// and moderator actions such as warning, kicking, or suspending users.
//
//     Firechat.js 0.1.0
//     https://firebase.com
//     (c) 2013 Firebase
//     License: MIT

// Setup
// --------------
(function(Firebase) {

  // Establish a reference to the `window` object, and save the previous value
  // of the `Firechat` variable.
  var root = this,
      previousFirechat = root.Firechat;

  function Firechat(firebaseRef, options) {

    // Instantiate a new connection to Firebase.
    this._firebase = firebaseRef;

    // User-specific instance variables.
    this._user = null;
    this._userId = null;
    this._userName = null;
    this._isModerator = false;

    // A unique id generated for each session.
    this._sessionId = null;

    // A mapping of event IDs to an array of callbacks.
    this._events = {};

    // A mapping of room IDs to a boolean indicating presence.
    this._rooms = {};

    // A mapping of operations to re-queue on disconnect.
    this._presenceBits = {};

    // Commonly-used Firebase references.
    this._userRef        = null;
    this._messageRef     = this._firebase.child('room-messages');
    this._roomRef        = this._firebase.child('room-metadata');
    this._privateRoomRef = this._firebase.child('room-private-metadata');
    this._moderatorsRef  = this._firebase.child('moderators');
    this._suspensionsRef = this._firebase.child('suspensions');
    this._usersOnlineRef = this._firebase.child('user-names-online');

    // Setup and establish default options.
    this._options = options || {};

    // The number of historical messages to load per room.
    this._options.numMaxMessages = this._options.numMaxMessages || 50;
  }

  // Run Firechat in *noConflict* mode, returning the `Firechat` variable to
  // its previous owner, and returning a reference to the Firechat object.
  Firechat.noConflict = function noConflict() {
    root.Firechat = previousFirechat;
    return Firechat;
  };

  // Export the Firechat object as a global.
  root.Firechat = Firechat;

  // Firechat Internal Methods
  // --------------
  Firechat.prototype = {

    // Load the initial metadata for the user's account and set initial state.
    _loadUserMetadata: function(onComplete) {
      var self = this;

      // Update the user record with a default name on user's first visit.
      this._userRef.transaction(function(current) {
        if (!current || !current.id || !current.name) {
          return {
            id: self._userId,
            name: self._userName
          };
        }
      }, function(error, committed, snapshot) {
        self._user = snapshot.val();
        self._moderatorsRef.child(self._userId).once('value', function(snapshot) {
          self._isModerator = !!snapshot.val();
          root.setTimeout(onComplete, 0);
        });
      });
    },

    // Initialize Firebase listeners and callbacks for the supported bindings.
    _setupDataEvents: function() {
      // Monitor connection state so we can requeue disconnect operations if need be.
      this._firebase.root().child('.info/connected').on('value', function(snapshot) {
        if (snapshot.val() === true) {
          // We're connected (or reconnected)! Set up our presence state.
          for (var i = 0; i < this._presenceBits; i++) {
            var op = this._presenceBits[i],
                ref = this._firebase.root().child(op.ref);

            ref.onDisconnect().set(op.offlineValue);
            ref.set(op.onlineValue);
          }
        }
      }, this);

      // Generate a unique session id for the visit.
      var sessionRef = this._userRef.child('sessions').push();
      this._sessionId = sessionRef.name();
      this._queuePresenceOperation(sessionRef, true, null);

      // Register our username in the public user listing.
      var usernameRef = this._usersOnlineRef.child(this._userName.toLowerCase());
      var usernameSessionRef = usernameRef.child(this._sessionId);
      this._queuePresenceOperation(usernameSessionRef, {
        id: this._userId,
        name: this._userName
      }, null);

      // Listen for state changes for the given user.
      this._userRef.on('value', this._onUpdateUser, this);

      // Listen for chat invitations from other users.
      this._userRef.child('invites').on('child_added', this._onFirechatInvite, this);

      // Listen for messages from moderators and adminstrators.
      this._userRef.child('notifications').on('child_added', this._onNotification, this);
    },

    // Append the new callback to our list of event handlers.
    _addEventCallback: function(eventId, callback) {
      this._events[eventId] = this._events[eventId] || [];
      this._events[eventId].push(callback);
    },

    // Retrieve the list of event handlers for a given event id.
    _getEventCallbacks: function(eventId) {
      if (this._events.hasOwnProperty(eventId)) {
        return this._events[eventId];
      }
      return [];
    },

    // Invoke each of the event handlers for a given event id with specified data.
    _invokeEventCallbacks: function(eventId) {
      var args = [],
          callbacks = this._getEventCallbacks(eventId);

      Array.prototype.push.apply(args, arguments);
      args = args.slice(1);

      for (var i = 0; i < callbacks.length; i += 1) {
        callbacks[i].apply(null, args);
      }
    },

    // Keep track of on-disconnect events so they can be requeued if we disconnect the reconnect.
    _queuePresenceOperation: function(ref, onlineValue, offlineValue) {
      ref.onDisconnect().set(offlineValue);
      ref.set(onlineValue);
      this._presenceBits[ref.toString()] = {
        ref: ref,
        onlineValue: onlineValue,
        offlineValue: offlineValue
      };
    },

    // Remove an on-disconnect event from firing upon future disconnect and reconnect.
    _removePresenceOperation: function(path, value) {
      var ref = new Firebase(path);
      ref.onDisconnect().cancel();
      ref.set(value);
      delete this._presenceBits[path];
    },

    // Event to monitor current user state.
    _onUpdateUser: function(snapshot) {
      this._user = snapshot.val();
      this._invokeEventCallbacks('user-update', this._user);
    },

    // Event to monitor current auth + user state.
    _onAuthRequired: function() {
      this._invokeEventCallbacks('auth-required');
    },

    // Events to monitor room entry / exit and messages additional / removal.
    _onEnterRoom: function(room) {
      this._invokeEventCallbacks('room-enter', room);
    },
    _onNewMessage: function(roomId, snapshot) {
      var message = snapshot.val();
      message.id = snapshot.name();
      this._invokeEventCallbacks('message-add', roomId, message);
    },
    _onRemoveMessage: function(roomId, snapshot) {
      var messageId = snapshot.name();
      this._invokeEventCallbacks('message-remove', roomId, messageId);
    },
    _onLeaveRoom: function(roomId) {
      this._invokeEventCallbacks('room-exit', roomId);
    },

    // Event to listen for notifications from administrators and moderators.
    _onNotification: function(snapshot) {
      var notification = snapshot.val();
      if (!notification.read) {
        if (notification.notificationType !== 'suspension' || notification.data.suspendedUntil < Firebase.ServerValue.TIMESTAMP) {
          snapshot.ref().child('read').set(true);
        }
        this._invokeEventCallbacks('notification', notification);
      }
    },

    // Events to monitor chat invitations and invitation replies.
    _onFirechatInvite: function(snapshot) {
      var self = this,
          invite = snapshot.val();

      // Skip invites we've already responded to.
      if (invite.status) {
        return;
      }

      invite.id = invite.id || snapshot.name();
      self.getRoom(invite.roomId, function(room) {
        invite.toRoomName = room.name;
        self._invokeEventCallbacks('room-invite', invite);
      });
    },
    _onFirechatInviteResponse: function(snapshot) {
      var self = this,
          invite = snapshot.val();

      invite.id = invite.id || snapshot.name();
      this._invokeEventCallbacks('room-invite-response', invite);
    }
  };

  // Firechat External Methods
  // --------------

  // Initialize the library and setup data listeners.
  Firechat.prototype.setUser = function(userId, userName, callback) {
    var self = this;

    self._firebase.root().child('.info/authenticated').on('value', function(snapshot) {
      if (snapshot.val() === true) {
        self._firebase.root().child('.info/authenticated').off();

        self._userId = userId.toString();
        self._userName = userName.toString();
        self._userRef = self._firebase.child('users').child(self._userId);
        self._loadUserMetadata(function() {
          root.setTimeout(function() {
            callback(self._user);
            self._setupDataEvents();
          }, 0);
        });
      }
    });
  };

  // Resumes the previous session by automatically entering rooms.
  Firechat.prototype.resumeSession = function() {
    this._userRef.child('rooms').once('value', function(snapshot) {
      var rooms = snapshot.val();
      for (var roomId in rooms) {
        this.enterRoom(rooms[roomId].id);
      }
    }, /* onError */ function(){}, /* context */ this);
  };

  // Callback registration. Supports each of the following events:
  Firechat.prototype.on = function(eventType, cb) {
    this._addEventCallback(eventType, cb);
  };

  // Create and automatically enter a new chat room.
  Firechat.prototype.createRoom = function(roomName, roomType, callback) {
    var self = this,
        newRoomRef = this._roomRef.push();

    var newRoom = {
      id: newRoomRef.name(),
      name: roomName,
      type: roomType || 'public',
      createdByUserId: this._userId,
      createdAt: Firebase.ServerValue.TIMESTAMP
    };

    if (roomType === 'private') {
      newRoom.authorizedUsers = {};
      newRoom.authorizedUsers[this._userId] = true;
    }

    newRoomRef.set(newRoom, function(error) {
      if (!error) {
        self.enterRoom(newRoomRef.name());
      }
      if (callback) {
        callback(newRoomRef.name());
      }
    });
  };

  // Enter a chat room.
  Firechat.prototype.enterRoom = function(roomId) {
    var self = this;
    self.getRoom(roomId, function(room) {
      var roomName = room.name;

      if (!roomId || !roomName) return;

      // Skip if we're already in this room.
      if (self._rooms[roomId]) {
        return;
      }

      self._rooms[roomId] = true;

      if (self._user) {
        // Save entering this room to resume the session again later.
        self._userRef.child('rooms').child(roomId).set({
          id: roomId,
          name: roomName,
          active: true
        });

        // Set presence bit for the room and queue it for removal on disconnect.
        var presenceRef = self._firebase.child('room-users').child(roomId).child(self._userId).child(self._sessionId);
        self._queuePresenceOperation(presenceRef, {
          id: self._userId,
          name: self._userName
        }, null);
      }

      // Invoke our callbacks before we start listening for new messages.
      self._onEnterRoom({ id: roomId, name: roomName });

      // Setup message listeners
      self._roomRef.child(roomId).once('value', function(snapshot) {
        self._messageRef.child(roomId).limit(self._options.numMaxMessages).on('child_added', function(snapshot) {
          self._onNewMessage(roomId, snapshot);
        }, /* onCancel */ function() {
          // Turns out we don't have permission to access these messages.
          self.leaveRoom(roomId);
        }, /* context */ self);

        self._messageRef.child(roomId).limit(self._options.numMaxMessages).on('child_removed', function(snapshot) {
          self._onRemoveMessage(roomId, snapshot);
        }, /* onCancel */ function(){}, /* context */ self);
      }, /* onFailure */ function(){}, self);
    });
  };

  // Leave a chat room.
  Firechat.prototype.leaveRoom = function(roomId) {
    var self = this,
        userRoomRef = self._firebase.child('room-users').child(roomId),
        presenceRef = userRoomRef.child(self._userId).child(self._sessionId);

    // Remove listener for new messages to this room.
    self._messageRef.child(roomId).off();

    if (self._user) {
      // Remove presence bit for the room and cancel on-disconnect removal.
      self._removePresenceOperation(presenceRef.toString(), null);

      // Remove session bit for the room.
      self._userRef.child('rooms').child(roomId).remove();
    }

    delete self._rooms[roomId];

    // Invoke event callbacks for the room-exit event.
    self._onLeaveRoom(roomId);
  };

  Firechat.prototype.sendMessage = function(roomId, messageContent, messageType, cb) {
    var self = this,
        message = {
          userId: self._userId,
          name: self._userName,
          timestamp: Firebase.ServerValue.TIMESTAMP,
          message: messageContent,
          type: messageType || 'default'
        },
        newMessageRef;

    if (!self._user) {
      self._onAuthRequired();
      if (cb) {
        cb(new Error('Not authenticated or user not set!'));
      }
      return;
    }

    newMessageRef = self._messageRef.child(roomId).push();
    newMessageRef.setWithPriority(message, Firebase.ServerValue.TIMESTAMP, cb);
  };

  Firechat.prototype.deleteMessage = function(roomId, messageId, cb) {
    var self = this;

    self._messageRef.child(roomId).child(messageId).remove(cb);
  };

  // Mute or unmute a given user by id. This list will be stored internally and
  // all messages from the muted clients will be filtered client-side after
  // receipt of each new message.
  Firechat.prototype.toggleUserMute = function(userId, cb) {
    var self = this;

    if (!self._user) {
      self._onAuthRequired();
      if (cb) {
        cb(new Error('Not authenticated or user not set!'));
      }
      return;
    }

    self._userRef.child('muted').child(userId).transaction(function(isMuted) {
      return (isMuted) ? null : true;
    }, cb);
  };

  // Send a moderator notification to a specific user.
  Firechat.prototype.sendSuperuserNotification = function(userId, notificationType, data, cb) {
    var self = this,
        userNotificationsRef = self._firebase.child('users').child(userId).child('notifications');

    userNotificationsRef.push({
      fromUserId: self._userId,
      timestamp: Firebase.ServerValue.TIMESTAMP,
      notificationType: notificationType,
      data: data || {}
    }, cb);
  };

  // Warn a user for violating the terms of service or being abusive.
  Firechat.prototype.warnUser = function(userId) {
    var self = this;

    self.sendSuperuserNotification(userId, 'warning');
  };

  // Suspend a user by putting the user into read-only mode for a period.
  Firechat.prototype.suspendUser = function(userId, timeLengthSeconds, cb) {
    var self = this,
        suspendedUntil = Firebase.ServerValue.TIMESTAMP + 1000*timeLengthSeconds;

    self._suspensionsRef.child(userId).set(suspendedUntil, function(error) {
      if (error && cb) {
        return cb(error);
      } else {
        self.sendSuperuserNotification(userId, 'suspension', {
          suspendedUntil: suspendedUntil
        });
        return cb(null);
      }
    });
  };

  // Invite a user to a specific chat room.
  Firechat.prototype.inviteUser = function(userId, roomId) {
    var self = this,
        sendInvite = function() {
          var inviteRef = self._firebase.child('users').child(userId).child('invites').push();
          inviteRef.set({
            id: inviteRef.name(),
            fromUserId: self._userId,
            fromUserName: self._userName,
            toRoomId: roomId
          });

          // Handle listen unauth / failure in case we're kicked.
          inviteRef.on('value', self._onFirechatInviteResponse, function(){}, self);
        };

    if (!self._user) {
      self._onAuthRequired();
      return;
    }

    self.getRoom(roomId, function(room) {
      if (room.type === 'private') {
        var authorizedUserRef = self._roomRef.child(roomId).child('authorizedUsers');
        authorizedUserRef.child(userId).set(true, function(error) {
          if (!error) {
            sendInvite();
          }
        });
      } else {
        sendInvite();
      }
    });
  };

  Firechat.prototype.acceptInvite = function(inviteId, cb) {
    var self = this;

    self._userRef.child('invites').child(inviteId).once('value', function(snapshot) {
      var invite = snapshot.val();
      if (invite === null && cb) {
        return cb(new Error('acceptInvite(' + inviteId + '): invalid invite id'));
      } else {
        self.enterRoom(invite.toRoomId);
        self._userRef.child('invites').child(inviteId).update({
          'status': 'accepted',
          'toUserName': self._userName
        }, cb);
      }
    }, self);
  };

  Firechat.prototype.declineInvite = function(inviteId, cb) {
    var self = this,
        updates = {
          'status': 'declined',
          'toUserName': self._userName
        };

    self._userRef.child('invites').child(inviteId).update(updates, cb);
  };

  Firechat.prototype.getRoomList = function(cb) {
    var self = this;

    self._roomRef.once('value', function(snapshot) {
      cb(snapshot.val());
    });
  };

  Firechat.prototype.getUsersByRoom = function() {
    var self = this,
        roomId = arguments[0],
        query = self._firebase.child('room-users').child(roomId),
        cb = arguments[arguments.length - 1],
        limit = null;

    if (arguments.length > 2) {
      limit = arguments[1];
    }

    query = (limit) ? query.limit(limit) : query;

    query.once('value', function(snapshot) {
      var usernames = snapshot.val() || {},
          usernamesUnique = {};

      for (var username in usernames) {
        for (var session in usernames[username]) {
          // Skip all other sessions for this user as we only need one.
          usernamesUnique[username] = usernames[username][session];
          break;
        }
      }

      root.setTimeout(function() {
        cb(usernamesUnique);
      }, 0);
    });
  };

  Firechat.prototype.getUsersByPrefix = function(prefix, startAt, endAt, limit, cb) {
    var self = this,
        query = this._usersOnlineRef,
        prefixLower = prefix.toLowerCase();

    if (startAt) {
      query = query.startAt(null, startAt);
    } else if (endAt) {
      query = query.endAt(null, endAt);
    } else {
      query = (prefixLower) ? query.startAt(null, prefixLower) : query.startAt();
    }

    query = (limit) ? query.limit(limit) : query;

    query.once('value', function(snapshot) {
      var usernames = snapshot.val() || {},
          usernamesFiltered = {};

      for (var userNameKey in usernames) {
        var sessions = usernames[userNameKey],
            userName, userId, usernameClean;

        // Grab the user data from the first registered active session.
        for (var sessionId in sessions) {
          userName = sessions[sessionId].name;
          userId = sessions[sessionId].id;

          // Skip all other sessions for this user as we only need one.
          break;
        }

        // Filter out any usernames that don't match our prefix and break.
        if ((prefix.length > 0) && (userName.toLowerCase().indexOf(prefixLower) !== 0))
          continue;

        usernamesFiltered[userName] = {
          name: userName,
          id: userId
        };
      }

      root.setTimeout(function() {
        cb(usernamesFiltered);
      }, 0);
    });
  };

  // Miscellaneous helper methods.
  Firechat.prototype.getRoom = function(roomId, callback) {
    this._roomRef.child(roomId).once('value', function(snapshot) {
      callback(snapshot.val());
    });
  };

  Firechat.prototype.userIsModerator = function() {
    return this._isModerator;
  };
})(Firebase);
(function($) {


  if (!$ || (parseInt($().jquery.replace(/\./g, ""), 10) < 170)) {
    throw new Error("jQuery 1.7 or later required!");
  }

  var root = this,
      previousFirechatUI = root.FirechatUI;

  root.FirechatUI = FirechatUI;

  if (!self.FirechatDefaultTemplates) {
    throw new Error("Unable to find chat templates!");
  }

  function FirechatUI(firebaseRef, el, options) {
    var self = this;

    if (!firebaseRef) {
      throw new Error('FirechatUI: Missing required argument `firebaseRef`');
    }

    if (!el) {
      throw new Error('FirechatUI: Missing required argument `el`');
    }

    options = options || {};
    this._options = options;

    this._el = el;
    this._user = null;
    this._chat = new Firechat(firebaseRef, options);

    // A list of rooms to enter once we've made room for them (once we've hit the max room limit).
    this._roomQueue = [];

    // Define some constants regarding maximum lengths, client-enforced.
    this.maxLengthUsername = 15;
    this.maxLengthUsernameDisplay = 15;
    this.maxLengthRoomName = 24;
    this.maxLengthMessage = 120;
    this.maxUserSearchResults = 100;

    // Define some useful regexes.
    this.urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
    this.pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

    this._renderLayout();

    // Grab shortcuts to commonly used jQuery elements.
    this.$wrapper = $('#firechat');
    this.$roomList = $('#firechat-room-list');
    this.$tabList = $('#firechat-tab-list');
    this.$tabContent = $('#firechat-tab-content');
    this.$messages = {};

    // Rate limit messages from a given user with some defaults.
    this.$rateLimit = {
      limitCount: 10,         // max number of events
      limitInterval: 10000,   // max interval for above count in milliseconds
      limitWaitTime: 30000,   // wait time if a user hits the wait limit
      history: {}
    };

    // Setup UI bindings for chat controls.
    this._bindUIEvents();

    // Setup bindings to internal methods
    this._bindDataEvents();
  }

  // Run FirechatUI in *noConflict* mode, returning the `FirechatUI` variable to
  // its previous owner, and returning a reference to the FirechatUI object.
  FirechatUI.noConflict = function noConflict() {
    root.FirechatUI = previousFirechatUI;
    return FirechatUI;
  };

  FirechatUI.prototype = {

    _bindUIEvents: function() {
      // Chat-specific custom interactions and functionality.
      this._bindForHeightChange();
      this._bindForTabControls();
      this._bindForRoomList();
      this._bindForUserRoomList();
      this._bindForUserSearch();
      this._bindForUserMuting();
      this._bindForChatInvites();
      this._bindForRoomListing();

      // Generic, non-chat-specific interactive elements.
      this._setupTabs();
      this._setupDropdowns();
      this._bindTextInputFieldLimits();
    },

    _bindDataEvents: function() {
      this._chat.on('user-update', this._onUpdateUser.bind(this));

      // Bind events for new messages, enter / leaving rooms, and user metadata.
      this._chat.on('room-enter', this._onEnterRoom.bind(this));
      this._chat.on('room-exit', this._onLeaveRoom.bind(this));
      this._chat.on('message-add', this._onNewMessage.bind(this));
      this._chat.on('message-remove', this._onRemoveMessage.bind(this));

      // Bind events related to chat invitations.
      this._chat.on('room-invite', this._onChatInvite.bind(this));
      this._chat.on('room-invite-response', this._onChatInviteResponse.bind(this));

      // Binds events related to admin or moderator notifications.
      this._chat.on('notification', this._onNotification.bind(this));
    },

    _renderLayout: function() {
      var template = FirechatDefaultTemplates["templates/layout-full.html"];
      $(this._el).html(template({
        maxLengthUsername: this.maxLengthUsername
      }));
    },

    _onUpdateUser: function(user) {
      // Update our current user state and render latest user name.
      this._user = user;

      // Update our interface to reflect which users are muted or not.
      var mutedUsers = this._user.muted || {};
      $('[data-event="firechat-user-mute-toggle"]').each(function(i, el) {
        var userId = $(this).closest('[data-user-id]').data('user-id');
        $(this).toggleClass('red', !!mutedUsers[userId]);
      });

      // Ensure that all messages from muted users are removed.
      for (var userId in mutedUsers) {
        $('.message[data-user-id="' + userId + '"]').fadeOut();
      }
    },

    _onEnterRoom: function(room) {
      this.attachTab(room.id, room.name);
    },
    _onLeaveRoom: function(roomId) {
      this.removeTab(roomId);

      // Auto-enter rooms in the queue
      if ((this._roomQueue.length > 0)) {
        this._chat.enterRoom(this._roomQueue.shift(roomId));
      }
    },
    _onNewMessage: function(roomId, message) {
      var userId = message.userId;
      if (!this._user || !this._user.muted || !this._user.muted[userId]) {
        this.showMessage(roomId, message);
      }
    },
    _onRemoveMessage: function(roomId, messageId) {
      this.removeMessage(roomId, messageId);
    },

    // Events related to chat invitations.
    _onChatInvite: function(invitation) {
      var self = this;
      var template = FirechatDefaultTemplates["templates/prompt-invitation.html"];
      var $prompt = this.prompt('Invite', template(invitation));
      $prompt.find('a.close').click(function() {
        $prompt.remove();
        self._chat.declineInvite(invitation.id);
      });

      $prompt.find('[data-toggle=accept]').click(function() {
        $prompt.remove();
        self._chat.acceptInvite(invitation.id);
      });

      $prompt.find('[data-toggle=decline]').click(function() {
        $prompt.remove();
        self._chat.declineInvite(invitation.id);
      });
    },
    _onChatInviteResponse: function(invitation) {
      if (!invitation.status) return;

      var self = this,
          template = FirechatDefaultTemplates["templates/prompt-invite-reply.html"],
          $prompt;

      if (invitation.status && invitation.status === 'accepted') {
        $prompt = this.prompt('Accepted', template(invitation));
        this._chat.getRoom(invitation.toRoomId, function(room) {
          self.attachTab(invitation.toRoomId, room.name);
        });
      } else {
        $prompt = this.prompt('Declined', template(invitation));
      }

      $prompt.find('a.close').click(function() {
        $prompt.remove();
      });
    },

    // Events related to admin or moderator notifications.
    _onNotification: function(notification) {
      if (notification.notificationType === 'warning') {
        this.renderAlertPrompt('Warning', 'You are being warned for inappropriate messaging. Further violation may result in temporary or permanent ban of service.');
      } else if (notification.notificationType === 'suspension') {
        var suspendedUntil = notification.data.suspendedUntil,
            secondsLeft = Math.round((suspendedUntil - new Date().getTime()) / 1000),
            timeLeft = '';

        if (secondsLeft > 0) {
          if (secondsLeft > 2*3600) {
            var hours = Math.floor(secondsLeft / 3600);
            timeLeft = hours + ' hours, ';
            secondsLeft -= 3600*hours;
          }
          timeLeft += Math.floor(secondsLeft / 60) + ' minutes';
          this.renderAlertPrompt('Suspended', 'A moderator has suspended you for violating site rules. You cannot send messages for another ' + timeLeft + '.');
        }
      }
    }
  };

  /**
   * Initialize an authenticated session with a user id and name.
   * This method assumes that the underlying Firebase reference has
   * already been authenticated.
   */
  FirechatUI.prototype.setUser = function(userId, userName) {
    var self = this;

    // Initialize data events
    self._chat.setUser(userId, userName, function(user) {
      self._user = user;

      if (self._chat.userIsModerator()) {
        self._bindSuperuserUIEvents();
      }

      self._chat.resumeSession();
    });
  };

  /**
   * Exposes internal chat bindings via this external interface.
   */
  FirechatUI.prototype.on = function(eventType, cb) {
    var self = this;

    this._chat.on(eventType, cb);
  };

  /**
   * Binds a custom context menu to messages for superusers to warn or ban
   * users for violating terms of service.
   */
  FirechatUI.prototype._bindSuperuserUIEvents = function() {
    var self = this,
        parseMessageVars = function(event) {
          var $this = $(this),
          messageId = $this.closest('[data-message-id]').data('message-id'),
          userId = $('[data-message-id="' + messageId + '"]').closest('[data-user-id]').data('user-id'),
          roomId = $('[data-message-id="' + messageId + '"]').closest('[data-room-id]').data('room-id');

          return { messageId: messageId, userId: userId, roomId: roomId };
        },
        clearMessageContextMenus = function() {
          // Remove any context menus currently showing.
          $('[data-toggle="firechat-contextmenu"]').each(function() {
            $(this).remove();
          });

          // Remove any messages currently highlighted.
          $('#firechat .message.highlighted').each(function() {
            $(this).removeClass('highlighted');
          });
        },
        showMessageContextMenu = function(event) {
          var $this = $(this),
              $message = $this.closest('[data-message-id]'),
              template = FirechatDefaultTemplates["templates/message-context-menu.html"],
              messageVars = parseMessageVars.call(this, event),
              $template;

          event.preventDefault();

          // Clear existing menus.
          clearMessageContextMenus();

          // Highlight the relevant message.
          $this.addClass('highlighted');

          self._chat.getRoom(messageVars.roomId, function(room) {
            // Show the context menu.
            $template = $(template({
              id: $message.data('message-id')
            }));
            $template.css({
              left: event.clientX,
              top: event.clientY
            }).appendTo(self.$wrapper);
          });
        };

    // Handle dismissal of message context menus (any non-right-click click event).
    $(document).bind('click', { self: this }, function(event) {
      if (!event.button || event.button != 2) {
        clearMessageContextMenus();
      }
    });

    // Handle display of message context menus (via right-click on a message).
    $(document).delegate('[data-class="firechat-message"]', 'contextmenu', showMessageContextMenu);

    // Handle click of the 'Warn User' contextmenu item.
    $(document).delegate('[data-event="firechat-user-warn"]', 'click', function(event) {
      var messageVars = parseMessageVars.call(this, event);
      self._chat.warnUser(messageVars.userId);
    });

    // Handle click of the 'Suspend User (1 Hour)' contextmenu item.
    $(document).delegate('[data-event="firechat-user-suspend-hour"]', 'click', function(event) {
      var messageVars = parseMessageVars.call(this, event);
      self._chat.suspendUser(messageVars.userId, /* 1 Hour = 3600s */ 60*60);
    });

    // Handle click of the 'Suspend User (1 Day)' contextmenu item.
    $(document).delegate('[data-event="firechat-user-suspend-day"]', 'click', function(event) {
      var messageVars = parseMessageVars.call(this, event);
      self._chat.suspendUser(messageVars.userId, /* 1 Day = 86400s */ 24*60*60);
    });

    // Handle click of the 'Delete Message' contextmenu item.
    $(document).delegate('[data-event="firechat-message-delete"]', 'click', function(event) {
      var messageVars = parseMessageVars.call(this, event);
      self._chat.deleteMessage(messageVars.roomId, messageVars.messageId);
    });
  };

  /**
   * Binds to height changes in the surrounding div.
   */
  FirechatUI.prototype._bindForHeightChange = function() {
    var self = this,
        $el = $(this._el),
        lastHeight = null;

    setInterval(function() {
      var height = $el.height();
      if (height != lastHeight) {
        lastHeight = height;
        $('.chat').each(function(i, el) {

        });
      }
    }, 500);
  };

  /**
   * Binds custom inner-tab events.
   */
  FirechatUI.prototype._bindForTabControls = function() {
    var self = this;

    // Handle click of tab close button.
    $(document).delegate('[data-event="firechat-close-tab"]', 'click', function(event) {
      var roomId = $(this).closest('[data-room-id]').data('room-id');
      self._chat.leaveRoom(roomId);
    });
  };

  /**
   * Binds room list dropdown to populate room list on-demand.
   */
  FirechatUI.prototype._bindForRoomList = function() {
    var self = this;

    $('#firechat-btn-rooms').bind('click', function() {
      if ($(this).parent().hasClass('open')) {
        return;
      }

      var $this = $(this),
          template = FirechatDefaultTemplates["templates/room-list-item.html"],
          selectRoomListItem = function() {
            var parent = $(this).parent(),
                roomId = parent.data('room-id'),
                roomName = parent.data('room-name');

            if (self.$messages[roomId]) {
              self.focusTab(roomId);
            } else {
              self._chat.enterRoom(roomId, roomName);
            }
          };

      self._chat.getRoomList(function(rooms) {
        self.$roomList.empty();
        for (var roomId in rooms) {
          var room = rooms[roomId];
          room.isRoomOpen = !!self.$messages[room.id];
          var $roomItem = $(template(room));
          $roomItem.children('a').bind('click', selectRoomListItem);
          self.$roomList.append($roomItem.toggle(true));
        }
      });
    });
  };

  /**
   * Binds user list dropdown per room to populate user list on-demand.
   */
  FirechatUI.prototype._bindForUserRoomList = function() {
    var self = this;

    // Upon click of the dropdown, autofocus the input field and trigger list population.
    $(document).delegate('[data-event="firechat-user-room-list-btn"]', 'click', function(event) {
      event.stopPropagation();

      var $this = $(this),
          roomId = $this.closest('[data-room-id]').data('room-id'),
          template = FirechatDefaultTemplates["templates/room-user-list-item.html"],
          targetId = $this.data('target'),
          $target = $('#' + targetId);

      $target.empty();
      self._chat.getUsersByRoom(roomId, function(users) {
        for (var username in users) {
          user = users[username];
          user.disableActions = (!self._user || user.id === self._user.id);
          user.nameTrimmed = self.trimWithEllipsis(user.name, self.maxLengthUsernameDisplay);
          user.isMuted = (self._user && self._user.muted && self._user.muted[user.id]);
          $target.append($(template(user)));
        }
        self.sortListLexicographically('#' + targetId);
      });
    });
  };

  /**
   * Binds user search buttons, dropdowns, and input fields for searching all
   * active users currently in chat.
   */
  FirechatUI.prototype._bindForUserSearch = function() {
    var self = this,
        handleUserSearchSubmit = function(event) {
          var $this = $(this),
              targetId = $this.data('target'),
              controlsId = $this.data('controls'),
              templateId = $this.data('template'),
              prefix = $this.val() || $this.data('prefix') || '',
              startAt = $this.data('startAt') || null,
              endAt = $this.data('endAt') || null;

          event.preventDefault();

          userSearch(targetId, templateId, controlsId, prefix, startAt, endAt);
        },
        userSearch = function(targetId, templateId, controlsId, prefix, startAt, endAt) {
          var $target = $('#' + targetId),
              $controls = $('#' + controlsId),
              template = FirechatDefaultTemplates[templateId];

          // Query results, filtered by prefix, using the defined startAt and endAt markets.
          self._chat.getUsersByPrefix(prefix, startAt, endAt, self.maxUserSearchResults, function(users) {
            var numResults = 0,
                $prevBtn, $nextBtn, username, firstResult, lastResult;

            $target.empty();

            for (username in users) {
              var user = users[username];

              // Disable buttons for <me>.
              user.disableActions = (!self._user || user.id === self._user.id);

              numResults += 1;

              $target.append(template(user));

              // If we've hit our result limit, the additional value signifies we should paginate.
              if (numResults === 1) {
                firstResult = user.name.toLowerCase();
              } else if (numResults >= self.maxUserSearchResults) {
                lastResult = user.name.toLowerCase();
                break;
              }
            }

            if ($controls) {
              $prevBtn = $controls.find('[data-toggle="firechat-pagination-prev"]');
              $nextBtn = $controls.find('[data-toggle="firechat-pagination-next"]');

              // Sort out configuration for the 'next' button
              if (lastResult) {
                $nextBtn
                  .data('event', 'firechat-user-search')
                  .data('startAt', lastResult)
                  .data('prefix', prefix)
                  .removeClass('disabled').removeAttr('disabled');
              } else {
                $nextBtn
                  .data('event', null)
                  .data('startAt', null)
                  .data('prefix', null)
                  .addClass('disabled').attr('disabled', 'disabled');
              }
            }
          });
        };

    $(document).delegate('[data-event="firechat-user-search"]', 'keyup', handleUserSearchSubmit);
    $(document).delegate('[data-event="firechat-user-search"]', 'click', handleUserSearchSubmit);

    // Upon click of the dropdown, autofocus the input field and trigger list population.
    $(document).delegate('[data-event="firechat-user-search-btn"]', 'click', function(event) {
      event.stopPropagation();
      var $input = $(this).next('div.dropdown-menu').find('input');
      $input.focus();
      $input.trigger(jQuery.Event('keyup'));
    });

    // Ensure that the dropdown stays open despite clicking on the input element.
    $(document).delegate('[data-event="firechat-user-search"]', 'click', function(event) {
      event.stopPropagation();
    });
  };

  /**
   * Binds user mute toggles and removes all messages for a given user upon mute.
   */
  FirechatUI.prototype._bindForUserMuting = function() {
    var self = this;
    $(document).delegate('[data-event="firechat-user-mute-toggle"]', 'click', function(event) {
      var $this = $(this),
          userId = $this.closest('[data-user-id]').data('user-id'),
          userName = $this.closest('[data-user-name]').data('user-name'),
          isMuted = $this.hasClass('red'),
          template = FirechatDefaultTemplates["templates/prompt-user-mute.html"];

      event.preventDefault();

      // Require user confirmation for muting.
      if (!isMuted) {
        var $prompt = self.prompt('Mute User?', template({
          userName: userName
        }));

        $prompt.find('a.close').first().click(function() {
          $prompt.remove();
        });

        $prompt.find('[data-toggle=decline]').first().click(function() {
          $prompt.remove();
        });

        $prompt.find('[data-toggle=accept]').first().click(function() {
          self._chat.toggleUserMute(userId);
          $prompt.remove();
        });
      } else {
        self._chat.toggleUserMute(userId);
      }
    });
  };

  /**
   * Binds to elements with the data-event='firechat-user-(private)-invite' and
   * handles invitations as well as room creation and entering.
   */
  FirechatUI.prototype._bindForChatInvites = function() {
    var self = this,
        renderInvitePrompt = function(event) {
          var $this = $(this),
              userId = $this.closest('[data-user-id]').data('user-id'),
              roomId = $this.closest('[data-room-id]').data('room-id'),
              userName = $this.closest('[data-user-name]').data('user-name'),
              template = FirechatDefaultTemplates["templates/prompt-invite-private.html"],
              $prompt;

          self._chat.getRoom(roomId, function(room) {
            $prompt = self.prompt('Invite', template({
              userName: userName,
              roomName: room.name
            }));

            $prompt.find('a.close').click(function() {
              $prompt.remove();
            });

            $prompt.find('[data-toggle=decline]').click(function() {
              $prompt.remove();
            });

            $prompt.find('[data-toggle=accept]').first().click(function() {
              $prompt.remove();
              self._chat.inviteUser(userId, roomId, room.name);
            });
          });
        },
        renderPrivateInvitePrompt = function(event) {
          var $this = $(this),
              userId = $this.closest('[data-user-id]').data('user-id'),
              userName = $this.closest('[data-user-name]').data('user-name'),
              template = FirechatDefaultTemplates["templates/prompt-invite-private.html"],
              $prompt;

          if (userId && userName) {
            $prompt = self.prompt('Private Invite', template({
              userName: userName,
              roomName: 'Private Chat'
            }));

            $prompt.find('a.close').click(function() {
              $prompt.remove();
            });

            $prompt.find('[data-toggle=decline]').click(function() {
              $prompt.remove();
            });

            $prompt.find('[data-toggle=accept]').first().click(function() {
              $prompt.remove();
              var roomName = 'Private Chat';
              self._chat.createRoom(roomName, 'private', function(roomId) {
                self._chat.inviteUser(userId, roomId, roomName);
              });
            });
          }
        };

    $(document).delegate('[data-event="firechat-user-chat"]', 'click', renderPrivateInvitePrompt);
    $(document).delegate('[data-event="firechat-user-invite"]', 'click', renderInvitePrompt);
  };

  /**
   * Binds to room dropdown button, menu items, and create room button.
   */
  FirechatUI.prototype._bindForRoomListing = function() {
    var self = this,
        $createRoomPromptButton = $('#firechat-btn-create-room-prompt'),
        $createRoomButton = $('#firechat-btn-create-room'),
        renderRoomList = function(event) {
          var type = $(this).data('room-type');

          self.sortListLexicographically('#firechat-room-list');
        };

    // Handle click of the create new room prompt-button.
    $createRoomPromptButton.bind('click', function(event) {
      self.promptCreateRoom();
    });

    // Handle click of the create new room button.
    $createRoomButton.bind('click', function(event) {
      var roomName = $('#firechat-input-room-name').val();
      $('#firechat-prompt-create-room').remove();
      self._chat.createRoom(roomName);
    });
  };

  /**
   * A stripped-down version of bootstrap-tab.js.
   *
   * Original bootstrap-tab.js Copyright 2012 Twitter, Inc.,licensed under the Apache v2.0
   */
  FirechatUI.prototype._setupTabs = function() {
    var self = this,
        show = function($el) {
          var $this = $el,
              $ul = $this.closest('ul:not(.dropdown-menu)'),
              selector = $this.attr('data-target'),
              previous = $ul.find('.active:last a')[0],
              $target,
              e;

          if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
          }

          if ($this.parent('li').hasClass('active')) return;

          e = $.Event('show', { relatedTarget: previous });

          $this.trigger(e);

          if (e.isDefaultPrevented()) return;

          $target = $(selector);

          activate($this.parent('li'), $ul);
          activate($target, $target.parent(), function () {
            $this.trigger({
              type: 'shown',
              relatedTarget: previous
            });
          });
        },
        activate = function (element, container, callback) {
          var $active = container.find('> .active'),
              transition = callback && $.support.transition && $active.hasClass('fade');

          function next() {
            $active
              .removeClass('active')
              .find('> .dropdown-menu > .active')
              .removeClass('active');

            element.addClass('active');

            if (transition) {
              element.addClass('in');
            } else {
              element.removeClass('fade');
            }

            if (element.parent('.dropdown-menu')) {
              element.closest('li.dropdown').addClass('active');
            }

            if (callback) {
              callback();
            }
          }

          if (transition) {
            $active.one($.support.transition.end, next);
          } else {
            next();
          }

          $active.removeClass('in');
      };

    $(document).delegate('[data-toggle="tab"]', 'click', function(event) {
      event.preventDefault();
      show($(this));
    });
  };

  /**
   * A stripped-down version of bootstrap-dropdown.js.
   *
   * Original bootstrap-dropdown.js Copyright 2012 Twitter, Inc., licensed under the Apache v2.0
   */
  FirechatUI.prototype._setupDropdowns = function() {
    var self = this,
        toggle = '[data-toggle=dropdown]',
        toggleDropdown = function(event) {
          var $this = $(this),
              $parent = getParent($this),
              isActive = $parent.hasClass('open');

          if ($this.is('.disabled, :disabled')) return;

          clearMenus();

          if (!isActive) {
            $parent.toggleClass('open');
          }

          $this.focus();

          return false;
        },
        clearMenus = function() {
          $('[data-toggle=dropdown]').each(function() {
            getParent($(this)).removeClass('open');
          });
        },
        getParent = function($this) {
          var selector = $this.attr('data-target'),
              $parent;

          if (!selector) {
            selector = $this.attr('href');
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '');
          }

          $parent = selector && $(selector);

          if (!$parent || !$parent.length) $parent = $this.parent();

          return $parent;
        };

      $(document)
        .bind('click', clearMenus)
        .delegate('.dropdown-menu', 'click', function(event) { event.stopPropagation(); })
        .delegate('[data-toggle=dropdown]', 'click', toggleDropdown);
  };

  /**
   * Binds to any text input fields with data-provide='limit' and
   * data-counter='<selector>', and upon value change updates the selector
   * content to reflect the number of characters remaining, as the 'maxlength'
   * attribute less the current value length.
   */
  FirechatUI.prototype._bindTextInputFieldLimits = function() {
    $('body').delegate('input[data-provide="limit"], textarea[data-provide="limit"]', 'keyup', function(event) {
      var $this = $(this),
          $target = $($this.data('counter')),
          limit = $this.attr('maxlength'),
          count = $this.val().length;

      $target.html(Math.max(0, limit - count));
    });
  };

  /**
   * Given a title and message content, show an alert prompt to the user.
   *
   * @param    {string}    title
   * @param    {string}    message
   */
  FirechatUI.prototype.renderAlertPrompt = function(title, message) {
    var template = FirechatDefaultTemplates["templates/prompt-alert.html"],
        $prompt = this.prompt(title, template({ message: message }));

      $prompt.find('.close').click(function() {
        $prompt.remove();
      });
      return;
  };

  /**
   * Toggle input field s if we want limit / unlimit input fields.
   */
  FirechatUI.prototype.toggleInputs = function(isEnabled) {
    $('#firechat-tab-content textarea').each(function() {
      var $this = $(this);
      if (isEnabled) {
        $(this).val('');
      } else {
        $(this).val('You have exceeded the message limit, please wait before sending.');
      }
      $this.prop('disabled', !isEnabled);
    });
    $('#firechat-input-name').prop('disabled', !isEnabled);
  };

  /**
   * Given a room id and name, attach the tab to the interface and setup events.
   *
   * @param    {string}    roomId
   * @param    {string}    roomName
   */
  FirechatUI.prototype.attachTab = function(roomId, roomName) {
    var self = this;

    // If this tab already exists, give it focus.
    if (this.$messages[roomId]) {
      this.focusTab(roomId);
      return;
    }

    var room = {
      id: roomId,
      name: roomName
    };

    // Populate and render the tab content template.
    var tabTemplate = FirechatDefaultTemplates["templates/tab-content.html"];
    var $tabContent = $(tabTemplate(room));
    this.$tabContent.prepend($tabContent);
    var $messages = $('#firechat-messages' + roomId);

    // Keep a reference to the message listing for later use.
    this.$messages[roomId] = $messages;

    // Attach on-enter event to textarea.
    var $textarea = $tabContent.find('textarea').first();
    $textarea.bind('keydown', function(e) {
      var message = self.trimWithEllipsis($textarea.val(), self.maxLengthMessage);
      if ((e.which === 13) && (message !== '')) {
        $textarea.val('');
        self._chat.sendMessage(roomId, message);
        return false;
      }
    });

    // Populate and render the tab menu template.
    var tabListTemplate = FirechatDefaultTemplates["templates/tab-menu-item.html"];
    var $tab = $(tabListTemplate(room));
    this.$tabList.prepend($tab);

    // Attach on-shown event to move tab to front and scroll to bottom.
    $tab.bind('shown', function(event) {
      $messages.scrollTop($messages[0].scrollHeight);
    });

    // Dynamically update the width of each tab based upon the number open.
    var tabs = this.$tabList.children('li');
    var tabWidth = Math.floor($('#firechat-tab-list').width() / tabs.length);
    this.$tabList.children('li').css('width', tabWidth);

    // Update the room listing to reflect that we're now in the room.
    this.$roomList.children('[data-room-id=' + roomId + ']').children('a').addClass('highlight');

    // Sort each item in the user list alphabetically on click of the dropdown.
    $('#firechat-btn-room-user-list-' + roomId).bind('click', function() {
      self.sortListLexicographically('#firechat-room-user-list-' + roomId);
    });

    // Automatically select the new tab.
    this.focusTab(roomId);
  };

  /**
   * Given a room id, focus the given tab.
   *
   * @param    {string}    roomId
   */
  FirechatUI.prototype.focusTab = function(roomId) {
    if (this.$messages[roomId]) {
      var $tabLink = this.$tabList.find('[data-room-id=' + roomId + ']').find('a');
      if ($tabLink.length) {
        $tabLink.first().trigger('click');
      }
    }
  };

  /**
   * Given a room id, remove the tab and all child elements from the interface.
   *
   * @param    {string}    roomId
   */
  FirechatUI.prototype.removeTab = function(roomId) {
    delete this.$messages[roomId];

    // Remove the inner tab content.
    this.$tabContent.find('[data-room-id=' + roomId + ']').remove();

    // Remove the tab from the navigation menu.
    this.$tabList.find('[data-room-id=' + roomId + ']').remove();

    // Dynamically update the width of each tab based upon the number open.
    var tabs = this.$tabList.children('li');
    var tabWidth = Math.floor($('#firechat-tab-list').width() / tabs.length);
    this.$tabList.children('li').css('width', tabWidth);

    // Automatically select the next tab if there is one.
    this.$tabList.find('[data-toggle=tab]').first().trigger('click');

    // Update the room listing to reflect that we're now in the room.
    this.$roomList.children('[data-room-id=' + roomId + ']').children('a').removeClass('highlight');
  };

  /**
   * Render a new message in the specified chat room.
   *
   * @param    {string}    roomId
   * @param    {string}    message
   */
  FirechatUI.prototype.showMessage = function(roomId, rawMessage) {
    var self = this;

    // Setup defaults
    var message = {
      id              : rawMessage.id,
      localtime       : self.formatTime(rawMessage.timestamp),
      message         : rawMessage.message || '',
      userId          : rawMessage.userId,
      name            : rawMessage.name,
      type            : rawMessage.type || 'default',
      isSelfMessage   : (self._user && rawMessage.userId == self._user.id),
      disableActions  : (!self._user || rawMessage.userId == self._user.id)
    };

    // While other data is escaped in the Underscore.js templates, escape and
    // process the message content here to add additional functionality (add links).
    // Also trim the message length to some client-defined maximum.
    var messageConstructed = '';
    message.message = _.map(message.message.split(' '), function(token) {
      if (self.urlPattern.test(token) || self.pseudoUrlPattern.test(token)) {
        return self.linkify(encodeURI(token));
      } else {
        return _.escape(token);
      }
    }).join(' ');
    message.message = self.trimWithEllipsis(message.message, self.maxLengthMessage);

    // Populate and render the message template.
    var template = FirechatDefaultTemplates["templates/message.html"];
    var $message = $(template(message));
    var $messages = self.$messages[roomId];
    if ($messages) {

      var scrollToBottom = false;
      if ($messages.scrollTop() / ($messages[0].scrollHeight - $messages[0].offsetHeight) >= 0.95) {
        // Pinned to bottom
        scrollToBottom = true;
      } else if ($messages[0].scrollHeight <= $messages.height()) {
        // Haven't added the scrollbar yet
        scrollToBottom = true;
      }

      $messages.append($message);

      if (scrollToBottom) {
        $messages.scrollTop($messages[0].scrollHeight);
      }
    }
  };

  /**
   * Remove a message by id.
   *
   * @param    {string}    roomId
   * @param    {string}    messageId
   */
  FirechatUI.prototype.removeMessage = function(roomId, messageId) {
    $('.message[data-message-id="' + messageId + '"]').remove();
  };

  /**
   * Given a selector for a list element, sort the items alphabetically.
   *
   * @param    {string}    selector
   */
  FirechatUI.prototype.sortListLexicographically = function(selector) {
    $(selector).children("li").sort(function(a, b) {
        var upA = $(a).text().toUpperCase();
        var upB = $(b).text().toUpperCase();
        return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
    }).appendTo(selector);
  };

  /**
   * Remove leading and trailing whitespace from a string and shrink it, with
   * added ellipsis, if it exceeds a specified length.
   *
   * @param    {string}    str
   * @param    {number}    length
   * @return   {string}
   */
  FirechatUI.prototype.trimWithEllipsis = function(str, length) {
    str = str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    return (length && str.length <= length) ? str : str.substring(0, length) + '...';
  };

  /**
   * Given a timestamp, format it in the form hh:mm am/pm. Defaults to now
   * if the timestamp is undefined.
   *
   * @param    {Number}    timestamp
   * @param    {string}    date
   */
  FirechatUI.prototype.formatTime = function(timestamp) {
    var date = (timestamp) ? new Date(timestamp) : new Date(),
        hours = date.getHours() || 12,
        minutes = '' + date.getMinutes(),
        ampm = (date.getHours() >= 12) ? 'pm' : 'am'; 

    hours = (hours > 12) ? hours - 12 : hours;
    minutes = (minutes.length < 2) ? '0' + minutes : minutes;
    return '' + hours + ':' + minutes + ampm;
  };

  /**
   * Launch a prompt to allow the user to create a new room.
   */
  FirechatUI.prototype.promptCreateRoom = function() {
    var self = this;
    var template = FirechatDefaultTemplates["templates/prompt-create-room.html"];

    var $prompt = this.prompt('Create Public Room', template({
      maxLengthRoomName: this.maxLengthRoomName,
      isModerator: self._chat.userIsModerator()
    }));
    $prompt.find('a.close').first().click(function() {
      $prompt.remove();
    });


    $prompt.find('[data-toggle=submit]').first().click(function() {
      var name = $prompt.find('[data-input=firechat-room-name]').first().val();
      if (name !== '') {
        self._chat.createRoom(name, 'public');
        $prompt.remove();
      }
    });

    $prompt.find('[data-input=firechat-room-name]').first().focus();
    $prompt.find('[data-input=firechat-room-name]').first().bind('keydown', function(e) {
      if (e.which === 13) {
        var name = $prompt.find('[data-input=firechat-room-name]').first().val();
        if (name !== '') {
          self._chat.createRoom(name, 'public');
          $prompt.remove();
          return false;
        }
      }
    });
  };

  /**
   * Inner method to launch a prompt given a specific title and HTML content.
   * @param    {string}    title
   * @param    {string}    content
   */
  FirechatUI.prototype.prompt = function(title, content) {
    var template = FirechatDefaultTemplates["templates/prompt.html"],
        $prompt;

    $prompt = $(template({
      title: title,
      content: content
    })).css({
      top: this.$wrapper.position().top + (0.333 * this.$wrapper.height()),
      left: this.$wrapper.position().left + (0.125 * this.$wrapper.width()),
      width: 0.75 * this.$wrapper.width()
    });
    this.$wrapper.append($prompt.removeClass('hidden'));
    return $prompt;
  };

  // see http://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
  FirechatUI.prototype.linkify = function(str) {
    var self = this;
    return str
      .replace(self.urlPattern, '<a target="_blank" href="$&">$&</a>')
      .replace(self.pseudoUrlPattern, '$1<a target="_blank" href="http://$2">$2</a>');
  };

})(jQuery);

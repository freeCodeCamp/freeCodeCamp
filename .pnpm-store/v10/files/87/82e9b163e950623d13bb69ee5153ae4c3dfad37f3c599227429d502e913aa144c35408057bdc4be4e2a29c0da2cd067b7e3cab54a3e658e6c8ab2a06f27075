"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _template = require("@babel/template");
function helper(minVersion, source, metadata) {
  return Object.freeze({
    minVersion,
    ast: () => _template.default.program.ast(source, {
      preserveComments: true
    }),
    metadata
  });
}
const helpers = exports.default = {
  __proto__: null,
  OverloadYield: helper("7.18.14", "function _OverloadYield(e,d){this.v=e,this.k=d}", {
    globals: [],
    locals: {
      _OverloadYield: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_OverloadYield",
    dependencies: {},
    internal: false
  }),
  applyDecoratedDescriptor: helper("7.0.0-beta.0", 'function _applyDecoratedDescriptor(i,e,r,n,l){var a={};return Object.keys(n).forEach(function(i){a[i]=n[i]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(i,e,r)||r},a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer?(Object.defineProperty(i,e,a),null):a}', {
    globals: ["Object"],
    locals: {
      _applyDecoratedDescriptor: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_applyDecoratedDescriptor",
    dependencies: {},
    internal: false
  }),
  applyDecs2311: helper("7.24.0", 'function applyDecs2311(e,t,n,r,o,i){var a,c,u,s,f,l,p,d=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,h=Object.create,y=[h(null),h(null)],v=t.length;function g(t,n,r){return function(o,i){n&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,r?[i]:[]);return r?i:o}}function b(e,t,n,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return e}function applyDec(e,t,n,r,o,i,u,s,f,l,p){function d(e){if(!p(e))throw new TypeError("Attempted to access private element on non-instance")}var h=[].concat(t[0]),v=t[3],w=!u,D=1===o,S=3===o,j=4===o,E=2===o;function I(t,n,r){return function(o,i){return n&&(i=o,o=e),r&&r(o),P[t].call(o,i)}}if(!w){var P={},k=[],F=S?"get":j||D?"set":"value";if(f?(l||D?P={get:setFunctionName(function(){return v(this)},r,"get"),set:function(e){t[4](this,e)}}:P[F]=v,l||setFunctionName(P[F],r,E?"":F)):l||(P=Object.getOwnPropertyDescriptor(e,r)),!l&&!f){if((c=y[+s][r])&&7!==(c^o))throw Error("Decorating two elements with the same name ("+P[F].name+") is not supported yet");y[+s][r]=o<3?1:o}}for(var N=e,O=h.length-1;O>=0;O-=n?2:1){var T=b(h[O],"A decorator","be",!0),z=n?h[O-1]:void 0,A={},H={kind:["field","accessor","method","getter","setter","class"][o],name:r,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");b(t,"An initializer","be",!0),i.push(t)}.bind(null,A)};if(w)c=T.call(z,N,H),A.v=1,b(c,"class decorators","return")&&(N=c);else if(H.static=s,H.private=f,c=H.access={has:f?p.bind():function(e){return r in e}},j||(c.get=f?E?function(e){return d(e),P.value}:I("get",0,d):function(e){return e[r]}),E||S||(c.set=f?I("set",0,d):function(e,t){e[r]=t}),N=T.call(z,D?{get:P.get,set:P.set}:P[F],H),A.v=1,D){if("object"==typeof N&&N)(c=b(N.get,"accessor.get"))&&(P.get=c),(c=b(N.set,"accessor.set"))&&(P.set=c),(c=b(N.init,"accessor.init"))&&k.unshift(c);else if(void 0!==N)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else b(N,(l?"field":"method")+" decorators","return")&&(l?k.unshift(N):P[F]=N)}return o<2&&u.push(g(k,s,1),g(i,s,0)),l||w||(f?D?u.splice(-1,0,I("get",s),I("set",s)):u.push(E?P[F]:b.call.bind(P[F])):m(e,r,P)),N}function w(e){return m(e,d,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[d]),a=h(null==a?null:a),f=[],l=function(e){e&&f.push(g(e))},p=function(t,r){for(var i=0;i<n.length;i++){var a=n[i],c=a[1],l=7&c;if((8&c)==t&&!l==r){var p=a[2],d=!!a[3],m=16&c;applyDec(t?e:e.prototype,a,m,d?"#"+p:toPropertyKey(p),l,l<2?[]:t?s=s||[]:u=u||[],f,!!t,d,r,t&&d?function(t){return checkInRHS(t)===e}:o)}}},p(8,0),p(0,0),p(8,1),p(0,1),l(u),l(s),c=f,v||w(e),{e:c,get c(){var n=[];return v&&[w(e=applyDec(e,[t],r,e.name,5,n)),g(n,1)]}}}', {
    globals: ["Symbol", "Object", "TypeError", "Error"],
    locals: {
      applyDecs2311: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "applyDecs2311",
    dependencies: {
      checkInRHS: ["body.0.body.body.5.argument.expressions.4.right.body.body.0.body.body.1.consequent.body.1.expression.arguments.10.consequent.body.body.0.argument.left.callee"],
      setFunctionName: ["body.0.body.body.3.body.body.3.consequent.body.1.test.expressions.0.consequent.expressions.0.consequent.right.properties.0.value.callee", "body.0.body.body.3.body.body.3.consequent.body.1.test.expressions.0.consequent.expressions.1.right.callee"],
      toPropertyKey: ["body.0.body.body.5.argument.expressions.4.right.body.body.0.body.body.1.consequent.body.1.expression.arguments.3.alternate.callee"]
    },
    internal: false
  }),
  arrayLikeToArray: helper("7.9.0", "function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}", {
    globals: ["Array"],
    locals: {
      _arrayLikeToArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_arrayLikeToArray",
    dependencies: {},
    internal: false
  }),
  arrayWithHoles: helper("7.0.0-beta.0", "function _arrayWithHoles(r){if(Array.isArray(r))return r}", {
    globals: ["Array"],
    locals: {
      _arrayWithHoles: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_arrayWithHoles",
    dependencies: {},
    internal: false
  }),
  arrayWithoutHoles: helper("7.0.0-beta.0", "function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}", {
    globals: ["Array"],
    locals: {
      _arrayWithoutHoles: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_arrayWithoutHoles",
    dependencies: {
      arrayLikeToArray: ["body.0.body.body.0.consequent.argument.callee"]
    },
    internal: false
  }),
  assertClassBrand: helper("7.24.0", 'function _assertClassBrand(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}', {
    globals: ["TypeError"],
    locals: {
      _assertClassBrand: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_assertClassBrand",
    dependencies: {},
    internal: false
  }),
  assertThisInitialized: helper("7.0.0-beta.0", "function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return e}", {
    globals: ["ReferenceError"],
    locals: {
      _assertThisInitialized: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_assertThisInitialized",
    dependencies: {},
    internal: false
  }),
  asyncGeneratorDelegate: helper("7.0.0-beta.0", 'function _asyncGeneratorDelegate(t){var e={},n=!1;function pump(e,r){return n=!0,r=new Promise(function(n){n(t[e](r))}),{done:!1,value:new OverloadYield(r,1)}}return e["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},e.next=function(t){return n?(n=!1,t):pump("next",t)},"function"==typeof t.throw&&(e.throw=function(t){if(n)throw n=!1,t;return pump("throw",t)}),"function"==typeof t.return&&(e.return=function(t){return n?(n=!1,t):pump("return",t)}),e}', {
    globals: ["Promise", "Symbol"],
    locals: {
      _asyncGeneratorDelegate: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_asyncGeneratorDelegate",
    dependencies: {
      OverloadYield: ["body.0.body.body.1.body.body.0.argument.expressions.2.properties.1.value.callee"]
    },
    internal: false
  }),
  asyncIterator: helper("7.15.9", 'function _asyncIterator(r){var n,t,o,e=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,o=Symbol.iterator);e--;){if(t&&null!=(n=r[t]))return n.call(r);if(o&&null!=(n=r[o]))return new AsyncFromSyncIterator(n.call(r));t="@@asyncIterator",o="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(r){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var n=r.done;return Promise.resolve(r.value).then(function(r){return{value:r,done:n}})}return AsyncFromSyncIterator=function(r){this.s=r,this.n=r.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(r){var n=this.s.return;return void 0===n?Promise.resolve({value:r,done:!0}):AsyncFromSyncIteratorContinuation(n.apply(this.s,arguments))},throw:function(r){var n=this.s.return;return void 0===n?Promise.reject(r):AsyncFromSyncIteratorContinuation(n.apply(this.s,arguments))}},new AsyncFromSyncIterator(r)}', {
    globals: ["Symbol", "TypeError", "Object", "Promise"],
    locals: {
      _asyncIterator: ["body.0.id"],
      AsyncFromSyncIterator: ["body.1.id", "body.0.body.body.1.body.body.1.consequent.argument.callee", "body.1.body.body.1.argument.expressions.1.left.object", "body.1.body.body.1.argument.expressions.2.callee", "body.1.body.body.1.argument.expressions.0.left"]
    },
    exportBindingAssignments: [],
    exportName: "_asyncIterator",
    dependencies: {},
    internal: false
  }),
  asyncToGenerator: helper("7.0.0-beta.0", 'function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}', {
    globals: ["Promise"],
    locals: {
      asyncGeneratorStep: ["body.0.id", "body.1.body.body.0.argument.body.body.1.argument.arguments.0.body.body.1.body.body.0.expression.callee", "body.1.body.body.0.argument.body.body.1.argument.arguments.0.body.body.2.body.body.0.expression.callee"],
      _asyncToGenerator: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_asyncToGenerator",
    dependencies: {},
    internal: false
  }),
  awaitAsyncGenerator: helper("7.0.0-beta.0", "function _awaitAsyncGenerator(e){return new OverloadYield(e,0)}", {
    globals: [],
    locals: {
      _awaitAsyncGenerator: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_awaitAsyncGenerator",
    dependencies: {
      OverloadYield: ["body.0.body.body.0.argument.callee"]
    },
    internal: false
  }),
  callSuper: helper("7.23.8", "function _callSuper(t,o,e){return o=getPrototypeOf(o),possibleConstructorReturn(t,isNativeReflectConstruct()?Reflect.construct(o,e||[],getPrototypeOf(t).constructor):o.apply(t,e))}", {
    globals: ["Reflect"],
    locals: {
      _callSuper: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_callSuper",
    dependencies: {
      getPrototypeOf: ["body.0.body.body.0.argument.expressions.0.right.callee", "body.0.body.body.0.argument.expressions.1.arguments.1.consequent.arguments.2.object.callee"],
      isNativeReflectConstruct: ["body.0.body.body.0.argument.expressions.1.arguments.1.test.callee"],
      possibleConstructorReturn: ["body.0.body.body.0.argument.expressions.1.callee"]
    },
    internal: false
  }),
  checkInRHS: helper("7.20.5", 'function _checkInRHS(e){if(Object(e)!==e)throw TypeError("right-hand side of \'in\' should be an object, got "+(null!==e?typeof e:"null"));return e}', {
    globals: ["Object", "TypeError"],
    locals: {
      _checkInRHS: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_checkInRHS",
    dependencies: {},
    internal: false
  }),
  checkPrivateRedeclaration: helper("7.14.1", 'function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}', {
    globals: ["TypeError"],
    locals: {
      _checkPrivateRedeclaration: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_checkPrivateRedeclaration",
    dependencies: {},
    internal: false
  }),
  classCallCheck: helper("7.0.0-beta.0", 'function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}', {
    globals: ["TypeError"],
    locals: {
      _classCallCheck: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classCallCheck",
    dependencies: {},
    internal: false
  }),
  classNameTDZError: helper("7.0.0-beta.0", "function _classNameTDZError(e){throw new ReferenceError('Class \"'+e+'\" cannot be referenced in computed property keys.')}", {
    globals: ["ReferenceError"],
    locals: {
      _classNameTDZError: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classNameTDZError",
    dependencies: {},
    internal: false
  }),
  classPrivateFieldGet2: helper("7.24.0", "function _classPrivateFieldGet2(s,a){return s.get(assertClassBrand(s,a))}", {
    globals: [],
    locals: {
      _classPrivateFieldGet2: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldGet2",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.arguments.0.callee"]
    },
    internal: false
  }),
  classPrivateFieldInitSpec: helper("7.14.1", "function _classPrivateFieldInitSpec(e,t,a){checkPrivateRedeclaration(e,t),t.set(e,a)}", {
    globals: [],
    locals: {
      _classPrivateFieldInitSpec: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldInitSpec",
    dependencies: {
      checkPrivateRedeclaration: ["body.0.body.body.0.expression.expressions.0.callee"]
    },
    internal: false
  }),
  classPrivateFieldLooseBase: helper("7.0.0-beta.0", 'function _classPrivateFieldBase(e,t){if(!{}.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}', {
    globals: ["TypeError"],
    locals: {
      _classPrivateFieldBase: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldBase",
    dependencies: {},
    internal: false
  }),
  classPrivateFieldLooseKey: helper("7.0.0-beta.0", 'var id=0;function _classPrivateFieldKey(e){return"__private_"+id+++"_"+e}', {
    globals: [],
    locals: {
      id: ["body.0.declarations.0.id", "body.1.body.body.0.argument.left.left.right.argument", "body.1.body.body.0.argument.left.left.right.argument"],
      _classPrivateFieldKey: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldKey",
    dependencies: {},
    internal: false
  }),
  classPrivateFieldSet2: helper("7.24.0", "function _classPrivateFieldSet2(s,a,r){return s.set(assertClassBrand(s,a),r),r}", {
    globals: [],
    locals: {
      _classPrivateFieldSet2: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldSet2",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.arguments.0.callee"]
    },
    internal: false
  }),
  classPrivateGetter: helper("7.24.0", "function _classPrivateGetter(s,r,a){return a(assertClassBrand(s,r))}", {
    globals: [],
    locals: {
      _classPrivateGetter: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateGetter",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.arguments.0.callee"]
    },
    internal: false
  }),
  classPrivateMethodInitSpec: helper("7.14.1", "function _classPrivateMethodInitSpec(e,a){checkPrivateRedeclaration(e,a),a.add(e)}", {
    globals: [],
    locals: {
      _classPrivateMethodInitSpec: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateMethodInitSpec",
    dependencies: {
      checkPrivateRedeclaration: ["body.0.body.body.0.expression.expressions.0.callee"]
    },
    internal: false
  }),
  classPrivateSetter: helper("7.24.0", "function _classPrivateSetter(s,r,a,t){return r(assertClassBrand(s,a),t),t}", {
    globals: [],
    locals: {
      _classPrivateSetter: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateSetter",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.arguments.0.callee"]
    },
    internal: false
  }),
  classStaticPrivateMethodGet: helper("7.3.2", "function _classStaticPrivateMethodGet(s,a,t){return assertClassBrand(a,s),t}", {
    globals: [],
    locals: {
      _classStaticPrivateMethodGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classStaticPrivateMethodGet",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.callee"]
    },
    internal: false
  }),
  construct: helper("7.0.0-beta.0", "function _construct(t,e,r){if(isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var p=new(t.bind.apply(t,o));return r&&setPrototypeOf(p,r.prototype),p}", {
    globals: ["Reflect"],
    locals: {
      _construct: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_construct",
    dependencies: {
      isNativeReflectConstruct: ["body.0.body.body.0.test.callee"],
      setPrototypeOf: ["body.0.body.body.4.argument.expressions.0.right.callee"]
    },
    internal: false
  }),
  createClass: helper("7.0.0-beta.0", 'function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}', {
    globals: ["Object"],
    locals: {
      _defineProperties: ["body.0.id", "body.1.body.body.0.argument.expressions.0.right.callee", "body.1.body.body.0.argument.expressions.1.right.callee"],
      _createClass: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_createClass",
    dependencies: {
      toPropertyKey: ["body.0.body.body.0.body.body.1.expression.expressions.3.arguments.1.callee"]
    },
    internal: false
  }),
  createForOfIteratorHelper: helper("7.9.0", 'function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,F=function(){};return{s:F,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,o=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}', {
    globals: ["Symbol", "Array", "TypeError"],
    locals: {
      _createForOfIteratorHelper: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_createForOfIteratorHelper",
    dependencies: {
      unsupportedIterableToArray: ["body.0.body.body.1.consequent.body.0.test.left.right.right.callee"]
    },
    internal: false
  }),
  createForOfIteratorHelperLoose: helper("7.9.0", 'function _createForOfIteratorHelperLoose(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var o=0;return function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}', {
    globals: ["Symbol", "Array", "TypeError"],
    locals: {
      _createForOfIteratorHelperLoose: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_createForOfIteratorHelperLoose",
    dependencies: {
      unsupportedIterableToArray: ["body.0.body.body.2.test.left.right.right.callee"]
    },
    internal: false
  }),
  createSuper: helper("7.9.0", "function _createSuper(t){var r=isNativeReflectConstruct();return function(){var e,o=getPrototypeOf(t);if(r){var s=getPrototypeOf(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return possibleConstructorReturn(this,e)}}", {
    globals: ["Reflect"],
    locals: {
      _createSuper: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_createSuper",
    dependencies: {
      getPrototypeOf: ["body.0.body.body.1.argument.body.body.0.declarations.1.init.callee", "body.0.body.body.1.argument.body.body.1.consequent.body.0.declarations.0.init.object.callee"],
      isNativeReflectConstruct: ["body.0.body.body.0.declarations.0.init.callee"],
      possibleConstructorReturn: ["body.0.body.body.1.argument.body.body.2.argument.callee"]
    },
    internal: false
  }),
  decorate: helper("7.1.5", 'function _decorate(e,r,t,i){var o=_getDecoratorsApi();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var s=r(function(e){o.initializeInstanceElements(e,a.elements)},t),a=o.decorateClass(_coalesceClassElements(s.d.map(_createElementDescriptor)),e);return o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)},this)},this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach(function(i){r.forEach(function(r){var o=r.placement;if(r.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:t;this.defineClassElement(n,r)}},this)},this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,o)},this),e.forEach(function(e){if(!_hasDecorators(e))return t.push(e);var r=this.decorateElement(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)},this),!r)return{elements:t,finishers:i};var n=this.decorateConstructor(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=r[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,r),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var p=0;p<c.length;p++)this.addElementPlacement(c[p],r);t.push.apply(t,c)}}return{element:e,finishers:i,extras:t}},decorateConstructor:function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){if(void 0!==e)return toArray(e).map(function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r},this)},toElementDescriptor:function(e){var r=e.kind+"";if("method"!==r&&"field"!==r)throw new TypeError(\'An element descriptor\\\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "\'+r+\'"\');var t=toPropertyKey(e.key),i=e.placement+"";if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError(\'An element descriptor\\\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "\'+i+\'"\');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_optionalCallableProperty(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=e.kind+"";if("class"!==r)throw new TypeError(\'A class descriptor\\\'s .kind property must be "class", but a decorator created a class descriptor with .kind "\'+r+\'"\');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=_optionalCallableProperty(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can\'t have a ."+r+" property.")}};return e}function _createElementDescriptor(e){var r,t=toPropertyKey(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function _coalesceGetterSetter(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function _coalesceClassElements(e){for(var r=[],isSameElement=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},t=0;t<e.length;t++){var i,o=e[t];if("method"===o.kind&&(i=r.find(isSameElement)))if(_isDataDescriptor(o.descriptor)||_isDataDescriptor(i.descriptor)){if(_hasDecorators(o)||_hasDecorators(i))throw new ReferenceError("Duplicated methods ("+o.key+") can\'t be decorated.");i.descriptor=o.descriptor}else{if(_hasDecorators(o)){if(_hasDecorators(i))throw new ReferenceError("Decorators can\'t be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}_coalesceGetterSetter(o,i)}else r.push(o)}return r}function _hasDecorators(e){return e.decorators&&e.decorators.length}function _isDataDescriptor(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _optionalCallableProperty(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected \'"+r+"\' to be a function");return t}', {
    globals: ["Object", "TypeError", "Symbol", "ReferenceError"],
    locals: {
      _decorate: ["body.0.id"],
      _getDecoratorsApi: ["body.1.id", "body.0.body.body.0.declarations.0.init.callee", "body.1.body.body.0.expression.left"],
      _createElementDescriptor: ["body.2.id", "body.0.body.body.2.declarations.1.init.arguments.0.arguments.0.arguments.0"],
      _coalesceGetterSetter: ["body.3.id", "body.4.body.body.0.body.body.1.consequent.alternate.body.1.expression.callee"],
      _coalesceClassElements: ["body.4.id", "body.0.body.body.2.declarations.1.init.arguments.0.callee"],
      _hasDecorators: ["body.5.id", "body.1.body.body.1.declarations.0.init.properties.4.value.body.body.1.test.expressions.1.arguments.0.body.body.0.test.argument.callee", "body.4.body.body.0.body.body.1.consequent.consequent.body.0.test.left.callee", "body.4.body.body.0.body.body.1.consequent.consequent.body.0.test.right.callee", "body.4.body.body.0.body.body.1.consequent.alternate.body.0.test.callee", "body.4.body.body.0.body.body.1.consequent.alternate.body.0.consequent.body.0.test.callee"],
      _isDataDescriptor: ["body.6.id", "body.4.body.body.0.body.body.1.consequent.test.left.callee", "body.4.body.body.0.body.body.1.consequent.test.right.callee"],
      _optionalCallableProperty: ["body.7.id", "body.1.body.body.1.declarations.0.init.properties.11.value.body.body.0.argument.properties.1.value.callee", "body.1.body.body.1.declarations.0.init.properties.13.value.body.body.3.declarations.0.init.callee"]
    },
    exportBindingAssignments: [],
    exportName: "_decorate",
    dependencies: {
      toArray: ["body.1.body.body.1.declarations.0.init.properties.9.value.body.body.0.consequent.argument.callee.object.callee"],
      toPropertyKey: ["body.1.body.body.1.declarations.0.init.properties.10.value.body.body.2.declarations.0.init.callee", "body.2.body.body.0.declarations.1.init.callee"]
    },
    internal: false
  }),
  defaults: helper("7.0.0-beta.0", "function _defaults(e,r){for(var t=Object.getOwnPropertyNames(r),o=0;o<t.length;o++){var n=t[o],a=Object.getOwnPropertyDescriptor(r,n);a&&a.configurable&&void 0===e[n]&&Object.defineProperty(e,n,a)}return e}", {
    globals: ["Object"],
    locals: {
      _defaults: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_defaults",
    dependencies: {},
    internal: false
  }),
  defineAccessor: helper("7.20.7", "function _defineAccessor(e,r,n,t){var c={configurable:!0,enumerable:!0};return c[e]=t,Object.defineProperty(r,n,c)}", {
    globals: ["Object"],
    locals: {
      _defineAccessor: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_defineAccessor",
    dependencies: {},
    internal: false
  }),
  defineProperty: helper("7.0.0-beta.0", "function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}", {
    globals: ["Object"],
    locals: {
      _defineProperty: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_defineProperty",
    dependencies: {
      toPropertyKey: ["body.0.body.body.0.argument.expressions.0.test.left.right.callee"]
    },
    internal: false
  }),
  extends: helper("7.0.0-beta.0", "function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}", {
    globals: ["Object"],
    locals: {
      _extends: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee.object", "body.0.body.body.0.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.argument.expressions.0"],
    exportName: "_extends",
    dependencies: {},
    internal: false
  }),
  get: helper("7.0.0-beta.0", 'function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},_get.apply(null,arguments)}', {
    globals: ["Reflect", "Object"],
    locals: {
      _get: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee.object", "body.0.body.body.0.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.argument.expressions.0"],
    exportName: "_get",
    dependencies: {
      superPropBase: ["body.0.body.body.0.argument.expressions.0.right.alternate.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  getPrototypeOf: helper("7.0.0-beta.0", "function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}", {
    globals: ["Object"],
    locals: {
      _getPrototypeOf: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee", "body.0.body.body.0.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.argument.expressions.0"],
    exportName: "_getPrototypeOf",
    dependencies: {},
    internal: false
  }),
  identity: helper("7.17.0", "function _identity(t){return t}", {
    globals: [],
    locals: {
      _identity: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_identity",
    dependencies: {},
    internal: false
  }),
  importDeferProxy: helper("7.23.0", "function _importDeferProxy(e){var t=null,constValue=function(e){return function(){return e}},proxy=function(r){return function(n,o,f){return null===t&&(t=e()),r(t,o,f)}};return new Proxy({},{defineProperty:constValue(!1),deleteProperty:constValue(!1),get:proxy(Reflect.get),getOwnPropertyDescriptor:proxy(Reflect.getOwnPropertyDescriptor),getPrototypeOf:constValue(null),isExtensible:constValue(!1),has:proxy(Reflect.has),ownKeys:proxy(Reflect.ownKeys),preventExtensions:constValue(!0),set:constValue(!1),setPrototypeOf:constValue(!1)})}", {
    globals: ["Proxy", "Reflect"],
    locals: {
      _importDeferProxy: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_importDeferProxy",
    dependencies: {},
    internal: false
  }),
  inherits: helper("7.0.0-beta.0", 'function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&setPrototypeOf(t,e)}', {
    globals: ["TypeError", "Object"],
    locals: {
      _inherits: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_inherits",
    dependencies: {
      setPrototypeOf: ["body.0.body.body.1.expression.expressions.2.right.callee"]
    },
    internal: false
  }),
  inheritsLoose: helper("7.0.0-beta.0", "function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,setPrototypeOf(t,o)}", {
    globals: ["Object"],
    locals: {
      _inheritsLoose: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_inheritsLoose",
    dependencies: {
      setPrototypeOf: ["body.0.body.body.0.expression.expressions.2.callee"]
    },
    internal: false
  }),
  initializerDefineProperty: helper("7.0.0-beta.0", "function _initializerDefineProperty(e,i,r,l){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(l):void 0})}", {
    globals: ["Object"],
    locals: {
      _initializerDefineProperty: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_initializerDefineProperty",
    dependencies: {},
    internal: false
  }),
  initializerWarningHelper: helper("7.0.0-beta.0", 'function _initializerWarningHelper(r,e){throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")}', {
    globals: ["Error"],
    locals: {
      _initializerWarningHelper: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_initializerWarningHelper",
    dependencies: {},
    internal: false
  }),
  instanceof: helper("7.0.0-beta.0", 'function _instanceof(n,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](n):n instanceof e}', {
    globals: ["Symbol"],
    locals: {
      _instanceof: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_instanceof",
    dependencies: {},
    internal: false
  }),
  interopRequireDefault: helper("7.0.0-beta.0", "function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}", {
    globals: [],
    locals: {
      _interopRequireDefault: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_interopRequireDefault",
    dependencies: {},
    internal: false
  }),
  interopRequireWildcard: helper("7.14.0", 'function _interopRequireWildcard(e,t){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return(_interopRequireWildcard=function(e,t){if(!t&&e&&e.__esModule)return e;var o,i,f={__proto__:null,default:e};if(null===e||"object"!=typeof e&&"function"!=typeof e)return f;if(o=t?n:r){if(o.has(e))return o.get(e);o.set(e,f)}for(const t in e)"default"!==t&&{}.hasOwnProperty.call(e,t)&&((i=(o=Object.defineProperty)&&Object.getOwnPropertyDescriptor(e,t))&&(i.get||i.set)?o(f,t,i):f[t]=e[t]);return f})(e,t)}', {
    globals: ["WeakMap", "Object"],
    locals: {
      _interopRequireWildcard: ["body.0.id", "body.0.body.body.1.argument.callee.left"]
    },
    exportBindingAssignments: ["body.0.body.body.1.argument.callee"],
    exportName: "_interopRequireWildcard",
    dependencies: {},
    internal: false
  }),
  isNativeFunction: helper("7.0.0-beta.0", 'function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}', {
    globals: ["Function"],
    locals: {
      _isNativeFunction: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_isNativeFunction",
    dependencies: {},
    internal: false
  }),
  isNativeReflectConstruct: helper("7.9.0", "function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}", {
    globals: ["Boolean", "Reflect"],
    locals: {
      _isNativeReflectConstruct: ["body.0.id", "body.0.body.body.1.argument.callee.left"]
    },
    exportBindingAssignments: ["body.0.body.body.1.argument.callee"],
    exportName: "_isNativeReflectConstruct",
    dependencies: {},
    internal: false
  }),
  iterableToArray: helper("7.0.0-beta.0", 'function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}', {
    globals: ["Symbol", "Array"],
    locals: {
      _iterableToArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_iterableToArray",
    dependencies: {},
    internal: false
  }),
  iterableToArrayLimit: helper("7.0.0-beta.0", 'function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}', {
    globals: ["Symbol", "Object"],
    locals: {
      _iterableToArrayLimit: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_iterableToArrayLimit",
    dependencies: {},
    internal: false
  }),
  jsx: helper("7.0.0-beta.0", 'var REACT_ELEMENT_TYPE;function _createRawReactElement(e,r,E,l){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,n=arguments.length-3;if(r||0===n||(r={children:void 0}),1===n)r.children=l;else if(n>1){for(var t=Array(n),f=0;f<n;f++)t[f]=arguments[f+3];r.children=t}if(r&&o)for(var i in o)void 0===r[i]&&(r[i]=o[i]);else r||(r=o||{});return{$$typeof:REACT_ELEMENT_TYPE,type:e,key:void 0===E?null:""+E,ref:null,props:r,_owner:null}}', {
    globals: ["Symbol", "Array"],
    locals: {
      REACT_ELEMENT_TYPE: ["body.0.declarations.0.id", "body.1.body.body.0.expression.left", "body.1.body.body.4.argument.properties.0.value", "body.1.body.body.0.expression.right.left"],
      _createRawReactElement: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_createRawReactElement",
    dependencies: {},
    internal: false
  }),
  maybeArrayLike: helper("7.9.0", 'function _maybeArrayLike(r,a,e){if(a&&!Array.isArray(a)&&"number"==typeof a.length){var y=a.length;return arrayLikeToArray(a,void 0!==e&&e<y?e:y)}return r(a,e)}', {
    globals: ["Array"],
    locals: {
      _maybeArrayLike: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_maybeArrayLike",
    dependencies: {
      arrayLikeToArray: ["body.0.body.body.0.consequent.body.1.argument.callee"]
    },
    internal: false
  }),
  newArrowCheck: helper("7.0.0-beta.0", 'function _newArrowCheck(n,r){if(n!==r)throw new TypeError("Cannot instantiate an arrow function")}', {
    globals: ["TypeError"],
    locals: {
      _newArrowCheck: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_newArrowCheck",
    dependencies: {},
    internal: false
  }),
  nonIterableRest: helper("7.0.0-beta.0", 'function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}', {
    globals: ["TypeError"],
    locals: {
      _nonIterableRest: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_nonIterableRest",
    dependencies: {},
    internal: false
  }),
  nonIterableSpread: helper("7.0.0-beta.0", 'function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}', {
    globals: ["TypeError"],
    locals: {
      _nonIterableSpread: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_nonIterableSpread",
    dependencies: {},
    internal: false
  }),
  nullishReceiverError: helper("7.22.6", 'function _nullishReceiverError(r){throw new TypeError("Cannot set property of null or undefined.")}', {
    globals: ["TypeError"],
    locals: {
      _nullishReceiverError: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_nullishReceiverError",
    dependencies: {},
    internal: false
  }),
  objectDestructuringEmpty: helper("7.0.0-beta.0", 'function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}', {
    globals: ["TypeError"],
    locals: {
      _objectDestructuringEmpty: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_objectDestructuringEmpty",
    dependencies: {},
    internal: false
  }),
  objectSpread2: helper("7.5.0", "function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}", {
    globals: ["Object"],
    locals: {
      ownKeys: ["body.0.id", "body.1.body.body.0.body.body.1.expression.consequent.callee.object.callee", "body.1.body.body.0.body.body.1.expression.alternate.alternate.callee.object.callee"],
      _objectSpread2: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_objectSpread2",
    dependencies: {
      defineProperty: ["body.1.body.body.0.body.body.1.expression.consequent.arguments.0.body.body.0.expression.callee"]
    },
    internal: false
  }),
  objectWithoutProperties: helper("7.0.0-beta.0", "function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}", {
    globals: ["Object"],
    locals: {
      _objectWithoutProperties: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_objectWithoutProperties",
    dependencies: {
      objectWithoutPropertiesLoose: ["body.0.body.body.1.declarations.2.init.callee"]
    },
    internal: false
  }),
  objectWithoutPropertiesLoose: helper("7.0.0-beta.0", "function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}", {
    globals: [],
    locals: {
      _objectWithoutPropertiesLoose: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_objectWithoutPropertiesLoose",
    dependencies: {},
    internal: false
  }),
  possibleConstructorReturn: helper("7.0.0-beta.0", 'function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return assertThisInitialized(t)}', {
    globals: ["TypeError"],
    locals: {
      _possibleConstructorReturn: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_possibleConstructorReturn",
    dependencies: {
      assertThisInitialized: ["body.0.body.body.2.argument.callee"]
    },
    internal: false
  }),
  readOnlyError: helper("7.0.0-beta.0", "function _readOnlyError(r){throw new TypeError('\"'+r+'\" is read-only')}", {
    globals: ["TypeError"],
    locals: {
      _readOnlyError: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_readOnlyError",
    dependencies: {},
    internal: false
  }),
  regenerator: helper("7.27.0", 'function _regenerator(){\n/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\nvar e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag";function i(r,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype);return define(u,"_invoke",function(r,n,o){var i,c,u,f=0,p=o||[],y=!1,G={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function(t,r){return i=t,c=0,u=e,G.n=r,a}};function d(r,n){for(c=r,u=n,t=0;!y&&f&&!o&&t<p.length;t++){var o,i=p[t],d=G.p,l=i[2];r>3?(o=l===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,G.v=n,G.n=i[1]):d<l&&(o=r<3||i[0]>n||n>l)&&(i[4]=r,i[5]=n,G.n=l,c=0))}if(o||r>1)return a;throw y=!0,n}return function(o,p,l){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&d(p,l),c=p,u=l;(t=c<2?e:u)||!y;){i||(c?c<3?(c>1&&(G.n=-1),d(c,u)):G.n=u:G.v=u);try{if(f=2,i){if(c||(o="next"),t=i[o]){if(!(t=t.call(i,u)))throw TypeError("iterator result is not an object");if(!t.done)return t;u=t.value,c<2&&(c=0)}else 1===c&&(t=i.return)&&t.call(i),c<2&&(u=TypeError("The iterator does not provide a \'"+o+"\' method"),c=1);i=e}else if((t=(y=G.n<0)?u:r.call(n,G))!==a)break}catch(t){i=e,c=1,u=t}finally{f=1}}return{value:t,done:y}}}(r,o,i),!0),u}var a={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf;var c=[][n]?t(t([][n]())):(define(t={},n,function(){return this}),t),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(u,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",define(GeneratorFunctionPrototype,o,"GeneratorFunction"),define(u),define(u,o,"Generator"),define(u,n,function(){return this}),define(u,"toString",function(){return"[object Generator]"}),(_regenerator=function(){return{w:i,m:f}})()}', {
    globals: ["Symbol", "Object", "TypeError"],
    locals: {
      _regenerator: ["body.0.id", "body.0.body.body.9.argument.expressions.9.callee.left"]
    },
    exportBindingAssignments: ["body.0.body.body.9.argument.expressions.9.callee"],
    exportName: "_regenerator",
    dependencies: {
      regeneratorDefine: ["body.0.body.body.1.body.body.1.argument.expressions.0.callee", "body.0.body.body.7.declarations.0.init.alternate.expressions.0.callee", "body.0.body.body.8.body.body.0.argument.expressions.0.alternate.expressions.1.callee", "body.0.body.body.9.argument.expressions.1.callee", "body.0.body.body.9.argument.expressions.2.callee", "body.0.body.body.9.argument.expressions.4.callee", "body.0.body.body.9.argument.expressions.5.callee", "body.0.body.body.9.argument.expressions.6.callee", "body.0.body.body.9.argument.expressions.7.callee", "body.0.body.body.9.argument.expressions.8.callee"]
    },
    internal: false
  }),
  regeneratorAsync: helper("7.27.0", "function _regeneratorAsync(n,e,r,t,o){var a=asyncGen(n,e,r,t,o);return a.next().then(function(n){return n.done?n.value:a.next()})}", {
    globals: [],
    locals: {
      _regeneratorAsync: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_regeneratorAsync",
    dependencies: {
      regeneratorAsyncGen: ["body.0.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  regeneratorAsyncGen: helper("7.27.0", "function _regeneratorAsyncGen(r,e,t,o,n){return new regeneratorAsyncIterator(regenerator().w(r,e,t,o),n||Promise)}", {
    globals: ["Promise"],
    locals: {
      _regeneratorAsyncGen: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_regeneratorAsyncGen",
    dependencies: {
      regenerator: ["body.0.body.body.0.argument.arguments.0.callee.object.callee"],
      regeneratorAsyncIterator: ["body.0.body.body.0.argument.callee"]
    },
    internal: false
  }),
  regeneratorAsyncIterator: helper("7.27.0", 'function AsyncIterator(t,e){function n(r,o,i,f){try{var c=t[r](o),u=c.value;return u instanceof OverloadYield?e.resolve(u.v).then(function(t){n("next",t,i,f)},function(t){n("throw",t,i,f)}):e.resolve(u).then(function(t){c.value=t,i(c)},function(t){return n("throw",t,i,f)})}catch(t){f(t)}}var r;this.next||(define(AsyncIterator.prototype),define(AsyncIterator.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),define(this,"_invoke",function(t,o,i){function f(){return new e(function(e,r){n(t,i,e,r)})}return r=r?r.then(f,f):f()},!0)}', {
    globals: ["Symbol"],
    locals: {
      AsyncIterator: ["body.0.id", "body.0.body.body.2.expression.expressions.0.right.expressions.0.arguments.0.object", "body.0.body.body.2.expression.expressions.0.right.expressions.1.arguments.0.object"]
    },
    exportBindingAssignments: [],
    exportName: "AsyncIterator",
    dependencies: {
      OverloadYield: ["body.0.body.body.0.body.body.0.block.body.1.argument.test.right"],
      regeneratorDefine: ["body.0.body.body.2.expression.expressions.0.right.expressions.0.callee", "body.0.body.body.2.expression.expressions.0.right.expressions.1.callee", "body.0.body.body.2.expression.expressions.1.callee"]
    },
    internal: true
  }),
  regeneratorDefine: helper("7.27.0", 'function regeneratorDefine(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}regeneratorDefine=function(e,r,n,t){function o(r,n){regeneratorDefine(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},regeneratorDefine(e,r,n,t)}', {
    globals: ["Object"],
    locals: {
      regeneratorDefine: ["body.0.id", "body.0.body.body.2.expression.expressions.0.right.body.body.0.body.body.0.expression.callee", "body.0.body.body.2.expression.expressions.1.callee", "body.0.body.body.2.expression.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.2.expression.expressions.0"],
    exportName: "regeneratorDefine",
    dependencies: {},
    internal: true
  }),
  regeneratorKeys: helper("7.27.0", "function _regeneratorKeys(e){var n=Object(e),r=[];for(var t in n)r.unshift(t);return function e(){for(;r.length;)if((t=r.pop())in n)return e.value=t,e.done=!1,e;return e.done=!0,e}}", {
    globals: ["Object"],
    locals: {
      _regeneratorKeys: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_regeneratorKeys",
    dependencies: {},
    internal: false
  }),
  regeneratorValues: helper("7.18.0", 'function _regeneratorValues(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(typeof e+" is not iterable")}', {
    globals: ["Symbol", "isNaN", "TypeError"],
    locals: {
      _regeneratorValues: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_regeneratorValues",
    dependencies: {},
    internal: false
  }),
  set: helper("7.0.0-beta.0", 'function set(e,r,t,o){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,r,t,o){var f,i=superPropBase(e,r);if(i){if((f=Object.getOwnPropertyDescriptor(i,r)).set)return f.set.call(o,t),!0;if(!f.writable)return!1}if(f=Object.getOwnPropertyDescriptor(o,r)){if(!f.writable)return!1;f.value=t,Object.defineProperty(o,r,f)}else defineProperty(o,r,t);return!0},set(e,r,t,o)}function _set(e,r,t,o,f){if(!set(e,r,t,o||e)&&f)throw new TypeError("failed to set property");return t}', {
    globals: ["Reflect", "Object", "TypeError"],
    locals: {
      set: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee", "body.1.body.body.0.test.left.argument.callee", "body.0.body.body.0.argument.expressions.0.left"],
      _set: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_set",
    dependencies: {
      superPropBase: ["body.0.body.body.0.argument.expressions.0.right.alternate.body.body.0.declarations.1.init.callee"],
      defineProperty: ["body.0.body.body.0.argument.expressions.0.right.alternate.body.body.2.alternate.expression.callee"]
    },
    internal: false
  }),
  setFunctionName: helper("7.23.6", 'function setFunctionName(e,t,n){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:n?n+" "+t:t})}catch(e){}return e}', {
    globals: ["Object"],
    locals: {
      setFunctionName: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "setFunctionName",
    dependencies: {},
    internal: false
  }),
  setPrototypeOf: helper("7.0.0-beta.0", "function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}", {
    globals: ["Object"],
    locals: {
      _setPrototypeOf: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee", "body.0.body.body.0.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.argument.expressions.0"],
    exportName: "_setPrototypeOf",
    dependencies: {},
    internal: false
  }),
  skipFirstGeneratorNext: helper("7.0.0-beta.0", "function _skipFirstGeneratorNext(t){return function(){var r=t.apply(this,arguments);return r.next(),r}}", {
    globals: [],
    locals: {
      _skipFirstGeneratorNext: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_skipFirstGeneratorNext",
    dependencies: {},
    internal: false
  }),
  slicedToArray: helper("7.0.0-beta.0", "function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}", {
    globals: [],
    locals: {
      _slicedToArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_slicedToArray",
    dependencies: {
      arrayWithHoles: ["body.0.body.body.0.argument.left.left.left.callee"],
      iterableToArrayLimit: ["body.0.body.body.0.argument.left.left.right.callee"],
      unsupportedIterableToArray: ["body.0.body.body.0.argument.left.right.callee"],
      nonIterableRest: ["body.0.body.body.0.argument.right.callee"]
    },
    internal: false
  }),
  superPropBase: helper("7.0.0-beta.0", "function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=getPrototypeOf(t)););return t}", {
    globals: [],
    locals: {
      _superPropBase: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_superPropBase",
    dependencies: {
      getPrototypeOf: ["body.0.body.body.0.test.right.right.right.callee"]
    },
    internal: false
  }),
  superPropGet: helper("7.25.0", 'function _superPropGet(t,o,e,r){var p=get(getPrototypeOf(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}', {
    globals: [],
    locals: {
      _superPropGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_superPropGet",
    dependencies: {
      get: ["body.0.body.body.0.declarations.0.init.callee"],
      getPrototypeOf: ["body.0.body.body.0.declarations.0.init.arguments.0.callee"]
    },
    internal: false
  }),
  superPropSet: helper("7.25.0", "function _superPropSet(t,e,o,r,p,f){return set(getPrototypeOf(f?t.prototype:t),e,o,r,p)}", {
    globals: [],
    locals: {
      _superPropSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_superPropSet",
    dependencies: {
      set: ["body.0.body.body.0.argument.callee"],
      getPrototypeOf: ["body.0.body.body.0.argument.arguments.0.callee"]
    },
    internal: false
  }),
  taggedTemplateLiteral: helper("7.0.0-beta.0", "function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}", {
    globals: ["Object"],
    locals: {
      _taggedTemplateLiteral: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_taggedTemplateLiteral",
    dependencies: {},
    internal: false
  }),
  taggedTemplateLiteralLoose: helper("7.0.0-beta.0", "function _taggedTemplateLiteralLoose(e,t){return t||(t=e.slice(0)),e.raw=t,e}", {
    globals: [],
    locals: {
      _taggedTemplateLiteralLoose: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_taggedTemplateLiteralLoose",
    dependencies: {},
    internal: false
  }),
  tdz: helper("7.5.5", 'function _tdzError(e){throw new ReferenceError(e+" is not defined - temporal dead zone")}', {
    globals: ["ReferenceError"],
    locals: {
      _tdzError: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_tdzError",
    dependencies: {},
    internal: false
  }),
  temporalRef: helper("7.0.0-beta.0", "function _temporalRef(r,e){return r===undef?err(e):r}", {
    globals: [],
    locals: {
      _temporalRef: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_temporalRef",
    dependencies: {
      temporalUndefined: ["body.0.body.body.0.argument.test.right"],
      tdz: ["body.0.body.body.0.argument.consequent.callee"]
    },
    internal: false
  }),
  temporalUndefined: helper("7.0.0-beta.0", "function _temporalUndefined(){}", {
    globals: [],
    locals: {
      _temporalUndefined: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_temporalUndefined",
    dependencies: {},
    internal: false
  }),
  toArray: helper("7.0.0-beta.0", "function _toArray(r){return arrayWithHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableRest()}", {
    globals: [],
    locals: {
      _toArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_toArray",
    dependencies: {
      arrayWithHoles: ["body.0.body.body.0.argument.left.left.left.callee"],
      iterableToArray: ["body.0.body.body.0.argument.left.left.right.callee"],
      unsupportedIterableToArray: ["body.0.body.body.0.argument.left.right.callee"],
      nonIterableRest: ["body.0.body.body.0.argument.right.callee"]
    },
    internal: false
  }),
  toConsumableArray: helper("7.0.0-beta.0", "function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}", {
    globals: [],
    locals: {
      _toConsumableArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_toConsumableArray",
    dependencies: {
      arrayWithoutHoles: ["body.0.body.body.0.argument.left.left.left.callee"],
      iterableToArray: ["body.0.body.body.0.argument.left.left.right.callee"],
      unsupportedIterableToArray: ["body.0.body.body.0.argument.left.right.callee"],
      nonIterableSpread: ["body.0.body.body.0.argument.right.callee"]
    },
    internal: false
  }),
  toPrimitive: helper("7.1.5", 'function toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}', {
    globals: ["Symbol", "TypeError", "String", "Number"],
    locals: {
      toPrimitive: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "toPrimitive",
    dependencies: {},
    internal: false
  }),
  toPropertyKey: helper("7.1.5", 'function toPropertyKey(t){var i=toPrimitive(t,"string");return"symbol"==typeof i?i:i+""}', {
    globals: [],
    locals: {
      toPropertyKey: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "toPropertyKey",
    dependencies: {
      toPrimitive: ["body.0.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  toSetter: helper("7.24.0", 'function _toSetter(t,e,n){e||(e=[]);var r=e.length++;return Object.defineProperty({},"_",{set:function(o){e[r]=o,t.apply(n,e)}})}', {
    globals: ["Object"],
    locals: {
      _toSetter: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_toSetter",
    dependencies: {},
    internal: false
  }),
  tsRewriteRelativeImportExtensions: helper("7.27.0", 'function tsRewriteRelativeImportExtensions(t,e){return"string"==typeof t&&/^\\.\\.?\\//.test(t)?t.replace(/\\.(tsx)$|((?:\\.d)?)((?:\\.[^./]+)?)\\.([cm]?)ts$/i,function(t,s,r,n,o){return s?e?".jsx":".js":!r||n&&o?r+n+"."+o.toLowerCase()+"js":t}):t}', {
    globals: [],
    locals: {
      tsRewriteRelativeImportExtensions: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "tsRewriteRelativeImportExtensions",
    dependencies: {},
    internal: false
  }),
  typeof: helper("7.0.0-beta.0", 'function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}', {
    globals: ["Symbol"],
    locals: {
      _typeof: ["body.0.id", "body.0.body.body.0.argument.expressions.1.callee", "body.0.body.body.0.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.argument.expressions.0"],
    exportName: "_typeof",
    dependencies: {},
    internal: false
  }),
  unsupportedIterableToArray: helper("7.9.0", 'function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,a):void 0}}', {
    globals: ["Array"],
    locals: {
      _unsupportedIterableToArray: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_unsupportedIterableToArray",
    dependencies: {
      arrayLikeToArray: ["body.0.body.body.0.consequent.body.0.consequent.argument.callee", "body.0.body.body.0.consequent.body.2.argument.expressions.1.alternate.consequent.callee"]
    },
    internal: false
  }),
  usingCtx: helper("7.23.9", 'function _usingCtx(){var r="function"==typeof SuppressedError?SuppressedError:function(r,e){var n=Error();return n.name="SuppressedError",n.error=r,n.suppressed=e,n},e={},n=[];function using(r,e){if(null!=e){if(Object(e)!==e)throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");if(r)var o=e[Symbol.asyncDispose||Symbol.for("Symbol.asyncDispose")];if(void 0===o&&(o=e[Symbol.dispose||Symbol.for("Symbol.dispose")],r))var t=o;if("function"!=typeof o)throw new TypeError("Object is not disposable.");t&&(o=function(){try{t.call(e)}catch(r){return Promise.reject(r)}}),n.push({v:e,d:o,a:r})}else r&&n.push({d:e,a:r});return e}return{e:e,u:using.bind(null,!1),a:using.bind(null,!0),d:function(){var o,t=this.e,s=0;function next(){for(;o=n.pop();)try{if(!o.a&&1===s)return s=0,n.push(o),Promise.resolve().then(next);if(o.d){var r=o.d.call(o.v);if(o.a)return s|=2,Promise.resolve(r).then(next,err)}else s|=1}catch(r){return err(r)}if(1===s)return t!==e?Promise.reject(t):Promise.resolve();if(t!==e)throw t}function err(n){return t=t!==e?new r(n,t):n,next()}return next()}}}', {
    globals: ["SuppressedError", "Error", "Object", "TypeError", "Symbol", "Promise"],
    locals: {
      _usingCtx: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_usingCtx",
    dependencies: {},
    internal: false
  }),
  wrapAsyncGenerator: helper("7.0.0-beta.0", 'function _wrapAsyncGenerator(e){return function(){return new AsyncGenerator(e.apply(this,arguments))}}function AsyncGenerator(e){var t,n;function resume(t,n){try{var r=e[t](n),o=r.value,u=o instanceof OverloadYield;Promise.resolve(u?o.v:o).then(function(n){if(u){var i="return"===t&&o.k?t:"next";if(!o.k||n.done)return resume(i,n);n=e[i](n).value}settle(!!r.done,n)},function(e){resume("throw",e)})}catch(e){settle(2,e)}}function settle(e,r){2===e?t.reject(r):t.resolve({value:r,done:e}),(t=t.next)?resume(t.key,t.arg):n=null}this._invoke=function(e,r){return new Promise(function(o,u){var i={key:e,arg:r,resolve:o,reject:u,next:null};n?n=n.next=i:(t=n=i,resume(e,r))})},"function"!=typeof e.return&&(this.return=void 0)}AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)};', {
    globals: ["Promise", "Symbol"],
    locals: {
      _wrapAsyncGenerator: ["body.0.id"],
      AsyncGenerator: ["body.1.id", "body.0.body.body.0.argument.body.body.0.argument.callee", "body.2.expression.expressions.0.left.object.object", "body.2.expression.expressions.1.left.object.object", "body.2.expression.expressions.2.left.object.object", "body.2.expression.expressions.3.left.object.object"]
    },
    exportBindingAssignments: [],
    exportName: "_wrapAsyncGenerator",
    dependencies: {
      OverloadYield: ["body.1.body.body.1.body.body.0.block.body.0.declarations.2.init.right"]
    },
    internal: false
  }),
  wrapNativeSuper: helper("7.0.0-beta.0", 'function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,Wrapper)}function Wrapper(){return construct(t,arguments,getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(t.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),setPrototypeOf(Wrapper,t)},_wrapNativeSuper(t)}', {
    globals: ["Map", "TypeError", "Object"],
    locals: {
      _wrapNativeSuper: ["body.0.id", "body.0.body.body.1.argument.expressions.1.callee", "body.0.body.body.1.argument.expressions.0.left"]
    },
    exportBindingAssignments: ["body.0.body.body.1.argument.expressions.0"],
    exportName: "_wrapNativeSuper",
    dependencies: {
      getPrototypeOf: ["body.0.body.body.1.argument.expressions.0.right.body.body.3.body.body.0.argument.arguments.2.object.callee"],
      setPrototypeOf: ["body.0.body.body.1.argument.expressions.0.right.body.body.4.argument.expressions.1.callee"],
      isNativeFunction: ["body.0.body.body.1.argument.expressions.0.right.body.body.0.test.right.argument.callee"],
      construct: ["body.0.body.body.1.argument.expressions.0.right.body.body.3.body.body.0.argument.callee"]
    },
    internal: false
  }),
  wrapRegExp: helper("7.19.0", 'function _wrapRegExp(){_wrapRegExp=function(e,r){return new BabelRegExp(e,void 0,r)};var e=RegExp.prototype,r=new WeakMap;function BabelRegExp(e,t,p){var o=RegExp(e,t);return r.set(o,p||r.get(e)),setPrototypeOf(o,BabelRegExp.prototype)}function buildGroups(e,t){var p=r.get(t);return Object.keys(p).reduce(function(r,t){var o=p[t];if("number"==typeof o)r[t]=e[o];else{for(var i=0;void 0===e[o[i]]&&i+1<o.length;)i++;r[t]=e[o[i]]}return r},Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(r){var t=e.exec.call(this,r);if(t){t.groups=buildGroups(t,this);var p=t.indices;p&&(p.groups=buildGroups(p,this))}return t},BabelRegExp.prototype[Symbol.replace]=function(t,p){if("string"==typeof p){var o=r.get(this);return e[Symbol.replace].call(this,t,p.replace(/\\$<([^>]+)(>|$)/g,function(e,r,t){if(""===t)return e;var p=o[r];return Array.isArray(p)?"$"+p.join("$"):"number"==typeof p?"$"+p:""}))}if("function"==typeof p){var i=this;return e[Symbol.replace].call(this,t,function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(buildGroups(e,i)),p.apply(this,e)})}return e[Symbol.replace].call(this,t,p)},_wrapRegExp.apply(this,arguments)}', {
    globals: ["RegExp", "WeakMap", "Object", "Symbol", "Array"],
    locals: {
      _wrapRegExp: ["body.0.id", "body.0.body.body.4.argument.expressions.3.callee.object", "body.0.body.body.0.expression.left"]
    },
    exportBindingAssignments: ["body.0.body.body.0.expression"],
    exportName: "_wrapRegExp",
    dependencies: {
      setPrototypeOf: ["body.0.body.body.2.body.body.1.argument.expressions.1.callee"],
      inherits: ["body.0.body.body.4.argument.expressions.0.callee"]
    },
    internal: false
  }),
  writeOnlyError: helper("7.12.13", "function _writeOnlyError(r){throw new TypeError('\"'+r+'\" is write-only')}", {
    globals: ["TypeError"],
    locals: {
      _writeOnlyError: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_writeOnlyError",
    dependencies: {},
    internal: false
  })
};
Object.assign(helpers, {
  AwaitValue: helper("7.0.0-beta.0", "function _AwaitValue(t){this.wrapped=t}", {
    globals: [],
    locals: {
      _AwaitValue: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_AwaitValue",
    dependencies: {},
    internal: false
  }),
  applyDecs: helper("7.17.8", 'function old_createMetadataMethodsForProperty(e,t,a,r){return{getMetadata:function(o){old_assertNotFinished(r,"getMetadata"),old_assertMetadataKey(o);var i=e[o];if(void 0!==i)if(1===t){var n=i.public;if(void 0!==n)return n[a]}else if(2===t){var l=i.private;if(void 0!==l)return l.get(a)}else if(Object.hasOwnProperty.call(i,"constructor"))return i.constructor},setMetadata:function(o,i){old_assertNotFinished(r,"setMetadata"),old_assertMetadataKey(o);var n=e[o];if(void 0===n&&(n=e[o]={}),1===t){var l=n.public;void 0===l&&(l=n.public={}),l[a]=i}else if(2===t){var s=n.priv;void 0===s&&(s=n.private=new Map),s.set(a,i)}else n.constructor=i}}}function old_convertMetadataMapToFinal(e,t){var a=e[Symbol.metadata||Symbol.for("Symbol.metadata")],r=Object.getOwnPropertySymbols(t);if(0!==r.length){for(var o=0;o<r.length;o++){var i=r[o],n=t[i],l=a?a[i]:null,s=n.public,c=l?l.public:null;s&&c&&Object.setPrototypeOf(s,c);var d=n.private;if(d){var u=Array.from(d.values()),f=l?l.private:null;f&&(u=u.concat(f)),n.private=u}l&&Object.setPrototypeOf(n,l)}a&&Object.setPrototypeOf(t,a),e[Symbol.metadata||Symbol.for("Symbol.metadata")]=t}}function old_createAddInitializerMethod(e,t){return function(a){old_assertNotFinished(t,"addInitializer"),old_assertCallable(a,"An initializer"),e.push(a)}}function old_memberDec(e,t,a,r,o,i,n,l,s){var c;switch(i){case 1:c="accessor";break;case 2:c="method";break;case 3:c="getter";break;case 4:c="setter";break;default:c="field"}var d,u,f={kind:c,name:l?"#"+t:toPropertyKey(t),isStatic:n,isPrivate:l},p={v:!1};if(0!==i&&(f.addInitializer=old_createAddInitializerMethod(o,p)),l){d=2,u=Symbol(t);var v={};0===i?(v.get=a.get,v.set=a.set):2===i?v.get=function(){return a.value}:(1!==i&&3!==i||(v.get=function(){return a.get.call(this)}),1!==i&&4!==i||(v.set=function(e){a.set.call(this,e)})),f.access=v}else d=1,u=t;try{return e(s,Object.assign(f,old_createMetadataMethodsForProperty(r,d,u,p)))}finally{p.v=!0}}function old_assertNotFinished(e,t){if(e.v)throw Error("attempted to call "+t+" after decoration was finished")}function old_assertMetadataKey(e){if("symbol"!=typeof e)throw new TypeError("Metadata keys must be symbols, received: "+e)}function old_assertCallable(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function old_assertValidReturnValue(e,t){var a=typeof t;if(1===e){if("object"!==a||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&old_assertCallable(t.get,"accessor.get"),void 0!==t.set&&old_assertCallable(t.set,"accessor.set"),void 0!==t.init&&old_assertCallable(t.init,"accessor.init"),void 0!==t.initializer&&old_assertCallable(t.initializer,"accessor.initializer")}else if("function"!==a)throw new TypeError((0===e?"field":10===e?"class":"method")+" decorators must return a function or void 0")}function old_getInit(e){var t;return null==(t=e.init)&&(t=e.initializer)&&void 0!==console&&console.warn(".initializer has been renamed to .init as of March 2022"),t}function old_applyMemberDec(e,t,a,r,o,i,n,l,s){var c,d,u,f,p,v,y,h=a[0];if(n?(0===o||1===o?(c={get:a[3],set:a[4]},u="get"):3===o?(c={get:a[3]},u="get"):4===o?(c={set:a[3]},u="set"):c={value:a[3]},0!==o&&(1===o&&setFunctionName(a[4],"#"+r,"set"),setFunctionName(a[3],"#"+r,u))):0!==o&&(c=Object.getOwnPropertyDescriptor(t,r)),1===o?f={get:c.get,set:c.set}:2===o?f=c.value:3===o?f=c.get:4===o&&(f=c.set),"function"==typeof h)void 0!==(p=old_memberDec(h,r,c,l,s,o,i,n,f))&&(old_assertValidReturnValue(o,p),0===o?d=p:1===o?(d=old_getInit(p),v=p.get||f.get,y=p.set||f.set,f={get:v,set:y}):f=p);else for(var m=h.length-1;m>=0;m--){var b;void 0!==(p=old_memberDec(h[m],r,c,l,s,o,i,n,f))&&(old_assertValidReturnValue(o,p),0===o?b=p:1===o?(b=old_getInit(p),v=p.get||f.get,y=p.set||f.set,f={get:v,set:y}):f=p,void 0!==b&&(void 0===d?d=b:"function"==typeof d?d=[d,b]:d.push(b)))}if(0===o||1===o){if(void 0===d)d=function(e,t){return t};else if("function"!=typeof d){var g=d;d=function(e,t){for(var a=t,r=0;r<g.length;r++)a=g[r].call(e,a);return a}}else{var _=d;d=function(e,t){return _.call(e,t)}}e.push(d)}0!==o&&(1===o?(c.get=f.get,c.set=f.set):2===o?c.value=f:3===o?c.get=f:4===o&&(c.set=f),n?1===o?(e.push(function(e,t){return f.get.call(e,t)}),e.push(function(e,t){return f.set.call(e,t)})):2===o?e.push(f):e.push(function(e,t){return f.call(e,t)}):Object.defineProperty(t,r,c))}function old_applyMemberDecs(e,t,a,r,o){for(var i,n,l=new Map,s=new Map,c=0;c<o.length;c++){var d=o[c];if(Array.isArray(d)){var u,f,p,v=d[1],y=d[2],h=d.length>3,m=v>=5;if(m?(u=t,f=r,0!=(v-=5)&&(p=n=n||[])):(u=t.prototype,f=a,0!==v&&(p=i=i||[])),0!==v&&!h){var b=m?s:l,g=b.get(y)||0;if(!0===g||3===g&&4!==v||4===g&&3!==v)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+y);!g&&v>2?b.set(y,v):b.set(y,!0)}old_applyMemberDec(e,u,d,y,v,m,h,f,p)}}old_pushInitializers(e,i),old_pushInitializers(e,n)}function old_pushInitializers(e,t){t&&e.push(function(e){for(var a=0;a<t.length;a++)t[a].call(e);return e})}function old_applyClassDecs(e,t,a,r){if(r.length>0){for(var o=[],i=t,n=t.name,l=r.length-1;l>=0;l--){var s={v:!1};try{var c=Object.assign({kind:"class",name:n,addInitializer:old_createAddInitializerMethod(o,s)},old_createMetadataMethodsForProperty(a,0,n,s)),d=r[l](i,c)}finally{s.v=!0}void 0!==d&&(old_assertValidReturnValue(10,d),i=d)}e.push(i,function(){for(var e=0;e<o.length;e++)o[e].call(i)})}}function applyDecs(e,t,a){var r=[],o={},i={};return old_applyMemberDecs(r,e,i,o,t),old_convertMetadataMapToFinal(e.prototype,i),old_applyClassDecs(r,e,o,a),old_convertMetadataMapToFinal(e,o),r}', {
    globals: ["Object", "Map", "Symbol", "Array", "Error", "TypeError", "console"],
    locals: {
      old_createMetadataMethodsForProperty: ["body.0.id", "body.3.body.body.4.block.body.0.argument.arguments.1.arguments.1.callee", "body.12.body.body.0.consequent.body.0.body.body.1.block.body.0.declarations.0.init.arguments.1.callee"],
      old_convertMetadataMapToFinal: ["body.1.id", "body.13.body.body.1.argument.expressions.1.callee", "body.13.body.body.1.argument.expressions.3.callee"],
      old_createAddInitializerMethod: ["body.2.id", "body.3.body.body.3.test.expressions.0.right.right.callee", "body.12.body.body.0.consequent.body.0.body.body.1.block.body.0.declarations.0.init.arguments.0.properties.2.value.callee"],
      old_memberDec: ["body.3.id", "body.9.body.body.1.consequent.expression.left.right.right.callee", "body.9.body.body.1.alternate.body.body.1.expression.left.right.right.callee"],
      old_assertNotFinished: ["body.4.id", "body.0.body.body.0.argument.properties.0.value.body.body.0.expression.expressions.0.callee", "body.0.body.body.0.argument.properties.1.value.body.body.0.expression.expressions.0.callee", "body.2.body.body.0.argument.body.body.0.expression.expressions.0.callee"],
      old_assertMetadataKey: ["body.5.id", "body.0.body.body.0.argument.properties.0.value.body.body.0.expression.expressions.1.callee", "body.0.body.body.0.argument.properties.1.value.body.body.0.expression.expressions.1.callee"],
      old_assertCallable: ["body.6.id", "body.2.body.body.0.argument.body.body.0.expression.expressions.1.callee", "body.7.body.body.1.consequent.body.1.expression.expressions.0.right.callee", "body.7.body.body.1.consequent.body.1.expression.expressions.1.right.callee", "body.7.body.body.1.consequent.body.1.expression.expressions.2.right.callee", "body.7.body.body.1.consequent.body.1.expression.expressions.3.right.callee"],
      old_assertValidReturnValue: ["body.7.id", "body.9.body.body.1.consequent.expression.right.expressions.0.callee", "body.9.body.body.1.alternate.body.body.1.expression.right.expressions.0.callee", "body.12.body.body.0.consequent.body.0.body.body.2.expression.right.expressions.0.callee"],
      old_getInit: ["body.8.id", "body.9.body.body.1.consequent.expression.right.expressions.1.alternate.consequent.expressions.0.right.callee", "body.9.body.body.1.alternate.body.body.1.expression.right.expressions.1.alternate.consequent.expressions.0.right.callee"],
      old_applyMemberDec: ["body.9.id", "body.10.body.body.0.body.body.1.consequent.body.2.expression.callee"],
      old_applyMemberDecs: ["body.10.id", "body.13.body.body.1.argument.expressions.0.callee"],
      old_pushInitializers: ["body.11.id", "body.10.body.body.1.expression.expressions.0.callee", "body.10.body.body.1.expression.expressions.1.callee"],
      old_applyClassDecs: ["body.12.id", "body.13.body.body.1.argument.expressions.2.callee"],
      applyDecs: ["body.13.id"]
    },
    exportBindingAssignments: [],
    exportName: "applyDecs",
    dependencies: {
      setFunctionName: ["body.9.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.0.right.callee", "body.9.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.1.callee"],
      toPropertyKey: ["body.3.body.body.2.declarations.2.init.properties.1.value.alternate.callee"]
    },
    internal: false
  }),
  applyDecs2203: helper("7.19.0", 'function applyDecs2203Factory(){function createAddInitializerMethod(e,t){return function(r){!function(e){if(e.v)throw Error("attempted to call addInitializer after decoration was finished")}(t),assertCallable(r,"An initializer"),e.push(r)}}function memberDec(e,t,r,a,n,i,s,o){var c;switch(n){case 1:c="accessor";break;case 2:c="method";break;case 3:c="getter";break;case 4:c="setter";break;default:c="field"}var l,u,f={kind:c,name:s?"#"+t:t,static:i,private:s},p={v:!1};0!==n&&(f.addInitializer=createAddInitializerMethod(a,p)),0===n?s?(l=r.get,u=r.set):(l=function(){return this[t]},u=function(e){this[t]=e}):2===n?l=function(){return r.value}:(1!==n&&3!==n||(l=function(){return r.get.call(this)}),1!==n&&4!==n||(u=function(e){r.set.call(this,e)})),f.access=l&&u?{get:l,set:u}:l?{get:l}:{set:u};try{return e(o,f)}finally{p.v=!0}}function assertCallable(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function assertValidReturnValue(e,t){var r=typeof t;if(1===e){if("object"!==r||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&assertCallable(t.get,"accessor.get"),void 0!==t.set&&assertCallable(t.set,"accessor.set"),void 0!==t.init&&assertCallable(t.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===e?"field":10===e?"class":"method")+" decorators must return a function or void 0")}function applyMemberDec(e,t,r,a,n,i,s,o){var c,l,u,f,p,d,h=r[0];if(s?c=0===n||1===n?{get:r[3],set:r[4]}:3===n?{get:r[3]}:4===n?{set:r[3]}:{value:r[3]}:0!==n&&(c=Object.getOwnPropertyDescriptor(t,a)),1===n?u={get:c.get,set:c.set}:2===n?u=c.value:3===n?u=c.get:4===n&&(u=c.set),"function"==typeof h)void 0!==(f=memberDec(h,a,c,o,n,i,s,u))&&(assertValidReturnValue(n,f),0===n?l=f:1===n?(l=f.init,p=f.get||u.get,d=f.set||u.set,u={get:p,set:d}):u=f);else for(var v=h.length-1;v>=0;v--){var g;void 0!==(f=memberDec(h[v],a,c,o,n,i,s,u))&&(assertValidReturnValue(n,f),0===n?g=f:1===n?(g=f.init,p=f.get||u.get,d=f.set||u.set,u={get:p,set:d}):u=f,void 0!==g&&(void 0===l?l=g:"function"==typeof l?l=[l,g]:l.push(g)))}if(0===n||1===n){if(void 0===l)l=function(e,t){return t};else if("function"!=typeof l){var y=l;l=function(e,t){for(var r=t,a=0;a<y.length;a++)r=y[a].call(e,r);return r}}else{var m=l;l=function(e,t){return m.call(e,t)}}e.push(l)}0!==n&&(1===n?(c.get=u.get,c.set=u.set):2===n?c.value=u:3===n?c.get=u:4===n&&(c.set=u),s?1===n?(e.push(function(e,t){return u.get.call(e,t)}),e.push(function(e,t){return u.set.call(e,t)})):2===n?e.push(u):e.push(function(e,t){return u.call(e,t)}):Object.defineProperty(t,a,c))}function pushInitializers(e,t){t&&e.push(function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e})}return function(e,t,r){var a=[];return function(e,t,r){for(var a,n,i=new Map,s=new Map,o=0;o<r.length;o++){var c=r[o];if(Array.isArray(c)){var l,u,f=c[1],p=c[2],d=c.length>3,h=f>=5;if(h?(l=t,0!=(f-=5)&&(u=n=n||[])):(l=t.prototype,0!==f&&(u=a=a||[])),0!==f&&!d){var v=h?s:i,g=v.get(p)||0;if(!0===g||3===g&&4!==f||4===g&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+p);!g&&f>2?v.set(p,f):v.set(p,!0)}applyMemberDec(e,l,c,p,f,h,d,u)}}pushInitializers(e,a),pushInitializers(e,n)}(a,e,t),function(e,t,r){if(r.length>0){for(var a=[],n=t,i=t.name,s=r.length-1;s>=0;s--){var o={v:!1};try{var c=r[s](n,{kind:"class",name:i,addInitializer:createAddInitializerMethod(a,o)})}finally{o.v=!0}void 0!==c&&(assertValidReturnValue(10,c),n=c)}e.push(n,function(){for(var e=0;e<a.length;e++)a[e].call(n)})}}(a,e,r),a}}var applyDecs2203Impl;function applyDecs2203(e,t,r){return(applyDecs2203Impl=applyDecs2203Impl||applyDecs2203Factory())(e,t,r)}', {
    globals: ["Error", "TypeError", "Object", "Map", "Array"],
    locals: {
      applyDecs2203Factory: ["body.0.id", "body.2.body.body.0.argument.callee.right.right.callee"],
      applyDecs2203Impl: ["body.1.declarations.0.id", "body.2.body.body.0.argument.callee.right.left", "body.2.body.body.0.argument.callee.left"],
      applyDecs2203: ["body.2.id"]
    },
    exportBindingAssignments: [],
    exportName: "applyDecs2203",
    dependencies: {},
    internal: false
  }),
  applyDecs2203R: helper("7.20.0", 'function applyDecs2203RFactory(){function createAddInitializerMethod(e,t){return function(r){!function(e){if(e.v)throw Error("attempted to call addInitializer after decoration was finished")}(t),assertCallable(r,"An initializer"),e.push(r)}}function memberDec(e,t,r,n,a,i,o,s){var c;switch(a){case 1:c="accessor";break;case 2:c="method";break;case 3:c="getter";break;case 4:c="setter";break;default:c="field"}var l,u,f={kind:c,name:o?"#"+t:toPropertyKey(t),static:i,private:o},p={v:!1};0!==a&&(f.addInitializer=createAddInitializerMethod(n,p)),0===a?o?(l=r.get,u=r.set):(l=function(){return this[t]},u=function(e){this[t]=e}):2===a?l=function(){return r.value}:(1!==a&&3!==a||(l=function(){return r.get.call(this)}),1!==a&&4!==a||(u=function(e){r.set.call(this,e)})),f.access=l&&u?{get:l,set:u}:l?{get:l}:{set:u};try{return e(s,f)}finally{p.v=!0}}function assertCallable(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function assertValidReturnValue(e,t){var r=typeof t;if(1===e){if("object"!==r||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&assertCallable(t.get,"accessor.get"),void 0!==t.set&&assertCallable(t.set,"accessor.set"),void 0!==t.init&&assertCallable(t.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===e?"field":10===e?"class":"method")+" decorators must return a function or void 0")}function applyMemberDec(e,t,r,n,a,i,o,s){var c,l,u,f,p,d,h,v=r[0];if(o?(0===a||1===a?(c={get:r[3],set:r[4]},u="get"):3===a?(c={get:r[3]},u="get"):4===a?(c={set:r[3]},u="set"):c={value:r[3]},0!==a&&(1===a&&setFunctionName(r[4],"#"+n,"set"),setFunctionName(r[3],"#"+n,u))):0!==a&&(c=Object.getOwnPropertyDescriptor(t,n)),1===a?f={get:c.get,set:c.set}:2===a?f=c.value:3===a?f=c.get:4===a&&(f=c.set),"function"==typeof v)void 0!==(p=memberDec(v,n,c,s,a,i,o,f))&&(assertValidReturnValue(a,p),0===a?l=p:1===a?(l=p.init,d=p.get||f.get,h=p.set||f.set,f={get:d,set:h}):f=p);else for(var g=v.length-1;g>=0;g--){var y;void 0!==(p=memberDec(v[g],n,c,s,a,i,o,f))&&(assertValidReturnValue(a,p),0===a?y=p:1===a?(y=p.init,d=p.get||f.get,h=p.set||f.set,f={get:d,set:h}):f=p,void 0!==y&&(void 0===l?l=y:"function"==typeof l?l=[l,y]:l.push(y)))}if(0===a||1===a){if(void 0===l)l=function(e,t){return t};else if("function"!=typeof l){var m=l;l=function(e,t){for(var r=t,n=0;n<m.length;n++)r=m[n].call(e,r);return r}}else{var b=l;l=function(e,t){return b.call(e,t)}}e.push(l)}0!==a&&(1===a?(c.get=f.get,c.set=f.set):2===a?c.value=f:3===a?c.get=f:4===a&&(c.set=f),o?1===a?(e.push(function(e,t){return f.get.call(e,t)}),e.push(function(e,t){return f.set.call(e,t)})):2===a?e.push(f):e.push(function(e,t){return f.call(e,t)}):Object.defineProperty(t,n,c))}function applyMemberDecs(e,t){for(var r,n,a=[],i=new Map,o=new Map,s=0;s<t.length;s++){var c=t[s];if(Array.isArray(c)){var l,u,f=c[1],p=c[2],d=c.length>3,h=f>=5;if(h?(l=e,0!=(f-=5)&&(u=n=n||[])):(l=e.prototype,0!==f&&(u=r=r||[])),0!==f&&!d){var v=h?o:i,g=v.get(p)||0;if(!0===g||3===g&&4!==f||4===g&&3!==f)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+p);!g&&f>2?v.set(p,f):v.set(p,!0)}applyMemberDec(a,l,c,p,f,h,d,u)}}return pushInitializers(a,r),pushInitializers(a,n),a}function pushInitializers(e,t){t&&e.push(function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e})}return function(e,t,r){return{e:applyMemberDecs(e,t),get c(){return function(e,t){if(t.length>0){for(var r=[],n=e,a=e.name,i=t.length-1;i>=0;i--){var o={v:!1};try{var s=t[i](n,{kind:"class",name:a,addInitializer:createAddInitializerMethod(r,o)})}finally{o.v=!0}void 0!==s&&(assertValidReturnValue(10,s),n=s)}return[n,function(){for(var e=0;e<r.length;e++)r[e].call(n)}]}}(e,r)}}}}function applyDecs2203R(e,t,r){return(applyDecs2203R=applyDecs2203RFactory())(e,t,r)}', {
    globals: ["Error", "TypeError", "Object", "Map", "Array"],
    locals: {
      applyDecs2203RFactory: ["body.0.id", "body.1.body.body.0.argument.callee.right.callee"],
      applyDecs2203R: ["body.1.id", "body.1.body.body.0.argument.callee.left"]
    },
    exportBindingAssignments: ["body.1.body.body.0.argument.callee"],
    exportName: "applyDecs2203R",
    dependencies: {
      setFunctionName: ["body.0.body.body.4.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.0.right.callee", "body.0.body.body.4.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.1.callee"],
      toPropertyKey: ["body.0.body.body.1.body.body.2.declarations.2.init.properties.1.value.alternate.callee"]
    },
    internal: false
  }),
  applyDecs2301: helper("7.21.0", 'function applyDecs2301Factory(){function createAddInitializerMethod(e,t){return function(r){!function(e){if(e.v)throw Error("attempted to call addInitializer after decoration was finished")}(t),assertCallable(r,"An initializer"),e.push(r)}}function assertInstanceIfPrivate(e,t){if(!e(t))throw new TypeError("Attempted to access private element on non-instance")}function memberDec(e,t,r,n,a,i,s,o,c){var u;switch(a){case 1:u="accessor";break;case 2:u="method";break;case 3:u="getter";break;case 4:u="setter";break;default:u="field"}var l,f,p={kind:u,name:s?"#"+t:toPropertyKey(t),static:i,private:s},d={v:!1};if(0!==a&&(p.addInitializer=createAddInitializerMethod(n,d)),s||0!==a&&2!==a)if(2===a)l=function(e){return assertInstanceIfPrivate(c,e),r.value};else{var h=0===a||1===a;(h||3===a)&&(l=s?function(e){return assertInstanceIfPrivate(c,e),r.get.call(e)}:function(e){return r.get.call(e)}),(h||4===a)&&(f=s?function(e,t){assertInstanceIfPrivate(c,e),r.set.call(e,t)}:function(e,t){r.set.call(e,t)})}else l=function(e){return e[t]},0===a&&(f=function(e,r){e[t]=r});var v=s?c.bind():function(e){return t in e};p.access=l&&f?{get:l,set:f,has:v}:l?{get:l,has:v}:{set:f,has:v};try{return e(o,p)}finally{d.v=!0}}function assertCallable(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function assertValidReturnValue(e,t){var r=typeof t;if(1===e){if("object"!==r||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&assertCallable(t.get,"accessor.get"),void 0!==t.set&&assertCallable(t.set,"accessor.set"),void 0!==t.init&&assertCallable(t.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===e?"field":10===e?"class":"method")+" decorators must return a function or void 0")}function curryThis2(e){return function(t){e(this,t)}}function applyMemberDec(e,t,r,n,a,i,s,o,c){var u,l,f,p,d,h,v,y,g=r[0];if(s?(0===a||1===a?(u={get:(d=r[3],function(){return d(this)}),set:curryThis2(r[4])},f="get"):3===a?(u={get:r[3]},f="get"):4===a?(u={set:r[3]},f="set"):u={value:r[3]},0!==a&&(1===a&&setFunctionName(u.set,"#"+n,"set"),setFunctionName(u[f||"value"],"#"+n,f))):0!==a&&(u=Object.getOwnPropertyDescriptor(t,n)),1===a?p={get:u.get,set:u.set}:2===a?p=u.value:3===a?p=u.get:4===a&&(p=u.set),"function"==typeof g)void 0!==(h=memberDec(g,n,u,o,a,i,s,p,c))&&(assertValidReturnValue(a,h),0===a?l=h:1===a?(l=h.init,v=h.get||p.get,y=h.set||p.set,p={get:v,set:y}):p=h);else for(var m=g.length-1;m>=0;m--){var b;void 0!==(h=memberDec(g[m],n,u,o,a,i,s,p,c))&&(assertValidReturnValue(a,h),0===a?b=h:1===a?(b=h.init,v=h.get||p.get,y=h.set||p.set,p={get:v,set:y}):p=h,void 0!==b&&(void 0===l?l=b:"function"==typeof l?l=[l,b]:l.push(b)))}if(0===a||1===a){if(void 0===l)l=function(e,t){return t};else if("function"!=typeof l){var I=l;l=function(e,t){for(var r=t,n=0;n<I.length;n++)r=I[n].call(e,r);return r}}else{var w=l;l=function(e,t){return w.call(e,t)}}e.push(l)}0!==a&&(1===a?(u.get=p.get,u.set=p.set):2===a?u.value=p:3===a?u.get=p:4===a&&(u.set=p),s?1===a?(e.push(function(e,t){return p.get.call(e,t)}),e.push(function(e,t){return p.set.call(e,t)})):2===a?e.push(p):e.push(function(e,t){return p.call(e,t)}):Object.defineProperty(t,n,u))}function applyMemberDecs(e,t,r){for(var n,a,i,s=[],o=new Map,c=new Map,u=0;u<t.length;u++){var l=t[u];if(Array.isArray(l)){var f,p,d=l[1],h=l[2],v=l.length>3,y=d>=5,g=r;if(y?(f=e,0!=(d-=5)&&(p=a=a||[]),v&&!i&&(i=function(t){return checkInRHS(t)===e}),g=i):(f=e.prototype,0!==d&&(p=n=n||[])),0!==d&&!v){var m=y?c:o,b=m.get(h)||0;if(!0===b||3===b&&4!==d||4===b&&3!==d)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+h);!b&&d>2?m.set(h,d):m.set(h,!0)}applyMemberDec(s,f,l,h,d,y,v,p,g)}}return pushInitializers(s,n),pushInitializers(s,a),s}function pushInitializers(e,t){t&&e.push(function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e})}return function(e,t,r,n){return{e:applyMemberDecs(e,t,n),get c(){return function(e,t){if(t.length>0){for(var r=[],n=e,a=e.name,i=t.length-1;i>=0;i--){var s={v:!1};try{var o=t[i](n,{kind:"class",name:a,addInitializer:createAddInitializerMethod(r,s)})}finally{s.v=!0}void 0!==o&&(assertValidReturnValue(10,o),n=o)}return[n,function(){for(var e=0;e<r.length;e++)r[e].call(n)}]}}(e,r)}}}}function applyDecs2301(e,t,r,n){return(applyDecs2301=applyDecs2301Factory())(e,t,r,n)}', {
    globals: ["Error", "TypeError", "Object", "Map", "Array"],
    locals: {
      applyDecs2301Factory: ["body.0.id", "body.1.body.body.0.argument.callee.right.callee"],
      applyDecs2301: ["body.1.id", "body.1.body.body.0.argument.callee.left"]
    },
    exportBindingAssignments: ["body.1.body.body.0.argument.callee"],
    exportName: "applyDecs2301",
    dependencies: {
      checkInRHS: ["body.0.body.body.7.body.body.0.body.body.1.consequent.body.1.test.expressions.0.consequent.expressions.2.right.right.body.body.0.argument.left.callee"],
      setFunctionName: ["body.0.body.body.6.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.0.right.callee", "body.0.body.body.6.body.body.1.test.expressions.0.consequent.expressions.1.right.expressions.1.callee"],
      toPropertyKey: ["body.0.body.body.2.body.body.2.declarations.2.init.properties.1.value.alternate.callee"]
    },
    internal: false
  }),
  applyDecs2305: helper("7.21.0", 'function applyDecs2305(e,t,r,n,o,a){function i(e,t,r){return function(n,o){return r&&r(n),e[t].call(n,o)}}function c(e,t){for(var r=0;r<e.length;r++)e[r].call(t);return t}function s(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function applyDec(e,t,r,n,o,a,c,u,l,f,p,d,h){function m(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var y,v=t[0],g=t[3],b=!u;if(!b){r||Array.isArray(v)||(v=[v]);var w={},S=[],A=3===o?"get":4===o||d?"set":"value";f?(p||d?w={get:setFunctionName(function(){return g(this)},n,"get"),set:function(e){t[4](this,e)}}:w[A]=g,p||setFunctionName(w[A],n,2===o?"":A)):p||(w=Object.getOwnPropertyDescriptor(e,n))}for(var P=e,j=v.length-1;j>=0;j-=r?2:1){var D=v[j],E=r?v[j-1]:void 0,I={},O={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");s(t,"An initializer","be",!0),c.push(t)}.bind(null,I)};try{if(b)(y=s(D.call(E,P,O),"class decorators","return"))&&(P=y);else{var k,F;O.static=l,O.private=f,f?2===o?k=function(e){return m(e),w.value}:(o<4&&(k=i(w,"get",m)),3!==o&&(F=i(w,"set",m))):(k=function(e){return e[n]},(o<2||4===o)&&(F=function(e,t){e[n]=t}));var N=O.access={has:f?h.bind():function(e){return n in e}};if(k&&(N.get=k),F&&(N.set=F),P=D.call(E,d?{get:w.get,set:w.set}:w[A],O),d){if("object"==typeof P&&P)(y=s(P.get,"accessor.get"))&&(w.get=y),(y=s(P.set,"accessor.set"))&&(w.set=y),(y=s(P.init,"accessor.init"))&&S.push(y);else if(void 0!==P)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0")}else s(P,(p?"field":"method")+" decorators","return")&&(p?S.push(P):w[A]=P)}}finally{I.v=!0}}return(p||d)&&u.push(function(e,t){for(var r=S.length-1;r>=0;r--)t=S[r].call(e,t);return t}),p||b||(f?d?u.push(i(w,"get"),i(w,"set")):u.push(2===o?w[A]:i.call.bind(w[A])):Object.defineProperty(e,n,w)),P}function u(e,t){return Object.defineProperty(e,Symbol.metadata||Symbol.for("Symbol.metadata"),{configurable:!0,enumerable:!0,value:t})}if(arguments.length>=6)var l=a[Symbol.metadata||Symbol.for("Symbol.metadata")];var f=Object.create(null==l?null:l),p=function(e,t,r,n){var o,a,i=[],s=function(t){return checkInRHS(t)===e},u=new Map;function l(e){e&&i.push(c.bind(null,e))}for(var f=0;f<t.length;f++){var p=t[f];if(Array.isArray(p)){var d=p[1],h=p[2],m=p.length>3,y=16&d,v=!!(8&d),g=0==(d&=7),b=h+"/"+v;if(!g&&!m){var w=u.get(b);if(!0===w||3===w&&4!==d||4===w&&3!==d)throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+h);u.set(b,!(d>2)||d)}applyDec(v?e:e.prototype,p,y,m?"#"+h:toPropertyKey(h),d,n,v?a=a||[]:o=o||[],i,v,m,g,1===d,v&&m?s:r)}}return l(o),l(a),i}(e,t,o,f);return r.length||u(e,f),{e:p,get c(){var t=[];return r.length&&[u(applyDec(e,[r],n,e.name,5,f,t),f),c.bind(null,t,e)]}}}', {
    globals: ["TypeError", "Array", "Object", "Error", "Symbol", "Map"],
    locals: {
      applyDecs2305: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "applyDecs2305",
    dependencies: {
      checkInRHS: ["body.0.body.body.6.declarations.1.init.callee.body.body.0.declarations.3.init.body.body.0.argument.left.callee"],
      setFunctionName: ["body.0.body.body.3.body.body.2.consequent.body.2.expression.consequent.expressions.0.consequent.right.properties.0.value.callee", "body.0.body.body.3.body.body.2.consequent.body.2.expression.consequent.expressions.1.right.callee"],
      toPropertyKey: ["body.0.body.body.6.declarations.1.init.callee.body.body.2.body.body.1.consequent.body.2.expression.arguments.3.alternate.callee"]
    },
    internal: false
  }),
  classApplyDescriptorDestructureSet: helper("7.13.10", 'function _classApplyDescriptorDestructureSet(e,t){if(t.set)return"__destrObj"in t||(t.__destrObj={set value(r){t.set.call(e,r)}}),t.__destrObj;if(!t.writable)throw new TypeError("attempted to set read only private field");return t}', {
    globals: ["TypeError"],
    locals: {
      _classApplyDescriptorDestructureSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classApplyDescriptorDestructureSet",
    dependencies: {},
    internal: false
  }),
  classApplyDescriptorGet: helper("7.13.10", "function _classApplyDescriptorGet(e,t){return t.get?t.get.call(e):t.value}", {
    globals: [],
    locals: {
      _classApplyDescriptorGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classApplyDescriptorGet",
    dependencies: {},
    internal: false
  }),
  classApplyDescriptorSet: helper("7.13.10", 'function _classApplyDescriptorSet(e,t,l){if(t.set)t.set.call(e,l);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=l}}', {
    globals: ["TypeError"],
    locals: {
      _classApplyDescriptorSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classApplyDescriptorSet",
    dependencies: {},
    internal: false
  }),
  classCheckPrivateStaticAccess: helper("7.13.10", "function _classCheckPrivateStaticAccess(s,a,r){return assertClassBrand(a,s,r)}", {
    globals: [],
    locals: {
      _classCheckPrivateStaticAccess: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classCheckPrivateStaticAccess",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.callee"]
    },
    internal: false
  }),
  classCheckPrivateStaticFieldDescriptor: helper("7.13.10", 'function _classCheckPrivateStaticFieldDescriptor(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}', {
    globals: ["TypeError"],
    locals: {
      _classCheckPrivateStaticFieldDescriptor: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classCheckPrivateStaticFieldDescriptor",
    dependencies: {},
    internal: false
  }),
  classExtractFieldDescriptor: helper("7.13.10", "function _classExtractFieldDescriptor(e,t){return classPrivateFieldGet2(t,e)}", {
    globals: [],
    locals: {
      _classExtractFieldDescriptor: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classExtractFieldDescriptor",
    dependencies: {
      classPrivateFieldGet2: ["body.0.body.body.0.argument.callee"]
    },
    internal: false
  }),
  classPrivateFieldDestructureSet: helper("7.4.4", "function _classPrivateFieldDestructureSet(e,t){var r=classPrivateFieldGet2(t,e);return classApplyDescriptorDestructureSet(e,r)}", {
    globals: [],
    locals: {
      _classPrivateFieldDestructureSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldDestructureSet",
    dependencies: {
      classApplyDescriptorDestructureSet: ["body.0.body.body.1.argument.callee"],
      classPrivateFieldGet2: ["body.0.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  classPrivateFieldGet: helper("7.0.0-beta.0", "function _classPrivateFieldGet(e,t){var r=classPrivateFieldGet2(t,e);return classApplyDescriptorGet(e,r)}", {
    globals: [],
    locals: {
      _classPrivateFieldGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldGet",
    dependencies: {
      classApplyDescriptorGet: ["body.0.body.body.1.argument.callee"],
      classPrivateFieldGet2: ["body.0.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  classPrivateFieldSet: helper("7.0.0-beta.0", "function _classPrivateFieldSet(e,t,r){var s=classPrivateFieldGet2(t,e);return classApplyDescriptorSet(e,s,r),r}", {
    globals: [],
    locals: {
      _classPrivateFieldSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateFieldSet",
    dependencies: {
      classApplyDescriptorSet: ["body.0.body.body.1.argument.expressions.0.callee"],
      classPrivateFieldGet2: ["body.0.body.body.0.declarations.0.init.callee"]
    },
    internal: false
  }),
  classPrivateMethodGet: helper("7.1.6", "function _classPrivateMethodGet(s,a,r){return assertClassBrand(a,s),r}", {
    globals: [],
    locals: {
      _classPrivateMethodGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateMethodGet",
    dependencies: {
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.callee"]
    },
    internal: false
  }),
  classPrivateMethodSet: helper("7.1.6", 'function _classPrivateMethodSet(){throw new TypeError("attempted to reassign private method")}', {
    globals: ["TypeError"],
    locals: {
      _classPrivateMethodSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classPrivateMethodSet",
    dependencies: {},
    internal: false
  }),
  classStaticPrivateFieldDestructureSet: helper("7.13.10", 'function _classStaticPrivateFieldDestructureSet(t,r,s){return assertClassBrand(r,t),classCheckPrivateStaticFieldDescriptor(s,"set"),classApplyDescriptorDestructureSet(t,s)}', {
    globals: [],
    locals: {
      _classStaticPrivateFieldDestructureSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classStaticPrivateFieldDestructureSet",
    dependencies: {
      classApplyDescriptorDestructureSet: ["body.0.body.body.0.argument.expressions.2.callee"],
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.callee"],
      classCheckPrivateStaticFieldDescriptor: ["body.0.body.body.0.argument.expressions.1.callee"]
    },
    internal: false
  }),
  classStaticPrivateFieldSpecGet: helper("7.0.2", 'function _classStaticPrivateFieldSpecGet(t,s,r){return assertClassBrand(s,t),classCheckPrivateStaticFieldDescriptor(r,"get"),classApplyDescriptorGet(t,r)}', {
    globals: [],
    locals: {
      _classStaticPrivateFieldSpecGet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classStaticPrivateFieldSpecGet",
    dependencies: {
      classApplyDescriptorGet: ["body.0.body.body.0.argument.expressions.2.callee"],
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.callee"],
      classCheckPrivateStaticFieldDescriptor: ["body.0.body.body.0.argument.expressions.1.callee"]
    },
    internal: false
  }),
  classStaticPrivateFieldSpecSet: helper("7.0.2", 'function _classStaticPrivateFieldSpecSet(s,t,r,e){return assertClassBrand(t,s),classCheckPrivateStaticFieldDescriptor(r,"set"),classApplyDescriptorSet(s,r,e),e}', {
    globals: [],
    locals: {
      _classStaticPrivateFieldSpecSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classStaticPrivateFieldSpecSet",
    dependencies: {
      classApplyDescriptorSet: ["body.0.body.body.0.argument.expressions.2.callee"],
      assertClassBrand: ["body.0.body.body.0.argument.expressions.0.callee"],
      classCheckPrivateStaticFieldDescriptor: ["body.0.body.body.0.argument.expressions.1.callee"]
    },
    internal: false
  }),
  classStaticPrivateMethodSet: helper("7.3.2", 'function _classStaticPrivateMethodSet(){throw new TypeError("attempted to set read only static private field")}', {
    globals: ["TypeError"],
    locals: {
      _classStaticPrivateMethodSet: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_classStaticPrivateMethodSet",
    dependencies: {},
    internal: false
  }),
  defineEnumerableProperties: helper("7.0.0-beta.0", 'function _defineEnumerableProperties(e,r){for(var t in r){var n=r[t];n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t,n)}if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(r),b=0;b<a.length;b++){var i=a[b];(n=r[i]).configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i,n)}return e}', {
    globals: ["Object"],
    locals: {
      _defineEnumerableProperties: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_defineEnumerableProperties",
    dependencies: {},
    internal: false
  }),
  dispose: helper("7.22.0", 'function dispose_SuppressedError(r,e){return"undefined"!=typeof SuppressedError?dispose_SuppressedError=SuppressedError:(dispose_SuppressedError=function(r,e){this.suppressed=e,this.error=r,this.stack=Error().stack},dispose_SuppressedError.prototype=Object.create(Error.prototype,{constructor:{value:dispose_SuppressedError,writable:!0,configurable:!0}})),new dispose_SuppressedError(r,e)}function _dispose(r,e,s){function next(){for(;r.length>0;)try{var o=r.pop(),p=o.d.call(o.v);if(o.a)return Promise.resolve(p).then(next,err)}catch(r){return err(r)}if(s)throw e}function err(r){return e=s?new dispose_SuppressedError(e,r):r,s=!0,next()}return next()}', {
    globals: ["SuppressedError", "Error", "Object", "Promise"],
    locals: {
      dispose_SuppressedError: ["body.0.id", "body.0.body.body.0.argument.expressions.0.alternate.expressions.1.left.object", "body.0.body.body.0.argument.expressions.0.alternate.expressions.1.right.arguments.1.properties.0.value.properties.0.value", "body.0.body.body.0.argument.expressions.1.callee", "body.1.body.body.1.body.body.0.argument.expressions.0.right.consequent.callee", "body.0.body.body.0.argument.expressions.0.consequent.left", "body.0.body.body.0.argument.expressions.0.alternate.expressions.0.left"],
      _dispose: ["body.1.id"]
    },
    exportBindingAssignments: [],
    exportName: "_dispose",
    dependencies: {},
    internal: false
  }),
  objectSpread: helper("7.0.0-beta.0", 'function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?Object(arguments[r]):{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.forEach(function(r){defineProperty(e,r,t[r])})}return e}', {
    globals: ["Object"],
    locals: {
      _objectSpread: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_objectSpread",
    dependencies: {
      defineProperty: ["body.0.body.body.0.body.body.1.expression.expressions.1.arguments.0.body.body.0.expression.callee"]
    },
    internal: false
  }),
  regeneratorRuntime: helper("7.18.0", 'function _regeneratorRuntime(){"use strict";var r=regenerator(),e=r.m(_regeneratorRuntime),t=(Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__).constructor;function n(r){var e="function"==typeof r&&r.constructor;return!!e&&(e===t||"GeneratorFunction"===(e.displayName||e.name))}var o={throw:1,return:2,break:3,continue:3};function a(r){var e,t;return function(n){e||(e={stop:function(){return t(n.a,2)},catch:function(){return n.v},abrupt:function(r,e){return t(n.a,o[r],e)},delegateYield:function(r,o,a){return e.resultName=o,t(n.d,values(r),a)},finish:function(r){return t(n.f,r)}},t=function(r,t,o){n.p=e.prev,n.n=e.next;try{return r(t,o)}finally{e.next=n.n}}),e.resultName&&(e[e.resultName]=n.v,e.resultName=void 0),e.sent=n.v,e.next=n.n;try{return r.call(this,e)}finally{n.p=e.prev,n.n=e.next}}}return(_regeneratorRuntime=function(){return{wrap:function(e,t,n,o){return r.w(a(e),t,n,o&&o.reverse())},isGeneratorFunction:n,mark:r.m,awrap:function(r,e){return new OverloadYield(r,e)},AsyncIterator:AsyncIterator,async:function(r,e,t,o,u){return(n(e)?asyncGen:async)(a(r),e,t,o,u)},keys:keys,values:values}})()}', {
    globals: ["Object"],
    locals: {
      _regeneratorRuntime: ["body.0.id", "body.0.body.body.0.declarations.1.init.arguments.0", "body.0.body.body.4.argument.callee.left"]
    },
    exportBindingAssignments: ["body.0.body.body.4.argument.callee"],
    exportName: "_regeneratorRuntime",
    dependencies: {
      OverloadYield: ["body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.3.value.body.body.0.argument.callee"],
      regenerator: ["body.0.body.body.0.declarations.0.init.callee"],
      regeneratorAsync: ["body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.5.value.body.body.0.argument.callee.alternate"],
      regeneratorAsyncGen: ["body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.5.value.body.body.0.argument.callee.consequent"],
      regeneratorAsyncIterator: ["body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.4.value"],
      regeneratorKeys: ["body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.6.value"],
      regeneratorValues: ["body.0.body.body.3.body.body.1.argument.body.body.0.expression.expressions.0.right.expressions.0.right.properties.3.value.body.body.0.argument.expressions.1.arguments.1.callee", "body.0.body.body.4.argument.callee.right.body.body.0.argument.properties.7.value"]
    },
    internal: false
  }),
  using: helper("7.22.0", 'function _using(o,n,e){if(null==n)return n;if(Object(n)!==n)throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");if(e)var r=n[Symbol.asyncDispose||Symbol.for("Symbol.asyncDispose")];if(null==r&&(r=n[Symbol.dispose||Symbol.for("Symbol.dispose")]),"function"!=typeof r)throw new TypeError("Property [Symbol.dispose] is not a function.");return o.push({v:n,d:r,a:e}),n}', {
    globals: ["Object", "TypeError", "Symbol"],
    locals: {
      _using: ["body.0.id"]
    },
    exportBindingAssignments: [],
    exportName: "_using",
    dependencies: {},
    internal: false
  })
});

//# sourceMappingURL=helpers-generated.js.map

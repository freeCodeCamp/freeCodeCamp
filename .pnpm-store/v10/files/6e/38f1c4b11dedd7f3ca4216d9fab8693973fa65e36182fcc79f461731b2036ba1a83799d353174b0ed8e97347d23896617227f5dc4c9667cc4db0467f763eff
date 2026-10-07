import { invariant } from 'outvariant';
import { c as createError } from './utils-52664384.mjs';

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
        this.listenersCount = 0;
        this.channelId = Math.floor(Math.random() * 1000000);
        this.listeners = [];
    }
    EventEmitter.prototype.cleanup = function () {
        this.listeners = {};
        this.listenersCount = 0;
    };
    EventEmitter.prototype.dispatch = function (message) {
        Object.values(this.listeners).forEach(function (listener) { return listener(message); });
    };
    EventEmitter.prototype.listener = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.listenersCount;
        this.listeners[listenerId] = listener;
        this.listenersCount++;
        return function () {
            delete _this.listeners[listenerId];
        };
    };
    return EventEmitter;
}());

function isCommand(char) {
    return /[a-zA-Z.]/.test(char);
}
function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
}
function isWhitespace(char) {
    return /\s/.test(char);
}
function isOperator(char) {
    return /[&|]/.test(char);
}
function isArgument(char) {
    return /-/.test(char);
}
function isString(char) {
    return /["']/.test(char);
}
function isEnvVar(char) {
    return isAlpha(char) && char === char.toUpperCase();
}
var TokenType;
(function (TokenType) {
    TokenType["OR"] = "OR";
    TokenType["AND"] = "AND";
    TokenType["PIPE"] = "PIPE";
    TokenType["Command"] = "Command";
    TokenType["Argument"] = "Argument";
    TokenType["String"] = "String";
    TokenType["EnvVar"] = "EnvVar";
})(TokenType || (TokenType = {}));
var operators = new Map([
    ["&&", { type: TokenType.AND }],
    ["||", { type: TokenType.OR }],
    ["|", { type: TokenType.PIPE }],
    ["-", { type: TokenType.Argument }],
]);
function tokenize(input) {
    var current = 0;
    var tokens = [];
    function parseCommand() {
        var value = "";
        while (isCommand(input[current]) && current < input.length) {
            value += input[current];
            current++;
        }
        return { type: TokenType.Command, value: value };
    }
    function parseOperator() {
        var value = "";
        while (isOperator(input[current]) && current < input.length) {
            value += input[current];
            current++;
        }
        return operators.get(value);
    }
    function parseArgument() {
        var value = "";
        while ((isArgument(input[current]) || isAlpha(input[current])) &&
            current < input.length) {
            value += input[current];
            current++;
        }
        return { type: TokenType.Argument, value: value };
    }
    function parseString() {
        var openCloseQuote = input[current];
        var value = input[current];
        current++;
        while (input[current] !== openCloseQuote && current < input.length) {
            value += input[current];
            current++;
        }
        value += input[current];
        current++;
        return { type: TokenType.String, value: value };
    }
    function parseEnvVars() {
        var value = {};
        var parseSingleEnv = function () {
            var key = "";
            var pair = "";
            while (input[current] !== "=" && current < input.length) {
                key += input[current];
                current++;
            }
            // Skip equal
            if (input[current] === "=") {
                current++;
            }
            while (input[current] !== " " && current < input.length) {
                pair += input[current];
                current++;
            }
            value[key] = pair;
        };
        while (isEnvVar(input[current]) && current < input.length) {
            parseSingleEnv();
            current++;
        }
        return { type: TokenType.EnvVar, value: value };
    }
    while (current < input.length) {
        var currentChar = input[current];
        if (isWhitespace(currentChar)) {
            current++;
            continue;
        }
        switch (true) {
            case isEnvVar(currentChar):
                tokens.push(parseEnvVars());
                break;
            case isCommand(currentChar):
                tokens.push(parseCommand());
                break;
            case isOperator(currentChar):
                tokens.push(parseOperator());
                break;
            case isArgument(currentChar):
                tokens.push(parseArgument());
                break;
            case isString(currentChar):
                tokens.push(parseString());
                break;
            default:
                throw new Error("Unknown character: ".concat(currentChar));
        }
    }
    return tokens;
}

var counter = 0;
function generateRandomId() {
    var now = Date.now();
    var randomNumber = Math.round(Math.random() * 10000);
    var count = (counter += 1);
    return (+"".concat(now).concat(randomNumber).concat(count)).toString(16);
}
var writeBuffer = function (content) {
    if (typeof content === "string") {
        return new TextEncoder().encode(content);
    }
    else {
        return content;
    }
};
var readBuffer = function (content) {
    if (typeof content === "string") {
        return content;
    }
    else {
        return new TextDecoder().decode(content);
    }
};
var fromBundlerFilesToFS = function (files) {
    return Object.entries(files).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = writeBuffer(value.code);
        return acc;
    }, {});
};
/**
 * Figure out which script it must run to start a server
 */
var findStartScriptPackageJson = function (packageJson) {
    var scripts = {};
    // TODO: support postinstall
    var possibleKeys = ["dev", "start"];
    try {
        scripts = JSON.parse(packageJson).scripts;
    }
    catch (e) {
        throw createError("Could not parse package.json file: " + e.message);
    }
    invariant(scripts, "Failed to start. Please provide a `start` or `dev` script on the package.json");
    var _loop_1 = function (index) {
        if (possibleKeys[index] in scripts) {
            var script = possibleKeys[index];
            var candidate = scripts[script];
            var env_1 = {};
            var command_1 = "";
            var args_1 = [];
            tokenize(candidate).forEach(function (item) {
                var commandNotFoundYet = command_1 === "";
                if (item.type === TokenType.EnvVar) {
                    env_1 = item.value;
                }
                if (item.type === TokenType.Command && commandNotFoundYet) {
                    command_1 = item.value;
                }
                if (item.type === TokenType.Argument ||
                    (!commandNotFoundYet && item.type === TokenType.Command)) {
                    args_1.push(item.value);
                }
                // TODO: support TokenType.AND, TokenType.OR, TokenType.PIPE
            });
            return { value: [command_1, args_1, { env: env_1 }] };
        }
    };
    for (var index = 0; index < possibleKeys.length; index++) {
        var state_1 = _loop_1(index);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    throw createError("Failed to start. Please provide a `start` or `dev` script on the package.json");
};
var getMessageFromError = function (error) {
    if (typeof error === "string")
        return error;
    if (typeof error === "object" && "message" in error) {
        return error.message;
    }
    return createError("The server could not be reached. Make sure that the node script is running and that a port has been started.");
};

var consoleHook = "var t=\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof window?window:\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,\"default\")?t.default:t}var e={},n={};!function(t){t.__esModule=!0,t.default=[\"log\",\"debug\",\"info\",\"warn\",\"error\",\"table\",\"clear\",\"time\",\"timeEnd\",\"count\",\"assert\",\"command\",\"result\"]}(n);var a,o={},i={};(a=i).__esModule=!0,a.default=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+\"-\"+t()+\"-\"+t()+\"-\"+t()+\"-\"+t()+\"-\"+Date.now()};var u={},s={__esModule:!0};s.update=s.state=void 0,s.update=function(t){s.state=t};var f={},c={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.initialState=void 0,r.initialState={timings:{},count:{}};var n=function(){return\"undefined\"!=typeof performance&&performance.now?performance.now():Date.now()};r.default=function(t,a){var o,i,u;switch(void 0===t&&(t=r.initialState),a.type){case\"COUNT\":var s=t.count[a.name]||0;return e(e({},t),{count:e(e({},t.count),(o={},o[a.name]=s+1,o))});case\"TIME_START\":return e(e({},t),{timings:e(e({},t.timings),(i={},i[a.name]={start:n()},i))});case\"TIME_END\":var f=t.timings[a.name],c=n(),l=c-f.start;return e(e({},t),{timings:e(e({},t.timings),(u={},u[a.name]=e(e({},f),{end:c,time:l}),u))});default:return t}}}(c),function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var n=e(c),a=s;r.default=function(t){a.update(n.default(a.state,t))}}(f);var l={__esModule:!0};l.timeEnd=l.timeStart=l.count=void 0,l.count=function(t){return{type:\"COUNT\",name:t}},l.timeStart=function(t){return{type:\"TIME_START\",name:t}},l.timeEnd=function(t){return{type:\"TIME_END\",name:t}};var d=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u.__esModule=!0,u.stop=u.start=void 0;var p=s,h=d(f),m=l;u.start=function(t){h.default(m.timeStart(t))},u.stop=function(t){var r=null===p.state||void 0===p.state?void 0:p.state.timings[t];return r&&!r.end?(h.default(m.timeEnd(t)),{method:\"log\",data:[t+\": \"+p.state.timings[t].time+\"ms\"]}):{method:\"warn\",data:[\"Timer '\"+t+\"' does not exist\"]}};var y={},v=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};y.__esModule=!0,y.increment=void 0;var _=s,b=v(f),g=l;y.increment=function(t){return b.default(g.count(t)),{method:\"log\",data:[t+\": \"+_.state.count[t]]}};var M={},T=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n};M.__esModule=!0,M.test=void 0,M.test=function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return!t&&(0===r.length&&r.push(\"console.assert\"),{method:\"error\",data:T([\"Assertion failed:\"],r)})},function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)},n=t&&t.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e),Object.defineProperty(t,n,{enumerable:!0,get:function(){return r[e]}})}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),a=t&&t.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,\"default\",{enumerable:!0,value:r})}:function(t,r){t.default=r}),o=t&&t.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)\"default\"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&n(r,t,e);return a(r,t),r},s=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n},f=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var c=f(i),l=o(u),d=o(y),p=o(M);r.default=function(t,r,n){var a=n||c.default();switch(t){case\"clear\":return{method:t,id:a};case\"count\":return!!(o=\"string\"==typeof r[0]?r[0]:\"default\")&&e(e({},d.increment(o)),{id:a});case\"time\":case\"timeEnd\":var o;return!!(o=\"string\"==typeof r[0]?r[0]:\"default\")&&(\"time\"===t?(l.start(o),!1):e(e({},l.stop(o)),{id:a}));case\"assert\":if(0!==r.length){var i=p.test.apply(p,s([r[0]],r.slice(1)));if(i)return e(e({},i),{id:a})}return!1;case\"error\":return{method:t,id:a,data:r.map((function(t){try{return t.stack||t}catch(r){return t}}))};default:return{method:t,id:a,data:r}}}}(o);var S={},O={};!function(t){var r;t.__esModule=!0,function(t){t[t.infinity=0]=\"infinity\",t[t.minusInfinity=1]=\"minusInfinity\",t[t.minusZero=2]=\"minusZero\"}(r||(r={})),t.default={type:\"Arithmetic\",lookup:Number,shouldTransform:function(t,r){return\"number\"===t&&(r===1/0||r===-1/0||function(t){return 1/t==-1/0}(r))},toSerializable:function(t){return t===1/0?r.infinity:t===-1/0?r.minusInfinity:r.minusZero},fromSerializable:function(t){return t===r.infinity?1/0:t===r.minusInfinity?-1/0:t===r.minusZero?-0:t}}}(O);var w={};!function(t){t.__esModule=!0,t.default={type:\"Function\",lookup:Function,shouldTransform:function(t,r){return\"function\"==typeof r},toSerializable:function(t){var r=\"\";try{r=t.toString().substring(r.indexOf(\"{\")+1,r.lastIndexOf(\"}\"))}catch(t){}return{name:t.name,body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){try{var r=function(){};return\"string\"==typeof t.name&&Object.defineProperty(r,\"name\",{value:t.name,writable:!1}),\"string\"==typeof t.body&&Object.defineProperty(r,\"body\",{value:t.body,writable:!1}),\"string\"==typeof t.proto&&(r.constructor={name:t.proto}),r}catch(r){return t}}}}(w);var A={};!function(t){var r;function e(t){for(var r={},e=0,n=t.attributes;e<n.length;e++){var a=n[e];r[a.name]=a.value}return r}t.__esModule=!0,t.default={type:\"HTMLElement\",shouldTransform:function(t,r){return r&&r.children&&\"string\"==typeof r.innerHTML&&\"string\"==typeof r.tagName},toSerializable:function(t){return{tagName:t.tagName.toLowerCase(),attributes:e(t),innerHTML:t.innerHTML}},fromSerializable:function(t){try{var e=(r||(r=document.implementation.createHTMLDocument(\"sandbox\"))).createElement(t.tagName);e.innerHTML=t.innerHTML;for(var n=0,a=Object.keys(t.attributes);n<a.length;n++){var o=a[n];try{e.setAttribute(o,t.attributes[o])}catch(t){}}return e}catch(r){return t}}}}(A);var j={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.default={type:\"Map\",shouldTransform:function(t,r){return r&&r.constructor&&\"Map\"===r.constructor.name},toSerializable:function(t){var r={};return t.forEach((function(t,e){var n=\"object\"==typeof e?JSON.stringify(e):e;r[n]=t})),{name:\"Map\",body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){var r=t.body,n=e({},r);return\"string\"==typeof t.proto&&(n.constructor={name:t.proto}),n}}}(j);var z={};!function(t){t.__esModule=!0;var r=\"@t\",e=/^#*@(t|r)$/,n=(0,eval)(\"this\"),a=\"function\"==typeof ArrayBuffer,o=\"function\"==typeof Map,i=\"function\"==typeof Set,u=[\"Int8Array\",\"Uint8Array\",\"Uint8ClampedArray\",\"Int16Array\",\"Uint16Array\",\"Int32Array\",\"Uint32Array\",\"Float32Array\",\"Float64Array\"],s=Array.prototype.slice,f={serialize:function(t){return JSON.stringify(t)},deserialize:function(t){return JSON.parse(t)}},c=function(){function t(t,r){this.references=t,this.transforms=r,this.transformsMap=this._makeTransformsMap(),this.circularCandidates=[],this.circularCandidatesDescrs=[],this.circularRefCount=0}return t._createRefMark=function(t){var r=Object.create(null);return r[\"@r\"]=t,r},t.prototype._createCircularCandidate=function(t,r,e){this.circularCandidates.push(t),this.circularCandidatesDescrs.push({parent:r,key:e,refIdx:-1})},t.prototype._applyTransform=function(t,e,n,a){var o=Object.create(null),i=a.toSerializable(t);return\"object\"==typeof i&&this._createCircularCandidate(t,e,n),o[r]=a.type,o.data=this._handleValue((function(){return i}),e,n),o},t.prototype._handleArray=function(t){for(var r=[],e=function(e){r[e]=n._handleValue((function(){return t[e]}),r,e)},n=this,a=0;a<t.length;a++)e(a);return r},t.prototype._handlePlainObject=function(t){var r,n,a=Object.create(null),o=function(r){if(Reflect.has(t,r)){var n=e.test(r)?\"#\"+r:r;a[n]=i._handleValue((function(){return t[r]}),a,n)}},i=this;for(var u in t)o(u);var s=null===(n=null===(r=null==t?void 0:t.__proto__)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;return s&&\"Object\"!==s&&(a.constructor={name:s}),a},t.prototype._handleObject=function(t,r,e){return this._createCircularCandidate(t,r,e),Array.isArray(t)?this._handleArray(t):this._handlePlainObject(t)},t.prototype._ensureCircularReference=function(r){var e=this.circularCandidates.indexOf(r);if(e>-1){var n=this.circularCandidatesDescrs[e];return-1===n.refIdx&&(n.refIdx=n.parent?++this.circularRefCount:0),t._createRefMark(n.refIdx)}return null},t.prototype._handleValue=function(t,r,e){try{var n=t(),a=typeof n,o=\"object\"===a&&null!==n;if(o){var i=this._ensureCircularReference(n);if(i)return i}var u=this._findTransform(a,n);return u?this._applyTransform(n,r,e,u):o?this._handleObject(n,r,e):n}catch(t){try{return this._handleValue((function(){return t instanceof Error?t:new Error(t)}),r,e)}catch(t){return null}}},t.prototype._makeTransformsMap=function(){if(o){var t=new Map;return this.transforms.forEach((function(r){r.lookup&&t.set(r.lookup,r)})),t}},t.prototype._findTransform=function(t,r){if(o&&r&&r.constructor&&(null==(a=this.transformsMap.get(r.constructor))?void 0:a.shouldTransform(t,r)))return a;for(var e=0,n=this.transforms;e<n.length;e++){var a;if((a=n[e]).shouldTransform(t,r))return a}},t.prototype.transform=function(){for(var r=this,e=[this._handleValue((function(){return r.references}),null,null)],n=0,a=this.circularCandidatesDescrs;n<a.length;n++){var o=a[n];o.refIdx>0&&(e[o.refIdx]=o.parent[o.key],o.parent[o.key]=t._createRefMark(o.refIdx))}return e},t}(),l=function(){function t(t,r){this.activeTransformsStack=[],this.visitedRefs=Object.create(null),this.references=t,this.transformMap=r}return t.prototype._handlePlainObject=function(t){var r=Object.create(null);for(var n in\"constructor\"in t&&(t.constructor&&\"string\"==typeof t.constructor.name||(t.constructor={name:\"Object\"})),t)t.hasOwnProperty(n)&&(this._handleValue(t[n],t,n),e.test(n)&&(r[n.substring(1)]=t[n],delete t[n]));for(var a in r)t[a]=r[a]},t.prototype._handleTransformedObject=function(t,e,n){var a=t[r],o=this.transformMap[a];if(!o)throw new Error(\"Can't find transform for \\\"\"+a+'\" type.');this.activeTransformsStack.push(t),this._handleValue(t.data,t,\"data\"),this.activeTransformsStack.pop(),e[n]=o.fromSerializable(t.data)},t.prototype._handleCircularSelfRefDuringTransform=function(t,r,e){var n=this.references;Object.defineProperty(r,e,{val:void 0,configurable:!0,enumerable:!0,get:function(){return void 0===this.val&&(this.val=n[t]),this.val},set:function(t){this.val=t}})},t.prototype._handleCircularRef=function(t,r,e){this.activeTransformsStack.includes(this.references[t])?this._handleCircularSelfRefDuringTransform(t,r,e):(this.visitedRefs[t]||(this.visitedRefs[t]=!0,this._handleValue(this.references[t],this.references,t)),r[e]=this.references[t])},t.prototype._handleValue=function(t,e,n){if(\"object\"==typeof t&&null!==t){var a=t[\"@r\"];if(void 0!==a)this._handleCircularRef(a,e,n);else if(t[r])this._handleTransformedObject(t,e,n);else if(Array.isArray(t))for(var o=0;o<t.length;o++)this._handleValue(t[o],t,o);else this._handlePlainObject(t)}},t.prototype.transform=function(){return this.visitedRefs[0]=!0,this._handleValue(this.references[0],this.references,0),this.references[0]},t}(),d=[{type:\"[[NaN]]\",shouldTransform:function(t,r){return\"number\"===t&&isNaN(r)},toSerializable:function(){return\"\"},fromSerializable:function(){return NaN}},{type:\"[[undefined]]\",shouldTransform:function(t){return\"undefined\"===t},toSerializable:function(){return\"\"},fromSerializable:function(){}},{type:\"[[Date]]\",lookup:Date,shouldTransform:function(t,r){return r instanceof Date},toSerializable:function(t){return t.getTime()},fromSerializable:function(t){var r=new Date;return r.setTime(t),r}},{type:\"[[RegExp]]\",lookup:RegExp,shouldTransform:function(t,r){return r instanceof RegExp},toSerializable:function(t){var r={src:t.source,flags:\"\"};return t.globalThis&&(r.flags+=\"g\"),t.ignoreCase&&(r.flags+=\"i\"),t.multiline&&(r.flags+=\"m\"),r},fromSerializable:function(t){return new RegExp(t.src,t.flags)}},{type:\"[[Error]]\",lookup:Error,shouldTransform:function(t,r){return r instanceof Error},toSerializable:function(t){var r,e;return t.stack||null===(e=(r=Error).captureStackTrace)||void 0===e||e.call(r,t),{name:t.name,message:t.message,stack:t.stack}},fromSerializable:function(t){var r=new(n[t.name]||Error)(t.message);return r.stack=t.stack,r}},{type:\"[[ArrayBuffer]]\",lookup:a&&ArrayBuffer,shouldTransform:function(t,r){return a&&r instanceof ArrayBuffer},toSerializable:function(t){var r=new Int8Array(t);return s.call(r)},fromSerializable:function(t){if(a){var r=new ArrayBuffer(t.length);return new Int8Array(r).set(t),r}return t}},{type:\"[[TypedArray]]\",shouldTransform:function(t,r){if(a)return ArrayBuffer.isView(r)&&!(r instanceof DataView);for(var e=0,o=u;e<o.length;e++){var i=o[e];if(\"function\"==typeof n[i]&&r instanceof n[i])return!0}return!1},toSerializable:function(t){return{ctorName:t.constructor.name,arr:s.call(t)}},fromSerializable:function(t){return\"function\"==typeof n[t.ctorName]?new n[t.ctorName](t.arr):t.arr}},{type:\"[[Map]]\",lookup:o&&Map,shouldTransform:function(t,r){return o&&r instanceof Map},toSerializable:function(t){var r=[];return t.forEach((function(t,e){r.push(e),r.push(t)})),r},fromSerializable:function(t){if(o){for(var r=new Map,e=0;e<t.length;e+=2)r.set(t[e],t[e+1]);return r}for(var n=[],a=0;a<t.length;a+=2)n.push([t[e],t[e+1]]);return n}},{type:\"[[Set]]\",lookup:i&&Set,shouldTransform:function(t,r){return i&&r instanceof Set},toSerializable:function(t){var r=[];return t.forEach((function(t){r.push(t)})),r},fromSerializable:function(t){if(i){for(var r=new Set,e=0;e<t.length;e++)r.add(t[e]);return r}return t}}],p=function(){function t(t){this.transforms=[],this.transformsMap=Object.create(null),this.serializer=t||f,this.addTransforms(d)}return t.prototype.addTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r];if(this.transformsMap[n.type])throw new Error('Transform with type \"'+n.type+'\" was already added.');this.transforms.push(n),this.transformsMap[n.type]=n}return this},t.prototype.removeTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r],a=this.transforms.indexOf(n);a>-1&&this.transforms.splice(a,1),delete this.transformsMap[n.type]}return this},t.prototype.encode=function(t){var r=new c(t,this.transforms).transform();return this.serializer.serialize(r)},t.prototype.decode=function(t){var r=this.serializer.deserialize(t);return new l(r,this.transformsMap).transform()},t}();t.default=p}(z);var E=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};S.__esModule=!0,S.Decode=P=S.Encode=void 0;var k=E(O),C=E(w),D=E(A),I=E(j),N=E(z),R=[D.default,C.default,k.default,I.default],x=new N.default;x.addTransforms(R);var P=S.Encode=function(t){return JSON.parse(x.encode(t))};S.Decode=function(t){return x.decode(JSON.stringify(t))},function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var a=e(n),i=e(o),u=S;r.default=function(t,r,e){void 0===e&&(e=!0);for(var n=t,o={pointers:{},src:{npm:\"https://npmjs.com/package/console-feed\",github:\"https://github.com/samdenty99/console-feed\"}},s=function(t){var a=n[t];n[t]=function(){a.apply(this,arguments);var n=[].slice.call(arguments);setTimeout((function(){var a=i.default(t,n);if(a){var o=a;e&&(o=u.Encode(a)),r(o,a)}}))},o.pointers[t]=a},f=0,c=a.default;f<c.length;f++)s(c[f]);return n.feed=o,n}}(e),r(e)(window.console,(function(t){var r=P(t);parent.postMessage({type:\"console\",codesandbox:!0,log:Array.isArray(r)?r[0]:r,channelId:scope.channelId},\"*\")}));\n";

export { EventEmitter as E, getMessageFromError as a, findStartScriptPackageJson as b, consoleHook as c, fromBundlerFilesToFS as f, generateRandomId as g, readBuffer as r, writeBuffer as w };

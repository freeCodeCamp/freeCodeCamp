"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMachine = void 0;
var xml_js_1 = require("xml-js");
var index_1 = require("./index");
var utils_1 = require("./utils");
var actions = require("./actions");
function getAttribute(element, attribute) {
    return element.attributes ? element.attributes[attribute] : undefined;
}
function indexedRecord(items, identifier) {
    var record = {};
    var identifierFn = (0, utils_1.isString)(identifier)
        ? function (item) { return item[identifier]; }
        : identifier;
    items.forEach(function (item) {
        var key = identifierFn(item);
        record[key] = item;
    });
    return record;
}
function executableContent(elements) {
    var transition = {
        actions: mapActions(elements)
    };
    return transition;
}
function getTargets(targetAttr) {
    // return targetAttr ? [`#${targetAttr}`] : undefined;
    return targetAttr
        ? "".concat(targetAttr).split(/\s+/).map(function (target) { return "#".concat(target); })
        : undefined;
}
function delayToMs(delay) {
    if (!delay) {
        return undefined;
    }
    if (typeof delay === 'number') {
        return delay;
    }
    var millisecondsMatch = delay.match(/(\d+)ms/);
    if (millisecondsMatch) {
        return parseInt(millisecondsMatch[1], 10);
    }
    var secondsMatch = delay.match(/(\d*)(\.?)(\d+)s/);
    if (secondsMatch) {
        var hasDecimal = !!secondsMatch[2];
        if (!hasDecimal) {
            return parseInt(secondsMatch[3], 10) * 1000;
        }
        var secondsPart = !!secondsMatch[1]
            ? parseInt(secondsMatch[1], 10) * 1000
            : 0;
        var millisecondsPart = parseInt(secondsMatch[3].padEnd(3, '0'), 10);
        if (millisecondsPart >= 1000) {
            throw new Error("Can't parse \"".concat(delay, " delay.\""));
        }
        return secondsPart + millisecondsPart;
    }
    throw new Error("Can't parse \"".concat(delay, " delay.\""));
}
var evaluateExecutableContent = function (context, _ev, meta, body) {
    var datamodel = context
        ? Object.keys(context)
            .map(function (key) { return "const ".concat(key, " = context['").concat(key, "'];"); })
            .join('\n')
        : '';
    var scope = ['const _sessionid = "NOT_IMPLEMENTED";', datamodel]
        .filter(Boolean)
        .join('\n');
    var args = ['context', '_event'];
    var fnBody = "\n    ".concat(scope, "\n    ").concat(body, "\n  ");
    var fn = new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0], __read(args), false), [fnBody], false)))();
    return fn(context, meta._event);
};
function createCond(cond) {
    return function (context, _event, meta) {
        return evaluateExecutableContent(context, _event, meta, "return ".concat(cond, ";"));
    };
}
function mapAction(element) {
    var e_1, _a;
    switch (element.name) {
        case 'raise': {
            return actions.raise(element.attributes.event);
        }
        case 'assign': {
            return actions.assign(function (context, e, meta) {
                var fnBody = "\n            return {'".concat(element.attributes.location, "': ").concat(element.attributes.expr, "};\n          ");
                return evaluateExecutableContent(context, e, meta, fnBody);
            });
        }
        case 'send': {
            var _b = element.attributes, event_1 = _b.event, eventexpr_1 = _b.eventexpr, target = _b.target;
            var convertedEvent = void 0;
            var convertedDelay = void 0;
            var params_1 = element.elements &&
                element.elements.reduce(function (acc, child) {
                    if (child.name === 'content') {
                        throw new Error('Conversion of <content/> inside <send/> not implemented.');
                    }
                    return "".concat(acc).concat(child.attributes.name, ":").concat(child.attributes.expr, ",\n");
                }, '');
            if (event_1 && !params_1) {
                convertedEvent = event_1;
            }
            else {
                convertedEvent = function (context, _ev, meta) {
                    var fnBody = "\n              return { type: ".concat(event_1 ? "\"".concat(event_1, "\"") : eventexpr_1, ", ").concat(params_1 ? params_1 : '', " }\n            ");
                    return evaluateExecutableContent(context, _ev, meta, fnBody);
                };
            }
            if ('delay' in element.attributes) {
                convertedDelay = delayToMs(element.attributes.delay);
            }
            else if (element.attributes.delayexpr) {
                convertedDelay = function (context, _ev, meta) {
                    var fnBody = "\n              return (".concat(delayToMs, ")(").concat(element.attributes.delayexpr, ");\n            ");
                    return evaluateExecutableContent(context, _ev, meta, fnBody);
                };
            }
            return actions.send(convertedEvent, {
                delay: convertedDelay,
                to: target
            });
        }
        case 'log': {
            var label = element.attributes.label;
            return actions.log(function (context, e, meta) {
                var fnBody = "\n              return ".concat(element.attributes.expr, ";\n            ");
                return evaluateExecutableContent(context, e, meta, fnBody);
            }, label !== undefined ? String(label) : undefined);
        }
        case 'if': {
            var conds = [];
            var current = {
                cond: createCond(element.attributes.cond),
                actions: []
            };
            try {
                for (var _c = __values(element.elements), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var el = _d.value;
                    if (el.type === 'comment') {
                        continue;
                    }
                    switch (el.name) {
                        case 'elseif':
                            conds.push(current);
                            current = {
                                cond: createCond(el.attributes.cond),
                                actions: []
                            };
                            break;
                        case 'else':
                            conds.push(current);
                            current = { actions: [] };
                            break;
                        default:
                            current.actions.push(mapAction(el));
                            break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            conds.push(current);
            return actions.choose(conds);
        }
        default:
            throw new Error("Conversion of \"".concat(element.name, "\" elements is not implemented yet."));
    }
}
function mapActions(elements) {
    var e_2, _a;
    var mapped = [];
    try {
        for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
            var element = elements_1_1.value;
            if (element.type === 'comment') {
                continue;
            }
            mapped.push(mapAction(element));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return mapped;
}
function toConfig(nodeJson, id, options) {
    var parallel = nodeJson.name === 'parallel';
    var initial = parallel ? undefined : nodeJson.attributes.initial;
    var elements = nodeJson.elements;
    switch (nodeJson.name) {
        case 'history': {
            if (!elements) {
                return {
                    id: id,
                    history: nodeJson.attributes.type || 'shallow'
                };
            }
            var _a = __read(elements.filter(function (element) { return element.name === 'transition'; }), 1), transitionElement = _a[0];
            var target = getAttribute(transitionElement, 'target');
            var history_1 = getAttribute(nodeJson, 'type') || 'shallow';
            return {
                id: id,
                history: history_1,
                target: target ? "#".concat(target) : undefined
            };
        }
        case 'final': {
            return __assign(__assign({}, nodeJson.attributes), { type: 'final' });
        }
        default:
            break;
    }
    if (nodeJson.elements) {
        var stateElements = nodeJson.elements.filter(function (element) {
            return element.name === 'state' ||
                element.name === 'parallel' ||
                element.name === 'final' ||
                element.name === 'history';
        });
        var transitionElements = nodeJson.elements.filter(function (element) { return element.name === 'transition'; });
        var invokeElements = nodeJson.elements.filter(function (element) { return element.name === 'invoke'; });
        var onEntryElement = nodeJson.elements.find(function (element) { return element.name === 'onentry'; });
        var onExitElement = nodeJson.elements.find(function (element) { return element.name === 'onexit'; });
        var states = indexedRecord(stateElements, function (item) { return "".concat(item.attributes.id); });
        var initialElement = !initial
            ? nodeJson.elements.find(function (element) { return element.name === 'initial'; })
            : undefined;
        if (initialElement && initialElement.elements.length) {
            initial = initialElement.elements.find(function (element) { return element.name === 'transition'; }).attributes.target;
        }
        else if (!initialElement && stateElements.length) {
            initial = stateElements[0].attributes.id;
        }
        var on = transitionElements.map(function (value) {
            var event = getAttribute(value, 'event') || '';
            var targets = getAttribute(value, 'target');
            var internal = getAttribute(value, 'type') === 'internal';
            return __assign(__assign(__assign({ event: event, target: getTargets(targets) }, (value.elements ? executableContent(value.elements) : undefined)), (value.attributes && value.attributes.cond
                ? {
                    cond: createCond(value.attributes.cond)
                }
                : undefined)), { internal: internal });
        });
        var onEntry = onEntryElement
            ? mapActions(onEntryElement.elements)
            : undefined;
        var onExit = onExitElement
            ? mapActions(onExitElement.elements)
            : undefined;
        var invoke = invokeElements.map(function (element) {
            if (!['scxml', 'http://www.w3.org/TR/scxml/'].includes(element.attributes.type)) {
                throw new Error('Currently only converting invoke elements of type SCXML is supported.');
            }
            var content = element.elements.find(function (el) { return el.name === 'content'; });
            return scxmlToMachine(content, options);
        });
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign({ id: id }, (initial ? { initial: initial } : undefined)), (parallel ? { type: 'parallel' } : undefined)), (stateElements.length
            ? {
                states: (0, utils_1.mapValues)(states, function (state, key) {
                    return toConfig(state, key, options);
                })
            }
            : undefined)), (transitionElements.length ? { on: on } : undefined)), (onEntry ? { onEntry: onEntry } : undefined)), (onExit ? { onExit: onExit } : undefined)), (invoke.length ? { invoke: invoke } : undefined));
    }
    return { id: id };
}
function scxmlToMachine(scxmlJson, options) {
    var machineElement = scxmlJson.elements.find(function (element) { return element.name === 'scxml'; });
    var dataModelEl = machineElement.elements.filter(function (element) { return element.name === 'datamodel'; })[0];
    var extState = dataModelEl
        ? dataModelEl
            .elements.filter(function (element) { return element.name === 'data'; })
            .reduce(function (acc, element) {
            if (element.attributes.src) {
                throw new Error("Conversion of `src` attribute on datamodel's <data> elements is not supported.");
            }
            acc[element.attributes.id] = element.attributes.expr
                ? // tslint:disable-next-line:no-eval
                    eval("(".concat(element.attributes.expr, ")"))
                : undefined;
            return acc;
        }, {})
        : undefined;
    return (0, index_1.Machine)(__assign(__assign({}, toConfig(machineElement, '(machine)', options)), { context: extState, delimiter: options.delimiter }));
}
function toMachine(xml, options) {
    var json = (0, xml_js_1.xml2js)(xml);
    return scxmlToMachine(json, options);
}
exports.toMachine = toMachine;

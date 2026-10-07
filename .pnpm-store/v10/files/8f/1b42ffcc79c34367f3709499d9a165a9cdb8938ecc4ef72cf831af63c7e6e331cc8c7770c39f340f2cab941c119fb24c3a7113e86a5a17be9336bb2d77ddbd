import * as Classes from "./classes.js";
import { FrequencyClass } from "./core/type/Frequency.js";
import { MidiClass } from "./core/type/Midi.js";
import { TicksClass } from "./core/type/Ticks.js";
import { TimeClass } from "./core/type/Time.js";
import { TransportTimeClass } from "./core/type/TransportTime.js";
import { isDefined, isFunction } from "./core/util/TypeCheck.js";
import { omitFromObject } from "./core/util/Defaults.js";
/**
 * Bind the TimeBaseClass to the context
 */
function bindTypeClass(context, type) {
    return (...args) => new type(context, ...args);
}
/**
 * Return an object with all of the classes bound to the passed in context
 * @param context The context to bind all of the nodes to
 */
export function fromContext(context) {
    const classesWithContext = {};
    Object.keys(omitFromObject(Classes, ["Transport", "Destination", "Draw"])).map((key) => {
        const cls = Classes[key];
        if (isDefined(cls) && isFunction(cls.getDefaults)) {
            classesWithContext[key] = class ToneFromContextNode extends cls {
                get defaultContext() {
                    return context;
                }
            };
        }
        else {
            // otherwise just copy it over
            classesWithContext[key] = Classes[key];
        }
    });
    const toneFromContext = Object.assign(Object.assign({}, classesWithContext), { now: context.now.bind(context), immediate: context.immediate.bind(context), Transport: context.transport, Destination: context.destination, Listener: context.listener, Draw: context.draw, context, 
        // the type functions
        Midi: bindTypeClass(context, MidiClass), Time: bindTypeClass(context, TimeClass), Frequency: bindTypeClass(context, FrequencyClass), Ticks: bindTypeClass(context, TicksClass), TransportTime: bindTypeClass(context, TransportTimeClass) });
    // return the object
    return toneFromContext;
}
//# sourceMappingURL=fromContext.js.map
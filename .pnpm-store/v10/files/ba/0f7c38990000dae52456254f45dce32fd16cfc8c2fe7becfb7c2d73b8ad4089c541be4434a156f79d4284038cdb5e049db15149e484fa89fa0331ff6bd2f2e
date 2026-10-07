import * as Classes from "./classes.js";
import { TransportClass } from "./core/clock/Transport.js";
import { Context } from "./core/context/Context.js";
import { ListenerClass } from "./core/context/Listener.js";
import { DestinationClass } from "./core/context/Destination.js";
import { FrequencyClass } from "./core/type/Frequency.js";
import { MidiClass } from "./core/type/Midi.js";
import { TicksClass } from "./core/type/Ticks.js";
import { TimeClass } from "./core/type/Time.js";
import { TransportTimeClass } from "./core/type/TransportTime.js";
import { isDefined, isFunction } from "./core/util/TypeCheck.js";
import { omitFromObject } from "./core/util/Defaults.js";
import { DrawClass } from "./core/util/Draw.js";

type ClassesWithoutSingletons = Omit<
	typeof Classes,
	"Transport" | "Destination" | "Draw"
>;

/**
 * The exported Tone object. Contains all of the classes that default
 * to the same context and contains a singleton Transport and Destination node.
 */
type ToneObject = {
	Transport: TransportClass;
	Destination: DestinationClass;
	Listener: ListenerClass;
	Draw: DrawClass;
	context: Context;
	now: () => number;
	immediate: () => number;
} & ClassesWithoutSingletons;

/**
 * Bind the TimeBaseClass to the context
 */
function bindTypeClass(context: Context, type) {
	return (...args: unknown[]) => new type(context, ...args);
}

/**
 * Return an object with all of the classes bound to the passed in context
 * @param context The context to bind all of the nodes to
 */
export function fromContext(context: Context): ToneObject {
	const classesWithContext: Partial<ClassesWithoutSingletons> = {};
	Object.keys(
		omitFromObject(Classes, ["Transport", "Destination", "Draw"])
	).map((key) => {
		const cls = Classes[key];
		if (isDefined(cls) && isFunction(cls.getDefaults)) {
			classesWithContext[key] = class ToneFromContextNode extends cls {
				get defaultContext(): Context {
					return context;
				}
			};
		} else {
			// otherwise just copy it over
			classesWithContext[key] = Classes[key];
		}
	});

	const toneFromContext: ToneObject = {
		...(classesWithContext as ClassesWithoutSingletons),
		now: context.now.bind(context),
		immediate: context.immediate.bind(context),
		Transport: context.transport,
		Destination: context.destination,
		Listener: context.listener,
		Draw: context.draw,
		context,
		// the type functions
		Midi: bindTypeClass(context, MidiClass),
		Time: bindTypeClass(context, TimeClass),
		Frequency: bindTypeClass(context, FrequencyClass),
		Ticks: bindTypeClass(context, TicksClass),
		TransportTime: bindTypeClass(context, TransportTimeClass),
	};
	// return the object
	return toneFromContext;
}

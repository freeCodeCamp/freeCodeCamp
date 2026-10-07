import * as Classes from "./classes.js";
import { TransportClass } from "./core/clock/Transport.js";
import { Context } from "./core/context/Context.js";
import { ListenerClass } from "./core/context/Listener.js";
import { DestinationClass } from "./core/context/Destination.js";
import { DrawClass } from "./core/util/Draw.js";
type ClassesWithoutSingletons = Omit<typeof Classes, "Transport" | "Destination" | "Draw">;
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
 * Return an object with all of the classes bound to the passed in context
 * @param context The context to bind all of the nodes to
 */
export declare function fromContext(context: Context): ToneObject;
export {};

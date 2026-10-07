import { Param } from "../core/context/Param.js";
import { Seconds, Time, UnitMap, UnitName } from "../core/type/Units.js";
import { OneShotSource, OneShotSourceOptions } from "../source/OneShotSource.js";
export interface ToneConstantSourceOptions<TypeName extends UnitName> extends OneShotSourceOptions {
    convert: boolean;
    offset: UnitMap[TypeName];
    units: TypeName;
    minValue?: number;
    maxValue?: number;
}
/**
 * Wrapper around the native fire-and-forget ConstantSource.
 * Adds the ability to reschedule the stop method.
 * @category Signal
 */
export declare class ToneConstantSource<TypeName extends UnitName = "number"> extends OneShotSource<ToneConstantSourceOptions<TypeName>> {
    readonly name: string;
    /**
     * The signal generator
     */
    private _source;
    /**
     * The offset of the signal generator
     */
    readonly offset: Param<TypeName>;
    /**
     * @param  offset   The offset value
     */
    constructor(offset: UnitMap[TypeName]);
    constructor(options?: Partial<ToneConstantSourceOptions<TypeName>>);
    static getDefaults(): ToneConstantSourceOptions<any>;
    /**
     * Start the source node at the given time
     * @param  time When to start the source
     */
    start(time?: Time): this;
    protected _stopSource(time?: Seconds): void;
    dispose(): this;
}

import { InstrumentationBase, InstrumentationConfig, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
/** Hapi instrumentation for OpenTelemetry */
export declare class HapiInstrumentation extends InstrumentationBase {
    private _semconvStability;
    constructor(config?: InstrumentationConfig);
    protected init(): InstrumentationNodeModuleDefinition;
    /**
     * Patches the Hapi.server and Hapi.Server functions in order to instrument
     * the server.route, server.ext, and server.register functions via calls to the
     * @function _getServerRoutePatch, @function _getServerExtPatch, and
     * @function _getServerRegisterPatch functions
     * @param original - the original Hapi Server creation function
     */
    private _getServerPatch;
    /**
     * Patches the plugin register function used by the Hapi Server. This function
     * goes through each plugin that is being registered and adds instrumentation
     * via a call to the @function _wrapRegisterHandler function.
     * @param {RegisterFunction<T>} original - the original register function which
     * registers each plugin on the server
     */
    private _getServerRegisterPatch;
    /**
     * Patches the Server.ext function which adds extension methods to the specified
     * point along the request lifecycle. This function accepts the full range of
     * accepted input into the standard Hapi `server.ext` function. For each extension,
     * it adds instrumentation to the handler via a call to the @function _wrapExtMethods
     * function.
     * @param original - the original ext function which adds the extension method to the server
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server extension. Else, signifies that the extension was added directly
     */
    private _getServerExtPatch;
    /**
     * Patches the Server.route function. This function accepts either one or an array
     * of Hapi.ServerRoute objects and adds instrumentation on each route via a call to
     * the @function _wrapRouteHandler function.
     * @param {HapiServerRouteInputMethod} original - the original route function which adds
     * the route to the server
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */
    private _getServerRoutePatch;
    /**
     * Wraps newly registered plugins to add instrumentation to the plugin's clone of
     * the original server. Specifically, wraps the server.route and server.ext functions
     * via calls to @function _getServerRoutePatch and @function _getServerExtPatch
     * @param {Hapi.Plugin<T>} plugin - the new plugin which is being instrumented
     */
    private _wrapRegisterHandler;
    /**
     * Wraps request extension methods to add instrumentation to each new extension handler.
     * Patches each individual extension in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {PatchableExtMethod | PatchableExtMethod[]} method - the request extension
     * handler which is being instrumented
     * @param {Hapi.ServerRequestExtType} extPoint - the point in the Hapi request lifecycle
     * which this extension targets
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */
    private _wrapExtMethods;
    /**
     * Patches each individual route handler method in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {PatchableServerRoute} route - the route handler which is being instrumented
     * @param {string} [pluginName] - if present, represents the name of the plugin responsible
     * for adding this server route. Else, signifies that the route was added directly
     */
    private _wrapRouteHandler;
}
//# sourceMappingURL=instrumentation.d.ts.map
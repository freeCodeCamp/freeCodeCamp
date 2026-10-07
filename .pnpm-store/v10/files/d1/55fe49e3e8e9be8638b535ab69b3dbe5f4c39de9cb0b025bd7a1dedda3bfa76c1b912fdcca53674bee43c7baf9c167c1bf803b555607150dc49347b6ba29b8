/**
 * Normalize some key of the client config to an async provider.
 * @internal
 *
 * @param configKey - the key to look up in config.
 * @param canonicalEndpointParamKey - this is the name the EndpointRuleSet uses.
 *                                    it will most likely not contain the config
 *                                    value, but we use it as a fallback.
 * @param config - container of the config values.
 *
 * @returns async function that will resolve with the value.
 */
export declare const createConfigValueProvider: <Config extends Record<string, unknown>>(configKey: string, canonicalEndpointParamKey: string, config: Config) => () => Promise<any>;

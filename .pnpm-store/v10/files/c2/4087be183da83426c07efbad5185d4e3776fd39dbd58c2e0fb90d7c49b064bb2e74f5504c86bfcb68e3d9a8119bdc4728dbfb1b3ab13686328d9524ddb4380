import { getEndpointProperty } from "./getEndpointProperty";
export const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options),
}), {});

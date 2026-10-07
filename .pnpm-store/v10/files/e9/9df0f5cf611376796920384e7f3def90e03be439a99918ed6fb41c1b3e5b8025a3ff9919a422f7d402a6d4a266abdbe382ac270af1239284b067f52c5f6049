import { EndpointError } from "../types";
import { evaluateExpression } from "./evaluateExpression";
export const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

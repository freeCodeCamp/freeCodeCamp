import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";
export const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
export const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
export function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

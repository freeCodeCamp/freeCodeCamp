import { createInvalidStateError } from './invalid-state-error';
export const createGetNativeContext = (contextStore) => {
    return (context) => {
        const nativeContext = contextStore.get(context);
        if (nativeContext === undefined) {
            throw createInvalidStateError();
        }
        return (nativeContext);
    };
};
//# sourceMappingURL=get-native-context.js.map
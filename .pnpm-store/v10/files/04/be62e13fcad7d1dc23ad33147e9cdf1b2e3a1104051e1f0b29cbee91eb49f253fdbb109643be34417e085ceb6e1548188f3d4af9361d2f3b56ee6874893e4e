import { TConstructor } from '../types';

const handler = {
    construct(): any {
        return handler;
    }
};

export const isConstructible = (constructible: TConstructor): boolean => {
    try {
        const proxy = new Proxy(constructible, handler);

        new proxy(); // tslint:disable-line:no-unused-expression
    } catch {
        return false;
    }

    return true;
};

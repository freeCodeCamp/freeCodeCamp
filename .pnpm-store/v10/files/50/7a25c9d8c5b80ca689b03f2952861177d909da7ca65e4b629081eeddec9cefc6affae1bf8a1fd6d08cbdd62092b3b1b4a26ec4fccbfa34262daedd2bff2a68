import { TTestIsSecureContextSupportFactory } from '../types';

export const createTestIsSecureContextSupport: TTestIsSecureContextSupportFactory = (window) => {
    return () => window !== null && window.hasOwnProperty('isSecureContext');
};

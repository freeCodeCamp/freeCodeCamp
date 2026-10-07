import { usePayPal } from "./usePayPal";
import type { PayPalState } from "../context/PayPalProviderContext";
/**
 * Gets the mocked usePayPal function.
 * IMPORTANT: The calling test file must have `jest.mock("./usePayPal")` at the top.
 */
export declare const getMockUsePayPal: () => jest.MockedFunction<typeof usePayPal>;
/**
 * Override type that allows partial PayPalState with relaxed sdkInstance typing.
 * This accommodates mock SDK instances that don't implement the full SdkInstance interface.
 */
type MockPayPalContextOverrides = Omit<Partial<PayPalState>, "sdkInstance"> & {
    sdkInstance?: any;
};
/**
 * Creates a mock return value for usePayPal with sensible defaults.
 * Only specify the properties you want to override.
 */
export declare function createMockPayPalContext(overrides?: MockPayPalContextOverrides): PayPalState;
/**
 * Sets up mockUsePayPal with the given overrides.
 * IMPORTANT: The calling test file must have `jest.mock("./usePayPal")` at the top.
 */
export declare function mockPayPalContext(overrides?: MockPayPalContextOverrides): void;
export declare const mockPayPalPending: () => void;
export declare const mockPayPalRejected: () => void;
export declare const mockPayPalNotHydrated: () => void;
export {};

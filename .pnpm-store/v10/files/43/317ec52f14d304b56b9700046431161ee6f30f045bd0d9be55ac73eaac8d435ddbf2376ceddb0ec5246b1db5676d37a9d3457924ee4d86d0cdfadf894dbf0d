import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import type { PayPalButtonOnError } from "@paypal/paypal-js";
/**
 * This component serves as an error boundary for the PayPalButtons component.
 * It catches any errors that occur during the rendering of the PayPalButtons
 * and provides an onError callback.
 */
interface PayPalButtonsErrorBoundaryProps {
    onError?: PayPalButtonOnError;
    children: ReactNode;
}
interface PayPalButtonsErrorBoundaryState {
    hasError: boolean;
}
export declare class PayPalButtonsErrorBoundary extends Component<PayPalButtonsErrorBoundaryProps, PayPalButtonsErrorBoundaryState> {
    constructor(props: PayPalButtonsErrorBoundaryProps);
    static getDerivedStateFromError(): PayPalButtonsErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): ReactNode;
}
export {};

import { ActionsUnion } from "./types";
import type { GatsbyCLIStore } from "./";
type DiagnosticsMiddleware = (action: ActionsUnion) => void;
export type AdditionalDiagnosticsOutputHandler = () => string;
export declare function registerAdditionalDiagnosticOutputHandler(handler: AdditionalDiagnosticsOutputHandler): void;
export declare function createStructuredLoggingDiagnosticsMiddleware(getStore: () => GatsbyCLIStore): DiagnosticsMiddleware;
export {};

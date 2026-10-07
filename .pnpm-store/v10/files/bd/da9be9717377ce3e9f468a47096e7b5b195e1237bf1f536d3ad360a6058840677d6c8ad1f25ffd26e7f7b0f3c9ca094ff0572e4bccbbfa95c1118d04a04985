import type { InsightsClient, InsightsEvent as _InsightsEvent, InsightsMethod, InsightsMethodMap, InternalMiddleware } from '../types';
type ProvidedInsightsClient = InsightsClient | null | undefined;
export type InsightsEvent<TMethod extends InsightsMethod = InsightsMethod> = _InsightsEvent<TMethod>;
export type InsightsProps<TInsightsClient extends ProvidedInsightsClient = ProvidedInsightsClient> = {
    insightsClient?: TInsightsClient;
    insightsInitParams?: Partial<InsightsMethodMap['init'][0][0]>;
    onEvent?: (event: InsightsEvent, insightsClient: TInsightsClient) => void;
};
export type InsightsClientWithGlobals = InsightsClient & {
    shouldAddScript?: boolean;
    version?: string;
};
export type CreateInsightsMiddleware = typeof createInsightsMiddleware;
export declare function createInsightsMiddleware<TInsightsClient extends ProvidedInsightsClient>(props?: InsightsProps<TInsightsClient>): InternalMiddleware;
export {};

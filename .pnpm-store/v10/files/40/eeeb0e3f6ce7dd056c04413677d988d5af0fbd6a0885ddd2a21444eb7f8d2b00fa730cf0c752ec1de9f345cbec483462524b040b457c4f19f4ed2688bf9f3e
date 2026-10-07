
import { h } from 'preact';
import type { InsightsEvent } from '../../middlewares/createInsightsMiddleware';
import type { InsightsClient } from '../../types';
export type InsightsEventHandlerOptions = {
    insights?: InsightsClient;
    sendEvent: (event: InsightsEvent) => void;
};
export declare const createInsightsEventHandler: ({ insights, sendEvent }: InsightsEventHandlerOptions) => (event: MouseEvent) => void;
/**
 * @deprecated use `sendEvent` directly instead
 */
export default function withInsightsListener(BaseComponent: any): (props: {
    [key: string]: any;
} & InsightsEventHandlerOptions) => h.JSX.Element;

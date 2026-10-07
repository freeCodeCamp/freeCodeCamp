import type { Connector, WidgetRenderState } from '../../types';
export type RelevantSortConnectorParams = Record<string, unknown>;
type Refine = (relevancyStrictness: number | undefined) => void;
export type RelevantSortRenderState = {
    /**
     * Indicates if it has appliedRelevancyStrictness greater than zero
     */
    isRelevantSorted: boolean;
    /**
     * Indicates if the results come from a virtual replica
     */
    isVirtualReplica: boolean;
    /**
     * Indicates if search state can be refined
     */
    canRefine: boolean;
    /**
     * Sets the value as relevancyStrictness and trigger a new search
     */
    refine: Refine;
};
export type RelevantSortWidgetDescription = {
    $$type: 'ais.relevantSort';
    renderState: RelevantSortRenderState;
    indexRenderState: {
        relevantSort: WidgetRenderState<RelevantSortRenderState, RelevantSortConnectorParams>;
    };
    indexUiState: {
        relevantSort: number;
    };
};
export type RelevantSortConnector = Connector<RelevantSortWidgetDescription, RelevantSortConnectorParams>;
declare const connectRelevantSort: RelevantSortConnector;
export default connectRelevantSort;

import { Scope, ScopeData } from '../scope';
import { Event } from '../types/event';
/**
 * Applies data from the scope to the event and runs all event processors on it.
 */
export declare function applyScopeDataToEvent(event: Event, data: ScopeData): void;
/** Merge data of two scopes together. */
export declare function mergeScopeData(data: ScopeData, mergeData: ScopeData): void;
/**
 * Merges certain scope data. Undefined values will overwrite any existing values.
 * Exported only for tests.
 */
export declare function mergeAndOverwriteScopeData<Prop extends 'extra' | 'tags' | 'attributes' | 'user' | 'contexts' | 'sdkProcessingMetadata', Data extends ScopeData>(data: Data, prop: Prop, mergeVal: Data[Prop]): void;
/** Exported only for tests */
export declare function mergeArray<Prop extends 'breadcrumbs' | 'fingerprint'>(event: Event, prop: Prop, mergeVal: ScopeData[Prop]): void;
/**
 * Get the scope data for the current scope after merging with the
 * global scope and isolation scope.
 *
 * @param currentScope - The current scope.
 * @returns The scope data.
 */
export declare function getCombinedScopeData(isolationScope: Scope | undefined, currentScope: Scope | undefined): ScopeData;
//# sourceMappingURL=scopeData.d.ts.map

/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  GrowthBook,
  GrowthBookClient,
  StickyBucketService,
  UserScopedGrowthBook,
} from "..";
import { ConditionInterface, ParentConditionInterface } from "./mongrule";

declare global {
  interface Window {
    _growthbook?: GrowthBook;
  }
}

export type VariationMeta = {
  passthrough?: boolean;
  key?: string;
  name?: string;
};

export type FeatureRule<T = any> = {
  id?: string;
  condition?: ConditionInterface;
  parentConditions?: ParentConditionInterface[];
  force?: T;
  variations?: T[];
  weights?: number[];
  key?: string;
  hashAttribute?: string;
  fallbackAttribute?: string;
  hashVersion?: number;
  disableStickyBucketing?: boolean;
  bucketVersion?: number;
  minBucketVersion?: number;
  range?: VariationRange;
  coverage?: number;
  /** @deprecated */
  namespace?: [string, number, number];
  ranges?: VariationRange[];
  meta?: VariationMeta[];
  filters?: Filter[];
  seed?: string;
  name?: string;
  phase?: string;
  tracks?: Array<{
    experiment: Experiment<T>;
    result: Result<T>;
  }>;
};

export interface FeatureDefinition<T = any> {
  defaultValue?: T;
  rules?: FeatureRule<T>[];
}

export type FeatureResultSource =
  | "unknownFeature"
  | "defaultValue"
  | "force"
  | "override"
  | "experiment"
  | "prerequisite"
  | "cyclicPrerequisite";

export interface FeatureResult<T = any> {
  value: T | null;
  source: FeatureResultSource;
  on: boolean;
  off: boolean;
  ruleId: string;
  experiment?: Experiment<T>;
  experimentResult?: Result<T>;
}

/** @deprecated */
export type ExperimentStatus = "draft" | "running" | "stopped";

export type UrlTargetType = "regex" | "simple";

export type UrlTarget = {
  include: boolean;
  type: UrlTargetType;
  pattern: string;
};

export type Experiment<T> = {
  key: string;
  variations: [T, T, ...T[]];
  ranges?: VariationRange[];
  meta?: VariationMeta[];
  filters?: Filter[];
  seed?: string;
  name?: string;
  phase?: string;
  urlPatterns?: UrlTarget[];
  weights?: number[];
  condition?: ConditionInterface;
  parentConditions?: ParentConditionInterface[];
  coverage?: number;
  include?: () => boolean;
  /** @deprecated */
  namespace?: [string, number, number];
  force?: number;
  hashAttribute?: string;
  fallbackAttribute?: string;
  hashVersion?: number;
  disableStickyBucketing?: boolean;
  bucketVersion?: number;
  minBucketVersion?: number;
  active?: boolean;
  persistQueryString?: boolean;
  /** @deprecated */
  status?: ExperimentStatus;
  /** @deprecated */
  url?: RegExp;
  /** @deprecated */
  groups?: string[];
};

export type AutoExperimentChangeType = "redirect" | "visual" | "unknown";

export type AutoExperiment<T = AutoExperimentVariation> = Experiment<T> & {
  changeId?: string;
  // If true, require the experiment to be manually triggered
  manual?: boolean;
};

export type ExperimentOverride = {
  condition?: ConditionInterface;
  weights?: number[];
  active?: boolean;
  status?: ExperimentStatus;
  force?: number;
  coverage?: number;
  groups?: string[];
  namespace?: [string, number, number];
  url?: RegExp | string;
};

export interface Result<T> {
  value: T;
  variationId: number;
  key: string;
  name?: string;
  bucket?: number;
  passthrough?: boolean;
  inExperiment: boolean;
  hashUsed?: boolean;
  hashAttribute: string;
  hashValue: string;
  featureId: string | null;
  stickyBucketUsed?: boolean;
}

export type Attributes = Record<string, any>;

export interface TrackingData {
  experiment: Experiment<any>;
  result: Result<any>;
}

export interface TrackingDataWithUser {
  experiment: Experiment<any>;
  result: Result<any>;
  user: UserContext;
}

export type TrackingCallback = (
  experiment: Experiment<any>,
  result: Result<any>,
) => Promise<void> | void;

export type TrackingCallbackWithUser = (
  experiment: Experiment<any>,
  result: Result<any>,
  user: UserContext,
) => Promise<void> | void;

export type FeatureUsageCallback = (
  key: string,
  result: FeatureResult<any>,
) => void;

export type FeatureUsageCallbackWithUser = (
  key: string,
  result: FeatureResult<any>,
  user: UserContext,
) => void;

export type Plugin = (
  gb: GrowthBook | UserScopedGrowthBook | GrowthBookClient,
) => void;

export type EventProperties = Record<string, unknown>;
export type EventLogger = (
  eventName: string,
  properties: EventProperties,
  userContext: UserContext,
) => void | Promise<void>;

export type NavigateCallback = (url: string) => void | Promise<void>;

export type ApplyDomChangesCallback = (
  changes: AutoExperimentVariation,
) => () => void;

export type RenderFunction = () => void;

// Constructor Options
export type Options = {
  enabled?: boolean;
  attributes?: Attributes;
  url?: string;
  features?: Record<string, FeatureDefinition>;
  experiments?: AutoExperiment[];
  forcedVariations?: Record<string, number>;
  forcedFeatureValues?: Map<string, any>;
  attributeOverrides?: Attributes;
  blockedChangeIds?: string[];
  disableVisualExperiments?: boolean;
  disableJsInjection?: boolean;
  jsInjectionNonce?: string;
  disableUrlRedirectExperiments?: boolean;
  disableCrossOriginUrlRedirectExperiments?: boolean;
  disableExperimentsOnLoad?: boolean;
  stickyBucketAssignmentDocs?: Record<
    StickyAttributeKey,
    StickyAssignmentsDocument
  >;
  stickyBucketService?: StickyBucketService;
  debug?: boolean;
  log?: (msg: string, ctx: any) => void;
  qaMode?: boolean;
  /** @deprecated */
  backgroundSync?: boolean;
  /** @deprecated */
  subscribeToChanges?: boolean;
  enableDevMode?: boolean;
  disableCache?: boolean;
  /** @deprecated */
  disableDevTools?: boolean;
  trackingCallback?: TrackingCallback;
  onFeatureUsage?: FeatureUsageCallback;
  eventLogger?: EventLogger;
  cacheKeyAttributes?: (keyof Attributes)[];
  /** @deprecated */
  user?: {
    id?: string;
    anonId?: string;
    [key: string]: string | undefined;
  };
  /** @deprecated */
  overrides?: Record<string, ExperimentOverride>;
  /** @deprecated */
  groups?: Record<string, boolean>;
  apiHost?: string;
  streamingHost?: string;
  apiHostRequestHeaders?: Record<string, string>;
  streamingHostRequestHeaders?: Record<string, string>;
  clientKey?: string;
  renderer?: null | RenderFunction;
  decryptionKey?: string;
  remoteEval?: boolean;
  navigate?: NavigateCallback;
  navigateDelay?: number;
  maxNavigateDelay?: number;
  /** @deprecated */
  antiFlicker?: boolean;
  /** @deprecated */
  antiFlickerTimeout?: number;
  applyDomChangesCallback?: ApplyDomChangesCallback;
  savedGroups?: SavedGroupsValues;
  plugins?: Plugin[];
};

export type ClientOptions = {
  enabled?: boolean;
  debug?: boolean;
  globalAttributes?: Attributes;
  forcedVariations?: Record<string, number>;
  forcedFeatureValues?: Map<string, any>;
  log?: (msg: string, ctx: any) => void;
  qaMode?: boolean;
  disableCache?: boolean;
  trackingCallback?: TrackingCallbackWithUser;
  onFeatureUsage?: (
    key: string,
    result: FeatureResult<any>,
    user: UserContext,
  ) => void;
  eventLogger?: EventLogger;
  apiHost?: string;
  streamingHost?: string;
  apiHostRequestHeaders?: Record<string, string>;
  streamingHostRequestHeaders?: Record<string, string>;
  clientKey?: string;
  decryptionKey?: string;
  savedGroups?: SavedGroupsValues;
  plugins?: Plugin[];
};

// Contexts
export type GlobalContext = {
  log: (msg: string, ctx: any) => void;
  features?: FeatureDefinitions;
  experiments?: AutoExperiment[];
  enabled?: boolean;
  qaMode?: boolean;
  savedGroups?: SavedGroupsValues;
  forcedVariations?: Record<string, number>;
  forcedFeatureValues?: Map<string, any>;
  trackingCallback?: TrackingCallbackWithUser;
  onFeatureUsage?: FeatureUsageCallbackWithUser;
  onExperimentEval?: (experiment: Experiment<any>, result: Result<any>) => void;
  saveDeferredTrack?: (data: TrackingData) => void;
  recordChangeId?: (changeId: string) => void;
  eventLogger?: EventLogger;

  /** @deprecated */
  overrides?: Record<string, ExperimentOverride>;
  /** @deprecated */
  groups?: Record<string, boolean>;
  /** @deprecated */
  user?: {
    id?: string;
    anonId?: string;
    [key: string]: string | undefined;
  };
};

// Some global fields can be overridden by the user, others are always user-level
export type UserContext = {
  enabled?: boolean;
  qaMode?: boolean;
  enableDevMode?: boolean;
  attributes?: Attributes;
  url?: string;
  blockedChangeIds?: string[];
  stickyBucketAssignmentDocs?: Record<
    StickyAttributeKey,
    StickyAssignmentsDocument
  >;
  saveStickyBucketAssignmentDoc?: (
    doc: StickyAssignmentsDocument,
  ) => Promise<unknown>;
  forcedVariations?: Record<string, number>;
  forcedFeatureValues?: Map<string, any>;
  attributeOverrides?: Attributes;
  trackingCallback?: TrackingCallback;
  onFeatureUsage?: FeatureUsageCallback;
  trackedExperiments?: Set<string>;
  trackedFeatureUsage?: Record<string, string>;
  devLogs?: LogUnion[];
};

export type StackContext = {
  id?: string;
  evaluatedFeatures: Set<string>;
};

export type EvalContext = {
  global: GlobalContext;
  user: UserContext;
  stack: StackContext;
};

export type PrefetchOptions = Pick<
  Options,
  | "decryptionKey"
  | "apiHost"
  | "apiHostRequestHeaders"
  | "streamingHost"
  | "streamingHostRequestHeaders"
> & {
  clientKey: string;
  streaming?: boolean;
  skipCache?: boolean;
};

export type SubscriptionFunction = (
  experiment: Experiment<any>,
  result: Result<any>,
) => void;

export type VariationRange = [number, number];

export interface InitResponse {
  // If a payload was set
  success: boolean;
  // Where the payload came from, if set
  source: "init" | "cache" | "network" | "error" | "timeout";
  // If the payload could not be set (success = false), this will hold the fetch error
  error?: Error;
}

export interface FetchResponse {
  data: FeatureApiResponse | null;
  success: boolean;
  source: "cache" | "network" | "error" | "timeout";
  error?: Error;
}

export type JSONValue =
  | null
  | number
  | string
  | boolean
  | Array<JSONValue>
  | Record<string, unknown>
  | { [key: string]: JSONValue };

export type WidenPrimitives<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T;

export type DOMMutation = {
  selector: string;
  action: string;
  attribute: string;
  value?: string;
  parentSelector?: string;
  insertBeforeSelector?: string;
};

export type AutoExperimentVariation = {
  domMutations?: DOMMutation[];
  css?: string;
  js?: string;
  urlRedirect?: string;
};

export type FeatureDefinitions = Record<string, FeatureDefinition>;

export type FeatureApiResponse = {
  features?: FeatureDefinitions;
  dateUpdated?: string;
  encryptedFeatures?: string;
  experiments?: AutoExperiment[];
  encryptedExperiments?: string;
  savedGroups?: SavedGroupsValues;
  encryptedSavedGroups?: string;
};

// Alias
export type GrowthBookPayload = FeatureApiResponse;

// Polyfills required for non-standard browser environments (ReactNative, Node, etc.)
// These are typed as `any` since polyfills like `node-fetch` are not 100% compatible with native types
export type Polyfills = {
  fetch: any;

  SubtleCrypto: any;

  EventSource: any;
  localStorage?: LocalStorageCompat;
};

export type Helpers = {
  fetchFeaturesCall: ({
    host,
    clientKey,
    headers,
  }: {
    host: string;
    clientKey: string;
    headers?: Record<string, string>;
  }) => Promise<Response>;
  fetchRemoteEvalCall: ({
    host,
    clientKey,
    payload,
    headers,
  }: {
    host: string;
    clientKey: string;

    payload: any;
    headers?: Record<string, string>;
  }) => Promise<Response>;
  eventSourceCall: ({
    host,
    clientKey,
    headers,
  }: {
    host: string;
    clientKey: string;
    headers?: Record<string, string>;
  }) => EventSource;
  startIdleListener: () => (() => void) | void;
  stopIdleListener: () => void;
};

export interface LocalStorageCompat {
  getItem(key: string): string | null | Promise<string | null>;
  setItem(key: string, value: string): void | Promise<void>;
}

export type CacheSettings = {
  backgroundSync: boolean;
  cacheKey: string;
  staleTTL: number;
  maxAge: number;
  maxEntries: number;
  disableIdleStreams: boolean;
  idleStreamInterval: number;
  disableCache: boolean;
};

export type ApiHost = string;
export type ClientKey = string;

export type InitOptions = {
  timeout?: number;
  skipCache?: boolean;
  payload?: FeatureApiResponse;
  streaming?: boolean;
  cacheSettings?: CacheSettings;
};

export type InitSyncOptions = {
  payload: FeatureApiResponse;
  streaming?: boolean;
};

export type LoadFeaturesOptions = {
  /** @deprecated */
  autoRefresh?: boolean;
  timeout?: number;
  skipCache?: boolean;
};

export type RefreshFeaturesOptions = {
  timeout?: number;
  skipCache?: boolean;
};

export type DestroyOptions = {
  destroyAllStreams?: boolean;
};

export interface Filter {
  // Override the hashAttribute used for this filter
  attribute?: string;
  // The hash seed
  seed: string;
  // The hashing version to use
  hashVersion: number;
  // Only include these resulting ranges
  ranges: VariationRange[];
}

export type StickyAttributeKey = string; // `${attributeName}||${attributeValue}`
export type StickyExperimentKey = string; // `${experimentId}__{version}`
export type StickyAssignments = Record<StickyExperimentKey, string>;
export interface StickyAssignmentsDocument {
  attributeName: string;
  attributeValue: string;
  assignments: StickyAssignments;
}

export type SavedGroupsValues = Record<string, (string | number)[]>;

export type BaseLog = {
  timestamp: string;
};

export type EventLog = BaseLog & {
  logType: "event";
  eventName: string;
  properties?: Record<string, unknown>;
};
export type ExperimentLog<T> = BaseLog & {
  logType: "experiment";
  experiment: Experiment<T>;
  result: Result<T>;
};
export type FeatureLog = BaseLog & {
  logType: "feature";
  featureKey: string;
  result: FeatureResult;
};

export type LogUnion = EventLog | ExperimentLog<any> | FeatureLog;

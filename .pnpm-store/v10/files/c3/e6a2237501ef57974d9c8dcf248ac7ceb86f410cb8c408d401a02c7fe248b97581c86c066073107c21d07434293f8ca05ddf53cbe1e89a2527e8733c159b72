import * as React from "react";
import type { Experiment, Result, FeatureResult, JSONValue, FeatureDefinition, Context, WidenPrimitives } from "@growthbook/growthbook";
import { GrowthBook } from "@growthbook/growthbook";
export type GrowthBookContextValue = {
    growthbook: GrowthBook;
};
export interface WithRunExperimentProps {
    runExperiment: <T>(exp: Experiment<T>) => Result<T>;
}
/** @deprecated */
export type GrowthBookSSRData = {
    attributes: Record<string, any>;
    features: Record<string, FeatureDefinition>;
};
export declare const GrowthBookContext: React.Context<GrowthBookContextValue>;
/** @deprecated */
export declare function getGrowthBookSSRData(context: Context): Promise<GrowthBookSSRData>;
/** @deprecated */
export declare function useGrowthBookSSR(data: GrowthBookSSRData): void;
export declare function useExperiment<T>(exp: Experiment<T>): Result<T>;
export declare function useFeature<T extends JSONValue = any>(id: string): FeatureResult<T | null>;
export declare function useFeatureIsOn<AppFeatures extends Record<string, any> = Record<string, any>>(id: string & keyof AppFeatures): boolean;
export declare function useFeatureValue<T extends JSONValue = any>(id: string, fallback: T): WidenPrimitives<T>;
export declare function useGrowthBook<AppFeatures extends Record<string, any> = Record<string, any>>(): GrowthBook<AppFeatures>;
export declare function FeaturesReady({ children, timeout, fallback, }: {
    children: React.ReactNode;
    timeout?: number;
    fallback?: React.ReactNode;
}): React.ReactElement;
export declare function IfFeatureEnabled({ children, feature, }: {
    children: React.ReactNode;
    feature: string;
}): React.ReactElement | null;
export declare function FeatureString(props: {
    default: string;
    feature: string;
}): React.ReactElement;
export declare const withRunExperiment: {
    <P extends WithRunExperimentProps>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof WithRunExperimentProps>>;
    displayName: string;
};
export declare const GrowthBookProvider: React.FC<React.PropsWithChildren<{
    growthbook: GrowthBook;
}>>;
//# sourceMappingURL=GrowthBookReact.d.ts.map
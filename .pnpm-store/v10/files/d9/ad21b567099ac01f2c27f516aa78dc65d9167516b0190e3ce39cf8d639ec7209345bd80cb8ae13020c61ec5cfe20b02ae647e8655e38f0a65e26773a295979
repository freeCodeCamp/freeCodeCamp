import { ClientTransporterOptions } from '@algolia/client-common';
import { CreateClient } from '@algolia/client-common';
import { RequestOptions } from '@algolia/transporter';
import { SearchOptions } from '@algolia/client-search';
import { Transporter } from '@algolia/transporter';

export declare type ABTest = {
    /**
     * The ab test name.
     */
    readonly name: string;
    /**
     * The ab test list of variants.
     */
    readonly variants: readonly Variant[];
    /**
     * The ab test end date, if any.
     */
    readonly endAt: string;
};

export declare const addABTest: (base: AnalyticsClient) => (abTest: ABTest, requestOptions?: RequestOptions | undefined) => Readonly<Promise<AddABTestResponse>>;

export declare type AddABTestResponse = {
    /**
     * The ab test unique identifier.
     */
    abTestID: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The index name where the ab test is attached to.
     */
    index: string;
};

export declare type AnalyticsClient = {
    /**
     * The application id.
     */
    readonly appId: string;
    /**
     * The underlying transporter.
     */
    readonly transporter: Transporter;
};

export declare type AnalyticsClientOptions = {
    /**
     * The application id.
     */
    readonly appId: string;
    /**
     * The api key.
     */
    readonly apiKey: string;
    /**
     * The prefered region.
     */
    readonly region?: 'de' | 'us';
};

export declare const createAnalyticsClient: CreateClient<AnalyticsClient, AnalyticsClientOptions & ClientTransporterOptions>;

export declare const deleteABTest: (base: AnalyticsClient) => (abTestID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<DeleteABTestResponse>>;

export declare type DeleteABTestResponse = {
    /**
     * The ab test unique identifier.
     */
    abTestID: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The index name where the ab test was attached to.
     */
    index: string;
};

export declare const getABTest: (base: AnalyticsClient) => (abTestID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<GetABTestResponse>>;

export declare type GetABTestResponse = {
    /**
     * The ab test name.
     */
    name: string;
    /**
     * The ab test status.
     */
    status: string;
    /**
     * The ab test list of variants.
     */
    variants: VariantResponse[];
    /**
     * The ab test end date, if any.
     */
    endAt: string;
    /**
     * The ab test created date, if any.
     */
    createdAt: string;
    /**
     * The ab test updated date.
     */
    updatedAt: string;
    /**
     * The ab test unique identifier.
     */
    abTestID: number;
    /**
     * The ab test significance based on click data. Should be higher than 0.95 to be considered significant - no matter which variant is winning.
     */
    clickSignificance: number;
    /**
     *
     * The ab test significance based on conversion data. Should be higher than 0.95 to be considered significant - no matter which variant is winning.
     */
    conversionSignificance: number;
};

export declare const getABTests: (base: AnalyticsClient) => (requestOptions?: (RequestOptions & GetABTestsOptions) | undefined) => Readonly<Promise<GetABTestsResponse>>;

export declare type GetABTestsOptions = {
    /**
     * The number of ab tests to skip from the biginning of the list.
     */
    readonly offset?: number;
    /**
     *  The limit of the number of ab tests returned.
     */
    readonly limit?: number;
    /**
     *  Filters the returned ab tests by any indices starting with the
     *  provided prefix that are assigned to either variant of an ab test.
     */
    readonly indexPrefix?: string;
    /**
     *  Filters the returned ab tests by any indices ending with the
     *  provided suffix that are assigned to either variant of an ab test.
     */
    readonly indexSuffix?: string;
};

export declare type GetABTestsResponse = {
    /**
     * The number of ab tests within this response.
     */
    count: number;
    /**
     * The total of ab tests.
     */
    total: number;
    /**
     * The list of ab tests.
     */
    abtests: GetABTestResponse[] | null;
};

export declare const stopABTest: (base: AnalyticsClient) => (abTestID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<StopABTestResponse>>;

export declare type StopABTestResponse = {
    /**
     * The ab test unique identifier.
     */
    abTestID: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The index name where the ab test is attached to.
     */
    index: string;
};

export declare type Variant = {
    /**
     * The index name.
     */
    readonly index: string;
    /**
     * Description of the variant. Useful when seing the results in the dashboard or via the API.
     */
    readonly description?: string;
    /**
     * Percentage of the traffic that should be going to the variant. The sum of the percentage should be equal to 100.
     */
    readonly trafficPercentage: number;
    /**
     * The search parameters.
     */
    readonly customSearchParameters?: SearchOptions;
};

export declare type VariantResponse = Variant & {
    /**
     * Average click position for the variant.
     */
    averageClickPosition?: number;
    /**
     * Distinct click count for the variant.
     */
    clickCount?: number;
    /**
     * Click through rate for the variant.
     */
    clickThroughRate?: number;
    /**
     * Click through rate for the variant.
     */
    conversionCount?: number;
    /**
     * Distinct conversion count for the variant.
     */
    conversionRate?: number;
    /**
     * No result count.
     */
    noResultCount?: number;
    /**
     * Tracked search count.
     */
    trackedSearchCount?: number;
    /**
     * Search count.
     */
    searchCount?: number;
    /**
     * User count.
     */
    userCount?: number;
    /**
     * Count of the tracked searches attributed to outlier traffic that were removed from the A/B test.
     */
    outlierTrackedSearchesCount?: number;
    /**
     * Count of users attributed to outlier traffic that were removed from the A/B test.
     */
    outlierUsersCount?: number;
    /**
     * The search parameters.
     */
    customSearchParameters?: SearchOptions;
};

export { }

import { RequestOptions } from '@algolia/transporter';
import { SearchIndex } from '@algolia/client-search';
import { WaitablePromise } from '@algolia/client-common';

export declare const accountCopyIndex: (source: SearchIndex, destination: SearchIndex, requestOptions?: RequestOptions | undefined) => WaitablePromise<void>;

export declare function createDestinationIndiceExistsError(): Error;

export declare function createIndicesInSameAppError(appId: string): IndicesInSameAppError;

export declare type IndicesInSameAppError = Error & {
    /**
     * The app id.
     */
    readonly appId: string;
};

export { }

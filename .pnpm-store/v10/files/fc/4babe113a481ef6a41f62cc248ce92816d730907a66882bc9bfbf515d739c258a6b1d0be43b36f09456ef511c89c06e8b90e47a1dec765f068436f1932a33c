import { Observable } from '../../Observable';
import { ObservableInput } from '../../types';
export declare function fromFetch<T>(input: string | Request, init: RequestInit & {
    selector: (response: Response) => ObservableInput<T>;
}): Observable<T>;
export declare function fromFetch(input: string | Request, init?: RequestInit): Observable<Response>;

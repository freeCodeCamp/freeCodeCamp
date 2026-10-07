import { Subject } from './Subject';
import { Observer } from './types';
import { Subscription } from './Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class SubjectSubscription<T> extends Subscription {
    subject: Subject<T>;
    subscriber: Observer<T>;
    closed: boolean;
    constructor(subject: Subject<T>, subscriber: Observer<T>);
    unsubscribe(): void;
}

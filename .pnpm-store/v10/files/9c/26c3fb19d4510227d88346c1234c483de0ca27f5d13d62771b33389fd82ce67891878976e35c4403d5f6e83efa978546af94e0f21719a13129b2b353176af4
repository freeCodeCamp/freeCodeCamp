import { type Instance } from '../../setup';
import { EventType } from '../types';
export interface BehaviorPlugin<Type extends EventType> {
    (event: DocumentEventMap[Type], target: Element, instance: Instance): void | (() => void);
}
export declare const behavior: {
    [Type in EventType]?: BehaviorPlugin<Type>;
};

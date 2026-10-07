import { type Instance } from '../../setup';
import { ApiLevel } from '../misc/level';
export declare function hasPointerEvents(instance: Instance, element: Element): boolean;
declare function closestPointerEventsDeclaration(element: Element): {
    pointerEvents: string;
    tree: Element[];
} | undefined;
declare const PointerEventsCheck: unique symbol;
declare global {
    interface Element {
        [PointerEventsCheck]?: {
            [k in ApiLevel]?: object;
        } & {
            result: ReturnType<typeof closestPointerEventsDeclaration>;
        };
    }
}
export declare function assertPointerEvents(instance: Instance, element: Element): void;
export {};

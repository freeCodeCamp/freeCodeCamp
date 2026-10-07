import { EventHandler } from './addEventListener';
import { TransformValue } from './isTransform';
import { Property } from './types';
declare type AnimateProperties = Record<Property | TransformValue, string>;
interface Options {
    node: HTMLElement;
    properties: AnimateProperties;
    duration?: number;
    easing?: string;
    callback?: EventHandler<'transitionend'>;
}
interface Cancel {
    cancel(): void;
}
declare function animate(options: Options): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number, callback: EventHandler<'transitionend'>): Cancel;
declare function animate(node: HTMLElement, properties: AnimateProperties, duration: number, easing: string, callback: EventHandler<'transitionend'>): Cancel;
export default animate;

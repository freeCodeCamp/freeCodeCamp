import * as CSS from 'csstype';
import { CamelProperty, HyphenProperty, Property } from './types';
declare function style(node: HTMLElement, property: Partial<Record<Property, string>>): void;
declare function style<T extends HyphenProperty>(node: HTMLElement, property: T): CSS.PropertiesHyphen[T];
declare function style<T extends CamelProperty>(node: HTMLElement, property: T): CSS.Properties[T];
export default style;

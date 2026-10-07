import { Formatter } from './Formatter';
import { BabelCodeFrameOptions } from './CodeFrameFormatter';
declare type NotConfigurableFormatterType = undefined | 'basic' | Formatter;
declare type ConfigurableFormatterType = 'codeframe';
declare type FormatterType = NotConfigurableFormatterType | ConfigurableFormatterType;
declare type ConfigurableFormatterOptions = {
    codeframe: BabelCodeFrameOptions;
};
declare type ComplexFormatterOptions<T extends FormatterType> = T extends ConfigurableFormatterType ? ConfigurableFormatterOptions[T] : never;
declare function createFormatter<T extends NotConfigurableFormatterType>(type?: T): Formatter;
declare function createFormatter<T extends ConfigurableFormatterType>(type: T, options?: ConfigurableFormatterOptions[T]): Formatter;
declare function createFormatter<T extends FormatterType>(type: T, options?: object): Formatter;
export { createFormatter, FormatterType, ComplexFormatterOptions, NotConfigurableFormatterType, ConfigurableFormatterType, ConfigurableFormatterOptions, };

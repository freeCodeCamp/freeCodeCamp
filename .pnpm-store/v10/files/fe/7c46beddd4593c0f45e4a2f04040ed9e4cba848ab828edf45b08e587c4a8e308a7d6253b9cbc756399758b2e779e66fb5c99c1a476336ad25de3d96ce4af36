type ColorFunction = (text: string) => void;
declare function yellow(text: string): string;
declare function blue(text: string): string;
declare function gray(text: string): string;
declare function red(text: string): string;
declare function green(text: string): string;

type colors_ColorFunction = ColorFunction;
declare const colors_blue: typeof blue;
declare const colors_gray: typeof gray;
declare const colors_green: typeof green;
declare const colors_red: typeof red;
declare const colors_yellow: typeof yellow;
declare namespace colors {
  export {
    colors_ColorFunction as ColorFunction,
    colors_blue as blue,
    colors_gray as gray,
    colors_green as green,
    colors_red as red,
    colors_yellow as yellow,
  };
}

type LogLevel = 'debug' | 'info' | 'success' | 'warning' | 'error';
type LogColors = keyof typeof colors;
interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: any;
}
declare class Logger {
    private readonly name;
    private prefix;
    constructor(name: string);
    extend(domain: string): Logger;
    /**
     * Print a debug message.
     * @example
     * logger.debug('no duplicates found, creating a document...')
     */
    debug(message: any, ...positionals: Array<unknown>): void;
    /**
     * Print an info message.
     * @example
     * logger.info('start parsing...')
     */
    info(message: any, ...positionals: Array<unknown>): (message: any, ...positionals: Array<unknown>) => void;
    /**
     * Print a success message.
     * @example
     * logger.success('successfully created document')
     */
    success(message: any, ...positionals: Array<unknown>): void;
    /**
     * Print a warning.
     * @example
     * logger.warning('found legacy document format')
     */
    warning(message: any, ...positionals: Array<unknown>): void;
    /**
     * Print an error message.
     * @example
     * logger.error('something went wrong')
     */
    error(message: any, ...positionals: Array<unknown>): void;
    /**
     * Execute the given callback only when the logging is enabled.
     * This is skipped in its entirety and has no runtime cost otherwise.
     * This executes regardless of the log level.
     * @example
     * logger.only(() => {
     *   logger.info('additional info')
     * })
     */
    only(callback: () => void): void;
    private createEntry;
    private logEntry;
    private formatTimestamp;
    private getWriter;
}

export { LogColors, LogEntry, LogLevel, Logger };

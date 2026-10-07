import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs/esm' {
    interface Dayjs {
        set(argument: object): Dayjs
        add(argument: object): Dayjs
        subtract(argument: object): Dayjs
    }

    interface ConfigTypeMap {
        objectSupport: {
            years?: number | string;
            year?: number | string;
            y?: number | string;

            months?: number | string;
            month?: number | string;
            M?: number | string;

            days?: number | string;
            day?: number | string;
            d?: number | string;

            dates?: number | string;
            date?: number | string;
            D?: number | string;

            hours?: number | string;
            hour?: number | string;
            h?: number | string;

            minutes?: number | string;
            minute?: number | string;
            m?: number | string;

            seconds?: number | string;
            second?: number | string;
            s?: number | string;

            milliseconds?: number | string;
            millisecond?: number | string;
            ms?: number | string;
        }
    }
}

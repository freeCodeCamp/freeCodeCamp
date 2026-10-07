/// <reference types="node" />
import Babel, { ConfigItem, PluginItem, CreateConfigItemOptions } from "@babel/core";
import { IBabelStage } from "../redux/types";
import { Stage } from "../commands/types";
export declare const getCustomOptions: (stage: Stage) => IBabelStage["options"];
export interface ICustomOptions extends Record<string, unknown> {
    stage: Stage;
    resourceQuery: string;
}
export declare const prepareOptions: (babel: typeof Babel, customOptions: ICustomOptions, resolve?: RequireResolve) => Array<Array<PluginItem>>;
export declare const addRequiredPresetOptions: (babel: typeof Babel, presets: Array<ConfigItem>, options?: {
    stage?: Stage;
}, resolve?: RequireResolve) => Array<PluginItem>;
export declare const mergeConfigItemOptions: ({ items, itemToMerge, type, babel, }: {
    items: Array<ConfigItem>;
    itemToMerge: ConfigItem;
    type: CreateConfigItemOptions["type"];
    babel: typeof Babel;
}) => Array<ConfigItem>;

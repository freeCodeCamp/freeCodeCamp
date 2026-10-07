/**
 * This declaration is copied from https://github.com/vuejs/vue/pull/7918
 * which may included vue-template-compiler v2.6.0.
 */
interface SFCParserOptionsV2 {
    pad?: true | 'line' | 'space';
}
export interface SFCBlockV2 {
    type: string;
    content: string;
    attrs: Record<string, string>;
    start?: number;
    end?: number;
    lang?: string;
    src?: string;
    scoped?: boolean;
    module?: string | boolean;
}
export interface SFCDescriptorV2 {
    template: SFCBlockV2 | undefined;
    script: SFCBlockV2 | undefined;
    styles: SFCBlockV2[];
    customBlocks: SFCBlockV2[];
}
export interface VueTemplateCompilerV2 {
    parseComponent(file: string, options?: SFCParserOptionsV2): SFCDescriptorV2;
}
export {};

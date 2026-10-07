import type { Linter } from './Linter';
export declare namespace Processor {
    interface ProcessorMeta {
        /**
         * The unique name of the processor.
         */
        name: string;
        /**
         * The a string identifying the version of the processor.
         */
        version?: string;
    }
    type PreProcess = (text: string, filename: string) => (string | {
        filename: string;
        text: string;
    })[];
    type PostProcess = (messagesList: Linter.LintMessage[][], filename: string) => Linter.LintMessage[];
    interface ProcessorModule {
        /**
         * Information about the processor to uniquely identify it when serializing.
         */
        meta?: ProcessorMeta;
        /**
         * The function to merge messages.
         */
        postprocess?: PostProcess;
        /**
         * The function to extract code blocks.
         */
        preprocess?: PreProcess;
        /**
         * If `true` then it means the processor supports autofix.
         */
        supportsAutofix?: boolean;
    }
    /**
     * A loose definition of the ParserModule type for use with configs
     * This type intended to relax validation of configs so that parsers that have
     * different AST types or scope managers can still be passed to configs
     *
     * @see {@link LooseRuleDefinition}, {@link LooseParserModule}
     */
    interface LooseProcessorModule {
        /**
         * Information about the processor to uniquely identify it when serializing.
         */
        meta?: {
            [K in keyof ProcessorMeta]?: ProcessorMeta[K] | undefined;
        };
        /**
         * The function to merge messages.
         */
        postprocess?: (messagesList: any, filename: string) => any;
        /**
         * The function to extract code blocks.
         */
        preprocess?: (text: string, filename: string) => any;
        /**
         * If `true` then it means the processor supports autofix.
         */
        supportsAutofix?: boolean | undefined;
    }
}

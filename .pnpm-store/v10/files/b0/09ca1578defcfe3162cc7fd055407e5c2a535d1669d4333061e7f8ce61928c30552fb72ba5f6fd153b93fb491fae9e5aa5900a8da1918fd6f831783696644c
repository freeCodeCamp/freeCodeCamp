import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { GraphQLInstrumentationConfig, GraphQLInstrumentationParsedConfig } from './types';
export declare class GraphQLInstrumentation extends InstrumentationBase<GraphQLInstrumentationParsedConfig> {
    constructor(config?: GraphQLInstrumentationConfig);
    setConfig(config?: GraphQLInstrumentationConfig): void;
    protected init(): InstrumentationNodeModuleDefinition;
    private _addPatchingExecute;
    private _addPatchingParser;
    private _addPatchingValidate;
    private _patchExecute;
    private _handleExecutionResult;
    private _executeResponseHook;
    private _patchParse;
    private _patchValidate;
    private _parse;
    private _validate;
    private _createExecuteSpan;
    private _wrapExecuteArgs;
}
//# sourceMappingURL=instrumentation.d.ts.map
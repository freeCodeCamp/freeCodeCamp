import { ObjectTypeComposer } from '../ObjectTypeComposer';
import { InputTypeComposer } from '../InputTypeComposer';
import { InterfaceTypeComposer } from '../InterfaceTypeComposer';
import { Resolver } from '../Resolver';
import type { NamedTypeComposer, ComposeOutputType, ComposeInputType } from './typeHelpers';
export declare type TypeInPath<TContext> = NamedTypeComposer<TContext> | Resolver<any, TContext, any>;
export declare function typeByPath<TContext>(src: TypeInPath<TContext>, path: string | Array<string>): TypeInPath<TContext> | void;
export declare function typeByPathTC<TContext>(tc: ObjectTypeComposer<any, TContext>, parts: Array<string>): TypeInPath<TContext> | void;
export declare function typeByPathITC<TContext>(itc: InputTypeComposer<TContext>, parts: Array<string>): TypeInPath<TContext> | void;
export declare function typeByPathRSV<TContext>(rsv: Resolver<any, TContext, any>, parts: Array<string>): TypeInPath<TContext> | Resolver<any, TContext, any> | void;
export declare function typeByPathIFTC<TContext>(tc: InterfaceTypeComposer<any, TContext>, parts: Array<string>): TypeInPath<TContext> | void;
export declare function processType<TContext>(type: ComposeOutputType<TContext> | ComposeInputType | void | null, restParts: Array<string>): TypeInPath<TContext> | void;
//# sourceMappingURL=typeByPath.d.ts.map
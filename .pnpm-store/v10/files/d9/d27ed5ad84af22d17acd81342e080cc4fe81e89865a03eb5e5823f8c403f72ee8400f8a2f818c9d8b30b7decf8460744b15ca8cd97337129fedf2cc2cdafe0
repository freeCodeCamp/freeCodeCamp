import type { Cast, EventObject, BaseActionObject, Prop, IsNever } from './types';
import { UnionFromCreatorsReturnTypes, FinalModelCreators, Model, ModelCreators } from './model.types';
/**
 * @deprecated Use [Typegen](https://stately.ai/blog/introducing-typescript-typegen-for-xstate) instead.
 */
export declare function createModel<TContext, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject>(initialContext: TContext): Model<TContext, TEvent, TAction, void>;
export declare function createModel<TContext, TModelCreators extends ModelCreators<TModelCreators>, TFinalModelCreators = FinalModelCreators<TModelCreators>, TComputedEvent = UnionFromCreatorsReturnTypes<Prop<TFinalModelCreators, 'events'>>, TComputedAction = UnionFromCreatorsReturnTypes<Prop<TFinalModelCreators, 'actions'>>>(initialContext: TContext, creators: TModelCreators): Model<TContext, Cast<TComputedEvent, EventObject>, IsNever<TComputedAction> extends true ? BaseActionObject : Cast<TComputedAction, BaseActionObject>, TFinalModelCreators>;
//# sourceMappingURL=model.d.ts.map
import { If, Not, And, Or } from 'typescript-logic';
export declare type Extends<A, B> = Or<Any<B>, If<Any<A>, Any<B>, prv.Extends<A, B>>>;
export declare type Compare<A, B, Options extends Compare.Options = Compare.Options.Default> = If<Extends<A, B>, If<Extends<B, A>, Options['equal' | 'broaderRight' | 'broaderLeft'], Options['broaderRight']>, If<Extends<B, A>, Options['broaderLeft'], Options['mismatch']>>;
export declare namespace Compare {
    type Strict<A, B, Options extends Compare.Options = Compare.Options.Default> = If<Extends<A, B>, If<Extends<B, A>, Options['equal'], Options['broaderRight']>, If<Extends<B, A>, Options['broaderLeft'], Options['mismatch']>>;
    interface Options {
        broaderLeft: any;
        broaderRight: any;
        equal: any;
        mismatch: any;
    }
    namespace Options {
        interface Default extends Compare.Options {
            broaderLeft: 'broaderLeft';
            broaderRight: 'broaderRight';
            equal: 'equal';
            mismatch: 'mismatch';
        }
    }
}
export declare type Equal<A, B> = Or<And<Any<A>, Any<B>>, And<And<NotAny<A>, NotAny<B>>, And<Extends<A, B>, Extends<B, A>>>>;
export declare type NotEqual<A, B> = Not<Equal<A, B>>;
export declare type Any<Type> = And<prv.Extends<Type, 0>, prv.Extends<Type, 1>>;
export declare type NotAny<Type, True = true, False = true> = Not<Any<Type>>;
declare namespace prv {
    type Extends<A, B> = [A] extends [B] ? true : false;
}
export {};

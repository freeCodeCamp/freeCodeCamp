# Installation
> `npm install --save @types/hoist-non-react-statics`

# Summary
This package contains type definitions for hoist-non-react-statics (https://github.com/mridgway/hoist-non-react-statics#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hoist-non-react-statics.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hoist-non-react-statics/index.d.ts)
````ts
// Type definitions for hoist-non-react-statics 3.3
// Project: https://github.com/mridgway/hoist-non-react-statics#readme
// Definitions by: JounQin <https://github.com/JounQin>, James Reggio <https://github.com/jamesreggio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface REACT_STATICS {
    childContextTypes: true;
    contextType: true;
    contextTypes: true;
    defaultProps: true;
    displayName: true;
    getDefaultProps: true;
    getDerivedStateFromError: true;
    getDerivedStateFromProps: true;
    mixins: true;
    propTypes: true;
    type: true;
}

interface KNOWN_STATICS {
    name: true;
    length: true;
    prototype: true;
    caller: true;
    callee: true;
    arguments: true;
    arity: true;
}

interface MEMO_STATICS {
    "$$typeof": true;
    compare: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
    type: true;
}

interface FORWARD_REF_STATICS {
    "$$typeof": true;
    render: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
}

declare namespace hoistNonReactStatics {
    type NonReactStatics<
        S extends React.ComponentType<any>,
        C extends {
            [key: string]: true;
        } = {},
    > = {
        [
            key in Exclude<
                keyof S,
                S extends React.MemoExoticComponent<any> ? keyof MEMO_STATICS | keyof C
                    : S extends React.ForwardRefExoticComponent<any> ? keyof FORWARD_REF_STATICS | keyof C
                    : keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
            >
        ]: S[key];
    };
}

declare function hoistNonReactStatics<
    T extends React.ComponentType<any>,
    S extends React.ComponentType<any>,
    C extends {
        [key: string]: true;
    } = {},
>(
    TargetComponent: T,
    SourceComponent: S,
    customStatic?: C,
): T & hoistNonReactStatics.NonReactStatics<S, C>;

export = hoistNonReactStatics;

````

### Additional Details
 * Last updated: Sat, 16 Sep 2023 08:06:32 GMT
 * Dependencies: [@types/react](https://npmjs.com/package/@types/react)
 * Global values: none

# Credits
These definitions were written by [JounQin](https://github.com/JounQin), and [James Reggio](https://github.com/jamesreggio).

import type { SandpackTheme, SandpackThemeProp } from "../types";
/**
 * @category Theme
 */
export declare const THEME_PREFIX = "sp";
/**
 * @category Theme
 */
export declare const createTheme: (<Argument0 extends string | ({} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/core/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/core/types/stitches").ThemeTokens<Argument0, "">)) | (<Argument0_1 extends string | ({} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1_1 extends string | ({} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0_1, nameOrScalesArg1?: Argument1_1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0_1 extends string ? import("@stitches/core/types/stitches").ThemeTokens<Argument1_1, "sp"> : import("@stitches/core/types/stitches").ThemeTokens<Argument0_1, "sp">)), css: (<Composers extends (string | import("@stitches/core/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/core/types/css-util").CSS<{}, {}, {}, {}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/core/types/util").Function ? Composers[K] : import("@stitches/core/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/core/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/core/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers>, {}, CSS>) | (<Composers_1 extends (string | import("@stitches/core/types/util").Function | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>>(...composers: { [K_1 in keyof Composers_1]: string extends Composers_1[K_1] ? Composers_1[K_1] : Composers_1[K_1] extends string | import("@stitches/core/types/util").Function ? Composers_1[K_1] : import("@stitches/core/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers_1[K_1] ? { [Name_2 in keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_2]> | undefined; } : import("@stitches/core/types/util").WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers_1[K_1] ? { [Name_3 in keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers_1[K_1][keyof Composers_1[K_1] & "variants"][Name_3]> | undefined; } : import("@stitches/core/types/util").WideObject) | undefined;
} & CSS_1 & { [K2_1 in keyof Composers_1[K_1]]: K2_1 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2_1 extends keyof CSS_1 ? CSS_1[K2_1] : unknown; }; }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers_1>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers_1>, {}, CSS_1>), getCssText: () => string, keyframes: ((style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{}, {}, {}, {}>;
}) => {
    (): string;
    name: string;
}) | ((style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
});
/**
 * @category Theme
 */
export declare const standardizeStitchesTheme: (theme: SandpackTheme) => Record<string, Record<string, string>>;
/**
 * @category Theme
 */
export declare const standardizeTheme: (inputTheme?: SandpackThemeProp) => {
    id: string;
    theme: SandpackTheme;
    mode: "dark" | "light";
};
/**
 * The fake `css` function used to match the real `css` function usage
 * We use this for the unstyled bundle which do not need real class names
 * `css` is a factory which return a className generator, but also it be used in scenarios which `toString` will be invoked
 * so we also need to add the `toString` method to it.
 */
export declare const fakeCss: {
    (): string;
    toString: any;
};

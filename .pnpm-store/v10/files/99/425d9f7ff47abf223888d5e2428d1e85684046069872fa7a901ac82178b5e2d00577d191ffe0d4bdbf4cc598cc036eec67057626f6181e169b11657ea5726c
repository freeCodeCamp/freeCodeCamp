export declare type RgbColor = {
    r: number;
    g: number;
    b: number;
};
export declare type HslColor = {
    h: number;
    s: number;
    l: number;
};
export declare type HsvColor = {
    h: number;
    s: number;
    v: number;
};
export declare type HwbColor = {
    h: number;
    w: number;
    b: number;
};
export interface XyzColor {
    x: number;
    y: number;
    z: number;
}
export interface LabColor {
    l: number;
    a: number;
    b: number;
}
export interface LchColor {
    l: number;
    c: number;
    h: number;
}
export interface CmykColor {
    c: number;
    m: number;
    y: number;
    k: number;
}
declare type WithAlpha<O> = O & {
    a: number;
};
export declare type RgbaColor = WithAlpha<RgbColor>;
export declare type HslaColor = WithAlpha<HslColor>;
export declare type HsvaColor = WithAlpha<HsvColor>;
export declare type HwbaColor = WithAlpha<HwbColor>;
export declare type XyzaColor = WithAlpha<XyzColor>;
export declare type LabaColor = LabColor & {
    alpha: number;
};
export declare type LchaColor = WithAlpha<LchColor>;
export declare type CmykaColor = WithAlpha<CmykColor>;
export declare type ObjectColor = RgbColor | RgbaColor | HslColor | HslaColor | HsvColor | HsvaColor | HwbColor | HwbaColor | XyzColor | XyzaColor | LabColor | LabaColor | LchColor | LchaColor | CmykColor | CmykaColor;
export declare type AnyColor = string | ObjectColor;
export declare type InputObject = Record<string, unknown>;
export declare type Format = "name" | "hex" | "rgb" | "hsl" | "hsv" | "hwb" | "xyz" | "lab" | "lch" | "cmyk";
export declare type Input = string | InputObject;
export declare type ParseResult = [RgbaColor, Format];
export declare type ParseFunction<I extends Input> = (input: I) => RgbaColor | null;
export declare type Parser<I extends Input> = [ParseFunction<I>, Format];
export declare type Parsers = {
    string: Array<Parser<string>>;
    object: Array<Parser<InputObject>>;
};
export {};

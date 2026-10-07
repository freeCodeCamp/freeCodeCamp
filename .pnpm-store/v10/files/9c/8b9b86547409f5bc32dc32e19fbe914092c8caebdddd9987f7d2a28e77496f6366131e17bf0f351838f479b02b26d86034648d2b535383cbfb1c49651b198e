interface SandpackSyntaxStyle {
    color?: string;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}
export interface SandpackTheme {
    colors: {
        surface1: string;
        surface2: string;
        surface3: string;
        disabled: string;
        base: string;
        clickable: string;
        hover: string;
        accent: string;
        error?: string;
        errorSurface?: string;
        warning?: string;
        warningSurface?: string;
    };
    syntax: {
        plain: string | SandpackSyntaxStyle;
        comment: string | SandpackSyntaxStyle;
        keyword: string | SandpackSyntaxStyle;
        definition: string | SandpackSyntaxStyle;
        punctuation: string | SandpackSyntaxStyle;
        property: string | SandpackSyntaxStyle;
        tag: string | SandpackSyntaxStyle;
        static: string | SandpackSyntaxStyle;
        string?: string | SandpackSyntaxStyle;
    };
    font: {
        body: string;
        mono: string;
        size: string;
        lineHeight: string;
    };
}
export {};

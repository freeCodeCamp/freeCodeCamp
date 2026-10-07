import React from 'react';
export type PoweredByClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element with the light theme
     */
    light: string;
    /**
     * Class names to apply to the root element with the dark theme
     */
    dark: string;
    /**
     * Class names to apply to the link element
     */
    link: string;
    /**
     * Class names to apply to the SVG logo
     */
    logo: string;
};
export type PoweredByProps = React.ComponentProps<'div'> & {
    classNames?: Partial<PoweredByClassNames>;
    url: string;
    theme?: 'light' | 'dark';
};
export declare function PoweredBy({ classNames, url, theme, ...props }: PoweredByProps): React.JSX.Element;

/// <reference types="react" />

declare namespace spinner {
    export interface SpinnerProps {
        /**
         * Specify spinner to use.
         */
        name?:
            | "three-bounce"
            | "double-bounce"
            | "rotating-plane"
            | "folding-cube"
            | "wave"
            | "wandering-cubes"
            | "pulse"
            | "chasing-dots"
            | "circle"
            | "cube-grid"
            | "wordpress"
            | "ball-grid-beat"
            | "ball-grid-pulse"
            | "line-spin-fade-loader"
            | "ball-spin-fade-loader"
            | "ball-pulse-rise"
            | "line-scale"
            | "line-scale-pulse-out"
            | "line-scale-pulse-out-rapid"
            | "line-scale-party"
            | "ball-triangle-path"
            | "ball-scale-ripple-multiple"
            | "ball-pulse-sync"
            | "ball-beat"
            | "ball-scale-multiple"
            | "ball-zig-zag"
            | "ball-zig-zag-deflect"
            | "ball-clip-rotate"
            | "ball-clip-rotate-pulse"
            | "ball-clip-rotate-multiple"
            | "ball-scale-ripple"
            | "triangle-skew-spin"
            | "pacman"
            | undefined;
        /**
         * Set the time before the spinner fades in
         */
        fadeIn?: "full" | "half" | "quarter" | "none" | undefined;
        /**
         * Change the default "spinner" className.
         */
        overrideSpinnerClassName?: string | undefined;
        /**
         * Component className.
         */
        className?: string | undefined;
        /**
         * Programmatically set the color of the spinners (does not work
         * for circle or folding-cube); this can either be a hex value or a color word
         */
        color?: string | undefined;

        style?: React.CSSProperties | undefined;
    }

    export interface Spinner extends React.ComponentClass<SpinnerProps> {
    }
}

declare const spinner: spinner.Spinner;
export = spinner;

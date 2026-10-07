/**
 * `confetti` takes a single optional object. When `window.Promise` is available, it will return a Promise to let you know when it is done.
 * When promises are not available (like in IE), it will return `null`. You can polyfill promises using any of the popular polyfills. You
 * can also provide a custom promise implementation to `confetti` through:
 *
 * ```
 *  const MyPromise = require('some-promise-lib');
 *  const confetti = require('canvas-confetti');
 *  confetti.Promise = MyPromise;
 * ```
 *
 * If you call `confetti` multiple times before it is done, it
 * will return the same promise every time. Internally, the same canvas element will be reused, continuing the existing animation with the
 * new confetti added. The promise returned by each call to `confetti` will resolve once all animations are done.
 */
declare function confetti(options?: confetti.Options): Promise<undefined> | null;

declare namespace confetti {
    /**
     * You can polyfill promises using any of the popular polyfills. You can also provide a promise implementation to `confetti` through
     * this property.
     */
    let Promise: PromiseLike<undefined> | null | undefined;

    interface PathShape {
        type: "path";
        path: string;
        matrix: DOMMatrix;
    }

    interface BitmapShape {
        type: "bitmap";
        bitmap: ImageBitmap;
        matrix: DOMMatrix;
    }

    type Shape = PathShape | BitmapShape | "square" | "circle" | "star";

    interface Options {
        /**
         * The angle in which to launch the confetti, in degrees. 90 is straight up.
         * @default 90
         */
        angle?: number | undefined;
        /**
         * An array of color strings, in the HEX format... you know, like #bada55.
         */
        colors?: string[] | undefined;
        /**
         * How quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet,
         * just never change it.
         * @default 0.9
         */
        decay?: number | undefined;
        /**
         * Disables confetti entirely for users that prefer reduced motion. The confetti() promise will resolve immediately in this case.
         * @default false
         */
        disableForReducedMotion?: boolean | undefined;
        /**
         * How much to the side the confetti will drift. The default is 0, meaning that they will fall straight down.
         * Use a negative number for left and positive number for right
         * @default 0
         */
        drift?: number | undefined;
        /**
         * Optionally turns off the tilt and wobble that three dimensional confetti would have in the real world.
         * Yeah, they look a little sad, but y'all asked for them, so don't blame me.
         * @default false
         */
        flat?: boolean | undefined;
        /**
         * How quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity, etc., but there are no limits.
         * @default 1
         */
        gravity?: number | undefined;
        /**
         * Where to start firing confetti from. Feel free to launch off-screen if you'd like.
         */
        origin?: Origin | undefined;
        /**
         * The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
         * @default 50
         */
        particleCount?: number | undefined;
        /**
         * Scale factor for each confetti particle. Use decimals to make the confetti smaller.
         * @default 1
         */
        scalar?: number | undefined;
        /**
         * The possible values are square, circle, and star. The default is to use both squares and circles in an even mix.
         * @default ['square','circle']
         */
        shapes?: Shape[] | undefined;
        /**
         * How far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined angle plus or minus 22.5
         * degrees.
         * @default 45
         */
        spread?: number | undefined;
        /**
         * How fast the confetti will start going, in pixels.
         * @default 45
         */
        startVelocity?: number | undefined;
        /**
         * How many times the confetti will move. This is abstract... but play with it if the confetti disappear too quickly for you.
         * @default 200
         */
        ticks?: number | undefined;
        /**
         * The confetti should be on top, after all. But if you have a crazy high page, you can set it even higher.
         * @default 100
         */
        zIndex?: number | undefined;
    }

    interface Origin {
        /**
         * The x position on the page, with 0 being the left edge and 1 being the right edge.
         * @default 0.5
         */
        x?: number | undefined;
        /**
         * The y position on the page, with 0 being the left edge and 1 being the right edge.
         * @default 0.5
         */
        y?: number | undefined;
    }

    interface GlobalOptions {
        /**
         * Disables confetti entirely for users that prefer reduced motion. When set to true, use of this
         * confetti instance will always respect a user's request for reduced motion and disable confetti for them.
         * @default false
         */
        disableForReducedMotion?: boolean | undefined;
        /**
         * Whether to allow setting the canvas image size, as well as keep it correctly sized if the window changes size
         * @default false
         */
        resize?: boolean | undefined;
        /**
         * Whether to use an asynchronous web worker to render the confetti animation, whenever possible
         * @default false
         */
        useWorker?: boolean | undefined;
    }

    /**
     * This helper method lets you create a custom confetti shape using an SVG Path string.
     */
    function shapeFromPath(pathData: string): Shape;
    function shapeFromPath(pathData: { path: string; matrix?: DOMMatrix }): Shape;

    /**
     * This is the highly anticipated feature to render emoji confetti! Use any standard unicode emoji. Or other text.
     */
    function shapeFromText(
        /**
         * The text to be rendered as a confetti. If you can't make up your mind, I suggest "🐈".
         */
        textData: string,
    ): Shape;
    function shapeFromText(textData: {
        /**
         * The text to be rendered as a confetti. If you can't make up your mind, I suggest "🐈".
         */
        text: string;
        /**
         * A scale value relative to the default size. It matches the scalar value in the confetti options.
         * @default 1
         */
        scalar?: number;
        /**
         * The color used to render the text.
         * @default '#000000'
         */
        color?: string;
        /**
         * The font family name to use when rendering the text.
         * The default follows [best practices for rendring the native OS emoji of the device](https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/), falling back to sans-serif.
         * If using a web font, make sure this [font is loaded](https://developer.mozilla.org/en-US/docs/Web/API/FontFace/load) before rendering your confetti.
         * @default '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif'
         */
        fontFamily?: string;
    }): Shape;

    /**
     * Stops the animation and clears all confetti, as well as immediately resolves any outstanding promises.
     */
    type Reset = () => void;
    function reset(): Reset;

    /**
     * This method creates an instance of the confetti function that uses a custom canvas.
     */
    interface CreateTypes {
        (options?: Options): Promise<null> | null;
        reset: Reset;
    }
    function create(canvas?: HTMLCanvasElement, options?: GlobalOptions): CreateTypes;
}

export as namespace confetti;
export = confetti;

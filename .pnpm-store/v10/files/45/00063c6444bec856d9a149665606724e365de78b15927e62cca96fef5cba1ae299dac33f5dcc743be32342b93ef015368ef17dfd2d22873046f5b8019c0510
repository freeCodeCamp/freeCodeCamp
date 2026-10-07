/**
 * Copyright 2017 François Nguyen and others.
 *
 * Billy Kwok <https://github.com/billykwok>
 * Bradley Odell <https://github.com/BTOdell>
 * Espen Hovlandsdal <https://github.com/rexxars>
 * Floris de Bijl <https://github.com/Fdebijl>
 * François Nguyen <https://github.com/phurytw>
 * Jamie Woodbury <https://github.com/JamieWoodbury>
 * Wooseop Kim <https://github.com/wooseopkim>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// SPDX-License-Identifier: MIT

/// <reference types="node" />

import { Duplex } from 'stream';

//#region Constructor functions

/**
 * Creates a sharp instance from an image
 * @param input Buffer containing JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF or raw pixel image data, or String containing the path to an JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image file.
 * @param options Object with optional attributes.
 * @throws {Error} Invalid parameters
 * @returns A sharp instance that can be used to chain operations
 */
declare function sharp(options?: sharp.SharpOptions): sharp.Sharp;
declare function sharp(
    input?:
        | Buffer
        | ArrayBuffer
        | Uint8Array
        | Uint8ClampedArray
        | Int8Array
        | Uint16Array
        | Int16Array
        | Uint32Array
        | Int32Array
        | Float32Array
        | Float64Array
        | string,
    options?: sharp.SharpOptions,
): sharp.Sharp;

declare namespace sharp {
    /** Object containing nested boolean values representing the available input and output formats/methods. */
    const format: FormatEnum;

    /** An Object containing the version numbers of sharp, libvips and its dependencies. */
    const versions: {
        vips: string;
        cairo?: string | undefined;
        croco?: string | undefined;
        exif?: string | undefined;
        expat?: string | undefined;
        ffi?: string | undefined;
        fontconfig?: string | undefined;
        freetype?: string | undefined;
        gdkpixbuf?: string | undefined;
        gif?: string | undefined;
        glib?: string | undefined;
        gsf?: string | undefined;
        harfbuzz?: string | undefined;
        jpeg?: string | undefined;
        lcms?: string | undefined;
        orc?: string | undefined;
        pango?: string | undefined;
        pixman?: string | undefined;
        png?: string | undefined;
        sharp?: string | undefined;
        svg?: string | undefined;
        tiff?: string | undefined;
        webp?: string | undefined;
        avif?: string | undefined;
        heif?: string | undefined;
        xml?: string | undefined;
        zlib?: string | undefined;
    };

    /** An Object containing the platform and architecture of the current and installed vendored binaries. */
    const vendor: {
        current: string;
        installed: string[];
    };

    /** An Object containing the available interpolators and their proper values */
    const interpolators: Interpolators;

    /** An EventEmitter that emits a change event when a task is either queued, waiting for libuv to provide a worker thread, complete */
    const queue: NodeJS.EventEmitter;

    //#endregion

    //#region Utility functions

    /**
     * Gets or, when options are provided, sets the limits of libvips' operation cache.
     * Existing entries in the cache will be trimmed after any change in limits.
     * This method always returns cache statistics, useful for determining how much working memory is required for a particular task.
     * @param options Object with the following attributes, or Boolean where true uses default cache settings and false removes all caching (optional, default true)
     * @returns The cache results.
     */
    function cache(options?: boolean | CacheOptions): CacheResult;

    /**
     * Gets or sets the number of threads libvips' should create to process each image.
     * The default value is the number of CPU cores. A value of 0 will reset to this default.
     * The maximum number of images that can be processed in parallel is limited by libuv's UV_THREADPOOL_SIZE environment variable.
     * @param concurrency The new concurrency value.
     * @returns The current concurrency value.
     */
    function concurrency(concurrency?: number): number;

    /**
     * Provides access to internal task counters.
     * @returns Object containing task counters
     */
    function counters(): SharpCounters;

    /**
     * Get and set use of SIMD vector unit instructions. Requires libvips to have been compiled with liborc support.
     * Improves the performance of resize, blur and sharpen operations by taking advantage of the SIMD vector unit of the CPU, e.g. Intel SSE and ARM NEON.
     * @param enable enable or disable use of SIMD vector unit instructions
     * @returns true if usage of SIMD vector unit instructions is enabled
     */
    function simd(enable?: boolean): boolean;

    /**
     * Block libvips operations at runtime.
     *
     * This is in addition to the `VIPS_BLOCK_UNTRUSTED` environment variable,
     * which when set will block all "untrusted" operations.
     *
     * @since 0.32.4
     *
     * @example <caption>Block all TIFF input.</caption>
     * sharp.block({
     *   operation: ['VipsForeignLoadTiff']
     * });
     *
     * @param {Object} options
     * @param {Array<string>} options.operation - List of libvips low-level operation names to block.
     */
    function block(options: { operation: string[] }): void;

    /**
     * Unblock libvips operations at runtime.
     *
     * This is useful for defining a list of allowed operations.
     *
     * @since 0.32.4
     *
     * @example <caption>Block all input except WebP from the filesystem.</caption>
     * sharp.block({
     *   operation: ['VipsForeignLoad']
     * });
     * sharp.unblock({
     *   operation: ['VipsForeignLoadWebpFile']
     * });
     *
     * @example <caption>Block all input except JPEG and PNG from a Buffer or Stream.</caption>
     * sharp.block({
     *   operation: ['VipsForeignLoad']
     * });
     * sharp.unblock({
     *   operation: ['VipsForeignLoadJpegBuffer', 'VipsForeignLoadPngBuffer']
     * });
     *
     * @param {Object} options
     * @param {Array<string>} options.operation - List of libvips low-level operation names to unblock.
     */
    function unblock(options: { operation: string[] }): void;

    //#endregion

    const gravity: GravityEnum;
    const strategy: StrategyEnum;
    const kernel: KernelEnum;
    const fit: FitEnum;
    const bool: BoolEnum;

    interface Sharp extends Duplex {
        //#region Channel functions

        /**
         * Remove alpha channel, if any. This is a no-op if the image does not have an alpha channel.
         * @returns A sharp instance that can be used to chain operations
         */
        removeAlpha(): Sharp;

        /**
         * Ensure alpha channel, if missing. The added alpha channel will be fully opaque. This is a no-op if the image already has an alpha channel.
         * @param alpha transparency level (0=fully-transparent, 1=fully-opaque) (optional, default 1).
         * @returns A sharp instance that can be used to chain operations
         */
        ensureAlpha(alpha?: number): Sharp;

        /**
         * Extract a single channel from a multi-channel image.
         * @param channel zero-indexed channel/band number to extract, or red, green, blue or alpha.
         * @throws {Error} Invalid channel
         * @returns A sharp instance that can be used to chain operations
         */
        extractChannel(channel: 0 | 1 | 2 | 3 | 'red' | 'green' | 'blue' | 'alpha'): Sharp;

        /**
         * Join one or more channels to the image. The meaning of the added channels depends on the output colourspace, set with toColourspace().
         * By default the output image will be web-friendly sRGB, with additional channels interpreted as alpha channels. Channel ordering follows vips convention:
         *  - sRGB: 0: Red, 1: Green, 2: Blue, 3: Alpha.
         *  - CMYK: 0: Magenta, 1: Cyan, 2: Yellow, 3: Black, 4: Alpha.
         *
         * Buffers may be any of the image formats supported by sharp.
         * For raw pixel input, the options object should contain a raw attribute, which follows the format of the attribute of the same name in the sharp() constructor.
         * @param images one or more images (file paths, Buffers).
         * @param options image options, see sharp() constructor.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        joinChannel(images: string | Buffer | ArrayLike<string | Buffer>, options?: SharpOptions): Sharp;

        /**
         * Perform a bitwise boolean operation on all input image channels (bands) to produce a single channel output image.
         * @param boolOp one of "and", "or" or "eor" to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        bandbool(boolOp: keyof BoolEnum): Sharp;

        //#endregion

        //#region Color functions

        /**
         * Tint the image using the provided chroma while preserving the image luminance.
         * An alpha channel may be present and will be unchanged by the operation.
         * @param rgb Parsed by the color module to extract chroma values.
         * @returns A sharp instance that can be used to chain operations
         */
        tint(rgb: Color): Sharp;

        /**
         * Convert to 8-bit greyscale; 256 shades of grey.
         * This is a linear operation.
         * If the input image is in a non-linear colour space such as sRGB, use gamma() with greyscale() for the best results.
         * By default the output image will be web-friendly sRGB and contain three (identical) color channels.
         * This may be overridden by other sharp operations such as toColourspace('b-w'), which will produce an output image containing one color channel.
         * An alpha channel may be present, and will be unchanged by the operation.
         * @param greyscale true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        greyscale(greyscale?: boolean): Sharp;

        /**
         * Alternative spelling of greyscale().
         * @param grayscale true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        grayscale(grayscale?: boolean): Sharp;

        /**
         * Set the pipeline colourspace.
         * The input image will be converted to the provided colourspace at the start of the pipeline.
         * All operations will use this colourspace before converting to the output colourspace, as defined by toColourspace.
         * This feature is experimental and has not yet been fully-tested with all operations.
         *
         * @param colourspace pipeline colourspace e.g. rgb16, scrgb, lab, grey16 ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        pipelineColourspace(colourspace?: string): Sharp;

        /**
         * Alternative spelling of pipelineColourspace
         * @param colorspace pipeline colourspace e.g. rgb16, scrgb, lab, grey16 ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        pipelineColorspace(colorspace?: string): Sharp;

        /**
         * Set the output colourspace.
         * By default output image will be web-friendly sRGB, with additional channels interpreted as alpha channels.
         * @param colourspace output colourspace e.g. srgb, rgb, cmyk, lab, b-w ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toColourspace(colourspace?: string): Sharp;

        /**
         * Alternative spelling of toColourspace().
         * @param colorspace output colorspace e.g. srgb, rgb, cmyk, lab, b-w ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toColorspace(colorspace: string): Sharp;

        //#endregion

        //#region Composite functions

        /**
         * Composite image(s) over the processed (resized, extracted etc.) image.
         *
         * The images to composite must be the same size or smaller than the processed image.
         * If both `top` and `left` options are provided, they take precedence over `gravity`.
         * @param images - Ordered list of images to composite
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        composite(images: OverlayOptions[]): Sharp;

        //#endregion

        //#region Input functions

        /**
         * Take a "snapshot" of the Sharp instance, returning a new instance.
         * Cloned instances inherit the input of their parent instance.
         * This allows multiple output Streams and therefore multiple processing pipelines to share a single input Stream.
         * @returns A sharp instance that can be used to chain operations
         */
        clone(): Sharp;

        /**
         * Fast access to (uncached) image metadata without decoding any compressed image data.
         * @returns A sharp instance that can be used to chain operations
         */
        metadata(callback: (err: Error, metadata: Metadata) => void): Sharp;

        /**
         * Fast access to (uncached) image metadata without decoding any compressed image data.
         * @returns A promise that resolves with a metadata object
         */
        metadata(): Promise<Metadata>;

        /**
         * Access to pixel-derived image statistics for every channel in the image.
         * @returns A sharp instance that can be used to chain operations
         */
        stats(callback: (err: Error, stats: Stats) => void): Sharp;

        /**
         * Access to pixel-derived image statistics for every channel in the image.
         * @returns A promise that resolves with a stats object
         */
        stats(): Promise<Stats>;

        //#endregion

        //#region Operation functions

        /**
         * Rotate the output image by either an explicit angle or auto-orient based on the EXIF Orientation tag.
         *
         * If an angle is provided, it is converted to a valid positive degree rotation. For example, -450 will produce a 270deg rotation.
         *
         * When rotating by an angle other than a multiple of 90, the background colour can be provided with the background option.
         *
         * If no angle is provided, it is determined from the EXIF data. Mirroring is supported and may infer the use of a flip operation.
         *
         * The use of rotate implies the removal of the EXIF Orientation tag, if any.
         *
         * Method order is important when both rotating and extracting regions, for example rotate(x).extract(y) will produce a different result to extract(y).rotate(x).
         * @param angle angle of rotation. (optional, default auto)
         * @param options if present, is an Object with optional attributes.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        rotate(angle?: number, options?: RotateOptions): Sharp;

        /**
         * Flip the image about the vertical Y axis. This always occurs after rotation, if any.
         * The use of flip implies the removal of the EXIF Orientation tag, if any.
         * @param flip true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flip(flip?: boolean): Sharp;

        /**
         * Flop the image about the horizontal X axis. This always occurs after rotation, if any.
         * The use of flop implies the removal of the EXIF Orientation tag, if any.
         * @param flop true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flop(flop?: boolean): Sharp;

        /**
         * Perform an affine transform on an image. This operation will always occur after resizing, extraction and rotation, if any.
         * You must provide an array of length 4 or a 2x2 affine transformation matrix.
         * By default, new pixels are filled with a black background. You can provide a background color with the `background` option.
         * A particular interpolator may also be specified. Set the `interpolator` option to an attribute of the `sharp.interpolators` Object e.g. `sharp.interpolators.nohalo`.
         *
         * In the case of a 2x2 matrix, the transform is:
         * X = matrix[0, 0] * (x + idx) + matrix[0, 1] * (y + idy) + odx
         * Y = matrix[1, 0] * (x + idx) + matrix[1, 1] * (y + idy) + ody
         *
         * where:
         *
         * x and y are the coordinates in input image.
         * X and Y are the coordinates in output image.
         * (0,0) is the upper left corner.
         *
         * @param matrix Affine transformation matrix, may either by a array of length four or a 2x2 matrix array
         * @param options if present, is an Object with optional attributes.
         *
         * @returns A sharp instance that can be used to chain operations
         */
        affine(matrix: [number, number, number, number] | Matrix2x2, options?: AffineOptions): Sharp;

        /**
         * Sharpen the image.
         * When used without parameters, performs a fast, mild sharpen of the output image.
         * When a sigma is provided, performs a slower, more accurate sharpen of the L channel in the LAB colour space.
         * Fine-grained control over the level of sharpening in "flat" (m1) and "jagged" (m2) areas is available.
         * @param options if present, is an Object with optional attributes
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        sharpen(options?: SharpenOptions): Sharp;

        /**
         * Sharpen the image.
         * When used without parameters, performs a fast, mild sharpen of the output image.
         * When a sigma is provided, performs a slower, more accurate sharpen of the L channel in the LAB colour space.
         * Fine-grained control over the level of sharpening in "flat" (m1) and "jagged" (m2) areas is available.
         * @param sigma the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
         * @param flat the level of sharpening to apply to "flat" areas. (optional, default 1.0)
         * @param jagged the level of sharpening to apply to "jagged" areas. (optional, default 2.0)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         *
         * @deprecated Use the object parameter `sharpen({sigma, m1, m2, x1, y2, y3})` instead
         */
        sharpen(sigma?: number, flat?: number, jagged?: number): Sharp;

        /**
         * Apply median filter. When used without parameters the default window is 3x3.
         * @param size square mask size: size x size (optional, default 3)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        median(size?: number): Sharp;

        /**
         * Blur the image.
         * When used without parameters, performs a fast, mild blur of the output image.
         * When a sigma is provided, performs a slower, more accurate Gaussian blur.
         * When a boolean sigma is provided, ether blur mild or disable blur
         * @param sigma a value between 0.3 and 1000 representing the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        blur(sigma?: number | boolean): Sharp;

        /**
         * Merge alpha transparency channel, if any, with background.
         * @param flatten true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flatten(flatten?: boolean | FlattenOptions): Sharp;

        /**
         * Ensure the image has an alpha channel with all white pixel values made fully transparent.
         * Existing alpha channel values for non-white pixels remain unchanged.
         * @returns A sharp instance that can be used to chain operations
         */
        unflatten(): Sharp;

        /**
         * Apply a gamma correction by reducing the encoding (darken) pre-resize at a factor of 1/gamma then increasing the encoding (brighten) post-resize at a factor of gamma.
         * This can improve the perceived brightness of a resized image in non-linear colour spaces.
         * JPEG and WebP input images will not take advantage of the shrink-on-load performance optimisation when applying a gamma correction.
         * Supply a second argument to use a different output gamma value, otherwise the first value is used in both cases.
         * @param gamma value between 1.0 and 3.0. (optional, default 2.2)
         * @param gammaOut value between 1.0 and 3.0. (optional, defaults to same as gamma)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        gamma(gamma?: number, gammaOut?: number): Sharp;

        /**
         * Produce the "negative" of the image.
         * @param negate true to enable and false to disable, or an object of options (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        negate(negate?: boolean | NegateOptions): Sharp;

        /**
         * Enhance output image contrast by stretching its luminance to cover a full dynamic range.
         *
         * Uses a histogram-based approach, taking a default range of 1% to 99% to reduce sensitivity to noise at the extremes.
         *
         * Luminance values below the `lower` percentile will be underexposed by clipping to zero.
         * Luminance values above the `upper` percentile will be overexposed by clipping to the max pixel value.
         *
         * @param normalise options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        normalise(normalise?: NormaliseOptions): Sharp;

        /**
         * Alternative spelling of normalise.
         * @param normalize options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        normalize(normalize?: NormaliseOptions): Sharp;

        /**
         * Perform contrast limiting adaptive histogram equalization (CLAHE)
         *
         * This will, in general, enhance the clarity of the image by bringing out
         * darker details. Please read more about CLAHE here:
         * https://en.wikipedia.org/wiki/Adaptive_histogram_equalization#Contrast_Limited_AHE
         *
         * @param options clahe options
         */
        clahe(options: ClaheOptions): Sharp;

        /**
         * Convolve the image with the specified kernel.
         * @param kernel the specified kernel
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        convolve(kernel: Kernel): Sharp;

        /**
         * Any pixel value greather than or equal to the threshold value will be set to 255, otherwise it will be set to 0.
         * @param threshold a value in the range 0-255 representing the level at which the threshold will be applied. (optional, default 128)
         * @param options threshold options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        threshold(threshold?: number, options?: ThresholdOptions): Sharp;

        /**
         * Perform a bitwise boolean operation with operand image.
         * This operation creates an output image where each pixel is the result of the selected bitwise boolean operation between the corresponding pixels of the input images.
         * @param operand Buffer containing image data or String containing the path to an image file.
         * @param operator one of "and", "or" or "eor" to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
         * @param options describes operand when using raw pixel data.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        boolean(operand: string | Buffer, operator: keyof BoolEnum, options?: { raw: Raw }): Sharp;

        /**
         * Apply the linear formula a * input + b to the image (levels adjustment)
         * @param a multiplier (optional, default 1.0)
         * @param b offset (optional, default 0.0)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        linear(a?: number | number[] | null, b?: number | number[]): Sharp;

        /**
         * Recomb the image with the specified matrix.
         * @param inputMatrix 3x3 Recombination matrix
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        recomb(inputMatrix: Matrix3x3): Sharp;

        /**
         * Transforms the image using brightness, saturation, hue rotation and lightness.
         * Brightness and lightness both operate on luminance, with the difference being that brightness is multiplicative whereas lightness is additive.
         * @param options describes the modulation
         * @returns A sharp instance that can be used to chain operations
         */
        modulate(options?: {
            brightness?: number | undefined;
            saturation?: number | undefined;
            hue?: number | undefined;
            lightness?: number | undefined;
        }): Sharp;

        //#endregion

        //#region Output functions

        /**
         * Write output image data to a file.
         * If an explicit output format is not selected, it will be inferred from the extension, with JPEG, PNG, WebP, AVIF, TIFF, DZI, and libvips' V format supported.
         * Note that raw pixel data is only supported for buffer output.
         * @param fileOut The path to write the image data to.
         * @param callback Callback function called on completion with two arguments (err, info).  info contains the output image format, size (bytes), width, height and channels.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toFile(fileOut: string, callback: (err: Error, info: OutputInfo) => void): Sharp;

        /**
         * Write output image data to a file.
         * @param fileOut The path to write the image data to.
         * @throws {Error} Invalid parameters
         * @returns A promise that fulfills with an object containing information on the resulting file
         */
        toFile(fileOut: string): Promise<OutputInfo>;

        /**
         * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
         * By default, the format will match the input image, except SVG input which becomes PNG output.
         * @param callback Callback function called on completion with three arguments (err, buffer, info).
         * @returns A sharp instance that can be used to chain operations
         */
        toBuffer(callback: (err: Error, buffer: Buffer, info: OutputInfo) => void): Sharp;

        /**
         * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
         * By default, the format will match the input image, except SVG input which becomes PNG output.
         * @param options resolve options
         * @param options.resolveWithObject Resolve the Promise with an Object containing data and info properties instead of resolving only with data.
         * @returns A promise that resolves with the Buffer data.
         */
        toBuffer(options?: { resolveWithObject: false }): Promise<Buffer>;

        /**
         * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
         * By default, the format will match the input image, except SVG input which becomes PNG output.
         * @param options resolve options
         * @param options.resolveWithObject Resolve the Promise with an Object containing data and info properties instead of resolving only with data.
         * @returns A promise that resolves with an object containing the Buffer data and an info object containing the output image format, size (bytes), width, height and channels
         */
        toBuffer(options: { resolveWithObject: true }): Promise<{ data: Buffer; info: OutputInfo }>;

        /**
         * Include all metadata (EXIF, XMP, IPTC) from the input image in the output image.
         * The default behaviour, when withMetadata is not used, is to strip all metadata and convert to the device-independent sRGB colour space.
         * This will also convert to and add a web-friendly sRGB ICC profile.
         * @param withMetadata
         * @throws {Error} Invalid parameters.
         */
        withMetadata(withMetadata?: WriteableMetadata): Sharp;

        /**
         * Use these JPEG options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        jpeg(options?: JpegOptions): Sharp;

        /**
         * Use these JP2 (JPEG 2000) options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        jp2(options?: Jp2Options): Sharp;

        /**
         * Use these JPEG-XL (JXL) options for output image.
         * This feature is experimental, please do not use in production systems.
         * Requires libvips compiled with support for libjxl.
         * The prebuilt binaries do not include this.
         * Image metadata (EXIF, XMP) is unsupported.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        jxl(options?: JxlOptions): Sharp;

        /**
         * Use these PNG options for output image.
         * PNG output is always full colour at 8 or 16 bits per pixel.
         * Indexed PNG input at 1, 2 or 4 bits per pixel is converted to 8 bits per pixel.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        png(options?: PngOptions): Sharp;

        /**
         * Use these WebP options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        webp(options?: WebpOptions): Sharp;

        /**
         * Use these GIF options for output image.
         * Requires libvips compiled with support for ImageMagick or GraphicsMagick. The prebuilt binaries do not include this - see installing a custom libvips.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        gif(options?: GifOptions): Sharp;

        /**
         * Use these AVIF options for output image.
         * Whilst it is possible to create AVIF images smaller than 16x16 pixels, most web browsers do not display these properly.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        avif(options?: AvifOptions): Sharp;

        /**
         * Use these HEIF options for output image.
         * Support for patent-encumbered HEIC images requires the use of a globally-installed libvips compiled with support for libheif, libde265 and x265.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        heif(options?: HeifOptions): Sharp;

        /**
         * Use these TIFF options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        tiff(options?: TiffOptions): Sharp;

        /**
         * Force output to be raw, uncompressed uint8 pixel data.
         * @param options Raw output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        raw(options?: RawOptions): Sharp;

        /**
         * Force output to a given format.
         * @param format a String or an Object with an 'id' attribute
         * @param options output options
         * @throws {Error} Unsupported format or options
         * @returns A sharp instance that can be used to chain operations
         */
        toFormat(
            format: keyof FormatEnum | AvailableFormatInfo,
            options?:
                | OutputOptions
                | JpegOptions
                | PngOptions
                | WebpOptions
                | AvifOptions
                | HeifOptions
                | JxlOptions
                | GifOptions
                | Jp2Options
                | TiffOptions,
        ): Sharp;

        /**
         * Use tile-based deep zoom (image pyramid) output.
         * Set the format and options for tile images via the toFormat, jpeg, png or webp functions.
         * Use a .zip or .szi file extension with toFile to write to a compressed archive file format.
         *
         * Warning: multiple sharp instances concurrently producing tile output can expose a possible race condition in some versions of libgsf.
         * @param tile tile options
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        tile(tile?: TileOptions): Sharp;

        /**
         * Set a timeout for processing, in seconds. Use a value of zero to continue processing indefinitely, the default behaviour.
         * The clock starts when libvips opens an input image for processing. Time spent waiting for a libuv thread to become available is not included.
         * @param options Object with a `seconds` attribute between 0 and 3600 (number)
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        timeout(options: TimeoutOptions): Sharp;

        //#endregion

        //#region Resize functions

        /**
         * Resize image to width, height or width x height.
         *
         * When both a width and height are provided, the possible methods by which the image should fit these are:
         *  - cover: Crop to cover both provided dimensions (the default).
         *  - contain: Embed within both provided dimensions.
         *  - fill: Ignore the aspect ratio of the input and stretch to both provided dimensions.
         *  - inside: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
         *  - outside: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
         *             Some of these values are based on the object-fit CSS property.
         *
         * When using a fit of cover or contain, the default position is centre. Other options are:
         *  - sharp.position: top, right top, right, right bottom, bottom, left bottom, left, left top.
         *  - sharp.gravity: north, northeast, east, southeast, south, southwest, west, northwest, center or centre.
         *  - sharp.strategy: cover only, dynamically crop using either the entropy or attention strategy. Some of these values are based on the object-position CSS property.
         *
         * The experimental strategy-based approach resizes so one dimension is at its target length then repeatedly ranks edge regions,
         * discarding the edge with the lowest score based on the selected strategy.
         *  - entropy: focus on the region with the highest Shannon entropy.
         *  - attention: focus on the region with the highest luminance frequency, colour saturation and presence of skin tones.
         *
         * Possible interpolation kernels are:
         *  - nearest: Use nearest neighbour interpolation.
         *  - cubic: Use a Catmull-Rom spline.
         *  - lanczos2: Use a Lanczos kernel with a=2.
         *  - lanczos3: Use a Lanczos kernel with a=3 (the default).
         *
         * @param width pixels wide the resultant image should be. Use null or undefined to auto-scale the width to match the height.
         * @param height pixels high the resultant image should be. Use null or undefined to auto-scale the height to match the width.
         * @param options resize options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        resize(widthOrOptions?: number | ResizeOptions | null, height?: number | null, options?: ResizeOptions): Sharp;

        /**
         * Shorthand for resize(null, null, options);
         *
         * @param options resize options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        resize(options: ResizeOptions): Sharp;

        /**
         * Extend / pad / extrude one or more edges of the image with either
         * the provided background colour or pixels derived from the image.
         * This operation will always occur after resizing and extraction, if any.
         * @param extend single pixel count to add to all edges or an Object with per-edge counts
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        extend(extend: number | ExtendOptions): Sharp;

        /**
         * Extract a region of the image.
         *  - Use extract() before resize() for pre-resize extraction.
         *  - Use extract() after resize() for post-resize extraction.
         *  - Use extract() before and after for both.
         *
         * @param region The region to extract
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        extract(region: Region): Sharp;

        /**
         * Trim pixels from all edges that contain values similar to the given background colour, which defaults to that of the top-left pixel.
         * Images with an alpha channel will use the combined bounding box of alpha and non-alpha channels.
         * The info response Object will contain trimOffsetLeft and trimOffsetTop properties.
         * @param trim The specific background colour to trim, the threshold for doing so or an Object with both.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        trim(trim?: string | number | TrimOptions): Sharp;

        //#endregion
    }

    interface SharpOptions {
        /**
         *  When to abort processing of invalid pixel data, one of (in order of sensitivity):
         *  'none' (least), 'truncated', 'error' or 'warning' (most), highers level imply lower levels, invalid metadata will always abort. (optional, default 'warning')
         */
        failOn?: FailOnOptions | undefined;
        /**
         * By default halt processing and raise an error when loading invalid images.
         * Set this flag to false if you'd rather apply a "best effort" to decode images,
         * even if the data is corrupt or invalid. (optional, default true)
         *
         * @deprecated Use `failOn` instead
         */
        failOnError?: boolean | undefined;
        /**
         * Do not process input images where the number of pixels (width x height) exceeds this limit.
         * Assumes image dimensions contained in the input metadata can be trusted.
         * An integral Number of pixels, zero or false to remove limit, true to use default limit of 268402689 (0x3FFF x 0x3FFF). (optional, default 268402689)
         */
        limitInputPixels?: number | boolean | undefined;
        /** Set this to true to remove safety features that help prevent memory exhaustion (SVG, PNG). (optional, default false) */
        unlimited?: boolean | undefined;
        /** Set this to false to use random access rather than sequential read. Some operations will do this automatically. */
        sequentialRead?: boolean | undefined;
        /** Number representing the DPI for vector images in the range 1 to 100000. (optional, default 72) */
        density?: number | undefined;
        /** Should the embedded ICC profile, if any, be ignored. */
        ignoreIcc?: boolean | undefined;
        /** Number of pages to extract for multi-page input (GIF, TIFF, PDF), use -1 for all pages */
        pages?: number | undefined;
        /** Page number to start extracting from for multi-page input (GIF, TIFF, PDF), zero based. (optional, default 0) */
        page?: number | undefined;
        /** subIFD (Sub Image File Directory) to extract for OME-TIFF, defaults to main image. (optional, default -1) */
        subifd?: number | undefined;
        /** Level to extract from a multi-level input (OpenSlide), zero based. (optional, default 0) */
        level?: number | undefined;
        /** Set to `true` to read all frames/pages of an animated image (equivalent of setting `pages` to `-1`). (optional, default false) */
        animated?: boolean | undefined;
        /** Describes raw pixel input image data. See raw() for pixel ordering. */
        raw?: CreateRaw | undefined;
        /** Describes a new image to be created. */
        create?: Create | undefined;
        /** Describes a new text image to be created. */
        text?: CreateText | undefined;
    }

    interface CacheOptions {
        /** Is the maximum memory in MB to use for this cache (optional, default 50) */
        memory?: number | undefined;
        /** Is the maximum number of files to hold open (optional, default 20) */
        files?: number | undefined;
        /** Is the maximum number of operations to cache (optional, default 100) */
        items?: number | undefined;
    }

    interface TimeoutOptions {
        /** Number of seconds after which processing will be stopped (default 0, eg disabled) */
        seconds: number;
    }

    interface SharpCounters {
        /** The number of tasks this module has queued waiting for libuv to provide a worker thread from its pool. */
        queue: number;
        /** The number of resize tasks currently being processed. */
        process: number;
    }

    interface Raw {
        width: number;
        height: number;
        channels: 1 | 2 | 3 | 4;
    }

    interface CreateRaw extends Raw {
        /** Specifies that the raw input has already been premultiplied, set to true to avoid sharp premultiplying the image. (optional, default false) */
        premultiplied?: boolean | undefined;
    }

    interface Create {
        /** Number of pixels wide. */
        width: number;
        /** Number of pixels high. */
        height: number;
        /** Number of bands e.g. 3 for RGB, 4 for RGBA */
        channels: Channels;
        /** Parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. */
        background: Color;
        /** Describes a noise to be created. */
        noise?: Noise | undefined;
    }

    interface CreateText {
        /** Text to render as a UTF-8 string. It can contain Pango markup, for example `<i>Le</i>Monde`. */
        text: string;
        /** Font name to render with. */
        font?: string;
        /** Absolute filesystem path to a font file that can be used by `font`. */
        fontfile?: string;
        /** Integral number of pixels to word-wrap at. Lines of text wider than this will be broken at word boundaries. (optional, default `0`) */
        width?: number;
        /**
         * Integral number of pixels high. When defined, `dpi` will be ignored and the text will automatically fit the pixel resolution
         * defined by `width` and `height`. Will be ignored if `width` is not specified or set to 0. (optional, default `0`)
         */
        height?: number;
        /** Text alignment ('left', 'centre', 'center', 'right'). (optional, default 'left') */
        align?: TextAlign;
        /** Set this to true to apply justification to the text. (optional, default `false`) */
        justify?: boolean;
        /** The resolution (size) at which to render the text. Does not take effect if `height` is specified. (optional, default `72`) */
        dpi?: number;
        /**
         * Set this to true to enable RGBA output. This is useful for colour emoji rendering,
         * or support for pango markup features like `<span foreground="red">Red!</span>`. (optional, default `false`)
         */
        rgba?: boolean;
        /** Text line height in points. Will use the font line height if none is specified. (optional, default `0`) */
        spacing?: number;
        /** Word wrapping style when width is provided, one of: 'word', 'char', 'charWord' (prefer char, fallback to word) or 'none' */
        wrap?: TextWrap;
    }

    interface WriteableMetadata {
        /** Value between 1 and 8, used to update the EXIF Orientation tag. */
        orientation?: number | undefined;
        /** Filesystem path to output ICC profile, defaults to sRGB. */
        icc?: string | undefined;
        /** Object keyed by IFD0, IFD1 etc. of key/value string pairs to write as EXIF data. (optional, default {}) */
        exif?: Record<string, any> | undefined;
        /** Number of pixels per inch (DPI) */
        density?: number | undefined;
    }

    interface Metadata {
        /** Number value of the EXIF Orientation header, if present */
        orientation?: number | undefined;
        /** Name of decoder used to decompress image data e.g. jpeg, png, webp, gif, svg */
        format?: keyof FormatEnum | undefined;
        /** Total size of image in bytes, for Stream and Buffer input only */
        size?: number | undefined;
        /** Number of pixels wide (EXIF orientation is not taken into consideration) */
        width?: number | undefined;
        /** Number of pixels high (EXIF orientation is not taken into consideration) */
        height?: number | undefined;
        /** Name of colour space interpretation */
        space?: keyof ColourspaceEnum | undefined;
        /** Number of bands e.g. 3 for sRGB, 4 for CMYK */
        channels?: Channels | undefined;
        /** Name of pixel depth format e.g. uchar, char, ushort, float ... */
        depth?: string | undefined;
        /** Number of pixels per inch (DPI), if present */
        density?: number | undefined;
        /** String containing JPEG chroma subsampling, 4:2:0 or 4:4:4 for RGB, 4:2:0:4 or 4:4:4:4 for CMYK */
        chromaSubsampling: string;
        /** Boolean indicating whether the image is interlaced using a progressive scan */
        isProgressive?: boolean | undefined;
        /** Number of pages/frames contained within the image, with support for TIFF, HEIF, PDF, animated GIF and animated WebP */
        pages?: number | undefined;
        /** Number of pixels high each page in a multi-page image will be. */
        pageHeight?: number | undefined;
        /** Number of times to loop an animated image, zero refers to a continuous loop. */
        loop?: number | undefined;
        /** Delay in ms between each page in an animated image, provided as an array of integers. */
        delay?: number[] | undefined;
        /**  Number of the primary page in a HEIF image */
        pagePrimary?: number | undefined;
        /** Boolean indicating the presence of an embedded ICC profile */
        hasProfile?: boolean | undefined;
        /** Boolean indicating the presence of an alpha transparency channel */
        hasAlpha?: boolean | undefined;
        /** Buffer containing raw EXIF data, if present */
        exif?: Buffer | undefined;
        /** Buffer containing raw ICC profile data, if present */
        icc?: Buffer | undefined;
        /** Buffer containing raw IPTC data, if present */
        iptc?: Buffer | undefined;
        /** Buffer containing raw XMP data, if present */
        xmp?: Buffer | undefined;
        /** Buffer containing raw TIFFTAG_PHOTOSHOP data, if present */
        tifftagPhotoshop?: Buffer | undefined;
        /** The encoder used to compress an HEIF file, `av1` (AVIF) or `hevc` (HEIC) */
        compression?: 'av1' | 'hevc';
        /** Default background colour, if present, for PNG (bKGD) and GIF images, either an RGB Object or a single greyscale value */
        background?: { r: number; g: number; b: number } | number;
        /** Details of each level in a multi-level image provided as an array of objects, requires libvips compiled with support for OpenSlide */
        levels?: LevelMetadata[] | undefined;
        /** Number of Sub Image File Directories in an OME-TIFF image */
        subifds?: number | undefined;
        /** The unit of resolution (density) */
        resolutionUnit?: 'inch' | 'cm' | undefined;
        /** String containing format for images loaded via *magick */
        formatMagick?: string | undefined;
    }

    interface LevelMetadata {
        width: number;
        height: number;
    }

    interface Stats {
        /** Array of channel statistics for each channel in the image. */
        channels: ChannelStats[];
        /** Value to identify if the image is opaque or transparent, based on the presence and use of alpha channel */
        isOpaque: boolean;
        /** Histogram-based estimation of greyscale entropy, discarding alpha channel if any (experimental) */
        entropy: number;
        /** Estimation of greyscale sharpness based on the standard deviation of a Laplacian convolution, discarding alpha channel if any (experimental) */
        sharpness: number;
        /** Object containing most dominant sRGB colour based on a 4096-bin 3D histogram (experimental) */
        dominant: { r: number; g: number; b: number };
    }

    interface ChannelStats {
        /** minimum value in the channel */
        min: number;
        /** maximum value in the channel */
        max: number;
        /** sum of all values in a channel */
        sum: number;
        /** sum of squared values in a channel */
        squaresSum: number;
        /** mean of the values in a channel */
        mean: number;
        /** standard deviation for the values in a channel */
        stdev: number;
        /** x-coordinate of one of the pixel where the minimum lies */
        minX: number;
        /** y-coordinate of one of the pixel where the minimum lies */
        minY: number;
        /** x-coordinate of one of the pixel where the maximum lies */
        maxX: number;
        /** y-coordinate of one of the pixel where the maximum lies */
        maxY: number;
    }

    interface OutputOptions {
        /** Force format output, otherwise attempt to use input format (optional, default true) */
        force?: boolean | undefined;
    }

    interface JpegOptions extends OutputOptions {
        /** Quality, integer 1-100 (optional, default 80) */
        quality?: number | undefined;
        /** Use progressive (interlace) scan (optional, default false) */
        progressive?: boolean | undefined;
        /** Set to '4:4:4' to prevent chroma subsampling when quality <= 90 (optional, default '4:2:0') */
        chromaSubsampling?: string | undefined;
        /** Apply trellis quantisation (optional, default  false) */
        trellisQuantisation?: boolean | undefined;
        /** Apply overshoot deringing (optional, default  false) */
        overshootDeringing?: boolean | undefined;
        /** Optimise progressive scans, forces progressive (optional, default false) */
        optimiseScans?: boolean | undefined;
        /** Alternative spelling of optimiseScans (optional, default false) */
        optimizeScans?: boolean | undefined;
        /** Optimise Huffman coding tables (optional, default true) */
        optimiseCoding?: boolean | undefined;
        /** Alternative spelling of optimiseCoding (optional, default true) */
        optimizeCoding?: boolean | undefined;
        /** Quantization table to use, integer 0-8 (optional, default 0) */
        quantisationTable?: number | undefined;
        /** Alternative spelling of quantisationTable (optional, default 0) */
        quantizationTable?: number | undefined;
        /** Use mozjpeg defaults (optional, default false) */
        mozjpeg?: boolean | undefined;
    }

    interface Jp2Options extends OutputOptions {
        /** Quality, integer 1-100 (optional, default 80) */
        quality?: number;
        /** Use lossless compression mode (optional, default false) */
        lossless?: boolean;
        /** Horizontal tile size (optional, default 512) */
        tileWidth?: number;
        /** Vertical tile size (optional, default 512) */
        tileHeight?: number;
        /** Set to '4:2:0' to enable chroma subsampling (optional, default '4:4:4') */
        chromaSubsampling?: '4:4:4' | '4:2:0';
    }

    interface JxlOptions extends OutputOptions {
        /** Maximum encoding error, between 0 (highest quality) and 15 (lowest quality) (optional, default 1.0) */
        distance?: number;
        /** Calculate distance based on JPEG-like quality, between 1 and 100, overrides distance if specified */
        quality?: number;
        /** Target decode speed tier, between 0 (highest quality) and 4 (lowest quality) (optional, default 0) */
        decodingTier?: number;
        /** Use lossless compression (optional, default false) */
        lossless?: boolean;
        /** CPU effort, between 3 (fastest) and 9 (slowest) (optional, default 7) */
        effort?: number | undefined;
    }

    interface WebpOptions extends OutputOptions, AnimationOptions {
        /** Quality, integer 1-100 (optional, default 80) */
        quality?: number | undefined;
        /** Quality of alpha layer, number from 0-100 (optional, default 100) */
        alphaQuality?: number | undefined;
        /** Use lossless compression mode (optional, default false) */
        lossless?: boolean | undefined;
        /** Use near_lossless compression mode (optional, default false) */
        nearLossless?: boolean | undefined;
        /** Use high quality chroma subsampling (optional, default false) */
        smartSubsample?: boolean | undefined;
        /** Level of CPU effort to reduce file size, integer 0-6 (optional, default 4) */
        effort?: number | undefined;
        /** Prevent use of animation key frames to minimise file size (slow) (optional, default false) */
        minSize?: boolean;
        /** Allow mixture of lossy and lossless animation frames (slow) (optional, default false) */
        mixed?: boolean;
        /** Preset options: one of default, photo, picture, drawing, icon, text (optional, default 'default') */
        preset?: keyof PresetEnum | undefined;
    }

    interface AvifOptions extends OutputOptions {
        /** quality, integer 1-100 (optional, default 50) */
        quality?: number | undefined;
        /** use lossless compression (optional, default false) */
        lossless?: boolean | undefined;
        /** Level of CPU effort to reduce file size, between 0 (fastest) and 9 (slowest) (optional, default 4) */
        effort?: number | undefined;
        /** set to '4:2:0' to use chroma subsampling, requires libvips v8.11.0 (optional, default '4:4:4') */
        chromaSubsampling?: string | undefined;
    }

    interface HeifOptions extends OutputOptions {
        /** quality, integer 1-100 (optional, default 50) */
        quality?: number | undefined;
        /** compression format: av1, hevc (optional, default 'av1') */
        compression?: 'av1' | 'hevc' | undefined;
        /** use lossless compression (optional, default false) */
        lossless?: boolean | undefined;
        /** Level of CPU effort to reduce file size, between 0 (fastest) and 9 (slowest) (optional, default 4) */
        effort?: number | undefined;
        /** set to '4:2:0' to use chroma subsampling (optional, default '4:4:4') */
        chromaSubsampling?: string | undefined;
    }

    interface GifOptions extends OutputOptions, AnimationOptions {
        /** Re-use existing palette, otherwise generate new (slow) */
        reuse?: boolean | undefined;
        /** Use progressive (interlace) scan */
        progressive?: boolean | undefined;
        /** Maximum number of palette entries, including transparency, between 2 and 256 (optional, default 256) */
        colours?: number | undefined;
        /** Alternative spelling of "colours". Maximum number of palette entries, including transparency, between 2 and 256 (optional, default 256) */
        colors?: number | undefined;
        /** Level of CPU effort to reduce file size, between 1 (fastest) and 10 (slowest) (optional, default 7) */
        effort?: number | undefined;
        /** Level of Floyd-Steinberg error diffusion, between 0 (least) and 1 (most) (optional, default 1.0) */
        dither?: number | undefined;
        /** Maximum inter-frame error for transparency, between 0 (lossless) and 32 (optional, default 0) */
        interFrameMaxError?: number;
        /** Maximum inter-palette error for palette reuse, between 0 and 256 (optional, default 3) */
        interPaletteMaxError?: number;
    }

    interface TiffOptions extends OutputOptions {
        /** Quality, integer 1-100 (optional, default 80) */
        quality?: number | undefined;
        /** Compression options: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k (optional, default 'jpeg') */
        compression?: string | undefined;
        /** Compression predictor options: none, horizontal, float (optional, default 'horizontal') */
        predictor?: string | undefined;
        /** Write an image pyramid (optional, default false) */
        pyramid?: boolean | undefined;
        /** Write a tiled tiff (optional, default false) */
        tile?: boolean | undefined;
        /** Horizontal tile size (optional, default 256) */
        tileWidth?: number | undefined;
        /** Vertical tile size (optional, default 256) */
        tileHeight?: number | undefined;
        /** Horizontal resolution in pixels/mm (optional, default 1.0) */
        xres?: number | undefined;
        /** Vertical resolution in pixels/mm (optional, default 1.0) */
        yres?: number | undefined;
        /** Reduce bitdepth to 1, 2 or 4 bit (optional, default 8) */
        bitdepth?: 1 | 2 | 4 | 8 | undefined;
        /** Resolution unit options: inch, cm (optional, default 'inch') */
        resolutionUnit?: 'inch' | 'cm' | undefined;
    }

    interface PngOptions extends OutputOptions {
        /** Use progressive (interlace) scan (optional, default false) */
        progressive?: boolean | undefined;
        /** zlib compression level, 0-9 (optional, default 6) */
        compressionLevel?: number | undefined;
        /** Use adaptive row filtering (optional, default false) */
        adaptiveFiltering?: boolean | undefined;
        /** Use the lowest number of colours needed to achieve given quality (optional, default `100`) */
        quality?: number | undefined;
        /** Level of CPU effort to reduce file size, between 1 (fastest) and 10 (slowest), sets palette to true (optional, default 7) */
        effort?: number | undefined;
        /** Quantise to a palette-based image with alpha transparency support (optional, default false) */
        palette?: boolean | undefined;
        /** Maximum number of palette entries (optional, default 256) */
        colours?: number | undefined;
        /** Alternative Spelling of "colours". Maximum number of palette entries (optional, default 256) */
        colors?: number | undefined;
        /**  Level of Floyd-Steinberg error diffusion (optional, default 1.0) */
        dither?: number | undefined;
    }

    interface RotateOptions {
        /** parsed by the color module to extract values for red, green, blue and alpha. (optional, default "#000000") */
        background?: Color | undefined;
    }

    interface FlattenOptions {
        /** background colour, parsed by the color module, defaults to black. (optional, default {r:0,g:0,b:0}) */
        background?: Color | undefined;
    }

    interface NegateOptions {
        /** whether or not to negate any alpha channel. (optional, default true) */
        alpha?: boolean | undefined;
    }

    interface NormaliseOptions {
      /** Percentile below which luminance values will be underexposed. */
      lower?: number | undefined;
      /** Percentile above which luminance values will be overexposed. */
      upper?: number | undefined;
    }

    interface ResizeOptions {
        /** Alternative means of specifying width. If both are present this takes priority. */
        width?: number | undefined;
        /** Alternative means of specifying height. If both are present this takes priority. */
        height?: number | undefined;
        /** How the image should be resized to fit both provided dimensions, one of cover, contain, fill, inside or outside. (optional, default 'cover') */
        fit?: keyof FitEnum | undefined;
        /** Position, gravity or strategy to use when fit is cover or contain. (optional, default 'centre') */
        position?: number | string | undefined;
        /** Background colour when using a fit of contain, parsed by the color module, defaults to black without transparency. (optional, default {r:0,g:0,b:0,alpha:1}) */
        background?: Color | undefined;
        /** The kernel to use for image reduction. (optional, default 'lanczos3') */
        kernel?: keyof KernelEnum | undefined;
        /** Do not enlarge if the width or height are already less than the specified dimensions, equivalent to GraphicsMagick's > geometry option. (optional, default false) */
        withoutEnlargement?: boolean | undefined;
        /** Do not reduce if the width or height are already greater than the specified dimensions, equivalent to GraphicsMagick's < geometry option. (optional, default false) */
        withoutReduction?: boolean | undefined;
        /** Take greater advantage of the JPEG and WebP shrink-on-load feature, which can lead to a slight moiré pattern on some images. (optional, default true) */
        fastShrinkOnLoad?: boolean | undefined;
    }

    interface Region {
        /** zero-indexed offset from left edge */
        left: number;
        /** zero-indexed offset from top edge */
        top: number;
        /** dimension of extracted image */
        width: number;
        /** dimension of extracted image */
        height: number;
    }

    interface Noise {
        /** type of generated noise, currently only gaussian is supported. */
        type?: 'gaussian' | undefined;
        /** mean of pixels in generated noise. */
        mean?: number | undefined;
        /** standard deviation of pixels in generated noise. */
        sigma?: number | undefined;
    }

    type ExtendWith = 'background' | 'copy' | 'repeat' | 'mirror';

    interface ExtendOptions {
        /** single pixel count to top edge (optional, default 0) */
        top?: number | undefined;
        /** single pixel count to left edge (optional, default 0) */
        left?: number | undefined;
        /** single pixel count to bottom edge (optional, default 0) */
        bottom?: number | undefined;
        /** single pixel count to right edge (optional, default 0) */
        right?: number | undefined;
        /** background colour, parsed by the color module, defaults to black without transparency. (optional, default {r:0,g:0,b:0,alpha:1}) */
        background?: Color | undefined;
        /** how the extension is done, one of: "background", "copy", "repeat", "mirror" (optional, default `'background'`) */
        extendWith?: ExtendWith | undefined;
    }

    interface TrimOptions {
        /** background colour, parsed by the color module, defaults to that of the top-left pixel. (optional) */
        background?: Color | undefined;
        /** the allowed difference from the above colour, a positive number. (optional, default `10`) */
        threshold?: number | undefined;
    }

    interface RawOptions {
        depth?: 'char' | 'uchar' | 'short' | 'ushort' | 'int' | 'uint' | 'float' | 'complex' | 'double' | 'dpcomplex';
    }

    /** 3 for sRGB, 4 for CMYK */
    type Channels = 3 | 4;

    interface RGBA {
        r?: number | undefined;
        g?: number | undefined;
        b?: number | undefined;
        alpha?: number | undefined;
    }

    type Color = string | RGBA;

    interface Kernel {
        /** width of the kernel in pixels. */
        width: number;
        /** height of the kernel in pixels. */
        height: number;
        /** Array of length width*height containing the kernel values. */
        kernel: ArrayLike<number>;
        /** the scale of the kernel in pixels. (optional, default sum) */
        scale?: number | undefined;
        /** the offset of the kernel in pixels. (optional, default 0) */
        offset?: number | undefined;
    }

    interface ClaheOptions {
        /** width of the region */
        width: number;
        /** height of the region */
        height: number;
        /** max slope of the cumulative contrast. A value of 0 disables contrast limiting. Valid values are integers in the range 0-100 (inclusive) (optional, default 3) */
        maxSlope?: number | undefined;
    }

    interface ThresholdOptions {
        /** convert to single channel greyscale. (optional, default true) */
        greyscale?: boolean | undefined;
        /** alternative spelling for greyscale. (optional, default true) */
        grayscale?: boolean | undefined;
    }

    interface OverlayOptions extends SharpOptions {
        /** Buffer containing image data, String containing the path to an image file, or Create object  */
        input?: string | Buffer | { create: Create } | { text: CreateText } | { raw: CreateRaw } | undefined;
        /** how to blend this image with the image below. (optional, default `'over'`) */
        blend?: Blend | undefined;
        /** gravity at which to place the overlay. (optional, default 'centre') */
        gravity?: Gravity | undefined;
        /** the pixel offset from the top edge. */
        top?: number | undefined;
        /** the pixel offset from the left edge. */
        left?: number | undefined;
        /** set to true to repeat the overlay image across the entire image with the given  gravity. (optional, default false) */
        tile?: boolean | undefined;
        /** Set to true to avoid premultipling the image below. Equivalent to the --premultiplied vips option. */
        premultiplied?: boolean | undefined;
    }

    interface TileOptions {
        /** Tile size in pixels, a value between 1 and 8192. (optional, default 256) */
        size?: number | undefined;
        /** Tile overlap in pixels, a value between 0 and 8192. (optional, default 0) */
        overlap?: number | undefined;
        /** Tile angle of rotation, must be a multiple of 90. (optional, default 0) */
        angle?: number | undefined;
        /** background colour, parsed by the color module, defaults to white without transparency. (optional, default {r:255,g:255,b:255,alpha:1}) */
        background?: string | RGBA | undefined;
        /** How deep to make the pyramid, possible values are "onepixel", "onetile" or "one" (default based on layout) */
        depth?: string | undefined;
        /** Threshold to skip tile generation, a value 0 - 255 for 8-bit images or 0 - 65535 for 16-bit images */
        skipBlanks?: number | undefined;
        /** Tile container, with value fs (filesystem) or zip (compressed file). (optional, default 'fs') */
        container?: TileContainer | undefined;
        /** Filesystem layout, possible values are dz, iiif, iiif3, zoomify or google. (optional, default 'dz') */
        layout?: TileLayout | undefined;
        /** Centre image in tile. (optional, default false) */
        centre?: boolean | undefined;
        /** Alternative spelling of centre. (optional, default false) */
        center?: boolean | undefined;
        /** When layout is iiif/iiif3, sets the @id/id attribute of info.json (optional, default 'https://example.com/iiif') */
        id?: string | undefined;
        /** The name of the directory within the zip file when container is `zip`. */
        basename?: string | undefined;
    }

    interface AnimationOptions {
        /** Number of animation iterations, a value between 0 and 65535. Use 0 for infinite animation. (optional, default 0) */
        loop?: number | undefined;
        /** delay(s) between animation frames (in milliseconds), each value between 0 and 65535. (optional) */
        delay?: number | number[] | undefined;
    }

    interface SharpenOptions {
        /** The sigma of the Gaussian mask, where sigma = 1 + radius / 2, between 0.000001 and 10000 */
        sigma: number;
        /** The level of sharpening to apply to "flat" areas, between 0 and 1000000 (optional, default 1.0) */
        m1?: number | undefined;
        /** The level of sharpening to apply to "jagged" areas, between 0 and 1000000 (optional, default 2.0) */
        m2?: number | undefined;
        /** Threshold between "flat" and "jagged", between 0 and 1000000 (optional, default 2.0) */
        x1?: number | undefined;
        /** Maximum amount of brightening, between 0 and 1000000 (optional, default 10.0) */
        y2?: number | undefined;
        /** Maximum amount of darkening, between 0 and 1000000 (optional, default 20.0) */
        y3?: number | undefined;
    }

    interface AffineOptions {
        /** Parsed by the color module to extract values for red, green, blue and alpha. (optional, default "#000000") */
        background?: string | object | undefined;
        /** Input horizontal offset (optional, default 0) */
        idx?: number | undefined;
        /** Input vertical offset (optional, default 0) */
        idy?: number | undefined;
        /** Output horizontal offset (optional, default 0) */
        odx?: number | undefined;
        /** Output horizontal offset (optional, default 0) */
        ody?: number | undefined;
        /** Interpolator (optional, default sharp.interpolators.bicubic) */
        interpolator?: Interpolators[keyof Interpolators] | undefined;
    }

    interface OutputInfo {
        format: string;
        size: number;
        width: number;
        height: number;
        channels: 1 | 2 | 3 | 4;
        /** indicating if premultiplication was used */
        premultiplied: boolean;
        /** Only defined when using a crop strategy */
        cropOffsetLeft?: number | undefined;
        /** Only defined when using a crop strategy */
        cropOffsetTop?: number | undefined;
        /** Only defined when using a trim method */
        trimOffsetLeft?: number | undefined;
        /** Only defined when using a trim method */
        trimOffsetTop?: number | undefined;
        /** DPI the font was rendered at, only defined when using `text` input */
        textAutofitDpi?: number | undefined;
        /** When using the attention crop strategy, the focal point of the cropped region */
        attentionX?: number | undefined;
        attentionY?: number | undefined;
    }

    interface AvailableFormatInfo {
        id: string;
        input: { file: boolean; buffer: boolean; stream: boolean; fileSuffix?: string[] };
        output: { file: boolean; buffer: boolean; stream: boolean; alias?: string[] };
    }

    interface FitEnum {
        contain: 'contain';
        cover: 'cover';
        fill: 'fill';
        inside: 'inside';
        outside: 'outside';
    }

    interface KernelEnum {
        nearest: 'nearest';
        cubic: 'cubic';
        mitchell: 'mitchell';
        lanczos2: 'lanczos2';
        lanczos3: 'lanczos3';
    }

    interface PresetEnum {
        default: 'default';
        picture: 'picture';
        photo: 'photo';
        drawing: 'drawing';
        icon: 'icon';
        text: 'text';
    }

    interface BoolEnum {
        and: 'and';
        or: 'or';
        eor: 'eor';
    }

    interface ColourspaceEnum {
        multiband: string;
        'b-w': string;
        bw: string;
        cmyk: string;
        srgb: string;
    }

    type FailOnOptions = 'none' | 'truncated' | 'error' | 'warning';

    type TextAlign = 'left' | 'centre' | 'center' | 'right';

    type TextWrap = 'word' | 'char' | 'charWord' | 'none';

    type TileContainer = 'fs' | 'zip';

    type TileLayout = 'dz' | 'iiif' | 'iiif3' | 'zoomify' | 'google';

    type Blend =
        | 'clear'
        | 'source'
        | 'over'
        | 'in'
        | 'out'
        | 'atop'
        | 'dest'
        | 'dest-over'
        | 'dest-in'
        | 'dest-out'
        | 'dest-atop'
        | 'xor'
        | 'add'
        | 'saturate'
        | 'multiply'
        | 'screen'
        | 'overlay'
        | 'darken'
        | 'lighten'
        | 'color-dodge'
        | 'colour-dodge'
        | 'color-burn'
        | 'colour-burn'
        | 'hard-light'
        | 'soft-light'
        | 'difference'
        | 'exclusion';

    type Gravity = number | string;

    interface GravityEnum {
        north: number;
        northeast: number;
        southeast: number;
        south: number;
        southwest: number;
        west: number;
        northwest: number;
        east: number;
        center: number;
        centre: number;
    }

    interface StrategyEnum {
        entropy: number;
        attention: number;
    }

    interface FormatEnum {
        avif: AvailableFormatInfo;
        dz: AvailableFormatInfo;
        fits: AvailableFormatInfo;
        gif: AvailableFormatInfo;
        heif: AvailableFormatInfo;
        input: AvailableFormatInfo;
        jpeg: AvailableFormatInfo;
        jpg: AvailableFormatInfo;
        jp2: AvailableFormatInfo;
        jxl: AvailableFormatInfo;
        magick: AvailableFormatInfo;
        openslide: AvailableFormatInfo;
        pdf: AvailableFormatInfo;
        png: AvailableFormatInfo;
        ppm: AvailableFormatInfo;
        raw: AvailableFormatInfo;
        svg: AvailableFormatInfo;
        tiff: AvailableFormatInfo;
        tif: AvailableFormatInfo;
        v: AvailableFormatInfo;
        webp: AvailableFormatInfo;
    }

    interface CacheResult {
        memory: { current: number; high: number; max: number };
        files: { current: number; max: number };
        items: { current: number; max: number };
    }

    interface Interpolators {
        /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
        nearest: 'nearest';
        /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
        bilinear: 'bilinear';
        /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
        bicubic: 'bicubic';
        /**
         * [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100).
         * Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2.
         */
        locallyBoundedBicubic: 'lbb';
        /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
        nohalo: 'nohalo';
        /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
        vertexSplitQuadraticBasisSpline: 'vsqbs';
    }

    type Matrix2x2 = [[number, number], [number, number]];
    type Matrix3x3 = [[number, number, number], [number, number, number], [number, number, number]];
}

export = sharp;

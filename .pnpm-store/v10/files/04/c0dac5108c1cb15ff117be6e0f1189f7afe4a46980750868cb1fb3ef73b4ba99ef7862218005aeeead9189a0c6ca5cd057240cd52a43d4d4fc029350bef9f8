import { MinimapCharRenderer } from './minimapCharRenderer.js';
import { allCharCodes } from './minimapCharSheet.js';
import { prebakedMiniMaps } from './minimapPreBaked.js';
import { toUint8 } from '../../../../base/common/uint.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Creates character renderers. It takes a 'scale' that determines how large
 * characters should be drawn. Using this, it draws data into a canvas and
 * then downsamples the characters as necessary for the current display.
 * This makes rendering more efficient, rather than drawing a full (tiny)
 * font, or downsampling in real-time.
 */
class MinimapCharRendererFactory {
    /**
     * Creates a new character renderer factory with the given scale.
     */
    static create(scale, fontFamily) {
        // renderers are immutable. By default we'll 'create' a new minimap
        // character renderer whenever we switch editors, no need to do extra work.
        if (this.lastCreated && scale === this.lastCreated.scale && fontFamily === this.lastFontFamily) {
            return this.lastCreated;
        }
        let factory;
        if (prebakedMiniMaps[scale]) {
            factory = new MinimapCharRenderer(prebakedMiniMaps[scale](), scale);
        }
        else {
            factory = MinimapCharRendererFactory.createFromSampleData(MinimapCharRendererFactory.createSampleData(fontFamily).data, scale);
        }
        this.lastFontFamily = fontFamily;
        this.lastCreated = factory;
        return factory;
    }
    /**
     * Creates the font sample data, writing to a canvas.
     */
    static createSampleData(fontFamily) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.height = `${16 /* Constants.SAMPLED_CHAR_HEIGHT */}px`;
        canvas.height = 16 /* Constants.SAMPLED_CHAR_HEIGHT */;
        canvas.width = 96 /* Constants.CHAR_COUNT */ * 10 /* Constants.SAMPLED_CHAR_WIDTH */;
        canvas.style.width = 96 /* Constants.CHAR_COUNT */ * 10 /* Constants.SAMPLED_CHAR_WIDTH */ + 'px';
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${16 /* Constants.SAMPLED_CHAR_HEIGHT */}px ${fontFamily}`;
        ctx.textBaseline = 'middle';
        let x = 0;
        for (const code of allCharCodes) {
            ctx.fillText(String.fromCharCode(code), x, 16 /* Constants.SAMPLED_CHAR_HEIGHT */ / 2);
            x += 10 /* Constants.SAMPLED_CHAR_WIDTH */;
        }
        return ctx.getImageData(0, 0, 96 /* Constants.CHAR_COUNT */ * 10 /* Constants.SAMPLED_CHAR_WIDTH */, 16 /* Constants.SAMPLED_CHAR_HEIGHT */);
    }
    /**
     * Creates a character renderer from the canvas sample data.
     */
    static createFromSampleData(source, scale) {
        const expectedLength = 16 /* Constants.SAMPLED_CHAR_HEIGHT */ * 10 /* Constants.SAMPLED_CHAR_WIDTH */ * 4 /* Constants.RGBA_CHANNELS_CNT */ * 96 /* Constants.CHAR_COUNT */;
        if (source.length !== expectedLength) {
            throw new Error('Unexpected source in MinimapCharRenderer');
        }
        const charData = MinimapCharRendererFactory._downsample(source, scale);
        return new MinimapCharRenderer(charData, scale);
    }
    static _downsampleChar(source, sourceOffset, dest, destOffset, scale) {
        const width = 1 /* Constants.BASE_CHAR_WIDTH */ * scale;
        const height = 2 /* Constants.BASE_CHAR_HEIGHT */ * scale;
        let targetIndex = destOffset;
        let brightest = 0;
        // This is essentially an ad-hoc rescaling algorithm. Standard approaches
        // like bicubic interpolation are awesome for scaling between image sizes,
        // but don't work so well when scaling to very small pixel values, we end
        // up with blurry, indistinct forms.
        //
        // The approach taken here is simply mapping each source pixel to the target
        // pixels, and taking the weighted values for all pixels in each, and then
        // averaging them out. Finally we apply an intensity boost in _downsample,
        // since when scaling to the smallest pixel sizes there's more black space
        // which causes characters to be much less distinct.
        for (let y = 0; y < height; y++) {
            // 1. For this destination pixel, get the source pixels we're sampling
            // from (x1, y1) to the next pixel (x2, y2)
            const sourceY1 = (y / height) * 16 /* Constants.SAMPLED_CHAR_HEIGHT */;
            const sourceY2 = ((y + 1) / height) * 16 /* Constants.SAMPLED_CHAR_HEIGHT */;
            for (let x = 0; x < width; x++) {
                const sourceX1 = (x / width) * 10 /* Constants.SAMPLED_CHAR_WIDTH */;
                const sourceX2 = ((x + 1) / width) * 10 /* Constants.SAMPLED_CHAR_WIDTH */;
                // 2. Sample all of them, summing them up and weighting them. Similar
                // to bilinear interpolation.
                let value = 0;
                let samples = 0;
                for (let sy = sourceY1; sy < sourceY2; sy++) {
                    const sourceRow = sourceOffset + Math.floor(sy) * 3840 /* Constants.RGBA_SAMPLED_ROW_WIDTH */;
                    const yBalance = 1 - (sy - Math.floor(sy));
                    for (let sx = sourceX1; sx < sourceX2; sx++) {
                        const xBalance = 1 - (sx - Math.floor(sx));
                        const sourceIndex = sourceRow + Math.floor(sx) * 4 /* Constants.RGBA_CHANNELS_CNT */;
                        const weight = xBalance * yBalance;
                        samples += weight;
                        value += ((source[sourceIndex] * source[sourceIndex + 3]) / 255) * weight;
                    }
                }
                const final = value / samples;
                brightest = Math.max(brightest, final);
                dest[targetIndex++] = toUint8(final);
            }
        }
        return brightest;
    }
    static _downsample(data, scale) {
        const pixelsPerCharacter = 2 /* Constants.BASE_CHAR_HEIGHT */ * scale * 1 /* Constants.BASE_CHAR_WIDTH */ * scale;
        const resultLen = pixelsPerCharacter * 96 /* Constants.CHAR_COUNT */;
        const result = new Uint8ClampedArray(resultLen);
        let resultOffset = 0;
        let sourceOffset = 0;
        let brightest = 0;
        for (let charIndex = 0; charIndex < 96 /* Constants.CHAR_COUNT */; charIndex++) {
            brightest = Math.max(brightest, this._downsampleChar(data, sourceOffset, result, resultOffset, scale));
            resultOffset += pixelsPerCharacter;
            sourceOffset += 10 /* Constants.SAMPLED_CHAR_WIDTH */ * 4 /* Constants.RGBA_CHANNELS_CNT */;
        }
        if (brightest > 0) {
            const adjust = 255 / brightest;
            for (let i = 0; i < resultLen; i++) {
                result[i] *= adjust;
            }
        }
        return result;
    }
}

export { MinimapCharRendererFactory };

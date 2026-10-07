import { memoize } from '../../../../base/common/decorators.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { isMacintosh } from '../../../../base/common/platform.js';
import { StringBuilder } from '../../../common/core/stringBuilder.js';
import { TokenMetadata } from '../../../common/encodedTokenAttributes.js';
import { ensureNonNullable } from '../gpuUtils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let nextId = 0;
class GlyphRasterizer extends Disposable {
    get cacheKey() {
        return `${this.fontFamily}_${this.fontSize}px`;
    }
    constructor(fontSize, fontFamily, devicePixelRatio, _decorationStyleCache) {
        super();
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.devicePixelRatio = devicePixelRatio;
        this._decorationStyleCache = _decorationStyleCache;
        this.id = nextId++;
        this._workGlyph = {
            source: null,
            boundingBox: {
                left: 0,
                bottom: 0,
                right: 0,
                top: 0,
            },
            originOffset: {
                x: 0,
                y: 0,
            },
            fontBoundingBoxAscent: 0,
            fontBoundingBoxDescent: 0,
        };
        this._workGlyphConfig = { chars: undefined, tokenMetadata: 0, decorationStyleSetId: 0 };
        // TODO: Support workbench.fontAliasing correctly
        this._antiAliasing = isMacintosh ? 'greyscale' : 'subpixel';
        const devicePixelFontSize = Math.ceil(this.fontSize * devicePixelRatio);
        this._canvas = new OffscreenCanvas(devicePixelFontSize * 3, devicePixelFontSize * 3);
        this._ctx = ensureNonNullable(this._canvas.getContext('2d', {
            willReadFrequently: true,
            alpha: this._antiAliasing === 'greyscale',
        }));
        this._ctx.textBaseline = 'top';
        this._ctx.fillStyle = '#FFFFFF';
        this._ctx.font = `${devicePixelFontSize}px ${this.fontFamily}`;
        this._textMetrics = this._ctx.measureText('A');
    }
    /**
     * Rasterizes a glyph. Note that the returned object is reused across different glyphs and
     * therefore is only safe for synchronous access.
     */
    rasterizeGlyph(chars, tokenMetadata, decorationStyleSetId, colorMap) {
        if (chars === '') {
            return {
                source: this._canvas,
                boundingBox: { top: 0, left: 0, bottom: -1, right: -1 },
                originOffset: { x: 0, y: 0 },
                fontBoundingBoxAscent: 0,
                fontBoundingBoxDescent: 0,
            };
        }
        // Check if the last glyph matches the config, reuse if so. This helps avoid unnecessary
        // work when the rasterizer is called multiple times like when the glyph doesn't fit into a
        // page.
        if (this._workGlyphConfig.chars === chars && this._workGlyphConfig.tokenMetadata === tokenMetadata && this._workGlyphConfig.decorationStyleSetId === decorationStyleSetId) {
            return this._workGlyph;
        }
        this._workGlyphConfig.chars = chars;
        this._workGlyphConfig.tokenMetadata = tokenMetadata;
        this._workGlyphConfig.decorationStyleSetId = decorationStyleSetId;
        return this._rasterizeGlyph(chars, tokenMetadata, decorationStyleSetId, colorMap);
    }
    _rasterizeGlyph(chars, tokenMetadata, decorationStyleSetId, colorMap) {
        const devicePixelFontSize = Math.ceil(this.fontSize * this.devicePixelRatio);
        const canvasDim = devicePixelFontSize * 3;
        if (this._canvas.width !== canvasDim) {
            this._canvas.width = canvasDim;
            this._canvas.height = canvasDim;
        }
        this._ctx.save();
        // The sub-pixel x offset is the fractional part of the x pixel coordinate of the cell, this
        // is used to improve the spacing between rendered characters.
        const xSubPixelXOffset = (tokenMetadata & 0b1111) / 10;
        const bgId = TokenMetadata.getBackground(tokenMetadata);
        const bg = colorMap[bgId];
        const decorationStyleSet = this._decorationStyleCache.getStyleSet(decorationStyleSetId);
        // When SPAA is used, the background color must be present to get the right glyph
        if (this._antiAliasing === 'subpixel') {
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
        else {
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }
        const fontSb = new StringBuilder(200);
        const fontStyle = TokenMetadata.getFontStyle(tokenMetadata);
        if (fontStyle & 1 /* FontStyle.Italic */) {
            fontSb.appendString('italic ');
        }
        if (decorationStyleSet?.bold !== undefined) {
            if (decorationStyleSet.bold) {
                fontSb.appendString('bold ');
            }
        }
        else if (fontStyle & 2 /* FontStyle.Bold */) {
            fontSb.appendString('bold ');
        }
        fontSb.appendString(`${devicePixelFontSize}px ${this.fontFamily}`);
        this._ctx.font = fontSb.build();
        // TODO: Support FontStyle.Strikethrough and FontStyle.Underline text decorations, these
        //       need to be drawn manually to the canvas. See xterm.js for "dodging" the text for
        //       underlines.
        const originX = devicePixelFontSize;
        const originY = devicePixelFontSize;
        if (decorationStyleSet?.color !== undefined) {
            this._ctx.fillStyle = `#${decorationStyleSet.color.toString(16).padStart(8, '0')}`;
        }
        else {
            this._ctx.fillStyle = colorMap[TokenMetadata.getForeground(tokenMetadata)];
        }
        this._ctx.textBaseline = 'top';
        if (decorationStyleSet?.opacity !== undefined) {
            this._ctx.globalAlpha = decorationStyleSet.opacity;
        }
        this._ctx.fillText(chars, originX + xSubPixelXOffset, originY);
        this._ctx.restore();
        const imageData = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
        if (this._antiAliasing === 'subpixel') {
            const bgR = parseInt(bg.substring(1, 3), 16);
            const bgG = parseInt(bg.substring(3, 5), 16);
            const bgB = parseInt(bg.substring(5, 7), 16);
            this._clearColor(imageData, bgR, bgG, bgB);
            this._ctx.putImageData(imageData, 0, 0);
        }
        this._findGlyphBoundingBox(imageData, this._workGlyph.boundingBox);
        // const offset = {
        // 	x: textMetrics.actualBoundingBoxLeft,
        // 	y: textMetrics.actualBoundingBoxAscent
        // };
        // const size = {
        // 	w: textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft,
        // 	y: textMetrics.actualBoundingBoxDescent + textMetrics.actualBoundingBoxAscent,
        // 	wInt: Math.ceil(textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft),
        // 	yInt: Math.ceil(textMetrics.actualBoundingBoxDescent + textMetrics.actualBoundingBoxAscent),
        // };
        // console.log(`${chars}_${fg}`, textMetrics, boundingBox, originX, originY, { width: boundingBox.right - boundingBox.left, height: boundingBox.bottom - boundingBox.top });
        this._workGlyph.source = this._canvas;
        this._workGlyph.originOffset.x = this._workGlyph.boundingBox.left - originX;
        this._workGlyph.originOffset.y = this._workGlyph.boundingBox.top - originY;
        this._workGlyph.fontBoundingBoxAscent = this._textMetrics.fontBoundingBoxAscent;
        this._workGlyph.fontBoundingBoxDescent = this._textMetrics.fontBoundingBoxDescent;
        // const result2: IRasterizedGlyph = {
        // 	source: this._canvas,
        // 	boundingBox: {
        // 		left: Math.floor(originX - textMetrics.actualBoundingBoxLeft),
        // 		right: Math.ceil(originX + textMetrics.actualBoundingBoxRight),
        // 		top: Math.floor(originY - textMetrics.actualBoundingBoxAscent),
        // 		bottom: Math.ceil(originY + textMetrics.actualBoundingBoxDescent),
        // 	},
        // 	originOffset: {
        // 		x: Math.floor(boundingBox.left - originX),
        // 		y: Math.floor(boundingBox.top - originY)
        // 	}
        // };
        // TODO: Verify result 1 and 2 are the same
        // if (result2.boundingBox.left > result.boundingBox.left) {
        // 	debugger;
        // }
        // if (result2.boundingBox.top > result.boundingBox.top) {
        // 	debugger;
        // }
        // if (result2.boundingBox.right < result.boundingBox.right) {
        // 	debugger;
        // }
        // if (result2.boundingBox.bottom < result.boundingBox.bottom) {
        // 	debugger;
        // }
        // if (JSON.stringify(result2.originOffset) !== JSON.stringify(result.originOffset)) {
        // 	debugger;
        // }
        return this._workGlyph;
    }
    _clearColor(imageData, r, g, b) {
        for (let offset = 0; offset < imageData.data.length; offset += 4) {
            // Check exact match
            if (imageData.data[offset] === r &&
                imageData.data[offset + 1] === g &&
                imageData.data[offset + 2] === b) {
                imageData.data[offset + 3] = 0;
            }
        }
    }
    // TODO: Does this even need to happen when measure text is used?
    _findGlyphBoundingBox(imageData, outBoundingBox) {
        const height = this._canvas.height;
        const width = this._canvas.width;
        let found = false;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const alphaOffset = y * width * 4 + x * 4 + 3;
                if (imageData.data[alphaOffset] !== 0) {
                    outBoundingBox.top = y;
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        outBoundingBox.left = 0;
        found = false;
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const alphaOffset = y * width * 4 + x * 4 + 3;
                if (imageData.data[alphaOffset] !== 0) {
                    outBoundingBox.left = x;
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        outBoundingBox.right = width;
        found = false;
        for (let x = width - 1; x >= outBoundingBox.left; x--) {
            for (let y = 0; y < height; y++) {
                const alphaOffset = y * width * 4 + x * 4 + 3;
                if (imageData.data[alphaOffset] !== 0) {
                    outBoundingBox.right = x;
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        outBoundingBox.bottom = outBoundingBox.top;
        found = false;
        for (let y = height - 1; y >= 0; y--) {
            for (let x = 0; x < width; x++) {
                const alphaOffset = y * width * 4 + x * 4 + 3;
                if (imageData.data[alphaOffset] !== 0) {
                    outBoundingBox.bottom = y;
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
    }
    getTextMetrics(text) {
        return this._ctx.measureText(text);
    }
}
__decorate([
    memoize
], GlyphRasterizer.prototype, "cacheKey", null);

export { GlyphRasterizer };

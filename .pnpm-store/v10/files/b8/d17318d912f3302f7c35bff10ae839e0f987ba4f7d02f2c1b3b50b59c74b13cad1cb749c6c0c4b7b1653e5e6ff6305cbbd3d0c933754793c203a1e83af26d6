import { getActiveWindow } from '../../../../base/browser/dom.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { NKeyMap } from '../../../../base/common/map.js';
import { ensureNonNullable } from '../gpuUtils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The slab allocator is a more complex allocator that places glyphs in square slabs of a fixed
 * size. Slabs are defined by a small range of glyphs sizes they can house, this places like-sized
 * glyphs in the same slab which reduces wasted space.
 *
 * Slabs also may contain "unused" regions on the left and bottom depending on the size of the
 * glyphs they include. This space is used to place very thin or short glyphs, which would otherwise
 * waste a lot of space in their own slab.
 */
class TextureAtlasSlabAllocator {
    constructor(_canvas, _textureIndex, options) {
        this._canvas = _canvas;
        this._textureIndex = _textureIndex;
        this._slabs = [];
        this._activeSlabsByDims = new NKeyMap();
        this._unusedRects = [];
        this._openRegionsByHeight = new Map();
        this._openRegionsByWidth = new Map();
        /** A set of all glyphs allocated, this is only tracked to enable debug related functionality */
        this._allocatedGlyphs = new Set();
        this._nextIndex = 0;
        this._ctx = ensureNonNullable(this._canvas.getContext('2d', {
            willReadFrequently: true
        }));
        this._slabW = Math.min(options?.slabW ?? (64 << Math.max(Math.floor(getActiveWindow().devicePixelRatio) - 1, 0)), this._canvas.width);
        this._slabH = Math.min(options?.slabH ?? this._slabW, this._canvas.height);
        this._slabsPerRow = Math.floor(this._canvas.width / this._slabW);
        this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
    }
    allocate(rasterizedGlyph) {
        // Find ideal slab, creating it if there is none suitable
        const glyphWidth = rasterizedGlyph.boundingBox.right - rasterizedGlyph.boundingBox.left + 1;
        const glyphHeight = rasterizedGlyph.boundingBox.bottom - rasterizedGlyph.boundingBox.top + 1;
        // The glyph does not fit into the atlas page, glyphs should never be this large in practice
        if (glyphWidth > this._canvas.width || glyphHeight > this._canvas.height) {
            throw new BugIndicatingError('Glyph is too large for the atlas page');
        }
        // The glyph does not fit into a slab
        if (glyphWidth > this._slabW || glyphHeight > this._slabH) {
            // Only if this is the allocator's first glyph, resize the slab size to fit the glyph.
            if (this._allocatedGlyphs.size > 0) {
                return undefined;
            }
            // Find the largest power of 2 devisor that the glyph fits into, this ensure there is no
            // wasted space outside the allocated slabs.
            let sizeCandidate = this._canvas.width;
            while (glyphWidth < sizeCandidate / 2 && glyphHeight < sizeCandidate / 2) {
                sizeCandidate /= 2;
            }
            this._slabW = sizeCandidate;
            this._slabH = sizeCandidate;
            this._slabsPerRow = Math.floor(this._canvas.width / this._slabW);
            this._slabsPerColumn = Math.floor(this._canvas.height / this._slabH);
        }
        // const dpr = getActiveWindow().devicePixelRatio;
        // TODO: Include font size as well as DPR in nearestXPixels calculation
        // Round slab glyph dimensions to the nearest x pixels, where x scaled with device pixel ratio
        // const nearestXPixels = Math.max(1, Math.floor(dpr / 0.5));
        // const nearestXPixels = Math.max(1, Math.floor(dpr));
        const desiredSlabSize = {
            // Nearest square number
            // TODO: This can probably be optimized
            // w: 1 << Math.ceil(Math.sqrt(glyphWidth)),
            // h: 1 << Math.ceil(Math.sqrt(glyphHeight)),
            // Nearest x px
            // w: Math.ceil(glyphWidth / nearestXPixels) * nearestXPixels,
            // h: Math.ceil(glyphHeight / nearestXPixels) * nearestXPixels,
            // Round odd numbers up
            // w: glyphWidth % 0 === 1 ? glyphWidth + 1 : glyphWidth,
            // h: glyphHeight % 0 === 1 ? glyphHeight + 1 : glyphHeight,
            // Exact number only
            w: glyphWidth,
            h: glyphHeight,
        };
        // Get any existing slab
        let slab = this._activeSlabsByDims.get(desiredSlabSize.w, desiredSlabSize.h);
        // Check if the slab is full
        if (slab) {
            const glyphsPerSlab = Math.floor(this._slabW / slab.entryW) * Math.floor(this._slabH / slab.entryH);
            if (slab.count >= glyphsPerSlab) {
                slab = undefined;
            }
        }
        let dx;
        let dy;
        // Search for suitable space in unused rectangles
        if (!slab) {
            // Only check availability for the smallest side
            if (glyphWidth < glyphHeight) {
                const openRegions = this._openRegionsByWidth.get(glyphWidth);
                if (openRegions?.length) {
                    // TODO: Don't search everything?
                    // Search from the end so we can typically pop it off the stack
                    for (let i = openRegions.length - 1; i >= 0; i--) {
                        const r = openRegions[i];
                        if (r.w >= glyphWidth && r.h >= glyphHeight) {
                            dx = r.x;
                            dy = r.y;
                            if (glyphWidth < r.w) {
                                this._unusedRects.push({
                                    x: r.x + glyphWidth,
                                    y: r.y,
                                    w: r.w - glyphWidth,
                                    h: glyphHeight
                                });
                            }
                            r.y += glyphHeight;
                            r.h -= glyphHeight;
                            if (r.h === 0) {
                                if (i === openRegions.length - 1) {
                                    openRegions.pop();
                                }
                                else {
                                    this._unusedRects.splice(i, 1);
                                }
                            }
                            break;
                        }
                    }
                }
            }
            else {
                const openRegions = this._openRegionsByHeight.get(glyphHeight);
                if (openRegions?.length) {
                    // TODO: Don't search everything?
                    // Search from the end so we can typically pop it off the stack
                    for (let i = openRegions.length - 1; i >= 0; i--) {
                        const r = openRegions[i];
                        if (r.w >= glyphWidth && r.h >= glyphHeight) {
                            dx = r.x;
                            dy = r.y;
                            if (glyphHeight < r.h) {
                                this._unusedRects.push({
                                    x: r.x,
                                    y: r.y + glyphHeight,
                                    w: glyphWidth,
                                    h: r.h - glyphHeight
                                });
                            }
                            r.x += glyphWidth;
                            r.w -= glyphWidth;
                            if (r.h === 0) {
                                if (i === openRegions.length - 1) {
                                    openRegions.pop();
                                }
                                else {
                                    this._unusedRects.splice(i, 1);
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
        // Create a new slab
        if (dx === undefined || dy === undefined) {
            if (!slab) {
                if (this._slabs.length >= this._slabsPerRow * this._slabsPerColumn) {
                    return undefined;
                }
                slab = {
                    x: Math.floor(this._slabs.length % this._slabsPerRow) * this._slabW,
                    y: Math.floor(this._slabs.length / this._slabsPerRow) * this._slabH,
                    entryW: desiredSlabSize.w,
                    entryH: desiredSlabSize.h,
                    count: 0
                };
                // Track unused regions to use for small glyphs
                // +-------------+----+
                // |             |    |
                // |             |    | <- Unused W region
                // |             |    |
                // |-------------+----+
                // |                  | <- Unused H region
                // +------------------+
                const unusedW = this._slabW % slab.entryW;
                const unusedH = this._slabH % slab.entryH;
                if (unusedW) {
                    addEntryToMapArray(this._openRegionsByWidth, unusedW, {
                        x: slab.x + this._slabW - unusedW,
                        w: unusedW,
                        y: slab.y,
                        h: this._slabH - (unusedH ?? 0)
                    });
                }
                if (unusedH) {
                    addEntryToMapArray(this._openRegionsByHeight, unusedH, {
                        x: slab.x,
                        w: this._slabW,
                        y: slab.y + this._slabH - unusedH,
                        h: unusedH
                    });
                }
                this._slabs.push(slab);
                this._activeSlabsByDims.set(slab, desiredSlabSize.w, desiredSlabSize.h);
            }
            const glyphsPerRow = Math.floor(this._slabW / slab.entryW);
            dx = slab.x + Math.floor(slab.count % glyphsPerRow) * slab.entryW;
            dy = slab.y + Math.floor(slab.count / glyphsPerRow) * slab.entryH;
            // Shift current row
            slab.count++;
        }
        // Draw glyph
        this._ctx.drawImage(rasterizedGlyph.source, 
        // source
        rasterizedGlyph.boundingBox.left, rasterizedGlyph.boundingBox.top, glyphWidth, glyphHeight, 
        // destination
        dx, dy, glyphWidth, glyphHeight);
        // Create glyph object
        const glyph = {
            pageIndex: this._textureIndex,
            glyphIndex: this._nextIndex++,
            x: dx,
            y: dy,
            w: glyphWidth,
            h: glyphHeight,
            originOffsetX: rasterizedGlyph.originOffset.x,
            originOffsetY: rasterizedGlyph.originOffset.y,
            fontBoundingBoxAscent: rasterizedGlyph.fontBoundingBoxAscent,
            fontBoundingBoxDescent: rasterizedGlyph.fontBoundingBoxDescent,
        };
        // Set the glyph
        this._allocatedGlyphs.add(glyph);
        return glyph;
    }
    getUsagePreview() {
        const w = this._canvas.width;
        const h = this._canvas.height;
        const canvas = new OffscreenCanvas(w, h);
        const ctx = ensureNonNullable(canvas.getContext('2d'));
        ctx.fillStyle = "#808080" /* UsagePreviewColors.Unused */;
        ctx.fillRect(0, 0, w, h);
        let slabEntryPixels = 0;
        let usedPixels = 0;
        let restrictedPixels = 0;
        const slabW = 64 << (Math.floor(getActiveWindow().devicePixelRatio) - 1);
        const slabH = slabW;
        // Draw wasted underneath glyphs first
        for (const slab of this._slabs) {
            let x = 0;
            let y = 0;
            for (let i = 0; i < slab.count; i++) {
                if (x + slab.entryW > slabW) {
                    x = 0;
                    y += slab.entryH;
                }
                ctx.fillStyle = "#FF0000" /* UsagePreviewColors.Wasted */;
                ctx.fillRect(slab.x + x, slab.y + y, slab.entryW, slab.entryH);
                slabEntryPixels += slab.entryW * slab.entryH;
                x += slab.entryW;
            }
            const entriesPerRow = Math.floor(slabW / slab.entryW);
            const entriesPerCol = Math.floor(slabH / slab.entryH);
            slab.entryW * entriesPerRow * slab.entryH * entriesPerCol;
        }
        // Draw glyphs
        for (const g of this._allocatedGlyphs) {
            usedPixels += g.w * g.h;
            ctx.fillStyle = "#4040FF" /* UsagePreviewColors.Used */;
            ctx.fillRect(g.x, g.y, g.w, g.h);
        }
        // Draw unused space on side
        const unusedRegions = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const r of unusedRegions) {
            ctx.fillStyle = "#FF000088" /* UsagePreviewColors.Restricted */;
            ctx.fillRect(r.x, r.y, r.w, r.h);
            restrictedPixels += r.w * r.h;
        }
        // Overlay actual glyphs on top
        ctx.globalAlpha = 0.5;
        ctx.drawImage(this._canvas, 0, 0);
        ctx.globalAlpha = 1;
        return canvas.convertToBlob();
    }
    getStats() {
        const w = this._canvas.width;
        const h = this._canvas.height;
        let slabEntryPixels = 0;
        let usedPixels = 0;
        let slabEdgePixels = 0;
        let wastedPixels = 0;
        let restrictedPixels = 0;
        const totalPixels = w * h;
        const slabW = 64 << (Math.floor(getActiveWindow().devicePixelRatio) - 1);
        const slabH = slabW;
        // Draw wasted underneath glyphs first
        for (const slab of this._slabs) {
            let x = 0;
            let y = 0;
            for (let i = 0; i < slab.count; i++) {
                if (x + slab.entryW > slabW) {
                    x = 0;
                    y += slab.entryH;
                }
                slabEntryPixels += slab.entryW * slab.entryH;
                x += slab.entryW;
            }
            const entriesPerRow = Math.floor(slabW / slab.entryW);
            const entriesPerCol = Math.floor(slabH / slab.entryH);
            const thisSlabPixels = slab.entryW * entriesPerRow * slab.entryH * entriesPerCol;
            slabEdgePixels += (slabW * slabH) - thisSlabPixels;
        }
        // Draw glyphs
        for (const g of this._allocatedGlyphs) {
            usedPixels += g.w * g.h;
        }
        // Draw unused space on side
        const unusedRegions = Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
        for (const r of unusedRegions) {
            restrictedPixels += r.w * r.h;
        }
        const edgeUsedPixels = slabEdgePixels - restrictedPixels;
        wastedPixels = slabEntryPixels - (usedPixels - edgeUsedPixels);
        // usedPixels += slabEdgePixels - restrictedPixels;
        const efficiency = usedPixels / (usedPixels + wastedPixels + restrictedPixels);
        return [
            `page[${this._textureIndex}]:`,
            `     Total: ${totalPixels}px (${w}x${h})`,
            `      Used: ${usedPixels}px (${((usedPixels / totalPixels) * 100).toFixed(2)}%)`,
            `    Wasted: ${wastedPixels}px (${((wastedPixels / totalPixels) * 100).toFixed(2)}%)`,
            `Restricted: ${restrictedPixels}px (${((restrictedPixels / totalPixels) * 100).toFixed(2)}%) (hard to allocate)`,
            `Efficiency: ${efficiency === 1 ? '100' : (efficiency * 100).toFixed(2)}%`,
            `     Slabs: ${this._slabs.length} of ${Math.floor(this._canvas.width / slabW) * Math.floor(this._canvas.height / slabH)}`
        ].join('\n');
    }
}
function addEntryToMapArray(map, key, entry) {
    let list = map.get(key);
    if (!list) {
        list = [];
        map.set(key, list);
    }
    list.push(entry);
}

export { TextureAtlasSlabAllocator };
